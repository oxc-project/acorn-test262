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
        "name": "StringContains",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
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
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 43
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 52,
              "end": 58
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 42,
            "end": 58
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "L",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 61
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 70,
              "end": 76
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 60,
            "end": 76
          }
        ],
        "start": 41,
        "end": 77
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 85
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 89,
                  "end": 90
                },
                "typeArguments": null,
                "start": 89,
                "end": 90
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "true",
                  "raw": "'true'",
                  "start": 93,
                  "end": 99
                },
                "start": 93,
                "end": 99
              },
              "optional": false,
              "readonly": null,
              "start": 81,
              "end": 101
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
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 112,
                          "end": 118
                        },
                        "start": 110,
                        "end": 118
                      },
                      "start": 107,
                      "end": 118
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "false",
                        "raw": "'false'",
                        "start": 121,
                        "end": 128
                      },
                      "start": 121,
                      "end": 128
                    },
                    "start": 119,
                    "end": 128
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 106,
                  "end": 128
                }
              ],
              "start": 104,
              "end": 129
            }
          ],
          "start": 81,
          "end": 129
        },
        "indexType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "L",
            "optional": false,
            "typeAnnotation": null,
            "start": 131,
            "end": 132
          },
          "typeArguments": null,
          "start": 131,
          "end": 132
        },
        "start": 80,
        "end": 133
      },
      "declare": false,
      "start": 22,
      "end": 134
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ObjectHasKey",
        "optional": false,
        "typeAnnotation": null,
        "start": 141,
        "end": 153
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
              "start": 154,
              "end": 155
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 154,
            "end": 155
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "L",
              "optional": false,
              "typeAnnotation": null,
              "start": 157,
              "end": 158
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 167,
              "end": 173
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 157,
            "end": 173
          }
        ],
        "start": 153,
        "end": 174
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "StringContains",
          "optional": false,
          "typeAnnotation": null,
          "start": 177,
          "end": 191
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Extract",
                "optional": false,
                "typeAnnotation": null,
                "start": 192,
                "end": 199
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
                        "name": "O",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 206,
                        "end": 207
                      },
                      "typeArguments": null,
                      "start": 206,
                      "end": 207
                    },
                    "start": 200,
                    "end": 207
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 209,
                    "end": 215
                  }
                ],
                "start": 199,
                "end": 216
              },
              "start": 192,
              "end": 216
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "L",
                "optional": false,
                "typeAnnotation": null,
                "start": 218,
                "end": 219
              },
              "typeArguments": null,
              "start": 218,
              "end": 219
            }
          ],
          "start": 191,
          "end": 220
        },
        "start": 177,
        "end": 220
      },
      "declare": false,
      "start": 136,
      "end": 221
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 228,
        "end": 229
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
              "start": 230,
              "end": 231
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 230,
            "end": 231
          }
        ],
        "start": 229,
        "end": 232
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ObjectHasKey",
          "optional": false,
          "typeAnnotation": null,
          "start": 235,
          "end": 247
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
                "start": 248,
                "end": 249
              },
              "typeArguments": null,
              "start": 248,
              "end": 249
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "0",
                "raw": "'0'",
                "start": 251,
                "end": 254
              },
              "start": 251,
              "end": 254
            }
          ],
          "start": 247,
          "end": 255
        },
        "start": 235,
        "end": 255
      },
      "declare": false,
      "start": 223,
      "end": 256
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 263,
        "end": 264
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ObjectHasKey",
          "optional": false,
          "typeAnnotation": null,
          "start": 267,
          "end": 279
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 281,
                  "end": 287
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 289,
                  "end": 295
                }
              ],
              "start": 280,
              "end": 296
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "1",
                "raw": "'1'",
                "start": 298,
                "end": 301
              },
              "start": 298,
              "end": 301
            }
          ],
          "start": 279,
          "end": 302
        },
        "start": 267,
        "end": 302
      },
      "declare": false,
      "start": 258,
      "end": 303
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 320,
        "end": 321
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ObjectHasKey",
          "optional": false,
          "typeAnnotation": null,
          "start": 324,
          "end": 336
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 338,
                  "end": 344
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 346,
                  "end": 352
                }
              ],
              "start": 337,
              "end": 353
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "2",
                "raw": "'2'",
                "start": 355,
                "end": 358
              },
              "start": 355,
              "end": 358
            }
          ],
          "start": 336,
          "end": 359
        },
        "start": 324,
        "end": 359
      },
      "declare": false,
      "start": 315,
      "end": 360
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 378,
        "end": 379
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 382,
          "end": 383
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 385,
                  "end": 391
                }
              ],
              "start": 384,
              "end": 392
            }
          ],
          "start": 383,
          "end": 393
        },
        "start": 382,
        "end": 393
      },
      "declare": false,
      "start": 373,
      "end": 394
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 442,
        "end": 443
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
              "start": 444,
              "end": 445
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 444,
            "end": 445
          }
        ],
        "start": 443,
        "end": 446
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
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
                "name": "true",
                "optional": false,
                "typeAnnotation": null,
                "start": 451,
                "end": 455
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "true",
                    "raw": "'true'",
                    "start": 457,
                    "end": 463
                  },
                  "start": 457,
                  "end": 463
                },
                "start": 455,
                "end": 463
              },
              "accessibility": null,
              "static": false,
              "start": 451,
              "end": 463
            }
          ],
          "start": 449,
          "end": 465
        },
        "indexType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ObjectHasKey",
            "optional": false,
            "typeAnnotation": null,
            "start": 466,
            "end": 478
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
                  "start": 479,
                  "end": 480
                },
                "typeArguments": null,
                "start": 479,
                "end": 480
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "'1'",
                  "start": 482,
                  "end": 485
                },
                "start": 482,
                "end": 485
              }
            ],
            "start": 478,
            "end": 486
          },
          "start": 466,
          "end": 486
        },
        "start": 449,
        "end": 487
      },
      "declare": false,
      "start": 437,
      "end": 488
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Juxtapose",
        "optional": false,
        "typeAnnotation": null,
        "start": 495,
        "end": 504
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
              "start": 505,
              "end": 506
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 505,
            "end": 506
          }
        ],
        "start": 504,
        "end": 507
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
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
                    "name": "true",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 513,
                    "end": 517
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "otherwise",
                        "raw": "'otherwise'",
                        "start": 519,
                        "end": 530
                      },
                      "start": 519,
                      "end": 530
                    },
                    "start": 517,
                    "end": 530
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 513,
                  "end": 530
                }
              ],
              "start": 511,
              "end": 532
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
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 541,
                          "end": 547
                        },
                        "start": 539,
                        "end": 547
                      },
                      "start": 538,
                      "end": 547
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "true",
                        "raw": "'true'",
                        "start": 550,
                        "end": 556
                      },
                      "start": 550,
                      "end": 556
                    },
                    "start": 548,
                    "end": 556
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 537,
                  "end": 556
                }
              ],
              "start": 535,
              "end": 558
            }
          ],
          "start": 511,
          "end": 558
        },
        "indexType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ObjectHasKey",
            "optional": false,
            "typeAnnotation": null,
            "start": 560,
            "end": 572
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
                  "start": 573,
                  "end": 574
                },
                "typeArguments": null,
                "start": 573,
                "end": 574
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "'1'",
                  "start": 576,
                  "end": 579
                },
                "start": 576,
                "end": 579
              }
            ],
            "start": 572,
            "end": 580
          },
          "start": 560,
          "end": 580
        },
        "start": 510,
        "end": 581
      },
      "declare": false,
      "start": 490,
      "end": 582
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DeepError",
        "optional": false,
        "typeAnnotation": null,
        "start": 622,
        "end": 631
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
              "start": 632,
              "end": 633
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 632,
            "end": 633
          }
        ],
        "start": 631,
        "end": 634
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
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
                "name": "true",
                "optional": false,
                "typeAnnotation": null,
                "start": 639,
                "end": 643
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "true",
                    "raw": "'true'",
                    "start": 645,
                    "end": 651
                  },
                  "start": 645,
                  "end": 651
                },
                "start": 643,
                "end": 651
              },
              "accessibility": null,
              "static": false,
              "start": 639,
              "end": 651
            }
          ],
          "start": 637,
          "end": 653
        },
        "indexType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Juxtapose",
            "optional": false,
            "typeAnnotation": null,
            "start": 654,
            "end": 663
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
                  "start": 664,
                  "end": 665
                },
                "typeArguments": null,
                "start": 664,
                "end": 665
              }
            ],
            "start": 663,
            "end": 666
          },
          "start": 654,
          "end": 666
        },
        "start": 637,
        "end": 667
      },
      "declare": false,
      "start": 617,
      "end": 668
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DeepOK",
        "optional": false,
        "typeAnnotation": null,
        "start": 675,
        "end": 681
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
              "start": 682,
              "end": 683
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 682,
            "end": 683
          }
        ],
        "start": 681,
        "end": 684
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
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
                "name": "true",
                "optional": false,
                "typeAnnotation": null,
                "start": 689,
                "end": 693
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "true",
                    "raw": "'true'",
                    "start": 695,
                    "end": 701
                  },
                  "start": 695,
                  "end": 701
                },
                "start": 693,
                "end": 701
              },
              "accessibility": null,
              "static": false,
              "start": 689,
              "end": 702
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "otherwise",
                "optional": false,
                "typeAnnotation": null,
                "start": 703,
                "end": 712
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "false",
                    "raw": "'false'",
                    "start": 714,
                    "end": 721
                  },
                  "start": 714,
                  "end": 721
                },
                "start": 712,
                "end": 721
              },
              "accessibility": null,
              "static": false,
              "start": 703,
              "end": 721
            }
          ],
          "start": 687,
          "end": 723
        },
        "indexType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Juxtapose",
            "optional": false,
            "typeAnnotation": null,
            "start": 724,
            "end": 733
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
                  "start": 734,
                  "end": 735
                },
                "typeArguments": null,
                "start": 734,
                "end": 735
              }
            ],
            "start": 733,
            "end": 736
          },
          "start": 724,
          "end": 736
        },
        "start": 687,
        "end": 737
      },
      "declare": false,
      "start": 670,
      "end": 738
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 738
}
```
