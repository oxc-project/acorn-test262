__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1741,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 45,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 22,
        "decorators": [],
        "name": "NamedAndAnonymous",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 25,
        "end": 44,
        "elementTypes": [
          {
            "type": "TSNamedTupleMember",
            "start": 26,
            "end": 35,
            "label": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "elementType": {
              "type": "TSStringKeyword",
              "start": 29,
              "end": 35
            },
            "optional": false
          },
          {
            "type": "TSNumberKeyword",
            "start": 37,
            "end": 43
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 47,
      "end": 90,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 59,
        "decorators": [],
        "name": "fa1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "start": 60,
          "end": 86,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 63,
            "end": 67,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 67,
            "end": 86,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 69,
              "end": 86,
              "typeName": {
                "type": "Identifier",
                "start": 69,
                "end": 86,
                "decorators": [],
                "name": "NamedAndAnonymous",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 88,
        "end": 90,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 91,
      "end": 156,
      "id": {
        "type": "Identifier",
        "start": 100,
        "end": 103,
        "decorators": [],
        "name": "fa2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 104,
          "end": 124,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 105,
            "end": 124,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 107,
              "end": 124,
              "typeName": {
                "type": "Identifier",
                "start": 107,
                "end": 124,
                "decorators": [],
                "name": "NamedAndAnonymous",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "RestElement",
          "start": 126,
          "end": 152,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 129,
            "end": 133,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 133,
            "end": 152,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 135,
              "end": 152,
              "typeName": {
                "type": "Identifier",
                "start": 135,
                "end": 152,
                "decorators": [],
                "name": "NamedAndAnonymous",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 154,
        "end": 156,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 158,
      "end": 235,
      "id": {
        "type": "Identifier",
        "start": 163,
        "end": 182,
        "decorators": [],
        "name": "NamedAnonymousMixed",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 185,
        "end": 234,
        "elementTypes": [
          {
            "type": "TSNamedTupleMember",
            "start": 186,
            "end": 195,
            "label": {
              "type": "Identifier",
              "start": 186,
              "end": 187,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "elementType": {
              "type": "TSStringKeyword",
              "start": 189,
              "end": 195
            },
            "optional": false
          },
          {
            "type": "TSNumberKeyword",
            "start": 197,
            "end": 203
          },
          {
            "type": "TSNamedTupleMember",
            "start": 205,
            "end": 214,
            "label": {
              "type": "Identifier",
              "start": 205,
              "end": 206,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "elementType": {
              "type": "TSNumberKeyword",
              "start": 208,
              "end": 214
            },
            "optional": false
          },
          {
            "type": "TSTypeReference",
            "start": 216,
            "end": 233,
            "typeName": {
              "type": "Identifier",
              "start": 216,
              "end": 233,
              "decorators": [],
              "name": "NamedAndAnonymous",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 237,
      "end": 282,
      "id": {
        "type": "Identifier",
        "start": 246,
        "end": 249,
        "decorators": [],
        "name": "fb1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "start": 250,
          "end": 278,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 253,
            "end": 257,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 257,
            "end": 278,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 259,
              "end": 278,
              "typeName": {
                "type": "Identifier",
                "start": 259,
                "end": 278,
                "decorators": [],
                "name": "NamedAnonymousMixed",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 280,
        "end": 282,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 283,
      "end": 352,
      "id": {
        "type": "Identifier",
        "start": 292,
        "end": 295,
        "decorators": [],
        "name": "fb2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 296,
          "end": 318,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 297,
            "end": 318,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 299,
              "end": 318,
              "typeName": {
                "type": "Identifier",
                "start": 299,
                "end": 318,
                "decorators": [],
                "name": "NamedAnonymousMixed",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "RestElement",
          "start": 320,
          "end": 348,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 323,
            "end": 327,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 327,
            "end": 348,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 329,
              "end": 348,
              "typeName": {
                "type": "Identifier",
                "start": 329,
                "end": 348,
                "decorators": [],
                "name": "NamedAnonymousMixed",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 350,
        "end": 352,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 353,
      "end": 425,
      "id": {
        "type": "Identifier",
        "start": 362,
        "end": 365,
        "decorators": [],
        "name": "fb3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 366,
          "end": 388,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 367,
            "end": 388,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 369,
              "end": 388,
              "typeName": {
                "type": "Identifier",
                "start": 369,
                "end": 388,
                "decorators": [],
                "name": "NamedAnonymousMixed",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "RestElement",
          "start": 390,
          "end": 421,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 393,
            "end": 397,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 397,
            "end": 421,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 399,
              "end": 421,
              "objectType": {
                "type": "TSTypeReference",
                "start": 399,
                "end": 418,
                "typeName": {
                  "type": "Identifier",
                  "start": 399,
                  "end": 418,
                  "decorators": [],
                  "name": "NamedAnonymousMixed",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSLiteralType",
                "start": 419,
                "end": 420,
                "literal": {
                  "type": "Literal",
                  "start": 419,
                  "end": 420,
                  "value": 3,
                  "raw": "3"
                }
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 423,
        "end": 425,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 427,
      "end": 517,
      "id": {
        "type": "Identifier",
        "start": 432,
        "end": 448,
        "decorators": [],
        "name": "ToAnonymousTuple",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 448,
        "end": 469,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 449,
            "end": 468,
            "name": {
              "type": "Identifier",
              "start": 449,
              "end": 450,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 459,
              "end": 468,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 459,
                "end": 466
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 472,
        "end": 516,
        "key": {
          "type": "Identifier",
          "start": 477,
          "end": 478,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 482,
          "end": 489,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 488,
            "end": 489,
            "typeName": {
              "type": "Identifier",
              "start": 488,
              "end": 489,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 492,
          "end": 513,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 493,
              "end": 494,
              "typeName": {
                "type": "Identifier",
                "start": 493,
                "end": 494,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSIndexedAccessType",
              "start": 496,
              "end": 500,
              "objectType": {
                "type": "TSTypeReference",
                "start": 496,
                "end": 497,
                "typeName": {
                  "type": "Identifier",
                  "start": 496,
                  "end": 497,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 498,
                "end": 499,
                "typeName": {
                  "type": "Identifier",
                  "start": 498,
                  "end": 499,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            {
              "type": "TSTypeOperator",
              "start": 502,
              "end": 509,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 508,
                "end": 509,
                "typeName": {
                  "type": "Identifier",
                  "start": 508,
                  "end": 509,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 511,
              "end": 512,
              "typeName": {
                "type": "Identifier",
                "start": 511,
                "end": 512,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 519,
      "end": 583,
      "id": {
        "type": "Identifier",
        "start": 524,
        "end": 544,
        "decorators": [],
        "name": "AnonymousToAnonymous",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 547,
        "end": 582,
        "typeName": {
          "type": "Identifier",
          "start": 547,
          "end": 563,
          "decorators": [],
          "name": "ToAnonymousTuple",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 563,
          "end": 582,
          "params": [
            {
              "type": "TSTupleType",
              "start": 564,
              "end": 581,
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
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 584,
      "end": 652,
      "id": {
        "type": "Identifier",
        "start": 589,
        "end": 605,
        "decorators": [],
        "name": "MixedToAnonymous",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 608,
        "end": 651,
        "typeName": {
          "type": "Identifier",
          "start": 608,
          "end": 624,
          "decorators": [],
          "name": "ToAnonymousTuple",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 624,
          "end": 651,
          "params": [
            {
              "type": "TSTupleType",
              "start": 625,
              "end": 650,
              "elementTypes": [
                {
                  "type": "TSBooleanKeyword",
                  "start": 626,
                  "end": 633
                },
                {
                  "type": "TSNamedTupleMember",
                  "start": 635,
                  "end": 649,
                  "label": {
                    "type": "Identifier",
                    "start": 635,
                    "end": 641,
                    "decorators": [],
                    "name": "second",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 643,
                    "end": 649
                  },
                  "optional": false
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 653,
      "end": 728,
      "id": {
        "type": "Identifier",
        "start": 658,
        "end": 674,
        "decorators": [],
        "name": "NamedToAnonymous",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 677,
        "end": 727,
        "typeName": {
          "type": "Identifier",
          "start": 677,
          "end": 693,
          "decorators": [],
          "name": "ToAnonymousTuple",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 693,
          "end": 727,
          "params": [
            {
              "type": "TSTupleType",
              "start": 694,
              "end": 726,
              "elementTypes": [
                {
                  "type": "TSNamedTupleMember",
                  "start": 695,
                  "end": 709,
                  "label": {
                    "type": "Identifier",
                    "start": 695,
                    "end": 700,
                    "decorators": [],
                    "name": "first",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "elementType": {
                    "type": "TSBooleanKeyword",
                    "start": 702,
                    "end": 709
                  },
                  "optional": false
                },
                {
                  "type": "TSNamedTupleMember",
                  "start": 711,
                  "end": 725,
                  "label": {
                    "type": "Identifier",
                    "start": 711,
                    "end": 717,
                    "decorators": [],
                    "name": "second",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 719,
                    "end": 725
                  },
                  "optional": false
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 730,
      "end": 832,
      "id": {
        "type": "Identifier",
        "start": 735,
        "end": 747,
        "decorators": [],
        "name": "ToMixedTuple",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 747,
        "end": 768,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 748,
            "end": 767,
            "name": {
              "type": "Identifier",
              "start": 748,
              "end": 749,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 758,
              "end": 767,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 758,
                "end": 765
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 771,
        "end": 831,
        "key": {
          "type": "Identifier",
          "start": 776,
          "end": 777,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 781,
          "end": 788,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 787,
            "end": 788,
            "typeName": {
              "type": "Identifier",
              "start": 787,
              "end": 788,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 791,
          "end": 828,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 792,
              "end": 793,
              "typeName": {
                "type": "Identifier",
                "start": 792,
                "end": 793,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSNamedTupleMember",
              "start": 795,
              "end": 807,
              "label": {
                "type": "Identifier",
                "start": 795,
                "end": 801,
                "decorators": [],
                "name": "second",
                "optional": false,
                "typeAnnotation": null
              },
              "elementType": {
                "type": "TSIndexedAccessType",
                "start": 803,
                "end": 807,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 803,
                  "end": 804,
                  "typeName": {
                    "type": "Identifier",
                    "start": 803,
                    "end": 804,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 805,
                  "end": 806,
                  "typeName": {
                    "type": "Identifier",
                    "start": 805,
                    "end": 806,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "optional": false
            },
            {
              "type": "TSTypeOperator",
              "start": 809,
              "end": 816,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 815,
                "end": 816,
                "typeName": {
                  "type": "Identifier",
                  "start": 815,
                  "end": 816,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            {
              "type": "TSNamedTupleMember",
              "start": 818,
              "end": 827,
              "label": {
                "type": "Identifier",
                "start": 818,
                "end": 824,
                "decorators": [],
                "name": "fourth",
                "optional": false,
                "typeAnnotation": null
              },
              "elementType": {
                "type": "TSTypeReference",
                "start": 826,
                "end": 827,
                "typeName": {
                  "type": "Identifier",
                  "start": 826,
                  "end": 827,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "optional": false
            }
          ]
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 834,
      "end": 890,
      "id": {
        "type": "Identifier",
        "start": 839,
        "end": 855,
        "decorators": [],
        "name": "AnonymousToMixed",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 858,
        "end": 889,
        "typeName": {
          "type": "Identifier",
          "start": 858,
          "end": 870,
          "decorators": [],
          "name": "ToMixedTuple",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 870,
          "end": 889,
          "params": [
            {
              "type": "TSTupleType",
              "start": 871,
              "end": 888,
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
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 891,
      "end": 951,
      "id": {
        "type": "Identifier",
        "start": 896,
        "end": 908,
        "decorators": [],
        "name": "MixedToMixed",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 911,
        "end": 950,
        "typeName": {
          "type": "Identifier",
          "start": 911,
          "end": 923,
          "decorators": [],
          "name": "ToMixedTuple",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 923,
          "end": 950,
          "params": [
            {
              "type": "TSTupleType",
              "start": 924,
              "end": 949,
              "elementTypes": [
                {
                  "type": "TSBooleanKeyword",
                  "start": 925,
                  "end": 932
                },
                {
                  "type": "TSNamedTupleMember",
                  "start": 934,
                  "end": 948,
                  "label": {
                    "type": "Identifier",
                    "start": 934,
                    "end": 940,
                    "decorators": [],
                    "name": "second",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 942,
                    "end": 948
                  },
                  "optional": false
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 952,
      "end": 1019,
      "id": {
        "type": "Identifier",
        "start": 957,
        "end": 969,
        "decorators": [],
        "name": "NamedToMixed",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 972,
        "end": 1018,
        "typeName": {
          "type": "Identifier",
          "start": 972,
          "end": 984,
          "decorators": [],
          "name": "ToMixedTuple",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 984,
          "end": 1018,
          "params": [
            {
              "type": "TSTupleType",
              "start": 985,
              "end": 1017,
              "elementTypes": [
                {
                  "type": "TSNamedTupleMember",
                  "start": 986,
                  "end": 1000,
                  "label": {
                    "type": "Identifier",
                    "start": 986,
                    "end": 991,
                    "decorators": [],
                    "name": "first",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "elementType": {
                    "type": "TSBooleanKeyword",
                    "start": 993,
                    "end": 1000
                  },
                  "optional": false
                },
                {
                  "type": "TSNamedTupleMember",
                  "start": 1002,
                  "end": 1016,
                  "label": {
                    "type": "Identifier",
                    "start": 1002,
                    "end": 1008,
                    "decorators": [],
                    "name": "second",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 1010,
                    "end": 1016
                  },
                  "optional": false
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1021,
      "end": 1078,
      "id": {
        "type": "Identifier",
        "start": 1026,
        "end": 1037,
        "decorators": [],
        "name": "MixedSpread",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 1040,
        "end": 1077,
        "elementTypes": [
          {
            "type": "TSNamedTupleMember",
            "start": 1041,
            "end": 1055,
            "label": {
              "type": "Identifier",
              "start": 1041,
              "end": 1046,
              "decorators": [],
              "name": "first",
              "optional": false,
              "typeAnnotation": null
            },
            "elementType": {
              "type": "TSBooleanKeyword",
              "start": 1048,
              "end": 1055
            },
            "optional": false
          },
          {
            "type": "TSRestType",
            "start": 1057,
            "end": 1076,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 1060,
              "end": 1076,
              "elementTypes": [
                {
                  "type": "TSNamedTupleMember",
                  "start": 1061,
                  "end": 1075,
                  "label": {
                    "type": "Identifier",
                    "start": 1061,
                    "end": 1067,
                    "decorators": [],
                    "name": "second",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 1069,
                    "end": 1075
                  },
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1080,
      "end": 1169,
      "id": {
        "type": "Identifier",
        "start": 1085,
        "end": 1101,
        "decorators": [],
        "name": "ConditionalTuple",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 1104,
        "end": 1168,
        "elementTypes": [
          {
            "type": "TSNamedTupleMember",
            "start": 1108,
            "end": 1122,
            "label": {
              "type": "Identifier",
              "start": 1108,
              "end": 1113,
              "decorators": [],
              "name": "first",
              "optional": false,
              "typeAnnotation": null
            },
            "elementType": {
              "type": "TSBooleanKeyword",
              "start": 1115,
              "end": 1122
            },
            "optional": false
          },
          {
            "type": "TSRestType",
            "start": 1126,
            "end": 1166,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 1130,
              "end": 1165,
              "checkType": {
                "type": "TSLiteralType",
                "start": 1130,
                "end": 1131,
                "literal": {
                  "type": "Literal",
                  "start": 1130,
                  "end": 1131,
                  "value": 0,
                  "raw": "0"
                }
              },
              "extendsType": {
                "type": "TSLiteralType",
                "start": 1140,
                "end": 1141,
                "literal": {
                  "type": "Literal",
                  "start": 1140,
                  "end": 1141,
                  "value": 0,
                  "raw": "0"
                }
              },
              "trueType": {
                "type": "TSTupleType",
                "start": 1144,
                "end": 1160,
                "elementTypes": [
                  {
                    "type": "TSNamedTupleMember",
                    "start": 1145,
                    "end": 1159,
                    "label": {
                      "type": "Identifier",
                      "start": 1145,
                      "end": 1151,
                      "decorators": [],
                      "name": "second",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1153,
                      "end": 1159
                    },
                    "optional": false
                  }
                ]
              },
              "falseType": {
                "type": "TSTupleType",
                "start": 1163,
                "end": 1165,
                "elementTypes": []
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1171,
      "end": 1310,
      "id": {
        "type": "Identifier",
        "start": 1176,
        "end": 1195,
        "decorators": [],
        "name": "AddMixedConditional",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1195,
        "end": 1198,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1196,
            "end": 1197,
            "name": {
              "type": "Identifier",
              "start": 1196,
              "end": 1197,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 1201,
        "end": 1309,
        "elementTypes": [
          {
            "type": "TSNamedTupleMember",
            "start": 1205,
            "end": 1219,
            "label": {
              "type": "Identifier",
              "start": 1205,
              "end": 1210,
              "decorators": [],
              "name": "first",
              "optional": false,
              "typeAnnotation": null
            },
            "elementType": {
              "type": "TSBooleanKeyword",
              "start": 1212,
              "end": 1219
            },
            "optional": false
          },
          {
            "type": "TSNullKeyword",
            "start": 1223,
            "end": 1227
          },
          {
            "type": "TSNamedTupleMember",
            "start": 1231,
            "end": 1266,
            "label": {
              "type": "Identifier",
              "start": 1231,
              "end": 1236,
              "decorators": [],
              "name": "third",
              "optional": false,
              "typeAnnotation": null
            },
            "elementType": {
              "type": "TSConditionalType",
              "start": 1238,
              "end": 1266,
              "checkType": {
                "type": "TSTypeReference",
                "start": 1238,
                "end": 1239,
                "typeName": {
                  "type": "Identifier",
                  "start": 1238,
                  "end": 1239,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "extendsType": {
                "type": "TSNumberKeyword",
                "start": 1248,
                "end": 1254
              },
              "trueType": {
                "type": "TSLiteralType",
                "start": 1257,
                "end": 1260,
                "literal": {
                  "type": "Literal",
                  "start": 1257,
                  "end": 1260,
                  "value": "a",
                  "raw": "\"a\""
                }
              },
              "falseType": {
                "type": "TSLiteralType",
                "start": 1263,
                "end": 1266,
                "literal": {
                  "type": "Literal",
                  "start": 1263,
                  "end": 1266,
                  "value": "b",
                  "raw": "\"b\""
                }
              }
            },
            "optional": false
          },
          {
            "type": "TSRestType",
            "start": 1270,
            "end": 1307,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 1274,
              "end": 1306,
              "checkType": {
                "type": "TSTypeReference",
                "start": 1274,
                "end": 1275,
                "typeName": {
                  "type": "Identifier",
                  "start": 1274,
                  "end": 1275,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "extendsType": {
                "type": "TSLiteralType",
                "start": 1284,
                "end": 1285,
                "literal": {
                  "type": "Literal",
                  "start": 1284,
                  "end": 1285,
                  "value": 0,
                  "raw": "0"
                }
              },
              "trueType": {
                "type": "TSTupleType",
                "start": 1288,
                "end": 1301,
                "elementTypes": [
                  {
                    "type": "TSNamedTupleMember",
                    "start": 1289,
                    "end": 1300,
                    "label": {
                      "type": "Identifier",
                      "start": 1289,
                      "end": 1295,
                      "decorators": [],
                      "name": "fourth",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "elementType": {
                      "type": "TSLiteralType",
                      "start": 1297,
                      "end": 1300,
                      "literal": {
                        "type": "Literal",
                        "start": 1297,
                        "end": 1300,
                        "value": "c",
                        "raw": "\"c\""
                      }
                    },
                    "optional": false
                  }
                ]
              },
              "falseType": {
                "type": "TSTupleType",
                "start": 1304,
                "end": 1306,
                "elementTypes": []
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1312,
      "end": 1375,
      "id": {
        "type": "Identifier",
        "start": 1317,
        "end": 1343,
        "decorators": [],
        "name": "AddMixedConditionalBoolean",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1346,
        "end": 1374,
        "typeName": {
          "type": "Identifier",
          "start": 1346,
          "end": 1365,
          "decorators": [],
          "name": "AddMixedConditional",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1365,
          "end": 1374,
          "params": [
            {
              "type": "TSBooleanKeyword",
              "start": 1366,
              "end": 1373
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1376,
      "end": 1433,
      "id": {
        "type": "Identifier",
        "start": 1381,
        "end": 1407,
        "decorators": [],
        "name": "AddMixedConditionalLiteral",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1410,
        "end": 1432,
        "typeName": {
          "type": "Identifier",
          "start": 1410,
          "end": 1429,
          "decorators": [],
          "name": "AddMixedConditional",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1429,
          "end": 1432,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 1430,
              "end": 1431,
              "literal": {
                "type": "Literal",
                "start": 1430,
                "end": 1431,
                "value": 0,
                "raw": "0"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1434,
      "end": 1504,
      "id": {
        "type": "Identifier",
        "start": 1439,
        "end": 1473,
        "decorators": [],
        "name": "AddMixedConditionalNumberPrimitive",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1476,
        "end": 1503,
        "typeName": {
          "type": "Identifier",
          "start": 1476,
          "end": 1495,
          "decorators": [],
          "name": "AddMixedConditional",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1495,
          "end": 1503,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 1496,
              "end": 1502
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1506,
      "end": 1645,
      "id": {
        "type": "Identifier",
        "start": 1523,
        "end": 1527,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1527,
        "end": 1557,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1528,
            "end": 1556,
            "name": {
              "type": "Identifier",
              "start": 1528,
              "end": 1529,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 1538,
              "end": 1556,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 1547,
                "end": 1556,
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 1547,
                  "end": 1554
                }
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1561,
          "end": 1639,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1564,
            "end": 1639,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 1566,
              "end": 1639,
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "start": 1572,
                  "end": 1635,
                  "typeAnnotation": {
                    "type": "TSMappedType",
                    "start": 1575,
                    "end": 1635,
                    "key": {
                      "type": "Identifier",
                      "start": 1584,
                      "end": 1585,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "start": 1589,
                      "end": 1596,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1595,
                        "end": 1596,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1595,
                          "end": 1596,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "nameType": null,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 1599,
                      "end": 1628,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 1609,
                          "end": 1620,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1609,
                            "end": 1613,
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1613,
                            "end": 1619,
                            "typeAnnotation": {
                              "type": "TSIndexedAccessType",
                              "start": 1615,
                              "end": 1619,
                              "objectType": {
                                "type": "TSTypeReference",
                                "start": 1615,
                                "end": 1616,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1615,
                                  "end": 1616,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              "indexType": {
                                "type": "TSTypeReference",
                                "start": 1617,
                                "end": 1618,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1617,
                                  "end": 1618,
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    },
                    "optional": false,
                    "readonly": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1641,
        "end": 1644,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1643,
          "end": 1644,
          "typeName": {
            "type": "Identifier",
            "start": 1643,
            "end": 1644,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1647,
      "end": 1712,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1661,
          "end": 1711,
          "id": {
            "type": "Identifier",
            "start": 1661,
            "end": 1711,
            "decorators": [],
            "name": "input",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1666,
              "end": 1711,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 1668,
                "end": 1711,
                "elementTypes": [
                  {
                    "type": "TSNamedTupleMember",
                    "start": 1669,
                    "end": 1692,
                    "label": {
                      "type": "Identifier",
                      "start": 1669,
                      "end": 1674,
                      "decorators": [],
                      "name": "first",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "elementType": {
                      "type": "TSTypeLiteral",
                      "start": 1676,
                      "end": 1692,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 1678,
                          "end": 1690,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1678,
                            "end": 1682,
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1682,
                            "end": 1690,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1684,
                              "end": 1690
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    },
                    "optional": false
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 1694,
                    "end": 1710,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1696,
                        "end": 1708,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1696,
                          "end": 1700,
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1700,
                          "end": 1708,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1702,
                            "end": 1708
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 1714,
      "end": 1741,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1720,
          "end": 1740,
          "id": {
            "type": "Identifier",
            "start": 1720,
            "end": 1726,
            "decorators": [],
            "name": "output",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1729,
            "end": 1740,
            "callee": {
              "type": "Identifier",
              "start": 1729,
              "end": 1733,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1734,
                "end": 1739,
                "decorators": [],
                "name": "input",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
