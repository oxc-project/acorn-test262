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
        "name": "_BuildPowersOf2LengthArrays",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 32
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Length",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 44
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 53,
              "end": 59
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 38,
            "end": 59
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "AccumulatedArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 81
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNeverKeyword",
                  "start": 90,
                  "end": 95
                },
                "start": 90,
                "end": 97
              },
              "start": 90,
              "end": 99
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 65,
            "end": 99
          }
        ],
        "start": 32,
        "end": 102
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AccumulatedArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 105,
                "end": 121
              },
              "typeArguments": null,
              "start": 105,
              "end": 121
            },
            "indexType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 122,
                "end": 123
              },
              "start": 122,
              "end": 123
            },
            "start": 105,
            "end": 124
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Length",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 131
            },
            "typeArguments": null,
            "start": 125,
            "end": 131
          },
          "start": 105,
          "end": 132
        },
        "extendsType": {
          "type": "TSNeverKeyword",
          "start": 141,
          "end": 146
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AccumulatedArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 153,
            "end": 169
          },
          "typeArguments": null,
          "start": 153,
          "end": 169
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "_BuildPowersOf2LengthArrays",
            "optional": false,
            "typeAnnotation": null,
            "start": 176,
            "end": 203
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 213,
                  "end": 219
                },
                "typeArguments": null,
                "start": 213,
                "end": 219
              },
              {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSRestType",
                        "typeAnnotation": {
                          "type": "TSIndexedAccessType",
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AccumulatedArray",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 234,
                              "end": 250
                            },
                            "typeArguments": null,
                            "start": 234,
                            "end": 250
                          },
                          "indexType": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 251,
                              "end": 252
                            },
                            "start": 251,
                            "end": 252
                          },
                          "start": 234,
                          "end": 253
                        },
                        "start": 231,
                        "end": 253
                      },
                      {
                        "type": "TSRestType",
                        "typeAnnotation": {
                          "type": "TSIndexedAccessType",
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AccumulatedArray",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 258,
                              "end": 274
                            },
                            "typeArguments": null,
                            "start": 258,
                            "end": 274
                          },
                          "indexType": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 275,
                              "end": 276
                            },
                            "start": 275,
                            "end": 276
                          },
                          "start": 258,
                          "end": 277
                        },
                        "start": 255,
                        "end": 277
                      }
                    ],
                    "start": 230,
                    "end": 278
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AccumulatedArray",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 283,
                        "end": 299
                      },
                      "typeArguments": null,
                      "start": 283,
                      "end": 299
                    },
                    "start": 280,
                    "end": 299
                  }
                ],
                "start": 229,
                "end": 300
              }
            ],
            "start": 203,
            "end": 306
          },
          "start": 176,
          "end": 306
        },
        "start": 105,
        "end": 306
      },
      "declare": false,
      "start": 0,
      "end": 307
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_ConcatLargestUntilDone",
        "optional": false,
        "typeAnnotation": null,
        "start": 314,
        "end": 337
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Length",
              "optional": false,
              "typeAnnotation": null,
              "start": 343,
              "end": 349
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 358,
              "end": 364
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 343,
            "end": 364
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "AccumulatedArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 370,
              "end": 386
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNeverKeyword",
                  "start": 395,
                  "end": 400
                },
                "start": 395,
                "end": 402
              },
              "start": 395,
              "end": 404
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 370,
            "end": 404
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "NextArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 410,
              "end": 419
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNeverKeyword",
                "start": 428,
                "end": 433
              },
              "start": 428,
              "end": 435
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 410,
            "end": 435
          }
        ],
        "start": 337,
        "end": 438
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "NextArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 441,
              "end": 450
            },
            "typeArguments": null,
            "start": 441,
            "end": 450
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "length",
              "raw": "'length'",
              "start": 451,
              "end": 459
            },
            "start": 451,
            "end": 459
          },
          "start": 441,
          "end": 460
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Length",
            "optional": false,
            "typeAnnotation": null,
            "start": 469,
            "end": 475
          },
          "typeArguments": null,
          "start": 469,
          "end": 475
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "NextArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 482,
            "end": 491
          },
          "typeArguments": null,
          "start": 482,
          "end": 491
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AccumulatedArray",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 502,
                        "end": 518
                      },
                      "typeArguments": null,
                      "start": 502,
                      "end": 518
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 519,
                        "end": 520
                      },
                      "start": 519,
                      "end": 520
                    },
                    "start": 502,
                    "end": 521
                  },
                  "start": 499,
                  "end": 521
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NextArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 526,
                      "end": 535
                    },
                    "typeArguments": null,
                    "start": 526,
                    "end": 535
                  },
                  "start": 523,
                  "end": 535
                }
              ],
              "start": 498,
              "end": 536
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Length",
                "optional": false,
                "typeAnnotation": null,
                "start": 537,
                "end": 543
              },
              "typeArguments": null,
              "start": 537,
              "end": 543
            },
            "start": 498,
            "end": 544
          },
          "extendsType": {
            "type": "TSNeverKeyword",
            "start": 553,
            "end": 558
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "_ConcatLargestUntilDone",
              "optional": false,
              "typeAnnotation": null,
              "start": 565,
              "end": 588
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 598,
                    "end": 604
                  },
                  "typeArguments": null,
                  "start": 598,
                  "end": 604
                },
                {
                  "type": "TSConditionalType",
                  "checkType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AccumulatedArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 614,
                      "end": 630
                    },
                    "typeArguments": null,
                    "start": 614,
                    "end": 630
                  },
                  "extendsType": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AccumulatedArray",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 640,
                            "end": 656
                          },
                          "typeArguments": null,
                          "start": 640,
                          "end": 656
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 657,
                            "end": 658
                          },
                          "start": 657,
                          "end": 658
                        },
                        "start": 640,
                        "end": 659
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
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 670,
                              "end": 671
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 670,
                            "end": 671
                          },
                          "start": 664,
                          "end": 671
                        },
                        "start": 661,
                        "end": 671
                      }
                    ],
                    "start": 639,
                    "end": 672
                  },
                  "trueType": {
                    "type": "TSConditionalType",
                    "checkType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 683,
                        "end": 684
                      },
                      "typeArguments": null,
                      "start": 683,
                      "end": 684
                    },
                    "extendsType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNeverKeyword",
                          "start": 693,
                          "end": 698
                        },
                        "start": 693,
                        "end": 700
                      },
                      "start": 693,
                      "end": 702
                    },
                    "trueType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 713,
                        "end": 714
                      },
                      "typeArguments": null,
                      "start": 713,
                      "end": 714
                    },
                    "falseType": {
                      "type": "TSNeverKeyword",
                      "start": 725,
                      "end": 730
                    },
                    "start": 683,
                    "end": 730
                  },
                  "falseType": {
                    "type": "TSNeverKeyword",
                    "start": 741,
                    "end": 746
                  },
                  "start": 614,
                  "end": 746
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NextArray",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 756,
                    "end": 765
                  },
                  "typeArguments": null,
                  "start": 756,
                  "end": 765
                }
              ],
              "start": 588,
              "end": 771
            },
            "start": 565,
            "end": 771
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "_ConcatLargestUntilDone",
              "optional": false,
              "typeAnnotation": null,
              "start": 778,
              "end": 801
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 811,
                    "end": 817
                  },
                  "typeArguments": null,
                  "start": 811,
                  "end": 817
                },
                {
                  "type": "TSConditionalType",
                  "checkType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AccumulatedArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 827,
                      "end": 843
                    },
                    "typeArguments": null,
                    "start": 827,
                    "end": 843
                  },
                  "extendsType": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AccumulatedArray",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 853,
                            "end": 869
                          },
                          "typeArguments": null,
                          "start": 853,
                          "end": 869
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 870,
                            "end": 871
                          },
                          "start": 870,
                          "end": 871
                        },
                        "start": 853,
                        "end": 872
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
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 883,
                              "end": 884
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 883,
                            "end": 884
                          },
                          "start": 877,
                          "end": 884
                        },
                        "start": 874,
                        "end": 884
                      }
                    ],
                    "start": 852,
                    "end": 885
                  },
                  "trueType": {
                    "type": "TSConditionalType",
                    "checkType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 896,
                        "end": 897
                      },
                      "typeArguments": null,
                      "start": 896,
                      "end": 897
                    },
                    "extendsType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNeverKeyword",
                          "start": 906,
                          "end": 911
                        },
                        "start": 906,
                        "end": 913
                      },
                      "start": 906,
                      "end": 915
                    },
                    "trueType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 926,
                        "end": 927
                      },
                      "typeArguments": null,
                      "start": 926,
                      "end": 927
                    },
                    "falseType": {
                      "type": "TSNeverKeyword",
                      "start": 938,
                      "end": 943
                    },
                    "start": 896,
                    "end": 943
                  },
                  "falseType": {
                    "type": "TSNeverKeyword",
                    "start": 954,
                    "end": 959
                  },
                  "start": 827,
                  "end": 959
                },
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSRestType",
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AccumulatedArray",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 973,
                            "end": 989
                          },
                          "typeArguments": null,
                          "start": 973,
                          "end": 989
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 990,
                            "end": 991
                          },
                          "start": 990,
                          "end": 991
                        },
                        "start": 973,
                        "end": 992
                      },
                      "start": 970,
                      "end": 992
                    },
                    {
                      "type": "TSRestType",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "NextArray",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 997,
                          "end": 1006
                        },
                        "typeArguments": null,
                        "start": 997,
                        "end": 1006
                      },
                      "start": 994,
                      "end": 1006
                    }
                  ],
                  "start": 969,
                  "end": 1007
                }
              ],
              "start": 801,
              "end": 1013
            },
            "start": 778,
            "end": 1013
          },
          "start": 498,
          "end": 1013
        },
        "start": 441,
        "end": 1013
      },
      "declare": false,
      "start": 309,
      "end": 1013
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_Replace",
        "optional": false,
        "typeAnnotation": null,
        "start": 1020,
        "end": 1028
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 1029,
              "end": 1030
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 1039,
                "end": 1046
              },
              "start": 1039,
              "end": 1048
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1029,
            "end": 1048
          },
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
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1050,
            "end": 1051
          }
        ],
        "start": 1028,
        "end": 1052
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 1058,
          "end": 1059
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 1069,
              "end": 1070
            },
            "typeArguments": null,
            "start": 1069,
            "end": 1070
          },
          "start": 1063,
          "end": 1070
        },
        "nameType": null,
        "typeAnnotation": {
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
        "optional": false,
        "readonly": null,
        "start": 1055,
        "end": 1076
      },
      "declare": false,
      "start": 1015,
      "end": 1077
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TupleOf",
          "optional": false,
          "typeAnnotation": null,
          "start": 1091,
          "end": 1098
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Type",
                "optional": false,
                "typeAnnotation": null,
                "start": 1099,
                "end": 1103
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1099,
              "end": 1103
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Length",
                "optional": false,
                "typeAnnotation": null,
                "start": 1105,
                "end": 1111
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 1120,
                "end": 1126
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1105,
              "end": 1126
            }
          ],
          "start": 1098,
          "end": 1127
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSNumberKeyword",
            "start": 1130,
            "end": 1136
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Length",
              "optional": false,
              "typeAnnotation": null,
              "start": 1145,
              "end": 1151
            },
            "typeArguments": null,
            "start": 1145,
            "end": 1151
          },
          "trueType": {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Type",
                "optional": false,
                "typeAnnotation": null,
                "start": 1158,
                "end": 1162
              },
              "typeArguments": null,
              "start": 1158,
              "end": 1162
            },
            "start": 1158,
            "end": 1164
          },
          "falseType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "LengthKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 1219,
                "end": 1228
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1232,
                  "end": 1238
                },
                "typeArguments": null,
                "start": 1232,
                "end": 1238
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_BuildPowersOf2LengthArrays",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1241,
                    "end": 1268
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "LengthKey",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1282,
                          "end": 1291
                        },
                        "typeArguments": null,
                        "start": 1282,
                        "end": 1291
                      },
                      {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSTupleType",
                            "elementTypes": [
                              {
                                "type": "TSNeverKeyword",
                                "start": 1307,
                                "end": 1312
                              }
                            ],
                            "start": 1306,
                            "end": 1313
                          }
                        ],
                        "start": 1305,
                        "end": 1314
                      }
                    ],
                    "start": 1268,
                    "end": 1324
                  },
                  "start": 1241,
                  "end": 1324
                },
                "extendsType": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TwoDimensionalArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1339,
                      "end": 1358
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1339,
                    "end": 1358
                  },
                  "start": 1333,
                  "end": 1358
                },
                "trueType": {
                  "type": "TSConditionalType",
                  "checkType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TwoDimensionalArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1369,
                      "end": 1388
                    },
                    "typeArguments": null,
                    "start": 1369,
                    "end": 1388
                  },
                  "extendsType": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNeverKeyword",
                        "start": 1397,
                        "end": 1402
                      },
                      "start": 1397,
                      "end": 1404
                    },
                    "start": 1397,
                    "end": 1406
                  },
                  "trueType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_Replace",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1417,
                      "end": 1425
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_ConcatLargestUntilDone",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1426,
                            "end": 1449
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "LengthKey",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1450,
                                  "end": 1459
                                },
                                "typeArguments": null,
                                "start": 1450,
                                "end": 1459
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TwoDimensionalArray",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1461,
                                  "end": 1480
                                },
                                "typeArguments": null,
                                "start": 1461,
                                "end": 1480
                              },
                              {
                                "type": "TSTupleType",
                                "elementTypes": [],
                                "start": 1482,
                                "end": 1484
                              }
                            ],
                            "start": 1449,
                            "end": 1485
                          },
                          "start": 1426,
                          "end": 1485
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1487,
                            "end": 1491
                          },
                          "typeArguments": null,
                          "start": 1487,
                          "end": 1491
                        }
                      ],
                      "start": 1425,
                      "end": 1492
                    },
                    "start": 1417,
                    "end": 1492
                  },
                  "falseType": {
                    "type": "TSNeverKeyword",
                    "start": 1503,
                    "end": 1508
                  },
                  "start": 1369,
                  "end": 1508
                },
                "falseType": {
                  "type": "TSNeverKeyword",
                  "start": 1519,
                  "end": 1524
                },
                "start": 1241,
                "end": 1524
              },
              "optional": false,
              "readonly": null,
              "start": 1171,
              "end": 1530
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Length",
                "optional": false,
                "typeAnnotation": null,
                "start": 1531,
                "end": 1537
              },
              "typeArguments": null,
              "start": 1531,
              "end": 1537
            },
            "start": 1171,
            "end": 1538
          },
          "start": 1130,
          "end": 1538
        },
        "declare": false,
        "start": 1086,
        "end": 1539
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1079,
      "end": 1539
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Subtract",
          "optional": false,
          "typeAnnotation": null,
          "start": 1553,
          "end": 1561
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "N1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1562,
                "end": 1564
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 1573,
                "end": 1579
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1562,
              "end": 1579
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "N2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1581,
                "end": 1583
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 1592,
                "end": 1598
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1581,
              "end": 1598
            }
          ],
          "start": 1561,
          "end": 1599
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TupleOf",
              "optional": false,
              "typeAnnotation": null,
              "start": 1602,
              "end": 1609
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNeverKeyword",
                  "start": 1610,
                  "end": 1615
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1617,
                    "end": 1619
                  },
                  "typeArguments": null,
                  "start": 1617,
                  "end": 1619
                }
              ],
              "start": 1609,
              "end": 1620
            },
            "start": 1602,
            "end": 1620
          },
          "extendsType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSRestType",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TupleOf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1638,
                    "end": 1645
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNeverKeyword",
                        "start": 1646,
                        "end": 1651
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "N2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1653,
                          "end": 1655
                        },
                        "typeArguments": null,
                        "start": 1653,
                        "end": 1655
                      }
                    ],
                    "start": 1645,
                    "end": 1656
                  },
                  "start": 1638,
                  "end": 1656
                },
                "start": 1635,
                "end": 1656
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
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1671,
                      "end": 1672
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1671,
                    "end": 1672
                  },
                  "start": 1665,
                  "end": 1672
                },
                "start": 1662,
                "end": 1672
              }
            ],
            "start": 1629,
            "end": 1675
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "R",
                "optional": false,
                "typeAnnotation": null,
                "start": 1682,
                "end": 1683
              },
              "typeArguments": null,
              "start": 1682,
              "end": 1683
            },
            "indexType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "length",
                "raw": "'length'",
                "start": 1684,
                "end": 1692
              },
              "start": 1684,
              "end": 1692
            },
            "start": 1682,
            "end": 1693
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1700,
            "end": 1705
          },
          "start": 1602,
          "end": 1705
        },
        "declare": false,
        "start": 1548,
        "end": 1706
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1541,
      "end": 1706
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Decrement",
          "optional": false,
          "typeAnnotation": null,
          "start": 1720,
          "end": 1729
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
                "start": 1730,
                "end": 1731
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 1740,
                "end": 1746
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1730,
              "end": 1746
            }
          ],
          "start": 1729,
          "end": 1747
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Subtract",
            "optional": false,
            "typeAnnotation": null,
            "start": 1750,
            "end": 1758
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
                  "start": 1759,
                  "end": 1760
                },
                "typeArguments": null,
                "start": 1759,
                "end": 1760
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1762,
                  "end": 1763
                },
                "start": 1762,
                "end": 1763
              }
            ],
            "start": 1758,
            "end": 1764
          },
          "start": 1750,
          "end": 1764
        },
        "declare": false,
        "start": 1715,
        "end": 1765
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1708,
      "end": 1765
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Add",
          "optional": false,
          "typeAnnotation": null,
          "start": 1779,
          "end": 1782
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "N1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1783,
                "end": 1785
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 1794,
                "end": 1800
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1783,
              "end": 1800
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "N2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1802,
                "end": 1804
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 1813,
                "end": 1819
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1802,
              "end": 1819
            }
          ],
          "start": 1782,
          "end": 1820
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TupleOf",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1832,
                        "end": 1839
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNeverKeyword",
                            "start": 1840,
                            "end": 1845
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "N1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1847,
                              "end": 1849
                            },
                            "typeArguments": null,
                            "start": 1847,
                            "end": 1849
                          }
                        ],
                        "start": 1839,
                        "end": 1850
                      },
                      "start": 1832,
                      "end": 1850
                    },
                    "start": 1829,
                    "end": 1850
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TupleOf",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1859,
                        "end": 1866
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNeverKeyword",
                            "start": 1867,
                            "end": 1872
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "N2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1874,
                              "end": 1876
                            },
                            "typeArguments": null,
                            "start": 1874,
                            "end": 1876
                          }
                        ],
                        "start": 1866,
                        "end": 1877
                      },
                      "start": 1859,
                      "end": 1877
                    },
                    "start": 1856,
                    "end": 1877
                  }
                ],
                "start": 1823,
                "end": 1880
              },
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "length",
                  "raw": "'length'",
                  "start": 1881,
                  "end": 1889
                },
                "start": 1881,
                "end": 1889
              },
              "start": 1823,
              "end": 1890
            },
            {
              "type": "TSNumberKeyword",
              "start": 1952,
              "end": 1958
            }
          ],
          "start": 1823,
          "end": 1958
        },
        "declare": false,
        "start": 1774,
        "end": 1959
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1767,
      "end": 1959
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_MultiAdd",
        "optional": false,
        "typeAnnotation": null,
        "start": 1966,
        "end": 1975
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Num",
              "optional": false,
              "typeAnnotation": null,
              "start": 1981,
              "end": 1984
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1993,
              "end": 1999
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1981,
            "end": 1999
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Accumulator",
              "optional": false,
              "typeAnnotation": null,
              "start": 2005,
              "end": 2016
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 2025,
              "end": 2031
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2005,
            "end": 2031
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "IterationsLeft",
              "optional": false,
              "typeAnnotation": null,
              "start": 2037,
              "end": 2051
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 2060,
              "end": 2066
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2037,
            "end": 2066
          }
        ],
        "start": 1975,
        "end": 2069
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IterationsLeft",
            "optional": false,
            "typeAnnotation": null,
            "start": 2072,
            "end": 2086
          },
          "typeArguments": null,
          "start": 2072,
          "end": 2086
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 2095,
            "end": 2096
          },
          "start": 2095,
          "end": 2096
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Accumulator",
            "optional": false,
            "typeAnnotation": null,
            "start": 2103,
            "end": 2114
          },
          "typeArguments": null,
          "start": 2103,
          "end": 2114
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "_MultiAdd",
            "optional": false,
            "typeAnnotation": null,
            "start": 2121,
            "end": 2130
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Num",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2131,
                  "end": 2134
                },
                "typeArguments": null,
                "start": 2131,
                "end": 2134
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Add",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2136,
                  "end": 2139
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2140,
                        "end": 2143
                      },
                      "typeArguments": null,
                      "start": 2140,
                      "end": 2143
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Accumulator",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2145,
                        "end": 2156
                      },
                      "typeArguments": null,
                      "start": 2145,
                      "end": 2156
                    }
                  ],
                  "start": 2139,
                  "end": 2157
                },
                "start": 2136,
                "end": 2157
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Decrement",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2159,
                  "end": 2168
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IterationsLeft",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2169,
                        "end": 2183
                      },
                      "typeArguments": null,
                      "start": 2169,
                      "end": 2183
                    }
                  ],
                  "start": 2168,
                  "end": 2184
                },
                "start": 2159,
                "end": 2184
              }
            ],
            "start": 2130,
            "end": 2185
          },
          "start": 2121,
          "end": 2185
        },
        "start": 2072,
        "end": 2185
      },
      "declare": false,
      "start": 1961,
      "end": 2185
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Multiply",
          "optional": false,
          "typeAnnotation": null,
          "start": 2199,
          "end": 2207
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "N1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2208,
                "end": 2210
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 2219,
                "end": 2225
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 2208,
              "end": 2225
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "N2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2227,
                "end": 2229
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 2238,
                "end": 2244
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 2227,
              "end": 2244
            }
          ],
          "start": 2207,
          "end": 2245
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSNumberKeyword",
            "start": 2248,
            "end": 2254
          },
          "extendsType": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2263,
                  "end": 2265
                },
                "typeArguments": null,
                "start": 2263,
                "end": 2265
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2268,
                  "end": 2270
                },
                "typeArguments": null,
                "start": 2268,
                "end": 2270
              }
            ],
            "start": 2263,
            "end": 2270
          },
          "trueType": {
            "type": "TSNumberKeyword",
            "start": 2277,
            "end": 2283
          },
          "falseType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2301,
                "end": 2303
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2307,
                  "end": 2309
                },
                "typeArguments": null,
                "start": 2307,
                "end": 2309
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSMappedType",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2315,
                    "end": 2317
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "N1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2321,
                      "end": 2323
                    },
                    "typeArguments": null,
                    "start": 2321,
                    "end": 2323
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_MultiAdd",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2326,
                      "end": 2335
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2336,
                            "end": 2338
                          },
                          "typeArguments": null,
                          "start": 2336,
                          "end": 2338
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 2340,
                            "end": 2341
                          },
                          "start": 2340,
                          "end": 2341
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "N2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2343,
                            "end": 2345
                          },
                          "typeArguments": null,
                          "start": 2343,
                          "end": 2345
                        }
                      ],
                      "start": 2335,
                      "end": 2346
                    },
                    "start": 2326,
                    "end": 2346
                  },
                  "optional": false,
                  "readonly": null,
                  "start": 2312,
                  "end": 2348
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2349,
                    "end": 2351
                  },
                  "typeArguments": null,
                  "start": 2349,
                  "end": 2351
                },
                "start": 2312,
                "end": 2352
              },
              "optional": false,
              "readonly": null,
              "start": 2290,
              "end": 2358
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "N2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2359,
                "end": 2361
              },
              "typeArguments": null,
              "start": 2359,
              "end": 2361
            },
            "start": 2290,
            "end": 2362
          },
          "start": 2248,
          "end": 2362
        },
        "declare": false,
        "start": 2194,
        "end": 2362
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2187,
      "end": 2362
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PowerTailRec",
        "optional": false,
        "typeAnnotation": null,
        "start": 2369,
        "end": 2381
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Num",
              "optional": false,
              "typeAnnotation": null,
              "start": 2387,
              "end": 2390
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 2399,
              "end": 2405
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2387,
            "end": 2405
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "PowerOf",
              "optional": false,
              "typeAnnotation": null,
              "start": 2411,
              "end": 2418
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 2427,
              "end": 2433
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2411,
            "end": 2433
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Result",
              "optional": false,
              "typeAnnotation": null,
              "start": 2439,
              "end": 2445
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 2454,
              "end": 2460
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2439,
            "end": 2460
          }
        ],
        "start": 2381,
        "end": 2463
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSNumberKeyword",
          "start": 2466,
          "end": 2472
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "PowerOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 2481,
            "end": 2488
          },
          "typeArguments": null,
          "start": 2481,
          "end": 2488
        },
        "trueType": {
          "type": "TSNumberKeyword",
          "start": 2495,
          "end": 2501
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "PowerOf",
              "optional": false,
              "typeAnnotation": null,
              "start": 2508,
              "end": 2515
            },
            "typeArguments": null,
            "start": 2508,
            "end": 2515
          },
          "extendsType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2524,
              "end": 2525
            },
            "start": 2524,
            "end": 2525
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Result",
              "optional": false,
              "typeAnnotation": null,
              "start": 2532,
              "end": 2538
            },
            "typeArguments": null,
            "start": 2532,
            "end": 2538
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "PowerTailRec",
              "optional": false,
              "typeAnnotation": null,
              "start": 2545,
              "end": 2557
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Num",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2558,
                    "end": 2561
                  },
                  "typeArguments": null,
                  "start": 2558,
                  "end": 2561
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Decrement",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2563,
                    "end": 2572
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "PowerOf",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2573,
                          "end": 2580
                        },
                        "typeArguments": null,
                        "start": 2573,
                        "end": 2580
                      }
                    ],
                    "start": 2572,
                    "end": 2581
                  },
                  "start": 2563,
                  "end": 2581
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Multiply",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2583,
                    "end": 2591
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2592,
                          "end": 2598
                        },
                        "typeArguments": null,
                        "start": 2592,
                        "end": 2598
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Num",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2600,
                          "end": 2603
                        },
                        "typeArguments": null,
                        "start": 2600,
                        "end": 2603
                      }
                    ],
                    "start": 2591,
                    "end": 2604
                  },
                  "start": 2583,
                  "end": 2604
                }
              ],
              "start": 2557,
              "end": 2605
            },
            "start": 2545,
            "end": 2605
          },
          "start": 2508,
          "end": 2605
        },
        "start": 2466,
        "end": 2605
      },
      "declare": false,
      "start": 2364,
      "end": 2606
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Power",
          "optional": false,
          "typeAnnotation": null,
          "start": 2620,
          "end": 2625
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Num",
                "optional": false,
                "typeAnnotation": null,
                "start": 2626,
                "end": 2629
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 2638,
                "end": 2644
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 2626,
              "end": 2644
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "PowerOf",
                "optional": false,
                "typeAnnotation": null,
                "start": 2646,
                "end": 2653
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 2662,
                "end": 2668
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 2646,
              "end": 2668
            }
          ],
          "start": 2625,
          "end": 2669
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "PowerTailRec",
            "optional": false,
            "typeAnnotation": null,
            "start": 2672,
            "end": 2684
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Num",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2685,
                  "end": 2688
                },
                "typeArguments": null,
                "start": 2685,
                "end": 2688
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PowerOf",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2690,
                  "end": 2697
                },
                "typeArguments": null,
                "start": 2690,
                "end": 2697
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2699,
                  "end": 2700
                },
                "start": 2699,
                "end": 2700
              }
            ],
            "start": 2684,
            "end": 2701
          },
          "start": 2672,
          "end": 2701
        },
        "declare": false,
        "start": 2615,
        "end": 2702
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2608,
      "end": 2702
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 2703
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Power",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 14
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Power",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 14
          },
          "importKind": "value",
          "start": 9,
          "end": 14
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./input",
        "raw": "\"./input\"",
        "start": 22,
        "end": 31
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 32
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
              "name": "power",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 52
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Num",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 56,
                      "end": 59
                    },
                    "constraint": {
                      "type": "TSNumberKeyword",
                      "start": 68,
                      "end": 74
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 56,
                    "end": 74
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PowerOf",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 76,
                      "end": 83
                    },
                    "constraint": {
                      "type": "TSNumberKeyword",
                      "start": 92,
                      "end": 98
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 76,
                    "end": 98
                  }
                ],
                "start": 55,
                "end": 99
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "num",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 110,
                        "end": 113
                      },
                      "typeArguments": null,
                      "start": 110,
                      "end": 113
                    },
                    "start": 108,
                    "end": 113
                  },
                  "start": 105,
                  "end": 113
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "powerOf",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PowerOf",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 128,
                        "end": 135
                      },
                      "typeArguments": null,
                      "start": 128,
                      "end": 135
                    },
                    "start": 126,
                    "end": 135
                  },
                  "start": 119,
                  "end": 135
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Power",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 139,
                    "end": 144
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Num",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 145,
                          "end": 148
                        },
                        "typeArguments": null,
                        "start": 145,
                        "end": 148
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "PowerOf",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 150,
                          "end": 157
                        },
                        "typeArguments": null,
                        "start": 150,
                        "end": 157
                      }
                    ],
                    "start": 144,
                    "end": 158
                  },
                  "start": 139,
                  "end": 158
                },
                "start": 137,
                "end": 158
              },
              "body": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "num",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 163,
                    "end": 166
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "powerOf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 170,
                    "end": 177
                  },
                  "start": 163,
                  "end": 177
                },
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 182,
                  "end": 187
                },
                "start": 162,
                "end": 187
              },
              "id": null,
              "generator": false,
              "start": 55,
              "end": 187
            },
            "definite": false,
            "start": 47,
            "end": 187
          }
        ],
        "declare": false,
        "start": 41,
        "end": 188
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 34,
      "end": 188
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 188
}
```
