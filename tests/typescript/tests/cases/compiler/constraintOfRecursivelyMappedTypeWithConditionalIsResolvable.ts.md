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
        "name": "Map",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 70
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
              "start": 71,
              "end": 72
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 71,
            "end": 72
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 75
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 74,
            "end": 75
          }
        ],
        "start": 70,
        "end": 76
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 77,
        "end": 91
      },
      "declare": false,
      "start": 57,
      "end": 91
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ImmutableTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 105,
          "end": 119
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IImmutableMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 135
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 136,
                "end": 139
              }
            ],
            "start": 135,
            "end": 140
          },
          "start": 122,
          "end": 140
        },
        "declare": false,
        "start": 100,
        "end": 141
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 93,
      "end": 141
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ImmutableModel",
          "optional": false,
          "typeAnnotation": null,
          "start": 155,
          "end": 169
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
                "start": 170,
                "end": 171
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 170,
              "end": 171
            }
          ],
          "start": 169,
          "end": 172
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 178,
            "end": 179
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
                "start": 189,
                "end": 190
              },
              "typeArguments": null,
              "start": 189,
              "end": 190
            },
            "start": 183,
            "end": 190
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 193,
                  "end": 194
                },
                "typeArguments": null,
                "start": 193,
                "end": 194
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
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
              "end": 197
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ImmutableTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 206,
                "end": 220
              },
              "typeArguments": null,
              "start": 206,
              "end": 220
            },
            "trueType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 223,
                  "end": 224
                },
                "typeArguments": null,
                "start": 223,
                "end": 224
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 225,
                  "end": 226
                },
                "typeArguments": null,
                "start": 225,
                "end": 226
              },
              "start": 223,
              "end": 227
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 230,
              "end": 235
            },
            "start": 193,
            "end": 235
          },
          "optional": false,
          "readonly": null,
          "start": 175,
          "end": 237
        },
        "declare": false,
        "start": 150,
        "end": 238
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 143,
      "end": 238
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IImmutableMap",
          "optional": false,
          "typeAnnotation": null,
          "start": 257,
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 271,
                "end": 272
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ImmutableModel",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 281,
                  "end": 295
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
                        "start": 296,
                        "end": 297
                      },
                      "typeArguments": null,
                      "start": 296,
                      "end": 297
                    }
                  ],
                  "start": 295,
                  "end": 298
                },
                "start": 281,
                "end": 298
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 271,
              "end": 298
            }
          ],
          "start": 270,
          "end": 299
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Map",
              "optional": false,
              "typeAnnotation": null,
              "start": 308,
              "end": 311
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 312,
                  "end": 318
                },
                {
                  "type": "TSAnyKeyword",
                  "start": 320,
                  "end": 323
                }
              ],
              "start": 311,
              "end": 324
            },
            "start": 308,
            "end": 324
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "set",
                "optional": false,
                "typeAnnotation": null,
                "start": 331,
                "end": 334
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
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 335,
                      "end": 336
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
                          "start": 351,
                          "end": 352
                        },
                        "typeArguments": null,
                        "start": 351,
                        "end": 352
                      },
                      "start": 345,
                      "end": 352
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 335,
                    "end": 352
                  }
                ],
                "start": 334,
                "end": 353
              },
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
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 359,
                        "end": 360
                      },
                      "typeArguments": null,
                      "start": 359,
                      "end": 360
                    },
                    "start": 357,
                    "end": 360
                  },
                  "start": 354,
                  "end": 360
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 369,
                          "end": 370
                        },
                        "typeArguments": null,
                        "start": 369,
                        "end": 370
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
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
                      "end": 373
                    },
                    "start": 367,
                    "end": 373
                  },
                  "start": 362,
                  "end": 373
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IImmutableMap",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 376,
                    "end": 389
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
                          "start": 390,
                          "end": 391
                        },
                        "typeArguments": null,
                        "start": 390,
                        "end": 391
                      }
                    ],
                    "start": 389,
                    "end": 392
                  },
                  "start": 376,
                  "end": 392
                },
                "start": 374,
                "end": 392
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 331,
              "end": 393
            }
          ],
          "start": 325,
          "end": 395
        },
        "declare": false,
        "start": 247,
        "end": 395
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 240,
      "end": 395
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ImmutableTypes2",
          "optional": false,
          "typeAnnotation": null,
          "start": 409,
          "end": 424
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IImmutableMap2",
            "optional": false,
            "typeAnnotation": null,
            "start": 427,
            "end": 441
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 442,
                "end": 445
              }
            ],
            "start": 441,
            "end": 446
          },
          "start": 427,
          "end": 446
        },
        "declare": false,
        "start": 404,
        "end": 447
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 397,
      "end": 447
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isImmutableType",
        "optional": false,
        "typeAnnotation": null,
        "start": 453,
        "end": 468
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
              "start": 469,
              "end": 470
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 469,
            "end": 470
          }
        ],
        "start": 468,
        "end": 471
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
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
                "start": 475,
                "end": 476
              },
              "typeArguments": null,
              "start": 475,
              "end": 476
            }
          ],
          "start": 474,
          "end": 477
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ImmutableTypes2",
                "optional": false,
                "typeAnnotation": null,
                "start": 487,
                "end": 502
              },
              "typeArguments": null,
              "start": 487,
              "end": 502
            }
          ],
          "start": 486,
          "end": 503
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 506,
            "end": 507
          },
          "typeArguments": null,
          "start": 506,
          "end": 507
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 510,
          "end": 515
        },
        "start": 474,
        "end": 515
      },
      "declare": false,
      "start": 448,
      "end": 516
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ImmutableModel2",
          "optional": false,
          "typeAnnotation": null,
          "start": 529,
          "end": 544
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
                "start": 545,
                "end": 546
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 545,
              "end": 546
            }
          ],
          "start": 544,
          "end": 547
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 553,
            "end": 554
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
                "start": 564,
                "end": 565
              },
              "typeArguments": null,
              "start": 564,
              "end": 565
            },
            "start": 558,
            "end": 565
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "isImmutableType",
              "optional": false,
              "typeAnnotation": null,
              "start": 568,
              "end": 583
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
                      "start": 584,
                      "end": 585
                    },
                    "typeArguments": null,
                    "start": 584,
                    "end": 585
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 586,
                      "end": 587
                    },
                    "typeArguments": null,
                    "start": 586,
                    "end": 587
                  },
                  "start": 584,
                  "end": 588
                }
              ],
              "start": 583,
              "end": 589
            },
            "start": 568,
            "end": 589
          },
          "optional": false,
          "readonly": null,
          "start": 550,
          "end": 591
        },
        "declare": false,
        "start": 524,
        "end": 592
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 517,
      "end": 592
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IImmutableMap2",
          "optional": false,
          "typeAnnotation": null,
          "start": 610,
          "end": 624
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
                "start": 625,
                "end": 626
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ImmutableModel2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 635,
                  "end": 650
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
                        "start": 651,
                        "end": 652
                      },
                      "typeArguments": null,
                      "start": 651,
                      "end": 652
                    }
                  ],
                  "start": 650,
                  "end": 653
                },
                "start": 635,
                "end": 653
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 625,
              "end": 653
            }
          ],
          "start": 624,
          "end": 654
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Map",
              "optional": false,
              "typeAnnotation": null,
              "start": 663,
              "end": 666
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 667,
                  "end": 673
                },
                {
                  "type": "TSAnyKeyword",
                  "start": 675,
                  "end": 678
                }
              ],
              "start": 666,
              "end": 679
            },
            "start": 663,
            "end": 679
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "set",
                "optional": false,
                "typeAnnotation": null,
                "start": 686,
                "end": 689
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
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 690,
                      "end": 691
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
                          "start": 706,
                          "end": 707
                        },
                        "typeArguments": null,
                        "start": 706,
                        "end": 707
                      },
                      "start": 700,
                      "end": 707
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 690,
                    "end": 707
                  }
                ],
                "start": 689,
                "end": 708
              },
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
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 714,
                        "end": 715
                      },
                      "typeArguments": null,
                      "start": 714,
                      "end": 715
                    },
                    "start": 712,
                    "end": 715
                  },
                  "start": 709,
                  "end": 715
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 724,
                          "end": 725
                        },
                        "typeArguments": null,
                        "start": 724,
                        "end": 725
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 726,
                          "end": 727
                        },
                        "typeArguments": null,
                        "start": 726,
                        "end": 727
                      },
                      "start": 724,
                      "end": 728
                    },
                    "start": 722,
                    "end": 728
                  },
                  "start": 717,
                  "end": 728
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IImmutableMap2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 731,
                    "end": 745
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
                          "start": 746,
                          "end": 747
                        },
                        "typeArguments": null,
                        "start": 746,
                        "end": 747
                      }
                    ],
                    "start": 745,
                    "end": 748
                  },
                  "start": 731,
                  "end": 748
                },
                "start": 729,
                "end": 748
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 686,
              "end": 749
            }
          ],
          "start": 680,
          "end": 751
        },
        "declare": false,
        "start": 600,
        "end": 751
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 593,
      "end": 751
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 751
}
```
