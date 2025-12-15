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
        "name": "Covariant",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 14
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
              "start": 15,
              "end": 16
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 15,
            "end": 16
          }
        ],
        "start": 14,
        "end": 17
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNeverKeyword",
                "start": 24,
                "end": 29
              },
              "start": 22,
              "end": 29
            },
            "start": 21,
            "end": 29
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 35
            },
            "typeArguments": null,
            "start": 34,
            "end": 35
          },
          "start": 31,
          "end": 35
        },
        "start": 20,
        "end": 35
      },
      "declare": false,
      "start": 0,
      "end": 36
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Effect",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 54
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
              "start": 59,
              "end": 60
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": true,
            "const": false,
            "start": 55,
            "end": 60
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 67
            },
            "constraint": null,
            "default": {
              "type": "TSNeverKeyword",
              "start": 70,
              "end": 75
            },
            "in": false,
            "out": true,
            "const": false,
            "start": 62,
            "end": 75
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 81,
              "end": 82
            },
            "constraint": null,
            "default": {
              "type": "TSNeverKeyword",
              "start": 85,
              "end": 90
            },
            "in": false,
            "out": true,
            "const": false,
            "start": 77,
            "end": 90
          }
        ],
        "start": 54,
        "end": 91
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
              "name": "_A",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 107
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Covariant",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 109,
                  "end": 118
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
                        "start": 119,
                        "end": 120
                      },
                      "typeArguments": null,
                      "start": 119,
                      "end": 120
                    }
                  ],
                  "start": 118,
                  "end": 121
                },
                "start": 109,
                "end": 121
              },
              "start": 107,
              "end": 121
            },
            "accessibility": null,
            "static": false,
            "start": 96,
            "end": 122
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_E",
              "optional": false,
              "typeAnnotation": null,
              "start": 134,
              "end": 136
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Covariant",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 138,
                  "end": 147
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
                        "start": 148,
                        "end": 149
                      },
                      "typeArguments": null,
                      "start": 148,
                      "end": 149
                    }
                  ],
                  "start": 147,
                  "end": 150
                },
                "start": 138,
                "end": 150
              },
              "start": 136,
              "end": 150
            },
            "accessibility": null,
            "static": false,
            "start": 125,
            "end": 151
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_R",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 165
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Covariant",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 167,
                  "end": 176
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 177,
                        "end": 178
                      },
                      "typeArguments": null,
                      "start": 177,
                      "end": 178
                    }
                  ],
                  "start": 176,
                  "end": 179
                },
                "start": 167,
                "end": 179
              },
              "start": 165,
              "end": 179
            },
            "accessibility": null,
            "static": false,
            "start": 154,
            "end": 180
          }
        ],
        "start": 92,
        "end": 182
      },
      "declare": false,
      "start": 38,
      "end": 182
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "effectGen",
        "optional": false,
        "typeAnnotation": null,
        "start": 201,
        "end": 210
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
              "start": 211,
              "end": 214
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Effect",
                "optional": false,
                "typeAnnotation": null,
                "start": 223,
                "end": 229
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 230,
                    "end": 233
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 235,
                    "end": 238
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 240,
                    "end": 243
                  }
                ],
                "start": 229,
                "end": 244
              },
              "start": 223,
              "end": 244
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 211,
            "end": 244
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "AEff",
              "optional": false,
              "typeAnnotation": null,
              "start": 246,
              "end": 250
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 246,
            "end": 250
          }
        ],
        "start": 210,
        "end": 251
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
                    "start": 264,
                    "end": 273
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
                          "start": 274,
                          "end": 277
                        },
                        "typeArguments": null,
                        "start": 274,
                        "end": 277
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "AEff",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 279,
                          "end": 283
                        },
                        "typeArguments": null,
                        "start": 279,
                        "end": 283
                      },
                      {
                        "type": "TSNeverKeyword",
                        "start": 285,
                        "end": 290
                      }
                    ],
                    "start": 273,
                    "end": 291
                  },
                  "start": 264,
                  "end": 291
                },
                "start": 261,
                "end": 291
              },
              "start": 258,
              "end": 291
            },
            "start": 256,
            "end": 291
          },
          "start": 255,
          "end": 291
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Effect",
            "optional": false,
            "typeAnnotation": null,
            "start": 295,
            "end": 301
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
                  "start": 305,
                  "end": 309
                },
                "typeArguments": null,
                "start": 305,
                "end": 309
              },
              {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Eff",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 314,
                        "end": 317
                      },
                      "typeArguments": null,
                      "start": 314,
                      "end": 317
                    }
                  ],
                  "start": 313,
                  "end": 318
                },
                "extendsType": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSNeverKeyword",
                      "start": 328,
                      "end": 333
                    }
                  ],
                  "start": 327,
                  "end": 334
                },
                "trueType": {
                  "type": "TSNeverKeyword",
                  "start": 341,
                  "end": 346
                },
                "falseType": {
                  "type": "TSConditionalType",
                  "checkType": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Eff",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 354,
                          "end": 357
                        },
                        "typeArguments": null,
                        "start": 354,
                        "end": 357
                      }
                    ],
                    "start": 353,
                    "end": 358
                  },
                  "extendsType": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Effect",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 368,
                          "end": 374
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
                                  "start": 381,
                                  "end": 383
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 381,
                                "end": 383
                              },
                              "start": 375,
                              "end": 383
                            },
                            {
                              "type": "TSInferType",
                              "typeParameter": {
                                "type": "TSTypeParameter",
                                "name": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "E",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 391,
                                  "end": 392
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 391,
                                "end": 392
                              },
                              "start": 385,
                              "end": 392
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
                                  "start": 400,
                                  "end": 402
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 400,
                                "end": 402
                              },
                              "start": 394,
                              "end": 402
                            }
                          ],
                          "start": 374,
                          "end": 403
                        },
                        "start": 368,
                        "end": 403
                      }
                    ],
                    "start": 367,
                    "end": 404
                  },
                  "trueType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 411,
                      "end": 412
                    },
                    "typeArguments": null,
                    "start": 411,
                    "end": 412
                  },
                  "falseType": {
                    "type": "TSNeverKeyword",
                    "start": 419,
                    "end": 424
                  },
                  "start": 353,
                  "end": 424
                },
                "start": 313,
                "end": 424
              },
              {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Eff",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 429,
                        "end": 432
                      },
                      "typeArguments": null,
                      "start": 429,
                      "end": 432
                    }
                  ],
                  "start": 428,
                  "end": 433
                },
                "extendsType": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSNeverKeyword",
                      "start": 443,
                      "end": 448
                    }
                  ],
                  "start": 442,
                  "end": 449
                },
                "trueType": {
                  "type": "TSNeverKeyword",
                  "start": 456,
                  "end": 461
                },
                "falseType": {
                  "type": "TSConditionalType",
                  "checkType": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Eff",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 469,
                          "end": 472
                        },
                        "typeArguments": null,
                        "start": 469,
                        "end": 472
                      }
                    ],
                    "start": 468,
                    "end": 473
                  },
                  "extendsType": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Effect",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 483,
                          "end": 489
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
                                  "start": 496,
                                  "end": 498
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 496,
                                "end": 498
                              },
                              "start": 490,
                              "end": 498
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
                                  "start": 506,
                                  "end": 508
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 506,
                                "end": 508
                              },
                              "start": 500,
                              "end": 508
                            },
                            {
                              "type": "TSInferType",
                              "typeParameter": {
                                "type": "TSTypeParameter",
                                "name": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
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
                              },
                              "start": 510,
                              "end": 517
                            }
                          ],
                          "start": 489,
                          "end": 518
                        },
                        "start": 483,
                        "end": 518
                      }
                    ],
                    "start": 482,
                    "end": 519
                  },
                  "trueType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 526,
                      "end": 527
                    },
                    "typeArguments": null,
                    "start": 526,
                    "end": 527
                  },
                  "falseType": {
                    "type": "TSNeverKeyword",
                    "start": 534,
                    "end": 539
                  },
                  "start": 468,
                  "end": 539
                },
                "start": 428,
                "end": 539
              }
            ],
            "start": 301,
            "end": 541
          },
          "start": 295,
          "end": 541
        },
        "start": 293,
        "end": 541
      },
      "body": null,
      "expression": false,
      "start": 184,
      "end": 542
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "effectFn",
        "optional": false,
        "typeAnnotation": null,
        "start": 561,
        "end": 569
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
              "start": 573,
              "end": 576
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Effect",
                "optional": false,
                "typeAnnotation": null,
                "start": 585,
                "end": 591
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 592,
                    "end": 595
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 597,
                    "end": 600
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 602,
                    "end": 605
                  }
                ],
                "start": 591,
                "end": 606
              },
              "start": 585,
              "end": 606
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 573,
            "end": 606
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "AEff",
              "optional": false,
              "typeAnnotation": null,
              "start": 610,
              "end": 614
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 610,
            "end": 614
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Args",
              "optional": false,
              "typeAnnotation": null,
              "start": 618,
              "end": 622
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 631,
                "end": 636
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 637,
                    "end": 640
                  }
                ],
                "start": 636,
                "end": 641
              },
              "start": 631,
              "end": 641
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 618,
            "end": 641
          }
        ],
        "start": 569,
        "end": 643
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
                    "start": 657,
                    "end": 661
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 663,
                        "end": 667
                      },
                      "typeArguments": null,
                      "start": 663,
                      "end": 667
                    },
                    "start": 661,
                    "end": 667
                  },
                  "value": null,
                  "start": 654,
                  "end": 667
                }
              ],
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
                    "start": 672,
                    "end": 681
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
                          "start": 682,
                          "end": 685
                        },
                        "typeArguments": null,
                        "start": 682,
                        "end": 685
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "AEff",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 687,
                          "end": 691
                        },
                        "typeArguments": null,
                        "start": 687,
                        "end": 691
                      },
                      {
                        "type": "TSNeverKeyword",
                        "start": 693,
                        "end": 698
                      }
                    ],
                    "start": 681,
                    "end": 699
                  },
                  "start": 672,
                  "end": 699
                },
                "start": 669,
                "end": 699
              },
              "start": 653,
              "end": 699
            },
            "start": 651,
            "end": 699
          },
          "start": 647,
          "end": 699
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
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
                "start": 710,
                "end": 714
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 716,
                    "end": 720
                  },
                  "typeArguments": null,
                  "start": 716,
                  "end": 720
                },
                "start": 714,
                "end": 720
              },
              "value": null,
              "start": 707,
              "end": 720
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Effect",
                "optional": false,
                "typeAnnotation": null,
                "start": 726,
                "end": 732
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
                      "start": 736,
                      "end": 740
                    },
                    "typeArguments": null,
                    "start": 736,
                    "end": 740
                  },
                  {
                    "type": "TSConditionalType",
                    "checkType": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Eff",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 745,
                            "end": 748
                          },
                          "typeArguments": null,
                          "start": 745,
                          "end": 748
                        }
                      ],
                      "start": 744,
                      "end": 749
                    },
                    "extendsType": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNeverKeyword",
                          "start": 759,
                          "end": 764
                        }
                      ],
                      "start": 758,
                      "end": 765
                    },
                    "trueType": {
                      "type": "TSNeverKeyword",
                      "start": 772,
                      "end": 777
                    },
                    "falseType": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Eff",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 785,
                              "end": 788
                            },
                            "typeArguments": null,
                            "start": 785,
                            "end": 788
                          }
                        ],
                        "start": 784,
                        "end": 789
                      },
                      "extendsType": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Effect",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 799,
                              "end": 805
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
                                      "start": 812,
                                      "end": 814
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 812,
                                    "end": 814
                                  },
                                  "start": 806,
                                  "end": 814
                                },
                                {
                                  "type": "TSInferType",
                                  "typeParameter": {
                                    "type": "TSTypeParameter",
                                    "name": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "E",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 822,
                                      "end": 823
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 822,
                                    "end": 823
                                  },
                                  "start": 816,
                                  "end": 823
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
                                      "start": 831,
                                      "end": 833
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 831,
                                    "end": 833
                                  },
                                  "start": 825,
                                  "end": 833
                                }
                              ],
                              "start": 805,
                              "end": 834
                            },
                            "start": 799,
                            "end": 834
                          }
                        ],
                        "start": 798,
                        "end": 835
                      },
                      "trueType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 842,
                          "end": 843
                        },
                        "typeArguments": null,
                        "start": 842,
                        "end": 843
                      },
                      "falseType": {
                        "type": "TSNeverKeyword",
                        "start": 850,
                        "end": 855
                      },
                      "start": 784,
                      "end": 855
                    },
                    "start": 744,
                    "end": 855
                  },
                  {
                    "type": "TSConditionalType",
                    "checkType": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Eff",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 860,
                            "end": 863
                          },
                          "typeArguments": null,
                          "start": 860,
                          "end": 863
                        }
                      ],
                      "start": 859,
                      "end": 864
                    },
                    "extendsType": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNeverKeyword",
                          "start": 874,
                          "end": 879
                        }
                      ],
                      "start": 873,
                      "end": 880
                    },
                    "trueType": {
                      "type": "TSNeverKeyword",
                      "start": 887,
                      "end": 892
                    },
                    "falseType": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Eff",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 900,
                              "end": 903
                            },
                            "typeArguments": null,
                            "start": 900,
                            "end": 903
                          }
                        ],
                        "start": 899,
                        "end": 904
                      },
                      "extendsType": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Effect",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 914,
                              "end": 920
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
                                      "start": 927,
                                      "end": 929
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 927,
                                    "end": 929
                                  },
                                  "start": 921,
                                  "end": 929
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
                                      "start": 937,
                                      "end": 939
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 937,
                                    "end": 939
                                  },
                                  "start": 931,
                                  "end": 939
                                },
                                {
                                  "type": "TSInferType",
                                  "typeParameter": {
                                    "type": "TSTypeParameter",
                                    "name": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "R",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 947,
                                      "end": 948
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 947,
                                    "end": 948
                                  },
                                  "start": 941,
                                  "end": 948
                                }
                              ],
                              "start": 920,
                              "end": 949
                            },
                            "start": 914,
                            "end": 949
                          }
                        ],
                        "start": 913,
                        "end": 950
                      },
                      "trueType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 957,
                          "end": 958
                        },
                        "typeArguments": null,
                        "start": 957,
                        "end": 958
                      },
                      "falseType": {
                        "type": "TSNeverKeyword",
                        "start": 965,
                        "end": 970
                      },
                      "start": 899,
                      "end": 970
                    },
                    "start": 859,
                    "end": 970
                  }
                ],
                "start": 732,
                "end": 972
              },
              "start": 726,
              "end": 972
            },
            "start": 723,
            "end": 972
          },
          "start": 703,
          "end": 972
        },
        "start": 701,
        "end": 972
      },
      "body": null,
      "expression": false,
      "start": 544,
      "end": 973
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tag",
        "optional": false,
        "typeAnnotation": null,
        "start": 985,
        "end": 988
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Id",
              "optional": false,
              "typeAnnotation": null,
              "start": 996,
              "end": 998
            },
            "constraint": null,
            "default": null,
            "in": true,
            "out": true,
            "const": false,
            "start": 989,
            "end": 998
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 1007,
              "end": 1012
            },
            "constraint": null,
            "default": null,
            "in": true,
            "out": true,
            "const": false,
            "start": 1000,
            "end": 1012
          }
        ],
        "start": 988,
        "end": 1013
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
              "name": "_op",
              "optional": false,
              "typeAnnotation": null,
              "start": 1027,
              "end": 1030
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "Tag",
                  "raw": "\"Tag\"",
                  "start": 1032,
                  "end": 1037
                },
                "start": 1032,
                "end": 1037
              },
              "start": 1030,
              "end": 1037
            },
            "accessibility": null,
            "static": false,
            "start": 1018,
            "end": 1038
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Service",
              "optional": false,
              "typeAnnotation": null,
              "start": 1050,
              "end": 1057
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1059,
                  "end": 1064
                },
                "typeArguments": null,
                "start": 1059,
                "end": 1064
              },
              "start": 1057,
              "end": 1064
            },
            "accessibility": null,
            "static": false,
            "start": 1041,
            "end": 1065
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Identifier",
              "optional": false,
              "typeAnnotation": null,
              "start": 1077,
              "end": 1087
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1089,
                  "end": 1091
                },
                "typeArguments": null,
                "start": 1089,
                "end": 1091
              },
              "start": 1087,
              "end": 1091
            },
            "accessibility": null,
            "static": false,
            "start": 1068,
            "end": 1092
          }
        ],
        "start": 1014,
        "end": 1094
      },
      "declare": false,
      "start": 975,
      "end": 1094
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TagClassShape",
        "optional": false,
        "typeAnnotation": null,
        "start": 1106,
        "end": 1119
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Id",
              "optional": false,
              "typeAnnotation": null,
              "start": 1120,
              "end": 1122
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1120,
            "end": 1122
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Shape",
              "optional": false,
              "typeAnnotation": null,
              "start": 1124,
              "end": 1129
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1124,
            "end": 1129
          }
        ],
        "start": 1119,
        "end": 1130
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
              "name": "Type",
              "optional": false,
              "typeAnnotation": null,
              "start": 1144,
              "end": 1148
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Shape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1150,
                  "end": 1155
                },
                "typeArguments": null,
                "start": 1150,
                "end": 1155
              },
              "start": 1148,
              "end": 1155
            },
            "accessibility": null,
            "static": false,
            "start": 1135,
            "end": 1156
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Id",
              "optional": false,
              "typeAnnotation": null,
              "start": 1168,
              "end": 1170
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1172,
                  "end": 1174
                },
                "typeArguments": null,
                "start": 1172,
                "end": 1174
              },
              "start": 1170,
              "end": 1174
            },
            "accessibility": null,
            "static": false,
            "start": 1159,
            "end": 1175
          }
        ],
        "start": 1131,
        "end": 1177
      },
      "declare": false,
      "start": 1096,
      "end": 1177
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TagClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 1189,
        "end": 1197
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Self",
              "optional": false,
              "typeAnnotation": null,
              "start": 1198,
              "end": 1202
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1198,
            "end": 1202
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Id",
              "optional": false,
              "typeAnnotation": null,
              "start": 1204,
              "end": 1206
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1215,
              "end": 1221
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1204,
            "end": 1221
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Type",
              "optional": false,
              "typeAnnotation": null,
              "start": 1223,
              "end": 1227
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1223,
            "end": 1227
          }
        ],
        "start": 1197,
        "end": 1228
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Tag",
            "optional": false,
            "typeAnnotation": null,
            "start": 1237,
            "end": 1240
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Self",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1241,
                  "end": 1245
                },
                "typeArguments": null,
                "start": 1241,
                "end": 1245
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1247,
                  "end": 1251
                },
                "typeArguments": null,
                "start": 1247,
                "end": 1251
              }
            ],
            "start": 1240,
            "end": 1252
          },
          "start": 1237,
          "end": 1252
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNeverKeyword",
                    "start": 1265,
                    "end": 1270
                  },
                  "start": 1263,
                  "end": 1270
                },
                "start": 1262,
                "end": 1270
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TagClassShape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1273,
                  "end": 1286
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Id",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1287,
                        "end": 1289
                      },
                      "typeArguments": null,
                      "start": 1287,
                      "end": 1289
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1291,
                        "end": 1295
                      },
                      "typeArguments": null,
                      "start": 1291,
                      "end": 1295
                    }
                  ],
                  "start": 1286,
                  "end": 1296
                },
                "start": 1273,
                "end": 1296
              },
              "start": 1271,
              "end": 1296
            },
            "start": 1257,
            "end": 1297
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "key",
              "optional": false,
              "typeAnnotation": null,
              "start": 1309,
              "end": 1312
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1314,
                  "end": 1316
                },
                "typeArguments": null,
                "start": 1314,
                "end": 1316
              },
              "start": 1312,
              "end": 1316
            },
            "accessibility": null,
            "static": false,
            "start": 1300,
            "end": 1317
          }
        ],
        "start": 1253,
        "end": 1319
      },
      "declare": false,
      "start": 1179,
      "end": 1319
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "layerEffect",
        "optional": false,
        "typeAnnotation": null,
        "start": 1338,
        "end": 1349
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
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 1350,
              "end": 1351
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1350,
            "end": 1351
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 1353,
              "end": 1354
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1353,
            "end": 1354
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 1356,
              "end": 1357
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1356,
            "end": 1357
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 1359,
              "end": 1360
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1359,
            "end": 1360
          }
        ],
        "start": 1349,
        "end": 1361
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "tag",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Tag",
                "optional": false,
                "typeAnnotation": null,
                "start": 1370,
                "end": 1373
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
                      "start": 1374,
                      "end": 1375
                    },
                    "typeArguments": null,
                    "start": 1374,
                    "end": 1375
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1377,
                      "end": 1378
                    },
                    "typeArguments": null,
                    "start": 1377,
                    "end": 1378
                  }
                ],
                "start": 1373,
                "end": 1379
              },
              "start": 1370,
              "end": 1379
            },
            "start": 1368,
            "end": 1379
          },
          "start": 1365,
          "end": 1379
        },
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
                "name": "Effect",
                "optional": false,
                "typeAnnotation": null,
                "start": 1391,
                "end": 1397
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1398,
                      "end": 1399
                    },
                    "typeArguments": null,
                    "start": 1398,
                    "end": 1399
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1401,
                      "end": 1402
                    },
                    "typeArguments": null,
                    "start": 1401,
                    "end": 1402
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1404,
                      "end": 1405
                    },
                    "typeArguments": null,
                    "start": 1404,
                    "end": 1405
                  }
                ],
                "start": 1397,
                "end": 1406
              },
              "start": 1391,
              "end": 1406
            },
            "start": 1389,
            "end": 1406
          },
          "start": 1383,
          "end": 1406
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 1410,
          "end": 1417
        },
        "start": 1408,
        "end": 1417
      },
      "body": null,
      "expression": false,
      "start": 1321,
      "end": 1418
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tag",
        "optional": false,
        "typeAnnotation": null,
        "start": 1437,
        "end": 1440
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
              "name": "Id",
              "optional": false,
              "typeAnnotation": null,
              "start": 1447,
              "end": 1449
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1458,
              "end": 1464
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 1441,
            "end": 1464
          }
        ],
        "start": 1440,
        "end": 1465
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "id",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Id",
                "optional": false,
                "typeAnnotation": null,
                "start": 1473,
                "end": 1475
              },
              "typeArguments": null,
              "start": 1473,
              "end": 1475
            },
            "start": 1471,
            "end": 1475
          },
          "start": 1469,
          "end": 1475
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
                  "name": "Self",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1480,
                  "end": 1484
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 1480,
                "end": 1484
              },
              {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Shape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1486,
                  "end": 1491
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 1486,
                "end": 1491
              }
            ],
            "start": 1479,
            "end": 1492
          },
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TagClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 1498,
                "end": 1506
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Self",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1507,
                      "end": 1511
                    },
                    "typeArguments": null,
                    "start": 1507,
                    "end": 1511
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1513,
                      "end": 1515
                    },
                    "typeArguments": null,
                    "start": 1513,
                    "end": 1515
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Shape",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1517,
                      "end": 1522
                    },
                    "typeArguments": null,
                    "start": 1517,
                    "end": 1522
                  }
                ],
                "start": 1506,
                "end": 1523
              },
              "start": 1498,
              "end": 1523
            },
            "start": 1495,
            "end": 1523
          },
          "start": 1479,
          "end": 1523
        },
        "start": 1477,
        "end": 1523
      },
      "body": null,
      "expression": false,
      "start": 1420,
      "end": 1524
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1532,
        "end": 1535
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Tag",
            "optional": false,
            "typeAnnotation": null,
            "start": 1544,
            "end": 1547
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "Foo",
              "raw": "\"Foo\"",
              "start": 1548,
              "end": 1553
            }
          ],
          "optional": false,
          "start": 1544,
          "end": 1554
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1558,
                "end": 1561
              },
              "typeArguments": null,
              "start": 1558,
              "end": 1561
            },
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
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1571,
                    "end": 1573
                  },
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
                              "type": "TSStringKeyword",
                              "start": 1579,
                              "end": 1585
                            },
                            "start": 1577,
                            "end": 1585
                          },
                          "start": 1576,
                          "end": 1585
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Effect",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1590,
                            "end": 1596
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSVoidKeyword",
                                "start": 1597,
                                "end": 1601
                              }
                            ],
                            "start": 1596,
                            "end": 1602
                          },
                          "start": 1590,
                          "end": 1602
                        },
                        "start": 1587,
                        "end": 1602
                      },
                      "start": 1575,
                      "end": 1602
                    },
                    "start": 1573,
                    "end": 1602
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1571,
                  "end": 1603
                }
              ],
              "start": 1565,
              "end": 1607
            }
          ],
          "start": 1554,
          "end": 1609
        },
        "arguments": [],
        "optional": false,
        "start": 1544,
        "end": 1611
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1612,
        "end": 1614
      },
      "abstract": false,
      "declare": false,
      "start": 1526,
      "end": 1614
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "layerEffect",
          "optional": false,
          "typeAnnotation": null,
          "start": 1616,
          "end": 1627
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1631,
            "end": 1634
          },
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "effectGen",
              "optional": false,
              "typeAnnotation": null,
              "start": 1638,
              "end": 1647
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
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fn",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1682,
                              "end": 1684
                            },
                            "value": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "effectFn",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1686,
                                "end": 1694
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
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "a",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1706,
                                      "end": 1707
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "a",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1719,
                                          "end": 1720
                                        },
                                        "directive": null,
                                        "start": 1719,
                                        "end": 1721
                                      }
                                    ],
                                    "start": 1709,
                                    "end": 1739
                                  },
                                  "expression": false,
                                  "start": 1695,
                                  "end": 1739
                                }
                              ],
                              "optional": false,
                              "start": 1686,
                              "end": 1740
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1682,
                            "end": 1740
                          }
                        ],
                        "start": 1674,
                        "end": 1747
                      },
                      "start": 1667,
                      "end": 1748
                    }
                  ],
                  "start": 1661,
                  "end": 1752
                },
                "expression": false,
                "start": 1648,
                "end": 1752
              }
            ],
            "optional": false,
            "start": 1638,
            "end": 1753
          }
        ],
        "optional": false,
        "start": 1616,
        "end": 1755
      },
      "directive": null,
      "start": 1616,
      "end": 1756
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1756
}
```
