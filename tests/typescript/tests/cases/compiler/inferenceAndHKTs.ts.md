__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TypeLambda",
          "optional": false,
          "typeAnnotation": null,
          "start": 39,
          "end": 49
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
              "readonly": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 65,
                "end": 66
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 68,
                  "end": 75
                },
                "start": 66,
                "end": 75
              },
              "accessibility": null,
              "static": false,
              "start": 56,
              "end": 76
            }
          ],
          "start": 50,
          "end": 78
        },
        "declare": false,
        "start": 29,
        "end": 78
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 22,
      "end": 78
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TypeClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 97,
          "end": 106
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 108
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TypeLambda",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 117,
                  "end": 127
                },
                "typeArguments": null,
                "start": 117,
                "end": 127
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 107,
              "end": 127
            }
          ],
          "start": 106,
          "end": 128
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
                "name": "_F",
                "optional": false,
                "typeAnnotation": null,
                "start": 144,
                "end": 146
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 148,
                    "end": 149
                  },
                  "typeArguments": null,
                  "start": 148,
                  "end": 149
                },
                "start": 146,
                "end": 149
              },
              "accessibility": null,
              "static": false,
              "start": 135,
              "end": 150
            }
          ],
          "start": 129,
          "end": 152
        },
        "declare": false,
        "start": 87,
        "end": 152
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 80,
      "end": 152
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Apply",
          "optional": false,
          "typeAnnotation": null,
          "start": 166,
          "end": 171
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null,
                "start": 172,
                "end": 173
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TypeLambda",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 182,
                  "end": 192
                },
                "typeArguments": null,
                "start": 182,
                "end": 192
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 172,
              "end": 192
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 194,
                "end": 195
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 194,
              "end": 195
            }
          ],
          "start": 171,
          "end": 196
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 199,
              "end": 200
            },
            "typeArguments": null,
            "start": 199,
            "end": 200
          },
          "extendsType": {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": true,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 220,
                  "end": 224
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 226,
                    "end": 233
                  },
                  "start": 224,
                  "end": 233
                },
                "accessibility": null,
                "static": false,
                "start": 211,
                "end": 233
              }
            ],
            "start": 209,
            "end": 235
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 243,
                    "end": 244
                  },
                  "typeArguments": null,
                  "start": 243,
                  "end": 244
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": true,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 258,
                        "end": 259
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
                            "start": 261,
                            "end": 262
                          },
                          "typeArguments": null,
                          "start": 261,
                          "end": 262
                        },
                        "start": 259,
                        "end": 262
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 249,
                      "end": 262
                    }
                  ],
                  "start": 247,
                  "end": 264
                }
              ],
              "start": 243,
              "end": 264
            },
            "indexType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "type",
                "raw": "'type'",
                "start": 266,
                "end": 272
              },
              "start": 266,
              "end": 272
            },
            "start": 242,
            "end": 273
          },
          "falseType": {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": true,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "F",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 291,
                  "end": 292
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "F",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 294,
                      "end": 295
                    },
                    "typeArguments": null,
                    "start": 294,
                    "end": 295
                  },
                  "start": 292,
                  "end": 295
                },
                "accessibility": null,
                "static": false,
                "start": 282,
                "end": 296
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": true,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 306,
                  "end": 307
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
                      "start": 309,
                      "end": 310
                    },
                    "typeArguments": null,
                    "start": 309,
                    "end": 310
                  },
                  "start": 307,
                  "end": 310
                },
                "accessibility": null,
                "static": false,
                "start": 297,
                "end": 310
              }
            ],
            "start": 280,
            "end": 312
          },
          "start": 199,
          "end": 312
        },
        "declare": false,
        "start": 161,
        "end": 313
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 154,
      "end": 313
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 332,
          "end": 333
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
                "start": 334,
                "end": 335
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 334,
              "end": 335
            }
          ],
          "start": 333,
          "end": 336
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
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 343,
                "end": 348
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
                    "start": 350,
                    "end": 351
                  },
                  "typeArguments": null,
                  "start": 350,
                  "end": 351
                },
                "start": 348,
                "end": 351
              },
              "accessibility": null,
              "static": false,
              "start": 343,
              "end": 352
            }
          ],
          "start": 337,
          "end": 354
        },
        "declare": false,
        "start": 322,
        "end": 354
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 315,
      "end": 354
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TTypeLambda",
          "optional": false,
          "typeAnnotation": null,
          "start": 373,
          "end": 384
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "TypeLambda",
              "optional": false,
              "typeAnnotation": null,
              "start": 393,
              "end": 403
            },
            "typeArguments": null,
            "start": 393,
            "end": 403
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
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 419,
                "end": 423
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
                    "start": 425,
                    "end": 426
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSThisType",
                          "start": 427,
                          "end": 431
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "A",
                            "raw": "\"A\"",
                            "start": 432,
                            "end": 435
                          },
                          "start": 432,
                          "end": 435
                        },
                        "start": 427,
                        "end": 436
                      }
                    ],
                    "start": 426,
                    "end": 437
                  },
                  "start": 425,
                  "end": 437
                },
                "start": 423,
                "end": 437
              },
              "accessibility": null,
              "static": false,
              "start": 410,
              "end": 438
            }
          ],
          "start": 404,
          "end": 440
        },
        "declare": false,
        "start": 363,
        "end": 440
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 356,
      "end": 440
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
              "name": "map",
              "optional": false,
              "typeAnnotation": {
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
                          "name": "F",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 469,
                          "end": 470
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TypeLambda",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 479,
                            "end": 489
                          },
                          "typeArguments": null,
                          "start": 479,
                          "end": 489
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 469,
                        "end": 489
                      }
                    ],
                    "start": 468,
                    "end": 490
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "F",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TypeClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 494,
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
                                  "name": "F",
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
                          "start": 494,
                          "end": 506
                        },
                        "start": 492,
                        "end": 506
                      },
                      "start": 491,
                      "end": 506
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
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 512,
                              "end": 513
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 512,
                            "end": 513
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 515,
                              "end": 516
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 515,
                            "end": 516
                          }
                        ],
                        "start": 511,
                        "end": 517
                      },
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
                                "name": "Apply",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 521,
                                "end": 526
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "F",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 527,
                                      "end": 528
                                    },
                                    "typeArguments": null,
                                    "start": 527,
                                    "end": 528
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 530,
                                      "end": 531
                                    },
                                    "typeArguments": null,
                                    "start": 530,
                                    "end": 531
                                  }
                                ],
                                "start": 526,
                                "end": 532
                              },
                              "start": 521,
                              "end": 532
                            },
                            "start": 519,
                            "end": 532
                          },
                          "start": 518,
                          "end": 532
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
                                        "start": 541,
                                        "end": 542
                                      },
                                      "typeArguments": null,
                                      "start": 541,
                                      "end": 542
                                    },
                                    "start": 539,
                                    "end": 542
                                  },
                                  "start": 538,
                                  "end": 542
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "B",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 547,
                                    "end": 548
                                  },
                                  "typeArguments": null,
                                  "start": 547,
                                  "end": 548
                                },
                                "start": 544,
                                "end": 548
                              },
                              "start": 537,
                              "end": 548
                            },
                            "start": 535,
                            "end": 548
                          },
                          "start": 534,
                          "end": 548
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Apply",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 553,
                            "end": 558
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "F",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 559,
                                  "end": 560
                                },
                                "typeArguments": null,
                                "start": 559,
                                "end": 560
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 562,
                                  "end": 563
                                },
                                "typeArguments": null,
                                "start": 562,
                                "end": 563
                              }
                            ],
                            "start": 558,
                            "end": 564
                          },
                          "start": 553,
                          "end": 564
                        },
                        "start": 550,
                        "end": 564
                      },
                      "start": 511,
                      "end": 564
                    },
                    "start": 508,
                    "end": 564
                  },
                  "start": 468,
                  "end": 564
                },
                "start": 466,
                "end": 564
              },
              "start": 463,
              "end": 564
            },
            "init": null,
            "definite": false,
            "start": 463,
            "end": 564
          }
        ],
        "declare": true,
        "start": 449,
        "end": 565
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 442,
      "end": 565
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
            "name": "typeClass",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TypeClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 592,
                  "end": 601
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TTypeLambda",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 602,
                        "end": 613
                      },
                      "typeArguments": null,
                      "start": 602,
                      "end": 613
                    }
                  ],
                  "start": 601,
                  "end": 614
                },
                "start": 592,
                "end": 614
              },
              "start": 590,
              "end": 614
            },
            "start": 581,
            "end": 614
          },
          "init": null,
          "definite": false,
          "start": 581,
          "end": 614
        }
      ],
      "declare": true,
      "start": 567,
      "end": 615
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
            "name": "a",
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
                  "start": 634,
                  "end": 635
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 636,
                      "end": 642
                    }
                  ],
                  "start": 635,
                  "end": 643
                },
                "start": 634,
                "end": 643
              },
              "start": 632,
              "end": 643
            },
            "start": 631,
            "end": 643
          },
          "init": null,
          "definite": false,
          "start": 631,
          "end": 643
        }
      ],
      "declare": true,
      "start": 617,
      "end": 644
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 652,
            "end": 654
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null,
              "start": 657,
              "end": 660
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "typeClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 661,
                "end": 670
              }
            ],
            "optional": false,
            "start": 657,
            "end": 671
          },
          "definite": false,
          "start": 652,
          "end": 671
        }
      ],
      "declare": false,
      "start": 646,
      "end": 672
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": null,
            "start": 679,
            "end": 681
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 684,
                "end": 687
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "typeClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 688,
                  "end": 697
                }
              ],
              "optional": false,
              "start": 684,
              "end": 698
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 699,
                "end": 700
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
                    "name": "_",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 703,
                    "end": 704
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 709,
                  "end": 710
                },
                "id": null,
                "generator": false,
                "start": 702,
                "end": 710
              }
            ],
            "optional": false,
            "start": 684,
            "end": 711
          },
          "definite": false,
          "start": 679,
          "end": 711
        }
      ],
      "declare": false,
      "start": 673,
      "end": 712
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 22,
  "end": 726
}
```
