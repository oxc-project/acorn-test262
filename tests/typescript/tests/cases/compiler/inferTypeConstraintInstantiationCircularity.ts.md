__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AMappedType",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 16
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
              "start": 17,
              "end": 18
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 17,
            "end": 18
          }
        ],
        "start": 16,
        "end": 19
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "KeyType",
          "optional": false,
          "typeAnnotation": null,
          "start": 25,
          "end": 32
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
              "start": 42,
              "end": 43
            },
            "typeArguments": null,
            "start": 42,
            "end": 43
          },
          "start": 36,
          "end": 43
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 46,
          "end": 52
        },
        "optional": false,
        "readonly": null,
        "start": 22,
        "end": 54
      },
      "declare": false,
      "start": 0,
      "end": 55
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HasM",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 66
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 73,
              "end": 74
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 76,
                "end": 82
              },
              "start": 74,
              "end": 82
            },
            "accessibility": null,
            "static": false,
            "start": 73,
            "end": 83
          }
        ],
        "start": 69,
        "end": 85
      },
      "declare": false,
      "start": 57,
      "end": 86
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X1",
        "optional": false,
        "typeAnnotation": null,
        "start": 131,
        "end": 133
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "HasM",
                "optional": false,
                "typeAnnotation": null,
                "start": 147,
                "end": 151
              },
              "typeArguments": null,
              "start": 147,
              "end": 151
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 137,
            "end": 151
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Output",
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 161
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AMappedType",
                "optional": false,
                "typeAnnotation": null,
                "start": 164,
                "end": 175
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIntersectionType",
                    "types": [
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
                              "name": "s",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 178,
                              "end": 179
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 181,
                                "end": 187
                              },
                              "start": 179,
                              "end": 187
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 178,
                            "end": 188
                          }
                        ],
                        "start": 176,
                        "end": 190
                      },
                      {
                        "type": "TSMappedType",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 196,
                          "end": 197
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
                              "start": 207,
                              "end": 208
                            },
                            "typeArguments": null,
                            "start": 207,
                            "end": 208
                          },
                          "start": 201,
                          "end": 208
                        },
                        "nameType": null,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 211,
                          "end": 217
                        },
                        "optional": false,
                        "readonly": null,
                        "start": 193,
                        "end": 220
                      }
                    ],
                    "start": 176,
                    "end": 220
                  }
                ],
                "start": 175,
                "end": 221
              },
              "start": 164,
              "end": 221
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 155,
            "end": 221
          }
        ],
        "start": 133,
        "end": 223
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
              "name": "tee",
              "optional": false,
              "typeAnnotation": null,
              "start": 228,
              "end": 231
            },
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
                  "start": 233,
                  "end": 234
                },
                "typeArguments": null,
                "start": 233,
                "end": 234
              },
              "start": 231,
              "end": 234
            },
            "accessibility": null,
            "static": false,
            "start": 228,
            "end": 235
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "output",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 244
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Output",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 246,
                  "end": 252
                },
                "typeArguments": null,
                "start": 246,
                "end": 252
              },
              "start": 244,
              "end": 252
            },
            "accessibility": null,
            "static": false,
            "start": 238,
            "end": 253
          }
        ],
        "start": 224,
        "end": 255
      },
      "declare": false,
      "start": 121,
      "end": 255
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F1",
        "optional": false,
        "typeAnnotation": null,
        "start": 262,
        "end": 264
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
              "start": 265,
              "end": 266
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 265,
            "end": 266
          }
        ],
        "start": 264,
        "end": 267
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
            "start": 270,
            "end": 271
          },
          "typeArguments": null,
          "start": 270,
          "end": 271
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "X1",
            "optional": false,
            "typeAnnotation": null,
            "start": 280,
            "end": 282
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 289,
                    "end": 290
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 289,
                  "end": 290
                },
                "start": 283,
                "end": 290
              }
            ],
            "start": 282,
            "end": 291
          },
          "start": 280,
          "end": 291
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 294,
            "end": 295
          },
          "typeArguments": null,
          "start": 294,
          "end": 295
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 298,
          "end": 303
        },
        "start": 270,
        "end": 303
      },
      "declare": false,
      "start": 257,
      "end": 304
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X2",
        "optional": false,
        "typeAnnotation": null,
        "start": 341,
        "end": 343
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
              "start": 347,
              "end": 348
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "HasM",
                "optional": false,
                "typeAnnotation": null,
                "start": 357,
                "end": 361
              },
              "typeArguments": null,
              "start": 357,
              "end": 361
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 347,
            "end": 361
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Output",
              "optional": false,
              "typeAnnotation": null,
              "start": 365,
              "end": 371
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 365,
            "end": 371
          }
        ],
        "start": 343,
        "end": 373
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
              "name": "tee",
              "optional": false,
              "typeAnnotation": null,
              "start": 378,
              "end": 381
            },
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
                  "start": 383,
                  "end": 384
                },
                "typeArguments": null,
                "start": 383,
                "end": 384
              },
              "start": 381,
              "end": 384
            },
            "accessibility": null,
            "static": false,
            "start": 378,
            "end": 385
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "output",
              "optional": false,
              "typeAnnotation": null,
              "start": 388,
              "end": 394
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Output",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 396,
                  "end": 402
                },
                "typeArguments": null,
                "start": 396,
                "end": 402
              },
              "start": 394,
              "end": 402
            },
            "accessibility": null,
            "static": false,
            "start": 388,
            "end": 403
          }
        ],
        "start": 374,
        "end": 405
      },
      "declare": false,
      "start": 331,
      "end": 405
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F2",
        "optional": false,
        "typeAnnotation": null,
        "start": 412,
        "end": 414
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
              "start": 415,
              "end": 416
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 415,
            "end": 416
          }
        ],
        "start": 414,
        "end": 417
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
            "start": 420,
            "end": 421
          },
          "typeArguments": null,
          "start": 420,
          "end": 421
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "X2",
            "optional": false,
            "typeAnnotation": null,
            "start": 430,
            "end": 432
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 439,
                    "end": 440
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 439,
                  "end": 440
                },
                "start": 433,
                "end": 440
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AMappedType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 442,
                  "end": 453
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSIntersectionType",
                      "types": [
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
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 456,
                                "end": 457
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 459,
                                  "end": 465
                                },
                                "start": 457,
                                "end": 465
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 456,
                              "end": 466
                            }
                          ],
                          "start": 454,
                          "end": 468
                        },
                        {
                          "type": "TSMappedType",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "k",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 474,
                            "end": 475
                          },
                          "constraint": {
                            "type": "TSTypeOperator",
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSInferType",
                              "typeParameter": {
                                "type": "TSTypeParameter",
                                "name": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 492,
                                  "end": 493
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 492,
                                "end": 493
                              },
                              "start": 486,
                              "end": 493
                            },
                            "start": 479,
                            "end": 494
                          },
                          "nameType": null,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 497,
                            "end": 503
                          },
                          "optional": false,
                          "readonly": null,
                          "start": 471,
                          "end": 506
                        }
                      ],
                      "start": 454,
                      "end": 506
                    }
                  ],
                  "start": 453,
                  "end": 507
                },
                "start": 442,
                "end": 507
              }
            ],
            "start": 432,
            "end": 508
          },
          "start": 430,
          "end": 508
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 511,
            "end": 512
          },
          "typeArguments": null,
          "start": 511,
          "end": 512
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 515,
          "end": 520
        },
        "start": 420,
        "end": 520
      },
      "declare": false,
      "start": 407,
      "end": 521
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Simplify",
        "optional": false,
        "typeAnnotation": null,
        "start": 547,
        "end": 555
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
              "start": 556,
              "end": 557
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 556,
            "end": 557
          }
        ],
        "start": 555,
        "end": 558
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "KeyType",
          "optional": false,
          "typeAnnotation": null,
          "start": 563,
          "end": 570
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
              "start": 580,
              "end": 581
            },
            "typeArguments": null,
            "start": 580,
            "end": 581
          },
          "start": 574,
          "end": 581
        },
        "nameType": null,
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
              "name": "KeyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 586,
              "end": 593
            },
            "typeArguments": null,
            "start": 586,
            "end": 593
          },
          "start": 584,
          "end": 594
        },
        "optional": false,
        "readonly": null,
        "start": 561,
        "end": 595
      },
      "declare": false,
      "start": 542,
      "end": 596
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "optionalKeys",
        "optional": false,
        "typeAnnotation": null,
        "start": 603,
        "end": 615
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
              "start": 616,
              "end": 617
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 626,
              "end": 632
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 616,
            "end": 632
          }
        ],
        "start": 615,
        "end": 633
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 643,
            "end": 644
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
                "start": 654,
                "end": 655
              },
              "typeArguments": null,
              "start": 654,
              "end": 655
            },
            "start": 648,
            "end": 655
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSUndefinedKeyword",
              "start": 658,
              "end": 667
            },
            "extendsType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 676,
                  "end": 677
                },
                "typeArguments": null,
                "start": 676,
                "end": 677
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 678,
                  "end": 679
                },
                "typeArguments": null,
                "start": 678,
                "end": 679
              },
              "start": 676,
              "end": 680
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 683,
                "end": 684
              },
              "typeArguments": null,
              "start": 683,
              "end": 684
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 687,
              "end": 692
            },
            "start": 658,
            "end": 692
          },
          "optional": false,
          "readonly": null,
          "start": 636,
          "end": 695
        },
        "indexType": {
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
              "start": 702,
              "end": 703
            },
            "typeArguments": null,
            "start": 702,
            "end": 703
          },
          "start": 696,
          "end": 703
        },
        "start": 636,
        "end": 704
      },
      "declare": false,
      "start": 598,
      "end": 705
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "requiredKeys",
        "optional": false,
        "typeAnnotation": null,
        "start": 712,
        "end": 724
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
              "start": 725,
              "end": 726
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 735,
              "end": 741
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 725,
            "end": 741
          }
        ],
        "start": 724,
        "end": 742
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Exclude",
          "optional": false,
          "typeAnnotation": null,
          "start": 745,
          "end": 752
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
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 759,
                  "end": 760
                },
                "typeArguments": null,
                "start": 759,
                "end": 760
              },
              "start": 753,
              "end": 760
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "optionalKeys",
                "optional": false,
                "typeAnnotation": null,
                "start": 762,
                "end": 774
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
                      "start": 775,
                      "end": 776
                    },
                    "typeArguments": null,
                    "start": 775,
                    "end": 776
                  }
                ],
                "start": 774,
                "end": 777
              },
              "start": 762,
              "end": 777
            }
          ],
          "start": 752,
          "end": 778
        },
        "start": 745,
        "end": 778
      },
      "declare": false,
      "start": 707,
      "end": 779
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "addQuestionMarks",
          "optional": false,
          "typeAnnotation": null,
          "start": 793,
          "end": 809
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
                "start": 810,
                "end": 811
              },
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 820,
                "end": 826
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 810,
              "end": 826
            }
          ],
          "start": 809,
          "end": 827
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 837,
                "end": 838
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "optionalKeys",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 842,
                  "end": 854
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
                        "start": 855,
                        "end": 856
                      },
                      "typeArguments": null,
                      "start": 855,
                      "end": 856
                    }
                  ],
                  "start": 854,
                  "end": 857
                },
                "start": 842,
                "end": 857
              },
              "nameType": null,
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
                    "start": 861,
                    "end": 862
                  },
                  "typeArguments": null,
                  "start": 861,
                  "end": 862
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 863,
                    "end": 864
                  },
                  "typeArguments": null,
                  "start": 863,
                  "end": 864
                },
                "start": 861,
                "end": 865
              },
              "optional": true,
              "readonly": null,
              "start": 830,
              "end": 868
            },
            {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 878,
                "end": 879
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "requiredKeys",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 883,
                  "end": 895
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
                        "start": 896,
                        "end": 897
                      },
                      "typeArguments": null,
                      "start": 896,
                      "end": 897
                    }
                  ],
                  "start": 895,
                  "end": 898
                },
                "start": 883,
                "end": 898
              },
              "nameType": null,
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
                    "start": 901,
                    "end": 902
                  },
                  "typeArguments": null,
                  "start": 901,
                  "end": 902
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 903,
                    "end": 904
                  },
                  "typeArguments": null,
                  "start": 903,
                  "end": 904
                },
                "start": 901,
                "end": 905
              },
              "optional": false,
              "readonly": null,
              "start": 871,
              "end": 908
            }
          ],
          "start": 830,
          "end": 908
        },
        "declare": false,
        "start": 788,
        "end": 909
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 781,
      "end": 909
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ZodRawShape",
        "optional": false,
        "typeAnnotation": null,
        "start": 916,
        "end": 927
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 940,
                    "end": 946
                  },
                  "start": 938,
                  "end": 946
                },
                "start": 937,
                "end": 946
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ZodType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 949,
                  "end": 956
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 957,
                      "end": 960
                    }
                  ],
                  "start": 956,
                  "end": 961
                },
                "start": 949,
                "end": 961
              },
              "start": 947,
              "end": 961
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 936,
            "end": 962
          }
        ],
        "start": 930,
        "end": 964
      },
      "declare": false,
      "start": 911,
      "end": 965
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ZodType",
        "optional": false,
        "typeAnnotation": null,
        "start": 977,
        "end": 984
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Output",
              "optional": false,
              "typeAnnotation": null,
              "start": 985,
              "end": 991
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 985,
            "end": 991
          }
        ],
        "start": 984,
        "end": 992
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
              "name": "_type",
              "optional": false,
              "typeAnnotation": null,
              "start": 997,
              "end": 1002
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Output",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1004,
                  "end": 1010
                },
                "typeArguments": null,
                "start": 1004,
                "end": 1010
              },
              "start": 1002,
              "end": 1010
            },
            "accessibility": null,
            "static": false,
            "start": 997,
            "end": 1011
          }
        ],
        "start": 993,
        "end": 1013
      },
      "declare": false,
      "start": 967,
      "end": 1013
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ZodObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 1025,
        "end": 1034
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
              "start": 1038,
              "end": 1039
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ZodRawShape",
                "optional": false,
                "typeAnnotation": null,
                "start": 1048,
                "end": 1059
              },
              "typeArguments": null,
              "start": 1048,
              "end": 1059
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1038,
            "end": 1059
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Output",
              "optional": false,
              "typeAnnotation": null,
              "start": 1063,
              "end": 1069
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Simplify",
                "optional": false,
                "typeAnnotation": null,
                "start": 1072,
                "end": 1080
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSMappedType",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1095,
                          "end": 1096
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "optionalKeys",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1100,
                            "end": 1112
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
                                  "start": 1113,
                                  "end": 1114
                                },
                                "typeArguments": null,
                                "start": 1113,
                                "end": 1114
                              }
                            ],
                            "start": 1112,
                            "end": 1115
                          },
                          "start": 1100,
                          "end": 1115
                        },
                        "nameType": null,
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
                              "start": 1119,
                              "end": 1120
                            },
                            "typeArguments": null,
                            "start": 1119,
                            "end": 1120
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1121,
                              "end": 1122
                            },
                            "typeArguments": null,
                            "start": 1121,
                            "end": 1122
                          },
                          "start": 1119,
                          "end": 1123
                        },
                        "optional": true,
                        "readonly": null,
                        "start": 1086,
                        "end": 1130
                      },
                      {
                        "type": "TSMappedType",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1142,
                          "end": 1143
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "requiredKeys",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1147,
                            "end": 1159
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
                                  "start": 1160,
                                  "end": 1161
                                },
                                "typeArguments": null,
                                "start": 1160,
                                "end": 1161
                              }
                            ],
                            "start": 1159,
                            "end": 1162
                          },
                          "start": 1147,
                          "end": 1162
                        },
                        "nameType": null,
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
                              "start": 1165,
                              "end": 1166
                            },
                            "typeArguments": null,
                            "start": 1165,
                            "end": 1166
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1167,
                              "end": 1168
                            },
                            "typeArguments": null,
                            "start": 1167,
                            "end": 1168
                          },
                          "start": 1165,
                          "end": 1169
                        },
                        "optional": false,
                        "readonly": null,
                        "start": 1133,
                        "end": 1176
                      }
                    ],
                    "start": 1086,
                    "end": 1176
                  }
                ],
                "start": 1080,
                "end": 1180
              },
              "start": 1072,
              "end": 1180
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1063,
            "end": 1180
          }
        ],
        "start": 1034,
        "end": 1182
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "ZodType",
            "optional": false,
            "typeAnnotation": null,
            "start": 1191,
            "end": 1198
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Output",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1199,
                  "end": 1205
                },
                "typeArguments": null,
                "start": 1199,
                "end": 1205
              }
            ],
            "start": 1198,
            "end": 1206
          },
          "start": 1191,
          "end": 1206
        }
      ],
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
              "name": "_shape",
              "optional": false,
              "typeAnnotation": null,
              "start": 1220,
              "end": 1226
            },
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
                  "start": 1228,
                  "end": 1229
                },
                "typeArguments": null,
                "start": 1228,
                "end": 1229
              },
              "start": 1226,
              "end": 1229
            },
            "accessibility": null,
            "static": false,
            "start": 1211,
            "end": 1230
          }
        ],
        "start": 1207,
        "end": 1232
      },
      "declare": false,
      "start": 1015,
      "end": 1232
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 1239,
        "end": 1247
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
              "start": 1248,
              "end": 1249
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1248,
            "end": 1249
          }
        ],
        "start": 1247,
        "end": 1250
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
            "start": 1253,
            "end": 1254
          },
          "typeArguments": null,
          "start": 1253,
          "end": 1254
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ZodObject",
            "optional": false,
            "typeAnnotation": null,
            "start": 1263,
            "end": 1272
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1279,
                    "end": 1280
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1279,
                  "end": 1280
                },
                "start": 1273,
                "end": 1280
              }
            ],
            "start": 1272,
            "end": 1281
          },
          "start": 1263,
          "end": 1281
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1286,
              "end": 1287
            },
            "typeArguments": null,
            "start": 1286,
            "end": 1287
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ZodRawShape",
              "optional": false,
              "typeAnnotation": null,
              "start": 1296,
              "end": 1307
            },
            "typeArguments": null,
            "start": 1296,
            "end": 1307
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1314,
              "end": 1315
            },
            "typeArguments": null,
            "start": 1314,
            "end": 1315
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1322,
            "end": 1327
          },
          "start": 1286,
          "end": 1327
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1332,
          "end": 1337
        },
        "start": 1253,
        "end": 1337
      },
      "declare": false,
      "start": 1234,
      "end": 1338
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cell",
        "optional": false,
        "typeAnnotation": null,
        "start": 1367,
        "end": 1371
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 1372,
              "end": 1377
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "BaseValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 1386,
                "end": 1395
              },
              "typeArguments": null,
              "start": 1386,
              "end": 1395
            },
            "default": {
              "type": "TSAnyKeyword",
              "start": 1398,
              "end": 1401
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1372,
            "end": 1401
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "BaseValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 1403,
              "end": 1412
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 1415,
              "end": 1422
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1403,
            "end": 1422
          }
        ],
        "start": 1371,
        "end": 1423
      },
      "typeAnnotation": {
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 1430,
              "end": 1432
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1434,
                "end": 1440
              },
              "start": 1432,
              "end": 1440
            },
            "accessibility": null,
            "static": false,
            "start": 1430,
            "end": 1440
          }
        ],
        "start": 1426,
        "end": 1442
      },
      "declare": false,
      "start": 1362,
      "end": 1442
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Items",
        "optional": false,
        "typeAnnotation": null,
        "start": 1449,
        "end": 1454
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Type",
              "optional": false,
              "typeAnnotation": null,
              "start": 1455,
              "end": 1459
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Cell",
                "optional": false,
                "typeAnnotation": null,
                "start": 1468,
                "end": 1472
              },
              "typeArguments": null,
              "start": 1468,
              "end": 1472
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Cell",
                "optional": false,
                "typeAnnotation": null,
                "start": 1475,
                "end": 1479
              },
              "typeArguments": null,
              "start": 1475,
              "end": 1479
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1455,
            "end": 1479
          }
        ],
        "start": 1454,
        "end": 1480
      },
      "typeAnnotation": {
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 1487,
              "end": 1491
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1493,
                  "end": 1497
                },
                "typeArguments": null,
                "start": 1493,
                "end": 1497
              },
              "start": 1491,
              "end": 1497
            },
            "accessibility": null,
            "static": false,
            "start": 1487,
            "end": 1497
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1500,
              "end": 1504
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1506,
                "end": 1512
              },
              "start": 1504,
              "end": 1512
            },
            "accessibility": null,
            "static": false,
            "start": 1500,
            "end": 1512
          }
        ],
        "start": 1483,
        "end": 1514
      },
      "declare": false,
      "start": 1444,
      "end": 1514
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InferIOItemToJSType",
        "optional": false,
        "typeAnnotation": null,
        "start": 1521,
        "end": 1540
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
              "start": 1541,
              "end": 1542
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Items",
                "optional": false,
                "typeAnnotation": null,
                "start": 1551,
                "end": 1556
              },
              "typeArguments": null,
              "start": 1551,
              "end": 1556
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1541,
            "end": 1556
          }
        ],
        "start": 1540,
        "end": 1557
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
            "start": 1562,
            "end": 1563
          },
          "typeArguments": null,
          "start": 1562,
          "end": 1563
        },
        "extendsType": {
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
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 1574,
                "end": 1578
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1586,
                      "end": 1587
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1586,
                    "end": 1587
                  },
                  "start": 1580,
                  "end": 1587
                },
                "start": 1578,
                "end": 1587
              },
              "accessibility": null,
              "static": false,
              "start": 1574,
              "end": 1587
            }
          ],
          "start": 1572,
          "end": 1589
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1596,
              "end": 1597
            },
            "typeArguments": null,
            "start": 1596,
            "end": 1597
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Cell",
              "optional": false,
              "typeAnnotation": null,
              "start": 1606,
              "end": 1610
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
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1617,
                      "end": 1618
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1617,
                    "end": 1618
                  },
                  "start": 1611,
                  "end": 1618
                }
              ],
              "start": 1610,
              "end": 1665
            },
            "start": 1606,
            "end": 1665
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 1674,
              "end": 1675
            },
            "typeArguments": null,
            "start": 1674,
            "end": 1675
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1684,
            "end": 1689
          },
          "start": 1596,
          "end": 1689
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1696,
          "end": 1701
        },
        "start": 1562,
        "end": 1701
      },
      "declare": false,
      "start": 1516,
      "end": 1701
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1701
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4,
    "range": [
      0,
      4
    ]
  },
  {
    "type": "Identifier",
    "value": "AMappedType",
    "start": 5,
    "end": 16,
    "range": [
      5,
      16
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Identifier",
    "value": "KeyType",
    "start": 25,
    "end": 32,
    "range": [
      25,
      32
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 33,
    "end": 35,
    "range": [
      33,
      35
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 36,
    "end": 41,
    "range": [
      36,
      41
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 46,
    "end": 52,
    "range": [
      46,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 57,
    "end": 61,
    "range": [
      57,
      61
    ]
  },
  {
    "type": "Identifier",
    "value": "HasM",
    "start": 62,
    "end": 66,
    "range": [
      62,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 76,
    "end": 82,
    "range": [
      76,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 121,
    "end": 130,
    "range": [
      121,
      130
    ]
  },
  {
    "type": "Identifier",
    "value": "X1",
    "start": 131,
    "end": 133,
    "range": [
      131,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 139,
    "end": 146,
    "range": [
      139,
      146
    ]
  },
  {
    "type": "Identifier",
    "value": "HasM",
    "start": 147,
    "end": 151,
    "range": [
      147,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Identifier",
    "value": "Output",
    "start": 155,
    "end": 161,
    "range": [
      155,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Identifier",
    "value": "AMappedType",
    "start": 164,
    "end": 175,
    "range": [
      164,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 181,
    "end": 187,
    "range": [
      181,
      187
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 198,
    "end": 200,
    "range": [
      198,
      200
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 201,
    "end": 206,
    "range": [
      201,
      206
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 211,
    "end": 217,
    "range": [
      211,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Identifier",
    "value": "tee",
    "start": 228,
    "end": 231,
    "range": [
      228,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 238,
    "end": 244,
    "range": [
      238,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Identifier",
    "value": "Output",
    "start": 246,
    "end": 252,
    "range": [
      246,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 257,
    "end": 261,
    "range": [
      257,
      261
    ]
  },
  {
    "type": "Identifier",
    "value": "F1",
    "start": 262,
    "end": 264,
    "range": [
      262,
      264
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 264,
    "end": 265,
    "range": [
      264,
      265
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 272,
    "end": 279,
    "range": [
      272,
      279
    ]
  },
  {
    "type": "Identifier",
    "value": "X1",
    "start": 280,
    "end": 282,
    "range": [
      280,
      282
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 283,
    "end": 288,
    "range": [
      283,
      288
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 298,
    "end": 303,
    "range": [
      298,
      303
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 303,
    "end": 304,
    "range": [
      303,
      304
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 331,
    "end": 340,
    "range": [
      331,
      340
    ]
  },
  {
    "type": "Identifier",
    "value": "X2",
    "start": 341,
    "end": 343,
    "range": [
      341,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 349,
    "end": 356,
    "range": [
      349,
      356
    ]
  },
  {
    "type": "Identifier",
    "value": "HasM",
    "start": 357,
    "end": 361,
    "range": [
      357,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Identifier",
    "value": "Output",
    "start": 365,
    "end": 371,
    "range": [
      365,
      371
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Identifier",
    "value": "tee",
    "start": 378,
    "end": 381,
    "range": [
      378,
      381
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 381,
    "end": 382,
    "range": [
      381,
      382
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 388,
    "end": 394,
    "range": [
      388,
      394
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Identifier",
    "value": "Output",
    "start": 396,
    "end": 402,
    "range": [
      396,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 407,
    "end": 411,
    "range": [
      407,
      411
    ]
  },
  {
    "type": "Identifier",
    "value": "F2",
    "start": 412,
    "end": 414,
    "range": [
      412,
      414
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 422,
    "end": 429,
    "range": [
      422,
      429
    ]
  },
  {
    "type": "Identifier",
    "value": "X2",
    "start": 430,
    "end": 432,
    "range": [
      430,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 433,
    "end": 438,
    "range": [
      433,
      438
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 439,
    "end": 440,
    "range": [
      439,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Identifier",
    "value": "AMappedType",
    "start": 442,
    "end": 453,
    "range": [
      442,
      453
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 457,
    "end": 458,
    "range": [
      457,
      458
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 459,
    "end": 465,
    "range": [
      459,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 465,
    "end": 466,
    "range": [
      465,
      466
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 469,
    "end": 470,
    "range": [
      469,
      470
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 476,
    "end": 478,
    "range": [
      476,
      478
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 479,
    "end": 484,
    "range": [
      479,
      484
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 485,
    "end": 486,
    "range": [
      485,
      486
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 486,
    "end": 491,
    "range": [
      486,
      491
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 494,
    "end": 495,
    "range": [
      494,
      495
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 495,
    "end": 496,
    "range": [
      495,
      496
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 497,
    "end": 503,
    "range": [
      497,
      503
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 503,
    "end": 504,
    "range": [
      503,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 505,
    "end": 506,
    "range": [
      505,
      506
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 509,
    "end": 510,
    "range": [
      509,
      510
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 511,
    "end": 512,
    "range": [
      511,
      512
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 515,
    "end": 520,
    "range": [
      515,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 542,
    "end": 546,
    "range": [
      542,
      546
    ]
  },
  {
    "type": "Identifier",
    "value": "Simplify",
    "start": 547,
    "end": 555,
    "range": [
      547,
      555
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 555,
    "end": 556,
    "range": [
      555,
      556
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 556,
    "end": 557,
    "range": [
      556,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 557,
    "end": 558,
    "range": [
      557,
      558
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 561,
    "end": 562,
    "range": [
      561,
      562
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Identifier",
    "value": "KeyType",
    "start": 563,
    "end": 570,
    "range": [
      563,
      570
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 571,
    "end": 573,
    "range": [
      571,
      573
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 574,
    "end": 579,
    "range": [
      574,
      579
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 580,
    "end": 581,
    "range": [
      580,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Identifier",
    "value": "KeyType",
    "start": 586,
    "end": 593,
    "range": [
      586,
      593
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 593,
    "end": 594,
    "range": [
      593,
      594
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 595,
    "end": 596,
    "range": [
      595,
      596
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 598,
    "end": 602,
    "range": [
      598,
      602
    ]
  },
  {
    "type": "Identifier",
    "value": "optionalKeys",
    "start": 603,
    "end": 615,
    "range": [
      603,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 618,
    "end": 625,
    "range": [
      618,
      625
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 626,
    "end": 632,
    "range": [
      626,
      632
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 632,
    "end": 633,
    "range": [
      632,
      633
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 634,
    "end": 635,
    "range": [
      634,
      635
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 642,
    "end": 643,
    "range": [
      642,
      643
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 643,
    "end": 644,
    "range": [
      643,
      644
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 645,
    "end": 647,
    "range": [
      645,
      647
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 648,
    "end": 653,
    "range": [
      648,
      653
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 654,
    "end": 655,
    "range": [
      654,
      655
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 655,
    "end": 656,
    "range": [
      655,
      656
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 656,
    "end": 657,
    "range": [
      656,
      657
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 658,
    "end": 667,
    "range": [
      658,
      667
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 668,
    "end": 675,
    "range": [
      668,
      675
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 677,
    "end": 678,
    "range": [
      677,
      678
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 678,
    "end": 679,
    "range": [
      678,
      679
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 679,
    "end": 680,
    "range": [
      679,
      680
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 681,
    "end": 682,
    "range": [
      681,
      682
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 683,
    "end": 684,
    "range": [
      683,
      684
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 685,
    "end": 686,
    "range": [
      685,
      686
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 687,
    "end": 692,
    "range": [
      687,
      692
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 692,
    "end": 693,
    "range": [
      692,
      693
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 694,
    "end": 695,
    "range": [
      694,
      695
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 695,
    "end": 696,
    "range": [
      695,
      696
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 696,
    "end": 701,
    "range": [
      696,
      701
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 703,
    "end": 704,
    "range": [
      703,
      704
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 704,
    "end": 705,
    "range": [
      704,
      705
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 707,
    "end": 711,
    "range": [
      707,
      711
    ]
  },
  {
    "type": "Identifier",
    "value": "requiredKeys",
    "start": 712,
    "end": 724,
    "range": [
      712,
      724
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 724,
    "end": 725,
    "range": [
      724,
      725
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 725,
    "end": 726,
    "range": [
      725,
      726
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 727,
    "end": 734,
    "range": [
      727,
      734
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 735,
    "end": 741,
    "range": [
      735,
      741
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 741,
    "end": 742,
    "range": [
      741,
      742
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "Identifier",
    "value": "Exclude",
    "start": 745,
    "end": 752,
    "range": [
      745,
      752
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 753,
    "end": 758,
    "range": [
      753,
      758
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 759,
    "end": 760,
    "range": [
      759,
      760
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 760,
    "end": 761,
    "range": [
      760,
      761
    ]
  },
  {
    "type": "Identifier",
    "value": "optionalKeys",
    "start": 762,
    "end": 774,
    "range": [
      762,
      774
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 774,
    "end": 775,
    "range": [
      774,
      775
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 775,
    "end": 776,
    "range": [
      775,
      776
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 776,
    "end": 777,
    "range": [
      776,
      777
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 777,
    "end": 778,
    "range": [
      777,
      778
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 778,
    "end": 779,
    "range": [
      778,
      779
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 781,
    "end": 787,
    "range": [
      781,
      787
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 788,
    "end": 792,
    "range": [
      788,
      792
    ]
  },
  {
    "type": "Identifier",
    "value": "addQuestionMarks",
    "start": 793,
    "end": 809,
    "range": [
      793,
      809
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 809,
    "end": 810,
    "range": [
      809,
      810
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 810,
    "end": 811,
    "range": [
      810,
      811
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 812,
    "end": 819,
    "range": [
      812,
      819
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 820,
    "end": 826,
    "range": [
      820,
      826
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 828,
    "end": 829,
    "range": [
      828,
      829
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 836,
    "end": 837,
    "range": [
      836,
      837
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 837,
    "end": 838,
    "range": [
      837,
      838
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 839,
    "end": 841,
    "range": [
      839,
      841
    ]
  },
  {
    "type": "Identifier",
    "value": "optionalKeys",
    "start": 842,
    "end": 854,
    "range": [
      842,
      854
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 854,
    "end": 855,
    "range": [
      854,
      855
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 855,
    "end": 856,
    "range": [
      855,
      856
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 856,
    "end": 857,
    "range": [
      856,
      857
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 858,
    "end": 859,
    "range": [
      858,
      859
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 859,
    "end": 860,
    "range": [
      859,
      860
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 861,
    "end": 862,
    "range": [
      861,
      862
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 862,
    "end": 863,
    "range": [
      862,
      863
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 863,
    "end": 864,
    "range": [
      863,
      864
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 864,
    "end": 865,
    "range": [
      864,
      865
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 865,
    "end": 866,
    "range": [
      865,
      866
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 867,
    "end": 868,
    "range": [
      867,
      868
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 869,
    "end": 870,
    "range": [
      869,
      870
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 871,
    "end": 872,
    "range": [
      871,
      872
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 877,
    "end": 878,
    "range": [
      877,
      878
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 878,
    "end": 879,
    "range": [
      878,
      879
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 880,
    "end": 882,
    "range": [
      880,
      882
    ]
  },
  {
    "type": "Identifier",
    "value": "requiredKeys",
    "start": 883,
    "end": 895,
    "range": [
      883,
      895
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 895,
    "end": 896,
    "range": [
      895,
      896
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 896,
    "end": 897,
    "range": [
      896,
      897
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 897,
    "end": 898,
    "range": [
      897,
      898
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 898,
    "end": 899,
    "range": [
      898,
      899
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 899,
    "end": 900,
    "range": [
      899,
      900
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 901,
    "end": 902,
    "range": [
      901,
      902
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 902,
    "end": 903,
    "range": [
      902,
      903
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 903,
    "end": 904,
    "range": [
      903,
      904
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 904,
    "end": 905,
    "range": [
      904,
      905
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 905,
    "end": 906,
    "range": [
      905,
      906
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 907,
    "end": 908,
    "range": [
      907,
      908
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 908,
    "end": 909,
    "range": [
      908,
      909
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 911,
    "end": 915,
    "range": [
      911,
      915
    ]
  },
  {
    "type": "Identifier",
    "value": "ZodRawShape",
    "start": 916,
    "end": 927,
    "range": [
      916,
      927
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 928,
    "end": 929,
    "range": [
      928,
      929
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 930,
    "end": 931,
    "range": [
      930,
      931
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 936,
    "end": 937,
    "range": [
      936,
      937
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 937,
    "end": 938,
    "range": [
      937,
      938
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 938,
    "end": 939,
    "range": [
      938,
      939
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 940,
    "end": 946,
    "range": [
      940,
      946
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 946,
    "end": 947,
    "range": [
      946,
      947
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 947,
    "end": 948,
    "range": [
      947,
      948
    ]
  },
  {
    "type": "Identifier",
    "value": "ZodType",
    "start": 949,
    "end": 956,
    "range": [
      949,
      956
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 956,
    "end": 957,
    "range": [
      956,
      957
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 957,
    "end": 960,
    "range": [
      957,
      960
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 960,
    "end": 961,
    "range": [
      960,
      961
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 961,
    "end": 962,
    "range": [
      961,
      962
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 963,
    "end": 964,
    "range": [
      963,
      964
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 964,
    "end": 965,
    "range": [
      964,
      965
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 967,
    "end": 976,
    "range": [
      967,
      976
    ]
  },
  {
    "type": "Identifier",
    "value": "ZodType",
    "start": 977,
    "end": 984,
    "range": [
      977,
      984
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 984,
    "end": 985,
    "range": [
      984,
      985
    ]
  },
  {
    "type": "Identifier",
    "value": "Output",
    "start": 985,
    "end": 991,
    "range": [
      985,
      991
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 991,
    "end": 992,
    "range": [
      991,
      992
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 993,
    "end": 994,
    "range": [
      993,
      994
    ]
  },
  {
    "type": "Identifier",
    "value": "_type",
    "start": 997,
    "end": 1002,
    "range": [
      997,
      1002
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1002,
    "end": 1003,
    "range": [
      1002,
      1003
    ]
  },
  {
    "type": "Identifier",
    "value": "Output",
    "start": 1004,
    "end": 1010,
    "range": [
      1004,
      1010
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1010,
    "end": 1011,
    "range": [
      1010,
      1011
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1012,
    "end": 1013,
    "range": [
      1012,
      1013
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1015,
    "end": 1024,
    "range": [
      1015,
      1024
    ]
  },
  {
    "type": "Identifier",
    "value": "ZodObject",
    "start": 1025,
    "end": 1034,
    "range": [
      1025,
      1034
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1034,
    "end": 1035,
    "range": [
      1034,
      1035
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1038,
    "end": 1039,
    "range": [
      1038,
      1039
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1040,
    "end": 1047,
    "range": [
      1040,
      1047
    ]
  },
  {
    "type": "Identifier",
    "value": "ZodRawShape",
    "start": 1048,
    "end": 1059,
    "range": [
      1048,
      1059
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1059,
    "end": 1060,
    "range": [
      1059,
      1060
    ]
  },
  {
    "type": "Identifier",
    "value": "Output",
    "start": 1063,
    "end": 1069,
    "range": [
      1063,
      1069
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1070,
    "end": 1071,
    "range": [
      1070,
      1071
    ]
  },
  {
    "type": "Identifier",
    "value": "Simplify",
    "start": 1072,
    "end": 1080,
    "range": [
      1072,
      1080
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1080,
    "end": 1081,
    "range": [
      1080,
      1081
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1086,
    "end": 1087,
    "range": [
      1086,
      1087
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1094,
    "end": 1095,
    "range": [
      1094,
      1095
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1095,
    "end": 1096,
    "range": [
      1095,
      1096
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1097,
    "end": 1099,
    "range": [
      1097,
      1099
    ]
  },
  {
    "type": "Identifier",
    "value": "optionalKeys",
    "start": 1100,
    "end": 1112,
    "range": [
      1100,
      1112
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1112,
    "end": 1113,
    "range": [
      1112,
      1113
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1113,
    "end": 1114,
    "range": [
      1113,
      1114
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1114,
    "end": 1115,
    "range": [
      1114,
      1115
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1115,
    "end": 1116,
    "range": [
      1115,
      1116
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1116,
    "end": 1117,
    "range": [
      1116,
      1117
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1117,
    "end": 1118,
    "range": [
      1117,
      1118
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1119,
    "end": 1120,
    "range": [
      1119,
      1120
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1120,
    "end": 1121,
    "range": [
      1120,
      1121
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1121,
    "end": 1122,
    "range": [
      1121,
      1122
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1122,
    "end": 1123,
    "range": [
      1122,
      1123
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1123,
    "end": 1124,
    "range": [
      1123,
      1124
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1129,
    "end": 1130,
    "range": [
      1129,
      1130
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1131,
    "end": 1132,
    "range": [
      1131,
      1132
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1133,
    "end": 1134,
    "range": [
      1133,
      1134
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1141,
    "end": 1142,
    "range": [
      1141,
      1142
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1142,
    "end": 1143,
    "range": [
      1142,
      1143
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1144,
    "end": 1146,
    "range": [
      1144,
      1146
    ]
  },
  {
    "type": "Identifier",
    "value": "requiredKeys",
    "start": 1147,
    "end": 1159,
    "range": [
      1147,
      1159
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1159,
    "end": 1160,
    "range": [
      1159,
      1160
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1160,
    "end": 1161,
    "range": [
      1160,
      1161
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1161,
    "end": 1162,
    "range": [
      1161,
      1162
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1162,
    "end": 1163,
    "range": [
      1162,
      1163
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1163,
    "end": 1164,
    "range": [
      1163,
      1164
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1165,
    "end": 1166,
    "range": [
      1165,
      1166
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1166,
    "end": 1167,
    "range": [
      1166,
      1167
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1167,
    "end": 1168,
    "range": [
      1167,
      1168
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1168,
    "end": 1169,
    "range": [
      1168,
      1169
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1169,
    "end": 1170,
    "range": [
      1169,
      1170
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1175,
    "end": 1176,
    "range": [
      1175,
      1176
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1179,
    "end": 1180,
    "range": [
      1179,
      1180
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1181,
    "end": 1182,
    "range": [
      1181,
      1182
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1183,
    "end": 1190,
    "range": [
      1183,
      1190
    ]
  },
  {
    "type": "Identifier",
    "value": "ZodType",
    "start": 1191,
    "end": 1198,
    "range": [
      1191,
      1198
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1198,
    "end": 1199,
    "range": [
      1198,
      1199
    ]
  },
  {
    "type": "Identifier",
    "value": "Output",
    "start": 1199,
    "end": 1205,
    "range": [
      1199,
      1205
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1205,
    "end": 1206,
    "range": [
      1205,
      1206
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1207,
    "end": 1208,
    "range": [
      1207,
      1208
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1211,
    "end": 1219,
    "range": [
      1211,
      1219
    ]
  },
  {
    "type": "Identifier",
    "value": "_shape",
    "start": 1220,
    "end": 1226,
    "range": [
      1220,
      1226
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1226,
    "end": 1227,
    "range": [
      1226,
      1227
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1228,
    "end": 1229,
    "range": [
      1228,
      1229
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1229,
    "end": 1230,
    "range": [
      1229,
      1230
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1231,
    "end": 1232,
    "range": [
      1231,
      1232
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1234,
    "end": 1238,
    "range": [
      1234,
      1238
    ]
  },
  {
    "type": "Identifier",
    "value": "MyObject",
    "start": 1239,
    "end": 1247,
    "range": [
      1239,
      1247
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1247,
    "end": 1248,
    "range": [
      1247,
      1248
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1248,
    "end": 1249,
    "range": [
      1248,
      1249
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1249,
    "end": 1250,
    "range": [
      1249,
      1250
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1251,
    "end": 1252,
    "range": [
      1251,
      1252
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1253,
    "end": 1254,
    "range": [
      1253,
      1254
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1255,
    "end": 1262,
    "range": [
      1255,
      1262
    ]
  },
  {
    "type": "Identifier",
    "value": "ZodObject",
    "start": 1263,
    "end": 1272,
    "range": [
      1263,
      1272
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1272,
    "end": 1273,
    "range": [
      1272,
      1273
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1273,
    "end": 1278,
    "range": [
      1273,
      1278
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1279,
    "end": 1280,
    "range": [
      1279,
      1280
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1280,
    "end": 1281,
    "range": [
      1280,
      1281
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1284,
    "end": 1285,
    "range": [
      1284,
      1285
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1286,
    "end": 1287,
    "range": [
      1286,
      1287
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1288,
    "end": 1295,
    "range": [
      1288,
      1295
    ]
  },
  {
    "type": "Identifier",
    "value": "ZodRawShape",
    "start": 1296,
    "end": 1307,
    "range": [
      1296,
      1307
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1312,
    "end": 1313,
    "range": [
      1312,
      1313
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1314,
    "end": 1315,
    "range": [
      1314,
      1315
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1320,
    "end": 1321,
    "range": [
      1320,
      1321
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1322,
    "end": 1327,
    "range": [
      1322,
      1327
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1330,
    "end": 1331,
    "range": [
      1330,
      1331
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1332,
    "end": 1337,
    "range": [
      1332,
      1337
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1337,
    "end": 1338,
    "range": [
      1337,
      1338
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1362,
    "end": 1366,
    "range": [
      1362,
      1366
    ]
  },
  {
    "type": "Identifier",
    "value": "Cell",
    "start": 1367,
    "end": 1371,
    "range": [
      1367,
      1371
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1371,
    "end": 1372,
    "range": [
      1371,
      1372
    ]
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 1372,
    "end": 1377,
    "range": [
      1372,
      1377
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1378,
    "end": 1385,
    "range": [
      1378,
      1385
    ]
  },
  {
    "type": "Identifier",
    "value": "BaseValue",
    "start": 1386,
    "end": 1395,
    "range": [
      1386,
      1395
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1396,
    "end": 1397,
    "range": [
      1396,
      1397
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1398,
    "end": 1401,
    "range": [
      1398,
      1401
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1401,
    "end": 1402,
    "range": [
      1401,
      1402
    ]
  },
  {
    "type": "Identifier",
    "value": "BaseValue",
    "start": 1403,
    "end": 1412,
    "range": [
      1403,
      1412
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1413,
    "end": 1414,
    "range": [
      1413,
      1414
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1415,
    "end": 1422,
    "range": [
      1415,
      1422
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1422,
    "end": 1423,
    "range": [
      1422,
      1423
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1424,
    "end": 1425,
    "range": [
      1424,
      1425
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1426,
    "end": 1427,
    "range": [
      1426,
      1427
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 1430,
    "end": 1432,
    "range": [
      1430,
      1432
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1432,
    "end": 1433,
    "range": [
      1432,
      1433
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1434,
    "end": 1440,
    "range": [
      1434,
      1440
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1441,
    "end": 1442,
    "range": [
      1441,
      1442
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1444,
    "end": 1448,
    "range": [
      1444,
      1448
    ]
  },
  {
    "type": "Identifier",
    "value": "Items",
    "start": 1449,
    "end": 1454,
    "range": [
      1449,
      1454
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1454,
    "end": 1455,
    "range": [
      1454,
      1455
    ]
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 1455,
    "end": 1459,
    "range": [
      1455,
      1459
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1460,
    "end": 1467,
    "range": [
      1460,
      1467
    ]
  },
  {
    "type": "Identifier",
    "value": "Cell",
    "start": 1468,
    "end": 1472,
    "range": [
      1468,
      1472
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1473,
    "end": 1474,
    "range": [
      1473,
      1474
    ]
  },
  {
    "type": "Identifier",
    "value": "Cell",
    "start": 1475,
    "end": 1479,
    "range": [
      1475,
      1479
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1479,
    "end": 1480,
    "range": [
      1479,
      1480
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1481,
    "end": 1482,
    "range": [
      1481,
      1482
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1483,
    "end": 1484,
    "range": [
      1483,
      1484
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1487,
    "end": 1491,
    "range": [
      1487,
      1491
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1491,
    "end": 1492,
    "range": [
      1491,
      1492
    ]
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 1493,
    "end": 1497,
    "range": [
      1493,
      1497
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1500,
    "end": 1504,
    "range": [
      1500,
      1504
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1504,
    "end": 1505,
    "range": [
      1504,
      1505
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1506,
    "end": 1512,
    "range": [
      1506,
      1512
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1513,
    "end": 1514,
    "range": [
      1513,
      1514
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1516,
    "end": 1520,
    "range": [
      1516,
      1520
    ]
  },
  {
    "type": "Identifier",
    "value": "InferIOItemToJSType",
    "start": 1521,
    "end": 1540,
    "range": [
      1521,
      1540
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1540,
    "end": 1541,
    "range": [
      1540,
      1541
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1541,
    "end": 1542,
    "range": [
      1541,
      1542
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1543,
    "end": 1550,
    "range": [
      1543,
      1550
    ]
  },
  {
    "type": "Identifier",
    "value": "Items",
    "start": 1551,
    "end": 1556,
    "range": [
      1551,
      1556
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1556,
    "end": 1557,
    "range": [
      1556,
      1557
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1558,
    "end": 1559,
    "range": [
      1558,
      1559
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1562,
    "end": 1563,
    "range": [
      1562,
      1563
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1564,
    "end": 1571,
    "range": [
      1564,
      1571
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1572,
    "end": 1573,
    "range": [
      1572,
      1573
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1574,
    "end": 1578,
    "range": [
      1574,
      1578
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1578,
    "end": 1579,
    "range": [
      1578,
      1579
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1580,
    "end": 1585,
    "range": [
      1580,
      1585
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1586,
    "end": 1587,
    "range": [
      1586,
      1587
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1588,
    "end": 1589,
    "range": [
      1588,
      1589
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1594,
    "end": 1595,
    "range": [
      1594,
      1595
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1596,
    "end": 1597,
    "range": [
      1596,
      1597
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1598,
    "end": 1605,
    "range": [
      1598,
      1605
    ]
  },
  {
    "type": "Identifier",
    "value": "Cell",
    "start": 1606,
    "end": 1610,
    "range": [
      1606,
      1610
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1610,
    "end": 1611,
    "range": [
      1610,
      1611
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1611,
    "end": 1616,
    "range": [
      1611,
      1616
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1617,
    "end": 1618,
    "range": [
      1617,
      1618
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1664,
    "end": 1665,
    "range": [
      1664,
      1665
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1672,
    "end": 1673,
    "range": [
      1672,
      1673
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1674,
    "end": 1675,
    "range": [
      1674,
      1675
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1682,
    "end": 1683,
    "range": [
      1682,
      1683
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1684,
    "end": 1689,
    "range": [
      1684,
      1689
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1694,
    "end": 1695,
    "range": [
      1694,
      1695
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1696,
    "end": 1701,
    "range": [
      1696,
      1701
    ]
  }
]
```
