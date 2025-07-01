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
