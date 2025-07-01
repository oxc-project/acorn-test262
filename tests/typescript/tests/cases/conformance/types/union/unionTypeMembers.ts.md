__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
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
              "start": 13,
              "end": 14
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 13,
            "end": 14
          }
        ],
        "start": 12,
        "end": 15
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
              "name": "commonMethodType",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 38
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSStringKeyword",
                    "start": 42,
                    "end": 48
                  },
                  "start": 40,
                  "end": 48
                },
                "start": 39,
                "end": 48
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 51,
                "end": 57
              },
              "start": 49,
              "end": 57
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 22,
            "end": 58
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonPropertyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 63,
              "end": 81
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 83,
                "end": 89
              },
              "start": 81,
              "end": 89
            },
            "accessibility": null,
            "static": false,
            "start": 63,
            "end": 90
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonMethodDifferentParameterType",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 130
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSStringKeyword",
                    "start": 134,
                    "end": 140
                  },
                  "start": 132,
                  "end": 140
                },
                "start": 131,
                "end": 140
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 143,
                "end": 149
              },
              "start": 141,
              "end": 149
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 96,
            "end": 150
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonMethodDifferentReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 186
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSStringKeyword",
                    "start": 190,
                    "end": 196
                  },
                  "start": 188,
                  "end": 196
                },
                "start": 187,
                "end": 196
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 199,
                "end": 205
              },
              "start": 197,
              "end": 205
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 155,
            "end": 206
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonPropertyDifferenType",
              "optional": false,
              "typeAnnotation": null,
              "start": 211,
              "end": 237
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 239,
                "end": 245
              },
              "start": 237,
              "end": 245
            },
            "accessibility": null,
            "static": false,
            "start": 211,
            "end": 246
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonMethodWithTypeParameter",
              "optional": false,
              "typeAnnotation": null,
              "start": 252,
              "end": 281
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 285,
                      "end": 286
                    },
                    "typeArguments": null,
                    "start": 285,
                    "end": 286
                  },
                  "start": 283,
                  "end": 286
                },
                "start": 282,
                "end": 286
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
                  "start": 289,
                  "end": 290
                },
                "typeArguments": null,
                "start": 289,
                "end": 290
              },
              "start": 287,
              "end": 290
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 252,
            "end": 291
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonMethodWithOwnTypeParameter",
              "optional": false,
              "typeAnnotation": null,
              "start": 296,
              "end": 328
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 329,
                    "end": 330
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 329,
                  "end": 330
                }
              ],
              "start": 328,
              "end": 331
            },
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
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 335,
                      "end": 336
                    },
                    "typeArguments": null,
                    "start": 335,
                    "end": 336
                  },
                  "start": 333,
                  "end": 336
                },
                "start": 332,
                "end": 336
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 339,
                  "end": 340
                },
                "typeArguments": null,
                "start": 339,
                "end": 340
              },
              "start": 337,
              "end": 340
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 296,
            "end": 341
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "methodOnlyInI1",
              "optional": false,
              "typeAnnotation": null,
              "start": 347,
              "end": 361
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSStringKeyword",
                    "start": 365,
                    "end": 371
                  },
                  "start": 363,
                  "end": 371
                },
                "start": 362,
                "end": 371
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 374,
                "end": 380
              },
              "start": 372,
              "end": 380
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 347,
            "end": 381
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "propertyOnlyInI1",
              "optional": false,
              "typeAnnotation": null,
              "start": 386,
              "end": 402
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 404,
                "end": 410
              },
              "start": 402,
              "end": 410
            },
            "accessibility": null,
            "static": false,
            "start": 386,
            "end": 411
          }
        ],
        "start": 16,
        "end": 413
      },
      "declare": false,
      "start": 0,
      "end": 413
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 425,
        "end": 427
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
              "start": 428,
              "end": 429
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 428,
            "end": 429
          }
        ],
        "start": 427,
        "end": 430
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
              "name": "commonMethodType",
              "optional": false,
              "typeAnnotation": null,
              "start": 437,
              "end": 453
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSStringKeyword",
                    "start": 457,
                    "end": 463
                  },
                  "start": 455,
                  "end": 463
                },
                "start": 454,
                "end": 463
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 466,
                "end": 472
              },
              "start": 464,
              "end": 472
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 437,
            "end": 473
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonPropertyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 478,
              "end": 496
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 498,
                "end": 504
              },
              "start": 496,
              "end": 504
            },
            "accessibility": null,
            "static": false,
            "start": 478,
            "end": 505
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonMethodDifferentParameterType",
              "optional": false,
              "typeAnnotation": null,
              "start": 511,
              "end": 545
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSNumberKeyword",
                    "start": 549,
                    "end": 555
                  },
                  "start": 547,
                  "end": 555
                },
                "start": 546,
                "end": 555
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 558,
                "end": 564
              },
              "start": 556,
              "end": 564
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 511,
            "end": 565
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonMethodDifferentReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 570,
              "end": 601
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSStringKeyword",
                    "start": 605,
                    "end": 611
                  },
                  "start": 603,
                  "end": 611
                },
                "start": 602,
                "end": 611
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 614,
                "end": 620
              },
              "start": 612,
              "end": 620
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 570,
            "end": 621
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonPropertyDifferenType",
              "optional": false,
              "typeAnnotation": null,
              "start": 626,
              "end": 652
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 654,
                "end": 660
              },
              "start": 652,
              "end": 660
            },
            "accessibility": null,
            "static": false,
            "start": 626,
            "end": 661
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonMethodWithTypeParameter",
              "optional": false,
              "typeAnnotation": null,
              "start": 667,
              "end": 696
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 700,
                      "end": 701
                    },
                    "typeArguments": null,
                    "start": 700,
                    "end": 701
                  },
                  "start": 698,
                  "end": 701
                },
                "start": 697,
                "end": 701
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
                  "start": 704,
                  "end": 705
                },
                "typeArguments": null,
                "start": 704,
                "end": 705
              },
              "start": 702,
              "end": 705
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 667,
            "end": 706
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonMethodWithOwnTypeParameter",
              "optional": false,
              "typeAnnotation": null,
              "start": 711,
              "end": 743
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 744,
                    "end": 745
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 744,
                  "end": 745
                }
              ],
              "start": 743,
              "end": 746
            },
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
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 750,
                      "end": 751
                    },
                    "typeArguments": null,
                    "start": 750,
                    "end": 751
                  },
                  "start": 748,
                  "end": 751
                },
                "start": 747,
                "end": 751
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 754,
                  "end": 755
                },
                "typeArguments": null,
                "start": 754,
                "end": 755
              },
              "start": 752,
              "end": 755
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 711,
            "end": 756
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "methodOnlyInI2",
              "optional": false,
              "typeAnnotation": null,
              "start": 762,
              "end": 776
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSStringKeyword",
                    "start": 780,
                    "end": 786
                  },
                  "start": 778,
                  "end": 786
                },
                "start": 777,
                "end": 786
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 789,
                "end": 795
              },
              "start": 787,
              "end": 795
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 762,
            "end": 796
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "propertyOnlyInI2",
              "optional": false,
              "typeAnnotation": null,
              "start": 801,
              "end": 817
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 819,
                "end": 825
              },
              "start": 817,
              "end": 825
            },
            "accessibility": null,
            "static": false,
            "start": 801,
            "end": 826
          }
        ],
        "start": 431,
        "end": 828
      },
      "declare": false,
      "start": 415,
      "end": 828
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1012,
                      "end": 1014
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1015,
                          "end": 1021
                        }
                      ],
                      "start": 1014,
                      "end": 1022
                    },
                    "start": 1012,
                    "end": 1022
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1025,
                      "end": 1027
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1028,
                          "end": 1034
                        }
                      ],
                      "start": 1027,
                      "end": 1035
                    },
                    "start": 1025,
                    "end": 1035
                  }
                ],
                "start": 1012,
                "end": 1035
              },
              "start": 1010,
              "end": 1035
            },
            "start": 1008,
            "end": 1035
          },
          "init": null,
          "definite": false,
          "start": 1008,
          "end": 1035
        }
      ],
      "declare": false,
      "start": 1004,
      "end": 1036
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1046,
                "end": 1052
              },
              "start": 1044,
              "end": 1052
            },
            "start": 1041,
            "end": 1052
          },
          "init": null,
          "definite": false,
          "start": 1041,
          "end": 1052
        }
      ],
      "declare": false,
      "start": 1037,
      "end": 1053
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1063,
                "end": 1069
              },
              "start": 1061,
              "end": 1069
            },
            "start": 1058,
            "end": 1069
          },
          "init": null,
          "definite": false,
          "start": 1058,
          "end": 1069
        }
      ],
      "declare": false,
      "start": 1054,
      "end": 1070
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1085,
                    "end": 1091
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1094,
                    "end": 1100
                  }
                ],
                "start": 1085,
                "end": 1100
              },
              "start": 1083,
              "end": 1100
            },
            "start": 1075,
            "end": 1100
          },
          "init": null,
          "definite": false,
          "start": 1075,
          "end": 1100
        }
      ],
      "declare": false,
      "start": 1071,
      "end": 1101
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1216,
          "end": 1219
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1222,
            "end": 1223
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "commonPropertyType",
            "optional": false,
            "typeAnnotation": null,
            "start": 1224,
            "end": 1242
          },
          "optional": false,
          "computed": false,
          "start": 1222,
          "end": 1242
        },
        "start": 1216,
        "end": 1242
      },
      "directive": null,
      "start": 1216,
      "end": 1243
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1254,
          "end": 1257
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1260,
              "end": 1261
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonMethodType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1262,
              "end": 1278
            },
            "optional": false,
            "computed": false,
            "start": 1260,
            "end": 1278
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "str",
              "optional": false,
              "typeAnnotation": null,
              "start": 1279,
              "end": 1282
            }
          ],
          "optional": false,
          "start": 1260,
          "end": 1283
        },
        "start": 1254,
        "end": 1283
      },
      "directive": null,
      "start": 1254,
      "end": 1284
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null,
          "start": 1337,
          "end": 1345
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1348,
            "end": 1349
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "commonPropertyDifferenType",
            "optional": false,
            "typeAnnotation": null,
            "start": 1350,
            "end": 1376
          },
          "optional": false,
          "computed": false,
          "start": 1348,
          "end": 1376
        },
        "start": 1337,
        "end": 1376
      },
      "directive": null,
      "start": 1337,
      "end": 1377
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null,
          "start": 1378,
          "end": 1386
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1389,
              "end": 1390
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonMethodDifferentReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1391,
              "end": 1422
            },
            "optional": false,
            "computed": false,
            "start": 1389,
            "end": 1422
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "str",
              "optional": false,
              "typeAnnotation": null,
              "start": 1423,
              "end": 1426
            }
          ],
          "optional": false,
          "start": 1389,
          "end": 1427
        },
        "start": 1378,
        "end": 1427
      },
      "directive": null,
      "start": 1378,
      "end": 1428
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1447,
          "end": 1448
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "commonMethodDifferentParameterType",
          "optional": false,
          "typeAnnotation": null,
          "start": 1449,
          "end": 1483
        },
        "optional": false,
        "computed": false,
        "start": 1447,
        "end": 1483
      },
      "directive": null,
      "start": 1447,
      "end": 1484
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1515,
            "end": 1516
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "commonMethodDifferentParameterType",
            "optional": false,
            "typeAnnotation": null,
            "start": 1517,
            "end": 1551
          },
          "optional": false,
          "computed": false,
          "start": 1515,
          "end": 1551
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": null,
            "start": 1552,
            "end": 1560
          }
        ],
        "optional": false,
        "start": 1515,
        "end": 1561
      },
      "directive": null,
      "start": 1515,
      "end": 1562
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null,
          "start": 1769,
          "end": 1772
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1775,
              "end": 1776
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonMethodWithTypeParameter",
              "optional": false,
              "typeAnnotation": null,
              "start": 1777,
              "end": 1806
            },
            "optional": false,
            "computed": false,
            "start": 1775,
            "end": 1806
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "num",
              "optional": false,
              "typeAnnotation": null,
              "start": 1807,
              "end": 1810
            }
          ],
          "optional": false,
          "start": 1775,
          "end": 1811
        },
        "start": 1769,
        "end": 1811
      },
      "directive": null,
      "start": 1769,
      "end": 1812
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null,
          "start": 1813,
          "end": 1816
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1819,
              "end": 1820
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonMethodWithOwnTypeParameter",
              "optional": false,
              "typeAnnotation": null,
              "start": 1821,
              "end": 1853
            },
            "optional": false,
            "computed": false,
            "start": 1819,
            "end": 1853
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "num",
              "optional": false,
              "typeAnnotation": null,
              "start": 1854,
              "end": 1857
            }
          ],
          "optional": false,
          "start": 1819,
          "end": 1858
        },
        "start": 1813,
        "end": 1858
      },
      "directive": null,
      "start": 1813,
      "end": 1859
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1860,
          "end": 1863
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1866,
              "end": 1867
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonMethodWithOwnTypeParameter",
              "optional": false,
              "typeAnnotation": null,
              "start": 1868,
              "end": 1900
            },
            "optional": false,
            "computed": false,
            "start": 1866,
            "end": 1900
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "str",
              "optional": false,
              "typeAnnotation": null,
              "start": 1901,
              "end": 1904
            }
          ],
          "optional": false,
          "start": 1866,
          "end": 1905
        },
        "start": 1860,
        "end": 1905
      },
      "directive": null,
      "start": 1860,
      "end": 1906
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null,
          "start": 1907,
          "end": 1915
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1918,
              "end": 1919
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonMethodWithOwnTypeParameter",
              "optional": false,
              "typeAnnotation": null,
              "start": 1920,
              "end": 1952
            },
            "optional": false,
            "computed": false,
            "start": 1918,
            "end": 1952
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "strOrNum",
              "optional": false,
              "typeAnnotation": null,
              "start": 1953,
              "end": 1961
            }
          ],
          "optional": false,
          "start": 1918,
          "end": 1962
        },
        "start": 1907,
        "end": 1962
      },
      "directive": null,
      "start": 1907,
      "end": 1963
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1965,
          "end": 1966
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "propertyOnlyInI1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1967,
          "end": 1983
        },
        "optional": false,
        "computed": false,
        "start": 1965,
        "end": 1983
      },
      "directive": null,
      "start": 1965,
      "end": 1984
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1994,
          "end": 1995
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "propertyOnlyInI2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1996,
          "end": 2012
        },
        "optional": false,
        "computed": false,
        "start": 1994,
        "end": 2012
      },
      "directive": null,
      "start": 1994,
      "end": 2013
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 2023,
            "end": 2024
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "methodOnlyInI1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2025,
            "end": 2039
          },
          "optional": false,
          "computed": false,
          "start": 2023,
          "end": 2039
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 2040,
            "end": 2047
          }
        ],
        "optional": false,
        "start": 2023,
        "end": 2048
      },
      "directive": null,
      "start": 2023,
      "end": 2049
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 2059,
            "end": 2060
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "methodOnlyInI2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2061,
            "end": 2075
          },
          "optional": false,
          "computed": false,
          "start": 2059,
          "end": 2075
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 2076,
            "end": 2078
          }
        ],
        "optional": false,
        "start": 2059,
        "end": 2079
      },
      "directive": null,
      "start": 2059,
      "end": 2080
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2089
}
```
