__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Errors",
        "optional": false,
        "typeAnnotation": null,
        "start": 124,
        "end": 130
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 143,
              "end": 147
            },
            "typeParameters": null,
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 150,
                    "end": 153
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 155,
                      "end": 161
                    },
                    "start": 153,
                    "end": 161
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
                  "start": 150,
                  "end": 162
                }
              ],
              "start": 148,
              "end": 164
            },
            "abstract": false,
            "declare": false,
            "start": 137,
            "end": 164
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 175,
              "end": 182
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 191,
              "end": 195
            },
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
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 198,
                    "end": 201
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 203,
                      "end": 209
                    },
                    "start": 201,
                    "end": 209
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
                  "start": 198,
                  "end": 210
                }
              ],
              "start": 196,
              "end": 212
            },
            "abstract": false,
            "declare": false,
            "start": 169,
            "end": 212
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived2",
              "optional": false,
              "typeAnnotation": null,
              "start": 223,
              "end": 231
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 240,
              "end": 247
            },
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
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 250,
                    "end": 253
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 255,
                      "end": 261
                    },
                    "start": 253,
                    "end": 261
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
                  "start": 250,
                  "end": 262
                }
              ],
              "start": 248,
              "end": 264
            },
            "abstract": false,
            "declare": false,
            "start": 217,
            "end": 264
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "OtherDerived",
              "optional": false,
              "typeAnnotation": null,
              "start": 275,
              "end": 287
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 296,
              "end": 300
            },
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
                    "name": "bing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 303,
                    "end": 307
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 309,
                      "end": 315
                    },
                    "start": 307,
                    "end": 315
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
                  "start": 303,
                  "end": 316
                }
              ],
              "start": 301,
              "end": 318
            },
            "abstract": false,
            "declare": false,
            "start": 269,
            "end": 318
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "WithNonGenericSignaturesInBaseType",
              "optional": false,
              "typeAnnotation": null,
              "start": 331,
              "end": 365
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
                    "start": 440,
                    "end": 441
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
                          "name": "a2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 456,
                          "end": 458
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 464,
                                    "end": 470
                                  },
                                  "start": 462,
                                  "end": 470
                                },
                                "start": 461,
                                "end": 470
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 475,
                                  "end": 481
                                },
                                "start": 475,
                                "end": 483
                              },
                              "start": 472,
                              "end": 483
                            },
                            "start": 460,
                            "end": 483
                          },
                          "start": 458,
                          "end": 483
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 456,
                        "end": 484
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a7",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 497,
                          "end": 499
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "arg",
                                        "optional": false,
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
                                              "start": 511,
                                              "end": 515
                                            },
                                            "typeArguments": null,
                                            "start": 511,
                                            "end": 515
                                          },
                                          "start": 509,
                                          "end": 515
                                        },
                                        "start": 506,
                                        "end": 515
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Derived",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 520,
                                          "end": 527
                                        },
                                        "typeArguments": null,
                                        "start": 520,
                                        "end": 527
                                      },
                                      "start": 517,
                                      "end": 527
                                    },
                                    "start": 505,
                                    "end": 527
                                  },
                                  "start": 503,
                                  "end": 527
                                },
                                "start": 502,
                                "end": 527
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "r",
                                    "optional": false,
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
                                          "start": 536,
                                          "end": 540
                                        },
                                        "typeArguments": null,
                                        "start": 536,
                                        "end": 540
                                      },
                                      "start": 534,
                                      "end": 540
                                    },
                                    "start": 533,
                                    "end": 540
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 545,
                                      "end": 553
                                    },
                                    "typeArguments": null,
                                    "start": 545,
                                    "end": 553
                                  },
                                  "start": 542,
                                  "end": 553
                                },
                                "start": 532,
                                "end": 553
                              },
                              "start": 529,
                              "end": 553
                            },
                            "start": 501,
                            "end": 553
                          },
                          "start": 499,
                          "end": 553
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 497,
                        "end": 554
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a8",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 567,
                          "end": 569
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "arg",
                                        "optional": false,
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
                                              "start": 581,
                                              "end": 585
                                            },
                                            "typeArguments": null,
                                            "start": 581,
                                            "end": 585
                                          },
                                          "start": 579,
                                          "end": 585
                                        },
                                        "start": 576,
                                        "end": 585
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Derived",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 590,
                                          "end": 597
                                        },
                                        "typeArguments": null,
                                        "start": 590,
                                        "end": 597
                                      },
                                      "start": 587,
                                      "end": 597
                                    },
                                    "start": 575,
                                    "end": 597
                                  },
                                  "start": 573,
                                  "end": 597
                                },
                                "start": 572,
                                "end": 597
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "arg2",
                                        "optional": false,
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
                                              "start": 609,
                                              "end": 613
                                            },
                                            "typeArguments": null,
                                            "start": 609,
                                            "end": 613
                                          },
                                          "start": 607,
                                          "end": 613
                                        },
                                        "start": 603,
                                        "end": 613
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Derived",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 618,
                                          "end": 625
                                        },
                                        "typeArguments": null,
                                        "start": 618,
                                        "end": 625
                                      },
                                      "start": 615,
                                      "end": 625
                                    },
                                    "start": 602,
                                    "end": 625
                                  },
                                  "start": 600,
                                  "end": 625
                                },
                                "start": 599,
                                "end": 625
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "r",
                                    "optional": false,
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
                                          "start": 634,
                                          "end": 638
                                        },
                                        "typeArguments": null,
                                        "start": 634,
                                        "end": 638
                                      },
                                      "start": 632,
                                      "end": 638
                                    },
                                    "start": 631,
                                    "end": 638
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 643,
                                      "end": 650
                                    },
                                    "typeArguments": null,
                                    "start": 643,
                                    "end": 650
                                  },
                                  "start": 640,
                                  "end": 650
                                },
                                "start": 630,
                                "end": 650
                              },
                              "start": 627,
                              "end": 650
                            },
                            "start": 571,
                            "end": 650
                          },
                          "start": 569,
                          "end": 650
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 567,
                        "end": 651
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a10",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 664,
                          "end": 667
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "RestElement",
                                "decorators": [],
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 673,
                                  "end": 674
                                },
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Base",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 676,
                                        "end": 680
                                      },
                                      "typeArguments": null,
                                      "start": 676,
                                      "end": 680
                                    },
                                    "start": 676,
                                    "end": 682
                                  },
                                  "start": 674,
                                  "end": 682
                                },
                                "value": null,
                                "start": 670,
                                "end": 682
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Base",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 687,
                                  "end": 691
                                },
                                "typeArguments": null,
                                "start": 687,
                                "end": 691
                              },
                              "start": 684,
                              "end": 691
                            },
                            "start": 669,
                            "end": 691
                          },
                          "start": 667,
                          "end": 691
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 664,
                        "end": 692
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a11",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 705,
                          "end": 708
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
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
                                          "name": "foo",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 716,
                                          "end": 719
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 721,
                                            "end": 727
                                          },
                                          "start": 719,
                                          "end": 727
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 716,
                                        "end": 727
                                      }
                                    ],
                                    "start": 714,
                                    "end": 729
                                  },
                                  "start": 712,
                                  "end": 729
                                },
                                "start": 711,
                                "end": 729
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
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
                                          "name": "foo",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 736,
                                          "end": 739
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 741,
                                            "end": 747
                                          },
                                          "start": 739,
                                          "end": 747
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 736,
                                        "end": 748
                                      },
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
                                          "start": 749,
                                          "end": 752
                                        },
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
                                        "accessibility": null,
                                        "static": false,
                                        "start": 749,
                                        "end": 760
                                      }
                                    ],
                                    "start": 734,
                                    "end": 762
                                  },
                                  "start": 732,
                                  "end": 762
                                },
                                "start": 731,
                                "end": 762
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Base",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 767,
                                  "end": 771
                                },
                                "typeArguments": null,
                                "start": 767,
                                "end": 771
                              },
                              "start": 764,
                              "end": 771
                            },
                            "start": 710,
                            "end": 771
                          },
                          "start": 708,
                          "end": 771
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 705,
                        "end": 772
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a12",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 785,
                          "end": 788
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Array",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 794,
                                      "end": 799
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
                                            "start": 800,
                                            "end": 804
                                          },
                                          "typeArguments": null,
                                          "start": 800,
                                          "end": 804
                                        }
                                      ],
                                      "start": 799,
                                      "end": 805
                                    },
                                    "start": 794,
                                    "end": 805
                                  },
                                  "start": 792,
                                  "end": 805
                                },
                                "start": 791,
                                "end": 805
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Array",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 810,
                                      "end": 815
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Derived2",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 816,
                                            "end": 824
                                          },
                                          "typeArguments": null,
                                          "start": 816,
                                          "end": 824
                                        }
                                      ],
                                      "start": 815,
                                      "end": 825
                                    },
                                    "start": 810,
                                    "end": 825
                                  },
                                  "start": 808,
                                  "end": 825
                                },
                                "start": 807,
                                "end": 825
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Array",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 830,
                                  "end": 835
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
                                        "start": 836,
                                        "end": 843
                                      },
                                      "typeArguments": null,
                                      "start": 836,
                                      "end": 843
                                    }
                                  ],
                                  "start": 835,
                                  "end": 844
                                },
                                "start": 830,
                                "end": 844
                              },
                              "start": 827,
                              "end": 844
                            },
                            "start": 790,
                            "end": 844
                          },
                          "start": 788,
                          "end": 844
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 785,
                        "end": 845
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a14",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 858,
                          "end": 861
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSCallSignatureDeclaration",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 885,
                                        "end": 891
                                      },
                                      "start": 883,
                                      "end": 891
                                    },
                                    "start": 882,
                                    "end": 891
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSNumberKeyword",
                                      "start": 894,
                                      "end": 900
                                    },
                                    "start": 894,
                                    "end": 902
                                  },
                                  "start": 892,
                                  "end": 902
                                },
                                "start": 881,
                                "end": 903
                              },
                              {
                                "type": "TSCallSignatureDeclaration",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 924,
                                        "end": 930
                                      },
                                      "start": 922,
                                      "end": 930
                                    },
                                    "start": 921,
                                    "end": 930
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSStringKeyword",
                                      "start": 933,
                                      "end": 939
                                    },
                                    "start": 933,
                                    "end": 941
                                  },
                                  "start": 931,
                                  "end": 941
                                },
                                "start": 920,
                                "end": 942
                              }
                            ],
                            "start": 863,
                            "end": 956
                          },
                          "start": 861,
                          "end": 956
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 858,
                        "end": 957
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a15",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 970,
                          "end": 973
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
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
                                          "name": "a",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 981,
                                          "end": 982
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 984,
                                            "end": 990
                                          },
                                          "start": 982,
                                          "end": 990
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 981,
                                        "end": 991
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
                                          "start": 992,
                                          "end": 993
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSNumberKeyword",
                                            "start": 995,
                                            "end": 1001
                                          },
                                          "start": 993,
                                          "end": 1001
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 992,
                                        "end": 1001
                                      }
                                    ],
                                    "start": 979,
                                    "end": 1003
                                  },
                                  "start": 977,
                                  "end": 1003
                                },
                                "start": 976,
                                "end": 1003
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1008,
                                "end": 1014
                              },
                              "start": 1005,
                              "end": 1014
                            },
                            "start": 975,
                            "end": 1014
                          },
                          "start": 973,
                          "end": 1014
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 970,
                        "end": 1015
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a16",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1028,
                          "end": 1031
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSCallSignatureDeclaration",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeLiteral",
                                        "members": [
                                          {
                                            "type": "TSCallSignatureDeclaration",
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
                                                    "start": 1187,
                                                    "end": 1193
                                                  },
                                                  "start": 1185,
                                                  "end": 1193
                                                },
                                                "start": 1184,
                                                "end": 1193
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSNumberKeyword",
                                                "start": 1196,
                                                "end": 1202
                                              },
                                              "start": 1194,
                                              "end": 1202
                                            },
                                            "start": 1183,
                                            "end": 1203
                                          },
                                          {
                                            "type": "TSCallSignatureDeclaration",
                                            "typeParameters": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "a",
                                                "optional": true,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "typeAnnotation": {
                                                    "type": "TSNumberKeyword",
                                                    "start": 1229,
                                                    "end": 1235
                                                  },
                                                  "start": 1227,
                                                  "end": 1235
                                                },
                                                "start": 1225,
                                                "end": 1235
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSNumberKeyword",
                                                "start": 1238,
                                                "end": 1244
                                              },
                                              "start": 1236,
                                              "end": 1244
                                            },
                                            "start": 1224,
                                            "end": 1245
                                          }
                                        ],
                                        "start": 1161,
                                        "end": 1263
                                      },
                                      "start": 1159,
                                      "end": 1263
                                    },
                                    "start": 1158,
                                    "end": 1263
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSNumberKeyword",
                                      "start": 1266,
                                      "end": 1272
                                    },
                                    "start": 1266,
                                    "end": 1274
                                  },
                                  "start": 1264,
                                  "end": 1274
                                },
                                "start": 1157,
                                "end": 1275
                              },
                              {
                                "type": "TSCallSignatureDeclaration",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeLiteral",
                                        "members": [
                                          {
                                            "type": "TSCallSignatureDeclaration",
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
                                                    "type": "TSBooleanKeyword",
                                                    "start": 1322,
                                                    "end": 1329
                                                  },
                                                  "start": 1320,
                                                  "end": 1329
                                                },
                                                "start": 1319,
                                                "end": 1329
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSBooleanKeyword",
                                                "start": 1332,
                                                "end": 1339
                                              },
                                              "start": 1330,
                                              "end": 1339
                                            },
                                            "start": 1318,
                                            "end": 1340
                                          },
                                          {
                                            "type": "TSCallSignatureDeclaration",
                                            "typeParameters": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "a",
                                                "optional": true,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "typeAnnotation": {
                                                    "type": "TSBooleanKeyword",
                                                    "start": 1366,
                                                    "end": 1373
                                                  },
                                                  "start": 1364,
                                                  "end": 1373
                                                },
                                                "start": 1362,
                                                "end": 1373
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSBooleanKeyword",
                                                "start": 1376,
                                                "end": 1383
                                              },
                                              "start": 1374,
                                              "end": 1383
                                            },
                                            "start": 1361,
                                            "end": 1384
                                          }
                                        ],
                                        "start": 1296,
                                        "end": 1402
                                      },
                                      "start": 1294,
                                      "end": 1402
                                    },
                                    "start": 1293,
                                    "end": 1402
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSBooleanKeyword",
                                      "start": 1405,
                                      "end": 1412
                                    },
                                    "start": 1405,
                                    "end": 1414
                                  },
                                  "start": 1403,
                                  "end": 1414
                                },
                                "start": 1292,
                                "end": 1415
                              }
                            ],
                            "start": 1033,
                            "end": 1429
                          },
                          "start": 1031,
                          "end": 1429
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1028,
                        "end": 1430
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a17",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1443,
                          "end": 1446
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSCallSignatureDeclaration",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeLiteral",
                                        "members": [
                                          {
                                            "type": "TSCallSignatureDeclaration",
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
                                                    "start": 1493,
                                                    "end": 1494
                                                  },
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "Derived",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1503,
                                                      "end": 1510
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1503,
                                                    "end": 1510
                                                  },
                                                  "default": null,
                                                  "in": false,
                                                  "out": false,
                                                  "const": false,
                                                  "start": 1493,
                                                  "end": 1510
                                                }
                                              ],
                                              "start": 1492,
                                              "end": 1511
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
                                                  "start": 1513,
                                                  "end": 1516
                                                },
                                                "start": 1512,
                                                "end": 1516
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
                                                  "start": 1519,
                                                  "end": 1520
                                                },
                                                "typeArguments": null,
                                                "start": 1519,
                                                "end": 1520
                                              },
                                              "start": 1517,
                                              "end": 1520
                                            },
                                            "start": 1492,
                                            "end": 1521
                                          },
                                          {
                                            "type": "TSCallSignatureDeclaration",
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
                                                    "start": 1543,
                                                    "end": 1544
                                                  },
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "Base",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1553,
                                                      "end": 1557
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1553,
                                                    "end": 1557
                                                  },
                                                  "default": null,
                                                  "in": false,
                                                  "out": false,
                                                  "const": false,
                                                  "start": 1543,
                                                  "end": 1557
                                                }
                                              ],
                                              "start": 1542,
                                              "end": 1558
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
                                                      "name": "T",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1562,
                                                      "end": 1563
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1562,
                                                    "end": 1563
                                                  },
                                                  "start": 1560,
                                                  "end": 1563
                                                },
                                                "start": 1559,
                                                "end": 1563
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
                                                  "start": 1566,
                                                  "end": 1567
                                                },
                                                "typeArguments": null,
                                                "start": 1566,
                                                "end": 1567
                                              },
                                              "start": 1564,
                                              "end": 1567
                                            },
                                            "start": 1542,
                                            "end": 1568
                                          }
                                        ],
                                        "start": 1470,
                                        "end": 1586
                                      },
                                      "start": 1468,
                                      "end": 1586
                                    },
                                    "start": 1467,
                                    "end": 1586
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "start": 1589,
                                      "end": 1592
                                    },
                                    "start": 1589,
                                    "end": 1594
                                  },
                                  "start": 1587,
                                  "end": 1594
                                },
                                "start": 1466,
                                "end": 1595
                              },
                              {
                                "type": "TSCallSignatureDeclaration",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeLiteral",
                                        "members": [
                                          {
                                            "type": "TSCallSignatureDeclaration",
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
                                                    "start": 1639,
                                                    "end": 1640
                                                  },
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "Derived2",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1649,
                                                      "end": 1657
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1649,
                                                    "end": 1657
                                                  },
                                                  "default": null,
                                                  "in": false,
                                                  "out": false,
                                                  "const": false,
                                                  "start": 1639,
                                                  "end": 1657
                                                }
                                              ],
                                              "start": 1638,
                                              "end": 1658
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
                                                      "name": "T",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1662,
                                                      "end": 1663
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1662,
                                                    "end": 1663
                                                  },
                                                  "start": 1660,
                                                  "end": 1663
                                                },
                                                "start": 1659,
                                                "end": 1663
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
                                                  "start": 1666,
                                                  "end": 1667
                                                },
                                                "typeArguments": null,
                                                "start": 1666,
                                                "end": 1667
                                              },
                                              "start": 1664,
                                              "end": 1667
                                            },
                                            "start": 1638,
                                            "end": 1668
                                          },
                                          {
                                            "type": "TSCallSignatureDeclaration",
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
                                                    "start": 1690,
                                                    "end": 1691
                                                  },
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "Base",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1700,
                                                      "end": 1704
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1700,
                                                    "end": 1704
                                                  },
                                                  "default": null,
                                                  "in": false,
                                                  "out": false,
                                                  "const": false,
                                                  "start": 1690,
                                                  "end": 1704
                                                }
                                              ],
                                              "start": 1689,
                                              "end": 1705
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
                                                      "name": "T",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1709,
                                                      "end": 1710
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1709,
                                                    "end": 1710
                                                  },
                                                  "start": 1707,
                                                  "end": 1710
                                                },
                                                "start": 1706,
                                                "end": 1710
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
                                                  "start": 1713,
                                                  "end": 1714
                                                },
                                                "typeArguments": null,
                                                "start": 1713,
                                                "end": 1714
                                              },
                                              "start": 1711,
                                              "end": 1714
                                            },
                                            "start": 1689,
                                            "end": 1715
                                          }
                                        ],
                                        "start": 1616,
                                        "end": 1733
                                      },
                                      "start": 1614,
                                      "end": 1733
                                    },
                                    "start": 1613,
                                    "end": 1733
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "start": 1736,
                                      "end": 1739
                                    },
                                    "start": 1736,
                                    "end": 1741
                                  },
                                  "start": 1734,
                                  "end": 1741
                                },
                                "start": 1612,
                                "end": 1742
                              }
                            ],
                            "start": 1448,
                            "end": 1756
                          },
                          "start": 1446,
                          "end": 1756
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1443,
                        "end": 1757
                      }
                    ],
                    "start": 442,
                    "end": 1767
                  },
                  "declare": false,
                  "start": 430,
                  "end": 1767
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1787,
                    "end": 1788
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1797,
                        "end": 1798
                      },
                      "typeArguments": null,
                      "start": 1797,
                      "end": 1798
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
                          "name": "a2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1813,
                          "end": 1815
                        },
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
                                    "start": 1818,
                                    "end": 1819
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1818,
                                  "end": 1819
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1821,
                                    "end": 1822
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1821,
                                  "end": 1822
                                }
                              ],
                              "start": 1817,
                              "end": 1823
                            },
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
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
                                      "start": 1827,
                                      "end": 1828
                                    },
                                    "typeArguments": null,
                                    "start": 1827,
                                    "end": 1828
                                  },
                                  "start": 1825,
                                  "end": 1828
                                },
                                "start": 1824,
                                "end": 1828
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1833,
                                    "end": 1834
                                  },
                                  "typeArguments": null,
                                  "start": 1833,
                                  "end": 1834
                                },
                                "start": 1833,
                                "end": 1836
                              },
                              "start": 1830,
                              "end": 1836
                            },
                            "start": 1817,
                            "end": 1836
                          },
                          "start": 1815,
                          "end": 1836
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1813,
                        "end": 1837
                      }
                    ],
                    "start": 1799,
                    "end": 1958
                  },
                  "declare": false,
                  "start": 1777,
                  "end": 1958
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1978,
                    "end": 1980
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
                          "start": 1981,
                          "end": 1982
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1981,
                        "end": 1982
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1984,
                          "end": 1985
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1984,
                        "end": 1985
                      }
                    ],
                    "start": 1980,
                    "end": 1986
                  },
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1995,
                        "end": 1996
                      },
                      "typeArguments": null,
                      "start": 1995,
                      "end": 1996
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
                          "name": "a2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2011,
                          "end": 2013
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
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
                                      "start": 2019,
                                      "end": 2020
                                    },
                                    "typeArguments": null,
                                    "start": 2019,
                                    "end": 2020
                                  },
                                  "start": 2017,
                                  "end": 2020
                                },
                                "start": 2016,
                                "end": 2020
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2025,
                                    "end": 2026
                                  },
                                  "typeArguments": null,
                                  "start": 2025,
                                  "end": 2026
                                },
                                "start": 2025,
                                "end": 2028
                              },
                              "start": 2022,
                              "end": 2028
                            },
                            "start": 2015,
                            "end": 2028
                          },
                          "start": 2013,
                          "end": 2028
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2011,
                        "end": 2029
                      }
                    ],
                    "start": 1997,
                    "end": 2114
                  },
                  "declare": false,
                  "start": 1968,
                  "end": 2114
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2134,
                    "end": 2136
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2145,
                        "end": 2146
                      },
                      "typeArguments": null,
                      "start": 2145,
                      "end": 2146
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
                          "name": "a7",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2230,
                          "end": 2232
                        },
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
                                    "start": 2235,
                                    "end": 2236
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2245,
                                      "end": 2249
                                    },
                                    "typeArguments": null,
                                    "start": 2245,
                                    "end": 2249
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2235,
                                  "end": 2249
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2251,
                                    "end": 2252
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2261,
                                      "end": 2268
                                    },
                                    "typeArguments": null,
                                    "start": 2261,
                                    "end": 2268
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2251,
                                  "end": 2268
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "V",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2270,
                                    "end": 2271
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2280,
                                      "end": 2288
                                    },
                                    "typeArguments": null,
                                    "start": 2280,
                                    "end": 2288
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2270,
                                  "end": 2288
                                }
                              ],
                              "start": 2234,
                              "end": 2289
                            },
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "arg",
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
                                              "start": 2299,
                                              "end": 2300
                                            },
                                            "typeArguments": null,
                                            "start": 2299,
                                            "end": 2300
                                          },
                                          "start": 2297,
                                          "end": 2300
                                        },
                                        "start": 2294,
                                        "end": 2300
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
                                          "start": 2305,
                                          "end": 2306
                                        },
                                        "typeArguments": null,
                                        "start": 2305,
                                        "end": 2306
                                      },
                                      "start": 2302,
                                      "end": 2306
                                    },
                                    "start": 2293,
                                    "end": 2306
                                  },
                                  "start": 2291,
                                  "end": 2306
                                },
                                "start": 2290,
                                "end": 2306
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "r",
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
                                          "start": 2315,
                                          "end": 2316
                                        },
                                        "typeArguments": null,
                                        "start": 2315,
                                        "end": 2316
                                      },
                                      "start": 2313,
                                      "end": 2316
                                    },
                                    "start": 2312,
                                    "end": 2316
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "V",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2321,
                                      "end": 2322
                                    },
                                    "typeArguments": null,
                                    "start": 2321,
                                    "end": 2322
                                  },
                                  "start": 2318,
                                  "end": 2322
                                },
                                "start": 2311,
                                "end": 2322
                              },
                              "start": 2308,
                              "end": 2322
                            },
                            "start": 2234,
                            "end": 2322
                          },
                          "start": 2232,
                          "end": 2322
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2230,
                        "end": 2323
                      }
                    ],
                    "start": 2147,
                    "end": 2333
                  },
                  "declare": false,
                  "start": 2124,
                  "end": 2333
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2353,
                    "end": 2355
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2364,
                        "end": 2365
                      },
                      "typeArguments": null,
                      "start": 2364,
                      "end": 2365
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
                          "name": "a8",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2380,
                          "end": 2382
                        },
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
                                    "start": 2385,
                                    "end": 2386
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2395,
                                      "end": 2399
                                    },
                                    "typeArguments": null,
                                    "start": 2395,
                                    "end": 2399
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2385,
                                  "end": 2399
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2401,
                                    "end": 2402
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2411,
                                      "end": 2418
                                    },
                                    "typeArguments": null,
                                    "start": 2411,
                                    "end": 2418
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2401,
                                  "end": 2418
                                }
                              ],
                              "start": 2384,
                              "end": 2419
                            },
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "arg",
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
                                              "start": 2429,
                                              "end": 2430
                                            },
                                            "typeArguments": null,
                                            "start": 2429,
                                            "end": 2430
                                          },
                                          "start": 2427,
                                          "end": 2430
                                        },
                                        "start": 2424,
                                        "end": 2430
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
                                          "start": 2435,
                                          "end": 2436
                                        },
                                        "typeArguments": null,
                                        "start": 2435,
                                        "end": 2436
                                      },
                                      "start": 2432,
                                      "end": 2436
                                    },
                                    "start": 2423,
                                    "end": 2436
                                  },
                                  "start": 2421,
                                  "end": 2436
                                },
                                "start": 2420,
                                "end": 2436
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "arg2",
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
                                                  "name": "foo",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 2450,
                                                  "end": 2453
                                                },
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "typeAnnotation": {
                                                    "type": "TSNumberKeyword",
                                                    "start": 2455,
                                                    "end": 2461
                                                  },
                                                  "start": 2453,
                                                  "end": 2461
                                                },
                                                "accessibility": null,
                                                "static": false,
                                                "start": 2450,
                                                "end": 2462
                                              }
                                            ],
                                            "start": 2448,
                                            "end": 2464
                                          },
                                          "start": 2446,
                                          "end": 2464
                                        },
                                        "start": 2442,
                                        "end": 2464
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
                                          "start": 2469,
                                          "end": 2470
                                        },
                                        "typeArguments": null,
                                        "start": 2469,
                                        "end": 2470
                                      },
                                      "start": 2466,
                                      "end": 2470
                                    },
                                    "start": 2441,
                                    "end": 2470
                                  },
                                  "start": 2439,
                                  "end": 2470
                                },
                                "start": 2438,
                                "end": 2470
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "r",
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
                                          "start": 2479,
                                          "end": 2480
                                        },
                                        "typeArguments": null,
                                        "start": 2479,
                                        "end": 2480
                                      },
                                      "start": 2477,
                                      "end": 2480
                                    },
                                    "start": 2476,
                                    "end": 2480
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
                                      "start": 2485,
                                      "end": 2486
                                    },
                                    "typeArguments": null,
                                    "start": 2485,
                                    "end": 2486
                                  },
                                  "start": 2482,
                                  "end": 2486
                                },
                                "start": 2475,
                                "end": 2486
                              },
                              "start": 2472,
                              "end": 2486
                            },
                            "start": 2384,
                            "end": 2486
                          },
                          "start": 2382,
                          "end": 2486
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2380,
                        "end": 2487
                      }
                    ],
                    "start": 2366,
                    "end": 2521
                  },
                  "declare": false,
                  "start": 2343,
                  "end": 2521
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I4B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2541,
                    "end": 2544
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2553,
                        "end": 2554
                      },
                      "typeArguments": null,
                      "start": 2553,
                      "end": 2554
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
                          "name": "a10",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2569,
                          "end": 2572
                        },
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
                                    "start": 2575,
                                    "end": 2576
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2585,
                                      "end": 2592
                                    },
                                    "typeArguments": null,
                                    "start": 2585,
                                    "end": 2592
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2575,
                                  "end": 2592
                                }
                              ],
                              "start": 2574,
                              "end": 2593
                            },
                            "params": [
                              {
                                "type": "RestElement",
                                "decorators": [],
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2597,
                                  "end": 2598
                                },
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2600,
                                        "end": 2601
                                      },
                                      "typeArguments": null,
                                      "start": 2600,
                                      "end": 2601
                                    },
                                    "start": 2600,
                                    "end": 2603
                                  },
                                  "start": 2598,
                                  "end": 2603
                                },
                                "value": null,
                                "start": 2594,
                                "end": 2603
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
                                  "start": 2608,
                                  "end": 2609
                                },
                                "typeArguments": null,
                                "start": 2608,
                                "end": 2609
                              },
                              "start": 2605,
                              "end": 2609
                            },
                            "start": 2574,
                            "end": 2609
                          },
                          "start": 2572,
                          "end": 2609
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2569,
                        "end": 2610
                      }
                    ],
                    "start": 2555,
                    "end": 2703
                  },
                  "declare": false,
                  "start": 2531,
                  "end": 2703
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I4C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2723,
                    "end": 2726
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2735,
                        "end": 2736
                      },
                      "typeArguments": null,
                      "start": 2735,
                      "end": 2736
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
                          "name": "a11",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2751,
                          "end": 2754
                        },
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
                                    "start": 2757,
                                    "end": 2758
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2767,
                                      "end": 2774
                                    },
                                    "typeArguments": null,
                                    "start": 2767,
                                    "end": 2774
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2757,
                                  "end": 2774
                                }
                              ],
                              "start": 2756,
                              "end": 2775
                            },
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
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
                                      "start": 2779,
                                      "end": 2780
                                    },
                                    "typeArguments": null,
                                    "start": 2779,
                                    "end": 2780
                                  },
                                  "start": 2777,
                                  "end": 2780
                                },
                                "start": 2776,
                                "end": 2780
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
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
                                      "start": 2785,
                                      "end": 2786
                                    },
                                    "typeArguments": null,
                                    "start": 2785,
                                    "end": 2786
                                  },
                                  "start": 2783,
                                  "end": 2786
                                },
                                "start": 2782,
                                "end": 2786
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
                                  "start": 2791,
                                  "end": 2792
                                },
                                "typeArguments": null,
                                "start": 2791,
                                "end": 2792
                              },
                              "start": 2788,
                              "end": 2792
                            },
                            "start": 2756,
                            "end": 2792
                          },
                          "start": 2754,
                          "end": 2792
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2751,
                        "end": 2793
                      }
                    ],
                    "start": 2737,
                    "end": 2911
                  },
                  "declare": false,
                  "start": 2713,
                  "end": 2911
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I4E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2931,
                    "end": 2934
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2943,
                        "end": 2944
                      },
                      "typeArguments": null,
                      "start": 2943,
                      "end": 2944
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
                          "name": "a12",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2959,
                          "end": 2962
                        },
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
                                    "start": 2965,
                                    "end": 2966
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Array",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2975,
                                      "end": 2980
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Derived2",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2981,
                                            "end": 2989
                                          },
                                          "typeArguments": null,
                                          "start": 2981,
                                          "end": 2989
                                        }
                                      ],
                                      "start": 2980,
                                      "end": 2990
                                    },
                                    "start": 2975,
                                    "end": 2990
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2965,
                                  "end": 2990
                                }
                              ],
                              "start": 2964,
                              "end": 2991
                            },
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Array",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2995,
                                      "end": 3000
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
                                            "start": 3001,
                                            "end": 3005
                                          },
                                          "typeArguments": null,
                                          "start": 3001,
                                          "end": 3005
                                        }
                                      ],
                                      "start": 3000,
                                      "end": 3006
                                    },
                                    "start": 2995,
                                    "end": 3006
                                  },
                                  "start": 2993,
                                  "end": 3006
                                },
                                "start": 2992,
                                "end": 3006
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Array",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3011,
                                      "end": 3016
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
                                            "start": 3017,
                                            "end": 3021
                                          },
                                          "typeArguments": null,
                                          "start": 3017,
                                          "end": 3021
                                        }
                                      ],
                                      "start": 3016,
                                      "end": 3022
                                    },
                                    "start": 3011,
                                    "end": 3022
                                  },
                                  "start": 3009,
                                  "end": 3022
                                },
                                "start": 3008,
                                "end": 3022
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
                                  "start": 3027,
                                  "end": 3028
                                },
                                "typeArguments": null,
                                "start": 3027,
                                "end": 3028
                              },
                              "start": 3024,
                              "end": 3028
                            },
                            "start": 2964,
                            "end": 3028
                          },
                          "start": 2962,
                          "end": 3028
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2959,
                        "end": 3029
                      }
                    ],
                    "start": 2945,
                    "end": 3098
                  },
                  "declare": false,
                  "start": 2921,
                  "end": 3098
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3118,
                    "end": 3120
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3129,
                        "end": 3130
                      },
                      "typeArguments": null,
                      "start": 3129,
                      "end": 3130
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
                          "name": "a15",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3145,
                          "end": 3148
                        },
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
                                    "start": 3151,
                                    "end": 3152
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3151,
                                  "end": 3152
                                }
                              ],
                              "start": 3150,
                              "end": 3153
                            },
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
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
                                          "name": "a",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3159,
                                          "end": 3160
                                        },
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
                                              "start": 3162,
                                              "end": 3163
                                            },
                                            "typeArguments": null,
                                            "start": 3162,
                                            "end": 3163
                                          },
                                          "start": 3160,
                                          "end": 3163
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 3159,
                                        "end": 3164
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
                                          "start": 3165,
                                          "end": 3166
                                        },
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
                                              "start": 3168,
                                              "end": 3169
                                            },
                                            "typeArguments": null,
                                            "start": 3168,
                                            "end": 3169
                                          },
                                          "start": 3166,
                                          "end": 3169
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 3165,
                                        "end": 3169
                                      }
                                    ],
                                    "start": 3157,
                                    "end": 3171
                                  },
                                  "start": 3155,
                                  "end": 3171
                                },
                                "start": 3154,
                                "end": 3171
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
                                  "start": 3176,
                                  "end": 3177
                                },
                                "typeArguments": null,
                                "start": 3176,
                                "end": 3177
                              },
                              "start": 3173,
                              "end": 3177
                            },
                            "start": 3150,
                            "end": 3177
                          },
                          "start": 3148,
                          "end": 3177
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3145,
                        "end": 3178
                      }
                    ],
                    "start": 3131,
                    "end": 3244
                  },
                  "declare": false,
                  "start": 3108,
                  "end": 3244
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3264,
                    "end": 3266
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3275,
                        "end": 3276
                      },
                      "typeArguments": null,
                      "start": 3275,
                      "end": 3276
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
                          "name": "a15",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3291,
                          "end": 3294
                        },
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
                                    "start": 3297,
                                    "end": 3298
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3307,
                                      "end": 3311
                                    },
                                    "typeArguments": null,
                                    "start": 3307,
                                    "end": 3311
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3297,
                                  "end": 3311
                                }
                              ],
                              "start": 3296,
                              "end": 3312
                            },
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
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
                                          "name": "a",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3318,
                                          "end": 3319
                                        },
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
                                              "start": 3321,
                                              "end": 3322
                                            },
                                            "typeArguments": null,
                                            "start": 3321,
                                            "end": 3322
                                          },
                                          "start": 3319,
                                          "end": 3322
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 3318,
                                        "end": 3323
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
                                          "start": 3324,
                                          "end": 3325
                                        },
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
                                              "start": 3327,
                                              "end": 3328
                                            },
                                            "typeArguments": null,
                                            "start": 3327,
                                            "end": 3328
                                          },
                                          "start": 3325,
                                          "end": 3328
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 3324,
                                        "end": 3328
                                      }
                                    ],
                                    "start": 3316,
                                    "end": 3330
                                  },
                                  "start": 3314,
                                  "end": 3330
                                },
                                "start": 3313,
                                "end": 3330
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 3335,
                                "end": 3341
                              },
                              "start": 3332,
                              "end": 3341
                            },
                            "start": 3296,
                            "end": 3341
                          },
                          "start": 3294,
                          "end": 3341
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3291,
                        "end": 3342
                      }
                    ],
                    "start": 3277,
                    "end": 3428
                  },
                  "declare": false,
                  "start": 3254,
                  "end": 3428
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I8",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3448,
                    "end": 3450
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3459,
                        "end": 3460
                      },
                      "typeArguments": null,
                      "start": 3459,
                      "end": 3460
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
                          "name": "a16",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3634,
                          "end": 3637
                        },
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
                                    "start": 3640,
                                    "end": 3641
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3640,
                                  "end": 3641
                                }
                              ],
                              "start": 3639,
                              "end": 3642
                            },
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
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
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 3650,
                                              "end": 3651
                                            },
                                            "typeArguments": null,
                                            "start": 3650,
                                            "end": 3651
                                          },
                                          "start": 3648,
                                          "end": 3651
                                        },
                                        "start": 3647,
                                        "end": 3651
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
                                          "start": 3656,
                                          "end": 3657
                                        },
                                        "typeArguments": null,
                                        "start": 3656,
                                        "end": 3657
                                      },
                                      "start": 3653,
                                      "end": 3657
                                    },
                                    "start": 3646,
                                    "end": 3657
                                  },
                                  "start": 3644,
                                  "end": 3657
                                },
                                "start": 3643,
                                "end": 3657
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3662,
                                    "end": 3663
                                  },
                                  "typeArguments": null,
                                  "start": 3662,
                                  "end": 3663
                                },
                                "start": 3662,
                                "end": 3665
                              },
                              "start": 3659,
                              "end": 3665
                            },
                            "start": 3639,
                            "end": 3665
                          },
                          "start": 3637,
                          "end": 3665
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3634,
                        "end": 3666
                      }
                    ],
                    "start": 3461,
                    "end": 3676
                  },
                  "declare": false,
                  "start": 3438,
                  "end": 3676
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I9",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3696,
                    "end": 3698
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3707,
                        "end": 3708
                      },
                      "typeArguments": null,
                      "start": 3707,
                      "end": 3708
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
                          "name": "a17",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3723,
                          "end": 3726
                        },
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
                                    "start": 3729,
                                    "end": 3730
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3729,
                                  "end": 3730
                                }
                              ],
                              "start": 3728,
                              "end": 3731
                            },
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
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
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 3739,
                                              "end": 3740
                                            },
                                            "typeArguments": null,
                                            "start": 3739,
                                            "end": 3740
                                          },
                                          "start": 3737,
                                          "end": 3740
                                        },
                                        "start": 3736,
                                        "end": 3740
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
                                          "start": 3745,
                                          "end": 3746
                                        },
                                        "typeArguments": null,
                                        "start": 3745,
                                        "end": 3746
                                      },
                                      "start": 3742,
                                      "end": 3746
                                    },
                                    "start": 3735,
                                    "end": 3746
                                  },
                                  "start": 3733,
                                  "end": 3746
                                },
                                "start": 3732,
                                "end": 3746
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSAnyKeyword",
                                  "start": 3751,
                                  "end": 3754
                                },
                                "start": 3751,
                                "end": 3756
                              },
                              "start": 3748,
                              "end": 3756
                            },
                            "start": 3728,
                            "end": 3756
                          },
                          "start": 3726,
                          "end": 3756
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3723,
                        "end": 3757
                      }
                    ],
                    "start": 3709,
                    "end": 3883
                  },
                  "declare": false,
                  "start": 3686,
                  "end": 3883
                }
              ],
              "start": 366,
              "end": 3889
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 324,
            "end": 3889
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "WithGenericSignaturesInBaseType",
              "optional": false,
              "typeAnnotation": null,
              "start": 3902,
              "end": 3933
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4002,
                    "end": 4003
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
                          "name": "a2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4018,
                          "end": 4020
                        },
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
                                    "start": 4023,
                                    "end": 4024
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 4023,
                                  "end": 4024
                                }
                              ],
                              "start": 4022,
                              "end": 4025
                            },
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
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
                                      "start": 4029,
                                      "end": 4030
                                    },
                                    "typeArguments": null,
                                    "start": 4029,
                                    "end": 4030
                                  },
                                  "start": 4027,
                                  "end": 4030
                                },
                                "start": 4026,
                                "end": 4030
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4035,
                                    "end": 4036
                                  },
                                  "typeArguments": null,
                                  "start": 4035,
                                  "end": 4036
                                },
                                "start": 4035,
                                "end": 4038
                              },
                              "start": 4032,
                              "end": 4038
                            },
                            "start": 4022,
                            "end": 4038
                          },
                          "start": 4020,
                          "end": 4038
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 4018,
                        "end": 4039
                      }
                    ],
                    "start": 4004,
                    "end": 4049
                  },
                  "declare": false,
                  "start": 3992,
                  "end": 4049
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4069,
                    "end": 4071
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4080,
                        "end": 4081
                      },
                      "typeArguments": null,
                      "start": 4080,
                      "end": 4081
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
                          "name": "a2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4096,
                          "end": 4098
                        },
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
                                    "start": 4101,
                                    "end": 4102
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 4101,
                                  "end": 4102
                                }
                              ],
                              "start": 4100,
                              "end": 4103
                            },
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
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
                                      "start": 4107,
                                      "end": 4108
                                    },
                                    "typeArguments": null,
                                    "start": 4107,
                                    "end": 4108
                                  },
                                  "start": 4105,
                                  "end": 4108
                                },
                                "start": 4104,
                                "end": 4108
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 4113,
                                  "end": 4119
                                },
                                "start": 4113,
                                "end": 4121
                              },
                              "start": 4110,
                              "end": 4121
                            },
                            "start": 4100,
                            "end": 4121
                          },
                          "start": 4098,
                          "end": 4121
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 4096,
                        "end": 4122
                      }
                    ],
                    "start": 4082,
                    "end": 4141
                  },
                  "declare": false,
                  "start": 4059,
                  "end": 4141
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4209,
                    "end": 4210
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
                          "name": "a2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4225,
                          "end": 4227
                        },
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
                                    "start": 4230,
                                    "end": 4231
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 4230,
                                  "end": 4231
                                }
                              ],
                              "start": 4229,
                              "end": 4232
                            },
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
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
                                      "start": 4236,
                                      "end": 4237
                                    },
                                    "typeArguments": null,
                                    "start": 4236,
                                    "end": 4237
                                  },
                                  "start": 4234,
                                  "end": 4237
                                },
                                "start": 4233,
                                "end": 4237
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 4242,
                                  "end": 4248
                                },
                                "start": 4242,
                                "end": 4250
                              },
                              "start": 4239,
                              "end": 4250
                            },
                            "start": 4229,
                            "end": 4250
                          },
                          "start": 4227,
                          "end": 4250
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 4225,
                        "end": 4251
                      }
                    ],
                    "start": 4211,
                    "end": 4261
                  },
                  "declare": false,
                  "start": 4199,
                  "end": 4261
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4281,
                    "end": 4283
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4292,
                        "end": 4293
                      },
                      "typeArguments": null,
                      "start": 4292,
                      "end": 4293
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
                          "name": "a2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4308,
                          "end": 4310
                        },
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
                                    "start": 4313,
                                    "end": 4314
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 4313,
                                  "end": 4314
                                }
                              ],
                              "start": 4312,
                              "end": 4315
                            },
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
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
                                      "start": 4319,
                                      "end": 4320
                                    },
                                    "typeArguments": null,
                                    "start": 4319,
                                    "end": 4320
                                  },
                                  "start": 4317,
                                  "end": 4320
                                },
                                "start": 4316,
                                "end": 4320
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4325,
                                    "end": 4326
                                  },
                                  "typeArguments": null,
                                  "start": 4325,
                                  "end": 4326
                                },
                                "start": 4325,
                                "end": 4328
                              },
                              "start": 4322,
                              "end": 4328
                            },
                            "start": 4312,
                            "end": 4328
                          },
                          "start": 4310,
                          "end": 4328
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 4308,
                        "end": 4329
                      }
                    ],
                    "start": 4294,
                    "end": 4348
                  },
                  "declare": false,
                  "start": 4271,
                  "end": 4348
                }
              ],
              "start": 3934,
              "end": 4354
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 3895,
            "end": 4354
          }
        ],
        "start": 131,
        "end": 4356
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 117,
      "end": 4356
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 117,
  "end": 4356
}
```
