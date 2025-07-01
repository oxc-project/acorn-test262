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
        "name": "K",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 73
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
        "start": 73,
        "end": 76
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 82,
          "end": 83
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
              "start": 93,
              "end": 94
            },
            "typeArguments": null,
            "start": 93,
            "end": 94
          },
          "start": 87,
          "end": 94
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 97,
            "end": 98
          },
          "typeArguments": null,
          "start": 97,
          "end": 98
        },
        "optional": false,
        "readonly": null,
        "start": 79,
        "end": 100
      },
      "declare": false,
      "start": 67,
      "end": 101
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 108
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
              "start": 109,
              "end": 110
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 109,
            "end": 110
          }
        ],
        "start": 108,
        "end": 111
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 117,
          "end": 118
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
              "start": 128,
              "end": 129
            },
            "typeArguments": null,
            "start": 128,
            "end": 129
          },
          "start": 122,
          "end": 129
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
              "start": 132,
              "end": 133
            },
            "typeArguments": null,
            "start": 132,
            "end": 133
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 134,
              "end": 135
            },
            "typeArguments": null,
            "start": 134,
            "end": 135
          },
          "start": 132,
          "end": 136
        },
        "optional": false,
        "readonly": null,
        "start": 114,
        "end": 138
      },
      "declare": false,
      "start": 102,
      "end": 139
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "KA",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 148
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 151,
          "end": 152
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 154,
                  "end": 160
                },
                {
                  "type": "TSStringKeyword",
                  "start": 162,
                  "end": 168
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 170,
                  "end": 177
                }
              ],
              "start": 153,
              "end": 178
            }
          ],
          "start": 152,
          "end": 179
        },
        "start": 151,
        "end": 179
      },
      "declare": false,
      "start": 141,
      "end": 180
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "KB",
        "optional": false,
        "typeAnnotation": null,
        "start": 206,
        "end": 208
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 211,
          "end": 212
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 214,
                  "end": 220
                },
                {
                  "type": "TSStringKeyword",
                  "start": 222,
                  "end": 228
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 233,
                      "end": 239
                    },
                    "start": 233,
                    "end": 241
                  },
                  "start": 230,
                  "end": 241
                },
                {
                  "type": "TSStringKeyword",
                  "start": 243,
                  "end": 249
                }
              ],
              "start": 213,
              "end": 250
            }
          ],
          "start": 212,
          "end": 251
        },
        "start": 211,
        "end": 251
      },
      "declare": false,
      "start": 201,
      "end": 252
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "KC",
        "optional": false,
        "typeAnnotation": null,
        "start": 294,
        "end": 296
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 299,
          "end": 300
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
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 305,
                      "end": 311
                    },
                    "start": 305,
                    "end": 313
                  },
                  "start": 302,
                  "end": 313
                }
              ],
              "start": 301,
              "end": 314
            }
          ],
          "start": 300,
          "end": 315
        },
        "start": 299,
        "end": 315
      },
      "declare": false,
      "start": 289,
      "end": 316
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "KD",
        "optional": false,
        "typeAnnotation": null,
        "start": 335,
        "end": 337
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 340,
          "end": 341
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 342,
                "end": 348
              },
              "start": 342,
              "end": 350
            }
          ],
          "start": 341,
          "end": 351
        },
        "start": 340,
        "end": 351
      },
      "declare": false,
      "start": 330,
      "end": 352
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 372,
        "end": 373
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 378,
              "end": 379
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 381,
                "end": 387
              },
              "start": 379,
              "end": 387
            },
            "accessibility": null,
            "static": false,
            "start": 378,
            "end": 387
          }
        ],
        "start": 376,
        "end": 389
      },
      "declare": false,
      "start": 367,
      "end": 390
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 396,
        "end": 397
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 402,
              "end": 403
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 405,
                "end": 411
              },
              "start": 403,
              "end": 411
            },
            "accessibility": null,
            "static": false,
            "start": 402,
            "end": 411
          }
        ],
        "start": 400,
        "end": 413
      },
      "declare": false,
      "start": 391,
      "end": 414
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 420,
        "end": 421
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
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 426,
              "end": 427
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 429,
                "end": 435
              },
              "start": 427,
              "end": 435
            },
            "accessibility": null,
            "static": false,
            "start": 426,
            "end": 435
          }
        ],
        "start": 424,
        "end": 437
      },
      "declare": false,
      "start": 415,
      "end": 438
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 444,
        "end": 445
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
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 450,
              "end": 451
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 453,
                "end": 459
              },
              "start": 451,
              "end": 459
            },
            "accessibility": null,
            "static": false,
            "start": 450,
            "end": 459
          }
        ],
        "start": 448,
        "end": 461
      },
      "declare": false,
      "start": 439,
      "end": 462
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "V0",
        "optional": false,
        "typeAnnotation": null,
        "start": 469,
        "end": 471
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
              "start": 472,
              "end": 473
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 482,
                "end": 489
              },
              "start": 482,
              "end": 491
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 472,
            "end": 491
          }
        ],
        "start": 471,
        "end": 492
      },
      "typeAnnotation": {
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
              "start": 496,
              "end": 497
            },
            "typeArguments": null,
            "start": 496,
            "end": 497
          },
          {
            "type": "TSOptionalType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 499,
                "end": 500
              },
              "typeArguments": null,
              "start": 499,
              "end": 500
            },
            "start": 499,
            "end": 501
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
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
            "start": 503,
            "end": 507
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 512,
                  "end": 513
                },
                "typeArguments": null,
                "start": 512,
                "end": 513
              },
              "start": 512,
              "end": 515
            },
            "start": 509,
            "end": 515
          }
        ],
        "start": 495,
        "end": 516
      },
      "declare": false,
      "start": 464,
      "end": 516
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "V1",
        "optional": false,
        "typeAnnotation": null,
        "start": 522,
        "end": 524
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
              "start": 525,
              "end": 526
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 535,
                "end": 542
              },
              "start": 535,
              "end": 544
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 525,
            "end": 544
          }
        ],
        "start": 524,
        "end": 545
      },
      "typeAnnotation": {
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
              "start": 549,
              "end": 550
            },
            "typeArguments": null,
            "start": 549,
            "end": 550
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 555,
                "end": 556
              },
              "typeArguments": null,
              "start": 555,
              "end": 556
            },
            "start": 552,
            "end": 556
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 558,
              "end": 559
            },
            "typeArguments": null,
            "start": 558,
            "end": 559
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 564,
                  "end": 565
                },
                "typeArguments": null,
                "start": 564,
                "end": 565
              },
              "start": 564,
              "end": 567
            },
            "start": 561,
            "end": 567
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 569,
              "end": 570
            },
            "typeArguments": null,
            "start": 569,
            "end": 570
          }
        ],
        "start": 548,
        "end": 571
      },
      "declare": false,
      "start": 517,
      "end": 571
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "K0",
        "optional": false,
        "typeAnnotation": null,
        "start": 578,
        "end": 580
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
              "start": 581,
              "end": 582
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 591,
                "end": 598
              },
              "start": 591,
              "end": 600
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 581,
            "end": 600
          }
        ],
        "start": 580,
        "end": 601
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 604,
          "end": 605
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V0",
                "optional": false,
                "typeAnnotation": null,
                "start": 606,
                "end": 608
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
                      "start": 609,
                      "end": 610
                    },
                    "typeArguments": null,
                    "start": 609,
                    "end": 610
                  }
                ],
                "start": 608,
                "end": 611
              },
              "start": 606,
              "end": 611
            }
          ],
          "start": 605,
          "end": 612
        },
        "start": 604,
        "end": 612
      },
      "declare": false,
      "start": 573,
      "end": 613
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "K1",
        "optional": false,
        "typeAnnotation": null,
        "start": 657,
        "end": 659
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
              "start": 660,
              "end": 661
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 670,
                "end": 677
              },
              "start": 670,
              "end": 679
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 660,
            "end": 679
          }
        ],
        "start": 659,
        "end": 680
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 683,
          "end": 684
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V1",
                "optional": false,
                "typeAnnotation": null,
                "start": 685,
                "end": 687
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
                      "start": 688,
                      "end": 689
                    },
                    "typeArguments": null,
                    "start": 688,
                    "end": 689
                  }
                ],
                "start": 687,
                "end": 690
              },
              "start": 685,
              "end": 690
            }
          ],
          "start": 684,
          "end": 691
        },
        "start": 683,
        "end": 691
      },
      "declare": false,
      "start": 652,
      "end": 692
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M0",
        "optional": false,
        "typeAnnotation": null,
        "start": 747,
        "end": 749
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
              "start": 750,
              "end": 751
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 760,
                "end": 767
              },
              "start": 760,
              "end": 769
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 750,
            "end": 769
          }
        ],
        "start": 749,
        "end": 770
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 773,
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
                "name": "V0",
                "optional": false,
                "typeAnnotation": null,
                "start": 775,
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 778,
                      "end": 779
                    },
                    "typeArguments": null,
                    "start": 778,
                    "end": 779
                  }
                ],
                "start": 777,
                "end": 780
              },
              "start": 775,
              "end": 780
            }
          ],
          "start": 774,
          "end": 781
        },
        "start": 773,
        "end": 781
      },
      "declare": false,
      "start": 742,
      "end": 782
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M1",
        "optional": false,
        "typeAnnotation": null,
        "start": 817,
        "end": 819
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
              "start": 820,
              "end": 821
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 830,
                "end": 837
              },
              "start": 830,
              "end": 839
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 820,
            "end": 839
          }
        ],
        "start": 819,
        "end": 840
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 843,
          "end": 844
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V1",
                "optional": false,
                "typeAnnotation": null,
                "start": 845,
                "end": 847
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
                      "start": 848,
                      "end": 849
                    },
                    "typeArguments": null,
                    "start": 848,
                    "end": 849
                  }
                ],
                "start": 847,
                "end": 850
              },
              "start": 845,
              "end": 850
            }
          ],
          "start": 844,
          "end": 851
        },
        "start": 843,
        "end": 851
      },
      "declare": false,
      "start": 812,
      "end": 852
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Keys",
        "optional": false,
        "typeAnnotation": null,
        "start": 912,
        "end": 916
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 917,
              "end": 918
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 927,
                "end": 934
              },
              "start": 927,
              "end": 936
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 917,
            "end": 936
          }
        ],
        "start": 916,
        "end": 937
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 943,
          "end": 944
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 954,
              "end": 955
            },
            "typeArguments": null,
            "start": 954,
            "end": 955
          },
          "start": 948,
          "end": 955
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 958,
            "end": 959
          },
          "typeArguments": null,
          "start": 958,
          "end": 959
        },
        "optional": false,
        "readonly": null,
        "start": 940,
        "end": 961
      },
      "declare": false,
      "start": 907,
      "end": 962
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Keys1",
        "optional": false,
        "typeAnnotation": null,
        "start": 969,
        "end": 974
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Keys",
          "optional": false,
          "typeAnnotation": null,
          "start": 977,
          "end": 981
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 983,
                  "end": 989
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 994,
                      "end": 1000
                    },
                    "start": 994,
                    "end": 1002
                  },
                  "start": 991,
                  "end": 1002
                }
              ],
              "start": 982,
              "end": 1003
            }
          ],
          "start": 981,
          "end": 1004
        },
        "start": 977,
        "end": 1004
      },
      "declare": false,
      "start": 964,
      "end": 1005
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Keys2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1011,
        "end": 1016
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Keys",
          "optional": false,
          "typeAnnotation": null,
          "start": 1019,
          "end": 1023
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 1025,
                  "end": 1031
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1036,
                      "end": 1042
                    },
                    "start": 1036,
                    "end": 1044
                  },
                  "start": 1033,
                  "end": 1044
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1046,
                  "end": 1052
                }
              ],
              "start": 1024,
              "end": 1053
            }
          ],
          "start": 1023,
          "end": 1054
        },
        "start": 1019,
        "end": 1054
      },
      "declare": false,
      "start": 1006,
      "end": 1055
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1084,
        "end": 1086
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 1090,
                "end": 1093
              },
              "start": 1090,
              "end": 1093
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "b",
                "raw": "'b'",
                "start": 1095,
                "end": 1098
              },
              "start": 1095,
              "end": 1098
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "c",
                "raw": "'c'",
                "start": 1100,
                "end": 1103
              },
              "start": 1100,
              "end": 1103
            }
          ],
          "start": 1089,
          "end": 1104
        },
        "extendsType": {
          "type": "TSTypeOperator",
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "H",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1129,
                    "end": 1130
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1129,
                  "end": 1130
                },
                "start": 1123,
                "end": 1130
              },
              {
                "type": "TSRestType",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSUnknownKeyword",
                    "start": 1135,
                    "end": 1142
                  },
                  "start": 1135,
                  "end": 1144
                },
                "start": 1132,
                "end": 1144
              }
            ],
            "start": 1122,
            "end": 1145
          },
          "start": 1113,
          "end": 1145
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "H",
            "optional": false,
            "typeAnnotation": null,
            "start": 1148,
            "end": 1149
          },
          "typeArguments": null,
          "start": 1148,
          "end": 1149
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1152,
          "end": 1157
        },
        "start": 1089,
        "end": 1157
      },
      "declare": false,
      "start": 1079,
      "end": 1158
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1172,
        "end": 1174
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 1178,
                "end": 1181
              },
              "start": 1178,
              "end": 1181
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "b",
                "raw": "'b'",
                "start": 1183,
                "end": 1186
              },
              "start": 1183,
              "end": 1186
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "c",
                "raw": "'c'",
                "start": 1188,
                "end": 1191
              },
              "start": 1188,
              "end": 1191
            }
          ],
          "start": 1177,
          "end": 1192
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Readonly",
            "optional": false,
            "typeAnnotation": null,
            "start": 1201,
            "end": 1209
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "H",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1217,
                        "end": 1218
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1217,
                      "end": 1218
                    },
                    "start": 1211,
                    "end": 1218
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSUnknownKeyword",
                        "start": 1223,
                        "end": 1230
                      },
                      "start": 1223,
                      "end": 1232
                    },
                    "start": 1220,
                    "end": 1232
                  }
                ],
                "start": 1210,
                "end": 1233
              }
            ],
            "start": 1209,
            "end": 1234
          },
          "start": 1201,
          "end": 1234
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "H",
            "optional": false,
            "typeAnnotation": null,
            "start": 1237,
            "end": 1238
          },
          "typeArguments": null,
          "start": 1237,
          "end": 1238
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1241,
          "end": 1246
        },
        "start": 1177,
        "end": 1246
      },
      "declare": false,
      "start": 1167,
      "end": 1247
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1261,
        "end": 1263
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 1267,
                "end": 1270
              },
              "start": 1267,
              "end": 1270
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "b",
                "raw": "'b'",
                "start": 1272,
                "end": 1275
              },
              "start": 1272,
              "end": 1275
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "c",
                "raw": "'c'",
                "start": 1277,
                "end": 1280
              },
              "start": 1277,
              "end": 1280
            }
          ],
          "start": 1266,
          "end": 1281
        },
        "extendsType": {
          "type": "TSTypeOperator",
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSRestType",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSUnknownKeyword",
                    "start": 1303,
                    "end": 1310
                  },
                  "start": 1303,
                  "end": 1312
                },
                "start": 1300,
                "end": 1312
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "L",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1320,
                    "end": 1321
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1320,
                  "end": 1321
                },
                "start": 1314,
                "end": 1321
              }
            ],
            "start": 1299,
            "end": 1322
          },
          "start": 1290,
          "end": 1322
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "L",
            "optional": false,
            "typeAnnotation": null,
            "start": 1325,
            "end": 1326
          },
          "typeArguments": null,
          "start": 1325,
          "end": 1326
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1329,
          "end": 1334
        },
        "start": 1266,
        "end": 1334
      },
      "declare": false,
      "start": 1256,
      "end": 1335
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1349,
        "end": 1351
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 1355,
                "end": 1358
              },
              "start": 1355,
              "end": 1358
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "b",
                "raw": "'b'",
                "start": 1360,
                "end": 1363
              },
              "start": 1360,
              "end": 1363
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "c",
                "raw": "'c'",
                "start": 1365,
                "end": 1368
              },
              "start": 1365,
              "end": 1368
            }
          ],
          "start": 1354,
          "end": 1369
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Readonly",
            "optional": false,
            "typeAnnotation": null,
            "start": 1378,
            "end": 1386
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
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSUnknownKeyword",
                        "start": 1391,
                        "end": 1398
                      },
                      "start": 1391,
                      "end": 1400
                    },
                    "start": 1388,
                    "end": 1400
                  },
                  {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "L",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1408,
                        "end": 1409
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1408,
                      "end": 1409
                    },
                    "start": 1402,
                    "end": 1409
                  }
                ],
                "start": 1387,
                "end": 1410
              }
            ],
            "start": 1386,
            "end": 1411
          },
          "start": 1378,
          "end": 1411
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "L",
            "optional": false,
            "typeAnnotation": null,
            "start": 1414,
            "end": 1415
          },
          "typeArguments": null,
          "start": 1414,
          "end": 1415
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1418,
          "end": 1423
        },
        "start": 1354,
        "end": 1423
      },
      "declare": false,
      "start": 1344,
      "end": 1424
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "R1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1461,
        "end": 1463
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
              "start": 1464,
              "end": 1465
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1464,
            "end": 1465
          }
        ],
        "start": 1463,
        "end": 1466
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "readonly",
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 1482,
                  "end": 1489
                },
                "start": 1482,
                "end": 1491
              },
              "start": 1479,
              "end": 1491
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1493,
                "end": 1494
              },
              "typeArguments": null,
              "start": 1493,
              "end": 1494
            }
          ],
          "start": 1478,
          "end": 1495
        },
        "start": 1469,
        "end": 1495
      },
      "declare": false,
      "start": 1456,
      "end": 1496
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "R2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1533,
        "end": 1535
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
              "start": 1536,
              "end": 1537
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1536,
            "end": 1537
          }
        ],
        "start": 1535,
        "end": 1538
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Readonly",
          "optional": false,
          "typeAnnotation": null,
          "start": 1541,
          "end": 1549
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
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSUnknownKeyword",
                      "start": 1554,
                      "end": 1561
                    },
                    "start": 1554,
                    "end": 1563
                  },
                  "start": 1551,
                  "end": 1563
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1565,
                    "end": 1566
                  },
                  "typeArguments": null,
                  "start": 1565,
                  "end": 1566
                }
              ],
              "start": 1550,
              "end": 1567
            }
          ],
          "start": 1549,
          "end": 1568
        },
        "start": 1541,
        "end": 1568
      },
      "declare": false,
      "start": 1528,
      "end": 1569
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 67,
  "end": 1600
}
```
