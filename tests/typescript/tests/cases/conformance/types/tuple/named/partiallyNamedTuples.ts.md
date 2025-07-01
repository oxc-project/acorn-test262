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
        "name": "NamedAndAnonymous",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 22
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSNamedTupleMember",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 27
            },
            "elementType": {
              "type": "TSStringKeyword",
              "start": 29,
              "end": 35
            },
            "optional": false,
            "start": 26,
            "end": 35
          },
          {
            "type": "TSNumberKeyword",
            "start": 37,
            "end": 43
          }
        ],
        "start": 25,
        "end": 44
      },
      "declare": false,
      "start": 0,
      "end": 45
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fa1",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 59
      },
      "generator": false,
      "async": false,
      "declare": false,
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
            "start": 63,
            "end": 67
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NamedAndAnonymous",
                "optional": false,
                "typeAnnotation": null,
                "start": 69,
                "end": 86
              },
              "typeArguments": null,
              "start": 69,
              "end": 86
            },
            "start": 67,
            "end": 86
          },
          "value": null,
          "start": 60,
          "end": 86
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 88,
        "end": 90
      },
      "expression": false,
      "start": 47,
      "end": 90
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fa2",
        "optional": false,
        "typeAnnotation": null,
        "start": 100,
        "end": 103
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NamedAndAnonymous",
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 124
              },
              "typeArguments": null,
              "start": 107,
              "end": 124
            },
            "start": 105,
            "end": 124
          },
          "start": 104,
          "end": 124
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 129,
            "end": 133
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NamedAndAnonymous",
                "optional": false,
                "typeAnnotation": null,
                "start": 135,
                "end": 152
              },
              "typeArguments": null,
              "start": 135,
              "end": 152
            },
            "start": 133,
            "end": 152
          },
          "value": null,
          "start": 126,
          "end": 152
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 154,
        "end": 156
      },
      "expression": false,
      "start": 91,
      "end": 156
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NamedAnonymousMixed",
        "optional": false,
        "typeAnnotation": null,
        "start": 163,
        "end": 182
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSNamedTupleMember",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 186,
              "end": 187
            },
            "elementType": {
              "type": "TSStringKeyword",
              "start": 189,
              "end": 195
            },
            "optional": false,
            "start": 186,
            "end": 195
          },
          {
            "type": "TSNumberKeyword",
            "start": 197,
            "end": 203
          },
          {
            "type": "TSNamedTupleMember",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 206
            },
            "elementType": {
              "type": "TSNumberKeyword",
              "start": 208,
              "end": 214
            },
            "optional": false,
            "start": 205,
            "end": 214
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "NamedAndAnonymous",
              "optional": false,
              "typeAnnotation": null,
              "start": 216,
              "end": 233
            },
            "typeArguments": null,
            "start": 216,
            "end": 233
          }
        ],
        "start": 185,
        "end": 234
      },
      "declare": false,
      "start": 158,
      "end": 235
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fb1",
        "optional": false,
        "typeAnnotation": null,
        "start": 246,
        "end": 249
      },
      "generator": false,
      "async": false,
      "declare": false,
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
            "start": 253,
            "end": 257
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NamedAnonymousMixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 259,
                "end": 278
              },
              "typeArguments": null,
              "start": 259,
              "end": 278
            },
            "start": 257,
            "end": 278
          },
          "value": null,
          "start": 250,
          "end": 278
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 280,
        "end": 282
      },
      "expression": false,
      "start": 237,
      "end": 282
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fb2",
        "optional": false,
        "typeAnnotation": null,
        "start": 292,
        "end": 295
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NamedAnonymousMixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 299,
                "end": 318
              },
              "typeArguments": null,
              "start": 299,
              "end": 318
            },
            "start": 297,
            "end": 318
          },
          "start": 296,
          "end": 318
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 323,
            "end": 327
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NamedAnonymousMixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 329,
                "end": 348
              },
              "typeArguments": null,
              "start": 329,
              "end": 348
            },
            "start": 327,
            "end": 348
          },
          "value": null,
          "start": 320,
          "end": 348
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 350,
        "end": 352
      },
      "expression": false,
      "start": 283,
      "end": 352
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fb3",
        "optional": false,
        "typeAnnotation": null,
        "start": 362,
        "end": 365
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NamedAnonymousMixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 369,
                "end": 388
              },
              "typeArguments": null,
              "start": 369,
              "end": 388
            },
            "start": 367,
            "end": 388
          },
          "start": 366,
          "end": 388
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 393,
            "end": 397
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NamedAnonymousMixed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 399,
                  "end": 418
                },
                "typeArguments": null,
                "start": 399,
                "end": 418
              },
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 419,
                  "end": 420
                },
                "start": 419,
                "end": 420
              },
              "start": 399,
              "end": 421
            },
            "start": 397,
            "end": 421
          },
          "value": null,
          "start": 390,
          "end": 421
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 423,
        "end": 425
      },
      "expression": false,
      "start": 353,
      "end": 425
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ToAnonymousTuple",
        "optional": false,
        "typeAnnotation": null,
        "start": 432,
        "end": 448
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
              "start": 449,
              "end": 450
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 459,
                "end": 466
              },
              "start": 459,
              "end": 468
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 449,
            "end": 468
          }
        ],
        "start": 448,
        "end": 469
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 477,
          "end": 478
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
              "start": 488,
              "end": 489
            },
            "typeArguments": null,
            "start": 488,
            "end": 489
          },
          "start": 482,
          "end": 489
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 493,
                "end": 494
              },
              "typeArguments": null,
              "start": 493,
              "end": 494
            },
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
                  "start": 496,
                  "end": 497
                },
                "typeArguments": null,
                "start": 496,
                "end": 497
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 498,
                  "end": 499
                },
                "typeArguments": null,
                "start": 498,
                "end": 499
              },
              "start": 496,
              "end": 500
            },
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
                  "start": 508,
                  "end": 509
                },
                "typeArguments": null,
                "start": 508,
                "end": 509
              },
              "start": 502,
              "end": 509
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 511,
                "end": 512
              },
              "typeArguments": null,
              "start": 511,
              "end": 512
            }
          ],
          "start": 492,
          "end": 513
        },
        "optional": false,
        "readonly": null,
        "start": 472,
        "end": 516
      },
      "declare": false,
      "start": 427,
      "end": 517
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnonymousToAnonymous",
        "optional": false,
        "typeAnnotation": null,
        "start": 524,
        "end": 544
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ToAnonymousTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 547,
          "end": 563
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSBooleanKeyword",
                  "start": 565,
                  "end": 572
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 574,
                  "end": 580
                }
              ],
              "start": 564,
              "end": 581
            }
          ],
          "start": 563,
          "end": 582
        },
        "start": 547,
        "end": 582
      },
      "declare": false,
      "start": 519,
      "end": 583
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MixedToAnonymous",
        "optional": false,
        "typeAnnotation": null,
        "start": 589,
        "end": 605
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ToAnonymousTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 608,
          "end": 624
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSBooleanKeyword",
                  "start": 626,
                  "end": 633
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "second",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 635,
                    "end": 641
                  },
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 643,
                    "end": 649
                  },
                  "optional": false,
                  "start": 635,
                  "end": 649
                }
              ],
              "start": 625,
              "end": 650
            }
          ],
          "start": 624,
          "end": 651
        },
        "start": 608,
        "end": 651
      },
      "declare": false,
      "start": 584,
      "end": 652
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NamedToAnonymous",
        "optional": false,
        "typeAnnotation": null,
        "start": 658,
        "end": 674
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ToAnonymousTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 677,
          "end": 693
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "first",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 695,
                    "end": 700
                  },
                  "elementType": {
                    "type": "TSBooleanKeyword",
                    "start": 702,
                    "end": 709
                  },
                  "optional": false,
                  "start": 695,
                  "end": 709
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "second",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 711,
                    "end": 717
                  },
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 719,
                    "end": 725
                  },
                  "optional": false,
                  "start": 711,
                  "end": 725
                }
              ],
              "start": 694,
              "end": 726
            }
          ],
          "start": 693,
          "end": 727
        },
        "start": 677,
        "end": 727
      },
      "declare": false,
      "start": 653,
      "end": 728
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ToMixedTuple",
        "optional": false,
        "typeAnnotation": null,
        "start": 735,
        "end": 747
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
              "start": 748,
              "end": 749
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 758,
                "end": 765
              },
              "start": 758,
              "end": 767
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 748,
            "end": 767
          }
        ],
        "start": 747,
        "end": 768
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 776,
          "end": 777
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
              "start": 787,
              "end": 788
            },
            "typeArguments": null,
            "start": 787,
            "end": 788
          },
          "start": 781,
          "end": 788
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 792,
                "end": 793
              },
              "typeArguments": null,
              "start": 792,
              "end": 793
            },
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "second",
                "optional": false,
                "typeAnnotation": null,
                "start": 795,
                "end": 801
              },
              "elementType": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 803,
                    "end": 804
                  },
                  "typeArguments": null,
                  "start": 803,
                  "end": 804
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 805,
                    "end": 806
                  },
                  "typeArguments": null,
                  "start": 805,
                  "end": 806
                },
                "start": 803,
                "end": 807
              },
              "optional": false,
              "start": 795,
              "end": 807
            },
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
                  "start": 815,
                  "end": 816
                },
                "typeArguments": null,
                "start": 815,
                "end": 816
              },
              "start": 809,
              "end": 816
            },
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "fourth",
                "optional": false,
                "typeAnnotation": null,
                "start": 818,
                "end": 824
              },
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 826,
                  "end": 827
                },
                "typeArguments": null,
                "start": 826,
                "end": 827
              },
              "optional": false,
              "start": 818,
              "end": 827
            }
          ],
          "start": 791,
          "end": 828
        },
        "optional": false,
        "readonly": null,
        "start": 771,
        "end": 831
      },
      "declare": false,
      "start": 730,
      "end": 832
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnonymousToMixed",
        "optional": false,
        "typeAnnotation": null,
        "start": 839,
        "end": 855
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ToMixedTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 858,
          "end": 870
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSBooleanKeyword",
                  "start": 872,
                  "end": 879
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 881,
                  "end": 887
                }
              ],
              "start": 871,
              "end": 888
            }
          ],
          "start": 870,
          "end": 889
        },
        "start": 858,
        "end": 889
      },
      "declare": false,
      "start": 834,
      "end": 890
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MixedToMixed",
        "optional": false,
        "typeAnnotation": null,
        "start": 896,
        "end": 908
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ToMixedTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 911,
          "end": 923
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSBooleanKeyword",
                  "start": 925,
                  "end": 932
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "second",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 934,
                    "end": 940
                  },
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 942,
                    "end": 948
                  },
                  "optional": false,
                  "start": 934,
                  "end": 948
                }
              ],
              "start": 924,
              "end": 949
            }
          ],
          "start": 923,
          "end": 950
        },
        "start": 911,
        "end": 950
      },
      "declare": false,
      "start": 891,
      "end": 951
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NamedToMixed",
        "optional": false,
        "typeAnnotation": null,
        "start": 957,
        "end": 969
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ToMixedTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 972,
          "end": 984
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "first",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 986,
                    "end": 991
                  },
                  "elementType": {
                    "type": "TSBooleanKeyword",
                    "start": 993,
                    "end": 1000
                  },
                  "optional": false,
                  "start": 986,
                  "end": 1000
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "second",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1002,
                    "end": 1008
                  },
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 1010,
                    "end": 1016
                  },
                  "optional": false,
                  "start": 1002,
                  "end": 1016
                }
              ],
              "start": 985,
              "end": 1017
            }
          ],
          "start": 984,
          "end": 1018
        },
        "start": 972,
        "end": 1018
      },
      "declare": false,
      "start": 952,
      "end": 1019
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MixedSpread",
        "optional": false,
        "typeAnnotation": null,
        "start": 1026,
        "end": 1037
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSNamedTupleMember",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "first",
              "optional": false,
              "typeAnnotation": null,
              "start": 1041,
              "end": 1046
            },
            "elementType": {
              "type": "TSBooleanKeyword",
              "start": 1048,
              "end": 1055
            },
            "optional": false,
            "start": 1041,
            "end": 1055
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "second",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1061,
                    "end": 1067
                  },
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 1069,
                    "end": 1075
                  },
                  "optional": false,
                  "start": 1061,
                  "end": 1075
                }
              ],
              "start": 1060,
              "end": 1076
            },
            "start": 1057,
            "end": 1076
          }
        ],
        "start": 1040,
        "end": 1077
      },
      "declare": false,
      "start": 1021,
      "end": 1078
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConditionalTuple",
        "optional": false,
        "typeAnnotation": null,
        "start": 1085,
        "end": 1101
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSNamedTupleMember",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "first",
              "optional": false,
              "typeAnnotation": null,
              "start": 1108,
              "end": 1113
            },
            "elementType": {
              "type": "TSBooleanKeyword",
              "start": 1115,
              "end": 1122
            },
            "optional": false,
            "start": 1108,
            "end": 1122
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1130,
                  "end": 1131
                },
                "start": 1130,
                "end": 1131
              },
              "extendsType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1140,
                  "end": 1141
                },
                "start": 1140,
                "end": 1141
              },
              "trueType": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "second",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1145,
                      "end": 1151
                    },
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1153,
                      "end": 1159
                    },
                    "optional": false,
                    "start": 1145,
                    "end": 1159
                  }
                ],
                "start": 1144,
                "end": 1160
              },
              "falseType": {
                "type": "TSTupleType",
                "elementTypes": [],
                "start": 1163,
                "end": 1165
              },
              "start": 1130,
              "end": 1165
            },
            "start": 1126,
            "end": 1166
          }
        ],
        "start": 1104,
        "end": 1168
      },
      "declare": false,
      "start": 1080,
      "end": 1169
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AddMixedConditional",
        "optional": false,
        "typeAnnotation": null,
        "start": 1176,
        "end": 1195
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
              "start": 1196,
              "end": 1197
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1196,
            "end": 1197
          }
        ],
        "start": 1195,
        "end": 1198
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSNamedTupleMember",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "first",
              "optional": false,
              "typeAnnotation": null,
              "start": 1205,
              "end": 1210
            },
            "elementType": {
              "type": "TSBooleanKeyword",
              "start": 1212,
              "end": 1219
            },
            "optional": false,
            "start": 1205,
            "end": 1219
          },
          {
            "type": "TSNullKeyword",
            "start": 1223,
            "end": 1227
          },
          {
            "type": "TSNamedTupleMember",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "third",
              "optional": false,
              "typeAnnotation": null,
              "start": 1231,
              "end": 1236
            },
            "elementType": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1238,
                  "end": 1239
                },
                "typeArguments": null,
                "start": 1238,
                "end": 1239
              },
              "extendsType": {
                "type": "TSNumberKeyword",
                "start": 1248,
                "end": 1254
              },
              "trueType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 1257,
                  "end": 1260
                },
                "start": 1257,
                "end": 1260
              },
              "falseType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 1263,
                  "end": 1266
                },
                "start": 1263,
                "end": 1266
              },
              "start": 1238,
              "end": 1266
            },
            "optional": false,
            "start": 1231,
            "end": 1266
          },
          {
            "type": "TSRestType",
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
                  "start": 1274,
                  "end": 1275
                },
                "typeArguments": null,
                "start": 1274,
                "end": 1275
              },
              "extendsType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1284,
                  "end": 1285
                },
                "start": 1284,
                "end": 1285
              },
              "trueType": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fourth",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1289,
                      "end": 1295
                    },
                    "elementType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "c",
                        "raw": "\"c\"",
                        "start": 1297,
                        "end": 1300
                      },
                      "start": 1297,
                      "end": 1300
                    },
                    "optional": false,
                    "start": 1289,
                    "end": 1300
                  }
                ],
                "start": 1288,
                "end": 1301
              },
              "falseType": {
                "type": "TSTupleType",
                "elementTypes": [],
                "start": 1304,
                "end": 1306
              },
              "start": 1274,
              "end": 1306
            },
            "start": 1270,
            "end": 1307
          }
        ],
        "start": 1201,
        "end": 1309
      },
      "declare": false,
      "start": 1171,
      "end": 1310
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AddMixedConditionalBoolean",
        "optional": false,
        "typeAnnotation": null,
        "start": 1317,
        "end": 1343
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "AddMixedConditional",
          "optional": false,
          "typeAnnotation": null,
          "start": 1346,
          "end": 1365
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSBooleanKeyword",
              "start": 1366,
              "end": 1373
            }
          ],
          "start": 1365,
          "end": 1374
        },
        "start": 1346,
        "end": 1374
      },
      "declare": false,
      "start": 1312,
      "end": 1375
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AddMixedConditionalLiteral",
        "optional": false,
        "typeAnnotation": null,
        "start": 1381,
        "end": 1407
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "AddMixedConditional",
          "optional": false,
          "typeAnnotation": null,
          "start": 1410,
          "end": 1429
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1430,
                "end": 1431
              },
              "start": 1430,
              "end": 1431
            }
          ],
          "start": 1429,
          "end": 1432
        },
        "start": 1410,
        "end": 1432
      },
      "declare": false,
      "start": 1376,
      "end": 1433
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AddMixedConditionalNumberPrimitive",
        "optional": false,
        "typeAnnotation": null,
        "start": 1439,
        "end": 1473
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "AddMixedConditional",
          "optional": false,
          "typeAnnotation": null,
          "start": 1476,
          "end": 1495
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 1496,
              "end": 1502
            }
          ],
          "start": 1495,
          "end": 1503
        },
        "start": 1476,
        "end": 1503
      },
      "declare": false,
      "start": 1434,
      "end": 1504
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 1523,
        "end": 1527
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
              "start": 1528,
              "end": 1529
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 1547,
                  "end": 1554
                },
                "start": 1547,
                "end": 1556
              },
              "start": 1538,
              "end": 1556
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1528,
            "end": 1556
          }
        ],
        "start": 1527,
        "end": 1557
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSMappedType",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1584,
                      "end": 1585
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
                          "start": 1595,
                          "end": 1596
                        },
                        "typeArguments": null,
                        "start": 1595,
                        "end": 1596
                      },
                      "start": 1589,
                      "end": 1596
                    },
                    "nameType": null,
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
                            "start": 1609,
                            "end": 1613
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
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
                                  "start": 1615,
                                  "end": 1616
                                },
                                "typeArguments": null,
                                "start": 1615,
                                "end": 1616
                              },
                              "indexType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1617,
                                  "end": 1618
                                },
                                "typeArguments": null,
                                "start": 1617,
                                "end": 1618
                              },
                              "start": 1615,
                              "end": 1619
                            },
                            "start": 1613,
                            "end": 1619
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1609,
                          "end": 1620
                        }
                      ],
                      "start": 1599,
                      "end": 1628
                    },
                    "optional": false,
                    "readonly": null,
                    "start": 1575,
                    "end": 1635
                  },
                  "start": 1572,
                  "end": 1635
                }
              ],
              "start": 1566,
              "end": 1639
            },
            "start": 1564,
            "end": 1639
          },
          "start": 1561,
          "end": 1639
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
            "start": 1643,
            "end": 1644
          },
          "typeArguments": null,
          "start": 1643,
          "end": 1644
        },
        "start": 1641,
        "end": 1644
      },
      "body": null,
      "expression": false,
      "start": 1506,
      "end": 1645
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
            "name": "input",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "first",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1669,
                      "end": 1674
                    },
                    "elementType": {
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
                            "start": 1678,
                            "end": 1682
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1684,
                              "end": 1690
                            },
                            "start": 1682,
                            "end": 1690
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1678,
                          "end": 1690
                        }
                      ],
                      "start": 1676,
                      "end": 1692
                    },
                    "optional": false,
                    "start": 1669,
                    "end": 1692
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
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1696,
                          "end": 1700
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1702,
                            "end": 1708
                          },
                          "start": 1700,
                          "end": 1708
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1696,
                        "end": 1708
                      }
                    ],
                    "start": 1694,
                    "end": 1710
                  }
                ],
                "start": 1668,
                "end": 1711
              },
              "start": 1666,
              "end": 1711
            },
            "start": 1661,
            "end": 1711
          },
          "init": null,
          "definite": false,
          "start": 1661,
          "end": 1711
        }
      ],
      "declare": true,
      "start": 1647,
      "end": 1712
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
            "name": "output",
            "optional": false,
            "typeAnnotation": null,
            "start": 1720,
            "end": 1726
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 1729,
              "end": 1733
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "input",
                "optional": false,
                "typeAnnotation": null,
                "start": 1734,
                "end": 1739
              }
            ],
            "optional": false,
            "start": 1729,
            "end": 1740
          },
          "definite": false,
          "start": 1720,
          "end": 1740
        }
      ],
      "declare": false,
      "start": 1714,
      "end": 1741
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1741
}
```
