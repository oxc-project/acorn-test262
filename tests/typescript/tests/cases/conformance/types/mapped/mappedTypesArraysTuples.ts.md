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
        "name": "Box",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
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
              "start": 9,
              "end": 10
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 9,
            "end": 10
          }
        ],
        "start": 8,
        "end": 11
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 21
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
                  "start": 23,
                  "end": 24
                },
                "typeArguments": null,
                "start": 23,
                "end": 24
              },
              "start": 21,
              "end": 24
            },
            "accessibility": null,
            "static": false,
            "start": 16,
            "end": 24
          }
        ],
        "start": 14,
        "end": 26
      },
      "declare": false,
      "start": 0,
      "end": 27
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Boxified",
        "optional": false,
        "typeAnnotation": null,
        "start": 33,
        "end": 41
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
              "start": 42,
              "end": 43
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 42,
            "end": 43
          }
        ],
        "start": 41,
        "end": 44
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 50,
          "end": 51
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
              "start": 61,
              "end": 62
            },
            "typeArguments": null,
            "start": 61,
            "end": 62
          },
          "start": 55,
          "end": 62
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 68
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
                    "start": 69,
                    "end": 70
                  },
                  "typeArguments": null,
                  "start": 69,
                  "end": 70
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 71,
                    "end": 72
                  },
                  "typeArguments": null,
                  "start": 71,
                  "end": 72
                },
                "start": 69,
                "end": 73
              }
            ],
            "start": 68,
            "end": 74
          },
          "start": 65,
          "end": 74
        },
        "optional": false,
        "readonly": null,
        "start": 47,
        "end": 76
      },
      "declare": false,
      "start": 28,
      "end": 77
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T00",
        "optional": false,
        "typeAnnotation": null,
        "start": 84,
        "end": 87
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boxified",
          "optional": false,
          "typeAnnotation": null,
          "start": 90,
          "end": 98
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 100,
                  "end": 106
                },
                {
                  "type": "TSOptionalType",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 108,
                    "end": 114
                  },
                  "start": 108,
                  "end": 115
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSBooleanKeyword",
                      "start": 120,
                      "end": 127
                    },
                    "start": 120,
                    "end": 129
                  },
                  "start": 117,
                  "end": 129
                }
              ],
              "start": 99,
              "end": 130
            }
          ],
          "start": 98,
          "end": 131
        },
        "start": 90,
        "end": 131
      },
      "declare": false,
      "start": 79,
      "end": 132
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T01",
        "optional": false,
        "typeAnnotation": null,
        "start": 138,
        "end": 141
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "typeAnnotation": null,
          "start": 144,
          "end": 151
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 153,
                  "end": 159
                },
                {
                  "type": "TSOptionalType",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 161,
                    "end": 167
                  },
                  "start": 161,
                  "end": 168
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSBooleanKeyword",
                      "start": 173,
                      "end": 180
                    },
                    "start": 173,
                    "end": 182
                  },
                  "start": 170,
                  "end": 182
                }
              ],
              "start": 152,
              "end": 183
            }
          ],
          "start": 151,
          "end": 184
        },
        "start": 144,
        "end": 184
      },
      "declare": false,
      "start": 133,
      "end": 185
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T02",
        "optional": false,
        "typeAnnotation": null,
        "start": 191,
        "end": 194
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Required",
          "optional": false,
          "typeAnnotation": null,
          "start": 197,
          "end": 205
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 207,
                  "end": 213
                },
                {
                  "type": "TSOptionalType",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 215,
                    "end": 221
                  },
                  "start": 215,
                  "end": 222
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSBooleanKeyword",
                      "start": 227,
                      "end": 234
                    },
                    "start": 227,
                    "end": 236
                  },
                  "start": 224,
                  "end": 236
                }
              ],
              "start": 206,
              "end": 237
            }
          ],
          "start": 205,
          "end": 238
        },
        "start": 197,
        "end": 238
      },
      "declare": false,
      "start": 186,
      "end": 239
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null,
        "start": 246,
        "end": 249
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boxified",
          "optional": false,
          "typeAnnotation": null,
          "start": 252,
          "end": 260
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 261,
                "end": 267
              },
              "start": 261,
              "end": 269
            }
          ],
          "start": 260,
          "end": 270
        },
        "start": 252,
        "end": 270
      },
      "declare": false,
      "start": 241,
      "end": 271
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null,
        "start": 277,
        "end": 280
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "typeAnnotation": null,
          "start": 283,
          "end": 290
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 291,
                "end": 297
              },
              "start": 291,
              "end": 299
            }
          ],
          "start": 290,
          "end": 300
        },
        "start": 283,
        "end": 300
      },
      "declare": false,
      "start": 272,
      "end": 301
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T12",
        "optional": false,
        "typeAnnotation": null,
        "start": 307,
        "end": 310
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Required",
          "optional": false,
          "typeAnnotation": null,
          "start": 313,
          "end": 321
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 322,
                "end": 328
              },
              "start": 322,
              "end": 330
            }
          ],
          "start": 321,
          "end": 331
        },
        "start": 313,
        "end": 331
      },
      "declare": false,
      "start": 302,
      "end": 332
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T13",
        "optional": false,
        "typeAnnotation": null,
        "start": 338,
        "end": 341
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boxified",
          "optional": false,
          "typeAnnotation": null,
          "start": 344,
          "end": 352
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 353,
                "end": 366
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 367,
                    "end": 373
                  }
                ],
                "start": 366,
                "end": 374
              },
              "start": 353,
              "end": 374
            }
          ],
          "start": 352,
          "end": 375
        },
        "start": 344,
        "end": 375
      },
      "declare": false,
      "start": 333,
      "end": 376
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T14",
        "optional": false,
        "typeAnnotation": null,
        "start": 382,
        "end": 385
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "typeAnnotation": null,
          "start": 388,
          "end": 395
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 396,
                "end": 409
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 410,
                    "end": 416
                  }
                ],
                "start": 409,
                "end": 417
              },
              "start": 396,
              "end": 417
            }
          ],
          "start": 395,
          "end": 418
        },
        "start": 388,
        "end": 418
      },
      "declare": false,
      "start": 377,
      "end": 419
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T15",
        "optional": false,
        "typeAnnotation": null,
        "start": 425,
        "end": 428
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Required",
          "optional": false,
          "typeAnnotation": null,
          "start": 431,
          "end": 439
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 440,
                "end": 453
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 454,
                    "end": 460
                  }
                ],
                "start": 453,
                "end": 461
              },
              "start": 440,
              "end": 461
            }
          ],
          "start": 439,
          "end": 462
        },
        "start": 431,
        "end": 462
      },
      "declare": false,
      "start": 420,
      "end": 463
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T20",
        "optional": false,
        "typeAnnotation": null,
        "start": 470,
        "end": 473
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boxified",
          "optional": false,
          "typeAnnotation": null,
          "start": 476,
          "end": 484
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 486,
                    "end": 492
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 495,
                    "end": 504
                  }
                ],
                "start": 486,
                "end": 504
              },
              "start": 485,
              "end": 507
            }
          ],
          "start": 484,
          "end": 508
        },
        "start": 476,
        "end": 508
      },
      "declare": false,
      "start": 465,
      "end": 509
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T21",
        "optional": false,
        "typeAnnotation": null,
        "start": 515,
        "end": 518
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "typeAnnotation": null,
          "start": 521,
          "end": 528
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 530,
                    "end": 536
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 539,
                    "end": 548
                  }
                ],
                "start": 530,
                "end": 548
              },
              "start": 529,
              "end": 551
            }
          ],
          "start": 528,
          "end": 552
        },
        "start": 521,
        "end": 552
      },
      "declare": false,
      "start": 510,
      "end": 553
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T22",
        "optional": false,
        "typeAnnotation": null,
        "start": 559,
        "end": 562
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Required",
          "optional": false,
          "typeAnnotation": null,
          "start": 565,
          "end": 573
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 575,
                    "end": 581
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 584,
                    "end": 593
                  }
                ],
                "start": 575,
                "end": 593
              },
              "start": 574,
              "end": 596
            }
          ],
          "start": 573,
          "end": 597
        },
        "start": 565,
        "end": 597
      },
      "declare": false,
      "start": 554,
      "end": 598
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T23",
        "optional": false,
        "typeAnnotation": null,
        "start": 604,
        "end": 607
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boxified",
          "optional": false,
          "typeAnnotation": null,
          "start": 610,
          "end": 618
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 619,
                "end": 632
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 633,
                        "end": 639
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 642,
                        "end": 651
                      }
                    ],
                    "start": 633,
                    "end": 651
                  }
                ],
                "start": 632,
                "end": 652
              },
              "start": 619,
              "end": 652
            }
          ],
          "start": 618,
          "end": 653
        },
        "start": 610,
        "end": 653
      },
      "declare": false,
      "start": 599,
      "end": 654
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T24",
        "optional": false,
        "typeAnnotation": null,
        "start": 660,
        "end": 663
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "typeAnnotation": null,
          "start": 666,
          "end": 673
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 674,
                "end": 687
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 688,
                        "end": 694
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 697,
                        "end": 706
                      }
                    ],
                    "start": 688,
                    "end": 706
                  }
                ],
                "start": 687,
                "end": 707
              },
              "start": 674,
              "end": 707
            }
          ],
          "start": 673,
          "end": 708
        },
        "start": 666,
        "end": 708
      },
      "declare": false,
      "start": 655,
      "end": 709
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T25",
        "optional": false,
        "typeAnnotation": null,
        "start": 715,
        "end": 718
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Required",
          "optional": false,
          "typeAnnotation": null,
          "start": 721,
          "end": 729
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 730,
                "end": 743
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 744,
                        "end": 750
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 753,
                        "end": 762
                      }
                    ],
                    "start": 744,
                    "end": 762
                  }
                ],
                "start": 743,
                "end": 763
              },
              "start": 730,
              "end": 763
            }
          ],
          "start": 729,
          "end": 764
        },
        "start": 721,
        "end": 764
      },
      "declare": false,
      "start": 710,
      "end": 765
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T30",
        "optional": false,
        "typeAnnotation": null,
        "start": 772,
        "end": 775
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boxified",
          "optional": false,
          "typeAnnotation": null,
          "start": 778,
          "end": 786
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 787,
                "end": 794
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 795,
                      "end": 801
                    },
                    "start": 795,
                    "end": 803
                  }
                ],
                "start": 794,
                "end": 804
              },
              "start": 787,
              "end": 804
            }
          ],
          "start": 786,
          "end": 805
        },
        "start": 778,
        "end": 805
      },
      "declare": false,
      "start": 767,
      "end": 806
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T31",
        "optional": false,
        "typeAnnotation": null,
        "start": 812,
        "end": 815
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "typeAnnotation": null,
          "start": 818,
          "end": 825
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Boxified",
                "optional": false,
                "typeAnnotation": null,
                "start": 826,
                "end": 834
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 835,
                      "end": 841
                    },
                    "start": 835,
                    "end": 843
                  }
                ],
                "start": 834,
                "end": 844
              },
              "start": 826,
              "end": 844
            }
          ],
          "start": 825,
          "end": 845
        },
        "start": 818,
        "end": 845
      },
      "declare": false,
      "start": 807,
      "end": 846
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 853,
        "end": 854
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
              "start": 859,
              "end": 860
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 862,
                "end": 868
              },
              "start": 860,
              "end": 868
            },
            "accessibility": null,
            "static": false,
            "start": 859,
            "end": 868
          }
        ],
        "start": 857,
        "end": 870
      },
      "declare": false,
      "start": 848,
      "end": 871
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 877,
        "end": 878
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
              "start": 883,
              "end": 884
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 886,
                "end": 892
              },
              "start": 884,
              "end": 892
            },
            "accessibility": null,
            "static": false,
            "start": 883,
            "end": 892
          }
        ],
        "start": 881,
        "end": 894
      },
      "declare": false,
      "start": 872,
      "end": 895
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T40",
        "optional": false,
        "typeAnnotation": null,
        "start": 902,
        "end": 905
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boxified",
          "optional": false,
          "typeAnnotation": null,
          "start": 908,
          "end": 916
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
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 917,
                    "end": 918
                  },
                  "typeArguments": null,
                  "start": 917,
                  "end": 918
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 921,
                      "end": 922
                    },
                    "typeArguments": null,
                    "start": 921,
                    "end": 922
                  },
                  "start": 921,
                  "end": 924
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ReadonlyArray",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 927,
                    "end": 940
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
                          "start": 941,
                          "end": 942
                        },
                        "typeArguments": null,
                        "start": 941,
                        "end": 942
                      }
                    ],
                    "start": 940,
                    "end": 943
                  },
                  "start": 927,
                  "end": 943
                },
                {
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
                        "start": 947,
                        "end": 948
                      },
                      "typeArguments": null,
                      "start": 947,
                      "end": 948
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 950,
                        "end": 951
                      },
                      "typeArguments": null,
                      "start": 950,
                      "end": 951
                    }
                  ],
                  "start": 946,
                  "end": 952
                },
                {
                  "type": "TSStringKeyword",
                  "start": 955,
                  "end": 961
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 964,
                    "end": 970
                  },
                  "start": 964,
                  "end": 972
                }
              ],
              "start": 917,
              "end": 972
            }
          ],
          "start": 916,
          "end": 973
        },
        "start": 908,
        "end": 973
      },
      "declare": false,
      "start": 897,
      "end": 974
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReadWrite",
        "optional": false,
        "typeAnnotation": null,
        "start": 981,
        "end": 990
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
              "start": 991,
              "end": 992
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 991,
            "end": 992
          }
        ],
        "start": 990,
        "end": 993
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 1009,
          "end": 1010
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
              "start": 1020,
              "end": 1021
            },
            "typeArguments": null,
            "start": 1020,
            "end": 1021
          },
          "start": 1014,
          "end": 1021
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
              "start": 1025,
              "end": 1026
            },
            "typeArguments": null,
            "start": 1025,
            "end": 1026
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 1027,
              "end": 1028
            },
            "typeArguments": null,
            "start": 1027,
            "end": 1028
          },
          "start": 1025,
          "end": 1029
        },
        "optional": false,
        "readonly": "-",
        "start": 996,
        "end": 1031
      },
      "declare": false,
      "start": 976,
      "end": 1032
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T50",
        "optional": false,
        "typeAnnotation": null,
        "start": 1039,
        "end": 1042
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Readonly",
          "optional": false,
          "typeAnnotation": null,
          "start": 1045,
          "end": 1053
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 1054,
                "end": 1060
              },
              "start": 1054,
              "end": 1062
            }
          ],
          "start": 1053,
          "end": 1063
        },
        "start": 1045,
        "end": 1063
      },
      "declare": false,
      "start": 1034,
      "end": 1064
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T51",
        "optional": false,
        "typeAnnotation": null,
        "start": 1070,
        "end": 1073
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Readonly",
          "optional": false,
          "typeAnnotation": null,
          "start": 1076,
          "end": 1084
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1086,
                  "end": 1092
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1094,
                  "end": 1100
                }
              ],
              "start": 1085,
              "end": 1101
            }
          ],
          "start": 1084,
          "end": 1102
        },
        "start": 1076,
        "end": 1102
      },
      "declare": false,
      "start": 1065,
      "end": 1103
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T52",
        "optional": false,
        "typeAnnotation": null,
        "start": 1109,
        "end": 1112
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "typeAnnotation": null,
          "start": 1115,
          "end": 1122
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null,
                "start": 1123,
                "end": 1131
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1132,
                      "end": 1138
                    },
                    "start": 1132,
                    "end": 1140
                  }
                ],
                "start": 1131,
                "end": 1141
              },
              "start": 1123,
              "end": 1141
            }
          ],
          "start": 1122,
          "end": 1142
        },
        "start": 1115,
        "end": 1142
      },
      "declare": false,
      "start": 1104,
      "end": 1143
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T53",
        "optional": false,
        "typeAnnotation": null,
        "start": 1149,
        "end": 1152
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Readonly",
          "optional": false,
          "typeAnnotation": null,
          "start": 1155,
          "end": 1163
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 1164,
                "end": 1171
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1172,
                      "end": 1178
                    },
                    "start": 1172,
                    "end": 1180
                  }
                ],
                "start": 1171,
                "end": 1181
              },
              "start": 1164,
              "end": 1181
            }
          ],
          "start": 1163,
          "end": 1182
        },
        "start": 1155,
        "end": 1182
      },
      "declare": false,
      "start": 1144,
      "end": 1183
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T54",
        "optional": false,
        "typeAnnotation": null,
        "start": 1189,
        "end": 1192
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReadWrite",
          "optional": false,
          "typeAnnotation": null,
          "start": 1195,
          "end": 1204
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Required",
                "optional": false,
                "typeAnnotation": null,
                "start": 1205,
                "end": 1213
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T53",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1214,
                      "end": 1217
                    },
                    "typeArguments": null,
                    "start": 1214,
                    "end": 1217
                  }
                ],
                "start": 1213,
                "end": 1218
              },
              "start": 1205,
              "end": 1218
            }
          ],
          "start": 1204,
          "end": 1219
        },
        "start": 1195,
        "end": 1219
      },
      "declare": false,
      "start": 1184,
      "end": 1220
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "unboxify",
        "optional": false,
        "typeAnnotation": null,
        "start": 1239,
        "end": 1247
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
                "name": "Boxified",
                "optional": false,
                "typeAnnotation": null,
                "start": 1254,
                "end": 1262
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
                      "start": 1263,
                      "end": 1264
                    },
                    "typeArguments": null,
                    "start": 1263,
                    "end": 1264
                  }
                ],
                "start": 1262,
                "end": 1265
              },
              "start": 1254,
              "end": 1265
            },
            "start": 1252,
            "end": 1265
          },
          "start": 1251,
          "end": 1265
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1268,
            "end": 1269
          },
          "typeArguments": null,
          "start": 1268,
          "end": 1269
        },
        "start": 1266,
        "end": 1269
      },
      "body": null,
      "expression": false,
      "start": 1222,
      "end": 1270
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Box",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1290,
                      "end": 1293
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1294,
                          "end": 1300
                        }
                      ],
                      "start": 1293,
                      "end": 1301
                    },
                    "start": 1290,
                    "end": 1301
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Box",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1303,
                      "end": 1306
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1307,
                          "end": 1313
                        }
                      ],
                      "start": 1306,
                      "end": 1314
                    },
                    "start": 1303,
                    "end": 1314
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
                          "name": "Box",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1319,
                          "end": 1322
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSBooleanKeyword",
                              "start": 1323,
                              "end": 1330
                            }
                          ],
                          "start": 1322,
                          "end": 1331
                        },
                        "start": 1319,
                        "end": 1331
                      },
                      "start": 1319,
                      "end": 1333
                    },
                    "start": 1316,
                    "end": 1333
                  }
                ],
                "start": 1289,
                "end": 1334
              },
              "start": 1287,
              "end": 1334
            },
            "start": 1284,
            "end": 1334
          },
          "init": null,
          "definite": false,
          "start": 1284,
          "end": 1334
        }
      ],
      "declare": true,
      "start": 1272,
      "end": 1335
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y10",
            "optional": false,
            "typeAnnotation": null,
            "start": 1340,
            "end": 1343
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "unboxify",
              "optional": false,
              "typeAnnotation": null,
              "start": 1346,
              "end": 1354
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x10",
                "optional": false,
                "typeAnnotation": null,
                "start": 1355,
                "end": 1358
              }
            ],
            "optional": false,
            "start": 1346,
            "end": 1359
          },
          "definite": false,
          "start": 1340,
          "end": 1359
        }
      ],
      "declare": false,
      "start": 1336,
      "end": 1360
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Box",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1379,
                    "end": 1382
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 1383,
                        "end": 1389
                      }
                    ],
                    "start": 1382,
                    "end": 1390
                  },
                  "start": 1379,
                  "end": 1390
                },
                "start": 1379,
                "end": 1392
              },
              "start": 1377,
              "end": 1392
            },
            "start": 1374,
            "end": 1392
          },
          "init": null,
          "definite": false,
          "start": 1374,
          "end": 1392
        }
      ],
      "declare": true,
      "start": 1362,
      "end": 1393
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y11",
            "optional": false,
            "typeAnnotation": null,
            "start": 1398,
            "end": 1401
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "unboxify",
              "optional": false,
              "typeAnnotation": null,
              "start": 1404,
              "end": 1412
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x11",
                "optional": false,
                "typeAnnotation": null,
                "start": 1413,
                "end": 1416
              }
            ],
            "optional": false,
            "start": 1404,
            "end": 1417
          },
          "definite": false,
          "start": 1398,
          "end": 1417
        }
      ],
      "declare": false,
      "start": 1394,
      "end": 1418
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x12",
            "optional": false,
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1439,
                      "end": 1440
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Box",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1442,
                          "end": 1445
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 1446,
                              "end": 1452
                            }
                          ],
                          "start": 1445,
                          "end": 1453
                        },
                        "start": 1442,
                        "end": 1453
                      },
                      "start": 1440,
                      "end": 1453
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1439,
                    "end": 1454
                  },
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
                      "start": 1455,
                      "end": 1456
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Box",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1458,
                          "end": 1461
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSStringKeyword",
                                "start": 1462,
                                "end": 1468
                              },
                              "start": 1462,
                              "end": 1470
                            }
                          ],
                          "start": 1461,
                          "end": 1471
                        },
                        "start": 1458,
                        "end": 1471
                      },
                      "start": 1456,
                      "end": 1471
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1455,
                    "end": 1471
                  }
                ],
                "start": 1437,
                "end": 1473
              },
              "start": 1435,
              "end": 1473
            },
            "start": 1432,
            "end": 1473
          },
          "init": null,
          "definite": false,
          "start": 1432,
          "end": 1473
        }
      ],
      "declare": true,
      "start": 1420,
      "end": 1474
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y12",
            "optional": false,
            "typeAnnotation": null,
            "start": 1479,
            "end": 1482
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "unboxify",
              "optional": false,
              "typeAnnotation": null,
              "start": 1485,
              "end": 1493
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x12",
                "optional": false,
                "typeAnnotation": null,
                "start": 1494,
                "end": 1497
              }
            ],
            "optional": false,
            "start": 1485,
            "end": 1498
          },
          "definite": false,
          "start": 1479,
          "end": 1498
        }
      ],
      "declare": false,
      "start": 1475,
      "end": 1499
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nonpartial",
        "optional": false,
        "typeAnnotation": null,
        "start": 1518,
        "end": 1528
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1529,
              "end": 1530
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1529,
            "end": 1530
          }
        ],
        "start": 1528,
        "end": 1531
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
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 1535,
                "end": 1542
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
                      "start": 1543,
                      "end": 1544
                    },
                    "typeArguments": null,
                    "start": 1543,
                    "end": 1544
                  }
                ],
                "start": 1542,
                "end": 1545
              },
              "start": 1535,
              "end": 1545
            },
            "start": 1533,
            "end": 1545
          },
          "start": 1532,
          "end": 1545
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1548,
            "end": 1549
          },
          "typeArguments": null,
          "start": 1548,
          "end": 1549
        },
        "start": 1546,
        "end": 1549
      },
      "body": null,
      "expression": false,
      "start": 1501,
      "end": 1550
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x20",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 1570,
                        "end": 1576
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 1579,
                        "end": 1588
                      }
                    ],
                    "start": 1570,
                    "end": 1588
                  },
                  {
                    "type": "TSOptionalType",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1590,
                      "end": 1596
                    },
                    "start": 1590,
                    "end": 1597
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSBooleanKeyword",
                        "start": 1602,
                        "end": 1609
                      },
                      "start": 1602,
                      "end": 1611
                    },
                    "start": 1599,
                    "end": 1611
                  }
                ],
                "start": 1569,
                "end": 1612
              },
              "start": 1567,
              "end": 1612
            },
            "start": 1564,
            "end": 1612
          },
          "init": null,
          "definite": false,
          "start": 1564,
          "end": 1612
        }
      ],
      "declare": true,
      "start": 1552,
      "end": 1613
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y20",
            "optional": false,
            "typeAnnotation": null,
            "start": 1618,
            "end": 1621
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonpartial",
              "optional": false,
              "typeAnnotation": null,
              "start": 1624,
              "end": 1634
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x20",
                "optional": false,
                "typeAnnotation": null,
                "start": 1635,
                "end": 1638
              }
            ],
            "optional": false,
            "start": 1624,
            "end": 1639
          },
          "definite": false,
          "start": 1618,
          "end": 1639
        }
      ],
      "declare": false,
      "start": 1614,
      "end": 1640
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1660,
                      "end": 1666
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 1669,
                      "end": 1678
                    }
                  ],
                  "start": 1660,
                  "end": 1678
                },
                "start": 1659,
                "end": 1681
              },
              "start": 1657,
              "end": 1681
            },
            "start": 1654,
            "end": 1681
          },
          "init": null,
          "definite": false,
          "start": 1654,
          "end": 1681
        }
      ],
      "declare": true,
      "start": 1642,
      "end": 1682
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y21",
            "optional": false,
            "typeAnnotation": null,
            "start": 1687,
            "end": 1690
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonpartial",
              "optional": false,
              "typeAnnotation": null,
              "start": 1693,
              "end": 1703
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x21",
                "optional": false,
                "typeAnnotation": null,
                "start": 1704,
                "end": 1707
              }
            ],
            "optional": false,
            "start": 1693,
            "end": 1708
          },
          "definite": false,
          "start": 1687,
          "end": 1708
        }
      ],
      "declare": false,
      "start": 1683,
      "end": 1709
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x22",
            "optional": false,
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1730,
                      "end": 1731
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 1733,
                            "end": 1739
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 1742,
                            "end": 1751
                          }
                        ],
                        "start": 1733,
                        "end": 1751
                      },
                      "start": 1731,
                      "end": 1751
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1730,
                    "end": 1752
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1753,
                      "end": 1754
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 1757,
                          "end": 1763
                        },
                        "start": 1757,
                        "end": 1765
                      },
                      "start": 1755,
                      "end": 1765
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1753,
                    "end": 1765
                  }
                ],
                "start": 1728,
                "end": 1767
              },
              "start": 1726,
              "end": 1767
            },
            "start": 1723,
            "end": 1767
          },
          "init": null,
          "definite": false,
          "start": 1723,
          "end": 1767
        }
      ],
      "declare": true,
      "start": 1711,
      "end": 1768
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y22",
            "optional": false,
            "typeAnnotation": null,
            "start": 1773,
            "end": 1776
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonpartial",
              "optional": false,
              "typeAnnotation": null,
              "start": 1779,
              "end": 1789
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x22",
                "optional": false,
                "typeAnnotation": null,
                "start": 1790,
                "end": 1793
              }
            ],
            "optional": false,
            "start": 1779,
            "end": 1794
          },
          "definite": false,
          "start": 1773,
          "end": 1794
        }
      ],
      "declare": false,
      "start": 1769,
      "end": 1795
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "__Awaited",
        "optional": false,
        "typeAnnotation": null,
        "start": 1802,
        "end": 1811
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
              "start": 1812,
              "end": 1813
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1812,
            "end": 1813
          }
        ],
        "start": 1811,
        "end": 1814
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
            "start": 1817,
            "end": 1818
          },
          "typeArguments": null,
          "start": 1817,
          "end": 1818
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "PromiseLike",
            "optional": false,
            "typeAnnotation": null,
            "start": 1827,
            "end": 1838
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
                    "start": 1845,
                    "end": 1846
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1845,
                  "end": 1846
                },
                "start": 1839,
                "end": 1846
              }
            ],
            "start": 1838,
            "end": 1847
          },
          "start": 1827,
          "end": 1847
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 1850,
            "end": 1851
          },
          "typeArguments": null,
          "start": 1850,
          "end": 1851
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1854,
            "end": 1855
          },
          "typeArguments": null,
          "start": 1854,
          "end": 1855
        },
        "start": 1817,
        "end": 1855
      },
      "declare": false,
      "start": 1797,
      "end": 1856
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Awaitified",
        "optional": false,
        "typeAnnotation": null,
        "start": 1862,
        "end": 1872
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
              "start": 1873,
              "end": 1874
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1873,
            "end": 1874
          }
        ],
        "start": 1872,
        "end": 1875
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 1881,
          "end": 1882
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
              "start": 1892,
              "end": 1893
            },
            "typeArguments": null,
            "start": 1892,
            "end": 1893
          },
          "start": 1886,
          "end": 1893
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "__Awaited",
            "optional": false,
            "typeAnnotation": null,
            "start": 1896,
            "end": 1905
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
                    "start": 1906,
                    "end": 1907
                  },
                  "typeArguments": null,
                  "start": 1906,
                  "end": 1907
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1908,
                    "end": 1909
                  },
                  "typeArguments": null,
                  "start": 1908,
                  "end": 1909
                },
                "start": 1906,
                "end": 1910
              }
            ],
            "start": 1905,
            "end": 1911
          },
          "start": 1896,
          "end": 1911
        },
        "optional": false,
        "readonly": null,
        "start": 1878,
        "end": 1913
      },
      "declare": false,
      "start": 1857,
      "end": 1914
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "all",
        "optional": false,
        "typeAnnotation": null,
        "start": 1933,
        "end": 1936
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1937,
              "end": 1938
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 1947,
                "end": 1950
              },
              "start": 1947,
              "end": 1952
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1937,
            "end": 1952
          }
        ],
        "start": 1936,
        "end": 1953
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "values",
            "optional": false,
            "typeAnnotation": null,
            "start": 1957,
            "end": 1963
          },
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
                "start": 1965,
                "end": 1966
              },
              "typeArguments": null,
              "start": 1965,
              "end": 1966
            },
            "start": 1963,
            "end": 1966
          },
          "value": null,
          "start": 1954,
          "end": 1966
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
            "start": 1969,
            "end": 1976
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Awaitified",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1977,
                  "end": 1987
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
                        "start": 1988,
                        "end": 1989
                      },
                      "typeArguments": null,
                      "start": 1988,
                      "end": 1989
                    }
                  ],
                  "start": 1987,
                  "end": 1990
                },
                "start": 1977,
                "end": 1990
              }
            ],
            "start": 1976,
            "end": 1991
          },
          "start": 1969,
          "end": 1991
        },
        "start": 1967,
        "end": 1991
      },
      "body": null,
      "expression": false,
      "start": 1916,
      "end": 1992
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2003,
        "end": 2005
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSNumberKeyword",
              "start": 2009,
              "end": 2015
            },
            "start": 2007,
            "end": 2015
          },
          "start": 2006,
          "end": 2015
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 2020,
                "end": 2027
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 2028,
                    "end": 2034
                  }
                ],
                "start": 2027,
                "end": 2035
              },
              "start": 2020,
              "end": 2035
            },
            "start": 2018,
            "end": 2035
          },
          "start": 2017,
          "end": 2035
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 2040,
                "end": 2046
              },
              "start": 2040,
              "end": 2048
            },
            "start": 2038,
            "end": 2048
          },
          "start": 2037,
          "end": 2048
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 2053,
                "end": 2060
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 2061,
                      "end": 2067
                    },
                    "start": 2061,
                    "end": 2069
                  }
                ],
                "start": 2060,
                "end": 2070
              },
              "start": 2053,
              "end": 2070
            },
            "start": 2051,
            "end": 2070
          },
          "start": 2050,
          "end": 2070
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2082,
                  "end": 2084
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "all",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2087,
                    "end": 2090
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2091,
                      "end": 2092
                    }
                  ],
                  "optional": false,
                  "start": 2087,
                  "end": 2093
                },
                "definite": false,
                "start": 2082,
                "end": 2093
              }
            ],
            "declare": false,
            "start": 2078,
            "end": 2094
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2103,
                  "end": 2105
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "all",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2108,
                    "end": 2111
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2112,
                      "end": 2113
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2115,
                      "end": 2116
                    }
                  ],
                  "optional": false,
                  "start": 2108,
                  "end": 2117
                },
                "definite": false,
                "start": 2103,
                "end": 2117
              }
            ],
            "declare": false,
            "start": 2099,
            "end": 2118
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2127,
                  "end": 2129
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "all",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2132,
                    "end": 2135
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2136,
                      "end": 2137
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2139,
                      "end": 2140
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2142,
                      "end": 2143
                    }
                  ],
                  "optional": false,
                  "start": 2132,
                  "end": 2144
                },
                "definite": false,
                "start": 2127,
                "end": 2144
              }
            ],
            "declare": false,
            "start": 2123,
            "end": 2145
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2154,
                  "end": 2156
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "all",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2159,
                    "end": 2162
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2163,
                      "end": 2164
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2166,
                      "end": 2167
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2169,
                      "end": 2170
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2172,
                      "end": 2173
                    }
                  ],
                  "optional": false,
                  "start": 2159,
                  "end": 2174
                },
                "definite": false,
                "start": 2154,
                "end": 2174
              }
            ],
            "declare": false,
            "start": 2150,
            "end": 2175
          }
        ],
        "start": 2072,
        "end": 2177
      },
      "expression": false,
      "start": 1994,
      "end": 2177
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2188,
        "end": 2190
      },
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2191,
              "end": 2192
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 2201,
                "end": 2204
              },
              "start": 2201,
              "end": 2206
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2191,
            "end": 2206
          }
        ],
        "start": 2190,
        "end": 2207
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
                "name": "Boxified",
                "optional": false,
                "typeAnnotation": null,
                "start": 2211,
                "end": 2219
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
                      "start": 2220,
                      "end": 2221
                    },
                    "typeArguments": null,
                    "start": 2220,
                    "end": 2221
                  }
                ],
                "start": 2219,
                "end": 2222
              },
              "start": 2211,
              "end": 2222
            },
            "start": 2209,
            "end": 2222
          },
          "start": 2208,
          "end": 2222
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Box",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2237,
                            "end": 2240
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSAnyKeyword",
                                "start": 2241,
                                "end": 2244
                              }
                            ],
                            "start": 2240,
                            "end": 2245
                          },
                          "start": 2237,
                          "end": 2245
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 2248,
                          "end": 2257
                        }
                      ],
                      "start": 2237,
                      "end": 2257
                    },
                    "start": 2235,
                    "end": 2257
                  },
                  "start": 2234,
                  "end": 2257
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2260,
                      "end": 2261
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "pop",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2262,
                      "end": 2265
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2260,
                    "end": 2265
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 2260,
                  "end": 2267
                },
                "definite": false,
                "start": 2234,
                "end": 2267
              }
            ],
            "declare": false,
            "start": 2230,
            "end": 2268
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Box",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2280,
                          "end": 2283
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSAnyKeyword",
                              "start": 2284,
                              "end": 2287
                            }
                          ],
                          "start": 2283,
                          "end": 2288
                        },
                        "start": 2280,
                        "end": 2288
                      },
                      "start": 2280,
                      "end": 2290
                    },
                    "start": 2278,
                    "end": 2290
                  },
                  "start": 2277,
                  "end": 2290
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2293,
                      "end": 2294
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "concat",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2295,
                      "end": 2301
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2293,
                    "end": 2301
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2302,
                      "end": 2303
                    }
                  ],
                  "optional": false,
                  "start": 2293,
                  "end": 2304
                },
                "definite": false,
                "start": 2277,
                "end": 2304
              }
            ],
            "declare": false,
            "start": 2273,
            "end": 2305
          }
        ],
        "start": 2224,
        "end": 2307
      },
      "expression": false,
      "start": 2179,
      "end": 2307
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ElementType",
        "optional": false,
        "typeAnnotation": null,
        "start": 2336,
        "end": 2347
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
              "start": 2348,
              "end": 2349
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2348,
            "end": 2349
          }
        ],
        "start": 2347,
        "end": 2350
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
            "start": 2353,
            "end": 2354
          },
          "typeArguments": null,
          "start": 2353,
          "end": 2354
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 2363,
            "end": 2368
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
                    "start": 2375,
                    "end": 2376
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2375,
                  "end": 2376
                },
                "start": 2369,
                "end": 2376
              }
            ],
            "start": 2368,
            "end": 2377
          },
          "start": 2363,
          "end": 2377
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 2380,
            "end": 2381
          },
          "typeArguments": null,
          "start": 2380,
          "end": 2381
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2384,
          "end": 2389
        },
        "start": 2353,
        "end": 2389
      },
      "declare": false,
      "start": 2331,
      "end": 2390
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mapped",
        "optional": false,
        "typeAnnotation": null,
        "start": 2396,
        "end": 2402
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
              "start": 2403,
              "end": 2404
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2403,
            "end": 2404
          }
        ],
        "start": 2402,
        "end": 2405
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 2411,
          "end": 2412
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
              "start": 2422,
              "end": 2423
            },
            "typeArguments": null,
            "start": 2422,
            "end": 2423
          },
          "start": 2416,
          "end": 2423
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
              "start": 2426,
              "end": 2427
            },
            "typeArguments": null,
            "start": 2426,
            "end": 2427
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2428,
              "end": 2429
            },
            "typeArguments": null,
            "start": 2428,
            "end": 2429
          },
          "start": 2426,
          "end": 2430
        },
        "optional": false,
        "readonly": null,
        "start": 2408,
        "end": 2432
      },
      "declare": false,
      "start": 2391,
      "end": 2433
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 2440,
        "end": 2441
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
              "start": 2442,
              "end": 2443
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2442,
            "end": 2443
          }
        ],
        "start": 2441,
        "end": 2444
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ElementType",
          "optional": false,
          "typeAnnotation": null,
          "start": 2447,
          "end": 2458
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mapped",
                "optional": false,
                "typeAnnotation": null,
                "start": 2459,
                "end": 2465
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
                      "start": 2466,
                      "end": 2467
                    },
                    "typeArguments": null,
                    "start": 2466,
                    "end": 2467
                  }
                ],
                "start": 2465,
                "end": 2468
              },
              "start": 2459,
              "end": 2468
            }
          ],
          "start": 2458,
          "end": 2469
        },
        "start": 2447,
        "end": 2469
      },
      "declare": false,
      "start": 2435,
      "end": 2470
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "R1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2476,
        "end": 2478
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "F",
          "optional": false,
          "typeAnnotation": null,
          "start": 2481,
          "end": 2482
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 2484,
                  "end": 2490
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 2492,
                  "end": 2498
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 2500,
                  "end": 2507
                }
              ],
              "start": 2483,
              "end": 2508
            }
          ],
          "start": 2482,
          "end": 2509
        },
        "start": 2481,
        "end": 2509
      },
      "declare": false,
      "start": 2471,
      "end": 2510
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "R2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2546,
        "end": 2548
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ElementType",
          "optional": false,
          "typeAnnotation": null,
          "start": 2551,
          "end": 2562
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mapped",
                "optional": false,
                "typeAnnotation": null,
                "start": 2563,
                "end": 2569
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSStringKeyword",
                        "start": 2571,
                        "end": 2577
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 2579,
                        "end": 2585
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "start": 2587,
                        "end": 2594
                      }
                    ],
                    "start": 2570,
                    "end": 2595
                  }
                ],
                "start": 2569,
                "end": 2596
              },
              "start": 2563,
              "end": 2596
            }
          ],
          "start": 2562,
          "end": 2597
        },
        "start": 2551,
        "end": 2597
      },
      "declare": false,
      "start": 2541,
      "end": 2598
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "acceptArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 2669,
        "end": 2680
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arr",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 2686,
                "end": 2689
              },
              "start": 2686,
              "end": 2691
            },
            "start": 2684,
            "end": 2691
          },
          "start": 2681,
          "end": 2691
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 2694,
          "end": 2698
        },
        "start": 2692,
        "end": 2698
      },
      "body": null,
      "expression": false,
      "start": 2652,
      "end": 2699
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mapArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 2717,
        "end": 2725
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2726,
              "end": 2727
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 2736,
                "end": 2739
              },
              "start": 2736,
              "end": 2741
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2726,
            "end": 2741
          }
        ],
        "start": 2725,
        "end": 2742
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arr",
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
                "start": 2748,
                "end": 2749
              },
              "typeArguments": null,
              "start": 2748,
              "end": 2749
            },
            "start": 2746,
            "end": 2749
          },
          "start": 2743,
          "end": 2749
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Mapped",
            "optional": false,
            "typeAnnotation": null,
            "start": 2752,
            "end": 2758
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
                  "start": 2759,
                  "end": 2760
                },
                "typeArguments": null,
                "start": 2759,
                "end": 2760
              }
            ],
            "start": 2758,
            "end": 2761
          },
          "start": 2752,
          "end": 2761
        },
        "start": 2750,
        "end": 2761
      },
      "body": null,
      "expression": false,
      "start": 2700,
      "end": 2762
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "acceptMappedArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 2772,
        "end": 2789
      },
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2790,
              "end": 2791
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 2800,
                "end": 2803
              },
              "start": 2800,
              "end": 2805
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2790,
            "end": 2805
          }
        ],
        "start": 2789,
        "end": 2806
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arr",
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
                "start": 2812,
                "end": 2813
              },
              "typeArguments": null,
              "start": 2812,
              "end": 2813
            },
            "start": 2810,
            "end": 2813
          },
          "start": 2807,
          "end": 2813
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "acceptArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 2821,
                "end": 2832
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mapArray",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2833,
                    "end": 2841
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arr",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2842,
                      "end": 2845
                    }
                  ],
                  "optional": false,
                  "start": 2833,
                  "end": 2846
                }
              ],
              "optional": false,
              "start": 2821,
              "end": 2847
            },
            "directive": null,
            "start": 2821,
            "end": 2848
          }
        ],
        "start": 2815,
        "end": 2850
      },
      "expression": false,
      "start": 2763,
      "end": 2850
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Unconstrained",
        "optional": false,
        "typeAnnotation": null,
        "start": 2879,
        "end": 2892
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
              "start": 2893,
              "end": 2894
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2893,
            "end": 2894
          }
        ],
        "start": 2892,
        "end": 2895
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ElementType",
          "optional": false,
          "typeAnnotation": null,
          "start": 2898,
          "end": 2909
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mapped",
                "optional": false,
                "typeAnnotation": null,
                "start": 2910,
                "end": 2916
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
                      "start": 2917,
                      "end": 2918
                    },
                    "typeArguments": null,
                    "start": 2917,
                    "end": 2918
                  }
                ],
                "start": 2916,
                "end": 2919
              },
              "start": 2910,
              "end": 2919
            }
          ],
          "start": 2909,
          "end": 2920
        },
        "start": 2898,
        "end": 2920
      },
      "declare": false,
      "start": 2874,
      "end": 2921
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2927,
        "end": 2929
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Unconstrained",
          "optional": false,
          "typeAnnotation": null,
          "start": 2932,
          "end": 2945
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 2947,
                  "end": 2953
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 2955,
                  "end": 2961
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 2963,
                  "end": 2970
                }
              ],
              "start": 2946,
              "end": 2971
            }
          ],
          "start": 2945,
          "end": 2972
        },
        "start": 2932,
        "end": 2972
      },
      "declare": false,
      "start": 2922,
      "end": 2973
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Constrained",
        "optional": false,
        "typeAnnotation": null,
        "start": 3010,
        "end": 3021
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
              "start": 3022,
              "end": 3023
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 3032,
                "end": 3035
              },
              "start": 3032,
              "end": 3037
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3022,
            "end": 3037
          }
        ],
        "start": 3021,
        "end": 3038
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ElementType",
          "optional": false,
          "typeAnnotation": null,
          "start": 3041,
          "end": 3052
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mapped",
                "optional": false,
                "typeAnnotation": null,
                "start": 3053,
                "end": 3059
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
                      "start": 3060,
                      "end": 3061
                    },
                    "typeArguments": null,
                    "start": 3060,
                    "end": 3061
                  }
                ],
                "start": 3059,
                "end": 3062
              },
              "start": 3053,
              "end": 3062
            }
          ],
          "start": 3052,
          "end": 3063
        },
        "start": 3041,
        "end": 3063
      },
      "declare": false,
      "start": 3005,
      "end": 3064
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3070,
        "end": 3072
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Constrained",
          "optional": false,
          "typeAnnotation": null,
          "start": 3075,
          "end": 3086
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 3088,
                  "end": 3094
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 3096,
                  "end": 3102
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 3104,
                  "end": 3111
                }
              ],
              "start": 3087,
              "end": 3112
            }
          ],
          "start": 3086,
          "end": 3113
        },
        "start": 3075,
        "end": 3113
      },
      "declare": false,
      "start": 3065,
      "end": 3114
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3144
}
```
