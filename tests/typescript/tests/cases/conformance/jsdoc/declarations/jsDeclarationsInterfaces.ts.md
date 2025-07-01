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
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 185,
          "end": 186
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 187,
          "end": 189
        },
        "declare": false,
        "start": 175,
        "end": 189
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 168,
      "end": 189
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 208,
          "end": 209
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
                "name": "cat",
                "optional": false,
                "typeAnnotation": null,
                "start": 216,
                "end": 219
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 221,
                  "end": 227
                },
                "start": 219,
                "end": 227
              },
              "accessibility": null,
              "static": false,
              "start": 216,
              "end": 228
            }
          ],
          "start": 210,
          "end": 230
        },
        "declare": false,
        "start": 198,
        "end": 230
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 191,
      "end": 230
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 249,
          "end": 250
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
                "start": 251,
                "end": 252
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 251,
              "end": 252
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 254,
                "end": 255
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 254,
              "end": 255
            }
          ],
          "start": 250,
          "end": 256
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
                "name": "field",
                "optional": false,
                "typeAnnotation": null,
                "start": 263,
                "end": 268
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "types": [
                    {
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
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 274,
                        "end": 275
                      },
                      "typeArguments": null,
                      "start": 274,
                      "end": 275
                    }
                  ],
                  "start": 270,
                  "end": 275
                },
                "start": 268,
                "end": 275
              },
              "accessibility": null,
              "static": false,
              "start": 263,
              "end": 276
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "optionalField",
                "optional": false,
                "typeAnnotation": null,
                "start": 281,
                "end": 294
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
                    "start": 297,
                    "end": 298
                  },
                  "typeArguments": null,
                  "start": 297,
                  "end": 298
                },
                "start": 295,
                "end": 298
              },
              "accessibility": null,
              "static": false,
              "start": 281,
              "end": 299
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "readonlyField",
                "optional": false,
                "typeAnnotation": null,
                "start": 313,
                "end": 326
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 328,
                        "end": 329
                      },
                      "typeArguments": null,
                      "start": 328,
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
                  "start": 328,
                  "end": 333
                },
                "start": 326,
                "end": 333
              },
              "accessibility": null,
              "static": false,
              "start": 304,
              "end": 334
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "readonlyOptionalField",
                "optional": false,
                "typeAnnotation": null,
                "start": 348,
                "end": 369
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 372,
                    "end": 373
                  },
                  "typeArguments": null,
                  "start": 372,
                  "end": 373
                },
                "start": 370,
                "end": 373
              },
              "accessibility": null,
              "static": false,
              "start": 339,
              "end": 374
            },
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 383,
                  "end": 389
                },
                "start": 381,
                "end": 389
              },
              "start": 379,
              "end": 390
            },
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 399,
                        "end": 400
                      },
                      "typeArguments": null,
                      "start": 399,
                      "end": 400
                    },
                    "start": 397,
                    "end": 400
                  },
                  "start": 396,
                  "end": 400
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 403,
                    "end": 404
                  },
                  "typeArguments": null,
                  "start": 403,
                  "end": 404
                },
                "start": 401,
                "end": 404
              },
              "start": 395,
              "end": 405
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
                      "name": "Q",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 411,
                      "end": 412
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 411,
                    "end": 412
                  }
                ],
                "start": 410,
                "end": 413
              },
              "params": [
                {
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
                        "name": "Q",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 417,
                        "end": 418
                      },
                      "typeArguments": null,
                      "start": 417,
                      "end": 418
                    },
                    "start": 415,
                    "end": 418
                  },
                  "start": 414,
                  "end": 418
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 421,
                        "end": 422
                      },
                      "typeArguments": null,
                      "start": 421,
                      "end": 422
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Q",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 425,
                        "end": 426
                      },
                      "typeArguments": null,
                      "start": 425,
                      "end": 426
                    }
                  ],
                  "start": 421,
                  "end": 426
                },
                "start": 419,
                "end": 426
              },
              "start": 410,
              "end": 427
            },
            {
              "type": "TSConstructSignatureDeclaration",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 441,
                  "end": 447
                },
                "start": 439,
                "end": 447
              },
              "start": 433,
              "end": 448
            },
            {
              "type": "TSConstructSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 461,
                        "end": 462
                      },
                      "typeArguments": null,
                      "start": 461,
                      "end": 462
                    },
                    "start": 459,
                    "end": 462
                  },
                  "start": 458,
                  "end": 462
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 465,
                    "end": 466
                  },
                  "typeArguments": null,
                  "start": 465,
                  "end": 466
                },
                "start": 463,
                "end": 466
              },
              "start": 453,
              "end": 467
            },
            {
              "type": "TSConstructSignatureDeclaration",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Q",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 477,
                      "end": 478
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 477,
                    "end": 478
                  }
                ],
                "start": 476,
                "end": 479
              },
              "params": [
                {
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
                        "name": "Q",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 483,
                        "end": 484
                      },
                      "typeArguments": null,
                      "start": 483,
                      "end": 484
                    },
                    "start": 481,
                    "end": 484
                  },
                  "start": 480,
                  "end": 484
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 487,
                        "end": 488
                      },
                      "typeArguments": null,
                      "start": 487,
                      "end": 488
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Q",
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
                  "end": 492
                },
                "start": 485,
                "end": 492
              },
              "start": 472,
              "end": 493
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 499,
                "end": 505
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
                      "name": "Q",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 506,
                      "end": 507
                    },
                    "constraint": null,
                    "default": {
                      "type": "TSNumberKeyword",
                      "start": 510,
                      "end": 516
                    },
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 506,
                    "end": 516
                  }
                ],
                "start": 505,
                "end": 517
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 521,
                  "end": 527
                },
                "start": 519,
                "end": 527
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 499,
              "end": 528
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 533,
                "end": 539
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
                      "name": "Q",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 540,
                      "end": 541
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 540,
                    "end": 541
                  }
                ],
                "start": 539,
                "end": 542
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
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 546,
                            "end": 547
                          },
                          "typeArguments": null,
                          "start": 546,
                          "end": 547
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Q",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 550,
                            "end": 551
                          },
                          "typeArguments": null,
                          "start": 550,
                          "end": 551
                        }
                      ],
                      "start": 546,
                      "end": 551
                    },
                    "start": 544,
                    "end": 551
                  },
                  "start": 543,
                  "end": 551
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Q",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 554,
                        "end": 555
                      },
                      "typeArguments": null,
                      "start": 554,
                      "end": 555
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 558,
                      "end": 564
                    }
                  ],
                  "start": 554,
                  "end": 564
                },
                "start": 552,
                "end": 564
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 533,
              "end": 565
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 570,
                "end": 576
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 581,
                      "end": 587
                    },
                    "start": 579,
                    "end": 587
                  },
                  "start": 577,
                  "end": 587
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 590,
                  "end": 596
                },
                "start": 588,
                "end": 596
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 570,
              "end": 597
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 602,
                "end": 608
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
                    "start": 612,
                    "end": 616
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 618,
                        "end": 621
                      },
                      "start": 618,
                      "end": 623
                    },
                    "start": 616,
                    "end": 623
                  },
                  "value": null,
                  "start": 609,
                  "end": 623
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 626,
                  "end": 632
                },
                "start": 624,
                "end": 632
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 602,
              "end": 633
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "optMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 639,
                "end": 648
              },
              "computed": false,
              "optional": true,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 653,
                  "end": 659
                },
                "start": 651,
                "end": 659
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 639,
              "end": 660
            }
          ],
          "start": 257,
          "end": 662
        },
        "declare": false,
        "start": 239,
        "end": 662
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 232,
      "end": 662
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null,
        "start": 674,
        "end": 675
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 676,
        "end": 678
      },
      "declare": false,
      "start": 664,
      "end": 678
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "G",
            "optional": false,
            "typeAnnotation": null,
            "start": 689,
            "end": 690
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "G",
            "optional": false,
            "typeAnnotation": null,
            "start": 689,
            "end": 690
          },
          "exportKind": "value",
          "start": 689,
          "end": 690
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 680,
      "end": 693
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HH",
        "optional": false,
        "typeAnnotation": null,
        "start": 705,
        "end": 707
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 708,
        "end": 710
      },
      "declare": false,
      "start": 695,
      "end": 710
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "HH",
            "optional": false,
            "typeAnnotation": null,
            "start": 721,
            "end": 723
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "H",
            "optional": false,
            "typeAnnotation": null,
            "start": 727,
            "end": 728
          },
          "exportKind": "value",
          "start": 721,
          "end": 728
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 712,
      "end": 731
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null,
          "start": 750,
          "end": 751
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 752,
          "end": 754
        },
        "declare": false,
        "start": 740,
        "end": 754
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 733,
      "end": 754
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 764,
            "end": 765
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "II",
            "optional": false,
            "typeAnnotation": null,
            "start": 769,
            "end": 771
          },
          "exportKind": "value",
          "start": 764,
          "end": 771
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 755,
      "end": 774
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "J",
            "optional": false,
            "typeAnnotation": null,
            "start": 785,
            "end": 786
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "JJ",
            "optional": false,
            "typeAnnotation": null,
            "start": 790,
            "end": 792
          },
          "exportKind": "value",
          "start": 785,
          "end": 792
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 776,
      "end": 795
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "J",
          "optional": false,
          "typeAnnotation": null,
          "start": 813,
          "end": 814
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 815,
          "end": 817
        },
        "declare": false,
        "start": 803,
        "end": 817
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 796,
      "end": 817
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 836,
          "end": 837
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 846,
              "end": 847
            },
            "typeArguments": null,
            "start": 846,
            "end": 847
          },
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "J",
              "optional": false,
              "typeAnnotation": null,
              "start": 848,
              "end": 849
            },
            "typeArguments": null,
            "start": 848,
            "end": 849
          }
        ],
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 856,
                "end": 857
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 859,
                  "end": 865
                },
                "start": 857,
                "end": 865
              },
              "accessibility": null,
              "static": false,
              "start": 856,
              "end": 866
            }
          ],
          "start": 850,
          "end": 868
        },
        "declare": false,
        "start": 826,
        "end": 868
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 819,
      "end": 868
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "L",
          "optional": false,
          "typeAnnotation": null,
          "start": 887,
          "end": 888
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 897,
              "end": 898
            },
            "typeArguments": null,
            "start": 897,
            "end": 898
          }
        ],
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
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 905,
                "end": 906
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 908,
                  "end": 914
                },
                "start": 906,
                "end": 914
              },
              "accessibility": null,
              "static": false,
              "start": 905,
              "end": 915
            }
          ],
          "start": 899,
          "end": 917
        },
        "declare": false,
        "start": 877,
        "end": 917
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 870,
      "end": 917
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 936,
          "end": 937
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
                "start": 938,
                "end": 939
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 938,
              "end": 939
            }
          ],
          "start": 937,
          "end": 940
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
                "name": "field",
                "optional": false,
                "typeAnnotation": null,
                "start": 947,
                "end": 952
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
                    "start": 954,
                    "end": 955
                  },
                  "typeArguments": null,
                  "start": 954,
                  "end": 955
                },
                "start": 952,
                "end": 955
              },
              "accessibility": null,
              "static": false,
              "start": 947,
              "end": 956
            }
          ],
          "start": 941,
          "end": 958
        },
        "declare": false,
        "start": 926,
        "end": 958
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 919,
      "end": 958
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "N",
          "optional": false,
          "typeAnnotation": null,
          "start": 977,
          "end": 978
        },
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
                "start": 979,
                "end": 980
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 979,
              "end": 980
            }
          ],
          "start": 978,
          "end": 981
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 990,
              "end": 991
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 992,
                    "end": 993
                  },
                  "typeArguments": null,
                  "start": 992,
                  "end": 993
                }
              ],
              "start": 991,
              "end": 994
            },
            "start": 990,
            "end": 994
          }
        ],
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
                "name": "other",
                "optional": false,
                "typeAnnotation": null,
                "start": 1001,
                "end": 1006
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1008,
                    "end": 1009
                  },
                  "typeArguments": null,
                  "start": 1008,
                  "end": 1009
                },
                "start": 1006,
                "end": 1009
              },
              "accessibility": null,
              "static": false,
              "start": 1001,
              "end": 1010
            }
          ],
          "start": 995,
          "end": 1012
        },
        "declare": false,
        "start": 967,
        "end": 1012
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 960,
      "end": 1012
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "O",
          "optional": false,
          "typeAnnotation": null,
          "start": 1031,
          "end": 1032
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1045,
                      "end": 1051
                    },
                    "start": 1043,
                    "end": 1051
                  },
                  "start": 1040,
                  "end": 1051
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1054,
                  "end": 1060
                },
                "start": 1052,
                "end": 1060
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 1039,
              "end": 1061
            }
          ],
          "start": 1033,
          "end": 1063
        },
        "declare": false,
        "start": 1021,
        "end": 1063
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1014,
      "end": 1063
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 1082,
          "end": 1083
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 1092,
              "end": 1093
            },
            "typeArguments": null,
            "start": 1092,
            "end": 1093
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 1094,
          "end": 1096
        },
        "declare": false,
        "start": 1072,
        "end": 1096
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1065,
      "end": 1096
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Q",
          "optional": false,
          "typeAnnotation": null,
          "start": 1115,
          "end": 1116
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 1125,
              "end": 1126
            },
            "typeArguments": null,
            "start": 1125,
            "end": 1126
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1139,
                      "end": 1145
                    },
                    "start": 1137,
                    "end": 1145
                  },
                  "start": 1134,
                  "end": 1145
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "ok",
                    "raw": "\"ok\"",
                    "start": 1148,
                    "end": 1152
                  },
                  "start": 1148,
                  "end": 1152
                },
                "start": 1146,
                "end": 1152
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 1133,
              "end": 1153
            }
          ],
          "start": 1127,
          "end": 1155
        },
        "declare": false,
        "start": 1105,
        "end": 1155
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1098,
      "end": 1155
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "R",
          "optional": false,
          "typeAnnotation": null,
          "start": 1174,
          "end": 1175
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 1184,
              "end": 1185
            },
            "typeArguments": null,
            "start": 1184,
            "end": 1185
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1198,
                      "end": 1204
                    },
                    "start": 1196,
                    "end": 1204
                  },
                  "start": 1193,
                  "end": 1204
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "ok",
                    "raw": "\"ok\"",
                    "start": 1207,
                    "end": 1211
                  },
                  "start": 1207,
                  "end": 1211
                },
                "start": 1205,
                "end": 1211
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 1192,
              "end": 1212
            }
          ],
          "start": 1186,
          "end": 1214
        },
        "declare": false,
        "start": 1164,
        "end": 1214
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1157,
      "end": 1214
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "S",
          "optional": false,
          "typeAnnotation": null,
          "start": 1233,
          "end": 1234
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 1243,
              "end": 1244
            },
            "typeArguments": null,
            "start": 1243,
            "end": 1244
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1257,
                      "end": 1263
                    },
                    "start": 1255,
                    "end": 1263
                  },
                  "start": 1252,
                  "end": 1263
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "ok",
                    "raw": "\"ok\"",
                    "start": 1266,
                    "end": 1270
                  },
                  "start": 1266,
                  "end": 1270
                },
                "start": 1264,
                "end": 1270
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 1251,
              "end": 1271
            },
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1282,
                      "end": 1288
                    },
                    "start": 1280,
                    "end": 1288
                  },
                  "start": 1277,
                  "end": 1288
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 1291,
                  "end": 1296
                },
                "start": 1289,
                "end": 1296
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 1276,
              "end": 1297
            }
          ],
          "start": 1245,
          "end": 1299
        },
        "declare": false,
        "start": 1223,
        "end": 1299
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1216,
      "end": 1299
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
          "start": 1318,
          "end": 1319
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1332,
                      "end": 1338
                    },
                    "start": 1330,
                    "end": 1338
                  },
                  "start": 1327,
                  "end": 1338
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1341,
                  "end": 1347
                },
                "start": 1339,
                "end": 1347
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 1326,
              "end": 1348
            }
          ],
          "start": 1320,
          "end": 1350
        },
        "declare": false,
        "start": 1308,
        "end": 1350
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1301,
      "end": 1350
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "U",
          "optional": false,
          "typeAnnotation": null,
          "start": 1369,
          "end": 1370
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1379,
              "end": 1380
            },
            "typeArguments": null,
            "start": 1379,
            "end": 1380
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 1381,
          "end": 1383
        },
        "declare": false,
        "start": 1359,
        "end": 1383
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1352,
      "end": 1383
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "V",
          "optional": false,
          "typeAnnotation": null,
          "start": 1403,
          "end": 1404
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1413,
              "end": 1414
            },
            "typeArguments": null,
            "start": 1413,
            "end": 1414
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1427,
                      "end": 1433
                    },
                    "start": 1425,
                    "end": 1433
                  },
                  "start": 1422,
                  "end": 1433
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1436,
                  "end": 1442
                },
                "start": 1434,
                "end": 1442
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 1421,
              "end": 1443
            }
          ],
          "start": 1415,
          "end": 1445
        },
        "declare": false,
        "start": 1393,
        "end": 1445
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1386,
      "end": 1445
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "W",
          "optional": false,
          "typeAnnotation": null,
          "start": 1464,
          "end": 1465
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1474,
              "end": 1475
            },
            "typeArguments": null,
            "start": 1474,
            "end": 1475
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1488,
                      "end": 1494
                    },
                    "start": 1486,
                    "end": 1494
                  },
                  "start": 1483,
                  "end": 1494
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "ok",
                    "raw": "\"ok\"",
                    "start": 1497,
                    "end": 1501
                  },
                  "start": 1497,
                  "end": 1501
                },
                "start": 1495,
                "end": 1501
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 1482,
              "end": 1502
            }
          ],
          "start": 1476,
          "end": 1504
        },
        "declare": false,
        "start": 1454,
        "end": 1504
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1447,
      "end": 1504
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "X",
          "optional": false,
          "typeAnnotation": null,
          "start": 1523,
          "end": 1524
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1533,
              "end": 1534
            },
            "typeArguments": null,
            "start": 1533,
            "end": 1534
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1547,
                      "end": 1553
                    },
                    "start": 1545,
                    "end": 1553
                  },
                  "start": 1542,
                  "end": 1553
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1556,
                  "end": 1562
                },
                "start": 1554,
                "end": 1562
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 1541,
              "end": 1563
            },
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1574,
                      "end": 1580
                    },
                    "start": 1572,
                    "end": 1580
                  },
                  "start": 1569,
                  "end": 1580
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "ok",
                    "raw": "\"ok\"",
                    "start": 1583,
                    "end": 1587
                  },
                  "start": 1583,
                  "end": 1587
                },
                "start": 1581,
                "end": 1587
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 1568,
              "end": 1588
            }
          ],
          "start": 1535,
          "end": 1590
        },
        "declare": false,
        "start": 1513,
        "end": 1590
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1506,
      "end": 1590
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Y",
          "optional": false,
          "typeAnnotation": null,
          "start": 1609,
          "end": 1610
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1623,
                      "end": 1629
                    },
                    "start": 1621,
                    "end": 1629
                  },
                  "start": 1618,
                  "end": 1629
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1633,
                        "end": 1634
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1636,
                          "end": 1642
                        },
                        "start": 1634,
                        "end": 1642
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1633,
                      "end": 1642
                    }
                  ],
                  "start": 1632,
                  "end": 1643
                },
                "start": 1630,
                "end": 1643
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 1617,
              "end": 1644
            },
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1655,
                      "end": 1661
                    },
                    "start": 1653,
                    "end": 1661
                  },
                  "start": 1650,
                  "end": 1661
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1665,
                        "end": 1666
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1668,
                          "end": 1674
                        },
                        "start": 1666,
                        "end": 1674
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1665,
                      "end": 1675
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1676,
                        "end": 1677
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1679,
                          "end": 1685
                        },
                        "start": 1677,
                        "end": 1685
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1676,
                      "end": 1685
                    }
                  ],
                  "start": 1664,
                  "end": 1686
                },
                "start": 1662,
                "end": 1686
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 1649,
              "end": 1687
            }
          ],
          "start": 1611,
          "end": 1689
        },
        "declare": false,
        "start": 1599,
        "end": 1689
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1592,
      "end": 1689
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Z",
          "optional": false,
          "typeAnnotation": null,
          "start": 1708,
          "end": 1709
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1718,
              "end": 1719
            },
            "typeArguments": null,
            "start": 1718,
            "end": 1719
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 1720,
          "end": 1722
        },
        "declare": false,
        "start": 1698,
        "end": 1722
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1691,
      "end": 1722
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "AA",
          "optional": false,
          "typeAnnotation": null,
          "start": 1741,
          "end": 1743
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1752,
              "end": 1753
            },
            "typeArguments": null,
            "start": 1752,
            "end": 1753
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1766,
                      "end": 1772
                    },
                    "start": 1764,
                    "end": 1772
                  },
                  "start": 1761,
                  "end": 1772
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1776,
                        "end": 1777
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1779,
                          "end": 1785
                        },
                        "start": 1777,
                        "end": 1785
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1776,
                      "end": 1786
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1787,
                        "end": 1788
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1790,
                          "end": 1796
                        },
                        "start": 1788,
                        "end": 1796
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1787,
                      "end": 1796
                    }
                  ],
                  "start": 1775,
                  "end": 1797
                },
                "start": 1773,
                "end": 1797
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 1760,
              "end": 1798
            }
          ],
          "start": 1754,
          "end": 1800
        },
        "declare": false,
        "start": 1731,
        "end": 1800
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1724,
      "end": 1800
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "BB",
          "optional": false,
          "typeAnnotation": null,
          "start": 1819,
          "end": 1821
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1830,
              "end": 1831
            },
            "typeArguments": null,
            "start": 1830,
            "end": 1831
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1844,
                      "end": 1850
                    },
                    "start": 1842,
                    "end": 1850
                  },
                  "start": 1839,
                  "end": 1850
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1854,
                        "end": 1855
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1857,
                            "end": 1858
                          },
                          "start": 1857,
                          "end": 1858
                        },
                        "start": 1855,
                        "end": 1858
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1854,
                      "end": 1859
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1860,
                        "end": 1861
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1863,
                            "end": 1864
                          },
                          "start": 1863,
                          "end": 1864
                        },
                        "start": 1861,
                        "end": 1864
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1860,
                      "end": 1864
                    }
                  ],
                  "start": 1853,
                  "end": 1865
                },
                "start": 1851,
                "end": 1865
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 1838,
              "end": 1866
            }
          ],
          "start": 1832,
          "end": 1868
        },
        "declare": false,
        "start": 1809,
        "end": 1868
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1802,
      "end": 1868
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "CC",
          "optional": false,
          "typeAnnotation": null,
          "start": 1887,
          "end": 1889
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1898,
              "end": 1899
            },
            "typeArguments": null,
            "start": 1898,
            "end": 1899
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1912,
                      "end": 1918
                    },
                    "start": 1910,
                    "end": 1918
                  },
                  "start": 1907,
                  "end": 1918
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1922,
                        "end": 1923
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1925,
                          "end": 1931
                        },
                        "start": 1923,
                        "end": 1931
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1922,
                      "end": 1932
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1933,
                        "end": 1934
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1936,
                          "end": 1942
                        },
                        "start": 1934,
                        "end": 1942
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1933,
                      "end": 1942
                    }
                  ],
                  "start": 1921,
                  "end": 1943
                },
                "start": 1919,
                "end": 1943
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 1906,
              "end": 1944
            },
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1955,
                      "end": 1961
                    },
                    "start": 1953,
                    "end": 1961
                  },
                  "start": 1950,
                  "end": 1961
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1965,
                        "end": 1966
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1968,
                            "end": 1969
                          },
                          "start": 1968,
                          "end": 1969
                        },
                        "start": 1966,
                        "end": 1969
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1965,
                      "end": 1970
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1971,
                        "end": 1972
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1974,
                            "end": 1975
                          },
                          "start": 1974,
                          "end": 1975
                        },
                        "start": 1972,
                        "end": 1975
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1971,
                      "end": 1975
                    }
                  ],
                  "start": 1964,
                  "end": 1976
                },
                "start": 1962,
                "end": 1976
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 1949,
              "end": 1977
            }
          ],
          "start": 1900,
          "end": 1979
        },
        "declare": false,
        "start": 1877,
        "end": 1979
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1870,
      "end": 1979
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 168,
  "end": 1979
}
```
