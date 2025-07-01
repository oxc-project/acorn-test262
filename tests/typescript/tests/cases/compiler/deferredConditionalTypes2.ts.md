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
        "name": "PositiveInfinity",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 78
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSLiteralType",
        "literal": {
          "type": "Literal",
          "value": 1e+400,
          "raw": "1e999",
          "start": 81,
          "end": 86
        },
        "start": 81,
        "end": 86
      },
      "declare": false,
      "start": 57,
      "end": 87
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NegativeInfinity",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 109
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSLiteralType",
        "literal": {
          "type": "UnaryExpression",
          "operator": "-",
          "argument": {
            "type": "Literal",
            "value": 1e+400,
            "raw": "1e999",
            "start": 113,
            "end": 118
          },
          "prefix": true,
          "start": 112,
          "end": 118
        },
        "start": 112,
        "end": 118
      },
      "declare": false,
      "start": 88,
      "end": 119
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IsEqual",
          "optional": false,
          "typeAnnotation": null,
          "start": 133,
          "end": 140
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 141,
                "end": 142
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 141,
              "end": 142
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 144,
                "end": 145
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 144,
              "end": 145
            }
          ],
          "start": 140,
          "end": 146
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSFunctionType",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "G",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 151,
                    "end": 152
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 151,
                  "end": 152
                }
              ],
              "start": 150,
              "end": 153
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "G",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 159,
                    "end": 160
                  },
                  "typeArguments": null,
                  "start": 159,
                  "end": 160
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 169,
                    "end": 170
                  },
                  "typeArguments": null,
                  "start": 169,
                  "end": 170
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 173,
                    "end": 174
                  },
                  "start": 173,
                  "end": 174
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 177,
                    "end": 178
                  },
                  "start": 177,
                  "end": 178
                },
                "start": 159,
                "end": 178
              },
              "start": 156,
              "end": 178
            },
            "start": 150,
            "end": 178
          },
          "extendsType": {
            "type": "TSFunctionType",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "G",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 192,
                    "end": 193
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 192,
                  "end": 193
                }
              ],
              "start": 188,
              "end": 196
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "G",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 202,
                    "end": 203
                  },
                  "typeArguments": null,
                  "start": 202,
                  "end": 203
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 212,
                    "end": 213
                  },
                  "typeArguments": null,
                  "start": 212,
                  "end": 213
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 216,
                    "end": 217
                  },
                  "start": 216,
                  "end": 217
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 220,
                    "end": 221
                  },
                  "start": 220,
                  "end": 221
                },
                "start": 202,
                "end": 221
              },
              "start": 199,
              "end": 221
            },
            "start": 188,
            "end": 221
          },
          "trueType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 226,
              "end": 230
            },
            "start": 226,
            "end": 230
          },
          "falseType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 235,
              "end": 240
            },
            "start": 235,
            "end": 240
          },
          "start": 149,
          "end": 240
        },
        "declare": false,
        "start": 128,
        "end": 241
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 121,
      "end": 241
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
          "start": 255,
          "end": 258
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 259,
                "end": 260
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 269,
                "end": 275
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 259,
              "end": 275
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 277,
                "end": 278
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 287,
                "end": 293
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 277,
              "end": 293
            }
          ],
          "start": 258,
          "end": 294
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IsEqual",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 301,
                  "end": 308
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
                        "start": 309,
                        "end": 310
                      },
                      "typeArguments": null,
                      "start": 309,
                      "end": 310
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PositiveInfinity",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 312,
                        "end": 328
                      },
                      "typeArguments": null,
                      "start": 312,
                      "end": 328
                    }
                  ],
                  "start": 308,
                  "end": 329
                },
                "start": 301,
                "end": 329
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IsEqual",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 333,
                  "end": 340
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
                        "start": 341,
                        "end": 342
                      },
                      "typeArguments": null,
                      "start": 341,
                      "end": 342
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NegativeInfinity",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 344,
                        "end": 360
                      },
                      "typeArguments": null,
                      "start": 344,
                      "end": 360
                    }
                  ],
                  "start": 340,
                  "end": 361
                },
                "start": 333,
                "end": 361
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IsEqual",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 365,
                  "end": 372
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 373,
                        "end": 374
                      },
                      "typeArguments": null,
                      "start": 373,
                      "end": 374
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PositiveInfinity",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 376,
                        "end": 392
                      },
                      "typeArguments": null,
                      "start": 376,
                      "end": 392
                    }
                  ],
                  "start": 372,
                  "end": 393
                },
                "start": 365,
                "end": 393
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IsEqual",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 397,
                  "end": 404
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 405,
                        "end": 406
                      },
                      "typeArguments": null,
                      "start": 405,
                      "end": 406
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NegativeInfinity",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 408,
                        "end": 424
                      },
                      "typeArguments": null,
                      "start": 408,
                      "end": 424
                    }
                  ],
                  "start": 404,
                  "end": 425
                },
                "start": 397,
                "end": 425
              }
            ],
            "start": 297,
            "end": 428
          },
          "extendsType": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "R",
                "optional": false,
                "typeAnnotation": null,
                "start": 443,
                "end": 444
              },
              "constraint": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 454,
                    "end": 461
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 463,
                    "end": 470
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 472,
                    "end": 479
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 481,
                    "end": 488
                  }
                ],
                "start": 453,
                "end": 489
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 443,
              "end": 489
            },
            "start": 437,
            "end": 489
          },
          "trueType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 495,
                    "end": 499
                  },
                  "start": 495,
                  "end": 499
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 501,
                    "end": 506
                  },
                  "start": 501,
                  "end": 506
                }
              ],
              "start": 494,
              "end": 507
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
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 518,
                      "end": 519
                    },
                    "typeArguments": null,
                    "start": 518,
                    "end": 519
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 520,
                      "end": 521
                    },
                    "start": 520,
                    "end": 521
                  },
                  "start": 518,
                  "end": 522
                },
                {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 524,
                      "end": 525
                    },
                    "typeArguments": null,
                    "start": 524,
                    "end": 525
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 526,
                      "end": 527
                    },
                    "start": 526,
                    "end": 527
                  },
                  "start": 524,
                  "end": 528
                }
              ],
              "start": 517,
              "end": 529
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PositiveInfinity",
                "optional": false,
                "typeAnnotation": null,
                "start": 537,
                "end": 553
              },
              "typeArguments": null,
              "start": 537,
              "end": 553
            },
            "falseType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "failed",
                "raw": "\"failed\"",
                "start": 560,
                "end": 568
              },
              "start": 560,
              "end": 568
            },
            "start": 494,
            "end": 568
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 573,
            "end": 578
          },
          "start": 297,
          "end": 578
        },
        "declare": false,
        "start": 250,
        "end": 579
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 243,
      "end": 579
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "AddWithoutParentheses",
          "optional": false,
          "typeAnnotation": null,
          "start": 593,
          "end": 614
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 615,
                "end": 616
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 625,
                "end": 631
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 615,
              "end": 631
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 633,
                "end": 634
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 643,
                "end": 649
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 633,
              "end": 649
            }
          ],
          "start": 614,
          "end": 650
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IsEqual",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 657,
                  "end": 664
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
                        "start": 665,
                        "end": 666
                      },
                      "typeArguments": null,
                      "start": 665,
                      "end": 666
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PositiveInfinity",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 668,
                        "end": 684
                      },
                      "typeArguments": null,
                      "start": 668,
                      "end": 684
                    }
                  ],
                  "start": 664,
                  "end": 685
                },
                "start": 657,
                "end": 685
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IsEqual",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 689,
                  "end": 696
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
                        "start": 697,
                        "end": 698
                      },
                      "typeArguments": null,
                      "start": 697,
                      "end": 698
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NegativeInfinity",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 700,
                        "end": 716
                      },
                      "typeArguments": null,
                      "start": 700,
                      "end": 716
                    }
                  ],
                  "start": 696,
                  "end": 717
                },
                "start": 689,
                "end": 717
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IsEqual",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 721,
                  "end": 728
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 729,
                        "end": 730
                      },
                      "typeArguments": null,
                      "start": 729,
                      "end": 730
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PositiveInfinity",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 732,
                        "end": 748
                      },
                      "typeArguments": null,
                      "start": 732,
                      "end": 748
                    }
                  ],
                  "start": 728,
                  "end": 749
                },
                "start": 721,
                "end": 749
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IsEqual",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 753,
                  "end": 760
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 761,
                        "end": 762
                      },
                      "typeArguments": null,
                      "start": 761,
                      "end": 762
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NegativeInfinity",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 764,
                        "end": 780
                      },
                      "typeArguments": null,
                      "start": 764,
                      "end": 780
                    }
                  ],
                  "start": 760,
                  "end": 781
                },
                "start": 753,
                "end": 781
              }
            ],
            "start": 653,
            "end": 784
          },
          "extendsType": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "R",
                "optional": false,
                "typeAnnotation": null,
                "start": 799,
                "end": 800
              },
              "constraint": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 810,
                    "end": 817
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 819,
                    "end": 826
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 828,
                    "end": 835
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 837,
                    "end": 844
                  }
                ],
                "start": 809,
                "end": 845
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 799,
              "end": 845
            },
            "start": 793,
            "end": 845
          },
          "trueType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 851,
                    "end": 855
                  },
                  "start": 851,
                  "end": 855
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 857,
                    "end": 862
                  },
                  "start": 857,
                  "end": 862
                }
              ],
              "start": 850,
              "end": 863
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
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 873,
                      "end": 874
                    },
                    "typeArguments": null,
                    "start": 873,
                    "end": 874
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 875,
                      "end": 876
                    },
                    "start": 875,
                    "end": 876
                  },
                  "start": 873,
                  "end": 877
                },
                {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 879,
                      "end": 880
                    },
                    "typeArguments": null,
                    "start": 879,
                    "end": 880
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 881,
                      "end": 882
                    },
                    "start": 881,
                    "end": 882
                  },
                  "start": 879,
                  "end": 883
                }
              ],
              "start": 872,
              "end": 884
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PositiveInfinity",
                "optional": false,
                "typeAnnotation": null,
                "start": 891,
                "end": 907
              },
              "typeArguments": null,
              "start": 891,
              "end": 907
            },
            "falseType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "failed",
                "raw": "\"failed\"",
                "start": 914,
                "end": 922
              },
              "start": 914,
              "end": 922
            },
            "start": 850,
            "end": 922
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 927,
            "end": 932
          },
          "start": 653,
          "end": 932
        },
        "declare": false,
        "start": 588,
        "end": 933
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 581,
      "end": 933
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AddTest0",
        "optional": false,
        "typeAnnotation": null,
        "start": 940,
        "end": 948
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Add",
          "optional": false,
          "typeAnnotation": null,
          "start": 951,
          "end": 954
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PositiveInfinity",
                "optional": false,
                "typeAnnotation": null,
                "start": 955,
                "end": 971
              },
              "typeArguments": null,
              "start": 955,
              "end": 971
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PositiveInfinity",
                "optional": false,
                "typeAnnotation": null,
                "start": 973,
                "end": 989
              },
              "typeArguments": null,
              "start": 973,
              "end": 989
            }
          ],
          "start": 954,
          "end": 990
        },
        "start": 951,
        "end": 990
      },
      "declare": false,
      "start": 935,
      "end": 991
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AddTest1",
        "optional": false,
        "typeAnnotation": null,
        "start": 997,
        "end": 1005
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "AddWithoutParentheses",
          "optional": false,
          "typeAnnotation": null,
          "start": 1008,
          "end": 1029
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PositiveInfinity",
                "optional": false,
                "typeAnnotation": null,
                "start": 1030,
                "end": 1046
              },
              "typeArguments": null,
              "start": 1030,
              "end": 1046
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PositiveInfinity",
                "optional": false,
                "typeAnnotation": null,
                "start": 1048,
                "end": 1064
              },
              "typeArguments": null,
              "start": 1048,
              "end": 1064
            }
          ],
          "start": 1029,
          "end": 1065
        },
        "start": 1008,
        "end": 1065
      },
      "declare": false,
      "start": 992,
      "end": 1066
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 1066
}
```
