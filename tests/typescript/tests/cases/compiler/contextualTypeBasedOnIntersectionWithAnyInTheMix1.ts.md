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
        "name": "ComponentType",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
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
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 20
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 19,
            "end": 20
          }
        ],
        "start": 18,
        "end": 21
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 28,
                  "end": 29
                },
                "typeArguments": null,
                "start": 28,
                "end": 29
              },
              "start": 26,
              "end": 29
            },
            "start": 25,
            "end": 29
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 34,
            "end": 37
          },
          "start": 31,
          "end": 37
        },
        "start": 24,
        "end": 37
      },
      "declare": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 58
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 60
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 59,
            "end": 60
          }
        ],
        "start": 58,
        "end": 61
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
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
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentType",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 87
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
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 94,
                    "end": 95
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 94,
                  "end": 95
                },
                "start": 88,
                "end": 95
              }
            ],
            "start": 87,
            "end": 96
          },
          "start": 74,
          "end": 96
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 100
          },
          "typeArguments": null,
          "start": 99,
          "end": 100
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 103,
          "end": 108
        },
        "start": 64,
        "end": 108
      },
      "declare": false,
      "start": 39,
      "end": 109
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Attrs",
        "optional": false,
        "typeAnnotation": null,
        "start": 116,
        "end": 121
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 123
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 122,
            "end": 123
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 126
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 135,
                "end": 142
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
                      "start": 143,
                      "end": 144
                    },
                    "typeArguments": null,
                    "start": 143,
                    "end": 144
                  }
                ],
                "start": 142,
                "end": 145
              },
              "start": 135,
              "end": 145
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 125,
            "end": 145
          }
        ],
        "start": 121,
        "end": 146
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 149,
          "end": 150
        },
        "typeArguments": null,
        "start": 149,
        "end": 150
      },
      "declare": false,
      "start": 111,
      "end": 151
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StyledFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 163,
        "end": 177
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 182
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ComponentType",
                "optional": false,
                "typeAnnotation": null,
                "start": 191,
                "end": 204
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 205,
                    "end": 208
                  }
                ],
                "start": 204,
                "end": 209
              },
              "start": 191,
              "end": 209
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 181,
            "end": 209
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 213,
              "end": 214
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 223,
              "end": 229
            },
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 232,
              "end": 234
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 213,
            "end": 234
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 239
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 254,
                "end": 257
              },
              "start": 248,
              "end": 257
            },
            "default": {
              "type": "TSNeverKeyword",
              "start": 260,
              "end": 265
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 238,
            "end": 265
          }
        ],
        "start": 177,
        "end": 268
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
              "name": "attrs",
              "optional": false,
              "typeAnnotation": null,
              "start": 273,
              "end": 278
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 284,
                    "end": 285
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 284,
                  "end": 285
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NewA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 291,
                    "end": 295
                  },
                  "constraint": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Partial",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 304,
                          "end": 311
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSIntersectionType",
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ComponentProps",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 312,
                                    "end": 326
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 327,
                                          "end": 328
                                        },
                                        "typeArguments": null,
                                        "start": 327,
                                        "end": 328
                                      }
                                    ],
                                    "start": 326,
                                    "end": 329
                                  },
                                  "start": 312,
                                  "end": 329
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 332,
                                    "end": 333
                                  },
                                  "typeArguments": null,
                                  "start": 332,
                                  "end": 333
                                }
                              ],
                              "start": 312,
                              "end": 333
                            }
                          ],
                          "start": 311,
                          "end": 334
                        },
                        "start": 304,
                        "end": 334
                      },
                      {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSIndexSignature",
                            "parameters": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "others",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 354,
                                    "end": 360
                                  },
                                  "start": 352,
                                  "end": 360
                                },
                                "start": 346,
                                "end": 360
                              }
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 363,
                                "end": 366
                              },
                              "start": 361,
                              "end": 366
                            },
                            "readonly": false,
                            "static": false,
                            "accessibility": null,
                            "start": 345,
                            "end": 367
                          }
                        ],
                        "start": 337,
                        "end": 373
                      }
                    ],
                    "start": 304,
                    "end": 373
                  },
                  "default": {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 376,
                    "end": 378
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 291,
                  "end": 378
                }
              ],
              "start": 278,
              "end": 383
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "attrs",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Attrs",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 396,
                      "end": 401
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSIntersectionType",
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ComponentProps",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 402,
                                "end": 416
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "C",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 417,
                                      "end": 418
                                    },
                                    "typeArguments": null,
                                    "start": 417,
                                    "end": 418
                                  }
                                ],
                                "start": 416,
                                "end": 419
                              },
                              "start": 402,
                              "end": 419
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 422,
                                "end": 423
                              },
                              "typeArguments": null,
                              "start": 422,
                              "end": 423
                            }
                          ],
                          "start": 402,
                          "end": 423
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "NewA",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 425,
                            "end": 429
                          },
                          "typeArguments": null,
                          "start": 425,
                          "end": 429
                        }
                      ],
                      "start": 401,
                      "end": 430
                    },
                    "start": 396,
                    "end": 430
                  },
                  "start": 394,
                  "end": 430
                },
                "start": 389,
                "end": 430
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StyledFunction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 437,
                  "end": 451
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 452,
                        "end": 453
                      },
                      "typeArguments": null,
                      "start": 452,
                      "end": 453
                    },
                    {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "O",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 455,
                            "end": 456
                          },
                          "typeArguments": null,
                          "start": 455,
                          "end": 456
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "NewA",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 459,
                            "end": 463
                          },
                          "typeArguments": null,
                          "start": 459,
                          "end": 463
                        }
                      ],
                      "start": 455,
                      "end": 463
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 465,
                            "end": 466
                          },
                          "typeArguments": null,
                          "start": 465,
                          "end": 466
                        },
                        {
                          "type": "TSTypeOperator",
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "NewA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 475,
                              "end": 479
                            },
                            "typeArguments": null,
                            "start": 475,
                            "end": 479
                          },
                          "start": 469,
                          "end": 479
                        }
                      ],
                      "start": 465,
                      "end": 479
                    }
                  ],
                  "start": 451,
                  "end": 480
                },
                "start": 437,
                "end": 480
              },
              "start": 435,
              "end": 480
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 273,
            "end": 481
          }
        ],
        "start": 269,
        "end": 483
      },
      "declare": false,
      "start": 153,
      "end": 483
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StyledInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 495,
        "end": 510
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 516,
                    "end": 517
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ComponentType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 526,
                      "end": 539
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 540,
                          "end": 543
                        }
                      ],
                      "start": 539,
                      "end": 544
                    },
                    "start": 526,
                    "end": 544
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 516,
                  "end": 544
                }
              ],
              "start": 515,
              "end": 545
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "component",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 557,
                      "end": 558
                    },
                    "typeArguments": null,
                    "start": 557,
                    "end": 558
                  },
                  "start": 555,
                  "end": 558
                },
                "start": 546,
                "end": 558
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StyledFunction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 561,
                  "end": 575
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 576,
                        "end": 577
                      },
                      "typeArguments": null,
                      "start": 576,
                      "end": 577
                    }
                  ],
                  "start": 575,
                  "end": 578
                },
                "start": 561,
                "end": 578
              },
              "start": 559,
              "end": 578
            },
            "start": 515,
            "end": 579
          }
        ],
        "start": 511,
        "end": 581
      },
      "declare": false,
      "start": 485,
      "end": 581
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
            "name": "styled",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StyledInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 605,
                  "end": 620
                },
                "typeArguments": null,
                "start": 605,
                "end": 620
              },
              "start": 603,
              "end": 620
            },
            "start": 597,
            "end": 620
          },
          "init": null,
          "definite": false,
          "start": 597,
          "end": 620
        }
      ],
      "declare": true,
      "start": 583,
      "end": 621
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 633,
        "end": 642
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "as",
              "optional": false,
              "typeAnnotation": null,
              "start": 647,
              "end": 649
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "select",
                      "raw": "\"select\"",
                      "start": 652,
                      "end": 660
                    },
                    "start": 652,
                    "end": 660
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "input",
                      "raw": "\"input\"",
                      "start": 663,
                      "end": 670
                    },
                    "start": 663,
                    "end": 670
                  }
                ],
                "start": 652,
                "end": 670
              },
              "start": 650,
              "end": 670
            },
            "accessibility": null,
            "static": false,
            "start": 647,
            "end": 671
          }
        ],
        "start": 643,
        "end": 673
      },
      "declare": false,
      "start": 623,
      "end": 673
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
            "name": "Flex",
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
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "BaseProps",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 703,
                          "end": 712
                        },
                        "typeArguments": null,
                        "start": 703,
                        "end": 712
                      },
                      "start": 701,
                      "end": 712
                    },
                    "start": 696,
                    "end": 712
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 717,
                    "end": 721
                  },
                  "start": 714,
                  "end": 721
                },
                "start": 695,
                "end": 721
              },
              "start": 693,
              "end": 721
            },
            "start": 689,
            "end": 721
          },
          "init": null,
          "definite": false,
          "start": 689,
          "end": 721
        }
      ],
      "declare": true,
      "start": 675,
      "end": 722
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "StyledSelect",
              "optional": false,
              "typeAnnotation": null,
              "start": 737,
              "end": 749
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "styled",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 752,
                    "end": 758
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Flex",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 759,
                      "end": 763
                    }
                  ],
                  "optional": false,
                  "start": 752,
                  "end": 764
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "attrs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 765,
                  "end": 770
                },
                "optional": false,
                "computed": false,
                "start": 752,
                "end": 770
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
                        "name": "as",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 775,
                        "end": 777
                      },
                      "value": {
                        "type": "Literal",
                        "value": "select",
                        "raw": "\"select\"",
                        "start": 779,
                        "end": 787
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 775,
                      "end": 787
                    }
                  ],
                  "start": 771,
                  "end": 790
                }
              ],
              "optional": false,
              "start": 752,
              "end": 791
            },
            "definite": false,
            "start": 737,
            "end": 791
          }
        ],
        "declare": false,
        "start": 731,
        "end": 792
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 724,
      "end": 792
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 792
}
```
