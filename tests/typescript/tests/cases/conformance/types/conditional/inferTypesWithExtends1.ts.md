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
        "name": "X1",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 33
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
              "start": 34,
              "end": 35
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 44,
                "end": 47
              },
              "start": 44,
              "end": 49
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 34,
            "end": 49
          }
        ],
        "start": 33,
        "end": 50
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
            "start": 57,
            "end": 58
          },
          "typeArguments": null,
          "start": 57,
          "end": 58
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
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
                  "start": 74,
                  "end": 75
                },
                "constraint": {
                  "type": "TSStringKeyword",
                  "start": 84,
                  "end": 90
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 74,
                "end": 90
              },
              "start": 68,
              "end": 90
            }
          ],
          "start": 67,
          "end": 91
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 95,
                "end": 103
              },
              "start": 95,
              "end": 103
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 105,
                "end": 106
              },
              "typeArguments": null,
              "start": 105,
              "end": 106
            }
          ],
          "start": 94,
          "end": 107
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 115
            },
            "typeArguments": null,
            "start": 114,
            "end": 115
          },
          "extendsType": {
            "type": "TSTupleType",
            "elementTypes": [
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
                    "start": 131,
                    "end": 132
                  },
                  "constraint": {
                    "type": "TSNumberKeyword",
                    "start": 141,
                    "end": 147
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 131,
                  "end": 147
                },
                "start": 125,
                "end": 147
              }
            ],
            "start": 124,
            "end": 148
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "\"number\"",
                  "start": 152,
                  "end": 160
                },
                "start": 152,
                "end": 160
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 162,
                  "end": 163
                },
                "typeArguments": null,
                "start": 162,
                "end": 163
              }
            ],
            "start": 151,
            "end": 164
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 171,
            "end": 176
          },
          "start": 114,
          "end": 176
        },
        "start": 57,
        "end": 176
      },
      "declare": false,
      "start": 26,
      "end": 177
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X1_T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 184,
        "end": 189
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X1",
          "optional": false,
          "typeAnnotation": null,
          "start": 192,
          "end": 194
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 196,
                    "end": 199
                  },
                  "start": 196,
                  "end": 199
                }
              ],
              "start": 195,
              "end": 200
            }
          ],
          "start": 194,
          "end": 201
        },
        "start": 192,
        "end": 201
      },
      "declare": false,
      "start": 179,
      "end": 202
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X1_T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 227,
        "end": 232
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X1",
          "optional": false,
          "typeAnnotation": null,
          "start": 235,
          "end": 237
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 239,
                    "end": 240
                  },
                  "start": 239,
                  "end": 240
                }
              ],
              "start": 238,
              "end": 241
            }
          ],
          "start": 237,
          "end": 242
        },
        "start": 235,
        "end": 242
      },
      "declare": false,
      "start": 222,
      "end": 243
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X1_T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 266,
        "end": 271
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X1",
          "optional": false,
          "typeAnnotation": null,
          "start": 274,
          "end": 276
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSObjectKeyword",
                  "start": 278,
                  "end": 284
                }
              ],
              "start": 277,
              "end": 285
            }
          ],
          "start": 276,
          "end": 286
        },
        "start": 274,
        "end": 286
      },
      "declare": false,
      "start": 261,
      "end": 287
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X2",
        "optional": false,
        "typeAnnotation": null,
        "start": 324,
        "end": 326
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
              "start": 327,
              "end": 328
            },
            "constraint": {
              "type": "TSFunctionType",
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
                    "start": 341,
                    "end": 345
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 347,
                        "end": 350
                      },
                      "start": 347,
                      "end": 352
                    },
                    "start": 345,
                    "end": 352
                  },
                  "value": null,
                  "start": 338,
                  "end": 352
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 357,
                  "end": 361
                },
                "start": 354,
                "end": 361
              },
              "start": 337,
              "end": 361
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 327,
            "end": 361
          }
        ],
        "start": 326,
        "end": 362
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
            "start": 369,
            "end": 370
          },
          "typeArguments": null,
          "start": 369,
          "end": 370
        },
        "extendsType": {
          "type": "TSFunctionType",
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
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 389,
                      "end": 390
                    },
                    "constraint": {
                      "type": "TSStringKeyword",
                      "start": 399,
                      "end": 405
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 389,
                    "end": 405
                  },
                  "start": 383,
                  "end": 405
                },
                "start": 381,
                "end": 405
              },
              "start": 380,
              "end": 405
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 410,
              "end": 414
            },
            "start": 407,
            "end": 414
          },
          "start": 379,
          "end": 414
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 418,
                "end": 426
              },
              "start": 418,
              "end": 426
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 428,
                "end": 429
              },
              "typeArguments": null,
              "start": 428,
              "end": 429
            }
          ],
          "start": 417,
          "end": 430
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 437,
              "end": 438
            },
            "typeArguments": null,
            "start": 437,
            "end": 438
          },
          "extendsType": {
            "type": "TSFunctionType",
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
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 457,
                        "end": 458
                      },
                      "constraint": {
                        "type": "TSNumberKeyword",
                        "start": 467,
                        "end": 473
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 457,
                      "end": 473
                    },
                    "start": 451,
                    "end": 473
                  },
                  "start": 449,
                  "end": 473
                },
                "start": 448,
                "end": 473
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 478,
                "end": 482
              },
              "start": 475,
              "end": 482
            },
            "start": 447,
            "end": 482
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "\"number\"",
                  "start": 486,
                  "end": 494
                },
                "start": 486,
                "end": 494
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 496,
                  "end": 497
                },
                "typeArguments": null,
                "start": 496,
                "end": 497
              }
            ],
            "start": 485,
            "end": 498
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 505,
            "end": 510
          },
          "start": 437,
          "end": 510
        },
        "start": 369,
        "end": 510
      },
      "declare": false,
      "start": 319,
      "end": 511
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X2_T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 518,
        "end": 523
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X2",
          "optional": false,
          "typeAnnotation": null,
          "start": 526,
          "end": 528
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
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
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 533,
                        "end": 536
                      },
                      "start": 533,
                      "end": 536
                    },
                    "start": 531,
                    "end": 536
                  },
                  "start": 530,
                  "end": 536
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 541,
                  "end": 545
                },
                "start": 538,
                "end": 545
              },
              "start": 529,
              "end": 545
            }
          ],
          "start": 528,
          "end": 546
        },
        "start": 526,
        "end": 546
      },
      "declare": false,
      "start": 513,
      "end": 547
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X2_T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 572,
        "end": 577
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X2",
          "optional": false,
          "typeAnnotation": null,
          "start": 580,
          "end": 582
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
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
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 587,
                        "end": 588
                      },
                      "start": 587,
                      "end": 588
                    },
                    "start": 585,
                    "end": 588
                  },
                  "start": 584,
                  "end": 588
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 593,
                  "end": 597
                },
                "start": 590,
                "end": 597
              },
              "start": 583,
              "end": 597
            }
          ],
          "start": 582,
          "end": 598
        },
        "start": 580,
        "end": 598
      },
      "declare": false,
      "start": 567,
      "end": 599
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X2_T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 622,
        "end": 627
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X2",
          "optional": false,
          "typeAnnotation": null,
          "start": 630,
          "end": 632
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
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
                      "type": "TSObjectKeyword",
                      "start": 637,
                      "end": 643
                    },
                    "start": 635,
                    "end": 643
                  },
                  "start": 634,
                  "end": 643
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 648,
                  "end": 652
                },
                "start": 645,
                "end": 652
              },
              "start": 633,
              "end": 652
            }
          ],
          "start": 632,
          "end": 653
        },
        "start": 630,
        "end": 653
      },
      "declare": false,
      "start": 617,
      "end": 654
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X3",
        "optional": false,
        "typeAnnotation": null,
        "start": 694,
        "end": 696
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
              "start": 697,
              "end": 698
            },
            "constraint": {
              "type": "TSFunctionType",
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
                    "start": 711,
                    "end": 715
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 717,
                        "end": 720
                      },
                      "start": 717,
                      "end": 722
                    },
                    "start": 715,
                    "end": 722
                  },
                  "value": null,
                  "start": 708,
                  "end": 722
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 727,
                  "end": 730
                },
                "start": 724,
                "end": 730
              },
              "start": 707,
              "end": 730
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 697,
            "end": 730
          }
        ],
        "start": 696,
        "end": 731
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
            "start": 738,
            "end": 739
          },
          "typeArguments": null,
          "start": 738,
          "end": 739
        },
        "extendsType": {
          "type": "TSFunctionType",
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
                "start": 752,
                "end": 756
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 758,
                    "end": 761
                  },
                  "start": 758,
                  "end": 763
                },
                "start": 756,
                "end": 763
              },
              "value": null,
              "start": 749,
              "end": 763
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
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
                  "start": 775,
                  "end": 776
                },
                "constraint": {
                  "type": "TSStringKeyword",
                  "start": 785,
                  "end": 791
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 775,
                "end": 791
              },
              "start": 769,
              "end": 791
            },
            "start": 765,
            "end": 792
          },
          "start": 748,
          "end": 792
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 796,
                "end": 804
              },
              "start": 796,
              "end": 804
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 806,
                "end": 807
              },
              "typeArguments": null,
              "start": 806,
              "end": 807
            }
          ],
          "start": 795,
          "end": 808
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
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
          "extendsType": {
            "type": "TSFunctionType",
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
                  "start": 829,
                  "end": 833
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 835,
                      "end": 838
                    },
                    "start": 835,
                    "end": 840
                  },
                  "start": 833,
                  "end": 840
                },
                "value": null,
                "start": 826,
                "end": 840
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
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
                    "start": 852,
                    "end": 853
                  },
                  "constraint": {
                    "type": "TSNumberKeyword",
                    "start": 862,
                    "end": 868
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 852,
                  "end": 868
                },
                "start": 846,
                "end": 868
              },
              "start": 842,
              "end": 869
            },
            "start": 825,
            "end": 869
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "\"number\"",
                  "start": 873,
                  "end": 881
                },
                "start": 873,
                "end": 881
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 883,
                  "end": 884
                },
                "typeArguments": null,
                "start": 883,
                "end": 884
              }
            ],
            "start": 872,
            "end": 885
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 892,
            "end": 897
          },
          "start": 815,
          "end": 897
        },
        "start": 738,
        "end": 897
      },
      "declare": false,
      "start": 689,
      "end": 898
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X3_T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 905,
        "end": 910
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X3",
          "optional": false,
          "typeAnnotation": null,
          "start": 913,
          "end": 915
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 922,
                    "end": 925
                  },
                  "start": 922,
                  "end": 925
                },
                "start": 919,
                "end": 925
              },
              "start": 916,
              "end": 925
            }
          ],
          "start": 915,
          "end": 926
        },
        "start": 913,
        "end": 926
      },
      "declare": false,
      "start": 900,
      "end": 927
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X3_T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 952,
        "end": 957
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X3",
          "optional": false,
          "typeAnnotation": null,
          "start": 960,
          "end": 962
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 969,
                    "end": 970
                  },
                  "start": 969,
                  "end": 970
                },
                "start": 966,
                "end": 970
              },
              "start": 963,
              "end": 970
            }
          ],
          "start": 962,
          "end": 971
        },
        "start": 960,
        "end": 971
      },
      "declare": false,
      "start": 947,
      "end": 972
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X3_T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 995,
        "end": 1000
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1003,
          "end": 1005
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSObjectKeyword",
                  "start": 1012,
                  "end": 1018
                },
                "start": 1009,
                "end": 1018
              },
              "start": 1006,
              "end": 1018
            }
          ],
          "start": 1005,
          "end": 1019
        },
        "start": 1003,
        "end": 1019
      },
      "declare": false,
      "start": 990,
      "end": 1020
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1062,
        "end": 1064
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
              "start": 1065,
              "end": 1066
            },
            "constraint": {
              "type": "TSConstructorType",
              "abstract": false,
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
                    "start": 1083,
                    "end": 1087
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 1089,
                        "end": 1092
                      },
                      "start": 1089,
                      "end": 1094
                    },
                    "start": 1087,
                    "end": 1094
                  },
                  "value": null,
                  "start": 1080,
                  "end": 1094
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1099,
                  "end": 1102
                },
                "start": 1096,
                "end": 1102
              },
              "start": 1075,
              "end": 1102
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1065,
            "end": 1102
          }
        ],
        "start": 1064,
        "end": 1103
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
            "start": 1110,
            "end": 1111
          },
          "typeArguments": null,
          "start": 1110,
          "end": 1111
        },
        "extendsType": {
          "type": "TSConstructorType",
          "abstract": false,
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
                "start": 1128,
                "end": 1132
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 1134,
                    "end": 1137
                  },
                  "start": 1134,
                  "end": 1139
                },
                "start": 1132,
                "end": 1139
              },
              "value": null,
              "start": 1125,
              "end": 1139
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
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
                  "start": 1151,
                  "end": 1152
                },
                "constraint": {
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
                        "start": 1163,
                        "end": 1164
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1166,
                          "end": 1172
                        },
                        "start": 1164,
                        "end": 1172
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1163,
                      "end": 1172
                    }
                  ],
                  "start": 1161,
                  "end": 1174
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 1151,
                "end": 1174
              },
              "start": 1145,
              "end": 1174
            },
            "start": 1141,
            "end": 1175
          },
          "start": 1120,
          "end": 1175
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 1179,
                "end": 1187
              },
              "start": 1179,
              "end": 1187
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1189,
                "end": 1190
              },
              "typeArguments": null,
              "start": 1189,
              "end": 1190
            }
          ],
          "start": 1178,
          "end": 1191
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1198,
              "end": 1199
            },
            "typeArguments": null,
            "start": 1198,
            "end": 1199
          },
          "extendsType": {
            "type": "TSConstructorType",
            "abstract": false,
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
                  "start": 1216,
                  "end": 1220
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 1222,
                      "end": 1225
                    },
                    "start": 1222,
                    "end": 1227
                  },
                  "start": 1220,
                  "end": 1227
                },
                "value": null,
                "start": 1213,
                "end": 1227
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
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
                    "start": 1239,
                    "end": 1240
                  },
                  "constraint": {
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
                          "start": 1251,
                          "end": 1252
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1254,
                            "end": 1260
                          },
                          "start": 1252,
                          "end": 1260
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1251,
                        "end": 1260
                      }
                    ],
                    "start": 1249,
                    "end": 1262
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1239,
                  "end": 1262
                },
                "start": 1233,
                "end": 1262
              },
              "start": 1229,
              "end": 1263
            },
            "start": 1208,
            "end": 1263
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "\"number\"",
                  "start": 1267,
                  "end": 1275
                },
                "start": 1267,
                "end": 1275
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1277,
                  "end": 1278
                },
                "typeArguments": null,
                "start": 1277,
                "end": 1278
              }
            ],
            "start": 1266,
            "end": 1279
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1286,
            "end": 1291
          },
          "start": 1198,
          "end": 1291
        },
        "start": 1110,
        "end": 1291
      },
      "declare": false,
      "start": 1057,
      "end": 1292
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X4_T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1299,
        "end": 1304
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1307,
          "end": 1309
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSConstructorType",
              "abstract": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
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
                        "start": 1322,
                        "end": 1323
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "\"a\"",
                            "start": 1325,
                            "end": 1328
                          },
                          "start": 1325,
                          "end": 1328
                        },
                        "start": 1323,
                        "end": 1328
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1322,
                      "end": 1328
                    }
                  ],
                  "start": 1320,
                  "end": 1330
                },
                "start": 1317,
                "end": 1330
              },
              "start": 1310,
              "end": 1330
            }
          ],
          "start": 1309,
          "end": 1331
        },
        "start": 1307,
        "end": 1331
      },
      "declare": false,
      "start": 1294,
      "end": 1332
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X4_T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1364,
        "end": 1369
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1372,
          "end": 1374
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSConstructorType",
              "abstract": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
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
                        "start": 1387,
                        "end": 1388
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1390,
                            "end": 1391
                          },
                          "start": 1390,
                          "end": 1391
                        },
                        "start": 1388,
                        "end": 1391
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1387,
                      "end": 1391
                    }
                  ],
                  "start": 1385,
                  "end": 1393
                },
                "start": 1382,
                "end": 1393
              },
              "start": 1375,
              "end": 1393
            }
          ],
          "start": 1374,
          "end": 1394
        },
        "start": 1372,
        "end": 1394
      },
      "declare": false,
      "start": 1359,
      "end": 1395
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X4_T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1425,
        "end": 1430
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1433,
          "end": 1435
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSConstructorType",
              "abstract": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
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
                        "start": 1448,
                        "end": 1449
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSObjectKeyword",
                          "start": 1451,
                          "end": 1457
                        },
                        "start": 1449,
                        "end": 1457
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1448,
                      "end": 1457
                    }
                  ],
                  "start": 1446,
                  "end": 1459
                },
                "start": 1443,
                "end": 1459
              },
              "start": 1436,
              "end": 1459
            }
          ],
          "start": 1435,
          "end": 1460
        },
        "start": 1433,
        "end": 1460
      },
      "declare": false,
      "start": 1420,
      "end": 1461
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1503,
        "end": 1505
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
              "start": 1506,
              "end": 1507
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1506,
            "end": 1507
          }
        ],
        "start": 1505,
        "end": 1508
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
            "start": 1515,
            "end": 1516
          },
          "typeArguments": null,
          "start": 1515,
          "end": 1516
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1525,
            "end": 1532
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
                    "start": 1539,
                    "end": 1540
                  },
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 1549,
                    "end": 1555
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1539,
                  "end": 1555
                },
                "start": 1533,
                "end": 1555
              }
            ],
            "start": 1532,
            "end": 1556
          },
          "start": 1525,
          "end": 1556
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 1560,
                "end": 1568
              },
              "start": 1560,
              "end": 1568
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1570,
                "end": 1571
              },
              "typeArguments": null,
              "start": 1570,
              "end": 1571
            }
          ],
          "start": 1559,
          "end": 1572
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1579,
              "end": 1580
            },
            "typeArguments": null,
            "start": 1579,
            "end": 1580
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 1589,
              "end": 1596
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
                      "start": 1603,
                      "end": 1604
                    },
                    "constraint": {
                      "type": "TSNumberKeyword",
                      "start": 1613,
                      "end": 1619
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1603,
                    "end": 1619
                  },
                  "start": 1597,
                  "end": 1619
                }
              ],
              "start": 1596,
              "end": 1620
            },
            "start": 1589,
            "end": 1620
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "\"number\"",
                  "start": 1624,
                  "end": 1632
                },
                "start": 1624,
                "end": 1632
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1634,
                  "end": 1635
                },
                "typeArguments": null,
                "start": 1634,
                "end": 1635
              }
            ],
            "start": 1623,
            "end": 1636
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1643,
            "end": 1648
          },
          "start": 1579,
          "end": 1648
        },
        "start": 1515,
        "end": 1648
      },
      "declare": false,
      "start": 1498,
      "end": 1649
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X5_T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1656,
        "end": 1661
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1664,
          "end": 1666
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 1667,
                "end": 1674
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "a",
                          "raw": "\"a\"",
                          "start": 1675,
                          "end": 1678
                        },
                        "start": 1675,
                        "end": 1678
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "b",
                          "raw": "\"b\"",
                          "start": 1681,
                          "end": 1684
                        },
                        "start": 1681,
                        "end": 1684
                      }
                    ],
                    "start": 1675,
                    "end": 1684
                  }
                ],
                "start": 1674,
                "end": 1685
              },
              "start": 1667,
              "end": 1685
            }
          ],
          "start": 1666,
          "end": 1686
        },
        "start": 1664,
        "end": 1686
      },
      "declare": false,
      "start": 1651,
      "end": 1687
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X5_T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1718,
        "end": 1723
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1726,
          "end": 1728
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 1729,
                "end": 1736
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1737,
                          "end": 1738
                        },
                        "start": 1737,
                        "end": 1738
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 1741,
                          "end": 1742
                        },
                        "start": 1741,
                        "end": 1742
                      }
                    ],
                    "start": 1737,
                    "end": 1742
                  }
                ],
                "start": 1736,
                "end": 1743
              },
              "start": 1729,
              "end": 1743
            }
          ],
          "start": 1728,
          "end": 1744
        },
        "start": 1726,
        "end": 1744
      },
      "declare": false,
      "start": 1713,
      "end": 1745
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X5_T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1772,
        "end": 1777
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1780,
          "end": 1782
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 1783,
                "end": 1790
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": null,
                          "raw": "1n",
                          "bigint": "1",
                          "start": 1791,
                          "end": 1793
                        },
                        "start": 1791,
                        "end": 1793
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": null,
                          "raw": "2n",
                          "bigint": "2",
                          "start": 1796,
                          "end": 1798
                        },
                        "start": 1796,
                        "end": 1798
                      }
                    ],
                    "start": 1791,
                    "end": 1798
                  }
                ],
                "start": 1790,
                "end": 1799
              },
              "start": 1783,
              "end": 1799
            }
          ],
          "start": 1782,
          "end": 1800
        },
        "start": 1780,
        "end": 1800
      },
      "declare": false,
      "start": 1767,
      "end": 1801
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1843,
        "end": 1845
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
              "start": 1846,
              "end": 1847
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1846,
            "end": 1847
          }
        ],
        "start": 1845,
        "end": 1848
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
            "start": 1855,
            "end": 1856
          },
          "typeArguments": null,
          "start": 1855,
          "end": 1856
        },
        "extendsType": {
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
                "start": 1867,
                "end": 1868
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
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
                      "start": 1876,
                      "end": 1877
                    },
                    "constraint": {
                      "type": "TSStringKeyword",
                      "start": 1886,
                      "end": 1892
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1876,
                    "end": 1892
                  },
                  "start": 1870,
                  "end": 1892
                },
                "start": 1868,
                "end": 1892
              },
              "accessibility": null,
              "static": false,
              "start": 1867,
              "end": 1892
            }
          ],
          "start": 1865,
          "end": 1894
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 1898,
                "end": 1906
              },
              "start": 1898,
              "end": 1906
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1908,
                "end": 1909
              },
              "typeArguments": null,
              "start": 1908,
              "end": 1909
            }
          ],
          "start": 1897,
          "end": 1910
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1917,
              "end": 1918
            },
            "typeArguments": null,
            "start": 1917,
            "end": 1918
          },
          "extendsType": {
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
                  "start": 1929,
                  "end": 1930
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
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
                        "start": 1938,
                        "end": 1939
                      },
                      "constraint": {
                        "type": "TSNumberKeyword",
                        "start": 1948,
                        "end": 1954
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1938,
                      "end": 1954
                    },
                    "start": 1932,
                    "end": 1954
                  },
                  "start": 1930,
                  "end": 1954
                },
                "accessibility": null,
                "static": false,
                "start": 1929,
                "end": 1954
              }
            ],
            "start": 1927,
            "end": 1956
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "\"number\"",
                  "start": 1960,
                  "end": 1968
                },
                "start": 1960,
                "end": 1968
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1970,
                  "end": 1971
                },
                "typeArguments": null,
                "start": 1970,
                "end": 1971
              }
            ],
            "start": 1959,
            "end": 1972
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1979,
            "end": 1984
          },
          "start": 1917,
          "end": 1984
        },
        "start": 1855,
        "end": 1984
      },
      "declare": false,
      "start": 1838,
      "end": 1985
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X6_T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1992,
        "end": 1997
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X6",
          "optional": false,
          "typeAnnotation": null,
          "start": 2000,
          "end": 2002
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2005,
                    "end": 2006
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 2008,
                        "end": 2011
                      },
                      "start": 2008,
                      "end": 2011
                    },
                    "start": 2006,
                    "end": 2011
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2005,
                  "end": 2011
                }
              ],
              "start": 2003,
              "end": 2013
            }
          ],
          "start": 2002,
          "end": 2014
        },
        "start": 2000,
        "end": 2014
      },
      "declare": false,
      "start": 1987,
      "end": 2015
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X6_T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2040,
        "end": 2045
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X6",
          "optional": false,
          "typeAnnotation": null,
          "start": 2048,
          "end": 2050
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2053,
                    "end": 2054
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2056,
                        "end": 2057
                      },
                      "start": 2056,
                      "end": 2057
                    },
                    "start": 2054,
                    "end": 2057
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2053,
                  "end": 2057
                }
              ],
              "start": 2051,
              "end": 2059
            }
          ],
          "start": 2050,
          "end": 2060
        },
        "start": 2048,
        "end": 2060
      },
      "declare": false,
      "start": 2035,
      "end": 2061
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X6_T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2084,
        "end": 2089
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X6",
          "optional": false,
          "typeAnnotation": null,
          "start": 2092,
          "end": 2094
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2097,
                    "end": 2098
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 2100,
                      "end": 2106
                    },
                    "start": 2098,
                    "end": 2106
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2097,
                  "end": 2106
                }
              ],
              "start": 2095,
              "end": 2108
            }
          ],
          "start": 2094,
          "end": 2109
        },
        "start": 2092,
        "end": 2109
      },
      "declare": false,
      "start": 2079,
      "end": 2110
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X7",
        "optional": false,
        "typeAnnotation": null,
        "start": 2162,
        "end": 2164
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
              "start": 2165,
              "end": 2166
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2165,
            "end": 2166
          }
        ],
        "start": 2164,
        "end": 2167
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
            "start": 2174,
            "end": 2175
          },
          "typeArguments": null,
          "start": 2174,
          "end": 2175
        },
        "extendsType": {
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
                "start": 2186,
                "end": 2187
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
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
                      "start": 2195,
                      "end": 2196
                    },
                    "constraint": {
                      "type": "TSStringKeyword",
                      "start": 2205,
                      "end": 2211
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2195,
                    "end": 2211
                  },
                  "start": 2189,
                  "end": 2211
                },
                "start": 2187,
                "end": 2211
              },
              "accessibility": null,
              "static": false,
              "start": 2186,
              "end": 2212
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
                "start": 2213,
                "end": 2214
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
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
                      "start": 2222,
                      "end": 2223
                    },
                    "constraint": {
                      "type": "TSStringKeyword",
                      "start": 2232,
                      "end": 2238
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2222,
                    "end": 2238
                  },
                  "start": 2216,
                  "end": 2238
                },
                "start": 2214,
                "end": 2238
              },
              "accessibility": null,
              "static": false,
              "start": 2213,
              "end": 2238
            }
          ],
          "start": 2184,
          "end": 2240
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 2244,
                "end": 2252
              },
              "start": 2244,
              "end": 2252
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 2254,
                "end": 2255
              },
              "typeArguments": null,
              "start": 2254,
              "end": 2255
            }
          ],
          "start": 2243,
          "end": 2256
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2263,
              "end": 2264
            },
            "typeArguments": null,
            "start": 2263,
            "end": 2264
          },
          "extendsType": {
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
                  "start": 2275,
                  "end": 2276
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
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
                        "start": 2284,
                        "end": 2285
                      },
                      "constraint": {
                        "type": "TSNumberKeyword",
                        "start": 2294,
                        "end": 2300
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2284,
                      "end": 2300
                    },
                    "start": 2278,
                    "end": 2300
                  },
                  "start": 2276,
                  "end": 2300
                },
                "accessibility": null,
                "static": false,
                "start": 2275,
                "end": 2301
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
                  "start": 2302,
                  "end": 2303
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
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
                        "start": 2311,
                        "end": 2312
                      },
                      "constraint": {
                        "type": "TSNumberKeyword",
                        "start": 2321,
                        "end": 2327
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2311,
                      "end": 2327
                    },
                    "start": 2305,
                    "end": 2327
                  },
                  "start": 2303,
                  "end": 2327
                },
                "accessibility": null,
                "static": false,
                "start": 2302,
                "end": 2327
              }
            ],
            "start": 2273,
            "end": 2329
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "\"number\"",
                  "start": 2333,
                  "end": 2341
                },
                "start": 2333,
                "end": 2341
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2343,
                  "end": 2344
                },
                "typeArguments": null,
                "start": 2343,
                "end": 2344
              }
            ],
            "start": 2332,
            "end": 2345
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 2352,
            "end": 2357
          },
          "start": 2263,
          "end": 2357
        },
        "start": 2174,
        "end": 2357
      },
      "declare": false,
      "start": 2157,
      "end": 2358
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X7_T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2365,
        "end": 2370
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X7",
          "optional": false,
          "typeAnnotation": null,
          "start": 2373,
          "end": 2375
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2378,
                    "end": 2379
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 2381,
                        "end": 2384
                      },
                      "start": 2381,
                      "end": 2384
                    },
                    "start": 2379,
                    "end": 2384
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2378,
                  "end": 2385
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
                    "start": 2386,
                    "end": 2387
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "b",
                        "raw": "\"b\"",
                        "start": 2389,
                        "end": 2392
                      },
                      "start": 2389,
                      "end": 2392
                    },
                    "start": 2387,
                    "end": 2392
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2386,
                  "end": 2392
                }
              ],
              "start": 2376,
              "end": 2394
            }
          ],
          "start": 2375,
          "end": 2395
        },
        "start": 2373,
        "end": 2395
      },
      "declare": false,
      "start": 2360,
      "end": 2396
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X7_T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2427,
        "end": 2432
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X7",
          "optional": false,
          "typeAnnotation": null,
          "start": 2435,
          "end": 2437
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2440,
                    "end": 2441
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2443,
                        "end": 2444
                      },
                      "start": 2443,
                      "end": 2444
                    },
                    "start": 2441,
                    "end": 2444
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2440,
                  "end": 2445
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
                    "start": 2446,
                    "end": 2447
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 2449,
                        "end": 2450
                      },
                      "start": 2449,
                      "end": 2450
                    },
                    "start": 2447,
                    "end": 2450
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2446,
                  "end": 2450
                }
              ],
              "start": 2438,
              "end": 2452
            }
          ],
          "start": 2437,
          "end": 2453
        },
        "start": 2435,
        "end": 2453
      },
      "declare": false,
      "start": 2422,
      "end": 2454
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X7_T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2481,
        "end": 2486
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X7",
          "optional": false,
          "typeAnnotation": null,
          "start": 2489,
          "end": 2491
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2494,
                    "end": 2495
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 2497,
                      "end": 2503
                    },
                    "start": 2495,
                    "end": 2503
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2494,
                  "end": 2504
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
                    "start": 2505,
                    "end": 2506
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 2508,
                      "end": 2514
                    },
                    "start": 2506,
                    "end": 2514
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2505,
                  "end": 2514
                }
              ],
              "start": 2492,
              "end": 2516
            }
          ],
          "start": 2491,
          "end": 2517
        },
        "start": 2489,
        "end": 2517
      },
      "declare": false,
      "start": 2476,
      "end": 2518
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X7_T4",
        "optional": false,
        "typeAnnotation": null,
        "start": 2533,
        "end": 2538
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X7",
          "optional": false,
          "typeAnnotation": null,
          "start": 2541,
          "end": 2543
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2546,
                    "end": 2547
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 2549,
                        "end": 2552
                      },
                      "start": 2549,
                      "end": 2552
                    },
                    "start": 2547,
                    "end": 2552
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2546,
                  "end": 2553
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
                    "start": 2554,
                    "end": 2555
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2557,
                        "end": 2558
                      },
                      "start": 2557,
                      "end": 2558
                    },
                    "start": 2555,
                    "end": 2558
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2554,
                  "end": 2558
                }
              ],
              "start": 2544,
              "end": 2560
            }
          ],
          "start": 2543,
          "end": 2561
        },
        "start": 2541,
        "end": 2561
      },
      "declare": false,
      "start": 2528,
      "end": 2562
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X8",
        "optional": false,
        "typeAnnotation": null,
        "start": 2659,
        "end": 2661
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
              "start": 2662,
              "end": 2663
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2662,
            "end": 2663
          }
        ],
        "start": 2661,
        "end": 2664
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
            "start": 2671,
            "end": 2672
          },
          "typeArguments": null,
          "start": 2671,
          "end": 2672
        },
        "extendsType": {
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
                "start": 2683,
                "end": 2684
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
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
                      "start": 2692,
                      "end": 2693
                    },
                    "constraint": {
                      "type": "TSStringKeyword",
                      "start": 2702,
                      "end": 2708
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2692,
                    "end": 2708
                  },
                  "start": 2686,
                  "end": 2708
                },
                "start": 2684,
                "end": 2708
              },
              "accessibility": null,
              "static": false,
              "start": 2683,
              "end": 2709
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
                "start": 2710,
                "end": 2711
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
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
                      "start": 2719,
                      "end": 2720
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2719,
                    "end": 2720
                  },
                  "start": 2713,
                  "end": 2720
                },
                "start": 2711,
                "end": 2720
              },
              "accessibility": null,
              "static": false,
              "start": 2710,
              "end": 2720
            }
          ],
          "start": 2681,
          "end": 2722
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 2726,
                "end": 2734
              },
              "start": 2726,
              "end": 2734
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 2736,
                "end": 2737
              },
              "typeArguments": null,
              "start": 2736,
              "end": 2737
            }
          ],
          "start": 2725,
          "end": 2738
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2745,
              "end": 2746
            },
            "typeArguments": null,
            "start": 2745,
            "end": 2746
          },
          "extendsType": {
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
                  "start": 2757,
                  "end": 2758
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
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
                        "start": 2766,
                        "end": 2767
                      },
                      "constraint": {
                        "type": "TSNumberKeyword",
                        "start": 2776,
                        "end": 2782
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2766,
                      "end": 2782
                    },
                    "start": 2760,
                    "end": 2782
                  },
                  "start": 2758,
                  "end": 2782
                },
                "accessibility": null,
                "static": false,
                "start": 2757,
                "end": 2783
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
                  "start": 2784,
                  "end": 2785
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
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
                        "start": 2793,
                        "end": 2794
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2793,
                      "end": 2794
                    },
                    "start": 2787,
                    "end": 2794
                  },
                  "start": 2785,
                  "end": 2794
                },
                "accessibility": null,
                "static": false,
                "start": 2784,
                "end": 2794
              }
            ],
            "start": 2755,
            "end": 2796
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "\"number\"",
                  "start": 2800,
                  "end": 2808
                },
                "start": 2800,
                "end": 2808
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2810,
                  "end": 2811
                },
                "typeArguments": null,
                "start": 2810,
                "end": 2811
              }
            ],
            "start": 2799,
            "end": 2812
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 2819,
            "end": 2824
          },
          "start": 2745,
          "end": 2824
        },
        "start": 2671,
        "end": 2824
      },
      "declare": false,
      "start": 2654,
      "end": 2825
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X8_T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2832,
        "end": 2837
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X8",
          "optional": false,
          "typeAnnotation": null,
          "start": 2840,
          "end": 2842
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2845,
                    "end": 2846
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 2848,
                        "end": 2851
                      },
                      "start": 2848,
                      "end": 2851
                    },
                    "start": 2846,
                    "end": 2851
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2845,
                  "end": 2852
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
                    "start": 2853,
                    "end": 2854
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "b",
                        "raw": "\"b\"",
                        "start": 2856,
                        "end": 2859
                      },
                      "start": 2856,
                      "end": 2859
                    },
                    "start": 2854,
                    "end": 2859
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2853,
                  "end": 2859
                }
              ],
              "start": 2843,
              "end": 2861
            }
          ],
          "start": 2842,
          "end": 2862
        },
        "start": 2840,
        "end": 2862
      },
      "declare": false,
      "start": 2827,
      "end": 2863
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X8_T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2894,
        "end": 2899
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X8",
          "optional": false,
          "typeAnnotation": null,
          "start": 2902,
          "end": 2904
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2907,
                    "end": 2908
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2910,
                        "end": 2911
                      },
                      "start": 2910,
                      "end": 2911
                    },
                    "start": 2908,
                    "end": 2911
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2907,
                  "end": 2912
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
                    "start": 2913,
                    "end": 2914
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 2916,
                        "end": 2917
                      },
                      "start": 2916,
                      "end": 2917
                    },
                    "start": 2914,
                    "end": 2917
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2913,
                  "end": 2917
                }
              ],
              "start": 2905,
              "end": 2919
            }
          ],
          "start": 2904,
          "end": 2920
        },
        "start": 2902,
        "end": 2920
      },
      "declare": false,
      "start": 2889,
      "end": 2921
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X8_T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2948,
        "end": 2953
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X8",
          "optional": false,
          "typeAnnotation": null,
          "start": 2956,
          "end": 2958
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2961,
                    "end": 2962
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 2964,
                      "end": 2970
                    },
                    "start": 2962,
                    "end": 2970
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2961,
                  "end": 2971
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
                    "start": 2972,
                    "end": 2973
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 2975,
                      "end": 2981
                    },
                    "start": 2973,
                    "end": 2981
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2972,
                  "end": 2981
                }
              ],
              "start": 2959,
              "end": 2983
            }
          ],
          "start": 2958,
          "end": 2984
        },
        "start": 2956,
        "end": 2984
      },
      "declare": false,
      "start": 2943,
      "end": 2985
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X8_T4",
        "optional": false,
        "typeAnnotation": null,
        "start": 3000,
        "end": 3005
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X8",
          "optional": false,
          "typeAnnotation": null,
          "start": 3008,
          "end": 3010
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3013,
                    "end": 3014
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 3016,
                        "end": 3019
                      },
                      "start": 3016,
                      "end": 3019
                    },
                    "start": 3014,
                    "end": 3019
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3013,
                  "end": 3020
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
                    "start": 3021,
                    "end": 3022
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3024,
                        "end": 3025
                      },
                      "start": 3024,
                      "end": 3025
                    },
                    "start": 3022,
                    "end": 3025
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3021,
                  "end": 3025
                }
              ],
              "start": 3011,
              "end": 3027
            }
          ],
          "start": 3010,
          "end": 3028
        },
        "start": 3008,
        "end": 3028
      },
      "declare": false,
      "start": 2995,
      "end": 3029
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X9",
        "optional": false,
        "typeAnnotation": null,
        "start": 3125,
        "end": 3127
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
              "start": 3128,
              "end": 3129
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3128,
            "end": 3129
          }
        ],
        "start": 3127,
        "end": 3130
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
            "start": 3137,
            "end": 3138
          },
          "typeArguments": null,
          "start": 3137,
          "end": 3138
        },
        "extendsType": {
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
                "start": 3149,
                "end": 3150
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
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
                      "start": 3158,
                      "end": 3159
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3158,
                    "end": 3159
                  },
                  "start": 3152,
                  "end": 3159
                },
                "start": 3150,
                "end": 3159
              },
              "accessibility": null,
              "static": false,
              "start": 3149,
              "end": 3160
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
                "start": 3161,
                "end": 3162
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
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
                      "start": 3170,
                      "end": 3171
                    },
                    "constraint": {
                      "type": "TSStringKeyword",
                      "start": 3180,
                      "end": 3186
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3170,
                    "end": 3186
                  },
                  "start": 3164,
                  "end": 3186
                },
                "start": 3162,
                "end": 3186
              },
              "accessibility": null,
              "static": false,
              "start": 3161,
              "end": 3186
            }
          ],
          "start": 3147,
          "end": 3188
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 3192,
                "end": 3200
              },
              "start": 3192,
              "end": 3200
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 3202,
                "end": 3203
              },
              "typeArguments": null,
              "start": 3202,
              "end": 3203
            }
          ],
          "start": 3191,
          "end": 3204
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3211,
              "end": 3212
            },
            "typeArguments": null,
            "start": 3211,
            "end": 3212
          },
          "extendsType": {
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
                  "start": 3223,
                  "end": 3224
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
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
                        "start": 3232,
                        "end": 3233
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3232,
                      "end": 3233
                    },
                    "start": 3226,
                    "end": 3233
                  },
                  "start": 3224,
                  "end": 3233
                },
                "accessibility": null,
                "static": false,
                "start": 3223,
                "end": 3234
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
                  "start": 3235,
                  "end": 3236
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
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
                        "start": 3244,
                        "end": 3245
                      },
                      "constraint": {
                        "type": "TSNumberKeyword",
                        "start": 3254,
                        "end": 3260
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3244,
                      "end": 3260
                    },
                    "start": 3238,
                    "end": 3260
                  },
                  "start": 3236,
                  "end": 3260
                },
                "accessibility": null,
                "static": false,
                "start": 3235,
                "end": 3260
              }
            ],
            "start": 3221,
            "end": 3262
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "\"number\"",
                  "start": 3266,
                  "end": 3274
                },
                "start": 3266,
                "end": 3274
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3276,
                  "end": 3277
                },
                "typeArguments": null,
                "start": 3276,
                "end": 3277
              }
            ],
            "start": 3265,
            "end": 3278
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 3285,
            "end": 3290
          },
          "start": 3211,
          "end": 3290
        },
        "start": 3137,
        "end": 3290
      },
      "declare": false,
      "start": 3120,
      "end": 3291
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X9_T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 3298,
        "end": 3303
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X9",
          "optional": false,
          "typeAnnotation": null,
          "start": 3306,
          "end": 3308
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3311,
                    "end": 3312
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 3314,
                        "end": 3317
                      },
                      "start": 3314,
                      "end": 3317
                    },
                    "start": 3312,
                    "end": 3317
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3311,
                  "end": 3318
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
                    "start": 3319,
                    "end": 3320
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "b",
                        "raw": "\"b\"",
                        "start": 3322,
                        "end": 3325
                      },
                      "start": 3322,
                      "end": 3325
                    },
                    "start": 3320,
                    "end": 3325
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3319,
                  "end": 3325
                }
              ],
              "start": 3309,
              "end": 3327
            }
          ],
          "start": 3308,
          "end": 3328
        },
        "start": 3306,
        "end": 3328
      },
      "declare": false,
      "start": 3293,
      "end": 3329
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X9_T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3360,
        "end": 3365
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X9",
          "optional": false,
          "typeAnnotation": null,
          "start": 3368,
          "end": 3370
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3373,
                    "end": 3374
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3376,
                        "end": 3377
                      },
                      "start": 3376,
                      "end": 3377
                    },
                    "start": 3374,
                    "end": 3377
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3373,
                  "end": 3378
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
                    "start": 3379,
                    "end": 3380
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 3382,
                        "end": 3383
                      },
                      "start": 3382,
                      "end": 3383
                    },
                    "start": 3380,
                    "end": 3383
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3379,
                  "end": 3383
                }
              ],
              "start": 3371,
              "end": 3385
            }
          ],
          "start": 3370,
          "end": 3386
        },
        "start": 3368,
        "end": 3386
      },
      "declare": false,
      "start": 3355,
      "end": 3387
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X9_T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 3414,
        "end": 3419
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X9",
          "optional": false,
          "typeAnnotation": null,
          "start": 3422,
          "end": 3424
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3427,
                    "end": 3428
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 3430,
                      "end": 3436
                    },
                    "start": 3428,
                    "end": 3436
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3427,
                  "end": 3437
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
                    "start": 3438,
                    "end": 3439
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 3441,
                      "end": 3447
                    },
                    "start": 3439,
                    "end": 3447
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3438,
                  "end": 3447
                }
              ],
              "start": 3425,
              "end": 3449
            }
          ],
          "start": 3424,
          "end": 3450
        },
        "start": 3422,
        "end": 3450
      },
      "declare": false,
      "start": 3409,
      "end": 3451
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X9_T4",
        "optional": false,
        "typeAnnotation": null,
        "start": 3466,
        "end": 3471
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X9",
          "optional": false,
          "typeAnnotation": null,
          "start": 3474,
          "end": 3476
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3479,
                    "end": 3480
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 3482,
                        "end": 3485
                      },
                      "start": 3482,
                      "end": 3485
                    },
                    "start": 3480,
                    "end": 3485
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3479,
                  "end": 3486
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
                    "start": 3487,
                    "end": 3488
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3490,
                        "end": 3491
                      },
                      "start": 3490,
                      "end": 3491
                    },
                    "start": 3488,
                    "end": 3491
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3487,
                  "end": 3491
                }
              ],
              "start": 3477,
              "end": 3493
            }
          ],
          "start": 3476,
          "end": 3494
        },
        "start": 3474,
        "end": 3494
      },
      "declare": false,
      "start": 3461,
      "end": 3495
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X10",
        "optional": false,
        "typeAnnotation": null,
        "start": 3562,
        "end": 3565
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
              "start": 3566,
              "end": 3567
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3566,
            "end": 3567
          }
        ],
        "start": 3565,
        "end": 3568
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
            "start": 3571,
            "end": 3572
          },
          "typeArguments": null,
          "start": 3571,
          "end": 3572
        },
        "extendsType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 3588,
                "end": 3589
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 3588,
              "end": 3589
            },
            "start": 3582,
            "end": 3589
          },
          "extendsType": {
            "type": "TSNumberKeyword",
            "start": 3598,
            "end": 3604
          },
          "trueType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 3607,
              "end": 3608
            },
            "start": 3607,
            "end": 3608
          },
          "falseType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 3611,
              "end": 3612
            },
            "start": 3611,
            "end": 3612
          },
          "start": 3582,
          "end": 3612
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 3616,
            "end": 3617
          },
          "start": 3616,
          "end": 3617
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 3620,
            "end": 3621
          },
          "start": 3620,
          "end": 3621
        },
        "start": 3571,
        "end": 3621
      },
      "declare": false,
      "start": 3557,
      "end": 3622
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X10_Y1",
        "optional": false,
        "typeAnnotation": null,
        "start": 3657,
        "end": 3663
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
              "start": 3664,
              "end": 3665
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3664,
            "end": 3665
          }
        ],
        "start": 3663,
        "end": 3666
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X10",
          "optional": false,
          "typeAnnotation": null,
          "start": 3669,
          "end": 3672
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3673,
                  "end": 3674
                },
                "typeArguments": null,
                "start": 3673,
                "end": 3674
              },
              "extendsType": {
                "type": "TSNumberKeyword",
                "start": 3683,
                "end": 3689
              },
              "trueType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 3692,
                  "end": 3693
                },
                "start": 3692,
                "end": 3693
              },
              "falseType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 3696,
                  "end": 3697
                },
                "start": 3696,
                "end": 3697
              },
              "start": 3673,
              "end": 3697
            }
          ],
          "start": 3672,
          "end": 3698
        },
        "start": 3669,
        "end": 3698
      },
      "declare": false,
      "start": 3652,
      "end": 3699
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X10_T1_T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 3705,
        "end": 3714
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X10_Y1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3717,
          "end": 3723
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 3724,
              "end": 3730
            }
          ],
          "start": 3723,
          "end": 3731
        },
        "start": 3717,
        "end": 3731
      },
      "declare": false,
      "start": 3700,
      "end": 3732
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X11",
        "optional": false,
        "typeAnnotation": null,
        "start": 3739,
        "end": 3742
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
              "start": 3743,
              "end": 3744
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3743,
            "end": 3744
          }
        ],
        "start": 3742,
        "end": 3745
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
            "start": 3748,
            "end": 3749
          },
          "typeArguments": null,
          "start": 3748,
          "end": 3749
        },
        "extendsType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 3766,
                "end": 3767
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 3766,
              "end": 3767
            },
            "start": 3760,
            "end": 3767
          },
          "extendsType": {
            "type": "TSNumberKeyword",
            "start": 3777,
            "end": 3783
          },
          "trueType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 3786,
              "end": 3787
            },
            "start": 3786,
            "end": 3787
          },
          "falseType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 3790,
              "end": 3791
            },
            "start": 3790,
            "end": 3791
          },
          "start": 3759,
          "end": 3791
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 3795,
            "end": 3796
          },
          "start": 3795,
          "end": 3796
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 3799,
            "end": 3800
          },
          "start": 3799,
          "end": 3800
        },
        "start": 3748,
        "end": 3800
      },
      "declare": false,
      "start": 3734,
      "end": 3801
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X12",
        "optional": false,
        "typeAnnotation": null,
        "start": 3836,
        "end": 3839
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
              "start": 3840,
              "end": 3841
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3840,
            "end": 3841
          }
        ],
        "start": 3839,
        "end": 3842
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
            "start": 3845,
            "end": 3846
          },
          "typeArguments": null,
          "start": 3845,
          "end": 3846
        },
        "extendsType": {
          "type": "TSInferType",
          "typeParameter": {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3862,
              "end": 3863
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 3872,
              "end": 3878
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3862,
            "end": 3878
          },
          "start": 3856,
          "end": 3878
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 3882,
            "end": 3883
          },
          "start": 3882,
          "end": 3883
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 3886,
            "end": 3887
          },
          "start": 3886,
          "end": 3887
        },
        "start": 3845,
        "end": 3887
      },
      "declare": false,
      "start": 3831,
      "end": 3888
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X13",
        "optional": false,
        "typeAnnotation": null,
        "start": 3946,
        "end": 3949
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
              "start": 3950,
              "end": 3951
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3950,
            "end": 3951
          }
        ],
        "start": 3949,
        "end": 3952
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
            "start": 3955,
            "end": 3956
          },
          "typeArguments": null,
          "start": 3955,
          "end": 3956
        },
        "extendsType": {
          "type": "TSInferType",
          "typeParameter": {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3971,
              "end": 3972
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 3981,
              "end": 3987
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3971,
            "end": 3987
          },
          "start": 3965,
          "end": 3987
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 3990,
            "end": 3991
          },
          "start": 3990,
          "end": 3991
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 3994,
            "end": 3995
          },
          "start": 3994,
          "end": 3995
        },
        "start": 3955,
        "end": 3995
      },
      "declare": false,
      "start": 3941,
      "end": 3996
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X14",
        "optional": false,
        "typeAnnotation": null,
        "start": 4086,
        "end": 4089
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
              "start": 4090,
              "end": 4091
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4090,
            "end": 4091
          }
        ],
        "start": 4089,
        "end": 4092
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
            "start": 4095,
            "end": 4096
          },
          "typeArguments": null,
          "start": 4095,
          "end": 4096
        },
        "extendsType": {
          "type": "TSTypeOperator",
          "operator": "keyof",
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
                "start": 4117,
                "end": 4118
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 4127,
                "end": 4133
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 4117,
              "end": 4133
            },
            "start": 4111,
            "end": 4133
          },
          "start": 4105,
          "end": 4133
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 4136,
            "end": 4137
          },
          "start": 4136,
          "end": 4137
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 4140,
            "end": 4141
          },
          "start": 4140,
          "end": 4141
        },
        "start": 4095,
        "end": 4141
      },
      "declare": false,
      "start": 4081,
      "end": 4142
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X15",
        "optional": false,
        "typeAnnotation": null,
        "start": 4251,
        "end": 4254
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
              "start": 4255,
              "end": 4256
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4255,
            "end": 4256
          }
        ],
        "start": 4254,
        "end": 4257
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
            "start": 4260,
            "end": 4261
          },
          "typeArguments": null,
          "start": 4260,
          "end": 4261
        },
        "extendsType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 4273,
            "end": 4274
          },
          "constraint": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4284,
                  "end": 4285
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 4284,
                "end": 4285
              },
              "start": 4278,
              "end": 4285
            },
            "extendsType": {
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
                  "start": 4300,
                  "end": 4301
                },
                "typeArguments": null,
                "start": 4300,
                "end": 4301
              },
              "start": 4294,
              "end": 4301
            },
            "trueType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 4304,
                "end": 4305
              },
              "start": 4304,
              "end": 4305
            },
            "falseType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 4308,
                "end": 4309
              },
              "start": 4308,
              "end": 4309
            },
            "start": 4278,
            "end": 4309
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 4312,
              "end": 4313
            },
            "start": 4312,
            "end": 4313
          },
          "optional": false,
          "readonly": null,
          "start": 4270,
          "end": 4316
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 4319,
            "end": 4320
          },
          "start": 4319,
          "end": 4320
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 4323,
            "end": 4324
          },
          "start": 4323,
          "end": 4324
        },
        "start": 4260,
        "end": 4324
      },
      "declare": false,
      "start": 4246,
      "end": 4325
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X16",
        "optional": false,
        "typeAnnotation": null,
        "start": 4360,
        "end": 4363
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
              "start": 4364,
              "end": 4365
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4364,
            "end": 4365
          }
        ],
        "start": 4363,
        "end": 4366
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
            "start": 4369,
            "end": 4370
          },
          "typeArguments": null,
          "start": 4369,
          "end": 4370
        },
        "extendsType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 4382,
            "end": 4383
          },
          "constraint": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 4393,
                "end": 4394
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
                    "start": 4409,
                    "end": 4410
                  },
                  "typeArguments": null,
                  "start": 4409,
                  "end": 4410
                },
                "start": 4403,
                "end": 4410
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 4393,
              "end": 4410
            },
            "start": 4387,
            "end": 4410
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 4413,
              "end": 4414
            },
            "start": 4413,
            "end": 4414
          },
          "optional": false,
          "readonly": null,
          "start": 4379,
          "end": 4417
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 4420,
            "end": 4421
          },
          "start": 4420,
          "end": 4421
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 4424,
            "end": 4425
          },
          "start": 4424,
          "end": 4425
        },
        "start": 4369,
        "end": 4425
      },
      "declare": false,
      "start": 4355,
      "end": 4426
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X17",
        "optional": false,
        "typeAnnotation": null,
        "start": 4484,
        "end": 4487
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
              "start": 4488,
              "end": 4489
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4488,
            "end": 4489
          }
        ],
        "start": 4487,
        "end": 4490
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
            "start": 4493,
            "end": 4494
          },
          "typeArguments": null,
          "start": 4493,
          "end": 4494
        },
        "extendsType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 4506,
            "end": 4507
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
                "start": 4517,
                "end": 4518
              },
              "typeArguments": null,
              "start": 4517,
              "end": 4518
            },
            "start": 4511,
            "end": 4518
          },
          "nameType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4528,
                  "end": 4529
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 4528,
                "end": 4529
              },
              "start": 4522,
              "end": 4529
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4538,
                "end": 4539
              },
              "typeArguments": null,
              "start": 4538,
              "end": 4539
            },
            "trueType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 4542,
                "end": 4543
              },
              "start": 4542,
              "end": 4543
            },
            "falseType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 4546,
                "end": 4547
              },
              "start": 4546,
              "end": 4547
            },
            "start": 4522,
            "end": 4547
          },
          "typeAnnotation": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 4550,
              "end": 4551
            },
            "start": 4550,
            "end": 4551
          },
          "optional": false,
          "readonly": null,
          "start": 4503,
          "end": 4554
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 4557,
            "end": 4558
          },
          "start": 4557,
          "end": 4558
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 4561,
            "end": 4562
          },
          "start": 4561,
          "end": 4562
        },
        "start": 4493,
        "end": 4562
      },
      "declare": false,
      "start": 4479,
      "end": 4563
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X18",
        "optional": false,
        "typeAnnotation": null,
        "start": 4598,
        "end": 4601
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
              "start": 4602,
              "end": 4603
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4602,
            "end": 4603
          }
        ],
        "start": 4601,
        "end": 4604
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
            "start": 4607,
            "end": 4608
          },
          "typeArguments": null,
          "start": 4607,
          "end": 4608
        },
        "extendsType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 4620,
            "end": 4621
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
                "start": 4631,
                "end": 4632
              },
              "typeArguments": null,
              "start": 4631,
              "end": 4632
            },
            "start": 4625,
            "end": 4632
          },
          "nameType": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 4642,
                "end": 4643
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4652,
                  "end": 4653
                },
                "typeArguments": null,
                "start": 4652,
                "end": 4653
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 4642,
              "end": 4653
            },
            "start": 4636,
            "end": 4653
          },
          "typeAnnotation": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 4656,
              "end": 4657
            },
            "start": 4656,
            "end": 4657
          },
          "optional": false,
          "readonly": null,
          "start": 4617,
          "end": 4660
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 4663,
            "end": 4664
          },
          "start": 4663,
          "end": 4664
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 4667,
            "end": 4668
          },
          "start": 4667,
          "end": 4668
        },
        "start": 4607,
        "end": 4668
      },
      "declare": false,
      "start": 4593,
      "end": 4669
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X19",
        "optional": false,
        "typeAnnotation": null,
        "start": 4728,
        "end": 4731
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
              "start": 4732,
              "end": 4733
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 4742,
                  "end": 4748
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 4751,
                  "end": 4757
                }
              ],
              "start": 4742,
              "end": 4757
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4732,
            "end": 4757
          }
        ],
        "start": 4731,
        "end": 4758
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
            "start": 4761,
            "end": 4762
          },
          "typeArguments": null,
          "start": 4761,
          "end": 4762
        },
        "extendsType": {
          "type": "TSInferType",
          "typeParameter": {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 4778,
              "end": 4779
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 4788,
              "end": 4794
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4778,
            "end": 4794
          },
          "start": 4772,
          "end": 4794
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 4799,
                "end": 4800
              },
              "typeArguments": null,
              "start": 4799,
              "end": 4800
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 4802,
                "end": 4803
              },
              "typeArguments": null,
              "start": 4802,
              "end": 4803
            }
          ],
          "start": 4798,
          "end": 4804
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 4807,
          "end": 4812
        },
        "start": 4761,
        "end": 4812
      },
      "declare": false,
      "start": 4723,
      "end": 4813
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X19_T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4819,
        "end": 4825
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X19",
          "optional": false,
          "typeAnnotation": null,
          "start": 4828,
          "end": 4831
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 4832,
                "end": 4835
              },
              "start": 4832,
              "end": 4835
            }
          ],
          "start": 4831,
          "end": 4836
        },
        "start": 4828,
        "end": 4836
      },
      "declare": false,
      "start": 4814,
      "end": 4837
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X19_T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 4852,
        "end": 4858
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X19",
          "optional": false,
          "typeAnnotation": null,
          "start": 4861,
          "end": 4864
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 4865,
                "end": 4866
              },
              "start": 4865,
              "end": 4866
            }
          ],
          "start": 4864,
          "end": 4867
        },
        "start": 4861,
        "end": 4867
      },
      "declare": false,
      "start": 4847,
      "end": 4868
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X19_T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 4884,
        "end": 4890
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X19",
          "optional": false,
          "typeAnnotation": null,
          "start": 4893,
          "end": 4896
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 4897,
                    "end": 4898
                  },
                  "start": 4897,
                  "end": 4898
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 4901,
                    "end": 4904
                  },
                  "start": 4901,
                  "end": 4904
                }
              ],
              "start": 4897,
              "end": 4904
            }
          ],
          "start": 4896,
          "end": 4905
        },
        "start": 4893,
        "end": 4905
      },
      "declare": false,
      "start": 4879,
      "end": 4906
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X20",
        "optional": false,
        "typeAnnotation": null,
        "start": 4923,
        "end": 4926
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
              "start": 4927,
              "end": 4928
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4927,
            "end": 4928
          }
        ],
        "start": 4926,
        "end": 4929
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
            "start": 4932,
            "end": 4933
          },
          "typeArguments": null,
          "start": 4932,
          "end": 4933
        },
        "extendsType": {
          "type": "TSInferType",
          "typeParameter": {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 4949,
              "end": 4950
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 4959,
              "end": 4965
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4949,
            "end": 4965
          },
          "start": 4943,
          "end": 4965
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 4969,
              "end": 4970
            },
            "typeArguments": null,
            "start": 4969,
            "end": 4970
          },
          "extendsType": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 4986,
                "end": 4987
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4996,
                  "end": 4997
                },
                "typeArguments": null,
                "start": 4996,
                "end": 4997
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 4986,
              "end": 4997
            },
            "start": 4980,
            "end": 4997
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5002,
                  "end": 5003
                },
                "typeArguments": null,
                "start": 5002,
                "end": 5003
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5005,
                  "end": 5006
                },
                "typeArguments": null,
                "start": 5005,
                "end": 5006
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5008,
                  "end": 5009
                },
                "typeArguments": null,
                "start": 5008,
                "end": 5009
              }
            ],
            "start": 5001,
            "end": 5010
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 5013,
            "end": 5018
          },
          "start": 4969,
          "end": 5018
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 5021,
          "end": 5026
        },
        "start": 4932,
        "end": 5026
      },
      "declare": false,
      "start": 4918,
      "end": 5027
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X20_T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5033,
        "end": 5039
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X20",
          "optional": false,
          "typeAnnotation": null,
          "start": 5042,
          "end": 5045
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 5046,
                    "end": 5047
                  },
                  "start": 5046,
                  "end": 5047
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 5050,
                    "end": 5053
                  },
                  "start": 5050,
                  "end": 5053
                }
              ],
              "start": 5046,
              "end": 5053
            }
          ],
          "start": 5045,
          "end": 5054
        },
        "start": 5042,
        "end": 5054
      },
      "declare": false,
      "start": 5028,
      "end": 5055
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X21",
        "optional": false,
        "typeAnnotation": null,
        "start": 5075,
        "end": 5078
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
              "start": 5079,
              "end": 5080
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5079,
            "end": 5080
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 5082,
              "end": 5083
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 5092,
              "end": 5098
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5082,
            "end": 5098
          }
        ],
        "start": 5078,
        "end": 5099
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
            "start": 5102,
            "end": 5103
          },
          "typeArguments": null,
          "start": 5102,
          "end": 5103
        },
        "extendsType": {
          "type": "TSInferType",
          "typeParameter": {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 5119,
              "end": 5120
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 5129,
                "end": 5130
              },
              "typeArguments": null,
              "start": 5129,
              "end": 5130
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5119,
            "end": 5130
          },
          "start": 5113,
          "end": 5130
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 5135,
                "end": 5136
              },
              "typeArguments": null,
              "start": 5135,
              "end": 5136
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 5138,
                "end": 5139
              },
              "typeArguments": null,
              "start": 5138,
              "end": 5139
            }
          ],
          "start": 5134,
          "end": 5140
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 5143,
          "end": 5148
        },
        "start": 5102,
        "end": 5148
      },
      "declare": false,
      "start": 5070,
      "end": 5149
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X21_T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5155,
        "end": 5161
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X21",
          "optional": false,
          "typeAnnotation": null,
          "start": 5164,
          "end": 5167
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 5168,
                "end": 5169
              },
              "start": 5168,
              "end": 5169
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 5171,
                "end": 5172
              },
              "start": 5171,
              "end": 5172
            }
          ],
          "start": 5167,
          "end": 5173
        },
        "start": 5164,
        "end": 5173
      },
      "declare": false,
      "start": 5150,
      "end": 5174
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X21_T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 5190,
        "end": 5196
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X21",
          "optional": false,
          "typeAnnotation": null,
          "start": 5199,
          "end": 5202
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 5203,
                    "end": 5204
                  },
                  "start": 5203,
                  "end": 5204
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 5207,
                    "end": 5210
                  },
                  "start": 5207,
                  "end": 5210
                }
              ],
              "start": 5203,
              "end": 5210
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 5212,
                "end": 5213
              },
              "start": 5212,
              "end": 5213
            }
          ],
          "start": 5202,
          "end": 5214
        },
        "start": 5199,
        "end": 5214
      },
      "declare": false,
      "start": 5185,
      "end": 5215
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X21_T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 5231,
        "end": 5237
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X21",
          "optional": false,
          "typeAnnotation": null,
          "start": 5240,
          "end": 5243
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 5244,
                    "end": 5245
                  },
                  "start": 5244,
                  "end": 5245
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 5248,
                    "end": 5249
                  },
                  "start": 5248,
                  "end": 5249
                }
              ],
              "start": 5244,
              "end": 5249
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 5251,
                "end": 5252
              },
              "start": 5251,
              "end": 5252
            }
          ],
          "start": 5243,
          "end": 5253
        },
        "start": 5240,
        "end": 5253
      },
      "declare": false,
      "start": 5226,
      "end": 5254
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X21_T4",
        "optional": false,
        "typeAnnotation": null,
        "start": 5270,
        "end": 5276
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X21",
          "optional": false,
          "typeAnnotation": null,
          "start": 5279,
          "end": 5282
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 5283,
                    "end": 5284
                  },
                  "start": 5283,
                  "end": 5284
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 5287,
                    "end": 5288
                  },
                  "start": 5287,
                  "end": 5288
                }
              ],
              "start": 5283,
              "end": 5288
            },
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 5290,
                    "end": 5291
                  },
                  "start": 5290,
                  "end": 5291
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 5294,
                    "end": 5295
                  },
                  "start": 5294,
                  "end": 5295
                }
              ],
              "start": 5290,
              "end": 5295
            }
          ],
          "start": 5282,
          "end": 5296
        },
        "start": 5279,
        "end": 5296
      },
      "declare": false,
      "start": 5265,
      "end": 5297
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X21_T5",
        "optional": false,
        "typeAnnotation": null,
        "start": 5313,
        "end": 5319
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X21",
          "optional": false,
          "typeAnnotation": null,
          "start": 5322,
          "end": 5325
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 5326,
                    "end": 5327
                  },
                  "start": 5326,
                  "end": 5327
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 5330,
                    "end": 5331
                  },
                  "start": 5330,
                  "end": 5331
                }
              ],
              "start": 5326,
              "end": 5331
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 5333,
                "end": 5334
              },
              "start": 5333,
              "end": 5334
            }
          ],
          "start": 5325,
          "end": 5335
        },
        "start": 5322,
        "end": 5335
      },
      "declare": false,
      "start": 5308,
      "end": 5336
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IfEquals",
        "optional": false,
        "typeAnnotation": null,
        "start": 5369,
        "end": 5377
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 5378,
              "end": 5379
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5378,
            "end": 5379
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 5381,
              "end": 5382
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5381,
            "end": 5382
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 5384,
              "end": 5385
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5384,
            "end": 5385
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 5387,
              "end": 5388
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5387,
            "end": 5388
          }
        ],
        "start": 5377,
        "end": 5389
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
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5394,
                  "end": 5395
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 5394,
                "end": 5395
              }
            ],
            "start": 5393,
            "end": 5396
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
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5402,
                  "end": 5403
                },
                "typeArguments": null,
                "start": 5402,
                "end": 5403
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5412,
                  "end": 5413
                },
                "typeArguments": null,
                "start": 5412,
                "end": 5413
              },
              "trueType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 5416,
                  "end": 5417
                },
                "start": 5416,
                "end": 5417
              },
              "falseType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 5420,
                  "end": 5421
                },
                "start": 5420,
                "end": 5421
              },
              "start": 5402,
              "end": 5421
            },
            "start": 5399,
            "end": 5421
          },
          "start": 5393,
          "end": 5421
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
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5432,
                  "end": 5433
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 5432,
                "end": 5433
              }
            ],
            "start": 5431,
            "end": 5434
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
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5440,
                  "end": 5441
                },
                "typeArguments": null,
                "start": 5440,
                "end": 5441
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5450,
                  "end": 5451
                },
                "typeArguments": null,
                "start": 5450,
                "end": 5451
              },
              "trueType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 5454,
                  "end": 5455
                },
                "start": 5454,
                "end": 5455
              },
              "falseType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 5458,
                  "end": 5459
                },
                "start": 5458,
                "end": 5459
              },
              "start": 5440,
              "end": 5459
            },
            "start": 5437,
            "end": 5459
          },
          "start": 5431,
          "end": 5459
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 5462,
            "end": 5463
          },
          "typeArguments": null,
          "start": 5462,
          "end": 5463
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 5466,
            "end": 5467
          },
          "typeArguments": null,
          "start": 5466,
          "end": 5467
        },
        "start": 5392,
        "end": 5467
      },
      "declare": false,
      "start": 5364,
      "end": 5468
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 5489,
                        "end": 5490
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 5489,
                      "end": 5490
                    }
                  ],
                  "start": 5488,
                  "end": 5491
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5498,
                        "end": 5499
                      },
                      "typeArguments": null,
                      "start": 5498,
                      "end": 5499
                    },
                    "extendsType": {
                      "type": "TSInferType",
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5514,
                          "end": 5515
                        },
                        "constraint": {
                          "type": "TSNumberKeyword",
                          "start": 5524,
                          "end": 5530
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 5514,
                        "end": 5530
                      },
                      "start": 5508,
                      "end": 5530
                    },
                    "trueType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5533,
                        "end": 5534
                      },
                      "start": 5533,
                      "end": 5534
                    },
                    "falseType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 5537,
                        "end": 5538
                      },
                      "start": 5537,
                      "end": 5538
                    },
                    "start": 5498,
                    "end": 5538
                  },
                  "start": 5494,
                  "end": 5539
                },
                "start": 5488,
                "end": 5539
              },
              "start": 5486,
              "end": 5539
            },
            "start": 5484,
            "end": 5539
          },
          "init": null,
          "definite": false,
          "start": 5484,
          "end": 5539
        }
      ],
      "declare": true,
      "start": 5470,
      "end": 5540
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5550,
        "end": 5552
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": null,
              "start": 5568,
              "end": 5570
            },
            "start": 5561,
            "end": 5571
          }
        ],
        "start": 5555,
        "end": 5573
      },
      "expression": false,
      "start": 5541,
      "end": 5573
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExpectNumber",
        "optional": false,
        "typeAnnotation": null,
        "start": 5580,
        "end": 5592
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
              "start": 5593,
              "end": 5594
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 5603,
              "end": 5609
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5593,
            "end": 5609
          }
        ],
        "start": 5592,
        "end": 5610
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 5613,
          "end": 5614
        },
        "typeArguments": null,
        "start": 5613,
        "end": 5614
      },
      "declare": false,
      "start": 5575,
      "end": 5615
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 5635,
                        "end": 5636
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 5635,
                      "end": 5636
                    }
                  ],
                  "start": 5634,
                  "end": 5637
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5644,
                        "end": 5645
                      },
                      "typeArguments": null,
                      "start": 5644,
                      "end": 5645
                    },
                    "extendsType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ExpectNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5654,
                        "end": 5666
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
                                "start": 5673,
                                "end": 5674
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 5673,
                              "end": 5674
                            },
                            "start": 5667,
                            "end": 5674
                          }
                        ],
                        "start": 5666,
                        "end": 5675
                      },
                      "start": 5654,
                      "end": 5675
                    },
                    "trueType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5678,
                        "end": 5679
                      },
                      "start": 5678,
                      "end": 5679
                    },
                    "falseType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 5682,
                        "end": 5683
                      },
                      "start": 5682,
                      "end": 5683
                    },
                    "start": 5644,
                    "end": 5683
                  },
                  "start": 5640,
                  "end": 5684
                },
                "start": 5634,
                "end": 5684
              },
              "start": 5632,
              "end": 5684
            },
            "start": 5630,
            "end": 5684
          },
          "init": null,
          "definite": false,
          "start": 5630,
          "end": 5684
        }
      ],
      "declare": true,
      "start": 5616,
      "end": 5685
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 5695,
        "end": 5697
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x2",
              "optional": false,
              "typeAnnotation": null,
              "start": 5713,
              "end": 5715
            },
            "start": 5706,
            "end": 5716
          }
        ],
        "start": 5700,
        "end": 5718
      },
      "expression": false,
      "start": 5686,
      "end": 5718
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 26,
  "end": 5718
}
```
