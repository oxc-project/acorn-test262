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
        "name": "DeepObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 87,
        "end": 97
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "k1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 107,
                    "end": 113
                  },
                  "start": 105,
                  "end": 113
                },
                "start": 103,
                "end": 113
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 127,
                            "end": 133
                          },
                          "start": 125,
                          "end": 133
                        },
                        "start": 123,
                        "end": 133
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 136,
                        "end": 139
                      },
                      "start": 134,
                      "end": 139
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 122,
                    "end": 140
                  }
                ],
                "start": 116,
                "end": 144
              },
              "start": 114,
              "end": 144
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 102,
            "end": 145
          }
        ],
        "start": 98,
        "end": 147
      },
      "declare": false,
      "start": 77,
      "end": 147
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "keys2broken",
        "optional": false,
        "typeAnnotation": null,
        "start": 154,
        "end": 165
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 170
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DeepObject",
                "optional": false,
                "typeAnnotation": null,
                "start": 179,
                "end": 189
              },
              "typeArguments": null,
              "start": 179,
              "end": 189
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 169,
            "end": 189
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K1",
              "optional": false,
              "typeAnnotation": null,
              "start": 193,
              "end": 195
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 210,
                  "end": 211
                },
                "typeArguments": null,
                "start": 210,
                "end": 211
              },
              "start": 204,
              "end": 211
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 193,
            "end": 211
          }
        ],
        "start": 165,
        "end": 213
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
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 216,
              "end": 217
            },
            "typeArguments": null,
            "start": 216,
            "end": 217
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K1",
              "optional": false,
              "typeAnnotation": null,
              "start": 218,
              "end": 220
            },
            "typeArguments": null,
            "start": 218,
            "end": 220
          },
          "start": 216,
          "end": 221
        },
        "extendsType": {
          "type": "TSObjectKeyword",
          "start": 230,
          "end": 236
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Extract",
            "optional": false,
            "typeAnnotation": null,
            "start": 239,
            "end": 246
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 253,
                      "end": 254
                    },
                    "typeArguments": null,
                    "start": 253,
                    "end": 254
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 255,
                      "end": 257
                    },
                    "typeArguments": null,
                    "start": 255,
                    "end": 257
                  },
                  "start": 253,
                  "end": 258
                },
                "start": 247,
                "end": 258
              },
              {
                "type": "TSStringKeyword",
                "start": 260,
                "end": 266
              }
            ],
            "start": 246,
            "end": 267
          },
          "start": 239,
          "end": 267
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 270,
          "end": 275
        },
        "start": 216,
        "end": 275
      },
      "declare": false,
      "start": 149,
      "end": 276
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "keys2working",
        "optional": false,
        "typeAnnotation": null,
        "start": 283,
        "end": 295
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 299,
              "end": 300
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DeepObject",
                "optional": false,
                "typeAnnotation": null,
                "start": 309,
                "end": 319
              },
              "typeArguments": null,
              "start": 309,
              "end": 319
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 299,
            "end": 319
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K1",
              "optional": false,
              "typeAnnotation": null,
              "start": 323,
              "end": 325
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 340,
                  "end": 341
                },
                "typeArguments": null,
                "start": 340,
                "end": 341
              },
              "start": 334,
              "end": 341
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 323,
            "end": 341
          }
        ],
        "start": 295,
        "end": 343
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
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 346,
              "end": 347
            },
            "typeArguments": null,
            "start": 346,
            "end": 347
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K1",
              "optional": false,
              "typeAnnotation": null,
              "start": 348,
              "end": 350
            },
            "typeArguments": null,
            "start": 348,
            "end": 350
          },
          "start": 346,
          "end": 351
        },
        "extendsType": {
          "type": "TSObjectKeyword",
          "start": 360,
          "end": 366
        },
        "trueType": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "O",
                "optional": false,
                "typeAnnotation": null,
                "start": 375,
                "end": 376
              },
              "typeArguments": null,
              "start": 375,
              "end": 376
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K1",
                "optional": false,
                "typeAnnotation": null,
                "start": 377,
                "end": 379
              },
              "typeArguments": null,
              "start": 377,
              "end": 379
            },
            "start": 375,
            "end": 380
          },
          "start": 369,
          "end": 380
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 383,
          "end": 388
        },
        "start": 346,
        "end": 388
      },
      "declare": false,
      "start": 278,
      "end": 389
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "keys2workaround",
        "optional": false,
        "typeAnnotation": null,
        "start": 396,
        "end": 411
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 412,
              "end": 413
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DeepObject",
                "optional": false,
                "typeAnnotation": null,
                "start": 422,
                "end": 432
              },
              "typeArguments": null,
              "start": 422,
              "end": 432
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 412,
            "end": 432
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K1",
              "optional": false,
              "typeAnnotation": null,
              "start": 434,
              "end": 436
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 451,
                  "end": 452
                },
                "typeArguments": null,
                "start": 451,
                "end": 452
              },
              "start": 445,
              "end": 452
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 434,
            "end": 452
          }
        ],
        "start": 411,
        "end": 453
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Extract",
          "optional": false,
          "typeAnnotation": null,
          "start": 456,
          "end": 463
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 467,
                    "end": 468
                  },
                  "typeArguments": null,
                  "start": 467,
                  "end": 468
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 469,
                    "end": 471
                  },
                  "typeArguments": null,
                  "start": 469,
                  "end": 471
                },
                "start": 467,
                "end": 472
              },
              "extendsType": {
                "type": "TSObjectKeyword",
                "start": 481,
                "end": 487
              },
              "trueType": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "O",
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
                      "name": "K1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 498,
                      "end": 500
                    },
                    "typeArguments": null,
                    "start": 498,
                    "end": 500
                  },
                  "start": 496,
                  "end": 501
                },
                "start": 490,
                "end": 501
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 504,
                "end": 509
              },
              "start": 467,
              "end": 509
            },
            {
              "type": "TSStringKeyword",
              "start": 513,
              "end": 519
            }
          ],
          "start": 463,
          "end": 521
        },
        "start": 456,
        "end": 521
      },
      "declare": false,
      "start": 391,
      "end": 522
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 534,
        "end": 537
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "DeepObject",
            "optional": false,
            "typeAnnotation": null,
            "start": 546,
            "end": 556
          },
          "typeArguments": null,
          "start": 546,
          "end": 556
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
              "start": 561,
              "end": 562
            },
            "typeAnnotation": {
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
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 570,
                      "end": 573
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 123,
                          "raw": "123",
                          "start": 575,
                          "end": 578
                        },
                        "start": 575,
                        "end": 578
                      },
                      "start": 573,
                      "end": 578
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 570,
                    "end": 579
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "2",
                      "raw": "\"2\"",
                      "start": 584,
                      "end": 587
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 589,
                        "end": 595
                      },
                      "start": 587,
                      "end": 595
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 584,
                    "end": 596
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "3",
                      "raw": "\"3\"",
                      "start": 601,
                      "end": 604
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 606,
                        "end": 613
                      },
                      "start": 604,
                      "end": 613
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 601,
                    "end": 614
                  }
                ],
                "start": 564,
                "end": 618
              },
              "start": 562,
              "end": 618
            },
            "accessibility": null,
            "static": false,
            "start": 561,
            "end": 619
          }
        ],
        "start": 557,
        "end": 621
      },
      "declare": false,
      "start": 524,
      "end": 621
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 629,
        "end": 632
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 633,
              "end": 634
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DeepObject",
                "optional": false,
                "typeAnnotation": null,
                "start": 643,
                "end": 653
              },
              "typeArguments": null,
              "start": 643,
              "end": 653
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 633,
            "end": 653
          }
        ],
        "start": 632,
        "end": 654
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "broken",
              "optional": false,
              "typeAnnotation": null,
              "start": 659,
              "end": 665
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 671,
                      "end": 673
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "O",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 688,
                          "end": 689
                        },
                        "typeArguments": null,
                        "start": 688,
                        "end": 689
                      },
                      "start": 682,
                      "end": 689
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 671,
                    "end": 689
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 695,
                      "end": 697
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "keys2broken",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 706,
                        "end": 717
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "O",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 718,
                              "end": 719
                            },
                            "typeArguments": null,
                            "start": 718,
                            "end": 719
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 721,
                              "end": 723
                            },
                            "typeArguments": null,
                            "start": 721,
                            "end": 723
                          }
                        ],
                        "start": 717,
                        "end": 724
                      },
                      "start": 706,
                      "end": 724
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 695,
                    "end": 724
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 730,
                      "end": 731
                    },
                    "constraint": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "O",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 740,
                            "end": 741
                          },
                          "typeArguments": null,
                          "start": 740,
                          "end": 741
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 742,
                            "end": 744
                          },
                          "typeArguments": null,
                          "start": 742,
                          "end": 744
                        },
                        "start": 740,
                        "end": 745
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 746,
                          "end": 748
                        },
                        "typeArguments": null,
                        "start": 746,
                        "end": 748
                      },
                      "start": 740,
                      "end": 749
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 730,
                    "end": 749
                  }
                ],
                "start": 665,
                "end": 753
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 758,
                        "end": 760
                      },
                      "typeArguments": null,
                      "start": 758,
                      "end": 760
                    },
                    "start": 756,
                    "end": 760
                  },
                  "start": 754,
                  "end": 760
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 766,
                        "end": 768
                      },
                      "typeArguments": null,
                      "start": 766,
                      "end": 768
                    },
                    "start": 764,
                    "end": 768
                  },
                  "start": 762,
                  "end": 768
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 777,
                        "end": 778
                      },
                      "typeArguments": null,
                      "start": 777,
                      "end": 778
                    },
                    "start": 775,
                    "end": 778
                  },
                  "start": 770,
                  "end": 778
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 780,
                "end": 782
              },
              "expression": false,
              "start": 665,
              "end": 782
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 659,
            "end": 782
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "working",
              "optional": false,
              "typeAnnotation": null,
              "start": 786,
              "end": 793
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 799,
                      "end": 801
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "O",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 816,
                          "end": 817
                        },
                        "typeArguments": null,
                        "start": 816,
                        "end": 817
                      },
                      "start": 810,
                      "end": 817
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 799,
                    "end": 817
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 823,
                      "end": 825
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "keys2working",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 834,
                        "end": 846
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "O",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 847,
                              "end": 848
                            },
                            "typeArguments": null,
                            "start": 847,
                            "end": 848
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 850,
                              "end": 852
                            },
                            "typeArguments": null,
                            "start": 850,
                            "end": 852
                          }
                        ],
                        "start": 846,
                        "end": 853
                      },
                      "start": 834,
                      "end": 853
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 823,
                    "end": 853
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 859,
                      "end": 860
                    },
                    "constraint": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "O",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 869,
                            "end": 870
                          },
                          "typeArguments": null,
                          "start": 869,
                          "end": 870
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 871,
                            "end": 873
                          },
                          "typeArguments": null,
                          "start": 871,
                          "end": 873
                        },
                        "start": 869,
                        "end": 874
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 875,
                          "end": 877
                        },
                        "typeArguments": null,
                        "start": 875,
                        "end": 877
                      },
                      "start": 869,
                      "end": 878
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 859,
                    "end": 878
                  }
                ],
                "start": 793,
                "end": 882
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 887,
                        "end": 889
                      },
                      "typeArguments": null,
                      "start": 887,
                      "end": 889
                    },
                    "start": 885,
                    "end": 889
                  },
                  "start": 883,
                  "end": 889
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 895,
                        "end": 897
                      },
                      "typeArguments": null,
                      "start": 895,
                      "end": 897
                    },
                    "start": 893,
                    "end": 897
                  },
                  "start": 891,
                  "end": 897
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 906,
                        "end": 907
                      },
                      "typeArguments": null,
                      "start": 906,
                      "end": 907
                    },
                    "start": 904,
                    "end": 907
                  },
                  "start": 899,
                  "end": 907
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 909,
                "end": 911
              },
              "expression": false,
              "start": 793,
              "end": 911
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 786,
            "end": 911
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "workaround",
              "optional": false,
              "typeAnnotation": null,
              "start": 915,
              "end": 925
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 931,
                      "end": 933
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "O",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 948,
                          "end": 949
                        },
                        "typeArguments": null,
                        "start": 948,
                        "end": 949
                      },
                      "start": 942,
                      "end": 949
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 931,
                    "end": 949
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 955,
                      "end": 957
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "keys2workaround",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 966,
                        "end": 981
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "O",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 982,
                              "end": 983
                            },
                            "typeArguments": null,
                            "start": 982,
                            "end": 983
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 985,
                              "end": 987
                            },
                            "typeArguments": null,
                            "start": 985,
                            "end": 987
                          }
                        ],
                        "start": 981,
                        "end": 988
                      },
                      "start": 966,
                      "end": 988
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 955,
                    "end": 988
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 994,
                      "end": 995
                    },
                    "constraint": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "O",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1004,
                            "end": 1005
                          },
                          "typeArguments": null,
                          "start": 1004,
                          "end": 1005
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1006,
                            "end": 1008
                          },
                          "typeArguments": null,
                          "start": 1006,
                          "end": 1008
                        },
                        "start": 1004,
                        "end": 1009
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1010,
                          "end": 1012
                        },
                        "typeArguments": null,
                        "start": 1010,
                        "end": 1012
                      },
                      "start": 1004,
                      "end": 1013
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 994,
                    "end": 1013
                  }
                ],
                "start": 925,
                "end": 1017
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1022,
                        "end": 1024
                      },
                      "typeArguments": null,
                      "start": 1022,
                      "end": 1024
                    },
                    "start": 1020,
                    "end": 1024
                  },
                  "start": 1018,
                  "end": 1024
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1030,
                        "end": 1032
                      },
                      "typeArguments": null,
                      "start": 1030,
                      "end": 1032
                    },
                    "start": 1028,
                    "end": 1032
                  },
                  "start": 1026,
                  "end": 1032
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1041,
                        "end": 1042
                      },
                      "typeArguments": null,
                      "start": 1041,
                      "end": 1042
                    },
                    "start": 1039,
                    "end": 1042
                  },
                  "start": 1034,
                  "end": 1042
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1044,
                "end": 1046
              },
              "expression": false,
              "start": 925,
              "end": 1046
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 915,
            "end": 1046
          }
        ],
        "start": 655,
        "end": 1048
      },
      "abstract": false,
      "declare": false,
      "start": 623,
      "end": 1048
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
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 1056,
            "end": 1059
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 1066,
              "end": 1069
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1070,
                    "end": 1073
                  },
                  "typeArguments": null,
                  "start": 1070,
                  "end": 1073
                }
              ],
              "start": 1069,
              "end": 1074
            },
            "arguments": [],
            "start": 1062,
            "end": 1076
          },
          "definite": false,
          "start": 1056,
          "end": 1076
        }
      ],
      "declare": false,
      "start": 1050,
      "end": 1077
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
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 1141,
            "end": 1144
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "broken",
            "optional": false,
            "typeAnnotation": null,
            "start": 1145,
            "end": 1151
          },
          "optional": false,
          "computed": false,
          "start": 1141,
          "end": 1151
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "a",
            "raw": "\"a\"",
            "start": 1152,
            "end": 1155
          },
          {
            "type": "Literal",
            "value": "1",
            "raw": "\"1\"",
            "start": 1157,
            "end": 1160
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1162,
            "end": 1166
          }
        ],
        "optional": false,
        "start": 1141,
        "end": 1167
      },
      "directive": null,
      "start": 1141,
      "end": 1168
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
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 1252,
            "end": 1255
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "working",
            "optional": false,
            "typeAnnotation": null,
            "start": 1256,
            "end": 1263
          },
          "optional": false,
          "computed": false,
          "start": 1252,
          "end": 1263
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "a",
            "raw": "\"a\"",
            "start": 1264,
            "end": 1267
          },
          {
            "type": "Literal",
            "value": "1",
            "raw": "\"1\"",
            "start": 1269,
            "end": 1272
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1274,
            "end": 1278
          }
        ],
        "optional": false,
        "start": 1252,
        "end": 1279
      },
      "directive": null,
      "start": 1252,
      "end": 1280
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
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 1309,
            "end": 1312
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "workaround",
            "optional": false,
            "typeAnnotation": null,
            "start": 1313,
            "end": 1323
          },
          "optional": false,
          "computed": false,
          "start": 1309,
          "end": 1323
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "a",
            "raw": "\"a\"",
            "start": 1324,
            "end": 1327
          },
          {
            "type": "Literal",
            "value": "1",
            "raw": "\"1\"",
            "start": 1329,
            "end": 1332
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1334,
            "end": 1338
          }
        ],
        "optional": false,
        "start": 1309,
        "end": 1339
      },
      "directive": null,
      "start": 1309,
      "end": 1340
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 77,
  "end": 1368
}
```
