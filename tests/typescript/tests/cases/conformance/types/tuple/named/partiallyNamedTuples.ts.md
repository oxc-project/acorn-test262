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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4,
    "range": [
      0,
      4
    ]
  },
  {
    "type": "Identifier",
    "value": "NamedAndAnonymous",
    "start": 5,
    "end": 22,
    "range": [
      5,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 29,
    "end": 35,
    "range": [
      29,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 37,
    "end": 43,
    "range": [
      37,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 47,
    "end": 55,
    "range": [
      47,
      55
    ]
  },
  {
    "type": "Identifier",
    "value": "fa1",
    "start": 56,
    "end": 59,
    "range": [
      56,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 60,
    "end": 63,
    "range": [
      60,
      63
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 63,
    "end": 67,
    "range": [
      63,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Identifier",
    "value": "NamedAndAnonymous",
    "start": 69,
    "end": 86,
    "range": [
      69,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 91,
    "end": 99,
    "range": [
      91,
      99
    ]
  },
  {
    "type": "Identifier",
    "value": "fa2",
    "start": 100,
    "end": 103,
    "range": [
      100,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Identifier",
    "value": "NamedAndAnonymous",
    "start": 107,
    "end": 124,
    "range": [
      107,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 126,
    "end": 129,
    "range": [
      126,
      129
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 129,
    "end": 133,
    "range": [
      129,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Identifier",
    "value": "NamedAndAnonymous",
    "start": 135,
    "end": 152,
    "range": [
      135,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 158,
    "end": 162,
    "range": [
      158,
      162
    ]
  },
  {
    "type": "Identifier",
    "value": "NamedAnonymousMixed",
    "start": 163,
    "end": 182,
    "range": [
      163,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 189,
    "end": 195,
    "range": [
      189,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 197,
    "end": 203,
    "range": [
      197,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 208,
    "end": 214,
    "range": [
      208,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Identifier",
    "value": "NamedAndAnonymous",
    "start": 216,
    "end": 233,
    "range": [
      216,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 237,
    "end": 245,
    "range": [
      237,
      245
    ]
  },
  {
    "type": "Identifier",
    "value": "fb1",
    "start": 246,
    "end": 249,
    "range": [
      246,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 250,
    "end": 253,
    "range": [
      250,
      253
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 253,
    "end": 257,
    "range": [
      253,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Identifier",
    "value": "NamedAnonymousMixed",
    "start": 259,
    "end": 278,
    "range": [
      259,
      278
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 278,
    "end": 279,
    "range": [
      278,
      279
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 283,
    "end": 291,
    "range": [
      283,
      291
    ]
  },
  {
    "type": "Identifier",
    "value": "fb2",
    "start": 292,
    "end": 295,
    "range": [
      292,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Identifier",
    "value": "NamedAnonymousMixed",
    "start": 299,
    "end": 318,
    "range": [
      299,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 320,
    "end": 323,
    "range": [
      320,
      323
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 323,
    "end": 327,
    "range": [
      323,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Identifier",
    "value": "NamedAnonymousMixed",
    "start": 329,
    "end": 348,
    "range": [
      329,
      348
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 353,
    "end": 361,
    "range": [
      353,
      361
    ]
  },
  {
    "type": "Identifier",
    "value": "fb3",
    "start": 362,
    "end": 365,
    "range": [
      362,
      365
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Identifier",
    "value": "NamedAnonymousMixed",
    "start": 369,
    "end": 388,
    "range": [
      369,
      388
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 390,
    "end": 393,
    "range": [
      390,
      393
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 393,
    "end": 397,
    "range": [
      393,
      397
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Identifier",
    "value": "NamedAnonymousMixed",
    "start": 399,
    "end": 418,
    "range": [
      399,
      418
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 419,
    "end": 420,
    "range": [
      419,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 427,
    "end": 431,
    "range": [
      427,
      431
    ]
  },
  {
    "type": "Identifier",
    "value": "ToAnonymousTuple",
    "start": 432,
    "end": 448,
    "range": [
      432,
      448
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 449,
    "end": 450,
    "range": [
      449,
      450
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 451,
    "end": 458,
    "range": [
      451,
      458
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 459,
    "end": 466,
    "range": [
      459,
      466
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 477,
    "end": 478,
    "range": [
      477,
      478
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 479,
    "end": 481,
    "range": [
      479,
      481
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 482,
    "end": 487,
    "range": [
      482,
      487
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 494,
    "end": 495,
    "range": [
      494,
      495
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 500,
    "end": 501,
    "range": [
      500,
      501
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 502,
    "end": 507,
    "range": [
      502,
      507
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 508,
    "end": 509,
    "range": [
      508,
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
    "value": "T",
    "start": 511,
    "end": 512,
    "range": [
      511,
      512
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 512,
    "end": 513,
    "range": [
      512,
      513
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 515,
    "end": 516,
    "range": [
      515,
      516
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 519,
    "end": 523,
    "range": [
      519,
      523
    ]
  },
  {
    "type": "Identifier",
    "value": "AnonymousToAnonymous",
    "start": 524,
    "end": 544,
    "range": [
      524,
      544
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 545,
    "end": 546,
    "range": [
      545,
      546
    ]
  },
  {
    "type": "Identifier",
    "value": "ToAnonymousTuple",
    "start": 547,
    "end": 563,
    "range": [
      547,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 564,
    "end": 565,
    "range": [
      564,
      565
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 565,
    "end": 572,
    "range": [
      565,
      572
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 574,
    "end": 580,
    "range": [
      574,
      580
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 580,
    "end": 581,
    "range": [
      580,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 584,
    "end": 588,
    "range": [
      584,
      588
    ]
  },
  {
    "type": "Identifier",
    "value": "MixedToAnonymous",
    "start": 589,
    "end": 605,
    "range": [
      589,
      605
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 606,
    "end": 607,
    "range": [
      606,
      607
    ]
  },
  {
    "type": "Identifier",
    "value": "ToAnonymousTuple",
    "start": 608,
    "end": 624,
    "range": [
      608,
      624
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 625,
    "end": 626,
    "range": [
      625,
      626
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 626,
    "end": 633,
    "range": [
      626,
      633
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 633,
    "end": 634,
    "range": [
      633,
      634
    ]
  },
  {
    "type": "Identifier",
    "value": "second",
    "start": 635,
    "end": 641,
    "range": [
      635,
      641
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 641,
    "end": 642,
    "range": [
      641,
      642
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 643,
    "end": 649,
    "range": [
      643,
      649
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 649,
    "end": 650,
    "range": [
      649,
      650
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 650,
    "end": 651,
    "range": [
      650,
      651
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 653,
    "end": 657,
    "range": [
      653,
      657
    ]
  },
  {
    "type": "Identifier",
    "value": "NamedToAnonymous",
    "start": 658,
    "end": 674,
    "range": [
      658,
      674
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Identifier",
    "value": "ToAnonymousTuple",
    "start": 677,
    "end": 693,
    "range": [
      677,
      693
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 693,
    "end": 694,
    "range": [
      693,
      694
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 694,
    "end": 695,
    "range": [
      694,
      695
    ]
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 695,
    "end": 700,
    "range": [
      695,
      700
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 700,
    "end": 701,
    "range": [
      700,
      701
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 702,
    "end": 709,
    "range": [
      702,
      709
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 709,
    "end": 710,
    "range": [
      709,
      710
    ]
  },
  {
    "type": "Identifier",
    "value": "second",
    "start": 711,
    "end": 717,
    "range": [
      711,
      717
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 717,
    "end": 718,
    "range": [
      717,
      718
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 719,
    "end": 725,
    "range": [
      719,
      725
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 725,
    "end": 726,
    "range": [
      725,
      726
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 726,
    "end": 727,
    "range": [
      726,
      727
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 727,
    "end": 728,
    "range": [
      727,
      728
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 730,
    "end": 734,
    "range": [
      730,
      734
    ]
  },
  {
    "type": "Identifier",
    "value": "ToMixedTuple",
    "start": 735,
    "end": 747,
    "range": [
      735,
      747
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 748,
    "end": 749,
    "range": [
      748,
      749
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 750,
    "end": 757,
    "range": [
      750,
      757
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 758,
    "end": 765,
    "range": [
      758,
      765
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 765,
    "end": 766,
    "range": [
      765,
      766
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 766,
    "end": 767,
    "range": [
      766,
      767
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 767,
    "end": 768,
    "range": [
      767,
      768
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 769,
    "end": 770,
    "range": [
      769,
      770
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 771,
    "end": 772,
    "range": [
      771,
      772
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 775,
    "end": 776,
    "range": [
      775,
      776
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 776,
    "end": 777,
    "range": [
      776,
      777
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 778,
    "end": 780,
    "range": [
      778,
      780
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 781,
    "end": 786,
    "range": [
      781,
      786
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 787,
    "end": 788,
    "range": [
      787,
      788
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 789,
    "end": 790,
    "range": [
      789,
      790
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 791,
    "end": 792,
    "range": [
      791,
      792
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 792,
    "end": 793,
    "range": [
      792,
      793
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 793,
    "end": 794,
    "range": [
      793,
      794
    ]
  },
  {
    "type": "Identifier",
    "value": "second",
    "start": 795,
    "end": 801,
    "range": [
      795,
      801
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 801,
    "end": 802,
    "range": [
      801,
      802
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 803,
    "end": 804,
    "range": [
      803,
      804
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 804,
    "end": 805,
    "range": [
      804,
      805
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 805,
    "end": 806,
    "range": [
      805,
      806
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 806,
    "end": 807,
    "range": [
      806,
      807
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 807,
    "end": 808,
    "range": [
      807,
      808
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 809,
    "end": 814,
    "range": [
      809,
      814
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 815,
    "end": 816,
    "range": [
      815,
      816
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 816,
    "end": 817,
    "range": [
      816,
      817
    ]
  },
  {
    "type": "Identifier",
    "value": "fourth",
    "start": 818,
    "end": 824,
    "range": [
      818,
      824
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 827,
    "end": 828,
    "range": [
      827,
      828
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 828,
    "end": 829,
    "range": [
      828,
      829
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 831,
    "end": 832,
    "range": [
      831,
      832
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 834,
    "end": 838,
    "range": [
      834,
      838
    ]
  },
  {
    "type": "Identifier",
    "value": "AnonymousToMixed",
    "start": 839,
    "end": 855,
    "range": [
      839,
      855
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 856,
    "end": 857,
    "range": [
      856,
      857
    ]
  },
  {
    "type": "Identifier",
    "value": "ToMixedTuple",
    "start": 858,
    "end": 870,
    "range": [
      858,
      870
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
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
    "value": "boolean",
    "start": 872,
    "end": 879,
    "range": [
      872,
      879
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 879,
    "end": 880,
    "range": [
      879,
      880
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 881,
    "end": 887,
    "range": [
      881,
      887
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 887,
    "end": 888,
    "range": [
      887,
      888
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 888,
    "end": 889,
    "range": [
      888,
      889
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 889,
    "end": 890,
    "range": [
      889,
      890
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 891,
    "end": 895,
    "range": [
      891,
      895
    ]
  },
  {
    "type": "Identifier",
    "value": "MixedToMixed",
    "start": 896,
    "end": 908,
    "range": [
      896,
      908
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 909,
    "end": 910,
    "range": [
      909,
      910
    ]
  },
  {
    "type": "Identifier",
    "value": "ToMixedTuple",
    "start": 911,
    "end": 923,
    "range": [
      911,
      923
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 923,
    "end": 924,
    "range": [
      923,
      924
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 924,
    "end": 925,
    "range": [
      924,
      925
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 925,
    "end": 932,
    "range": [
      925,
      932
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 932,
    "end": 933,
    "range": [
      932,
      933
    ]
  },
  {
    "type": "Identifier",
    "value": "second",
    "start": 934,
    "end": 940,
    "range": [
      934,
      940
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 940,
    "end": 941,
    "range": [
      940,
      941
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 942,
    "end": 948,
    "range": [
      942,
      948
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 948,
    "end": 949,
    "range": [
      948,
      949
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 949,
    "end": 950,
    "range": [
      949,
      950
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 950,
    "end": 951,
    "range": [
      950,
      951
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 952,
    "end": 956,
    "range": [
      952,
      956
    ]
  },
  {
    "type": "Identifier",
    "value": "NamedToMixed",
    "start": 957,
    "end": 969,
    "range": [
      957,
      969
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 970,
    "end": 971,
    "range": [
      970,
      971
    ]
  },
  {
    "type": "Identifier",
    "value": "ToMixedTuple",
    "start": 972,
    "end": 984,
    "range": [
      972,
      984
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 984,
    "end": 985,
    "range": [
      984,
      985
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 985,
    "end": 986,
    "range": [
      985,
      986
    ]
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 986,
    "end": 991,
    "range": [
      986,
      991
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 991,
    "end": 992,
    "range": [
      991,
      992
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 993,
    "end": 1000,
    "range": [
      993,
      1000
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1000,
    "end": 1001,
    "range": [
      1000,
      1001
    ]
  },
  {
    "type": "Identifier",
    "value": "second",
    "start": 1002,
    "end": 1008,
    "range": [
      1002,
      1008
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1008,
    "end": 1009,
    "range": [
      1008,
      1009
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1010,
    "end": 1016,
    "range": [
      1010,
      1016
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1016,
    "end": 1017,
    "range": [
      1016,
      1017
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1017,
    "end": 1018,
    "range": [
      1017,
      1018
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1018,
    "end": 1019,
    "range": [
      1018,
      1019
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1021,
    "end": 1025,
    "range": [
      1021,
      1025
    ]
  },
  {
    "type": "Identifier",
    "value": "MixedSpread",
    "start": 1026,
    "end": 1037,
    "range": [
      1026,
      1037
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1038,
    "end": 1039,
    "range": [
      1038,
      1039
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1040,
    "end": 1041,
    "range": [
      1040,
      1041
    ]
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 1041,
    "end": 1046,
    "range": [
      1041,
      1046
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1046,
    "end": 1047,
    "range": [
      1046,
      1047
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1048,
    "end": 1055,
    "range": [
      1048,
      1055
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1055,
    "end": 1056,
    "range": [
      1055,
      1056
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1057,
    "end": 1060,
    "range": [
      1057,
      1060
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1060,
    "end": 1061,
    "range": [
      1060,
      1061
    ]
  },
  {
    "type": "Identifier",
    "value": "second",
    "start": 1061,
    "end": 1067,
    "range": [
      1061,
      1067
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1067,
    "end": 1068,
    "range": [
      1067,
      1068
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1069,
    "end": 1075,
    "range": [
      1069,
      1075
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1075,
    "end": 1076,
    "range": [
      1075,
      1076
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1076,
    "end": 1077,
    "range": [
      1076,
      1077
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1077,
    "end": 1078,
    "range": [
      1077,
      1078
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1080,
    "end": 1084,
    "range": [
      1080,
      1084
    ]
  },
  {
    "type": "Identifier",
    "value": "ConditionalTuple",
    "start": 1085,
    "end": 1101,
    "range": [
      1085,
      1101
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1102,
    "end": 1103,
    "range": [
      1102,
      1103
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1104,
    "end": 1105,
    "range": [
      1104,
      1105
    ]
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 1108,
    "end": 1113,
    "range": [
      1108,
      1113
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1113,
    "end": 1114,
    "range": [
      1113,
      1114
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1115,
    "end": 1122,
    "range": [
      1115,
      1122
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1122,
    "end": 1123,
    "range": [
      1122,
      1123
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1126,
    "end": 1129,
    "range": [
      1126,
      1129
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1129,
    "end": 1130,
    "range": [
      1129,
      1130
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1130,
    "end": 1131,
    "range": [
      1130,
      1131
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1132,
    "end": 1139,
    "range": [
      1132,
      1139
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1140,
    "end": 1141,
    "range": [
      1140,
      1141
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1142,
    "end": 1143,
    "range": [
      1142,
      1143
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1144,
    "end": 1145,
    "range": [
      1144,
      1145
    ]
  },
  {
    "type": "Identifier",
    "value": "second",
    "start": 1145,
    "end": 1151,
    "range": [
      1145,
      1151
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1151,
    "end": 1152,
    "range": [
      1151,
      1152
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1153,
    "end": 1159,
    "range": [
      1153,
      1159
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1159,
    "end": 1160,
    "range": [
      1159,
      1160
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1161,
    "end": 1162,
    "range": [
      1161,
      1162
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1163,
    "end": 1164,
    "range": [
      1163,
      1164
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1164,
    "end": 1165,
    "range": [
      1164,
      1165
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1165,
    "end": 1166,
    "range": [
      1165,
      1166
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1167,
    "end": 1168,
    "range": [
      1167,
      1168
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1168,
    "end": 1169,
    "range": [
      1168,
      1169
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1171,
    "end": 1175,
    "range": [
      1171,
      1175
    ]
  },
  {
    "type": "Identifier",
    "value": "AddMixedConditional",
    "start": 1176,
    "end": 1195,
    "range": [
      1176,
      1195
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1195,
    "end": 1196,
    "range": [
      1195,
      1196
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1196,
    "end": 1197,
    "range": [
      1196,
      1197
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1197,
    "end": 1198,
    "range": [
      1197,
      1198
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1199,
    "end": 1200,
    "range": [
      1199,
      1200
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1201,
    "end": 1202,
    "range": [
      1201,
      1202
    ]
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 1205,
    "end": 1210,
    "range": [
      1205,
      1210
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1210,
    "end": 1211,
    "range": [
      1210,
      1211
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1212,
    "end": 1219,
    "range": [
      1212,
      1219
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1219,
    "end": 1220,
    "range": [
      1219,
      1220
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1223,
    "end": 1227,
    "range": [
      1223,
      1227
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1227,
    "end": 1228,
    "range": [
      1227,
      1228
    ]
  },
  {
    "type": "Identifier",
    "value": "third",
    "start": 1231,
    "end": 1236,
    "range": [
      1231,
      1236
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1236,
    "end": 1237,
    "range": [
      1236,
      1237
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1238,
    "end": 1239,
    "range": [
      1238,
      1239
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1240,
    "end": 1247,
    "range": [
      1240,
      1247
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1248,
    "end": 1254,
    "range": [
      1248,
      1254
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1255,
    "end": 1256,
    "range": [
      1255,
      1256
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1257,
    "end": 1260,
    "range": [
      1257,
      1260
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1261,
    "end": 1262,
    "range": [
      1261,
      1262
    ]
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 1263,
    "end": 1266,
    "range": [
      1263,
      1266
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1266,
    "end": 1267,
    "range": [
      1266,
      1267
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1270,
    "end": 1273,
    "range": [
      1270,
      1273
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1273,
    "end": 1274,
    "range": [
      1273,
      1274
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1274,
    "end": 1275,
    "range": [
      1274,
      1275
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1276,
    "end": 1283,
    "range": [
      1276,
      1283
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1284,
    "end": 1285,
    "range": [
      1284,
      1285
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1286,
    "end": 1287,
    "range": [
      1286,
      1287
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1288,
    "end": 1289,
    "range": [
      1288,
      1289
    ]
  },
  {
    "type": "Identifier",
    "value": "fourth",
    "start": 1289,
    "end": 1295,
    "range": [
      1289,
      1295
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1295,
    "end": 1296,
    "range": [
      1295,
      1296
    ]
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 1297,
    "end": 1300,
    "range": [
      1297,
      1300
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1300,
    "end": 1301,
    "range": [
      1300,
      1301
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1302,
    "end": 1303,
    "range": [
      1302,
      1303
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1304,
    "end": 1305,
    "range": [
      1304,
      1305
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1305,
    "end": 1306,
    "range": [
      1305,
      1306
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1306,
    "end": 1307,
    "range": [
      1306,
      1307
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1308,
    "end": 1309,
    "range": [
      1308,
      1309
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1309,
    "end": 1310,
    "range": [
      1309,
      1310
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1312,
    "end": 1316,
    "range": [
      1312,
      1316
    ]
  },
  {
    "type": "Identifier",
    "value": "AddMixedConditionalBoolean",
    "start": 1317,
    "end": 1343,
    "range": [
      1317,
      1343
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1344,
    "end": 1345,
    "range": [
      1344,
      1345
    ]
  },
  {
    "type": "Identifier",
    "value": "AddMixedConditional",
    "start": 1346,
    "end": 1365,
    "range": [
      1346,
      1365
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1365,
    "end": 1366,
    "range": [
      1365,
      1366
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1366,
    "end": 1373,
    "range": [
      1366,
      1373
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1373,
    "end": 1374,
    "range": [
      1373,
      1374
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1374,
    "end": 1375,
    "range": [
      1374,
      1375
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1376,
    "end": 1380,
    "range": [
      1376,
      1380
    ]
  },
  {
    "type": "Identifier",
    "value": "AddMixedConditionalLiteral",
    "start": 1381,
    "end": 1407,
    "range": [
      1381,
      1407
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1408,
    "end": 1409,
    "range": [
      1408,
      1409
    ]
  },
  {
    "type": "Identifier",
    "value": "AddMixedConditional",
    "start": 1410,
    "end": 1429,
    "range": [
      1410,
      1429
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1429,
    "end": 1430,
    "range": [
      1429,
      1430
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1430,
    "end": 1431,
    "range": [
      1430,
      1431
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1431,
    "end": 1432,
    "range": [
      1431,
      1432
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1432,
    "end": 1433,
    "range": [
      1432,
      1433
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1434,
    "end": 1438,
    "range": [
      1434,
      1438
    ]
  },
  {
    "type": "Identifier",
    "value": "AddMixedConditionalNumberPrimitive",
    "start": 1439,
    "end": 1473,
    "range": [
      1439,
      1473
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1474,
    "end": 1475,
    "range": [
      1474,
      1475
    ]
  },
  {
    "type": "Identifier",
    "value": "AddMixedConditional",
    "start": 1476,
    "end": 1495,
    "range": [
      1476,
      1495
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1495,
    "end": 1496,
    "range": [
      1495,
      1496
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1496,
    "end": 1502,
    "range": [
      1496,
      1502
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1502,
    "end": 1503,
    "range": [
      1502,
      1503
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1503,
    "end": 1504,
    "range": [
      1503,
      1504
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1506,
    "end": 1513,
    "range": [
      1506,
      1513
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1514,
    "end": 1522,
    "range": [
      1514,
      1522
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1523,
    "end": 1527,
    "range": [
      1523,
      1527
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1527,
    "end": 1528,
    "range": [
      1527,
      1528
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1528,
    "end": 1529,
    "range": [
      1528,
      1529
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1530,
    "end": 1537,
    "range": [
      1530,
      1537
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1538,
    "end": 1546,
    "range": [
      1538,
      1546
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1547,
    "end": 1554,
    "range": [
      1547,
      1554
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1554,
    "end": 1555,
    "range": [
      1554,
      1555
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1555,
    "end": 1556,
    "range": [
      1555,
      1556
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1556,
    "end": 1557,
    "range": [
      1556,
      1557
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1557,
    "end": 1558,
    "range": [
      1557,
      1558
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1561,
    "end": 1564,
    "range": [
      1561,
      1564
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1564,
    "end": 1565,
    "range": [
      1564,
      1565
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1566,
    "end": 1567,
    "range": [
      1566,
      1567
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1572,
    "end": 1575,
    "range": [
      1572,
      1575
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "start": 1583,
    "end": 1584,
    "range": [
      1583,
      1584
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1584,
    "end": 1585,
    "range": [
      1584,
      1585
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1586,
    "end": 1588,
    "range": [
      1586,
      1588
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1589,
    "end": 1594,
    "range": [
      1589,
      1594
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1595,
    "end": 1596,
    "range": [
      1595,
      1596
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1596,
    "end": 1597,
    "range": [
      1596,
      1597
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1597,
    "end": 1598,
    "range": [
      1597,
      1598
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1599,
    "end": 1600,
    "range": [
      1599,
      1600
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1609,
    "end": 1613,
    "range": [
      1609,
      1613
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1613,
    "end": 1614,
    "range": [
      1613,
      1614
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1615,
    "end": 1616,
    "range": [
      1615,
      1616
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1616,
    "end": 1617,
    "range": [
      1616,
      1617
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1617,
    "end": 1618,
    "range": [
      1617,
      1618
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1618,
    "end": 1619,
    "range": [
      1618,
      1619
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1619,
    "end": 1620,
    "range": [
      1619,
      1620
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1627,
    "end": 1628,
    "range": [
      1627,
      1628
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1628,
    "end": 1629,
    "range": [
      1628,
      1629
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1634,
    "end": 1635,
    "range": [
      1634,
      1635
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1638,
    "end": 1639,
    "range": [
      1638,
      1639
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1640,
    "end": 1641,
    "range": [
      1640,
      1641
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1641,
    "end": 1642,
    "range": [
      1641,
      1642
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1643,
    "end": 1644,
    "range": [
      1643,
      1644
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1644,
    "end": 1645,
    "range": [
      1644,
      1645
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1647,
    "end": 1654,
    "range": [
      1647,
      1654
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1655,
    "end": 1660,
    "range": [
      1655,
      1660
    ]
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 1661,
    "end": 1666,
    "range": [
      1661,
      1666
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1666,
    "end": 1667,
    "range": [
      1666,
      1667
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1668,
    "end": 1669,
    "range": [
      1668,
      1669
    ]
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 1669,
    "end": 1674,
    "range": [
      1669,
      1674
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1674,
    "end": 1675,
    "range": [
      1674,
      1675
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1676,
    "end": 1677,
    "range": [
      1676,
      1677
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1678,
    "end": 1682,
    "range": [
      1678,
      1682
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1682,
    "end": 1683,
    "range": [
      1682,
      1683
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1684,
    "end": 1690,
    "range": [
      1684,
      1690
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1691,
    "end": 1692,
    "range": [
      1691,
      1692
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1692,
    "end": 1693,
    "range": [
      1692,
      1693
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1694,
    "end": 1695,
    "range": [
      1694,
      1695
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1696,
    "end": 1700,
    "range": [
      1696,
      1700
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1700,
    "end": 1701,
    "range": [
      1700,
      1701
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1702,
    "end": 1708,
    "range": [
      1702,
      1708
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1709,
    "end": 1710,
    "range": [
      1709,
      1710
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1710,
    "end": 1711,
    "range": [
      1710,
      1711
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1711,
    "end": 1712,
    "range": [
      1711,
      1712
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1714,
    "end": 1719,
    "range": [
      1714,
      1719
    ]
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 1720,
    "end": 1726,
    "range": [
      1720,
      1726
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1727,
    "end": 1728,
    "range": [
      1727,
      1728
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1729,
    "end": 1733,
    "range": [
      1729,
      1733
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1733,
    "end": 1734,
    "range": [
      1733,
      1734
    ]
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 1734,
    "end": 1739,
    "range": [
      1734,
      1739
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1739,
    "end": 1740,
    "range": [
      1739,
      1740
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1740,
    "end": 1741,
    "range": [
      1740,
      1741
    ]
  }
]
```
