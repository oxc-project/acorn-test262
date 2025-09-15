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
        "start": 127,
        "end": 133
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
              "start": 146,
              "end": 150
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
                    "start": 153,
                    "end": 156
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 158,
                      "end": 164
                    },
                    "start": 156,
                    "end": 164
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
                  "start": 153,
                  "end": 165
                }
              ],
              "start": 151,
              "end": 167
            },
            "abstract": false,
            "declare": false,
            "start": 140,
            "end": 167
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
              "start": 178,
              "end": 185
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 194,
              "end": 198
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
                    "start": 201,
                    "end": 204
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 206,
                      "end": 212
                    },
                    "start": 204,
                    "end": 212
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
                  "start": 201,
                  "end": 213
                }
              ],
              "start": 199,
              "end": 215
            },
            "abstract": false,
            "declare": false,
            "start": 172,
            "end": 215
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
              "start": 226,
              "end": 234
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 243,
              "end": 250
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
                    "start": 253,
                    "end": 256
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 258,
                      "end": 264
                    },
                    "start": 256,
                    "end": 264
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
                  "start": 253,
                  "end": 265
                }
              ],
              "start": 251,
              "end": 267
            },
            "abstract": false,
            "declare": false,
            "start": 220,
            "end": 267
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
              "start": 278,
              "end": 290
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 299,
              "end": 303
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
                    "start": 306,
                    "end": 310
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 312,
                      "end": 318
                    },
                    "start": 310,
                    "end": 318
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
                  "start": 306,
                  "end": 319
                }
              ],
              "start": 304,
              "end": 321
            },
            "abstract": false,
            "declare": false,
            "start": 272,
            "end": 321
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "WithNonGenericSignaturesInBaseType",
              "optional": false,
              "typeAnnotation": null,
              "start": 337,
              "end": 371
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
                    "start": 446,
                    "end": 447
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
                          "start": 462,
                          "end": 464
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
                                    "start": 470,
                                    "end": 476
                                  },
                                  "start": 468,
                                  "end": 476
                                },
                                "start": 467,
                                "end": 476
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 481,
                                  "end": 487
                                },
                                "start": 481,
                                "end": 489
                              },
                              "start": 478,
                              "end": 489
                            },
                            "start": 466,
                            "end": 489
                          },
                          "start": 464,
                          "end": 489
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 462,
                        "end": 490
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
                          "start": 503,
                          "end": 505
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
                                              "start": 517,
                                              "end": 521
                                            },
                                            "typeArguments": null,
                                            "start": 517,
                                            "end": 521
                                          },
                                          "start": 515,
                                          "end": 521
                                        },
                                        "start": 512,
                                        "end": 521
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
                                          "start": 526,
                                          "end": 533
                                        },
                                        "typeArguments": null,
                                        "start": 526,
                                        "end": 533
                                      },
                                      "start": 523,
                                      "end": 533
                                    },
                                    "start": 511,
                                    "end": 533
                                  },
                                  "start": 509,
                                  "end": 533
                                },
                                "start": 508,
                                "end": 533
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
                                          "start": 542,
                                          "end": 546
                                        },
                                        "typeArguments": null,
                                        "start": 542,
                                        "end": 546
                                      },
                                      "start": 540,
                                      "end": 546
                                    },
                                    "start": 539,
                                    "end": 546
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
                                      "start": 551,
                                      "end": 559
                                    },
                                    "typeArguments": null,
                                    "start": 551,
                                    "end": 559
                                  },
                                  "start": 548,
                                  "end": 559
                                },
                                "start": 538,
                                "end": 559
                              },
                              "start": 535,
                              "end": 559
                            },
                            "start": 507,
                            "end": 559
                          },
                          "start": 505,
                          "end": 559
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 503,
                        "end": 560
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
                          "start": 573,
                          "end": 575
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
                                              "start": 587,
                                              "end": 591
                                            },
                                            "typeArguments": null,
                                            "start": 587,
                                            "end": 591
                                          },
                                          "start": 585,
                                          "end": 591
                                        },
                                        "start": 582,
                                        "end": 591
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
                                          "start": 596,
                                          "end": 603
                                        },
                                        "typeArguments": null,
                                        "start": 596,
                                        "end": 603
                                      },
                                      "start": 593,
                                      "end": 603
                                    },
                                    "start": 581,
                                    "end": 603
                                  },
                                  "start": 579,
                                  "end": 603
                                },
                                "start": 578,
                                "end": 603
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
                                              "start": 615,
                                              "end": 619
                                            },
                                            "typeArguments": null,
                                            "start": 615,
                                            "end": 619
                                          },
                                          "start": 613,
                                          "end": 619
                                        },
                                        "start": 609,
                                        "end": 619
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
                                          "start": 624,
                                          "end": 631
                                        },
                                        "typeArguments": null,
                                        "start": 624,
                                        "end": 631
                                      },
                                      "start": 621,
                                      "end": 631
                                    },
                                    "start": 608,
                                    "end": 631
                                  },
                                  "start": 606,
                                  "end": 631
                                },
                                "start": 605,
                                "end": 631
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
                                          "start": 640,
                                          "end": 644
                                        },
                                        "typeArguments": null,
                                        "start": 640,
                                        "end": 644
                                      },
                                      "start": 638,
                                      "end": 644
                                    },
                                    "start": 637,
                                    "end": 644
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
                                      "start": 649,
                                      "end": 656
                                    },
                                    "typeArguments": null,
                                    "start": 649,
                                    "end": 656
                                  },
                                  "start": 646,
                                  "end": 656
                                },
                                "start": 636,
                                "end": 656
                              },
                              "start": 633,
                              "end": 656
                            },
                            "start": 577,
                            "end": 656
                          },
                          "start": 575,
                          "end": 656
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 573,
                        "end": 657
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
                          "start": 670,
                          "end": 673
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
                                  "start": 679,
                                  "end": 680
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
                                        "start": 682,
                                        "end": 686
                                      },
                                      "typeArguments": null,
                                      "start": 682,
                                      "end": 686
                                    },
                                    "start": 682,
                                    "end": 688
                                  },
                                  "start": 680,
                                  "end": 688
                                },
                                "value": null,
                                "start": 676,
                                "end": 688
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
                                  "start": 693,
                                  "end": 697
                                },
                                "typeArguments": null,
                                "start": 693,
                                "end": 697
                              },
                              "start": 690,
                              "end": 697
                            },
                            "start": 675,
                            "end": 697
                          },
                          "start": 673,
                          "end": 697
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 670,
                        "end": 698
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
                          "start": 711,
                          "end": 714
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
                                          "start": 722,
                                          "end": 725
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 727,
                                            "end": 733
                                          },
                                          "start": 725,
                                          "end": 733
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 722,
                                        "end": 733
                                      }
                                    ],
                                    "start": 720,
                                    "end": 735
                                  },
                                  "start": 718,
                                  "end": 735
                                },
                                "start": 717,
                                "end": 735
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
                                          "start": 742,
                                          "end": 745
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 747,
                                            "end": 753
                                          },
                                          "start": 745,
                                          "end": 753
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 742,
                                        "end": 754
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
                                          "start": 755,
                                          "end": 758
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 760,
                                            "end": 766
                                          },
                                          "start": 758,
                                          "end": 766
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 755,
                                        "end": 766
                                      }
                                    ],
                                    "start": 740,
                                    "end": 768
                                  },
                                  "start": 738,
                                  "end": 768
                                },
                                "start": 737,
                                "end": 768
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
                                  "start": 773,
                                  "end": 777
                                },
                                "typeArguments": null,
                                "start": 773,
                                "end": 777
                              },
                              "start": 770,
                              "end": 777
                            },
                            "start": 716,
                            "end": 777
                          },
                          "start": 714,
                          "end": 777
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 711,
                        "end": 778
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
                          "start": 791,
                          "end": 794
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
                                      "start": 800,
                                      "end": 805
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
                                            "start": 806,
                                            "end": 810
                                          },
                                          "typeArguments": null,
                                          "start": 806,
                                          "end": 810
                                        }
                                      ],
                                      "start": 805,
                                      "end": 811
                                    },
                                    "start": 800,
                                    "end": 811
                                  },
                                  "start": 798,
                                  "end": 811
                                },
                                "start": 797,
                                "end": 811
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
                                      "start": 816,
                                      "end": 821
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
                                            "start": 822,
                                            "end": 830
                                          },
                                          "typeArguments": null,
                                          "start": 822,
                                          "end": 830
                                        }
                                      ],
                                      "start": 821,
                                      "end": 831
                                    },
                                    "start": 816,
                                    "end": 831
                                  },
                                  "start": 814,
                                  "end": 831
                                },
                                "start": 813,
                                "end": 831
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
                                  "start": 836,
                                  "end": 841
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
                                        "start": 842,
                                        "end": 849
                                      },
                                      "typeArguments": null,
                                      "start": 842,
                                      "end": 849
                                    }
                                  ],
                                  "start": 841,
                                  "end": 850
                                },
                                "start": 836,
                                "end": 850
                              },
                              "start": 833,
                              "end": 850
                            },
                            "start": 796,
                            "end": 850
                          },
                          "start": 794,
                          "end": 850
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 791,
                        "end": 851
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
                          "start": 864,
                          "end": 867
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
                                        "start": 891,
                                        "end": 897
                                      },
                                      "start": 889,
                                      "end": 897
                                    },
                                    "start": 888,
                                    "end": 897
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSNumberKeyword",
                                      "start": 900,
                                      "end": 906
                                    },
                                    "start": 900,
                                    "end": 908
                                  },
                                  "start": 898,
                                  "end": 908
                                },
                                "start": 887,
                                "end": 909
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
                                        "start": 930,
                                        "end": 936
                                      },
                                      "start": 928,
                                      "end": 936
                                    },
                                    "start": 927,
                                    "end": 936
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSStringKeyword",
                                      "start": 939,
                                      "end": 945
                                    },
                                    "start": 939,
                                    "end": 947
                                  },
                                  "start": 937,
                                  "end": 947
                                },
                                "start": 926,
                                "end": 948
                              }
                            ],
                            "start": 869,
                            "end": 962
                          },
                          "start": 867,
                          "end": 962
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 864,
                        "end": 963
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
                          "start": 976,
                          "end": 979
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
                                          "start": 987,
                                          "end": 988
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 990,
                                            "end": 996
                                          },
                                          "start": 988,
                                          "end": 996
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 987,
                                        "end": 997
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
                                          "start": 998,
                                          "end": 999
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSNumberKeyword",
                                            "start": 1001,
                                            "end": 1007
                                          },
                                          "start": 999,
                                          "end": 1007
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 998,
                                        "end": 1007
                                      }
                                    ],
                                    "start": 985,
                                    "end": 1009
                                  },
                                  "start": 983,
                                  "end": 1009
                                },
                                "start": 982,
                                "end": 1009
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1014,
                                "end": 1020
                              },
                              "start": 1011,
                              "end": 1020
                            },
                            "start": 981,
                            "end": 1020
                          },
                          "start": 979,
                          "end": 1020
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 976,
                        "end": 1021
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
                          "start": 1034,
                          "end": 1037
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
                                                    "start": 1193,
                                                    "end": 1199
                                                  },
                                                  "start": 1191,
                                                  "end": 1199
                                                },
                                                "start": 1190,
                                                "end": 1199
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSNumberKeyword",
                                                "start": 1202,
                                                "end": 1208
                                              },
                                              "start": 1200,
                                              "end": 1208
                                            },
                                            "start": 1189,
                                            "end": 1209
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
                                                    "start": 1235,
                                                    "end": 1241
                                                  },
                                                  "start": 1233,
                                                  "end": 1241
                                                },
                                                "start": 1231,
                                                "end": 1241
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSNumberKeyword",
                                                "start": 1244,
                                                "end": 1250
                                              },
                                              "start": 1242,
                                              "end": 1250
                                            },
                                            "start": 1230,
                                            "end": 1251
                                          }
                                        ],
                                        "start": 1167,
                                        "end": 1269
                                      },
                                      "start": 1165,
                                      "end": 1269
                                    },
                                    "start": 1164,
                                    "end": 1269
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSNumberKeyword",
                                      "start": 1272,
                                      "end": 1278
                                    },
                                    "start": 1272,
                                    "end": 1280
                                  },
                                  "start": 1270,
                                  "end": 1280
                                },
                                "start": 1163,
                                "end": 1281
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
                                                    "start": 1328,
                                                    "end": 1335
                                                  },
                                                  "start": 1326,
                                                  "end": 1335
                                                },
                                                "start": 1325,
                                                "end": 1335
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSBooleanKeyword",
                                                "start": 1338,
                                                "end": 1345
                                              },
                                              "start": 1336,
                                              "end": 1345
                                            },
                                            "start": 1324,
                                            "end": 1346
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
                                                    "start": 1372,
                                                    "end": 1379
                                                  },
                                                  "start": 1370,
                                                  "end": 1379
                                                },
                                                "start": 1368,
                                                "end": 1379
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSBooleanKeyword",
                                                "start": 1382,
                                                "end": 1389
                                              },
                                              "start": 1380,
                                              "end": 1389
                                            },
                                            "start": 1367,
                                            "end": 1390
                                          }
                                        ],
                                        "start": 1302,
                                        "end": 1408
                                      },
                                      "start": 1300,
                                      "end": 1408
                                    },
                                    "start": 1299,
                                    "end": 1408
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSBooleanKeyword",
                                      "start": 1411,
                                      "end": 1418
                                    },
                                    "start": 1411,
                                    "end": 1420
                                  },
                                  "start": 1409,
                                  "end": 1420
                                },
                                "start": 1298,
                                "end": 1421
                              }
                            ],
                            "start": 1039,
                            "end": 1435
                          },
                          "start": 1037,
                          "end": 1435
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1034,
                        "end": 1436
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
                          "start": 1449,
                          "end": 1452
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
                                                    "start": 1499,
                                                    "end": 1500
                                                  },
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "Derived",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1509,
                                                      "end": 1516
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1509,
                                                    "end": 1516
                                                  },
                                                  "default": null,
                                                  "in": false,
                                                  "out": false,
                                                  "const": false,
                                                  "start": 1499,
                                                  "end": 1516
                                                }
                                              ],
                                              "start": 1498,
                                              "end": 1517
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
                                                      "start": 1521,
                                                      "end": 1522
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1521,
                                                    "end": 1522
                                                  },
                                                  "start": 1519,
                                                  "end": 1522
                                                },
                                                "start": 1518,
                                                "end": 1522
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
                                                  "start": 1525,
                                                  "end": 1526
                                                },
                                                "typeArguments": null,
                                                "start": 1525,
                                                "end": 1526
                                              },
                                              "start": 1523,
                                              "end": 1526
                                            },
                                            "start": 1498,
                                            "end": 1527
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
                                                    "start": 1549,
                                                    "end": 1550
                                                  },
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "Base",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1559,
                                                      "end": 1563
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1559,
                                                    "end": 1563
                                                  },
                                                  "default": null,
                                                  "in": false,
                                                  "out": false,
                                                  "const": false,
                                                  "start": 1549,
                                                  "end": 1563
                                                }
                                              ],
                                              "start": 1548,
                                              "end": 1564
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
                                                      "start": 1568,
                                                      "end": 1569
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1568,
                                                    "end": 1569
                                                  },
                                                  "start": 1566,
                                                  "end": 1569
                                                },
                                                "start": 1565,
                                                "end": 1569
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
                                                  "start": 1572,
                                                  "end": 1573
                                                },
                                                "typeArguments": null,
                                                "start": 1572,
                                                "end": 1573
                                              },
                                              "start": 1570,
                                              "end": 1573
                                            },
                                            "start": 1548,
                                            "end": 1574
                                          }
                                        ],
                                        "start": 1476,
                                        "end": 1592
                                      },
                                      "start": 1474,
                                      "end": 1592
                                    },
                                    "start": 1473,
                                    "end": 1592
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "start": 1595,
                                      "end": 1598
                                    },
                                    "start": 1595,
                                    "end": 1600
                                  },
                                  "start": 1593,
                                  "end": 1600
                                },
                                "start": 1472,
                                "end": 1601
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
                                                    "start": 1645,
                                                    "end": 1646
                                                  },
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "Derived2",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1655,
                                                      "end": 1663
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1655,
                                                    "end": 1663
                                                  },
                                                  "default": null,
                                                  "in": false,
                                                  "out": false,
                                                  "const": false,
                                                  "start": 1645,
                                                  "end": 1663
                                                }
                                              ],
                                              "start": 1644,
                                              "end": 1664
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
                                                      "start": 1668,
                                                      "end": 1669
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1668,
                                                    "end": 1669
                                                  },
                                                  "start": 1666,
                                                  "end": 1669
                                                },
                                                "start": 1665,
                                                "end": 1669
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
                                                  "start": 1672,
                                                  "end": 1673
                                                },
                                                "typeArguments": null,
                                                "start": 1672,
                                                "end": 1673
                                              },
                                              "start": 1670,
                                              "end": 1673
                                            },
                                            "start": 1644,
                                            "end": 1674
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
                                                    "start": 1696,
                                                    "end": 1697
                                                  },
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "Base",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1706,
                                                      "end": 1710
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1706,
                                                    "end": 1710
                                                  },
                                                  "default": null,
                                                  "in": false,
                                                  "out": false,
                                                  "const": false,
                                                  "start": 1696,
                                                  "end": 1710
                                                }
                                              ],
                                              "start": 1695,
                                              "end": 1711
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
                                                      "start": 1715,
                                                      "end": 1716
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1715,
                                                    "end": 1716
                                                  },
                                                  "start": 1713,
                                                  "end": 1716
                                                },
                                                "start": 1712,
                                                "end": 1716
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
                                                  "start": 1719,
                                                  "end": 1720
                                                },
                                                "typeArguments": null,
                                                "start": 1719,
                                                "end": 1720
                                              },
                                              "start": 1717,
                                              "end": 1720
                                            },
                                            "start": 1695,
                                            "end": 1721
                                          }
                                        ],
                                        "start": 1622,
                                        "end": 1739
                                      },
                                      "start": 1620,
                                      "end": 1739
                                    },
                                    "start": 1619,
                                    "end": 1739
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "start": 1742,
                                      "end": 1745
                                    },
                                    "start": 1742,
                                    "end": 1747
                                  },
                                  "start": 1740,
                                  "end": 1747
                                },
                                "start": 1618,
                                "end": 1748
                              }
                            ],
                            "start": 1454,
                            "end": 1762
                          },
                          "start": 1452,
                          "end": 1762
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1449,
                        "end": 1763
                      }
                    ],
                    "start": 448,
                    "end": 1773
                  },
                  "declare": false,
                  "start": 436,
                  "end": 1773
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1793,
                    "end": 1794
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
                        "start": 1803,
                        "end": 1804
                      },
                      "typeArguments": null,
                      "start": 1803,
                      "end": 1804
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
                          "start": 1819,
                          "end": 1821
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
                                    "start": 1824,
                                    "end": 1825
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1824,
                                  "end": 1825
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1827,
                                    "end": 1828
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1827,
                                  "end": 1828
                                }
                              ],
                              "start": 1823,
                              "end": 1829
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
                                      "start": 1833,
                                      "end": 1834
                                    },
                                    "typeArguments": null,
                                    "start": 1833,
                                    "end": 1834
                                  },
                                  "start": 1831,
                                  "end": 1834
                                },
                                "start": 1830,
                                "end": 1834
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
                                    "start": 1839,
                                    "end": 1840
                                  },
                                  "typeArguments": null,
                                  "start": 1839,
                                  "end": 1840
                                },
                                "start": 1839,
                                "end": 1842
                              },
                              "start": 1836,
                              "end": 1842
                            },
                            "start": 1823,
                            "end": 1842
                          },
                          "start": 1821,
                          "end": 1842
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1819,
                        "end": 1843
                      }
                    ],
                    "start": 1805,
                    "end": 1964
                  },
                  "declare": false,
                  "start": 1783,
                  "end": 1964
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1984,
                    "end": 1986
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
                          "start": 1987,
                          "end": 1988
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1987,
                        "end": 1988
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1990,
                          "end": 1991
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1990,
                        "end": 1991
                      }
                    ],
                    "start": 1986,
                    "end": 1992
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
                        "start": 2001,
                        "end": 2002
                      },
                      "typeArguments": null,
                      "start": 2001,
                      "end": 2002
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
                          "start": 2017,
                          "end": 2019
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
                                      "start": 2025,
                                      "end": 2026
                                    },
                                    "typeArguments": null,
                                    "start": 2025,
                                    "end": 2026
                                  },
                                  "start": 2023,
                                  "end": 2026
                                },
                                "start": 2022,
                                "end": 2026
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
                                    "start": 2031,
                                    "end": 2032
                                  },
                                  "typeArguments": null,
                                  "start": 2031,
                                  "end": 2032
                                },
                                "start": 2031,
                                "end": 2034
                              },
                              "start": 2028,
                              "end": 2034
                            },
                            "start": 2021,
                            "end": 2034
                          },
                          "start": 2019,
                          "end": 2034
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2017,
                        "end": 2035
                      }
                    ],
                    "start": 2003,
                    "end": 2120
                  },
                  "declare": false,
                  "start": 1974,
                  "end": 2120
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2140,
                    "end": 2142
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
                        "start": 2151,
                        "end": 2152
                      },
                      "typeArguments": null,
                      "start": 2151,
                      "end": 2152
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
                          "start": 2236,
                          "end": 2238
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
                                    "start": 2241,
                                    "end": 2242
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2251,
                                      "end": 2255
                                    },
                                    "typeArguments": null,
                                    "start": 2251,
                                    "end": 2255
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2241,
                                  "end": 2255
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2257,
                                    "end": 2258
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2267,
                                      "end": 2274
                                    },
                                    "typeArguments": null,
                                    "start": 2267,
                                    "end": 2274
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2257,
                                  "end": 2274
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "V",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2276,
                                    "end": 2277
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2286,
                                      "end": 2294
                                    },
                                    "typeArguments": null,
                                    "start": 2286,
                                    "end": 2294
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2276,
                                  "end": 2294
                                }
                              ],
                              "start": 2240,
                              "end": 2295
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
                                              "start": 2305,
                                              "end": 2306
                                            },
                                            "typeArguments": null,
                                            "start": 2305,
                                            "end": 2306
                                          },
                                          "start": 2303,
                                          "end": 2306
                                        },
                                        "start": 2300,
                                        "end": 2306
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
                                          "start": 2311,
                                          "end": 2312
                                        },
                                        "typeArguments": null,
                                        "start": 2311,
                                        "end": 2312
                                      },
                                      "start": 2308,
                                      "end": 2312
                                    },
                                    "start": 2299,
                                    "end": 2312
                                  },
                                  "start": 2297,
                                  "end": 2312
                                },
                                "start": 2296,
                                "end": 2312
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
                                          "start": 2321,
                                          "end": 2322
                                        },
                                        "typeArguments": null,
                                        "start": 2321,
                                        "end": 2322
                                      },
                                      "start": 2319,
                                      "end": 2322
                                    },
                                    "start": 2318,
                                    "end": 2322
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
                                      "start": 2327,
                                      "end": 2328
                                    },
                                    "typeArguments": null,
                                    "start": 2327,
                                    "end": 2328
                                  },
                                  "start": 2324,
                                  "end": 2328
                                },
                                "start": 2317,
                                "end": 2328
                              },
                              "start": 2314,
                              "end": 2328
                            },
                            "start": 2240,
                            "end": 2328
                          },
                          "start": 2238,
                          "end": 2328
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2236,
                        "end": 2329
                      }
                    ],
                    "start": 2153,
                    "end": 2339
                  },
                  "declare": false,
                  "start": 2130,
                  "end": 2339
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2359,
                    "end": 2361
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
                        "start": 2370,
                        "end": 2371
                      },
                      "typeArguments": null,
                      "start": 2370,
                      "end": 2371
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
                          "start": 2386,
                          "end": 2388
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
                                    "start": 2391,
                                    "end": 2392
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2401,
                                      "end": 2405
                                    },
                                    "typeArguments": null,
                                    "start": 2401,
                                    "end": 2405
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2391,
                                  "end": 2405
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2407,
                                    "end": 2408
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2417,
                                      "end": 2424
                                    },
                                    "typeArguments": null,
                                    "start": 2417,
                                    "end": 2424
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2407,
                                  "end": 2424
                                }
                              ],
                              "start": 2390,
                              "end": 2425
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
                                              "start": 2435,
                                              "end": 2436
                                            },
                                            "typeArguments": null,
                                            "start": 2435,
                                            "end": 2436
                                          },
                                          "start": 2433,
                                          "end": 2436
                                        },
                                        "start": 2430,
                                        "end": 2436
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
                                          "start": 2441,
                                          "end": 2442
                                        },
                                        "typeArguments": null,
                                        "start": 2441,
                                        "end": 2442
                                      },
                                      "start": 2438,
                                      "end": 2442
                                    },
                                    "start": 2429,
                                    "end": 2442
                                  },
                                  "start": 2427,
                                  "end": 2442
                                },
                                "start": 2426,
                                "end": 2442
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
                                                  "start": 2456,
                                                  "end": 2459
                                                },
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "typeAnnotation": {
                                                    "type": "TSNumberKeyword",
                                                    "start": 2461,
                                                    "end": 2467
                                                  },
                                                  "start": 2459,
                                                  "end": 2467
                                                },
                                                "accessibility": null,
                                                "static": false,
                                                "start": 2456,
                                                "end": 2468
                                              }
                                            ],
                                            "start": 2454,
                                            "end": 2470
                                          },
                                          "start": 2452,
                                          "end": 2470
                                        },
                                        "start": 2448,
                                        "end": 2470
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
                                          "start": 2475,
                                          "end": 2476
                                        },
                                        "typeArguments": null,
                                        "start": 2475,
                                        "end": 2476
                                      },
                                      "start": 2472,
                                      "end": 2476
                                    },
                                    "start": 2447,
                                    "end": 2476
                                  },
                                  "start": 2445,
                                  "end": 2476
                                },
                                "start": 2444,
                                "end": 2476
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
                                          "start": 2485,
                                          "end": 2486
                                        },
                                        "typeArguments": null,
                                        "start": 2485,
                                        "end": 2486
                                      },
                                      "start": 2483,
                                      "end": 2486
                                    },
                                    "start": 2482,
                                    "end": 2486
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
                                      "start": 2491,
                                      "end": 2492
                                    },
                                    "typeArguments": null,
                                    "start": 2491,
                                    "end": 2492
                                  },
                                  "start": 2488,
                                  "end": 2492
                                },
                                "start": 2481,
                                "end": 2492
                              },
                              "start": 2478,
                              "end": 2492
                            },
                            "start": 2390,
                            "end": 2492
                          },
                          "start": 2388,
                          "end": 2492
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2386,
                        "end": 2493
                      }
                    ],
                    "start": 2372,
                    "end": 2527
                  },
                  "declare": false,
                  "start": 2349,
                  "end": 2527
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I4B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2547,
                    "end": 2550
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
                        "start": 2559,
                        "end": 2560
                      },
                      "typeArguments": null,
                      "start": 2559,
                      "end": 2560
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
                          "start": 2575,
                          "end": 2578
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
                                    "start": 2581,
                                    "end": 2582
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2591,
                                      "end": 2598
                                    },
                                    "typeArguments": null,
                                    "start": 2591,
                                    "end": 2598
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2581,
                                  "end": 2598
                                }
                              ],
                              "start": 2580,
                              "end": 2599
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
                                  "start": 2603,
                                  "end": 2604
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
                                        "start": 2606,
                                        "end": 2607
                                      },
                                      "typeArguments": null,
                                      "start": 2606,
                                      "end": 2607
                                    },
                                    "start": 2606,
                                    "end": 2609
                                  },
                                  "start": 2604,
                                  "end": 2609
                                },
                                "value": null,
                                "start": 2600,
                                "end": 2609
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
                                  "start": 2614,
                                  "end": 2615
                                },
                                "typeArguments": null,
                                "start": 2614,
                                "end": 2615
                              },
                              "start": 2611,
                              "end": 2615
                            },
                            "start": 2580,
                            "end": 2615
                          },
                          "start": 2578,
                          "end": 2615
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2575,
                        "end": 2616
                      }
                    ],
                    "start": 2561,
                    "end": 2709
                  },
                  "declare": false,
                  "start": 2537,
                  "end": 2709
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I4C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2729,
                    "end": 2732
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
                        "start": 2741,
                        "end": 2742
                      },
                      "typeArguments": null,
                      "start": 2741,
                      "end": 2742
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
                          "start": 2757,
                          "end": 2760
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
                                    "start": 2763,
                                    "end": 2764
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2773,
                                      "end": 2780
                                    },
                                    "typeArguments": null,
                                    "start": 2773,
                                    "end": 2780
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2763,
                                  "end": 2780
                                }
                              ],
                              "start": 2762,
                              "end": 2781
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
                                      "start": 2791,
                                      "end": 2792
                                    },
                                    "typeArguments": null,
                                    "start": 2791,
                                    "end": 2792
                                  },
                                  "start": 2789,
                                  "end": 2792
                                },
                                "start": 2788,
                                "end": 2792
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
                                  "start": 2797,
                                  "end": 2798
                                },
                                "typeArguments": null,
                                "start": 2797,
                                "end": 2798
                              },
                              "start": 2794,
                              "end": 2798
                            },
                            "start": 2762,
                            "end": 2798
                          },
                          "start": 2760,
                          "end": 2798
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2757,
                        "end": 2799
                      }
                    ],
                    "start": 2743,
                    "end": 2917
                  },
                  "declare": false,
                  "start": 2719,
                  "end": 2917
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I4E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2937,
                    "end": 2940
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
                        "start": 2949,
                        "end": 2950
                      },
                      "typeArguments": null,
                      "start": 2949,
                      "end": 2950
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
                          "start": 2965,
                          "end": 2968
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
                                    "start": 2971,
                                    "end": 2972
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Array",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2981,
                                      "end": 2986
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
                                            "start": 2987,
                                            "end": 2995
                                          },
                                          "typeArguments": null,
                                          "start": 2987,
                                          "end": 2995
                                        }
                                      ],
                                      "start": 2986,
                                      "end": 2996
                                    },
                                    "start": 2981,
                                    "end": 2996
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2971,
                                  "end": 2996
                                }
                              ],
                              "start": 2970,
                              "end": 2997
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
                                      "start": 3001,
                                      "end": 3006
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
                                            "start": 3007,
                                            "end": 3011
                                          },
                                          "typeArguments": null,
                                          "start": 3007,
                                          "end": 3011
                                        }
                                      ],
                                      "start": 3006,
                                      "end": 3012
                                    },
                                    "start": 3001,
                                    "end": 3012
                                  },
                                  "start": 2999,
                                  "end": 3012
                                },
                                "start": 2998,
                                "end": 3012
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
                                      "start": 3017,
                                      "end": 3022
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
                                            "start": 3023,
                                            "end": 3027
                                          },
                                          "typeArguments": null,
                                          "start": 3023,
                                          "end": 3027
                                        }
                                      ],
                                      "start": 3022,
                                      "end": 3028
                                    },
                                    "start": 3017,
                                    "end": 3028
                                  },
                                  "start": 3015,
                                  "end": 3028
                                },
                                "start": 3014,
                                "end": 3028
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
                                  "start": 3033,
                                  "end": 3034
                                },
                                "typeArguments": null,
                                "start": 3033,
                                "end": 3034
                              },
                              "start": 3030,
                              "end": 3034
                            },
                            "start": 2970,
                            "end": 3034
                          },
                          "start": 2968,
                          "end": 3034
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2965,
                        "end": 3035
                      }
                    ],
                    "start": 2951,
                    "end": 3104
                  },
                  "declare": false,
                  "start": 2927,
                  "end": 3104
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3124,
                    "end": 3126
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
                        "start": 3135,
                        "end": 3136
                      },
                      "typeArguments": null,
                      "start": 3135,
                      "end": 3136
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
                          "start": 3151,
                          "end": 3154
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
                                    "start": 3157,
                                    "end": 3158
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3157,
                                  "end": 3158
                                }
                              ],
                              "start": 3156,
                              "end": 3159
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
                                        "end": 3170
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
                                          "start": 3171,
                                          "end": 3172
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
                                              "start": 3174,
                                              "end": 3175
                                            },
                                            "typeArguments": null,
                                            "start": 3174,
                                            "end": 3175
                                          },
                                          "start": 3172,
                                          "end": 3175
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 3171,
                                        "end": 3175
                                      }
                                    ],
                                    "start": 3163,
                                    "end": 3177
                                  },
                                  "start": 3161,
                                  "end": 3177
                                },
                                "start": 3160,
                                "end": 3177
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
                                  "start": 3182,
                                  "end": 3183
                                },
                                "typeArguments": null,
                                "start": 3182,
                                "end": 3183
                              },
                              "start": 3179,
                              "end": 3183
                            },
                            "start": 3156,
                            "end": 3183
                          },
                          "start": 3154,
                          "end": 3183
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3151,
                        "end": 3184
                      }
                    ],
                    "start": 3137,
                    "end": 3250
                  },
                  "declare": false,
                  "start": 3114,
                  "end": 3250
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3270,
                    "end": 3272
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
                        "start": 3281,
                        "end": 3282
                      },
                      "typeArguments": null,
                      "start": 3281,
                      "end": 3282
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
                          "start": 3297,
                          "end": 3300
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
                                    "start": 3303,
                                    "end": 3304
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3313,
                                      "end": 3317
                                    },
                                    "typeArguments": null,
                                    "start": 3313,
                                    "end": 3317
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3303,
                                  "end": 3317
                                }
                              ],
                              "start": 3302,
                              "end": 3318
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
                                        "end": 3329
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
                                          "start": 3330,
                                          "end": 3331
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
                                              "start": 3333,
                                              "end": 3334
                                            },
                                            "typeArguments": null,
                                            "start": 3333,
                                            "end": 3334
                                          },
                                          "start": 3331,
                                          "end": 3334
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 3330,
                                        "end": 3334
                                      }
                                    ],
                                    "start": 3322,
                                    "end": 3336
                                  },
                                  "start": 3320,
                                  "end": 3336
                                },
                                "start": 3319,
                                "end": 3336
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 3341,
                                "end": 3347
                              },
                              "start": 3338,
                              "end": 3347
                            },
                            "start": 3302,
                            "end": 3347
                          },
                          "start": 3300,
                          "end": 3347
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3297,
                        "end": 3348
                      }
                    ],
                    "start": 3283,
                    "end": 3434
                  },
                  "declare": false,
                  "start": 3260,
                  "end": 3434
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I8",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3454,
                    "end": 3456
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
                        "start": 3465,
                        "end": 3466
                      },
                      "typeArguments": null,
                      "start": 3465,
                      "end": 3466
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
                          "start": 3640,
                          "end": 3643
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
                                    "start": 3646,
                                    "end": 3647
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3646,
                                  "end": 3647
                                }
                              ],
                              "start": 3645,
                              "end": 3648
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
                                              "start": 3656,
                                              "end": 3657
                                            },
                                            "typeArguments": null,
                                            "start": 3656,
                                            "end": 3657
                                          },
                                          "start": 3654,
                                          "end": 3657
                                        },
                                        "start": 3653,
                                        "end": 3657
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
                                          "start": 3662,
                                          "end": 3663
                                        },
                                        "typeArguments": null,
                                        "start": 3662,
                                        "end": 3663
                                      },
                                      "start": 3659,
                                      "end": 3663
                                    },
                                    "start": 3652,
                                    "end": 3663
                                  },
                                  "start": 3650,
                                  "end": 3663
                                },
                                "start": 3649,
                                "end": 3663
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
                                    "start": 3668,
                                    "end": 3669
                                  },
                                  "typeArguments": null,
                                  "start": 3668,
                                  "end": 3669
                                },
                                "start": 3668,
                                "end": 3671
                              },
                              "start": 3665,
                              "end": 3671
                            },
                            "start": 3645,
                            "end": 3671
                          },
                          "start": 3643,
                          "end": 3671
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3640,
                        "end": 3672
                      }
                    ],
                    "start": 3467,
                    "end": 3682
                  },
                  "declare": false,
                  "start": 3444,
                  "end": 3682
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I9",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3702,
                    "end": 3704
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
                        "start": 3713,
                        "end": 3714
                      },
                      "typeArguments": null,
                      "start": 3713,
                      "end": 3714
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
                          "start": 3729,
                          "end": 3732
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
                                    "start": 3735,
                                    "end": 3736
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3735,
                                  "end": 3736
                                }
                              ],
                              "start": 3734,
                              "end": 3737
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
                                              "start": 3745,
                                              "end": 3746
                                            },
                                            "typeArguments": null,
                                            "start": 3745,
                                            "end": 3746
                                          },
                                          "start": 3743,
                                          "end": 3746
                                        },
                                        "start": 3742,
                                        "end": 3746
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
                                          "start": 3751,
                                          "end": 3752
                                        },
                                        "typeArguments": null,
                                        "start": 3751,
                                        "end": 3752
                                      },
                                      "start": 3748,
                                      "end": 3752
                                    },
                                    "start": 3741,
                                    "end": 3752
                                  },
                                  "start": 3739,
                                  "end": 3752
                                },
                                "start": 3738,
                                "end": 3752
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSAnyKeyword",
                                  "start": 3757,
                                  "end": 3760
                                },
                                "start": 3757,
                                "end": 3762
                              },
                              "start": 3754,
                              "end": 3762
                            },
                            "start": 3734,
                            "end": 3762
                          },
                          "start": 3732,
                          "end": 3762
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3729,
                        "end": 3763
                      }
                    ],
                    "start": 3715,
                    "end": 3889
                  },
                  "declare": false,
                  "start": 3692,
                  "end": 3889
                }
              ],
              "start": 372,
              "end": 3895
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 327,
            "end": 3895
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "WithGenericSignaturesInBaseType",
              "optional": false,
              "typeAnnotation": null,
              "start": 3911,
              "end": 3942
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
                    "start": 4011,
                    "end": 4012
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
                          "start": 4027,
                          "end": 4029
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
                                    "start": 4032,
                                    "end": 4033
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 4032,
                                  "end": 4033
                                }
                              ],
                              "start": 4031,
                              "end": 4034
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
                                      "start": 4038,
                                      "end": 4039
                                    },
                                    "typeArguments": null,
                                    "start": 4038,
                                    "end": 4039
                                  },
                                  "start": 4036,
                                  "end": 4039
                                },
                                "start": 4035,
                                "end": 4039
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
                                    "start": 4044,
                                    "end": 4045
                                  },
                                  "typeArguments": null,
                                  "start": 4044,
                                  "end": 4045
                                },
                                "start": 4044,
                                "end": 4047
                              },
                              "start": 4041,
                              "end": 4047
                            },
                            "start": 4031,
                            "end": 4047
                          },
                          "start": 4029,
                          "end": 4047
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 4027,
                        "end": 4048
                      }
                    ],
                    "start": 4013,
                    "end": 4058
                  },
                  "declare": false,
                  "start": 4001,
                  "end": 4058
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4078,
                    "end": 4080
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
                        "start": 4089,
                        "end": 4090
                      },
                      "typeArguments": null,
                      "start": 4089,
                      "end": 4090
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
                          "start": 4105,
                          "end": 4107
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
                                    "start": 4110,
                                    "end": 4111
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 4110,
                                  "end": 4111
                                }
                              ],
                              "start": 4109,
                              "end": 4112
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
                                      "start": 4116,
                                      "end": 4117
                                    },
                                    "typeArguments": null,
                                    "start": 4116,
                                    "end": 4117
                                  },
                                  "start": 4114,
                                  "end": 4117
                                },
                                "start": 4113,
                                "end": 4117
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 4122,
                                  "end": 4128
                                },
                                "start": 4122,
                                "end": 4130
                              },
                              "start": 4119,
                              "end": 4130
                            },
                            "start": 4109,
                            "end": 4130
                          },
                          "start": 4107,
                          "end": 4130
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 4105,
                        "end": 4131
                      }
                    ],
                    "start": 4091,
                    "end": 4150
                  },
                  "declare": false,
                  "start": 4068,
                  "end": 4150
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4218,
                    "end": 4219
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
                          "start": 4234,
                          "end": 4236
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
                                    "start": 4239,
                                    "end": 4240
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 4239,
                                  "end": 4240
                                }
                              ],
                              "start": 4238,
                              "end": 4241
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
                                      "start": 4245,
                                      "end": 4246
                                    },
                                    "typeArguments": null,
                                    "start": 4245,
                                    "end": 4246
                                  },
                                  "start": 4243,
                                  "end": 4246
                                },
                                "start": 4242,
                                "end": 4246
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 4251,
                                  "end": 4257
                                },
                                "start": 4251,
                                "end": 4259
                              },
                              "start": 4248,
                              "end": 4259
                            },
                            "start": 4238,
                            "end": 4259
                          },
                          "start": 4236,
                          "end": 4259
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 4234,
                        "end": 4260
                      }
                    ],
                    "start": 4220,
                    "end": 4270
                  },
                  "declare": false,
                  "start": 4208,
                  "end": 4270
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4290,
                    "end": 4292
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
                        "start": 4301,
                        "end": 4302
                      },
                      "typeArguments": null,
                      "start": 4301,
                      "end": 4302
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
                          "start": 4317,
                          "end": 4319
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
                                    "start": 4322,
                                    "end": 4323
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 4322,
                                  "end": 4323
                                }
                              ],
                              "start": 4321,
                              "end": 4324
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
                                      "start": 4328,
                                      "end": 4329
                                    },
                                    "typeArguments": null,
                                    "start": 4328,
                                    "end": 4329
                                  },
                                  "start": 4326,
                                  "end": 4329
                                },
                                "start": 4325,
                                "end": 4329
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
                                    "start": 4334,
                                    "end": 4335
                                  },
                                  "typeArguments": null,
                                  "start": 4334,
                                  "end": 4335
                                },
                                "start": 4334,
                                "end": 4337
                              },
                              "start": 4331,
                              "end": 4337
                            },
                            "start": 4321,
                            "end": 4337
                          },
                          "start": 4319,
                          "end": 4337
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 4317,
                        "end": 4338
                      }
                    ],
                    "start": 4303,
                    "end": 4357
                  },
                  "declare": false,
                  "start": 4280,
                  "end": 4357
                }
              ],
              "start": 3943,
              "end": 4363
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 3901,
            "end": 4363
          }
        ],
        "start": 134,
        "end": 4365
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 117,
      "end": 4365
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 117,
  "end": 4365
}
```
