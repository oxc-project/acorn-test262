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
        "name": "SubTup2FixedLength",
        "optional": false,
        "typeAnnotation": null,
        "start": 22,
        "end": 40
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
              "start": 41,
              "end": 42
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 51,
                "end": 58
              },
              "start": 51,
              "end": 60
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 41,
            "end": 60
          }
        ],
        "start": 40,
        "end": 61
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
            "start": 64,
            "end": 65
          },
          "typeArguments": null,
          "start": 64,
          "end": 65
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 87,
                    "end": 88
                  },
                  "constraint": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 98,
                        "end": 101
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 103,
                        "end": 106
                      }
                    ],
                    "start": 97,
                    "end": 107
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 87,
                  "end": 107
                },
                "start": 81,
                "end": 107
              },
              "start": 78,
              "end": 107
            },
            {
              "type": "TSAnyKeyword",
              "start": 111,
              "end": 114
            }
          ],
          "start": 74,
          "end": 116
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 121,
            "end": 122
          },
          "typeArguments": null,
          "start": 121,
          "end": 122
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 127,
          "end": 132
        },
        "start": 64,
        "end": 132
      },
      "declare": false,
      "start": 17,
      "end": 133
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubTup2FixedLengthTest",
        "optional": false,
        "typeAnnotation": null,
        "start": 140,
        "end": 162
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SubTup2FixedLength",
          "optional": false,
          "typeAnnotation": null,
          "start": 165,
          "end": 183
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 185,
                    "end": 186
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 188,
                      "end": 189
                    },
                    "start": 188,
                    "end": 189
                  },
                  "optional": false,
                  "start": 185,
                  "end": 189
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 191,
                    "end": 192
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 194,
                      "end": 195
                    },
                    "start": 194,
                    "end": 195
                  },
                  "optional": false,
                  "start": 191,
                  "end": 195
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 197,
                    "end": 198
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 200,
                      "end": 201
                    },
                    "start": 200,
                    "end": 201
                  },
                  "optional": false,
                  "start": 197,
                  "end": 201
                }
              ],
              "start": 184,
              "end": 202
            }
          ],
          "start": 183,
          "end": 203
        },
        "start": 165,
        "end": 203
      },
      "declare": false,
      "start": 135,
      "end": 204
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubTup2Variadic",
        "optional": false,
        "typeAnnotation": null,
        "start": 211,
        "end": 226
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
              "start": 227,
              "end": 228
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 237,
                "end": 244
              },
              "start": 237,
              "end": 246
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 227,
            "end": 246
          }
        ],
        "start": 226,
        "end": 247
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
            "start": 250,
            "end": 251
          },
          "typeArguments": null,
          "start": 250,
          "end": 251
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 273,
                    "end": 274
                  },
                  "constraint": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 284,
                        "end": 287
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 289,
                        "end": 292
                      }
                    ],
                    "start": 283,
                    "end": 293
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 273,
                  "end": 293
                },
                "start": 267,
                "end": 293
              },
              "start": 264,
              "end": 293
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 300,
                "end": 303
              },
              "start": 297,
              "end": 303
            }
          ],
          "start": 260,
          "end": 305
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 310,
            "end": 311
          },
          "typeArguments": null,
          "start": 310,
          "end": 311
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 316,
          "end": 321
        },
        "start": 250,
        "end": 321
      },
      "declare": false,
      "start": 206,
      "end": 322
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubTup2VariadicTest",
        "optional": false,
        "typeAnnotation": null,
        "start": 329,
        "end": 348
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SubTup2Variadic",
          "optional": false,
          "typeAnnotation": null,
          "start": 351,
          "end": 366
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 368,
                    "end": 369
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 371,
                      "end": 372
                    },
                    "start": 371,
                    "end": 372
                  },
                  "optional": false,
                  "start": 368,
                  "end": 372
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 374,
                    "end": 375
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 377,
                      "end": 378
                    },
                    "start": 377,
                    "end": 378
                  },
                  "optional": false,
                  "start": 374,
                  "end": 378
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 383,
                      "end": 384
                    },
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 386,
                          "end": 387
                        },
                        "start": 386,
                        "end": 387
                      },
                      "start": 386,
                      "end": 389
                    },
                    "optional": false,
                    "start": 383,
                    "end": 389
                  },
                  "start": 380,
                  "end": 389
                }
              ],
              "start": 367,
              "end": 390
            }
          ],
          "start": 366,
          "end": 391
        },
        "start": 351,
        "end": 391
      },
      "declare": false,
      "start": 324,
      "end": 392
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubTup2VariadicTest2",
        "optional": false,
        "typeAnnotation": null,
        "start": 398,
        "end": 418
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SubTup2Variadic",
          "optional": false,
          "typeAnnotation": null,
          "start": 421,
          "end": 436
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 438,
                    "end": 439
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 441,
                      "end": 442
                    },
                    "start": 441,
                    "end": 442
                  },
                  "optional": false,
                  "start": 438,
                  "end": 442
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 444,
                    "end": 445
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 447,
                      "end": 448
                    },
                    "start": 447,
                    "end": 448
                  },
                  "optional": false,
                  "start": 444,
                  "end": 448
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 450,
                    "end": 451
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 453,
                      "end": 454
                    },
                    "start": 453,
                    "end": 454
                  },
                  "optional": false,
                  "start": 450,
                  "end": 454
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 459,
                      "end": 460
                    },
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 462,
                          "end": 463
                        },
                        "start": 462,
                        "end": 463
                      },
                      "start": 462,
                      "end": 465
                    },
                    "optional": false,
                    "start": 459,
                    "end": 465
                  },
                  "start": 456,
                  "end": 465
                }
              ],
              "start": 437,
              "end": 466
            }
          ],
          "start": 436,
          "end": 467
        },
        "start": 421,
        "end": 467
      },
      "declare": false,
      "start": 393,
      "end": 468
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubTup2VariadicAndRest",
        "optional": false,
        "typeAnnotation": null,
        "start": 475,
        "end": 497
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
              "start": 498,
              "end": 499
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 508,
                "end": 515
              },
              "start": 508,
              "end": 517
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 498,
            "end": 517
          }
        ],
        "start": 497,
        "end": 518
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
            "start": 521,
            "end": 522
          },
          "typeArguments": null,
          "start": 521,
          "end": 522
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 546,
                    "end": 547
                  },
                  "constraint": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 557,
                        "end": 560
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 562,
                        "end": 565
                      }
                    ],
                    "start": 556,
                    "end": 566
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 546,
                  "end": 566
                },
                "start": 540,
                "end": 566
              },
              "start": 537,
              "end": 566
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 582,
                      "end": 583
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 582,
                    "end": 583
                  },
                  "start": 576,
                  "end": 583
                },
                "start": 575,
                "end": 586
              },
              "start": 572,
              "end": 586
            }
          ],
          "start": 531,
          "end": 588
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 599,
                  "end": 600
                },
                "typeArguments": null,
                "start": 599,
                "end": 600
              },
              "start": 596,
              "end": 600
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 606,
                      "end": 607
                    },
                    "typeArguments": null,
                    "start": 606,
                    "end": 607
                  }
                ],
                "start": 605,
                "end": 608
              },
              "start": 602,
              "end": 608
            }
          ],
          "start": 595,
          "end": 609
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 616,
          "end": 621
        },
        "start": 521,
        "end": 621
      },
      "declare": false,
      "start": 470,
      "end": 622
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubTup2VariadicAndRestTest",
        "optional": false,
        "typeAnnotation": null,
        "start": 629,
        "end": 655
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SubTup2VariadicAndRest",
          "optional": false,
          "typeAnnotation": null,
          "start": 658,
          "end": 680
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 682,
                    "end": 683
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 685,
                      "end": 686
                    },
                    "start": 685,
                    "end": 686
                  },
                  "optional": false,
                  "start": 682,
                  "end": 686
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 688,
                    "end": 689
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 691,
                      "end": 692
                    },
                    "start": 691,
                    "end": 692
                  },
                  "optional": false,
                  "start": 688,
                  "end": 692
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 697,
                      "end": 698
                    },
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 700,
                          "end": 701
                        },
                        "start": 700,
                        "end": 701
                      },
                      "start": 700,
                      "end": 703
                    },
                    "optional": false,
                    "start": 697,
                    "end": 703
                  },
                  "start": 694,
                  "end": 703
                }
              ],
              "start": 681,
              "end": 704
            }
          ],
          "start": 680,
          "end": 705
        },
        "start": 658,
        "end": 705
      },
      "declare": false,
      "start": 624,
      "end": 706
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubTup2TrailingVariadic",
        "optional": false,
        "typeAnnotation": null,
        "start": 713,
        "end": 736
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
              "start": 737,
              "end": 738
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 747,
                "end": 754
              },
              "start": 747,
              "end": 756
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 737,
            "end": 756
          }
        ],
        "start": 736,
        "end": 757
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
            "start": 760,
            "end": 761
          },
          "typeArguments": null,
          "start": 760,
          "end": 761
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 777,
                "end": 780
              },
              "start": 774,
              "end": 780
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 793,
                    "end": 794
                  },
                  "constraint": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 804,
                        "end": 807
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 809,
                        "end": 812
                      }
                    ],
                    "start": 803,
                    "end": 813
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 793,
                  "end": 813
                },
                "start": 787,
                "end": 813
              },
              "start": 784,
              "end": 813
            }
          ],
          "start": 770,
          "end": 816
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 821,
            "end": 822
          },
          "typeArguments": null,
          "start": 821,
          "end": 822
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 827,
          "end": 832
        },
        "start": 760,
        "end": 832
      },
      "declare": false,
      "start": 708,
      "end": 833
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubTup2TrailingVariadicTest",
        "optional": false,
        "typeAnnotation": null,
        "start": 840,
        "end": 867
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SubTup2TrailingVariadic",
          "optional": false,
          "typeAnnotation": null,
          "start": 870,
          "end": 893
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
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 898,
                      "end": 899
                    },
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 901,
                          "end": 902
                        },
                        "start": 901,
                        "end": 902
                      },
                      "start": 901,
                      "end": 904
                    },
                    "optional": false,
                    "start": 898,
                    "end": 904
                  },
                  "start": 895,
                  "end": 904
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 906,
                    "end": 907
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 909,
                      "end": 910
                    },
                    "start": 909,
                    "end": 910
                  },
                  "optional": false,
                  "start": 906,
                  "end": 910
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 912,
                    "end": 913
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 915,
                      "end": 916
                    },
                    "start": 915,
                    "end": 916
                  },
                  "optional": false,
                  "start": 912,
                  "end": 916
                }
              ],
              "start": 894,
              "end": 917
            }
          ],
          "start": 893,
          "end": 918
        },
        "start": 870,
        "end": 918
      },
      "declare": false,
      "start": 835,
      "end": 919
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubTup2TrailingVariadicTest2",
        "optional": false,
        "typeAnnotation": null,
        "start": 925,
        "end": 953
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SubTup2TrailingVariadic",
          "optional": false,
          "typeAnnotation": null,
          "start": 956,
          "end": 979
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
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 984,
                      "end": 985
                    },
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 987,
                          "end": 988
                        },
                        "start": 987,
                        "end": 988
                      },
                      "start": 987,
                      "end": 990
                    },
                    "optional": false,
                    "start": 984,
                    "end": 990
                  },
                  "start": 981,
                  "end": 990
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 992,
                    "end": 993
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 995,
                      "end": 996
                    },
                    "start": 995,
                    "end": 996
                  },
                  "optional": false,
                  "start": 992,
                  "end": 996
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 998,
                    "end": 999
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 1001,
                      "end": 1002
                    },
                    "start": 1001,
                    "end": 1002
                  },
                  "optional": false,
                  "start": 998,
                  "end": 1002
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1004,
                    "end": 1005
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 1007,
                      "end": 1008
                    },
                    "start": 1007,
                    "end": 1008
                  },
                  "optional": false,
                  "start": 1004,
                  "end": 1008
                }
              ],
              "start": 980,
              "end": 1009
            }
          ],
          "start": 979,
          "end": 1010
        },
        "start": 956,
        "end": 1010
      },
      "declare": false,
      "start": 920,
      "end": 1011
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubTup2RestAndTrailingVariadic2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1018,
        "end": 1049
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
              "start": 1050,
              "end": 1051
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 1060,
                "end": 1067
              },
              "start": 1060,
              "end": 1069
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1050,
            "end": 1069
          }
        ],
        "start": 1049,
        "end": 1070
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
            "start": 1073,
            "end": 1074
          },
          "typeArguments": null,
          "start": 1073,
          "end": 1074
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1099,
                      "end": 1100
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1099,
                    "end": 1100
                  },
                  "start": 1093,
                  "end": 1100
                },
                "start": 1092,
                "end": 1103
              },
              "start": 1089,
              "end": 1103
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1118,
                    "end": 1119
                  },
                  "constraint": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 1129,
                        "end": 1132
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 1134,
                        "end": 1137
                      }
                    ],
                    "start": 1128,
                    "end": 1138
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1118,
                  "end": 1138
                },
                "start": 1112,
                "end": 1138
              },
              "start": 1109,
              "end": 1138
            }
          ],
          "start": 1083,
          "end": 1141
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1149,
                "end": 1150
              },
              "typeArguments": null,
              "start": 1149,
              "end": 1150
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1155,
                  "end": 1156
                },
                "typeArguments": null,
                "start": 1155,
                "end": 1156
              },
              "start": 1152,
              "end": 1156
            }
          ],
          "start": 1148,
          "end": 1157
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1164,
          "end": 1169
        },
        "start": 1073,
        "end": 1169
      },
      "declare": false,
      "start": 1013,
      "end": 1170
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubTup2RestAndTrailingVariadic2Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 1177,
        "end": 1212
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SubTup2RestAndTrailingVariadic2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1215,
          "end": 1246
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
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1251,
                      "end": 1252
                    },
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1254,
                          "end": 1255
                        },
                        "start": 1254,
                        "end": 1255
                      },
                      "start": 1254,
                      "end": 1257
                    },
                    "optional": false,
                    "start": 1251,
                    "end": 1257
                  },
                  "start": 1248,
                  "end": 1257
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1259,
                    "end": 1260
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1262,
                      "end": 1263
                    },
                    "start": 1262,
                    "end": 1263
                  },
                  "optional": false,
                  "start": 1259,
                  "end": 1263
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1265,
                    "end": 1266
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 1268,
                      "end": 1269
                    },
                    "start": 1268,
                    "end": 1269
                  },
                  "optional": false,
                  "start": 1265,
                  "end": 1269
                }
              ],
              "start": 1247,
              "end": 1270
            }
          ],
          "start": 1246,
          "end": 1271
        },
        "start": 1215,
        "end": 1271
      },
      "declare": false,
      "start": 1172,
      "end": 1272
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubTup2VariadicWithLeadingFixedElements",
        "optional": false,
        "typeAnnotation": null,
        "start": 1279,
        "end": 1318
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
              "start": 1319,
              "end": 1320
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 1329,
                "end": 1336
              },
              "start": 1329,
              "end": 1338
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1319,
            "end": 1338
          }
        ],
        "start": 1318,
        "end": 1339
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
            "start": 1342,
            "end": 1343
          },
          "typeArguments": null,
          "start": 1342,
          "end": 1343
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSAnyKeyword",
              "start": 1356,
              "end": 1359
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1372,
                    "end": 1373
                  },
                  "constraint": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 1383,
                        "end": 1386
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 1388,
                        "end": 1391
                      }
                    ],
                    "start": 1382,
                    "end": 1392
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1372,
                  "end": 1392
                },
                "start": 1366,
                "end": 1392
              },
              "start": 1363,
              "end": 1392
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1399,
                "end": 1402
              },
              "start": 1396,
              "end": 1402
            }
          ],
          "start": 1352,
          "end": 1404
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 1409,
            "end": 1410
          },
          "typeArguments": null,
          "start": 1409,
          "end": 1410
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1415,
          "end": 1420
        },
        "start": 1342,
        "end": 1420
      },
      "declare": false,
      "start": 1274,
      "end": 1421
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubTup2VariadicWithLeadingFixedElementsTest",
        "optional": false,
        "typeAnnotation": null,
        "start": 1428,
        "end": 1471
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SubTup2VariadicWithLeadingFixedElements",
          "optional": false,
          "typeAnnotation": null,
          "start": 1474,
          "end": 1513
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1515,
                    "end": 1516
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 1518,
                      "end": 1519
                    },
                    "start": 1518,
                    "end": 1519
                  },
                  "optional": false,
                  "start": 1515,
                  "end": 1519
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1521,
                    "end": 1522
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1524,
                      "end": 1525
                    },
                    "start": 1524,
                    "end": 1525
                  },
                  "optional": false,
                  "start": 1521,
                  "end": 1525
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1527,
                    "end": 1528
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 1530,
                      "end": 1531
                    },
                    "start": 1530,
                    "end": 1531
                  },
                  "optional": false,
                  "start": 1527,
                  "end": 1531
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1536,
                      "end": 1537
                    },
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 1539,
                          "end": 1540
                        },
                        "start": 1539,
                        "end": 1540
                      },
                      "start": 1539,
                      "end": 1542
                    },
                    "optional": false,
                    "start": 1536,
                    "end": 1542
                  },
                  "start": 1533,
                  "end": 1542
                }
              ],
              "start": 1514,
              "end": 1543
            }
          ],
          "start": 1513,
          "end": 1544
        },
        "start": 1474,
        "end": 1544
      },
      "declare": false,
      "start": 1423,
      "end": 1545
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubTup2VariadicWithLeadingFixedElementsTest2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1551,
        "end": 1595
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SubTup2VariadicWithLeadingFixedElements",
          "optional": false,
          "typeAnnotation": null,
          "start": 1598,
          "end": 1637
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1639,
                    "end": 1640
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 1642,
                      "end": 1643
                    },
                    "start": 1642,
                    "end": 1643
                  },
                  "optional": false,
                  "start": 1639,
                  "end": 1643
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1645,
                    "end": 1646
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1648,
                      "end": 1649
                    },
                    "start": 1648,
                    "end": 1649
                  },
                  "optional": false,
                  "start": 1645,
                  "end": 1649
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1651,
                    "end": 1652
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 1654,
                      "end": 1655
                    },
                    "start": 1654,
                    "end": 1655
                  },
                  "optional": false,
                  "start": 1651,
                  "end": 1655
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1657,
                    "end": 1658
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 1660,
                      "end": 1661
                    },
                    "start": 1660,
                    "end": 1661
                  },
                  "optional": false,
                  "start": 1657,
                  "end": 1661
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1666,
                      "end": 1667
                    },
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 4,
                          "raw": "4",
                          "start": 1669,
                          "end": 1670
                        },
                        "start": 1669,
                        "end": 1670
                      },
                      "start": 1669,
                      "end": 1672
                    },
                    "optional": false,
                    "start": 1666,
                    "end": 1672
                  },
                  "start": 1663,
                  "end": 1672
                }
              ],
              "start": 1638,
              "end": 1673
            }
          ],
          "start": 1637,
          "end": 1674
        },
        "start": 1598,
        "end": 1674
      },
      "declare": false,
      "start": 1546,
      "end": 1675
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubTup2TrailingVariadicWithTrailingFixedElements",
        "optional": false,
        "typeAnnotation": null,
        "start": 1682,
        "end": 1730
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
              "start": 1731,
              "end": 1732
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 1741,
                "end": 1748
              },
              "start": 1741,
              "end": 1750
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1731,
            "end": 1750
          }
        ],
        "start": 1730,
        "end": 1751
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
            "start": 1754,
            "end": 1755
          },
          "typeArguments": null,
          "start": 1754,
          "end": 1755
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1771,
                "end": 1774
              },
              "start": 1768,
              "end": 1774
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1787,
                    "end": 1788
                  },
                  "constraint": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 1798,
                        "end": 1801
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 1803,
                        "end": 1806
                      }
                    ],
                    "start": 1797,
                    "end": 1807
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1787,
                  "end": 1807
                },
                "start": 1781,
                "end": 1807
              },
              "start": 1778,
              "end": 1807
            },
            {
              "type": "TSAnyKeyword",
              "start": 1811,
              "end": 1814
            }
          ],
          "start": 1764,
          "end": 1817
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 1822,
            "end": 1823
          },
          "typeArguments": null,
          "start": 1822,
          "end": 1823
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1828,
          "end": 1833
        },
        "start": 1754,
        "end": 1833
      },
      "declare": false,
      "start": 1677,
      "end": 1834
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubTup2TrailingVariadicWithTrailingFixedElementsTest",
        "optional": false,
        "typeAnnotation": null,
        "start": 1841,
        "end": 1893
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SubTup2TrailingVariadicWithTrailingFixedElements",
          "optional": false,
          "typeAnnotation": null,
          "start": 1896,
          "end": 1944
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
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1949,
                      "end": 1950
                    },
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1952,
                          "end": 1953
                        },
                        "start": 1952,
                        "end": 1953
                      },
                      "start": 1952,
                      "end": 1955
                    },
                    "optional": false,
                    "start": 1949,
                    "end": 1955
                  },
                  "start": 1946,
                  "end": 1955
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1957,
                    "end": 1958
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1960,
                      "end": 1961
                    },
                    "start": 1960,
                    "end": 1961
                  },
                  "optional": false,
                  "start": 1957,
                  "end": 1961
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1963,
                    "end": 1964
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 1966,
                      "end": 1967
                    },
                    "start": 1966,
                    "end": 1967
                  },
                  "optional": false,
                  "start": 1963,
                  "end": 1967
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1969,
                    "end": 1970
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 1972,
                      "end": 1973
                    },
                    "start": 1972,
                    "end": 1973
                  },
                  "optional": false,
                  "start": 1969,
                  "end": 1973
                }
              ],
              "start": 1945,
              "end": 1974
            }
          ],
          "start": 1944,
          "end": 1975
        },
        "start": 1896,
        "end": 1975
      },
      "declare": false,
      "start": 1836,
      "end": 1976
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubTup2TrailingVariadicWithTrailingFixedElementsTest2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1982,
        "end": 2035
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SubTup2TrailingVariadicWithTrailingFixedElements",
          "optional": false,
          "typeAnnotation": null,
          "start": 2038,
          "end": 2086
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
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2091,
                      "end": 2092
                    },
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 2094,
                          "end": 2095
                        },
                        "start": 2094,
                        "end": 2095
                      },
                      "start": 2094,
                      "end": 2097
                    },
                    "optional": false,
                    "start": 2091,
                    "end": 2097
                  },
                  "start": 2088,
                  "end": 2097
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2099,
                    "end": 2100
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2102,
                      "end": 2103
                    },
                    "start": 2102,
                    "end": 2103
                  },
                  "optional": false,
                  "start": 2099,
                  "end": 2103
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2105,
                    "end": 2106
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 2108,
                      "end": 2109
                    },
                    "start": 2108,
                    "end": 2109
                  },
                  "optional": false,
                  "start": 2105,
                  "end": 2109
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2111,
                    "end": 2112
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 2114,
                      "end": 2115
                    },
                    "start": 2114,
                    "end": 2115
                  },
                  "optional": false,
                  "start": 2111,
                  "end": 2115
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2117,
                    "end": 2118
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 2120,
                      "end": 2121
                    },
                    "start": 2120,
                    "end": 2121
                  },
                  "optional": false,
                  "start": 2117,
                  "end": 2121
                }
              ],
              "start": 2087,
              "end": 2122
            }
          ],
          "start": 2086,
          "end": 2123
        },
        "start": 2038,
        "end": 2123
      },
      "declare": false,
      "start": 1977,
      "end": 2124
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 17,
  "end": 2124
}
```
