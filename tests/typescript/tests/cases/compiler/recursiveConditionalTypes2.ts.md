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
        "name": "UnionToIntersection",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 92
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
              "start": 93,
              "end": 94
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 93,
            "end": 94
          }
        ],
        "start": 92,
        "end": 95
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 102,
              "end": 103
            },
            "typeArguments": null,
            "start": 102,
            "end": 103
          },
          "extendsType": {
            "type": "TSAnyKeyword",
            "start": 112,
            "end": 115
          },
          "trueType": {
            "type": "TSFunctionType",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
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
                      "start": 122,
                      "end": 123
                    },
                    "typeArguments": null,
                    "start": 122,
                    "end": 123
                  },
                  "start": 120,
                  "end": 123
                },
                "start": 119,
                "end": 123
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 128,
                "end": 135
              },
              "start": 125,
              "end": 135
            },
            "start": 118,
            "end": 135
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 138,
            "end": 143
          },
          "start": 102,
          "end": 143
        },
        "extendsType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 164,
                      "end": 165
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 164,
                    "end": 165
                  },
                  "start": 158,
                  "end": 165
                },
                "start": 156,
                "end": 165
              },
              "start": 155,
              "end": 165
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 170,
              "end": 177
            },
            "start": 167,
            "end": 177
          },
          "start": 154,
          "end": 177
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 182,
            "end": 183
          },
          "typeArguments": null,
          "start": 182,
          "end": 183
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 188,
          "end": 193
        },
        "start": 98,
        "end": 193
      },
      "declare": false,
      "start": 68,
      "end": 194
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassSpec",
        "optional": false,
        "typeAnnotation": null,
        "start": 206,
        "end": 215
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
              "name": "public",
              "optional": false,
              "typeAnnotation": null,
              "start": 220,
              "end": 226
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 229,
                "end": 235
              },
              "start": 227,
              "end": 235
            },
            "accessibility": null,
            "static": false,
            "start": 220,
            "end": 236
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "private",
              "optional": false,
              "typeAnnotation": null,
              "start": 239,
              "end": 246
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 249,
                "end": 255
              },
              "start": 247,
              "end": 255
            },
            "accessibility": null,
            "static": false,
            "start": 239,
            "end": 256
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicExtends",
              "optional": false,
              "typeAnnotation": null,
              "start": 259,
              "end": 272
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 275,
                  "end": 281
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 282,
                      "end": 288
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ClassSpec",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 290,
                        "end": 299
                      },
                      "typeArguments": null,
                      "start": 290,
                      "end": 299
                    }
                  ],
                  "start": 281,
                  "end": 300
                },
                "start": 275,
                "end": 300
              },
              "start": 273,
              "end": 300
            },
            "accessibility": null,
            "static": false,
            "start": 259,
            "end": 301
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateExtends",
              "optional": false,
              "typeAnnotation": null,
              "start": 304,
              "end": 318
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 321,
                  "end": 327
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 328,
                      "end": 334
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ClassSpec",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 336,
                        "end": 345
                      },
                      "typeArguments": null,
                      "start": 336,
                      "end": 345
                    }
                  ],
                  "start": 327,
                  "end": 346
                },
                "start": 321,
                "end": 346
              },
              "start": 319,
              "end": 346
            },
            "accessibility": null,
            "static": false,
            "start": 304,
            "end": 347
          }
        ],
        "start": 216,
        "end": 349
      },
      "declare": false,
      "start": 196,
      "end": 349
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MaybeMergePrivateSuperSpec",
        "optional": false,
        "typeAnnotation": null,
        "start": 356,
        "end": 382
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
              "start": 383,
              "end": 384
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 383,
            "end": 384
          }
        ],
        "start": 382,
        "end": 385
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
            "start": 388,
            "end": 389
          },
          "typeArguments": null,
          "start": 388,
          "end": 389
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Record",
            "optional": false,
            "typeAnnotation": null,
            "start": 398,
            "end": 404
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 405,
                "end": 411
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ClassSpec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 413,
                  "end": 422
                },
                "typeArguments": null,
                "start": 413,
                "end": 422
              }
            ],
            "start": 404,
            "end": 423
          },
          "start": 398,
          "end": 423
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "MergePrivateSuperSpec",
            "optional": false,
            "typeAnnotation": null,
            "start": 428,
            "end": 449
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
                  "start": 450,
                  "end": 451
                },
                "typeArguments": null,
                "start": 450,
                "end": 451
              }
            ],
            "start": 449,
            "end": 452
          },
          "start": 428,
          "end": 452
        },
        "falseType": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 457,
          "end": 459
        },
        "start": 388,
        "end": 459
      },
      "declare": false,
      "start": 351,
      "end": 460
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MaybeMergePrivateSpecs",
        "optional": false,
        "typeAnnotation": null,
        "start": 467,
        "end": 489
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
              "start": 490,
              "end": 491
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ClassSpec",
                "optional": false,
                "typeAnnotation": null,
                "start": 500,
                "end": 509
              },
              "typeArguments": null,
              "start": 500,
              "end": 509
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 490,
            "end": 509
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 511,
              "end": 512
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 511,
            "end": 512
          }
        ],
        "start": 489,
        "end": 513
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 516,
            "end": 517
          },
          "typeArguments": null,
          "start": 516,
          "end": 517
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ClassSpec",
            "optional": false,
            "typeAnnotation": null,
            "start": 526,
            "end": 535
          },
          "typeArguments": null,
          "start": 526,
          "end": 535
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "MergePrivateSpecs",
            "optional": false,
            "typeAnnotation": null,
            "start": 540,
            "end": 557
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
                  "start": 558,
                  "end": 559
                },
                "typeArguments": null,
                "start": 558,
                "end": 559
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 561,
                  "end": 562
                },
                "typeArguments": null,
                "start": 561,
                "end": 562
              }
            ],
            "start": 557,
            "end": 563
          },
          "start": 540,
          "end": 563
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 568,
            "end": 569
          },
          "typeArguments": null,
          "start": 568,
          "end": 569
        },
        "start": 516,
        "end": 569
      },
      "declare": false,
      "start": 462,
      "end": 570
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MergePrivateSpecs",
        "optional": false,
        "typeAnnotation": null,
        "start": 577,
        "end": 594
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
              "start": 595,
              "end": 596
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ClassSpec",
                "optional": false,
                "typeAnnotation": null,
                "start": 605,
                "end": 614
              },
              "typeArguments": null,
              "start": 605,
              "end": 614
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 595,
            "end": 614
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 616,
              "end": 617
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ClassSpec",
                "optional": false,
                "typeAnnotation": null,
                "start": 626,
                "end": 635
              },
              "typeArguments": null,
              "start": 626,
              "end": 635
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 616,
            "end": 635
          }
        ],
        "start": 594,
        "end": 636
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
              "name": "public",
              "optional": false,
              "typeAnnotation": null,
              "start": 643,
              "end": 649
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
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
                        "start": 651,
                        "end": 652
                      },
                      "typeArguments": null,
                      "start": 651,
                      "end": 652
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "public",
                        "raw": "\"public\"",
                        "start": 653,
                        "end": 661
                      },
                      "start": 653,
                      "end": 661
                    },
                    "start": 651,
                    "end": 662
                  },
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 665,
                        "end": 666
                      },
                      "typeArguments": null,
                      "start": 665,
                      "end": 666
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "public",
                        "raw": "\"public\"",
                        "start": 667,
                        "end": 675
                      },
                      "start": 667,
                      "end": 675
                    },
                    "start": 665,
                    "end": 676
                  }
                ],
                "start": 651,
                "end": 676
              },
              "start": 649,
              "end": 676
            },
            "accessibility": null,
            "static": false,
            "start": 643,
            "end": 677
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "private",
              "optional": false,
              "typeAnnotation": null,
              "start": 680,
              "end": 687
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
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
                        "start": 689,
                        "end": 690
                      },
                      "typeArguments": null,
                      "start": 689,
                      "end": 690
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "private",
                        "raw": "\"private\"",
                        "start": 691,
                        "end": 700
                      },
                      "start": 691,
                      "end": 700
                    },
                    "start": 689,
                    "end": 701
                  },
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 704,
                        "end": 705
                      },
                      "typeArguments": null,
                      "start": 704,
                      "end": 705
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "private",
                        "raw": "\"private\"",
                        "start": 706,
                        "end": 715
                      },
                      "start": 706,
                      "end": 715
                    },
                    "start": 704,
                    "end": 716
                  }
                ],
                "start": 689,
                "end": 716
              },
              "start": 687,
              "end": 716
            },
            "accessibility": null,
            "static": false,
            "start": 680,
            "end": 717
          }
        ],
        "start": 639,
        "end": 719
      },
      "declare": false,
      "start": 572,
      "end": 720
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MergePrivateSuperSpec",
        "optional": false,
        "typeAnnotation": null,
        "start": 727,
        "end": 748
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
              "start": 749,
              "end": 750
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 759,
                "end": 765
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 766,
                    "end": 772
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ClassSpec",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 774,
                      "end": 783
                    },
                    "typeArguments": null,
                    "start": 774,
                    "end": 783
                  }
                ],
                "start": 765,
                "end": 784
              },
              "start": 759,
              "end": 784
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 749,
            "end": 784
          }
        ],
        "start": 748,
        "end": 785
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "UnionToIntersection",
          "optional": false,
          "typeAnnotation": null,
          "start": 790,
          "end": 809
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 824,
                  "end": 825
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
                      "start": 835,
                      "end": 836
                    },
                    "typeArguments": null,
                    "start": 835,
                    "end": 836
                  },
                  "start": 829,
                  "end": 836
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SimplifyPrivateSpec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 839,
                    "end": 858
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
                            "start": 859,
                            "end": 860
                          },
                          "typeArguments": null,
                          "start": 859,
                          "end": 860
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 861,
                            "end": 862
                          },
                          "typeArguments": null,
                          "start": 861,
                          "end": 862
                        },
                        "start": 859,
                        "end": 863
                      }
                    ],
                    "start": 858,
                    "end": 864
                  },
                  "start": 839,
                  "end": 864
                },
                "optional": false,
                "readonly": null,
                "start": 815,
                "end": 871
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
                    "start": 878,
                    "end": 879
                  },
                  "typeArguments": null,
                  "start": 878,
                  "end": 879
                },
                "start": 872,
                "end": 879
              },
              "start": 815,
              "end": 880
            }
          ],
          "start": 809,
          "end": 884
        },
        "start": 790,
        "end": 884
      },
      "declare": false,
      "start": 722,
      "end": 885
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SimplifyPrivateSpec",
          "optional": false,
          "typeAnnotation": null,
          "start": 899,
          "end": 918
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
                "start": 919,
                "end": 920
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ClassSpec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 929,
                  "end": 938
                },
                "typeArguments": null,
                "start": 929,
                "end": 938
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 919,
              "end": 938
            }
          ],
          "start": 918,
          "end": 939
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "MaybeMergePrivateSpecs",
            "optional": false,
            "typeAnnotation": null,
            "start": 942,
            "end": 964
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MaybeMergePrivateSpecs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 968,
                  "end": 990
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
                        "start": 991,
                        "end": 992
                      },
                      "typeArguments": null,
                      "start": 991,
                      "end": 992
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MaybeMergePrivateSuperSpec",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 994,
                        "end": 1020
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
                                "start": 1021,
                                "end": 1022
                              },
                              "typeArguments": null,
                              "start": 1021,
                              "end": 1022
                            },
                            "indexType": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "publicExtends",
                                "raw": "\"publicExtends\"",
                                "start": 1023,
                                "end": 1038
                              },
                              "start": 1023,
                              "end": 1038
                            },
                            "start": 1021,
                            "end": 1039
                          }
                        ],
                        "start": 1020,
                        "end": 1040
                      },
                      "start": 994,
                      "end": 1040
                    }
                  ],
                  "start": 990,
                  "end": 1041
                },
                "start": 968,
                "end": 1041
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MaybeMergePrivateSuperSpec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1045,
                  "end": 1071
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
                          "start": 1072,
                          "end": 1073
                        },
                        "typeArguments": null,
                        "start": 1072,
                        "end": 1073
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "privateExtends",
                          "raw": "\"privateExtends\"",
                          "start": 1074,
                          "end": 1090
                        },
                        "start": 1074,
                        "end": 1090
                      },
                      "start": 1072,
                      "end": 1091
                    }
                  ],
                  "start": 1071,
                  "end": 1092
                },
                "start": 1045,
                "end": 1092
              }
            ],
            "start": 964,
            "end": 1094
          },
          "start": 942,
          "end": 1094
        },
        "declare": false,
        "start": 894,
        "end": 1095
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 887,
      "end": 1095
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Converted",
        "optional": false,
        "typeAnnotation": null,
        "start": 1193,
        "end": 1202
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
              "start": 1203,
              "end": 1204
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1203,
            "end": 1204
          }
        ],
        "start": 1202,
        "end": 1205
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 1213,
          "end": 1214
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
              "start": 1224,
              "end": 1225
            },
            "typeArguments": null,
            "start": 1224,
            "end": 1225
          },
          "start": 1218,
          "end": 1225
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSNullKeyword",
            "start": 1228,
            "end": 1232
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
                "start": 1241,
                "end": 1242
              },
              "typeArguments": null,
              "start": 1241,
              "end": 1242
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1243,
                "end": 1244
              },
              "typeArguments": null,
              "start": 1243,
              "end": 1244
            },
            "start": 1241,
            "end": 1245
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
                "start": 1248,
                "end": 1249
              },
              "typeArguments": null,
              "start": 1248,
              "end": 1249
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1250,
                "end": 1251
              },
              "typeArguments": null,
              "start": 1250,
              "end": 1251
            },
            "start": 1248,
            "end": 1252
          },
          "falseType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1255,
                "end": 1256
              },
              "typeArguments": null,
              "start": 1255,
              "end": 1256
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1257,
                "end": 1258
              },
              "typeArguments": null,
              "start": 1257,
              "end": 1258
            },
            "start": 1255,
            "end": 1259
          },
          "start": 1228,
          "end": 1259
        },
        "optional": false,
        "readonly": null,
        "start": 1208,
        "end": 1262
      },
      "declare": false,
      "start": 1188,
      "end": 1263
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DefaultsDeep",
        "optional": false,
        "typeAnnotation": null,
        "start": 1270,
        "end": 1282
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
              "start": 1283,
              "end": 1284
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1283,
            "end": 1284
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1286,
              "end": 1287
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1296,
                "end": 1297
              },
              "typeArguments": null,
              "start": 1296,
              "end": 1297
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1286,
            "end": 1297
          }
        ],
        "start": 1282,
        "end": 1298
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 1306,
          "end": 1307
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
              "start": 1317,
              "end": 1318
            },
            "typeArguments": null,
            "start": 1317,
            "end": 1318
          },
          "start": 1311,
          "end": 1318
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
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1323,
                "end": 1324
              },
              "typeArguments": null,
              "start": 1323,
              "end": 1324
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1325,
                "end": 1326
              },
              "typeArguments": null,
              "start": 1325,
              "end": 1326
            },
            "start": 1323,
            "end": 1327
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
                "start": 1336,
                "end": 1337
              },
              "typeArguments": null,
              "start": 1336,
              "end": 1337
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1338,
                "end": 1339
              },
              "typeArguments": null,
              "start": 1338,
              "end": 1339
            },
            "start": 1336,
            "end": 1340
          },
          "trueType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSNullKeyword",
              "start": 1347,
              "end": 1351
            },
            "extendsType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1360,
                  "end": 1361
                },
                "typeArguments": null,
                "start": 1360,
                "end": 1361
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1362,
                  "end": 1363
                },
                "typeArguments": null,
                "start": 1362,
                "end": 1363
              },
              "start": 1360,
              "end": 1364
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Converted",
                "optional": false,
                "typeAnnotation": null,
                "start": 1373,
                "end": 1382
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DefaultsDeep",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1383,
                      "end": 1395
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
                              "start": 1396,
                              "end": 1397
                            },
                            "typeArguments": null,
                            "start": 1396,
                            "end": 1397
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1398,
                              "end": 1399
                            },
                            "typeArguments": null,
                            "start": 1398,
                            "end": 1399
                          },
                          "start": 1396,
                          "end": 1400
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "NonNullable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1402,
                            "end": 1413
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
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1414,
                                    "end": 1415
                                  },
                                  "typeArguments": null,
                                  "start": 1414,
                                  "end": 1415
                                },
                                "indexType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "P",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1416,
                                    "end": 1417
                                  },
                                  "typeArguments": null,
                                  "start": 1416,
                                  "end": 1417
                                },
                                "start": 1414,
                                "end": 1418
                              }
                            ],
                            "start": 1413,
                            "end": 1419
                          },
                          "start": 1402,
                          "end": 1419
                        }
                      ],
                      "start": 1395,
                      "end": 1420
                    },
                    "start": 1383,
                    "end": 1420
                  }
                ],
                "start": 1382,
                "end": 1421
              },
              "start": 1373,
              "end": 1421
            },
            "falseType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1430,
                  "end": 1431
                },
                "typeArguments": null,
                "start": 1430,
                "end": 1431
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1432,
                  "end": 1433
                },
                "typeArguments": null,
                "start": 1432,
                "end": 1433
              },
              "start": 1430,
              "end": 1434
            },
            "start": 1347,
            "end": 1434
          },
          "falseType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1441,
                "end": 1442
              },
              "typeArguments": null,
              "start": 1441,
              "end": 1442
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1443,
                "end": 1444
              },
              "typeArguments": null,
              "start": 1443,
              "end": 1444
            },
            "start": 1441,
            "end": 1445
          },
          "start": 1323,
          "end": 1445
        },
        "optional": "-",
        "readonly": null,
        "start": 1301,
        "end": 1448
      },
      "declare": false,
      "start": 1265,
      "end": 1449
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_Array",
        "optional": false,
        "typeAnnotation": null,
        "start": 1461,
        "end": 1467
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
              "start": 1468,
              "end": 1469
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1468,
            "end": 1469
          }
        ],
        "start": 1467,
        "end": 1470
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
              "name": "find",
              "optional": false,
              "typeAnnotation": null,
              "start": 1475,
              "end": 1479
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
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1480,
                    "end": 1481
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1490,
                      "end": 1491
                    },
                    "typeArguments": null,
                    "start": 1490,
                    "end": 1491
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1480,
                  "end": 1491
                }
              ],
              "start": 1479,
              "end": 1492
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "predicate",
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
                        "name": "value",
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
                              "start": 1512,
                              "end": 1513
                            },
                            "typeArguments": null,
                            "start": 1512,
                            "end": 1513
                          },
                          "start": 1510,
                          "end": 1513
                        },
                        "start": 1505,
                        "end": 1513
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1518,
                        "end": 1525
                      },
                      "start": 1515,
                      "end": 1525
                    },
                    "start": 1504,
                    "end": 1525
                  },
                  "start": 1502,
                  "end": 1525
                },
                "start": 1493,
                "end": 1525
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1528,
                "end": 1532
              },
              "start": 1526,
              "end": 1532
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1475,
            "end": 1533
          }
        ],
        "start": 1471,
        "end": 1535
      },
      "declare": false,
      "start": 1451,
      "end": 1535
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
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1546,
                  "end": 1552
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "DefaultsDeep",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1553,
                        "end": 1565
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeLiteral",
                            "members": [],
                            "start": 1566,
                            "end": 1568
                          },
                          {
                            "type": "TSTypeLiteral",
                            "members": [],
                            "start": 1570,
                            "end": 1572
                          }
                        ],
                        "start": 1565,
                        "end": 1573
                      },
                      "start": 1553,
                      "end": 1573
                    }
                  ],
                  "start": 1552,
                  "end": 1574
                },
                "start": 1546,
                "end": 1574
              },
              "start": 1544,
              "end": 1574
            },
            "start": 1543,
            "end": 1574
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 1577,
            "end": 1579
          },
          "definite": false,
          "start": 1543,
          "end": 1579
        }
      ],
      "declare": false,
      "start": 1537,
      "end": 1580
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 1582,
            "end": 1583
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "find",
            "optional": false,
            "typeAnnotation": null,
            "start": 1584,
            "end": 1588
          },
          "optional": false,
          "computed": false,
          "start": 1582,
          "end": 1588
        },
        "typeArguments": null,
        "arguments": [
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
                "start": 1590,
                "end": 1591
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1596,
              "end": 1600
            },
            "id": null,
            "generator": false,
            "start": 1589,
            "end": 1600
          }
        ],
        "optional": false,
        "start": 1582,
        "end": 1601
      },
      "directive": null,
      "start": 1582,
      "end": 1602
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 68,
  "end": 1602
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 68,
    "end": 72,
    "range": [
      68,
      72
    ]
  },
  {
    "type": "Identifier",
    "value": "UnionToIntersection",
    "start": 73,
    "end": 92,
    "range": [
      73,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 104,
    "end": 111,
    "range": [
      104,
      111
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 112,
    "end": 115,
    "range": [
      112,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 125,
    "end": 127,
    "range": [
      125,
      127
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 128,
    "end": 135,
    "range": [
      128,
      135
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 138,
    "end": 143,
    "range": [
      138,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 146,
    "end": 153,
    "range": [
      146,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 158,
    "end": 163,
    "range": [
      158,
      163
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 167,
    "end": 169,
    "range": [
      167,
      169
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 170,
    "end": 177,
    "range": [
      170,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 188,
    "end": 193,
    "range": [
      188,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 196,
    "end": 205,
    "range": [
      196,
      205
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassSpec",
    "start": 206,
    "end": 215,
    "range": [
      206,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Identifier",
    "value": "public",
    "start": 220,
    "end": 226,
    "range": [
      220,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 229,
    "end": 235,
    "range": [
      229,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Identifier",
    "value": "private",
    "start": 239,
    "end": 246,
    "range": [
      239,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 249,
    "end": 255,
    "range": [
      249,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Identifier",
    "value": "publicExtends",
    "start": 259,
    "end": 272,
    "range": [
      259,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 275,
    "end": 281,
    "range": [
      275,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 282,
    "end": 288,
    "range": [
      282,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassSpec",
    "start": 290,
    "end": 299,
    "range": [
      290,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Identifier",
    "value": "privateExtends",
    "start": 304,
    "end": 318,
    "range": [
      304,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 321,
    "end": 327,
    "range": [
      321,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 328,
    "end": 334,
    "range": [
      328,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassSpec",
    "start": 336,
    "end": 345,
    "range": [
      336,
      345
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 345,
    "end": 346,
    "range": [
      345,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 351,
    "end": 355,
    "range": [
      351,
      355
    ]
  },
  {
    "type": "Identifier",
    "value": "MaybeMergePrivateSuperSpec",
    "start": 356,
    "end": 382,
    "range": [
      356,
      382
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
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
    "value": ">",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 390,
    "end": 397,
    "range": [
      390,
      397
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 398,
    "end": 404,
    "range": [
      398,
      404
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 405,
    "end": 411,
    "range": [
      405,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassSpec",
    "start": 413,
    "end": 422,
    "range": [
      413,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 426,
    "end": 427,
    "range": [
      426,
      427
    ]
  },
  {
    "type": "Identifier",
    "value": "MergePrivateSuperSpec",
    "start": 428,
    "end": 449,
    "range": [
      428,
      449
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 449,
    "end": 450,
    "range": [
      449,
      450
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 455,
    "end": 456,
    "range": [
      455,
      456
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 457,
    "end": 458,
    "range": [
      457,
      458
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 462,
    "end": 466,
    "range": [
      462,
      466
    ]
  },
  {
    "type": "Identifier",
    "value": "MaybeMergePrivateSpecs",
    "start": 467,
    "end": 489,
    "range": [
      467,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 492,
    "end": 499,
    "range": [
      492,
      499
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassSpec",
    "start": 500,
    "end": 509,
    "range": [
      500,
      509
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "value": ">",
    "start": 512,
    "end": 513,
    "range": [
      512,
      513
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 514,
    "end": 515,
    "range": [
      514,
      515
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 518,
    "end": 525,
    "range": [
      518,
      525
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassSpec",
    "start": 526,
    "end": 535,
    "range": [
      526,
      535
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Identifier",
    "value": "MergePrivateSpecs",
    "start": 540,
    "end": 557,
    "range": [
      540,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 557,
    "end": 558,
    "range": [
      557,
      558
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 561,
    "end": 562,
    "range": [
      561,
      562
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 568,
    "end": 569,
    "range": [
      568,
      569
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 569,
    "end": 570,
    "range": [
      569,
      570
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 572,
    "end": 576,
    "range": [
      572,
      576
    ]
  },
  {
    "type": "Identifier",
    "value": "MergePrivateSpecs",
    "start": 577,
    "end": 594,
    "range": [
      577,
      594
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 595,
    "end": 596,
    "range": [
      595,
      596
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 597,
    "end": 604,
    "range": [
      597,
      604
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassSpec",
    "start": 605,
    "end": 614,
    "range": [
      605,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
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
    "value": "ClassSpec",
    "start": 626,
    "end": 635,
    "range": [
      626,
      635
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 637,
    "end": 638,
    "range": [
      637,
      638
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Identifier",
    "value": "public",
    "start": 643,
    "end": 649,
    "range": [
      643,
      649
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 649,
    "end": 650,
    "range": [
      649,
      650
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "String",
    "value": "\"public\"",
    "start": 653,
    "end": 661,
    "range": [
      653,
      661
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 663,
    "end": 664,
    "range": [
      663,
      664
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 665,
    "end": 666,
    "range": [
      665,
      666
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 666,
    "end": 667,
    "range": [
      666,
      667
    ]
  },
  {
    "type": "String",
    "value": "\"public\"",
    "start": 667,
    "end": 675,
    "range": [
      667,
      675
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Identifier",
    "value": "private",
    "start": 680,
    "end": 687,
    "range": [
      680,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 687,
    "end": 688,
    "range": [
      687,
      688
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "String",
    "value": "\"private\"",
    "start": 691,
    "end": 700,
    "range": [
      691,
      700
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 700,
    "end": 701,
    "range": [
      700,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 704,
    "end": 705,
    "range": [
      704,
      705
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "String",
    "value": "\"private\"",
    "start": 706,
    "end": 715,
    "range": [
      706,
      715
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 715,
    "end": 716,
    "range": [
      715,
      716
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 716,
    "end": 717,
    "range": [
      716,
      717
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 718,
    "end": 719,
    "range": [
      718,
      719
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 722,
    "end": 726,
    "range": [
      722,
      726
    ]
  },
  {
    "type": "Identifier",
    "value": "MergePrivateSuperSpec",
    "start": 727,
    "end": 748,
    "range": [
      727,
      748
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 748,
    "end": 749,
    "range": [
      748,
      749
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 749,
    "end": 750,
    "range": [
      749,
      750
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 751,
    "end": 758,
    "range": [
      751,
      758
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 759,
    "end": 765,
    "range": [
      759,
      765
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 765,
    "end": 766,
    "range": [
      765,
      766
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 766,
    "end": 772,
    "range": [
      766,
      772
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 772,
    "end": 773,
    "range": [
      772,
      773
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassSpec",
    "start": 774,
    "end": 783,
    "range": [
      774,
      783
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 783,
    "end": 784,
    "range": [
      783,
      784
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 784,
    "end": 785,
    "range": [
      784,
      785
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 786,
    "end": 787,
    "range": [
      786,
      787
    ]
  },
  {
    "type": "Identifier",
    "value": "UnionToIntersection",
    "start": 790,
    "end": 809,
    "range": [
      790,
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
    "type": "Punctuator",
    "value": "{",
    "start": 815,
    "end": 816,
    "range": [
      815,
      816
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 823,
    "end": 824,
    "range": [
      823,
      824
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 826,
    "end": 828,
    "range": [
      826,
      828
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 829,
    "end": 834,
    "range": [
      829,
      834
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 835,
    "end": 836,
    "range": [
      835,
      836
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 836,
    "end": 837,
    "range": [
      836,
      837
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 837,
    "end": 838,
    "range": [
      837,
      838
    ]
  },
  {
    "type": "Identifier",
    "value": "SimplifyPrivateSpec",
    "start": 839,
    "end": 858,
    "range": [
      839,
      858
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 858,
    "end": 859,
    "range": [
      858,
      859
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 859,
    "end": 860,
    "range": [
      859,
      860
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 860,
    "end": 861,
    "range": [
      860,
      861
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 861,
    "end": 862,
    "range": [
      861,
      862
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 862,
    "end": 863,
    "range": [
      862,
      863
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 863,
    "end": 864,
    "range": [
      863,
      864
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 864,
    "end": 865,
    "range": [
      864,
      865
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 870,
    "end": 871,
    "range": [
      870,
      871
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 871,
    "end": 872,
    "range": [
      871,
      872
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 872,
    "end": 877,
    "range": [
      872,
      877
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 878,
    "end": 879,
    "range": [
      878,
      879
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 879,
    "end": 880,
    "range": [
      879,
      880
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 883,
    "end": 884,
    "range": [
      883,
      884
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 884,
    "end": 885,
    "range": [
      884,
      885
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 887,
    "end": 893,
    "range": [
      887,
      893
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 894,
    "end": 898,
    "range": [
      894,
      898
    ]
  },
  {
    "type": "Identifier",
    "value": "SimplifyPrivateSpec",
    "start": 899,
    "end": 918,
    "range": [
      899,
      918
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 918,
    "end": 919,
    "range": [
      918,
      919
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 919,
    "end": 920,
    "range": [
      919,
      920
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 921,
    "end": 928,
    "range": [
      921,
      928
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassSpec",
    "start": 929,
    "end": 938,
    "range": [
      929,
      938
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 938,
    "end": 939,
    "range": [
      938,
      939
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 940,
    "end": 941,
    "range": [
      940,
      941
    ]
  },
  {
    "type": "Identifier",
    "value": "MaybeMergePrivateSpecs",
    "start": 942,
    "end": 964,
    "range": [
      942,
      964
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 964,
    "end": 965,
    "range": [
      964,
      965
    ]
  },
  {
    "type": "Identifier",
    "value": "MaybeMergePrivateSpecs",
    "start": 968,
    "end": 990,
    "range": [
      968,
      990
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 990,
    "end": 991,
    "range": [
      990,
      991
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 991,
    "end": 992,
    "range": [
      991,
      992
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 992,
    "end": 993,
    "range": [
      992,
      993
    ]
  },
  {
    "type": "Identifier",
    "value": "MaybeMergePrivateSuperSpec",
    "start": 994,
    "end": 1020,
    "range": [
      994,
      1020
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1020,
    "end": 1021,
    "range": [
      1020,
      1021
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1021,
    "end": 1022,
    "range": [
      1021,
      1022
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1022,
    "end": 1023,
    "range": [
      1022,
      1023
    ]
  },
  {
    "type": "String",
    "value": "\"publicExtends\"",
    "start": 1023,
    "end": 1038,
    "range": [
      1023,
      1038
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1038,
    "end": 1039,
    "range": [
      1038,
      1039
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1039,
    "end": 1040,
    "range": [
      1039,
      1040
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1040,
    "end": 1041,
    "range": [
      1040,
      1041
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1041,
    "end": 1042,
    "range": [
      1041,
      1042
    ]
  },
  {
    "type": "Identifier",
    "value": "MaybeMergePrivateSuperSpec",
    "start": 1045,
    "end": 1071,
    "range": [
      1045,
      1071
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1071,
    "end": 1072,
    "range": [
      1071,
      1072
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1072,
    "end": 1073,
    "range": [
      1072,
      1073
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1073,
    "end": 1074,
    "range": [
      1073,
      1074
    ]
  },
  {
    "type": "String",
    "value": "\"privateExtends\"",
    "start": 1074,
    "end": 1090,
    "range": [
      1074,
      1090
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1090,
    "end": 1091,
    "range": [
      1090,
      1091
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1091,
    "end": 1092,
    "range": [
      1091,
      1092
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1093,
    "end": 1094,
    "range": [
      1093,
      1094
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1094,
    "end": 1095,
    "range": [
      1094,
      1095
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1188,
    "end": 1192,
    "range": [
      1188,
      1192
    ]
  },
  {
    "type": "Identifier",
    "value": "Converted",
    "start": 1193,
    "end": 1202,
    "range": [
      1193,
      1202
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1202,
    "end": 1203,
    "range": [
      1202,
      1203
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1203,
    "end": 1204,
    "range": [
      1203,
      1204
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1204,
    "end": 1205,
    "range": [
      1204,
      1205
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1206,
    "end": 1207,
    "range": [
      1206,
      1207
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1208,
    "end": 1209,
    "range": [
      1208,
      1209
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1212,
    "end": 1213,
    "range": [
      1212,
      1213
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1213,
    "end": 1214,
    "range": [
      1213,
      1214
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1215,
    "end": 1217,
    "range": [
      1215,
      1217
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1218,
    "end": 1223,
    "range": [
      1218,
      1223
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1224,
    "end": 1225,
    "range": [
      1224,
      1225
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1225,
    "end": 1226,
    "range": [
      1225,
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
    "type": "Null",
    "value": "null",
    "start": 1228,
    "end": 1232,
    "range": [
      1228,
      1232
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1233,
    "end": 1240,
    "range": [
      1233,
      1240
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1241,
    "end": 1242,
    "range": [
      1241,
      1242
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1242,
    "end": 1243,
    "range": [
      1242,
      1243
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1243,
    "end": 1244,
    "range": [
      1243,
      1244
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1244,
    "end": 1245,
    "range": [
      1244,
      1245
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1246,
    "end": 1247,
    "range": [
      1246,
      1247
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
    "value": "[",
    "start": 1249,
    "end": 1250,
    "range": [
      1249,
      1250
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1250,
    "end": 1251,
    "range": [
      1250,
      1251
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1251,
    "end": 1252,
    "range": [
      1251,
      1252
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1253,
    "end": 1254,
    "range": [
      1253,
      1254
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1255,
    "end": 1256,
    "range": [
      1255,
      1256
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1256,
    "end": 1257,
    "range": [
      1256,
      1257
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1257,
    "end": 1258,
    "range": [
      1257,
      1258
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1258,
    "end": 1259,
    "range": [
      1258,
      1259
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1259,
    "end": 1260,
    "range": [
      1259,
      1260
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1261,
    "end": 1262,
    "range": [
      1261,
      1262
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1262,
    "end": 1263,
    "range": [
      1262,
      1263
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1265,
    "end": 1269,
    "range": [
      1265,
      1269
    ]
  },
  {
    "type": "Identifier",
    "value": "DefaultsDeep",
    "start": 1270,
    "end": 1282,
    "range": [
      1270,
      1282
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1282,
    "end": 1283,
    "range": [
      1282,
      1283
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1283,
    "end": 1284,
    "range": [
      1283,
      1284
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "value": "T",
    "start": 1296,
    "end": 1297,
    "range": [
      1296,
      1297
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1297,
    "end": 1298,
    "range": [
      1297,
      1298
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1299,
    "end": 1300,
    "range": [
      1299,
      1300
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1301,
    "end": 1302,
    "range": [
      1301,
      1302
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1305,
    "end": 1306,
    "range": [
      1305,
      1306
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1306,
    "end": 1307,
    "range": [
      1306,
      1307
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1308,
    "end": 1310,
    "range": [
      1308,
      1310
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1311,
    "end": 1316,
    "range": [
      1311,
      1316
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1317,
    "end": 1318,
    "range": [
      1317,
      1318
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1318,
    "end": 1319,
    "range": [
      1318,
      1319
    ]
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1319,
    "end": 1320,
    "range": [
      1319,
      1320
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1320,
    "end": 1321,
    "range": [
      1320,
      1321
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1321,
    "end": 1322,
    "range": [
      1321,
      1322
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1323,
    "end": 1324,
    "range": [
      1323,
      1324
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1324,
    "end": 1325,
    "range": [
      1324,
      1325
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1325,
    "end": 1326,
    "range": [
      1325,
      1326
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1326,
    "end": 1327,
    "range": [
      1326,
      1327
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1328,
    "end": 1335,
    "range": [
      1328,
      1335
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1336,
    "end": 1337,
    "range": [
      1336,
      1337
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1337,
    "end": 1338,
    "range": [
      1337,
      1338
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1338,
    "end": 1339,
    "range": [
      1338,
      1339
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1339,
    "end": 1340,
    "range": [
      1339,
      1340
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1345,
    "end": 1346,
    "range": [
      1345,
      1346
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1347,
    "end": 1351,
    "range": [
      1347,
      1351
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1352,
    "end": 1359,
    "range": [
      1352,
      1359
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1360,
    "end": 1361,
    "range": [
      1360,
      1361
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1361,
    "end": 1362,
    "range": [
      1361,
      1362
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1362,
    "end": 1363,
    "range": [
      1362,
      1363
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1363,
    "end": 1364,
    "range": [
      1363,
      1364
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1371,
    "end": 1372,
    "range": [
      1371,
      1372
    ]
  },
  {
    "type": "Identifier",
    "value": "Converted",
    "start": 1373,
    "end": 1382,
    "range": [
      1373,
      1382
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1382,
    "end": 1383,
    "range": [
      1382,
      1383
    ]
  },
  {
    "type": "Identifier",
    "value": "DefaultsDeep",
    "start": 1383,
    "end": 1395,
    "range": [
      1383,
      1395
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1395,
    "end": 1396,
    "range": [
      1395,
      1396
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1396,
    "end": 1397,
    "range": [
      1396,
      1397
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1397,
    "end": 1398,
    "range": [
      1397,
      1398
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1398,
    "end": 1399,
    "range": [
      1398,
      1399
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1399,
    "end": 1400,
    "range": [
      1399,
      1400
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1400,
    "end": 1401,
    "range": [
      1400,
      1401
    ]
  },
  {
    "type": "Identifier",
    "value": "NonNullable",
    "start": 1402,
    "end": 1413,
    "range": [
      1402,
      1413
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1413,
    "end": 1414,
    "range": [
      1413,
      1414
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1414,
    "end": 1415,
    "range": [
      1414,
      1415
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1415,
    "end": 1416,
    "range": [
      1415,
      1416
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1416,
    "end": 1417,
    "range": [
      1416,
      1417
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1417,
    "end": 1418,
    "range": [
      1417,
      1418
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1418,
    "end": 1419,
    "range": [
      1418,
      1419
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1419,
    "end": 1420,
    "range": [
      1419,
      1420
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1420,
    "end": 1421,
    "range": [
      1420,
      1421
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1428,
    "end": 1429,
    "range": [
      1428,
      1429
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1430,
    "end": 1431,
    "range": [
      1430,
      1431
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1431,
    "end": 1432,
    "range": [
      1431,
      1432
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1432,
    "end": 1433,
    "range": [
      1432,
      1433
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1433,
    "end": 1434,
    "range": [
      1433,
      1434
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1439,
    "end": 1440,
    "range": [
      1439,
      1440
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1441,
    "end": 1442,
    "range": [
      1441,
      1442
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1442,
    "end": 1443,
    "range": [
      1442,
      1443
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1443,
    "end": 1444,
    "range": [
      1443,
      1444
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1444,
    "end": 1445,
    "range": [
      1444,
      1445
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1445,
    "end": 1446,
    "range": [
      1445,
      1446
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1447,
    "end": 1448,
    "range": [
      1447,
      1448
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1448,
    "end": 1449,
    "range": [
      1448,
      1449
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1451,
    "end": 1460,
    "range": [
      1451,
      1460
    ]
  },
  {
    "type": "Identifier",
    "value": "_Array",
    "start": 1461,
    "end": 1467,
    "range": [
      1461,
      1467
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1467,
    "end": 1468,
    "range": [
      1467,
      1468
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1468,
    "end": 1469,
    "range": [
      1468,
      1469
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1469,
    "end": 1470,
    "range": [
      1469,
      1470
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1471,
    "end": 1472,
    "range": [
      1471,
      1472
    ]
  },
  {
    "type": "Identifier",
    "value": "find",
    "start": 1475,
    "end": 1479,
    "range": [
      1475,
      1479
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1479,
    "end": 1480,
    "range": [
      1479,
      1480
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1480,
    "end": 1481,
    "range": [
      1480,
      1481
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1482,
    "end": 1489,
    "range": [
      1482,
      1489
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1490,
    "end": 1491,
    "range": [
      1490,
      1491
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1491,
    "end": 1492,
    "range": [
      1491,
      1492
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1492,
    "end": 1493,
    "range": [
      1492,
      1493
    ]
  },
  {
    "type": "Identifier",
    "value": "predicate",
    "start": 1493,
    "end": 1502,
    "range": [
      1493,
      1502
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1502,
    "end": 1503,
    "range": [
      1502,
      1503
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1504,
    "end": 1505,
    "range": [
      1504,
      1505
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1505,
    "end": 1510,
    "range": [
      1505,
      1510
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1510,
    "end": 1511,
    "range": [
      1510,
      1511
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1512,
    "end": 1513,
    "range": [
      1512,
      1513
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1513,
    "end": 1514,
    "range": [
      1513,
      1514
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1515,
    "end": 1517,
    "range": [
      1515,
      1517
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1518,
    "end": 1525,
    "range": [
      1518,
      1525
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1525,
    "end": 1526,
    "range": [
      1525,
      1526
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1526,
    "end": 1527,
    "range": [
      1526,
      1527
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1528,
    "end": 1532,
    "range": [
      1528,
      1532
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1532,
    "end": 1533,
    "range": [
      1532,
      1533
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1534,
    "end": 1535,
    "range": [
      1534,
      1535
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1537,
    "end": 1542,
    "range": [
      1537,
      1542
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1543,
    "end": 1544,
    "range": [
      1543,
      1544
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1544,
    "end": 1545,
    "range": [
      1544,
      1545
    ]
  },
  {
    "type": "Identifier",
    "value": "_Array",
    "start": 1546,
    "end": 1552,
    "range": [
      1546,
      1552
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1552,
    "end": 1553,
    "range": [
      1552,
      1553
    ]
  },
  {
    "type": "Identifier",
    "value": "DefaultsDeep",
    "start": 1553,
    "end": 1565,
    "range": [
      1553,
      1565
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1565,
    "end": 1566,
    "range": [
      1565,
      1566
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1566,
    "end": 1567,
    "range": [
      1566,
      1567
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1567,
    "end": 1568,
    "range": [
      1567,
      1568
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1568,
    "end": 1569,
    "range": [
      1568,
      1569
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1570,
    "end": 1571,
    "range": [
      1570,
      1571
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1571,
    "end": 1572,
    "range": [
      1571,
      1572
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1572,
    "end": 1573,
    "range": [
      1572,
      1573
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1573,
    "end": 1574,
    "range": [
      1573,
      1574
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1575,
    "end": 1576,
    "range": [
      1575,
      1576
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1577,
    "end": 1578,
    "range": [
      1577,
      1578
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1578,
    "end": 1579,
    "range": [
      1578,
      1579
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1579,
    "end": 1580,
    "range": [
      1579,
      1580
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1582,
    "end": 1583,
    "range": [
      1582,
      1583
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1583,
    "end": 1584,
    "range": [
      1583,
      1584
    ]
  },
  {
    "type": "Identifier",
    "value": "find",
    "start": 1584,
    "end": 1588,
    "range": [
      1584,
      1588
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1588,
    "end": 1589,
    "range": [
      1588,
      1589
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1589,
    "end": 1590,
    "range": [
      1589,
      1590
    ]
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 1590,
    "end": 1591,
    "range": [
      1590,
      1591
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1591,
    "end": 1592,
    "range": [
      1591,
      1592
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1593,
    "end": 1595,
    "range": [
      1593,
      1595
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1596,
    "end": 1600,
    "range": [
      1596,
      1600
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1600,
    "end": 1601,
    "range": [
      1600,
      1601
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1601,
    "end": 1602,
    "range": [
      1601,
      1602
    ]
  }
]
```
