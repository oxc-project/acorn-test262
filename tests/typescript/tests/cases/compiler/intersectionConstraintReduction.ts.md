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
        "name": "Test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 10
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K1",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 13
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 28,
                "end": 31
              },
              "start": 22,
              "end": 31
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 11,
            "end": 31
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K2",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 35
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 50,
                "end": 53
              },
              "start": 44,
              "end": 53
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 33,
            "end": 53
          }
        ],
        "start": 10,
        "end": 54
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "MustBeKey",
          "optional": false,
          "typeAnnotation": null,
          "start": 61,
          "end": 70
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Extract",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 71,
                    "end": 78
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
                          "start": 79,
                          "end": 81
                        },
                        "typeArguments": null,
                        "start": 79,
                        "end": 81
                      },
                      {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 89,
                          "end": 92
                        },
                        "start": 83,
                        "end": 92
                      }
                    ],
                    "start": 78,
                    "end": 93
                  },
                  "start": 71,
                  "end": 93
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 96,
                    "end": 98
                  },
                  "typeArguments": null,
                  "start": 96,
                  "end": 98
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 101,
                    "end": 103
                  },
                  "typeArguments": null,
                  "start": 101,
                  "end": 103
                }
              ],
              "start": 71,
              "end": 103
            }
          ],
          "start": 70,
          "end": 104
        },
        "start": 61,
        "end": 104
      },
      "declare": false,
      "start": 0,
      "end": 105
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 117
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K1",
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 120
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 135,
                "end": 138
              },
              "start": 129,
              "end": 138
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 118,
            "end": 138
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K2",
              "optional": false,
              "typeAnnotation": null,
              "start": 140,
              "end": 142
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 157,
                "end": 160
              },
              "start": 151,
              "end": 160
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 140,
            "end": 160
          }
        ],
        "start": 117,
        "end": 161
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "MustBeKey",
          "optional": false,
          "typeAnnotation": null,
          "start": 168,
          "end": 177
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 178,
                    "end": 180
                  },
                  "typeArguments": null,
                  "start": 178,
                  "end": 180
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 183,
                    "end": 185
                  },
                  "typeArguments": null,
                  "start": 183,
                  "end": 185
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Extract",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 188,
                    "end": 195
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
                          "start": 196,
                          "end": 198
                        },
                        "typeArguments": null,
                        "start": 196,
                        "end": 198
                      },
                      {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 206,
                          "end": 209
                        },
                        "start": 200,
                        "end": 209
                      }
                    ],
                    "start": 195,
                    "end": 210
                  },
                  "start": 188,
                  "end": 210
                }
              ],
              "start": 178,
              "end": 210
            }
          ],
          "start": 177,
          "end": 211
        },
        "start": 168,
        "end": 211
      },
      "declare": false,
      "start": 107,
      "end": 212
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MustBeKey",
        "optional": false,
        "typeAnnotation": null,
        "start": 219,
        "end": 228
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 229,
              "end": 230
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 245,
                "end": 248
              },
              "start": 239,
              "end": 248
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 229,
            "end": 248
          }
        ],
        "start": 228,
        "end": 249
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 252,
          "end": 253
        },
        "typeArguments": null,
        "start": 252,
        "end": 253
      },
      "declare": false,
      "start": 214,
      "end": 254
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnyKey",
        "optional": false,
        "typeAnnotation": null,
        "start": 318,
        "end": 324
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 327,
            "end": 333
          },
          {
            "type": "TSStringKeyword",
            "start": 336,
            "end": 342
          },
          {
            "type": "TSSymbolKeyword",
            "start": 345,
            "end": 351
          }
        ],
        "start": 327,
        "end": 351
      },
      "declare": false,
      "start": 313,
      "end": 352
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReturnTypeKeyof",
        "optional": false,
        "typeAnnotation": null,
        "start": 359,
        "end": 374
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 375,
              "end": 378
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 387,
              "end": 393
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 375,
            "end": 393
          }
        ],
        "start": 374,
        "end": 394
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 397,
            "end": 400
          },
          "typeArguments": null,
          "start": 397,
          "end": 400
        },
        "extendsType": {
          "type": "TSObjectKeyword",
          "start": 409,
          "end": 415
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 429,
                    "end": 432
                  },
                  "typeArguments": null,
                  "start": 429,
                  "end": 432
                },
                "start": 423,
                "end": 432
              }
            ],
            "start": 422,
            "end": 433
          },
          "extendsType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSNeverKeyword",
                "start": 443,
                "end": 448
              }
            ],
            "start": 442,
            "end": 449
          },
          "trueType": {
            "type": "TSNeverKeyword",
            "start": 460,
            "end": 465
          },
          "falseType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Key",
                "optional": false,
                "typeAnnotation": null,
                "start": 479,
                "end": 482
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 492,
                    "end": 495
                  },
                  "typeArguments": null,
                  "start": 492,
                  "end": 495
                },
                "start": 486,
                "end": 495
              },
              "nameType": {
                "type": "TSStringKeyword",
                "start": 499,
                "end": 505
              },
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 516,
                      "end": 519
                    },
                    "typeArguments": null,
                    "start": 516,
                    "end": 519
                  },
                  "start": 513,
                  "end": 519
                },
                "start": 510,
                "end": 519
              },
              "optional": "-",
              "readonly": null,
              "start": 476,
              "end": 521
            },
            "indexType": {
              "type": "TSStringKeyword",
              "start": 522,
              "end": 528
            },
            "start": 476,
            "end": 529
          },
          "start": 422,
          "end": 529
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 536,
          "end": 541
        },
        "start": 397,
        "end": 541
      },
      "declare": false,
      "start": 354,
      "end": 542
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "KeyIfSignatureOfObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 549,
        "end": 571
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 577,
              "end": 580
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 589,
              "end": 595
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 577,
            "end": 595
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Key",
              "optional": false,
              "typeAnnotation": null,
              "start": 601,
              "end": 604
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AnyKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 613,
                "end": 619
              },
              "typeArguments": null,
              "start": 613,
              "end": 619
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 601,
            "end": 619
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "ReturnTypeKeys",
              "optional": false,
              "typeAnnotation": null,
              "start": 625,
              "end": 639
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReturnTypeKeyof",
                "optional": false,
                "typeAnnotation": null,
                "start": 642,
                "end": 657
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 658,
                      "end": 661
                    },
                    "typeArguments": null,
                    "start": 658,
                    "end": 661
                  }
                ],
                "start": 657,
                "end": 662
              },
              "start": 642,
              "end": 662
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 625,
            "end": 662
          }
        ],
        "start": 571,
        "end": 665
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ReturnTypeKeys",
            "optional": false,
            "typeAnnotation": null,
            "start": 668,
            "end": 682
          },
          "typeArguments": null,
          "start": 668,
          "end": 682
        },
        "extendsType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Key",
                "optional": false,
                "typeAnnotation": null,
                "start": 697,
                "end": 700
              },
              "typeArguments": null,
              "start": 697,
              "end": 700
            },
            "start": 694,
            "end": 700
          },
          "start": 691,
          "end": 700
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSFunctionType",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 711,
                  "end": 714
                },
                "typeArguments": null,
                "start": 711,
                "end": 714
              },
              "start": 708,
              "end": 714
            },
            "start": 705,
            "end": 714
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ReturnTypeKeys",
              "optional": false,
              "typeAnnotation": null,
              "start": 724,
              "end": 738
            },
            "typeArguments": null,
            "start": 724,
            "end": 738
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Key",
              "optional": false,
              "typeAnnotation": null,
              "start": 741,
              "end": 744
            },
            "typeArguments": null,
            "start": 741,
            "end": 744
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 747,
            "end": 752
          },
          "start": 704,
          "end": 752
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 756,
          "end": 761
        },
        "start": 668,
        "end": 761
      },
      "declare": false,
      "start": 544,
      "end": 762
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Reduced1",
          "optional": false,
          "typeAnnotation": null,
          "start": 776,
          "end": 784
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 785,
                "end": 788
              },
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 797,
                "end": 803
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 785,
              "end": 803
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Key",
                "optional": false,
                "typeAnnotation": null,
                "start": 805,
                "end": 808
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AnyKey",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 817,
                  "end": 823
                },
                "typeArguments": null,
                "start": 817,
                "end": 823
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 805,
              "end": 823
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Value",
                "optional": false,
                "typeAnnotation": null,
                "start": 825,
                "end": 830
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 825,
              "end": 830
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "ObjKeys",
                "optional": false,
                "typeAnnotation": null,
                "start": 832,
                "end": 839
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 854,
                    "end": 857
                  },
                  "typeArguments": null,
                  "start": 854,
                  "end": 857
                },
                "start": 848,
                "end": 857
              },
              "default": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 866,
                    "end": 869
                  },
                  "typeArguments": null,
                  "start": 866,
                  "end": 869
                },
                "start": 860,
                "end": 869
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 832,
              "end": 869
            }
          ],
          "start": 784,
          "end": 870
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Key",
              "optional": false,
              "typeAnnotation": null,
              "start": 877,
              "end": 880
            },
            "typeArguments": null,
            "start": 877,
            "end": 880
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "KeyIfSignatureOfObject",
              "optional": false,
              "typeAnnotation": null,
              "start": 889,
              "end": 911
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 912,
                    "end": 915
                  },
                  "typeArguments": null,
                  "start": 912,
                  "end": 915
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 917,
                    "end": 920
                  },
                  "typeArguments": null,
                  "start": 917,
                  "end": 920
                }
              ],
              "start": 911,
              "end": 921
            },
            "start": 889,
            "end": 921
          },
          "trueType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Key",
                "optional": false,
                "typeAnnotation": null,
                "start": 932,
                "end": 935
              },
              "typeArguments": null,
              "start": 932,
              "end": 935
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ObjKeys",
                "optional": false,
                "typeAnnotation": null,
                "start": 944,
                "end": 951
              },
              "typeArguments": null,
              "start": 944,
              "end": 951
            },
            "trueType": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 969,
                "end": 970
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 974,
                  "end": 977
                },
                "typeArguments": null,
                "start": 974,
                "end": 977
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 980,
                  "end": 985
                },
                "typeArguments": null,
                "start": 980,
                "end": 985
              },
              "optional": false,
              "readonly": null,
              "start": 966,
              "end": 987
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 1002,
              "end": 1007
            },
            "start": 932,
            "end": 1007
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1018,
            "end": 1023
          },
          "start": 877,
          "end": 1023
        },
        "declare": false,
        "start": 771,
        "end": 1024
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 764,
      "end": 1024
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Reduced2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1038,
          "end": 1046
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 1047,
                "end": 1050
              },
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 1059,
                "end": 1065
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1047,
              "end": 1065
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Key",
                "optional": false,
                "typeAnnotation": null,
                "start": 1067,
                "end": 1070
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AnyKey",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1079,
                  "end": 1085
                },
                "typeArguments": null,
                "start": 1079,
                "end": 1085
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1067,
              "end": 1085
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Value",
                "optional": false,
                "typeAnnotation": null,
                "start": 1087,
                "end": 1092
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1087,
              "end": 1092
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "ObjKeys",
                "optional": false,
                "typeAnnotation": null,
                "start": 1094,
                "end": 1101
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1116,
                    "end": 1119
                  },
                  "typeArguments": null,
                  "start": 1116,
                  "end": 1119
                },
                "start": 1110,
                "end": 1119
              },
              "default": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1128,
                    "end": 1131
                  },
                  "typeArguments": null,
                  "start": 1128,
                  "end": 1131
                },
                "start": 1122,
                "end": 1131
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 1094,
              "end": 1131
            }
          ],
          "start": 1046,
          "end": 1132
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Key",
              "optional": false,
              "typeAnnotation": null,
              "start": 1139,
              "end": 1142
            },
            "typeArguments": null,
            "start": 1139,
            "end": 1142
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AnyKey",
              "optional": false,
              "typeAnnotation": null,
              "start": 1151,
              "end": 1157
            },
            "typeArguments": null,
            "start": 1151,
            "end": 1157
          },
          "trueType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Key",
                "optional": false,
                "typeAnnotation": null,
                "start": 1168,
                "end": 1171
              },
              "typeArguments": null,
              "start": 1168,
              "end": 1171
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "KeyIfSignatureOfObject",
                "optional": false,
                "typeAnnotation": null,
                "start": 1180,
                "end": 1202
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1203,
                      "end": 1206
                    },
                    "typeArguments": null,
                    "start": 1203,
                    "end": 1206
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1208,
                      "end": 1211
                    },
                    "typeArguments": null,
                    "start": 1208,
                    "end": 1211
                  }
                ],
                "start": 1202,
                "end": 1212
              },
              "start": 1180,
              "end": 1212
            },
            "trueType": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1227,
                  "end": 1230
                },
                "typeArguments": null,
                "start": 1227,
                "end": 1230
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ObjKeys",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1239,
                  "end": 1246
                },
                "typeArguments": null,
                "start": 1239,
                "end": 1246
              },
              "trueType": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1267,
                  "end": 1268
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1272,
                    "end": 1275
                  },
                  "typeArguments": null,
                  "start": 1272,
                  "end": 1275
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1278,
                    "end": 1283
                  },
                  "typeArguments": null,
                  "start": 1278,
                  "end": 1283
                },
                "optional": false,
                "readonly": null,
                "start": 1264,
                "end": 1285
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 1303,
                "end": 1308
              },
              "start": 1227,
              "end": 1308
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 1323,
              "end": 1328
            },
            "start": 1168,
            "end": 1328
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1339,
            "end": 1344
          },
          "start": 1139,
          "end": 1344
        },
        "declare": false,
        "start": 1033,
        "end": 1345
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1026,
      "end": 1345
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1345
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
    "value": "Test1",
    "start": 5,
    "end": 10,
    "range": [
      5,
      10
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 10,
    "end": 11,
    "range": [
      10,
      11
    ]
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 11,
    "end": 13,
    "range": [
      11,
      13
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 14,
    "end": 21,
    "range": [
      14,
      21
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 22,
    "end": 27,
    "range": [
      22,
      27
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 28,
    "end": 31,
    "range": [
      28,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Identifier",
    "value": "K2",
    "start": 33,
    "end": 35,
    "range": [
      33,
      35
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 36,
    "end": 43,
    "range": [
      36,
      43
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 44,
    "end": 49,
    "range": [
      44,
      49
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 50,
    "end": 53,
    "range": [
      50,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Identifier",
    "value": "MustBeKey",
    "start": 61,
    "end": 70,
    "range": [
      61,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 71,
    "end": 78,
    "range": [
      71,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 79,
    "end": 81,
    "range": [
      79,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 83,
    "end": 88,
    "range": [
      83,
      88
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 89,
    "end": 92,
    "range": [
      89,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 96,
    "end": 98,
    "range": [
      96,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Identifier",
    "value": "K2",
    "start": 101,
    "end": 103,
    "range": [
      101,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 107,
    "end": 111,
    "range": [
      107,
      111
    ]
  },
  {
    "type": "Identifier",
    "value": "Test2",
    "start": 112,
    "end": 117,
    "range": [
      112,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 118,
    "end": 120,
    "range": [
      118,
      120
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 121,
    "end": 128,
    "range": [
      121,
      128
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 129,
    "end": 134,
    "range": [
      129,
      134
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 135,
    "end": 138,
    "range": [
      135,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Identifier",
    "value": "K2",
    "start": 140,
    "end": 142,
    "range": [
      140,
      142
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 143,
    "end": 150,
    "range": [
      143,
      150
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 151,
    "end": 156,
    "range": [
      151,
      156
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 157,
    "end": 160,
    "range": [
      157,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Identifier",
    "value": "MustBeKey",
    "start": 168,
    "end": 177,
    "range": [
      168,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 178,
    "end": 180,
    "range": [
      178,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Identifier",
    "value": "K2",
    "start": 183,
    "end": 185,
    "range": [
      183,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 188,
    "end": 195,
    "range": [
      188,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 196,
    "end": 198,
    "range": [
      196,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 200,
    "end": 205,
    "range": [
      200,
      205
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 206,
    "end": 209,
    "range": [
      206,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 214,
    "end": 218,
    "range": [
      214,
      218
    ]
  },
  {
    "type": "Identifier",
    "value": "MustBeKey",
    "start": 219,
    "end": 228,
    "range": [
      219,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 231,
    "end": 238,
    "range": [
      231,
      238
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 239,
    "end": 244,
    "range": [
      239,
      244
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 245,
    "end": 248,
    "range": [
      245,
      248
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 313,
    "end": 317,
    "range": [
      313,
      317
    ]
  },
  {
    "type": "Identifier",
    "value": "AnyKey",
    "start": 318,
    "end": 324,
    "range": [
      318,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 327,
    "end": 333,
    "range": [
      327,
      333
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 336,
    "end": 342,
    "range": [
      336,
      342
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 345,
    "end": 351,
    "range": [
      345,
      351
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 354,
    "end": 358,
    "range": [
      354,
      358
    ]
  },
  {
    "type": "Identifier",
    "value": "ReturnTypeKeyof",
    "start": 359,
    "end": 374,
    "range": [
      359,
      374
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 375,
    "end": 378,
    "range": [
      375,
      378
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 379,
    "end": 386,
    "range": [
      379,
      386
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 387,
    "end": 393,
    "range": [
      387,
      393
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 395,
    "end": 396,
    "range": [
      395,
      396
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 397,
    "end": 400,
    "range": [
      397,
      400
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 401,
    "end": 408,
    "range": [
      401,
      408
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 409,
    "end": 415,
    "range": [
      409,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 423,
    "end": 428,
    "range": [
      423,
      428
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 429,
    "end": 432,
    "range": [
      429,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 434,
    "end": 441,
    "range": [
      434,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 443,
    "end": 448,
    "range": [
      443,
      448
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 460,
    "end": 465,
    "range": [
      460,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 479,
    "end": 482,
    "range": [
      479,
      482
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 483,
    "end": 485,
    "range": [
      483,
      485
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 486,
    "end": 491,
    "range": [
      486,
      491
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 492,
    "end": 495,
    "range": [
      492,
      495
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 496,
    "end": 498,
    "range": [
      496,
      498
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 499,
    "end": 505,
    "range": [
      499,
      505
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 505,
    "end": 506,
    "range": [
      505,
      506
    ]
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 511,
    "end": 512,
    "range": [
      511,
      512
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 513,
    "end": 515,
    "range": [
      513,
      515
    ]
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 516,
    "end": 519,
    "range": [
      516,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 522,
    "end": 528,
    "range": [
      522,
      528
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 528,
    "end": 529,
    "range": [
      528,
      529
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 536,
    "end": 541,
    "range": [
      536,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 544,
    "end": 548,
    "range": [
      544,
      548
    ]
  },
  {
    "type": "Identifier",
    "value": "KeyIfSignatureOfObject",
    "start": 549,
    "end": 571,
    "range": [
      549,
      571
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 571,
    "end": 572,
    "range": [
      571,
      572
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 577,
    "end": 580,
    "range": [
      577,
      580
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 581,
    "end": 588,
    "range": [
      581,
      588
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 589,
    "end": 595,
    "range": [
      589,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 595,
    "end": 596,
    "range": [
      595,
      596
    ]
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 601,
    "end": 604,
    "range": [
      601,
      604
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 605,
    "end": 612,
    "range": [
      605,
      612
    ]
  },
  {
    "type": "Identifier",
    "value": "AnyKey",
    "start": 613,
    "end": 619,
    "range": [
      613,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Identifier",
    "value": "ReturnTypeKeys",
    "start": 625,
    "end": 639,
    "range": [
      625,
      639
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 640,
    "end": 641,
    "range": [
      640,
      641
    ]
  },
  {
    "type": "Identifier",
    "value": "ReturnTypeKeyof",
    "start": 642,
    "end": 657,
    "range": [
      642,
      657
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 657,
    "end": 658,
    "range": [
      657,
      658
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 658,
    "end": 661,
    "range": [
      658,
      661
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 662,
    "end": 663,
    "range": [
      662,
      663
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 666,
    "end": 667,
    "range": [
      666,
      667
    ]
  },
  {
    "type": "Identifier",
    "value": "ReturnTypeKeys",
    "start": 668,
    "end": 682,
    "range": [
      668,
      682
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 683,
    "end": 690,
    "range": [
      683,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 691,
    "end": 692,
    "range": [
      691,
      692
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 692,
    "end": 693,
    "range": [
      692,
      693
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 694,
    "end": 696,
    "range": [
      694,
      696
    ]
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 697,
    "end": 700,
    "range": [
      697,
      700
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 703,
    "end": 704,
    "range": [
      703,
      704
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 704,
    "end": 705,
    "range": [
      704,
      705
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 706,
    "end": 707,
    "range": [
      706,
      707
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 708,
    "end": 710,
    "range": [
      708,
      710
    ]
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 711,
    "end": 714,
    "range": [
      711,
      714
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 714,
    "end": 715,
    "range": [
      714,
      715
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 716,
    "end": 723,
    "range": [
      716,
      723
    ]
  },
  {
    "type": "Identifier",
    "value": "ReturnTypeKeys",
    "start": 724,
    "end": 738,
    "range": [
      724,
      738
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 739,
    "end": 740,
    "range": [
      739,
      740
    ]
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 741,
    "end": 744,
    "range": [
      741,
      744
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 747,
    "end": 752,
    "range": [
      747,
      752
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 756,
    "end": 761,
    "range": [
      756,
      761
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 761,
    "end": 762,
    "range": [
      761,
      762
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 764,
    "end": 770,
    "range": [
      764,
      770
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 771,
    "end": 775,
    "range": [
      771,
      775
    ]
  },
  {
    "type": "Identifier",
    "value": "Reduced1",
    "start": 776,
    "end": 784,
    "range": [
      776,
      784
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 784,
    "end": 785,
    "range": [
      784,
      785
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 785,
    "end": 788,
    "range": [
      785,
      788
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 789,
    "end": 796,
    "range": [
      789,
      796
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 797,
    "end": 803,
    "range": [
      797,
      803
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 803,
    "end": 804,
    "range": [
      803,
      804
    ]
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 805,
    "end": 808,
    "range": [
      805,
      808
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 809,
    "end": 816,
    "range": [
      809,
      816
    ]
  },
  {
    "type": "Identifier",
    "value": "AnyKey",
    "start": 817,
    "end": 823,
    "range": [
      817,
      823
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 823,
    "end": 824,
    "range": [
      823,
      824
    ]
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 825,
    "end": 830,
    "range": [
      825,
      830
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "Identifier",
    "value": "ObjKeys",
    "start": 832,
    "end": 839,
    "range": [
      832,
      839
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 840,
    "end": 847,
    "range": [
      840,
      847
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 848,
    "end": 853,
    "range": [
      848,
      853
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 854,
    "end": 857,
    "range": [
      854,
      857
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 858,
    "end": 859,
    "range": [
      858,
      859
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 860,
    "end": 865,
    "range": [
      860,
      865
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 866,
    "end": 869,
    "range": [
      866,
      869
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 869,
    "end": 870,
    "range": [
      869,
      870
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 871,
    "end": 872,
    "range": [
      871,
      872
    ]
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 877,
    "end": 880,
    "range": [
      877,
      880
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 881,
    "end": 888,
    "range": [
      881,
      888
    ]
  },
  {
    "type": "Identifier",
    "value": "KeyIfSignatureOfObject",
    "start": 889,
    "end": 911,
    "range": [
      889,
      911
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 911,
    "end": 912,
    "range": [
      911,
      912
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 912,
    "end": 915,
    "range": [
      912,
      915
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 915,
    "end": 916,
    "range": [
      915,
      916
    ]
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 917,
    "end": 920,
    "range": [
      917,
      920
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 920,
    "end": 921,
    "range": [
      920,
      921
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 930,
    "end": 931,
    "range": [
      930,
      931
    ]
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 932,
    "end": 935,
    "range": [
      932,
      935
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 936,
    "end": 943,
    "range": [
      936,
      943
    ]
  },
  {
    "type": "Identifier",
    "value": "ObjKeys",
    "start": 944,
    "end": 951,
    "range": [
      944,
      951
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 964,
    "end": 965,
    "range": [
      964,
      965
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 966,
    "end": 967,
    "range": [
      966,
      967
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 968,
    "end": 969,
    "range": [
      968,
      969
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 969,
    "end": 970,
    "range": [
      969,
      970
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 971,
    "end": 973,
    "range": [
      971,
      973
    ]
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 974,
    "end": 977,
    "range": [
      974,
      977
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 977,
    "end": 978,
    "range": [
      977,
      978
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 978,
    "end": 979,
    "range": [
      978,
      979
    ]
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 980,
    "end": 985,
    "range": [
      980,
      985
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 986,
    "end": 987,
    "range": [
      986,
      987
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1000,
    "end": 1001,
    "range": [
      1000,
      1001
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1002,
    "end": 1007,
    "range": [
      1002,
      1007
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1016,
    "end": 1017,
    "range": [
      1016,
      1017
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1018,
    "end": 1023,
    "range": [
      1018,
      1023
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1023,
    "end": 1024,
    "range": [
      1023,
      1024
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1026,
    "end": 1032,
    "range": [
      1026,
      1032
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1033,
    "end": 1037,
    "range": [
      1033,
      1037
    ]
  },
  {
    "type": "Identifier",
    "value": "Reduced2",
    "start": 1038,
    "end": 1046,
    "range": [
      1038,
      1046
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1046,
    "end": 1047,
    "range": [
      1046,
      1047
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 1047,
    "end": 1050,
    "range": [
      1047,
      1050
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1051,
    "end": 1058,
    "range": [
      1051,
      1058
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1059,
    "end": 1065,
    "range": [
      1059,
      1065
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1065,
    "end": 1066,
    "range": [
      1065,
      1066
    ]
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 1067,
    "end": 1070,
    "range": [
      1067,
      1070
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1071,
    "end": 1078,
    "range": [
      1071,
      1078
    ]
  },
  {
    "type": "Identifier",
    "value": "AnyKey",
    "start": 1079,
    "end": 1085,
    "range": [
      1079,
      1085
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1085,
    "end": 1086,
    "range": [
      1085,
      1086
    ]
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 1087,
    "end": 1092,
    "range": [
      1087,
      1092
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1092,
    "end": 1093,
    "range": [
      1092,
      1093
    ]
  },
  {
    "type": "Identifier",
    "value": "ObjKeys",
    "start": 1094,
    "end": 1101,
    "range": [
      1094,
      1101
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1102,
    "end": 1109,
    "range": [
      1102,
      1109
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1110,
    "end": 1115,
    "range": [
      1110,
      1115
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 1116,
    "end": 1119,
    "range": [
      1116,
      1119
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1120,
    "end": 1121,
    "range": [
      1120,
      1121
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1122,
    "end": 1127,
    "range": [
      1122,
      1127
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 1128,
    "end": 1131,
    "range": [
      1128,
      1131
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1131,
    "end": 1132,
    "range": [
      1131,
      1132
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1133,
    "end": 1134,
    "range": [
      1133,
      1134
    ]
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 1139,
    "end": 1142,
    "range": [
      1139,
      1142
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1143,
    "end": 1150,
    "range": [
      1143,
      1150
    ]
  },
  {
    "type": "Identifier",
    "value": "AnyKey",
    "start": 1151,
    "end": 1157,
    "range": [
      1151,
      1157
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1166,
    "end": 1167,
    "range": [
      1166,
      1167
    ]
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 1168,
    "end": 1171,
    "range": [
      1168,
      1171
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1172,
    "end": 1179,
    "range": [
      1172,
      1179
    ]
  },
  {
    "type": "Identifier",
    "value": "KeyIfSignatureOfObject",
    "start": 1180,
    "end": 1202,
    "range": [
      1180,
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
    "value": "Obj",
    "start": 1203,
    "end": 1206,
    "range": [
      1203,
      1206
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1206,
    "end": 1207,
    "range": [
      1206,
      1207
    ]
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 1208,
    "end": 1211,
    "range": [
      1208,
      1211
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1211,
    "end": 1212,
    "range": [
      1211,
      1212
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1225,
    "end": 1226,
    "range": [
      1225,
      1226
    ]
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 1227,
    "end": 1230,
    "range": [
      1227,
      1230
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1231,
    "end": 1238,
    "range": [
      1231,
      1238
    ]
  },
  {
    "type": "Identifier",
    "value": "ObjKeys",
    "start": 1239,
    "end": 1246,
    "range": [
      1239,
      1246
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1262,
    "end": 1263,
    "range": [
      1262,
      1263
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1264,
    "end": 1265,
    "range": [
      1264,
      1265
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1266,
    "end": 1267,
    "range": [
      1266,
      1267
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1267,
    "end": 1268,
    "range": [
      1267,
      1268
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1269,
    "end": 1271,
    "range": [
      1269,
      1271
    ]
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 1272,
    "end": 1275,
    "range": [
      1272,
      1275
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1275,
    "end": 1276,
    "range": [
      1275,
      1276
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1276,
    "end": 1277,
    "range": [
      1276,
      1277
    ]
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 1278,
    "end": 1283,
    "range": [
      1278,
      1283
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1284,
    "end": 1285,
    "range": [
      1284,
      1285
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1301,
    "end": 1302,
    "range": [
      1301,
      1302
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1303,
    "end": 1308,
    "range": [
      1303,
      1308
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
    "value": "never",
    "start": 1323,
    "end": 1328,
    "range": [
      1323,
      1328
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1337,
    "end": 1338,
    "range": [
      1337,
      1338
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1339,
    "end": 1344,
    "range": [
      1339,
      1344
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1344,
    "end": 1345,
    "range": [
      1344,
      1345
    ]
  }
]
```
