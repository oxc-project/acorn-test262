__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Node",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 18
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Options",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 26
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 29,
              "end": 32
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 19,
            "end": 32
          }
        ],
        "start": 18,
        "end": 33
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 42
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 44,
                "end": 50
              },
              "start": 42,
              "end": 50
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 38,
            "end": 51
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 54,
              "end": 58
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 60,
                "end": 66
              },
              "start": 58,
              "end": 66
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 54,
            "end": 67
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "parent",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 76
            },
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
                      "name": "Node",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 78,
                      "end": 82
                    },
                    "typeArguments": null,
                    "start": 78,
                    "end": 82
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 85,
                    "end": 89
                  }
                ],
                "start": 78,
                "end": 89
              },
              "start": 76,
              "end": 89
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 70,
            "end": 90
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "child",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 98
            },
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
                      "name": "Node",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 100,
                      "end": 104
                    },
                    "typeArguments": null,
                    "start": 100,
                    "end": 104
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 107,
                    "end": 111
                  }
                ],
                "start": 100,
                "end": 111
              },
              "start": 98,
              "end": 111
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 93,
            "end": 112
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "options",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 122
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Options",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 124,
                  "end": 131
                },
                "typeArguments": null,
                "start": 124,
                "end": 131
              },
              "start": 122,
              "end": 131
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 115,
            "end": 132
          }
        ],
        "start": 34,
        "end": 134
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 134
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NodeConfig",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 156
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Options",
              "optional": false,
              "typeAnnotation": null,
              "start": 157,
              "end": 164
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 167,
              "end": 170
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 157,
            "end": 170
          }
        ],
        "start": 156,
        "end": 171
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "extendMarkSchema",
              "optional": false,
              "typeAnnotation": null,
              "start": 176,
              "end": 192
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "this",
                        "optional": false,
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
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "name",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 230,
                                  "end": 234
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 236,
                                    "end": 242
                                  },
                                  "start": 234,
                                  "end": 242
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 230,
                                "end": 243
                              },
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "options",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 254,
                                  "end": 261
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Options",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 263,
                                      "end": 270
                                    },
                                    "typeArguments": null,
                                    "start": 263,
                                    "end": 270
                                  },
                                  "start": 261,
                                  "end": 270
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 254,
                                "end": 271
                              }
                            ],
                            "start": 218,
                            "end": 281
                          },
                          "start": 216,
                          "end": 281
                        },
                        "start": 212,
                        "end": 281
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "extension",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Node",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 302,
                              "end": 306
                            },
                            "typeArguments": null,
                            "start": 302,
                            "end": 306
                          },
                          "start": 300,
                          "end": 306
                        },
                        "start": 291,
                        "end": 306
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Record",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 319,
                          "end": 325
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 326,
                              "end": 332
                            },
                            {
                              "type": "TSAnyKeyword",
                              "start": 334,
                              "end": 337
                            }
                          ],
                          "start": 325,
                          "end": 338
                        },
                        "start": 319,
                        "end": 338
                      },
                      "start": 316,
                      "end": 338
                    },
                    "start": 202,
                    "end": 338
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 346,
                    "end": 350
                  }
                ],
                "start": 199,
                "end": 350
              },
              "start": 193,
              "end": 350
            },
            "accessibility": null,
            "static": false,
            "start": 176,
            "end": 351
          }
        ],
        "start": 172,
        "end": 353
      },
      "declare": false,
      "start": 136,
      "end": 353
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mark",
        "optional": false,
        "typeAnnotation": null,
        "start": 369,
        "end": 373
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Options",
              "optional": false,
              "typeAnnotation": null,
              "start": 374,
              "end": 381
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 384,
              "end": 387
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 374,
            "end": 387
          }
        ],
        "start": 373,
        "end": 388
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "options",
              "optional": false,
              "typeAnnotation": null,
              "start": 393,
              "end": 400
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Options",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 402,
                  "end": 409
                },
                "typeArguments": null,
                "start": 402,
                "end": 409
              },
              "start": 400,
              "end": 409
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 393,
            "end": 410
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "config",
              "optional": false,
              "typeAnnotation": null,
              "start": 413,
              "end": 419
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MarkConfig",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 421,
                  "end": 431
                },
                "typeArguments": null,
                "start": 421,
                "end": 431
              },
              "start": 419,
              "end": 431
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 413,
            "end": 432
          }
        ],
        "start": 389,
        "end": 434
      },
      "abstract": false,
      "declare": true,
      "start": 355,
      "end": 434
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MarkConfig",
        "optional": false,
        "typeAnnotation": null,
        "start": 446,
        "end": 456
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Options",
              "optional": false,
              "typeAnnotation": null,
              "start": 457,
              "end": 464
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 467,
              "end": 470
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 457,
            "end": 470
          }
        ],
        "start": 456,
        "end": 471
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "extendMarkSchema",
              "optional": false,
              "typeAnnotation": null,
              "start": 476,
              "end": 492
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "this",
                        "optional": false,
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
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "name",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 530,
                                  "end": 534
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 536,
                                    "end": 542
                                  },
                                  "start": 534,
                                  "end": 542
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 530,
                                "end": 543
                              },
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "options",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 554,
                                  "end": 561
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Options",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 563,
                                      "end": 570
                                    },
                                    "typeArguments": null,
                                    "start": 563,
                                    "end": 570
                                  },
                                  "start": 561,
                                  "end": 570
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 554,
                                "end": 571
                              }
                            ],
                            "start": 518,
                            "end": 581
                          },
                          "start": 516,
                          "end": 581
                        },
                        "start": 512,
                        "end": 581
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "extension",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Mark",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 602,
                              "end": 606
                            },
                            "typeArguments": null,
                            "start": 602,
                            "end": 606
                          },
                          "start": 600,
                          "end": 606
                        },
                        "start": 591,
                        "end": 606
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Record",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 619,
                          "end": 625
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 626,
                              "end": 632
                            },
                            {
                              "type": "TSAnyKeyword",
                              "start": 634,
                              "end": 637
                            }
                          ],
                          "start": 625,
                          "end": 638
                        },
                        "start": 619,
                        "end": 638
                      },
                      "start": 616,
                      "end": 638
                    },
                    "start": 502,
                    "end": 638
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 646,
                    "end": 650
                  }
                ],
                "start": 499,
                "end": 650
              },
              "start": 493,
              "end": 650
            },
            "accessibility": null,
            "static": false,
            "start": 476,
            "end": 651
          }
        ],
        "start": 472,
        "end": 653
      },
      "declare": false,
      "start": 436,
      "end": 653
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnyConfig",
        "optional": false,
        "typeAnnotation": null,
        "start": 660,
        "end": 669
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "NodeConfig",
              "optional": false,
              "typeAnnotation": null,
              "start": 672,
              "end": 682
            },
            "typeArguments": null,
            "start": 672,
            "end": 682
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "MarkConfig",
              "optional": false,
              "typeAnnotation": null,
              "start": 685,
              "end": 695
            },
            "typeArguments": null,
            "start": 685,
            "end": 695
          }
        ],
        "start": 672,
        "end": 695
      },
      "declare": false,
      "start": 655,
      "end": 696
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnyExtension",
        "optional": false,
        "typeAnnotation": null,
        "start": 702,
        "end": 714
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Node",
              "optional": false,
              "typeAnnotation": null,
              "start": 717,
              "end": 721
            },
            "typeArguments": null,
            "start": 717,
            "end": 721
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Mark",
              "optional": false,
              "typeAnnotation": null,
              "start": 724,
              "end": 728
            },
            "typeArguments": null,
            "start": 724,
            "end": 728
          }
        ],
        "start": 717,
        "end": 728
      },
      "declare": false,
      "start": 697,
      "end": 729
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
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AnyExtension",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 748,
                  "end": 760
                },
                "typeArguments": null,
                "start": 748,
                "end": 760
              },
              "start": 746,
              "end": 760
            },
            "start": 745,
            "end": 760
          },
          "init": null,
          "definite": false,
          "start": 745,
          "end": 760
        }
      ],
      "declare": true,
      "start": 731,
      "end": 761
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RemoveThis",
        "optional": false,
        "typeAnnotation": null,
        "start": 768,
        "end": 778
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
              "start": 779,
              "end": 780
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 779,
            "end": 780
          }
        ],
        "start": 778,
        "end": 781
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
            "start": 784,
            "end": 785
          },
          "typeArguments": null,
          "start": 784,
          "end": 785
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
                "start": 798,
                "end": 802
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 804,
                  "end": 807
                },
                "start": 802,
                "end": 807
              },
              "value": null,
              "start": 795,
              "end": 807
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 812,
              "end": 815
            },
            "start": 809,
            "end": 815
          },
          "start": 794,
          "end": 815
        },
        "trueType": {
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
                "start": 824,
                "end": 828
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Parameters",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 830,
                    "end": 840
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
                          "start": 841,
                          "end": 842
                        },
                        "typeArguments": null,
                        "start": 841,
                        "end": 842
                      }
                    ],
                    "start": 840,
                    "end": 843
                  },
                  "start": 830,
                  "end": 843
                },
                "start": 828,
                "end": 843
              },
              "value": null,
              "start": 821,
              "end": 843
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReturnType",
                "optional": false,
                "typeAnnotation": null,
                "start": 848,
                "end": 858
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
                      "start": 859,
                      "end": 860
                    },
                    "typeArguments": null,
                    "start": 859,
                    "end": 860
                  }
                ],
                "start": 858,
                "end": 861
              },
              "start": 848,
              "end": 861
            },
            "start": 845,
            "end": 861
          },
          "start": 820,
          "end": 861
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 866,
            "end": 867
          },
          "typeArguments": null,
          "start": 866,
          "end": 867
        },
        "start": 784,
        "end": 867
      },
      "declare": false,
      "start": 763,
      "end": 868
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getExtensionField",
        "optional": false,
        "typeAnnotation": null,
        "start": 887,
        "end": 904
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 905,
              "end": 906
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 909,
              "end": 912
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 905,
            "end": 912
          }
        ],
        "start": 904,
        "end": 913
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "extension",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AnyExtension",
                "optional": false,
                "typeAnnotation": null,
                "start": 928,
                "end": 940
              },
              "typeArguments": null,
              "start": 928,
              "end": 940
            },
            "start": 926,
            "end": 940
          },
          "start": 917,
          "end": 940
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "field",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 951,
              "end": 957
            },
            "start": 949,
            "end": 957
          },
          "start": 944,
          "end": 957
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "RemoveThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 962,
            "end": 972
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
                  "start": 973,
                  "end": 974
                },
                "typeArguments": null,
                "start": 973,
                "end": 974
              }
            ],
            "start": 972,
            "end": 975
          },
          "start": 962,
          "end": 975
        },
        "start": 960,
        "end": 975
      },
      "body": null,
      "expression": false,
      "start": 870,
      "end": 976
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
            "name": "extendMarkSchema",
            "optional": false,
            "typeAnnotation": null,
            "start": 984,
            "end": 1000
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getExtensionField",
              "optional": false,
              "typeAnnotation": null,
              "start": 1003,
              "end": 1020
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AnyConfig",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1021,
                      "end": 1030
                    },
                    "typeArguments": null,
                    "start": 1021,
                    "end": 1030
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "extendMarkSchema",
                      "raw": "\"extendMarkSchema\"",
                      "start": 1031,
                      "end": 1049
                    },
                    "start": 1031,
                    "end": 1049
                  },
                  "start": 1021,
                  "end": 1050
                }
              ],
              "start": 1020,
              "end": 1051
            },
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1055,
                "end": 1056
              },
              {
                "type": "Literal",
                "value": "extendMarkSchema",
                "raw": "\"extendMarkSchema\"",
                "start": 1060,
                "end": 1078
              }
            ],
            "optional": false,
            "start": 1003,
            "end": 1081
          },
          "definite": false,
          "start": 984,
          "end": 1081
        }
      ],
      "declare": false,
      "start": 978,
      "end": 1082
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
            "name": "extension",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Mark",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1109,
                  "end": 1113
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 1114,
                      "end": 1117
                    }
                  ],
                  "start": 1113,
                  "end": 1118
                },
                "start": 1109,
                "end": 1118
              },
              "start": 1107,
              "end": 1118
            },
            "start": 1098,
            "end": 1118
          },
          "init": null,
          "definite": false,
          "start": 1098,
          "end": 1118
        }
      ],
      "declare": true,
      "start": 1084,
      "end": 1119
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "extendMarkSchema",
        "optional": false,
        "typeAnnotation": null,
        "start": 1125,
        "end": 1141
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "extendMarkSchema",
                "optional": false,
                "typeAnnotation": null,
                "start": 1147,
                "end": 1163
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "extension",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1164,
                  "end": 1173
                }
              ],
              "optional": false,
              "start": 1147,
              "end": 1174
            },
            "directive": null,
            "start": 1147,
            "end": 1175
          }
        ],
        "start": 1143,
        "end": 1186
      },
      "alternate": null,
      "start": 1121,
      "end": 1186
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1188,
      "end": 1198
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1198
}
```
