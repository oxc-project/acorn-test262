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
