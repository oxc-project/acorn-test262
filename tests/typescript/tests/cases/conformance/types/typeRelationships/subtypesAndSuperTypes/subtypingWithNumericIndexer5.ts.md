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
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 76
      },
      "typeParameters": null,
      "extends": [],
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 82
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 84,
                "end": 90
              },
              "start": 82,
              "end": 90
            },
            "accessibility": null,
            "static": false,
            "start": 79,
            "end": 91
          }
        ],
        "start": 77,
        "end": 93
      },
      "declare": false,
      "start": 62,
      "end": 93
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 104,
        "end": 111
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 120,
            "end": 124
          },
          "typeArguments": null,
          "start": 120,
          "end": 124
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 130
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 132,
                "end": 138
              },
              "start": 130,
              "end": 138
            },
            "accessibility": null,
            "static": false,
            "start": 127,
            "end": 139
          }
        ],
        "start": 125,
        "end": 141
      },
      "declare": false,
      "start": 94,
      "end": 141
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 152,
        "end": 160
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Derived",
            "optional": false,
            "typeAnnotation": null,
            "start": 169,
            "end": 176
          },
          "typeArguments": null,
          "start": 169,
          "end": 176
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
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 179,
              "end": 182
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 184,
                "end": 190
              },
              "start": 182,
              "end": 190
            },
            "accessibility": null,
            "static": false,
            "start": 179,
            "end": 191
          }
        ],
        "start": 177,
        "end": 193
      },
      "declare": false,
      "start": 142,
      "end": 193
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 205,
        "end": 206
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
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 217,
                    "end": 223
                  },
                  "start": 215,
                  "end": 223
                },
                "start": 214,
                "end": 223
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 226,
                  "end": 233
                },
                "typeArguments": null,
                "start": 226,
                "end": 233
              },
              "start": 224,
              "end": 233
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 213,
            "end": 234
          }
        ],
        "start": 207,
        "end": 236
      },
      "declare": false,
      "start": 195,
      "end": 236
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 244,
        "end": 245
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 257,
            "end": 258
          },
          "typeArguments": null,
          "start": 257,
          "end": 258
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 269,
                    "end": 275
                  },
                  "start": 267,
                  "end": 275
                },
                "start": 266,
                "end": 275
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 278,
                  "end": 282
                },
                "typeArguments": null,
                "start": 278,
                "end": 282
              },
              "start": 276,
              "end": 282
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 265,
            "end": 283
          }
        ],
        "start": 259,
        "end": 294
      },
      "abstract": false,
      "declare": false,
      "start": 238,
      "end": 294
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null,
        "start": 302,
        "end": 304
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 316,
            "end": 317
          },
          "typeArguments": null,
          "start": 316,
          "end": 317
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 328,
                    "end": 334
                  },
                  "start": 326,
                  "end": 334
                },
                "start": 325,
                "end": 334
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 337,
                  "end": 345
                },
                "typeArguments": null,
                "start": 337,
                "end": 345
              },
              "start": 335,
              "end": 345
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 324,
            "end": 346
          }
        ],
        "start": 318,
        "end": 354
      },
      "abstract": false,
      "declare": false,
      "start": 296,
      "end": 354
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Generics",
        "optional": false,
        "typeAnnotation": null,
        "start": 366,
        "end": 374
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 391,
              "end": 392
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
                    "start": 393,
                    "end": 394
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 403,
                      "end": 407
                    },
                    "typeArguments": null,
                    "start": 403,
                    "end": 407
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 393,
                  "end": 407
                }
              ],
              "start": 392,
              "end": 408
            },
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 423,
                          "end": 429
                        },
                        "start": 421,
                        "end": 429
                      },
                      "start": 420,
                      "end": 429
                    }
                  ],
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
                        "start": 432,
                        "end": 433
                      },
                      "typeArguments": null,
                      "start": 432,
                      "end": 433
                    },
                    "start": 430,
                    "end": 433
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 419,
                  "end": 434
                }
              ],
              "start": 409,
              "end": 440
            },
            "declare": false,
            "start": 381,
            "end": 440
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 452,
              "end": 453
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 465,
                  "end": 466
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 467,
                        "end": 471
                      },
                      "typeArguments": null,
                      "start": 467,
                      "end": 471
                    }
                  ],
                  "start": 466,
                  "end": 472
                },
                "start": 465,
                "end": 472
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 487,
                          "end": 493
                        },
                        "start": 485,
                        "end": 493
                      },
                      "start": 484,
                      "end": 493
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 496,
                        "end": 503
                      },
                      "typeArguments": null,
                      "start": 496,
                      "end": 503
                    },
                    "start": 494,
                    "end": 503
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 483,
                  "end": 504
                }
              ],
              "start": 473,
              "end": 516
            },
            "abstract": false,
            "declare": false,
            "start": 446,
            "end": 516
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B2",
              "optional": false,
              "typeAnnotation": null,
              "start": 528,
              "end": 530
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 542,
                  "end": 543
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 544,
                        "end": 551
                      },
                      "typeArguments": null,
                      "start": 544,
                      "end": 551
                    }
                  ],
                  "start": 543,
                  "end": 552
                },
                "start": 542,
                "end": 552
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 567,
                          "end": 573
                        },
                        "start": 565,
                        "end": 573
                      },
                      "start": 564,
                      "end": 573
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 576,
                        "end": 584
                      },
                      "typeArguments": null,
                      "start": 576,
                      "end": 584
                    },
                    "start": 574,
                    "end": 584
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 563,
                  "end": 585
                }
              ],
              "start": 553,
              "end": 597
            },
            "abstract": false,
            "declare": false,
            "start": 522,
            "end": 597
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B3",
              "optional": false,
              "typeAnnotation": null,
              "start": 609,
              "end": 611
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
                    "start": 612,
                    "end": 613
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 622,
                      "end": 629
                    },
                    "typeArguments": null,
                    "start": 622,
                    "end": 629
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 612,
                  "end": 629
                }
              ],
              "start": 611,
              "end": 630
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 642,
                  "end": 643
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
                        "start": 644,
                        "end": 645
                      },
                      "typeArguments": null,
                      "start": 644,
                      "end": 645
                    }
                  ],
                  "start": 643,
                  "end": 646
                },
                "start": 642,
                "end": 646
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 661,
                          "end": 667
                        },
                        "start": 659,
                        "end": 667
                      },
                      "start": 658,
                      "end": 667
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 670,
                        "end": 674
                      },
                      "typeArguments": null,
                      "start": 670,
                      "end": 674
                    },
                    "start": 668,
                    "end": 674
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 657,
                  "end": 675
                }
              ],
              "start": 647,
              "end": 690
            },
            "abstract": false,
            "declare": false,
            "start": 603,
            "end": 690
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B4",
              "optional": false,
              "typeAnnotation": null,
              "start": 702,
              "end": 704
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
                    "start": 705,
                    "end": 706
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 715,
                      "end": 722
                    },
                    "typeArguments": null,
                    "start": 715,
                    "end": 722
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 705,
                  "end": 722
                }
              ],
              "start": 704,
              "end": 723
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 735,
                  "end": 736
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
                        "start": 737,
                        "end": 738
                      },
                      "typeArguments": null,
                      "start": 737,
                      "end": 738
                    }
                  ],
                  "start": 736,
                  "end": 739
                },
                "start": 735,
                "end": 739
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 754,
                          "end": 760
                        },
                        "start": 752,
                        "end": 760
                      },
                      "start": 751,
                      "end": 760
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 763,
                        "end": 770
                      },
                      "typeArguments": null,
                      "start": 763,
                      "end": 770
                    },
                    "start": 761,
                    "end": 770
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 750,
                  "end": 771
                }
              ],
              "start": 740,
              "end": 786
            },
            "abstract": false,
            "declare": false,
            "start": 696,
            "end": 786
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B5",
              "optional": false,
              "typeAnnotation": null,
              "start": 798,
              "end": 800
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
                    "start": 801,
                    "end": 802
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 811,
                      "end": 819
                    },
                    "typeArguments": null,
                    "start": 811,
                    "end": 819
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 801,
                  "end": 819
                }
              ],
              "start": 800,
              "end": 820
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 832,
                  "end": 833
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
                        "start": 834,
                        "end": 835
                      },
                      "typeArguments": null,
                      "start": 834,
                      "end": 835
                    }
                  ],
                  "start": 833,
                  "end": 836
                },
                "start": 832,
                "end": 836
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 851,
                          "end": 857
                        },
                        "start": 849,
                        "end": 857
                      },
                      "start": 848,
                      "end": 857
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 860,
                        "end": 868
                      },
                      "typeArguments": null,
                      "start": 860,
                      "end": 868
                    },
                    "start": 858,
                    "end": 868
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 847,
                  "end": 869
                }
              ],
              "start": 837,
              "end": 884
            },
            "abstract": false,
            "declare": false,
            "start": 792,
            "end": 884
          }
        ],
        "start": 375,
        "end": 886
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 356,
      "end": 886
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 62,
  "end": 886
}
```
