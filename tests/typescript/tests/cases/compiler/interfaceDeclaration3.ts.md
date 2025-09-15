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
