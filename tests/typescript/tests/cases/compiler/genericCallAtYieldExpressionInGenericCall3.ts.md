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
        "name": "ReadonlyRecord",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 19
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 28
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 37,
                  "end": 43
                },
                {
                  "type": "TSSymbolKeyword",
                  "start": 46,
                  "end": 52
                }
              ],
              "start": 37,
              "end": 52
            },
            "default": null,
            "in": true,
            "out": true,
            "const": false,
            "start": 20,
            "end": 52
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 59
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": true,
            "const": false,
            "start": 54,
            "end": 59
          }
        ],
        "start": 19,
        "end": 60
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 77,
          "end": 78
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 83
          },
          "typeArguments": null,
          "start": 82,
          "end": 83
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 87
          },
          "typeArguments": null,
          "start": 86,
          "end": 87
        },
        "optional": false,
        "readonly": true,
        "start": 63,
        "end": 90
      },
      "declare": false,
      "start": 0,
      "end": 91
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Success",
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 105
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
              "start": 106,
              "end": 107
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 106,
            "end": 107
          }
        ],
        "start": 105,
        "end": 108
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
            "start": 111,
            "end": 112
          },
          "typeArguments": null,
          "start": 111,
          "end": 112
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Micro",
            "optional": false,
            "typeAnnotation": null,
            "start": 121,
            "end": 126
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 133,
                    "end": 135
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 133,
                  "end": 135
                },
                "start": 127,
                "end": 135
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 143,
                    "end": 145
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 143,
                  "end": 145
                },
                "start": 137,
                "end": 145
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 153,
                    "end": 155
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 153,
                  "end": 155
                },
                "start": 147,
                "end": 155
              }
            ],
            "start": 126,
            "end": 156
          },
          "start": 121,
          "end": 156
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "_A",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 161
          },
          "typeArguments": null,
          "start": 159,
          "end": 161
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 164,
          "end": 169
        },
        "start": 111,
        "end": 169
      },
      "declare": false,
      "start": 93,
      "end": 170
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MicroIterator",
        "optional": false,
        "typeAnnotation": null,
        "start": 182,
        "end": 195
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
              "start": 196,
              "end": 197
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Micro",
                "optional": false,
                "typeAnnotation": null,
                "start": 206,
                "end": 211
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 212,
                    "end": 215
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 217,
                    "end": 220
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 222,
                    "end": 225
                  }
                ],
                "start": 211,
                "end": 226
              },
              "start": 206,
              "end": 226
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 196,
            "end": 226
          }
        ],
        "start": 195,
        "end": 227
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
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 232,
              "end": 236
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
                  "start": 240,
                  "end": 244
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
                      "start": 246,
                      "end": 259
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 260,
                          "end": 263
                        }
                      ],
                      "start": 259,
                      "end": 264
                    },
                    "start": 246,
                    "end": 264
                  },
                  "start": 244,
                  "end": 264
                },
                "value": null,
                "start": 237,
                "end": 264
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
                  "start": 267,
                  "end": 281
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
                        "start": 282,
                        "end": 283
                      },
                      "typeArguments": null,
                      "start": 282,
                      "end": 283
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Success",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 285,
                        "end": 292
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
                              "start": 293,
                              "end": 294
                            },
                            "typeArguments": null,
                            "start": 293,
                            "end": 294
                          }
                        ],
                        "start": 292,
                        "end": 295
                      },
                      "start": 285,
                      "end": 295
                    }
                  ],
                  "start": 281,
                  "end": 296
                },
                "start": 267,
                "end": 296
              },
              "start": 265,
              "end": 296
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 232,
            "end": 297
          }
        ],
        "start": 228,
        "end": 299
      },
      "declare": false,
      "start": 172,
      "end": 299
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Micro",
        "optional": false,
        "typeAnnotation": null,
        "start": 311,
        "end": 316
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
              "start": 321,
              "end": 322
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": true,
            "const": false,
            "start": 317,
            "end": 322
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 328,
              "end": 329
            },
            "constraint": null,
            "default": {
              "type": "TSNeverKeyword",
              "start": 332,
              "end": 337
            },
            "in": false,
            "out": true,
            "const": false,
            "start": 324,
            "end": 337
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 343,
              "end": 344
            },
            "constraint": null,
            "default": {
              "type": "TSNeverKeyword",
              "start": 347,
              "end": 352
            },
            "in": false,
            "out": true,
            "const": false,
            "start": 339,
            "end": 352
          }
        ],
        "start": 316,
        "end": 353
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
              "name": "_A",
              "optional": false,
              "typeAnnotation": null,
              "start": 358,
              "end": 360
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
                  "start": 362,
                  "end": 363
                },
                "typeArguments": null,
                "start": 362,
                "end": 363
              },
              "start": 360,
              "end": 363
            },
            "accessibility": null,
            "static": false,
            "start": 358,
            "end": 364
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_E",
              "optional": false,
              "typeAnnotation": null,
              "start": 367,
              "end": 369
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
                  "start": 371,
                  "end": 372
                },
                "typeArguments": null,
                "start": 371,
                "end": 372
              },
              "start": 369,
              "end": 372
            },
            "accessibility": null,
            "static": false,
            "start": 367,
            "end": 373
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_R",
              "optional": false,
              "typeAnnotation": null,
              "start": 376,
              "end": 378
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 380,
                  "end": 381
                },
                "typeArguments": null,
                "start": 380,
                "end": 381
              },
              "start": 378,
              "end": 381
            },
            "accessibility": null,
            "static": false,
            "start": 376,
            "end": 382
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
                "start": 386,
                "end": 392
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 393,
                "end": 401
              },
              "optional": false,
              "computed": false,
              "start": 386,
              "end": 401
            },
            "computed": true,
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
                  "name": "MicroIterator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 406,
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
                        "name": "Micro",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 420,
                        "end": 425
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
                              "start": 426,
                              "end": 427
                            },
                            "typeArguments": null,
                            "start": 426,
                            "end": 427
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "E",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 429,
                              "end": 430
                            },
                            "typeArguments": null,
                            "start": 429,
                            "end": 430
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 432,
                              "end": 433
                            },
                            "typeArguments": null,
                            "start": 432,
                            "end": 433
                          }
                        ],
                        "start": 425,
                        "end": 434
                      },
                      "start": 420,
                      "end": 434
                    }
                  ],
                  "start": 419,
                  "end": 435
                },
                "start": 406,
                "end": 435
              },
              "start": 404,
              "end": 435
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 385,
            "end": 436
          }
        ],
        "start": 354,
        "end": 438
      },
      "declare": false,
      "start": 301,
      "end": 438
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "runPromise",
        "optional": false,
        "typeAnnotation": null,
        "start": 457,
        "end": 467
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
              "start": 468,
              "end": 469
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 468,
            "end": 469
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 471,
              "end": 472
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 471,
            "end": 472
          }
        ],
        "start": 467,
        "end": 473
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "effect",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Micro",
                "optional": false,
                "typeAnnotation": null,
                "start": 482,
                "end": 487
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
                      "start": 488,
                      "end": 489
                    },
                    "typeArguments": null,
                    "start": 488,
                    "end": 489
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 491,
                      "end": 492
                    },
                    "typeArguments": null,
                    "start": 491,
                    "end": 492
                  }
                ],
                "start": 487,
                "end": 493
              },
              "start": 482,
              "end": 493
            },
            "start": 480,
            "end": 493
          },
          "start": 474,
          "end": 493
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 496,
            "end": 503
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
                  "start": 504,
                  "end": 505
                },
                "typeArguments": null,
                "start": 504,
                "end": 505
              }
            ],
            "start": 503,
            "end": 506
          },
          "start": 496,
          "end": 506
        },
        "start": 494,
        "end": 506
      },
      "body": null,
      "expression": false,
      "start": 440,
      "end": 507
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "gen",
        "optional": false,
        "typeAnnotation": null,
        "start": 526,
        "end": 529
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
              "start": 530,
              "end": 533
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Micro",
                "optional": false,
                "typeAnnotation": null,
                "start": 542,
                "end": 547
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 548,
                    "end": 551
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 553,
                    "end": 556
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 558,
                    "end": 561
                  }
                ],
                "start": 547,
                "end": 562
              },
              "start": 542,
              "end": 562
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 530,
            "end": 562
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "AEff",
              "optional": false,
              "typeAnnotation": null,
              "start": 564,
              "end": 568
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 564,
            "end": 568
          }
        ],
        "start": 529,
        "end": 569
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
              "params": [],
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
                    "start": 585,
                    "end": 594
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
                          "start": 595,
                          "end": 598
                        },
                        "typeArguments": null,
                        "start": 595,
                        "end": 598
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "AEff",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 600,
                          "end": 604
                        },
                        "typeArguments": null,
                        "start": 600,
                        "end": 604
                      },
                      {
                        "type": "TSNeverKeyword",
                        "start": 606,
                        "end": 611
                      }
                    ],
                    "start": 594,
                    "end": 612
                  },
                  "start": 585,
                  "end": 612
                },
                "start": 582,
                "end": 612
              },
              "start": 579,
              "end": 612
            },
            "start": 577,
            "end": 612
          },
          "start": 573,
          "end": 612
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Micro",
            "optional": false,
            "typeAnnotation": null,
            "start": 617,
            "end": 622
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AEff",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 623,
                  "end": 627
                },
                "typeArguments": null,
                "start": 623,
                "end": 627
              },
              {
                "type": "TSAnyKeyword",
                "start": 629,
                "end": 632
              },
              {
                "type": "TSNeverKeyword",
                "start": 634,
                "end": 639
              }
            ],
            "start": 622,
            "end": 640
          },
          "start": 617,
          "end": 640
        },
        "start": 615,
        "end": 640
      },
      "body": null,
      "expression": false,
      "start": 509,
      "end": 641
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
            "name": "traverse",
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
                            "start": 672,
                            "end": 673
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 672,
                          "end": 673
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 675,
                            "end": 676
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 675,
                          "end": 676
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "O",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 678,
                            "end": 679
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 678,
                          "end": 679
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "E",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 681,
                            "end": 682
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 681,
                          "end": 682
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 684,
                            "end": 685
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 684,
                          "end": 685
                        }
                      ],
                      "start": 671,
                      "end": 686
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f",
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
                                      "start": 699,
                                      "end": 700
                                    },
                                    "typeArguments": null,
                                    "start": 699,
                                    "end": 700
                                  },
                                  "start": 697,
                                  "end": 700
                                },
                                "start": 696,
                                "end": 700
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Micro",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 705,
                                  "end": 710
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
                                        "start": 711,
                                        "end": 712
                                      },
                                      "typeArguments": null,
                                      "start": 711,
                                      "end": 712
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "E",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 714,
                                        "end": 715
                                      },
                                      "typeArguments": null,
                                      "start": 714,
                                      "end": 715
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "O",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 717,
                                        "end": 718
                                      },
                                      "typeArguments": null,
                                      "start": 717,
                                      "end": 718
                                    }
                                  ],
                                  "start": 710,
                                  "end": 719
                                },
                                "start": 705,
                                "end": 719
                              },
                              "start": 702,
                              "end": 719
                            },
                            "start": 695,
                            "end": 719
                          },
                          "start": 693,
                          "end": 719
                        },
                        "start": 692,
                        "end": 719
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
                                  "name": "ReadonlyRecord",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 738,
                                  "end": 752
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSStringKeyword",
                                      "start": 753,
                                      "end": 759
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "A",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 761,
                                        "end": 762
                                      },
                                      "typeArguments": null,
                                      "start": 761,
                                      "end": 762
                                    }
                                  ],
                                  "start": 752,
                                  "end": 763
                                },
                                "start": 738,
                                "end": 763
                              },
                              "start": 736,
                              "end": 763
                            },
                            "start": 732,
                            "end": 763
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Micro",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 772,
                              "end": 777
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ReadonlyRecord",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 778,
                                    "end": 792
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSStringKeyword",
                                        "start": 793,
                                        "end": 799
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "B",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 801,
                                          "end": 802
                                        },
                                        "typeArguments": null,
                                        "start": 801,
                                        "end": 802
                                      }
                                    ],
                                    "start": 792,
                                    "end": 803
                                  },
                                  "start": 778,
                                  "end": 803
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "E",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 805,
                                    "end": 806
                                  },
                                  "typeArguments": null,
                                  "start": 805,
                                  "end": 806
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "O",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 808,
                                    "end": 809
                                  },
                                  "typeArguments": null,
                                  "start": 808,
                                  "end": 809
                                }
                              ],
                              "start": 777,
                              "end": 810
                            },
                            "start": 772,
                            "end": 810
                          },
                          "start": 769,
                          "end": 810
                        },
                        "start": 726,
                        "end": 810
                      },
                      "start": 724,
                      "end": 810
                    },
                    "start": 671,
                    "end": 811
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
                            "start": 815,
                            "end": 816
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 815,
                          "end": 816
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "O",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 818,
                            "end": 819
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 818,
                          "end": 819
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "E",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 821,
                            "end": 822
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 821,
                          "end": 822
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 824,
                            "end": 825
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 824,
                          "end": 825
                        }
                      ],
                      "start": 814,
                      "end": 826
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
                              "name": "ReadonlyRecord",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 838,
                              "end": 852
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 853,
                                  "end": 859
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 861,
                                    "end": 862
                                  },
                                  "typeArguments": null,
                                  "start": 861,
                                  "end": 862
                                }
                              ],
                              "start": 852,
                              "end": 863
                            },
                            "start": 838,
                            "end": 863
                          },
                          "start": 836,
                          "end": 863
                        },
                        "start": 832,
                        "end": 863
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f",
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
                                      "start": 876,
                                      "end": 877
                                    },
                                    "typeArguments": null,
                                    "start": 876,
                                    "end": 877
                                  },
                                  "start": 874,
                                  "end": 877
                                },
                                "start": 873,
                                "end": 877
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Micro",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 882,
                                  "end": 887
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
                                        "start": 888,
                                        "end": 889
                                      },
                                      "typeArguments": null,
                                      "start": 888,
                                      "end": 889
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "E",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 891,
                                        "end": 892
                                      },
                                      "typeArguments": null,
                                      "start": 891,
                                      "end": 892
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "O",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 894,
                                        "end": 895
                                      },
                                      "typeArguments": null,
                                      "start": 894,
                                      "end": 895
                                    }
                                  ],
                                  "start": 887,
                                  "end": 896
                                },
                                "start": 882,
                                "end": 896
                              },
                              "start": 879,
                              "end": 896
                            },
                            "start": 872,
                            "end": 896
                          },
                          "start": 870,
                          "end": 896
                        },
                        "start": 869,
                        "end": 896
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Micro",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 903,
                          "end": 908
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ReadonlyRecord",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 909,
                                "end": 923
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSStringKeyword",
                                    "start": 924,
                                    "end": 930
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 932,
                                      "end": 933
                                    },
                                    "typeArguments": null,
                                    "start": 932,
                                    "end": 933
                                  }
                                ],
                                "start": 923,
                                "end": 934
                              },
                              "start": 909,
                              "end": 934
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "E",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 936,
                                "end": 937
                              },
                              "typeArguments": null,
                              "start": 936,
                              "end": 937
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "O",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 939,
                                "end": 940
                              },
                              "typeArguments": null,
                              "start": 939,
                              "end": 940
                            }
                          ],
                          "start": 908,
                          "end": 941
                        },
                        "start": 903,
                        "end": 941
                      },
                      "start": 901,
                      "end": 941
                    },
                    "start": 814,
                    "end": 942
                  }
                ],
                "start": 667,
                "end": 944
              },
              "start": 665,
              "end": 944
            },
            "start": 657,
            "end": 944
          },
          "init": null,
          "definite": false,
          "start": 657,
          "end": 944
        }
      ],
      "declare": true,
      "start": 643,
      "end": 945
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "runPromise",
          "optional": false,
          "typeAnnotation": null,
          "start": 947,
          "end": 957
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "gen",
              "optional": false,
              "typeAnnotation": null,
              "start": 961,
              "end": 964
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "FunctionExpression",
                "id": null,
                "generator": true,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
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
                            "name": "traverse",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 991,
                            "end": 999
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
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1002,
                                    "end": 1003
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 1005,
                                    "end": 1006
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 1002,
                                  "end": 1006
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "b",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1008,
                                    "end": 1009
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": 2,
                                    "raw": "2",
                                    "start": 1011,
                                    "end": 1012
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 1008,
                                  "end": 1012
                                }
                              ],
                              "start": 1000,
                              "end": 1014
                            },
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
                                  "start": 1017,
                                  "end": 1018
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "gen",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1029,
                                  "end": 1032
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "FunctionExpression",
                                    "id": null,
                                    "generator": true,
                                    "async": false,
                                    "declare": false,
                                    "typeParameters": null,
                                    "params": [],
                                    "returnType": null,
                                    "body": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "ReturnStatement",
                                          "argument": {
                                            "type": "BinaryExpression",
                                            "left": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "n",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1063,
                                              "end": 1064
                                            },
                                            "operator": "+",
                                            "right": {
                                              "type": "Literal",
                                              "value": 1,
                                              "raw": "1",
                                              "start": 1067,
                                              "end": 1068
                                            },
                                            "start": 1063,
                                            "end": 1068
                                          },
                                          "start": 1056,
                                          "end": 1069
                                        }
                                      ],
                                      "start": 1046,
                                      "end": 1077
                                    },
                                    "expression": false,
                                    "start": 1033,
                                    "end": 1077
                                  }
                                ],
                                "optional": false,
                                "start": 1029,
                                "end": 1078
                              },
                              "id": null,
                              "generator": false,
                              "start": 1016,
                              "end": 1078
                            }
                          ],
                          "optional": false,
                          "start": 991,
                          "end": 1085
                        },
                        "start": 984,
                        "end": 1085
                      },
                      "directive": null,
                      "start": 984,
                      "end": 1086
                    }
                  ],
                  "start": 978,
                  "end": 1090
                },
                "expression": false,
                "start": 965,
                "end": 1090
              }
            ],
            "optional": false,
            "start": 961,
            "end": 1091
          }
        ],
        "optional": false,
        "start": 947,
        "end": 1094
      },
      "directive": null,
      "start": 947,
      "end": 1095
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1095
}
```
