__ESTREE_TEST__:AST:
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
              "name": "item",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 19
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 20,
                "end": 26
              },
              "start": 19,
              "end": 26
            },
            "accessibility": null,
            "static": false,
            "start": 15,
            "end": 27
          }
        ],
        "start": 13,
        "end": 29
      },
      "declare": false,
      "start": 0,
      "end": 29
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M1",
        "optional": false,
        "typeAnnotation": null,
        "start": 41,
        "end": 43
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I1",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 62
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
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 65,
                    "end": 69
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 70,
                      "end": 76
                    },
                    "start": 69,
                    "end": 76
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 65,
                  "end": 77
                }
              ],
              "start": 63,
              "end": 79
            },
            "declare": false,
            "start": 50,
            "end": 79
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 98
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
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 101,
                    "end": 105
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 106,
                      "end": 112
                    },
                    "start": 105,
                    "end": 112
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 101,
                  "end": 113
                }
              ],
              "start": 99,
              "end": 115
            },
            "declare": false,
            "start": 86,
            "end": 115
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 131
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
                  "name": "I1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 143,
                  "end": 145
                },
                "typeArguments": null,
                "start": 143,
                "end": 145
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 163,
                    "end": 167
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 168,
                      "end": 174
                    },
                    "start": 167,
                    "end": 174
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 156,
                  "end": 175
                }
              ],
              "start": 146,
              "end": 181
            },
            "abstract": false,
            "declare": false,
            "start": 123,
            "end": 181
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null,
              "start": 192,
              "end": 194
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
                  "name": "I1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 206,
                  "end": 208
                },
                "typeArguments": null,
                "start": 206,
                "end": 208
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 226,
                    "end": 230
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 231,
                      "end": 237
                    },
                    "start": 230,
                    "end": 237
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 219,
                  "end": 238
                }
              ],
              "start": 209,
              "end": 244
            },
            "abstract": false,
            "declare": false,
            "start": 186,
            "end": 244
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C3",
              "optional": false,
              "typeAnnotation": null,
              "start": 255,
              "end": 257
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
                  "name": "I2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 269,
                  "end": 271
                },
                "typeArguments": null,
                "start": 269,
                "end": 271
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 289,
                    "end": 293
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 294,
                      "end": 300
                    },
                    "start": 293,
                    "end": 300
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 282,
                  "end": 301
                }
              ],
              "start": 272,
              "end": 307
            },
            "abstract": false,
            "declare": false,
            "start": 249,
            "end": 307
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C4",
              "optional": false,
              "typeAnnotation": null,
              "start": 323,
              "end": 325
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 337,
                    "end": 339
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 340,
                    "end": 342
                  },
                  "optional": false,
                  "computed": false,
                  "start": 337,
                  "end": 342
                },
                "typeArguments": null,
                "start": 337,
                "end": 342
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 361,
                    "end": 365
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 366,
                      "end": 372
                    },
                    "start": 365,
                    "end": 372
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 354,
                  "end": 373
                }
              ],
              "start": 343,
              "end": 379
            },
            "abstract": false,
            "declare": false,
            "start": 317,
            "end": 379
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C5",
              "optional": false,
              "typeAnnotation": null,
              "start": 391,
              "end": 393
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 405,
                      "end": 407
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 408,
                      "end": 410
                    },
                    "optional": false,
                    "computed": false,
                    "start": 405,
                    "end": 410
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 411,
                    "end": 413
                  },
                  "optional": false,
                  "computed": false,
                  "start": 405,
                  "end": 413
                },
                "typeArguments": null,
                "start": 405,
                "end": 413
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 431,
                    "end": 435
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 436,
                      "end": 442
                    },
                    "start": 435,
                    "end": 442
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 424,
                  "end": 443
                }
              ],
              "start": 414,
              "end": 449
            },
            "abstract": false,
            "declare": false,
            "start": 385,
            "end": 449
          }
        ],
        "start": 44,
        "end": 451
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 31,
      "end": 451
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "M2",
          "optional": false,
          "typeAnnotation": null,
          "start": 470,
          "end": 472
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 496,
                  "end": 498
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
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 501,
                        "end": 505
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 506,
                          "end": 512
                        },
                        "start": 505,
                        "end": 512
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 501,
                      "end": 513
                    }
                  ],
                  "start": 499,
                  "end": 515
                },
                "declare": false,
                "start": 486,
                "end": 515
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 479,
              "end": 515
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 537,
                  "end": 539
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
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 542,
                        "end": 546
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 547,
                          "end": 553
                        },
                        "start": 546,
                        "end": 553
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 542,
                      "end": 554
                    }
                  ],
                  "start": 540,
                  "end": 556
                },
                "declare": false,
                "start": 527,
                "end": 556
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 520,
              "end": 556
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSModuleDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 578,
                  "end": 580
                },
                "body": {
                  "type": "TSModuleBlock",
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "declaration": {
                        "type": "TSInterfaceDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 608,
                          "end": 610
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
                                "name": "item",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 613,
                                "end": 617
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 618,
                                  "end": 624
                                },
                                "start": 617,
                                "end": 624
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 613,
                              "end": 625
                            }
                          ],
                          "start": 611,
                          "end": 627
                        },
                        "declare": false,
                        "start": 598,
                        "end": 627
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "type",
                      "attributes": [],
                      "start": 591,
                      "end": 627
                    }
                  ],
                  "start": 581,
                  "end": 633
                },
                "kind": "namespace",
                "declare": false,
                "global": false,
                "start": 568,
                "end": 633
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 561,
              "end": 633
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C1",
                "optional": false,
                "typeAnnotation": null,
                "start": 644,
                "end": 646
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
                    "name": "I1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 658,
                    "end": 660
                  },
                  "typeArguments": null,
                  "start": 658,
                  "end": 660
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 678,
                      "end": 682
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 683,
                        "end": 689
                      },
                      "start": 682,
                      "end": 689
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 671,
                    "end": 690
                  }
                ],
                "start": 661,
                "end": 700
              },
              "abstract": false,
              "declare": false,
              "start": 638,
              "end": 700
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C2",
                "optional": false,
                "typeAnnotation": null,
                "start": 711,
                "end": 713
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
                    "name": "I1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 725,
                    "end": 727
                  },
                  "typeArguments": null,
                  "start": 725,
                  "end": 727
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 745,
                      "end": 749
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 750,
                        "end": 756
                      },
                      "start": 749,
                      "end": 756
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 738,
                    "end": 757
                  }
                ],
                "start": 728,
                "end": 767
              },
              "abstract": false,
              "declare": false,
              "start": 705,
              "end": 767
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C3",
                "optional": false,
                "typeAnnotation": null,
                "start": 778,
                "end": 780
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
                    "name": "I2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 792,
                    "end": 794
                  },
                  "typeArguments": null,
                  "start": 792,
                  "end": 794
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 812,
                      "end": 816
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 817,
                        "end": 823
                      },
                      "start": 816,
                      "end": 823
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 805,
                    "end": 824
                  }
                ],
                "start": 795,
                "end": 834
              },
              "abstract": false,
              "declare": false,
              "start": 772,
              "end": 834
            }
          ],
          "start": 473,
          "end": 836
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 460,
        "end": 836
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 453,
      "end": 836
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 844,
        "end": 846
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
            "name": "I1",
            "optional": false,
            "typeAnnotation": null,
            "start": 858,
            "end": 860
          },
          "typeArguments": null,
          "start": 858,
          "end": 860
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null,
              "start": 874,
              "end": 878
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 879,
                "end": 885
              },
              "start": 878,
              "end": 885
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 867,
            "end": 886
          }
        ],
        "start": 861,
        "end": 888
      },
      "abstract": false,
      "declare": false,
      "start": 838,
      "end": 888
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 896,
        "end": 898
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M2",
              "optional": false,
              "typeAnnotation": null,
              "start": 910,
              "end": 912
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "I1",
              "optional": false,
              "typeAnnotation": null,
              "start": 913,
              "end": 915
            },
            "optional": false,
            "computed": false,
            "start": 910,
            "end": 915
          },
          "typeArguments": null,
          "start": 910,
          "end": 915
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null,
              "start": 930,
              "end": 934
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 935,
                "end": 941
              },
              "start": 934,
              "end": 941
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 923,
            "end": 942
          }
        ],
        "start": 916,
        "end": 944
      },
      "abstract": false,
      "declare": false,
      "start": 890,
      "end": 944
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 952,
        "end": 954
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M2",
                "optional": false,
                "typeAnnotation": null,
                "start": 966,
                "end": 968
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "M3",
                "optional": false,
                "typeAnnotation": null,
                "start": 969,
                "end": 971
              },
              "optional": false,
              "computed": false,
              "start": 966,
              "end": 971
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "I1",
              "optional": false,
              "typeAnnotation": null,
              "start": 972,
              "end": 974
            },
            "optional": false,
            "computed": false,
            "start": 966,
            "end": 974
          },
          "typeArguments": null,
          "start": 966,
          "end": 974
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null,
              "start": 988,
              "end": 992
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 993,
                "end": 999
              },
              "start": 992,
              "end": 999
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 981,
            "end": 1000
          }
        ],
        "start": 975,
        "end": 1002
      },
      "abstract": false,
      "declare": false,
      "start": 946,
      "end": 1002
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1014,
        "end": 1016
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1025,
            "end": 1027
          },
          "typeArguments": null,
          "start": 1025,
          "end": 1027
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
              "name": "item",
              "optional": false,
              "typeAnnotation": null,
              "start": 1030,
              "end": 1034
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1035,
                "end": 1041
              },
              "start": 1034,
              "end": 1041
            },
            "accessibility": null,
            "static": false,
            "start": 1030,
            "end": 1042
          }
        ],
        "start": 1028,
        "end": 1044
      },
      "declare": false,
      "start": 1004,
      "end": 1044
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1044
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 10,
    "end": 12,
    "range": [
      10,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 15,
    "end": 19,
    "range": [
      15,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 20,
    "end": 26,
    "range": [
      20,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 31,
    "end": 40,
    "range": [
      31,
      40
    ]
  },
  {
    "type": "Identifier",
    "value": "M1",
    "start": 41,
    "end": 43,
    "range": [
      41,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 50,
    "end": 59,
    "range": [
      50,
      59
    ]
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 60,
    "end": 62,
    "range": [
      60,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 65,
    "end": 69,
    "range": [
      65,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 70,
    "end": 76,
    "range": [
      70,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 86,
    "end": 95,
    "range": [
      86,
      95
    ]
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 96,
    "end": 98,
    "range": [
      96,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 101,
    "end": 105,
    "range": [
      101,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 106,
    "end": 112,
    "range": [
      106,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 123,
    "end": 128,
    "range": [
      123,
      128
    ]
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 129,
    "end": 131,
    "range": [
      129,
      131
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 132,
    "end": 142,
    "range": [
      132,
      142
    ]
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 143,
    "end": 145,
    "range": [
      143,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 156,
    "end": 162,
    "range": [
      156,
      162
    ]
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 163,
    "end": 167,
    "range": [
      163,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 168,
    "end": 174,
    "range": [
      168,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 186,
    "end": 191,
    "range": [
      186,
      191
    ]
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 192,
    "end": 194,
    "range": [
      192,
      194
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 195,
    "end": 205,
    "range": [
      195,
      205
    ]
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 206,
    "end": 208,
    "range": [
      206,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 219,
    "end": 225,
    "range": [
      219,
      225
    ]
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 226,
    "end": 230,
    "range": [
      226,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 231,
    "end": 237,
    "range": [
      231,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 249,
    "end": 254,
    "range": [
      249,
      254
    ]
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 255,
    "end": 257,
    "range": [
      255,
      257
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 258,
    "end": 268,
    "range": [
      258,
      268
    ]
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 269,
    "end": 271,
    "range": [
      269,
      271
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 282,
    "end": 288,
    "range": [
      282,
      288
    ]
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 289,
    "end": 293,
    "range": [
      289,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 294,
    "end": 300,
    "range": [
      294,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 317,
    "end": 322,
    "range": [
      317,
      322
    ]
  },
  {
    "type": "Identifier",
    "value": "C4",
    "start": 323,
    "end": 325,
    "range": [
      323,
      325
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 326,
    "end": 336,
    "range": [
      326,
      336
    ]
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 337,
    "end": 339,
    "range": [
      337,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 340,
    "end": 342,
    "range": [
      340,
      342
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 354,
    "end": 360,
    "range": [
      354,
      360
    ]
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 361,
    "end": 365,
    "range": [
      361,
      365
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 366,
    "end": 372,
    "range": [
      366,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 385,
    "end": 390,
    "range": [
      385,
      390
    ]
  },
  {
    "type": "Identifier",
    "value": "C5",
    "start": 391,
    "end": 393,
    "range": [
      391,
      393
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 394,
    "end": 404,
    "range": [
      394,
      404
    ]
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 405,
    "end": 407,
    "range": [
      405,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Identifier",
    "value": "M3",
    "start": 408,
    "end": 410,
    "range": [
      408,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 411,
    "end": 413,
    "range": [
      411,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 424,
    "end": 430,
    "range": [
      424,
      430
    ]
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 431,
    "end": 435,
    "range": [
      431,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 436,
    "end": 442,
    "range": [
      436,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 453,
    "end": 459,
    "range": [
      453,
      459
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 460,
    "end": 469,
    "range": [
      460,
      469
    ]
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 470,
    "end": 472,
    "range": [
      470,
      472
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 479,
    "end": 485,
    "range": [
      479,
      485
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 486,
    "end": 495,
    "range": [
      486,
      495
    ]
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 496,
    "end": 498,
    "range": [
      496,
      498
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 501,
    "end": 505,
    "range": [
      501,
      505
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 505,
    "end": 506,
    "range": [
      505,
      506
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 506,
    "end": 512,
    "range": [
      506,
      512
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 512,
    "end": 513,
    "range": [
      512,
      513
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 514,
    "end": 515,
    "range": [
      514,
      515
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 520,
    "end": 526,
    "range": [
      520,
      526
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 527,
    "end": 536,
    "range": [
      527,
      536
    ]
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 537,
    "end": 539,
    "range": [
      537,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 542,
    "end": 546,
    "range": [
      542,
      546
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 546,
    "end": 547,
    "range": [
      546,
      547
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 547,
    "end": 553,
    "range": [
      547,
      553
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 553,
    "end": 554,
    "range": [
      553,
      554
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 555,
    "end": 556,
    "range": [
      555,
      556
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 561,
    "end": 567,
    "range": [
      561,
      567
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 568,
    "end": 577,
    "range": [
      568,
      577
    ]
  },
  {
    "type": "Identifier",
    "value": "M3",
    "start": 578,
    "end": 580,
    "range": [
      578,
      580
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 591,
    "end": 597,
    "range": [
      591,
      597
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 598,
    "end": 607,
    "range": [
      598,
      607
    ]
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 608,
    "end": 610,
    "range": [
      608,
      610
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 613,
    "end": 617,
    "range": [
      613,
      617
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 617,
    "end": 618,
    "range": [
      617,
      618
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 618,
    "end": 624,
    "range": [
      618,
      624
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 626,
    "end": 627,
    "range": [
      626,
      627
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 632,
    "end": 633,
    "range": [
      632,
      633
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 638,
    "end": 643,
    "range": [
      638,
      643
    ]
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 644,
    "end": 646,
    "range": [
      644,
      646
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 647,
    "end": 657,
    "range": [
      647,
      657
    ]
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 658,
    "end": 660,
    "range": [
      658,
      660
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 671,
    "end": 677,
    "range": [
      671,
      677
    ]
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 678,
    "end": 682,
    "range": [
      678,
      682
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 682,
    "end": 683,
    "range": [
      682,
      683
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 683,
    "end": 689,
    "range": [
      683,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 699,
    "end": 700,
    "range": [
      699,
      700
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 705,
    "end": 710,
    "range": [
      705,
      710
    ]
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 711,
    "end": 713,
    "range": [
      711,
      713
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 714,
    "end": 724,
    "range": [
      714,
      724
    ]
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 725,
    "end": 727,
    "range": [
      725,
      727
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 728,
    "end": 729,
    "range": [
      728,
      729
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 738,
    "end": 744,
    "range": [
      738,
      744
    ]
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 745,
    "end": 749,
    "range": [
      745,
      749
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 749,
    "end": 750,
    "range": [
      749,
      750
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 750,
    "end": 756,
    "range": [
      750,
      756
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 756,
    "end": 757,
    "range": [
      756,
      757
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 766,
    "end": 767,
    "range": [
      766,
      767
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 772,
    "end": 777,
    "range": [
      772,
      777
    ]
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 778,
    "end": 780,
    "range": [
      778,
      780
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 781,
    "end": 791,
    "range": [
      781,
      791
    ]
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 792,
    "end": 794,
    "range": [
      792,
      794
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 795,
    "end": 796,
    "range": [
      795,
      796
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 805,
    "end": 811,
    "range": [
      805,
      811
    ]
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 812,
    "end": 816,
    "range": [
      812,
      816
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 816,
    "end": 817,
    "range": [
      816,
      817
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 817,
    "end": 823,
    "range": [
      817,
      823
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 823,
    "end": 824,
    "range": [
      823,
      824
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 833,
    "end": 834,
    "range": [
      833,
      834
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 835,
    "end": 836,
    "range": [
      835,
      836
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 838,
    "end": 843,
    "range": [
      838,
      843
    ]
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 844,
    "end": 846,
    "range": [
      844,
      846
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 847,
    "end": 857,
    "range": [
      847,
      857
    ]
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 858,
    "end": 860,
    "range": [
      858,
      860
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 861,
    "end": 862,
    "range": [
      861,
      862
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 867,
    "end": 873,
    "range": [
      867,
      873
    ]
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 874,
    "end": 878,
    "range": [
      874,
      878
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 878,
    "end": 879,
    "range": [
      878,
      879
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 879,
    "end": 885,
    "range": [
      879,
      885
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 885,
    "end": 886,
    "range": [
      885,
      886
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 887,
    "end": 888,
    "range": [
      887,
      888
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 890,
    "end": 895,
    "range": [
      890,
      895
    ]
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 896,
    "end": 898,
    "range": [
      896,
      898
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 899,
    "end": 909,
    "range": [
      899,
      909
    ]
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 910,
    "end": 912,
    "range": [
      910,
      912
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 912,
    "end": 913,
    "range": [
      912,
      913
    ]
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 913,
    "end": 915,
    "range": [
      913,
      915
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 916,
    "end": 917,
    "range": [
      916,
      917
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 923,
    "end": 929,
    "range": [
      923,
      929
    ]
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 930,
    "end": 934,
    "range": [
      930,
      934
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 934,
    "end": 935,
    "range": [
      934,
      935
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 935,
    "end": 941,
    "range": [
      935,
      941
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 941,
    "end": 942,
    "range": [
      941,
      942
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 943,
    "end": 944,
    "range": [
      943,
      944
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 946,
    "end": 951,
    "range": [
      946,
      951
    ]
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 952,
    "end": 954,
    "range": [
      952,
      954
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 955,
    "end": 965,
    "range": [
      955,
      965
    ]
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 966,
    "end": 968,
    "range": [
      966,
      968
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 968,
    "end": 969,
    "range": [
      968,
      969
    ]
  },
  {
    "type": "Identifier",
    "value": "M3",
    "start": 969,
    "end": 971,
    "range": [
      969,
      971
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 971,
    "end": 972,
    "range": [
      971,
      972
    ]
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 972,
    "end": 974,
    "range": [
      972,
      974
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 975,
    "end": 976,
    "range": [
      975,
      976
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 981,
    "end": 987,
    "range": [
      981,
      987
    ]
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 988,
    "end": 992,
    "range": [
      988,
      992
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 992,
    "end": 993,
    "range": [
      992,
      993
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 993,
    "end": 999,
    "range": [
      993,
      999
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 999,
    "end": 1000,
    "range": [
      999,
      1000
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1001,
    "end": 1002,
    "range": [
      1001,
      1002
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1004,
    "end": 1013,
    "range": [
      1004,
      1013
    ]
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 1014,
    "end": 1016,
    "range": [
      1014,
      1016
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1017,
    "end": 1024,
    "range": [
      1017,
      1024
    ]
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 1025,
    "end": 1027,
    "range": [
      1025,
      1027
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1028,
    "end": 1029,
    "range": [
      1028,
      1029
    ]
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 1030,
    "end": 1034,
    "range": [
      1030,
      1034
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1034,
    "end": 1035,
    "range": [
      1034,
      1035
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1035,
    "end": 1041,
    "range": [
      1035,
      1041
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1041,
    "end": 1042,
    "range": [
      1041,
      1042
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1043,
    "end": 1044,
    "range": [
      1043,
      1044
    ]
  }
]
```
