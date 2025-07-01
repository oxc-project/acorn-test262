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
        "name": "ListItem",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 18
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 24
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 19,
            "end": 24
          }
        ],
        "start": 18,
        "end": 25
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
              "name": "prev",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 36
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ListItem",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 38,
                      "end": 46
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TData",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 47,
                            "end": 52
                          },
                          "typeArguments": null,
                          "start": 47,
                          "end": 52
                        }
                      ],
                      "start": 46,
                      "end": 53
                    },
                    "start": 38,
                    "end": 53
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 56,
                    "end": 60
                  }
                ],
                "start": 38,
                "end": 60
              },
              "start": 36,
              "end": 60
            },
            "accessibility": null,
            "static": false,
            "start": 32,
            "end": 61
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 70
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ListItem",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 72,
                      "end": 80
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TData",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 81,
                            "end": 86
                          },
                          "typeArguments": null,
                          "start": 81,
                          "end": 86
                        }
                      ],
                      "start": 80,
                      "end": 87
                    },
                    "start": 72,
                    "end": 87
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 90,
                    "end": 94
                  }
                ],
                "start": 72,
                "end": 94
              },
              "start": 70,
              "end": 94
            },
            "accessibility": null,
            "static": false,
            "start": 66,
            "end": 95
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 100,
              "end": 104
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TData",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 106,
                  "end": 111
                },
                "typeArguments": null,
                "start": 106,
                "end": 111
              },
              "start": 104,
              "end": 111
            },
            "accessibility": null,
            "static": false,
            "start": 100,
            "end": 112
          }
        ],
        "start": 26,
        "end": 114
      },
      "declare": false,
      "start": 0,
      "end": 114
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IteratorFn",
        "optional": false,
        "typeAnnotation": null,
        "start": 120,
        "end": 130
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 136
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 131,
            "end": 136
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TResult",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 145
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 138,
            "end": 145
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TContext",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 155
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "List",
                "optional": false,
                "typeAnnotation": null,
                "start": 158,
                "end": 162
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TData",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 163,
                      "end": 168
                    },
                    "typeArguments": null,
                    "start": 163,
                    "end": 168
                  }
                ],
                "start": 162,
                "end": 169
              },
              "start": 158,
              "end": 169
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 147,
            "end": 169
          }
        ],
        "start": 130,
        "end": 170
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "this",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TContext",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 180,
                  "end": 188
                },
                "typeArguments": null,
                "start": 180,
                "end": 188
              },
              "start": 178,
              "end": 188
            },
            "start": 174,
            "end": 188
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "item",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TData",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 196,
                  "end": 201
                },
                "typeArguments": null,
                "start": 196,
                "end": 201
              },
              "start": 194,
              "end": 201
            },
            "start": 190,
            "end": 201
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ListItem",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 209,
                  "end": 217
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TData",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 218,
                        "end": 223
                      },
                      "typeArguments": null,
                      "start": 218,
                      "end": 223
                    }
                  ],
                  "start": 217,
                  "end": 224
                },
                "start": 209,
                "end": 224
              },
              "start": 207,
              "end": 224
            },
            "start": 203,
            "end": 224
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "list",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "List",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 232,
                  "end": 236
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TData",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 237,
                        "end": 242
                      },
                      "typeArguments": null,
                      "start": 237,
                      "end": 242
                    }
                  ],
                  "start": 236,
                  "end": 243
                },
                "start": 232,
                "end": 243
              },
              "start": 230,
              "end": 243
            },
            "start": 226,
            "end": 243
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
              "start": 248,
              "end": 255
            },
            "typeArguments": null,
            "start": 248,
            "end": 255
          },
          "start": 245,
          "end": 255
        },
        "start": 173,
        "end": 255
      },
      "declare": false,
      "start": 115,
      "end": 256
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FilterFn",
        "optional": false,
        "typeAnnotation": null,
        "start": 262,
        "end": 270
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null,
              "start": 271,
              "end": 276
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 271,
            "end": 276
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TResult",
              "optional": false,
              "typeAnnotation": null,
              "start": 278,
              "end": 285
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TData",
                "optional": false,
                "typeAnnotation": null,
                "start": 294,
                "end": 299
              },
              "typeArguments": null,
              "start": 294,
              "end": 299
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 278,
            "end": 299
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TContext",
              "optional": false,
              "typeAnnotation": null,
              "start": 301,
              "end": 309
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "List",
                "optional": false,
                "typeAnnotation": null,
                "start": 312,
                "end": 316
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TData",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 317,
                      "end": 322
                    },
                    "typeArguments": null,
                    "start": 317,
                    "end": 322
                  }
                ],
                "start": 316,
                "end": 323
              },
              "start": 312,
              "end": 323
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 301,
            "end": 323
          }
        ],
        "start": 270,
        "end": 324
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "this",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TContext",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 334,
                  "end": 342
                },
                "typeArguments": null,
                "start": 334,
                "end": 342
              },
              "start": 332,
              "end": 342
            },
            "start": 328,
            "end": 342
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "item",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TData",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 350,
                  "end": 355
                },
                "typeArguments": null,
                "start": 350,
                "end": 355
              },
              "start": 348,
              "end": 355
            },
            "start": 344,
            "end": 355
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ListItem",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 363,
                  "end": 371
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TData",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 372,
                        "end": 377
                      },
                      "typeArguments": null,
                      "start": 372,
                      "end": 377
                    }
                  ],
                  "start": 371,
                  "end": 378
                },
                "start": 363,
                "end": 378
              },
              "start": 361,
              "end": 378
            },
            "start": 357,
            "end": 378
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "list",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "List",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 386,
                  "end": 390
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TData",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 391,
                        "end": 396
                      },
                      "typeArguments": null,
                      "start": 391,
                      "end": 396
                    }
                  ],
                  "start": 390,
                  "end": 397
                },
                "start": 386,
                "end": 397
              },
              "start": 384,
              "end": 397
            },
            "start": 380,
            "end": 397
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "parameterName": {
              "type": "Identifier",
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null,
              "start": 402,
              "end": 406
            },
            "asserts": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TResult",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 410,
                  "end": 417
                },
                "typeArguments": null,
                "start": 410,
                "end": 417
              },
              "start": 410,
              "end": 417
            },
            "start": 402,
            "end": 417
          },
          "start": 399,
          "end": 417
        },
        "start": 327,
        "end": 417
      },
      "declare": false,
      "start": 257,
      "end": 418
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "List",
        "optional": false,
        "typeAnnotation": null,
        "start": 434,
        "end": 438
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null,
              "start": 439,
              "end": 444
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 439,
            "end": 444
          }
        ],
        "start": 438,
        "end": 445
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
              "name": "filter",
              "optional": false,
              "typeAnnotation": null,
              "start": 452,
              "end": 458
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
                      "name": "TContext",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 459,
                      "end": 467
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 459,
                    "end": 467
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TResult",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 469,
                      "end": 476
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TData",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 485,
                        "end": 490
                      },
                      "typeArguments": null,
                      "start": 485,
                      "end": 490
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 469,
                    "end": 490
                  }
                ],
                "start": 458,
                "end": 491
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "FilterFn",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 496,
                        "end": 504
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TData",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 505,
                              "end": 510
                            },
                            "typeArguments": null,
                            "start": 505,
                            "end": 510
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TResult",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 512,
                              "end": 519
                            },
                            "typeArguments": null,
                            "start": 512,
                            "end": 519
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TContext",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 521,
                              "end": 529
                            },
                            "typeArguments": null,
                            "start": 521,
                            "end": 529
                          }
                        ],
                        "start": 504,
                        "end": 530
                      },
                      "start": 496,
                      "end": 530
                    },
                    "start": 494,
                    "end": 530
                  },
                  "start": 492,
                  "end": 530
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TContext",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 541,
                        "end": 549
                      },
                      "typeArguments": null,
                      "start": 541,
                      "end": 549
                    },
                    "start": 539,
                    "end": 549
                  },
                  "start": 532,
                  "end": 549
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "List",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 552,
                    "end": 556
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
                          "start": 557,
                          "end": 564
                        },
                        "typeArguments": null,
                        "start": 557,
                        "end": 564
                      }
                    ],
                    "start": 556,
                    "end": 565
                  },
                  "start": 552,
                  "end": 565
                },
                "start": 550,
                "end": 565
              },
              "body": null,
              "expression": false,
              "start": 458,
              "end": 566
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 452,
            "end": 566
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "filter",
              "optional": false,
              "typeAnnotation": null,
              "start": 571,
              "end": 577
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
                      "name": "TResult",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 578,
                      "end": 585
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TData",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 594,
                        "end": 599
                      },
                      "typeArguments": null,
                      "start": 594,
                      "end": 599
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 578,
                    "end": 599
                  }
                ],
                "start": 577,
                "end": 600
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "FilterFn",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 605,
                        "end": 613
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TData",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 614,
                              "end": 619
                            },
                            "typeArguments": null,
                            "start": 614,
                            "end": 619
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TResult",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 621,
                              "end": 628
                            },
                            "typeArguments": null,
                            "start": 621,
                            "end": 628
                          }
                        ],
                        "start": 613,
                        "end": 629
                      },
                      "start": 605,
                      "end": 629
                    },
                    "start": 603,
                    "end": 629
                  },
                  "start": 601,
                  "end": 629
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "List",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 632,
                    "end": 636
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
                          "start": 637,
                          "end": 644
                        },
                        "typeArguments": null,
                        "start": 637,
                        "end": 644
                      }
                    ],
                    "start": 636,
                    "end": 645
                  },
                  "start": 632,
                  "end": 645
                },
                "start": 630,
                "end": 645
              },
              "body": null,
              "expression": false,
              "start": 577,
              "end": 646
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 571,
            "end": 646
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "filter",
              "optional": false,
              "typeAnnotation": null,
              "start": 651,
              "end": 657
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
                      "name": "TContext",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 658,
                      "end": 666
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 658,
                    "end": 666
                  }
                ],
                "start": 657,
                "end": 667
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IteratorFn",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 672,
                        "end": 682
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TData",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 683,
                              "end": 688
                            },
                            "typeArguments": null,
                            "start": 683,
                            "end": 688
                          },
                          {
                            "type": "TSBooleanKeyword",
                            "start": 690,
                            "end": 697
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TContext",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 699,
                              "end": 707
                            },
                            "typeArguments": null,
                            "start": 699,
                            "end": 707
                          }
                        ],
                        "start": 682,
                        "end": 708
                      },
                      "start": 672,
                      "end": 708
                    },
                    "start": 670,
                    "end": 708
                  },
                  "start": 668,
                  "end": 708
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TContext",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 719,
                        "end": 727
                      },
                      "typeArguments": null,
                      "start": 719,
                      "end": 727
                    },
                    "start": 717,
                    "end": 727
                  },
                  "start": 710,
                  "end": 727
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "List",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 730,
                    "end": 734
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TData",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 735,
                          "end": 740
                        },
                        "typeArguments": null,
                        "start": 735,
                        "end": 740
                      }
                    ],
                    "start": 734,
                    "end": 741
                  },
                  "start": 730,
                  "end": 741
                },
                "start": 728,
                "end": 741
              },
              "body": null,
              "expression": false,
              "start": 657,
              "end": 742
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 651,
            "end": 742
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "filter",
              "optional": false,
              "typeAnnotation": null,
              "start": 747,
              "end": 753
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IteratorFn",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 758,
                        "end": 768
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TData",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 769,
                              "end": 774
                            },
                            "typeArguments": null,
                            "start": 769,
                            "end": 774
                          },
                          {
                            "type": "TSBooleanKeyword",
                            "start": 776,
                            "end": 783
                          }
                        ],
                        "start": 768,
                        "end": 784
                      },
                      "start": 758,
                      "end": 784
                    },
                    "start": 756,
                    "end": 784
                  },
                  "start": 754,
                  "end": 784
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "List",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 787,
                    "end": 791
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TData",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 792,
                          "end": 797
                        },
                        "typeArguments": null,
                        "start": 792,
                        "end": 797
                      }
                    ],
                    "start": 791,
                    "end": 798
                  },
                  "start": 787,
                  "end": 798
                },
                "start": 785,
                "end": 798
              },
              "body": null,
              "expression": false,
              "start": 753,
              "end": 799
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 747,
            "end": 799
          }
        ],
        "start": 446,
        "end": 801
      },
      "abstract": false,
      "declare": true,
      "start": 420,
      "end": 801
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 812,
        "end": 816
      },
      "typeParameters": null,
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 823,
              "end": 824
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 826,
                "end": 832
              },
              "start": 824,
              "end": 832
            },
            "accessibility": null,
            "static": false,
            "start": 823,
            "end": 833
          }
        ],
        "start": 817,
        "end": 835
      },
      "declare": false,
      "start": 802,
      "end": 835
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
            "name": "list2",
            "optional": false,
            "typeAnnotation": null,
            "start": 842,
            "end": 847
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "List",
              "optional": false,
              "typeAnnotation": null,
              "start": 854,
              "end": 858
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 859,
                        "end": 863
                      },
                      "typeArguments": null,
                      "start": 859,
                      "end": 863
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 866,
                      "end": 870
                    }
                  ],
                  "start": 859,
                  "end": 870
                }
              ],
              "start": 858,
              "end": 871
            },
            "arguments": [],
            "start": 850,
            "end": 873
          },
          "definite": false,
          "start": 842,
          "end": 873
        }
      ],
      "declare": false,
      "start": 836,
      "end": 874
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
            "name": "filter1",
            "optional": false,
            "typeAnnotation": null,
            "start": 881,
            "end": 888
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "list2",
                "optional": false,
                "typeAnnotation": null,
                "start": 891,
                "end": 896
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 897,
                "end": 903
              },
              "optional": false,
              "computed": false,
              "start": 891,
              "end": 903
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 913,
                    "end": 917
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "node",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 919,
                    "end": 923
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "list",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 925,
                    "end": 929
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "parameterName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 932,
                      "end": 936
                    },
                    "asserts": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Test",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 940,
                          "end": 944
                        },
                        "typeArguments": null,
                        "start": 940,
                        "end": 944
                      },
                      "start": 940,
                      "end": 944
                    },
                    "start": 932,
                    "end": 944
                  },
                  "start": 930,
                  "end": 944
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 951,
                          "end": 955
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 956,
                          "end": 957
                        },
                        "optional": false,
                        "computed": false,
                        "start": 951,
                        "end": 957
                      },
                      "directive": null,
                      "start": 951,
                      "end": 958
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 985,
                        "end": 989
                      },
                      "directive": null,
                      "start": 985,
                      "end": 990
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1022,
                        "end": 1026
                      },
                      "directive": null,
                      "start": 1022,
                      "end": 1027
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "list",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1069,
                        "end": 1073
                      },
                      "directive": null,
                      "start": 1069,
                      "end": 1074
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "UnaryExpression",
                        "operator": "!",
                        "argument": {
                          "type": "UnaryExpression",
                          "operator": "!",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1121,
                            "end": 1125
                          },
                          "prefix": true,
                          "start": 1120,
                          "end": 1125
                        },
                        "prefix": true,
                        "start": 1119,
                        "end": 1125
                      },
                      "start": 1112,
                      "end": 1126
                    }
                  ],
                  "start": 945,
                  "end": 1128
                },
                "expression": false,
                "start": 904,
                "end": 1128
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1131,
                      "end": 1132
                    },
                    "value": {
                      "type": "Literal",
                      "value": "c",
                      "raw": "'c'",
                      "start": 1134,
                      "end": 1137
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1131,
                    "end": 1137
                  }
                ],
                "start": 1130,
                "end": 1138
              }
            ],
            "optional": false,
            "start": 891,
            "end": 1139
          },
          "definite": false,
          "start": 881,
          "end": 1139
        }
      ],
      "declare": false,
      "start": 875,
      "end": 1140
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "List",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1150,
                  "end": 1154
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1155,
                        "end": 1159
                      },
                      "typeArguments": null,
                      "start": 1155,
                      "end": 1159
                    }
                  ],
                  "start": 1154,
                  "end": 1160
                },
                "start": 1150,
                "end": 1160
              },
              "start": 1148,
              "end": 1160
            },
            "start": 1147,
            "end": 1160
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "filter1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1163,
            "end": 1170
          },
          "definite": false,
          "start": 1147,
          "end": 1170
        }
      ],
      "declare": false,
      "start": 1141,
      "end": 1171
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1197
}
```
