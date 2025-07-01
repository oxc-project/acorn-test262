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
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 468,
                                    "end": 474
                                  },
                                  "start": 466,
                                  "end": 474
                                },
                                "start": 465,
                                "end": 474
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 479,
                                  "end": 485
                                },
                                "start": 479,
                                "end": 487
                              },
                              "start": 476,
                              "end": 487
                            },
                            "start": 460,
                            "end": 487
                          },
                          "start": 458,
                          "end": 487
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 456,
                        "end": 488
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
                          "start": 501,
                          "end": 503
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                              "start": 519,
                                              "end": 523
                                            },
                                            "typeArguments": null,
                                            "start": 519,
                                            "end": 523
                                          },
                                          "start": 517,
                                          "end": 523
                                        },
                                        "start": 514,
                                        "end": 523
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
                                          "start": 528,
                                          "end": 535
                                        },
                                        "typeArguments": null,
                                        "start": 528,
                                        "end": 535
                                      },
                                      "start": 525,
                                      "end": 535
                                    },
                                    "start": 513,
                                    "end": 535
                                  },
                                  "start": 511,
                                  "end": 535
                                },
                                "start": 510,
                                "end": 535
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
                                          "start": 544,
                                          "end": 548
                                        },
                                        "typeArguments": null,
                                        "start": 544,
                                        "end": 548
                                      },
                                      "start": 542,
                                      "end": 548
                                    },
                                    "start": 541,
                                    "end": 548
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
                                      "start": 553,
                                      "end": 561
                                    },
                                    "typeArguments": null,
                                    "start": 553,
                                    "end": 561
                                  },
                                  "start": 550,
                                  "end": 561
                                },
                                "start": 540,
                                "end": 561
                              },
                              "start": 537,
                              "end": 561
                            },
                            "start": 505,
                            "end": 561
                          },
                          "start": 503,
                          "end": 561
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 501,
                        "end": 562
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
                          "start": 575,
                          "end": 577
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                              "start": 593,
                                              "end": 597
                                            },
                                            "typeArguments": null,
                                            "start": 593,
                                            "end": 597
                                          },
                                          "start": 591,
                                          "end": 597
                                        },
                                        "start": 588,
                                        "end": 597
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
                                          "start": 602,
                                          "end": 609
                                        },
                                        "typeArguments": null,
                                        "start": 602,
                                        "end": 609
                                      },
                                      "start": 599,
                                      "end": 609
                                    },
                                    "start": 587,
                                    "end": 609
                                  },
                                  "start": 585,
                                  "end": 609
                                },
                                "start": 584,
                                "end": 609
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
                                              "start": 621,
                                              "end": 625
                                            },
                                            "typeArguments": null,
                                            "start": 621,
                                            "end": 625
                                          },
                                          "start": 619,
                                          "end": 625
                                        },
                                        "start": 615,
                                        "end": 625
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
                                          "start": 630,
                                          "end": 637
                                        },
                                        "typeArguments": null,
                                        "start": 630,
                                        "end": 637
                                      },
                                      "start": 627,
                                      "end": 637
                                    },
                                    "start": 614,
                                    "end": 637
                                  },
                                  "start": 612,
                                  "end": 637
                                },
                                "start": 611,
                                "end": 637
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
                                          "start": 646,
                                          "end": 650
                                        },
                                        "typeArguments": null,
                                        "start": 646,
                                        "end": 650
                                      },
                                      "start": 644,
                                      "end": 650
                                    },
                                    "start": 643,
                                    "end": 650
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
                                      "start": 655,
                                      "end": 662
                                    },
                                    "typeArguments": null,
                                    "start": 655,
                                    "end": 662
                                  },
                                  "start": 652,
                                  "end": 662
                                },
                                "start": 642,
                                "end": 662
                              },
                              "start": 639,
                              "end": 662
                            },
                            "start": 579,
                            "end": 662
                          },
                          "start": 577,
                          "end": 662
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 575,
                        "end": 663
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
                          "start": 676,
                          "end": 679
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                  "start": 689,
                                  "end": 690
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
                                        "start": 692,
                                        "end": 696
                                      },
                                      "typeArguments": null,
                                      "start": 692,
                                      "end": 696
                                    },
                                    "start": 692,
                                    "end": 698
                                  },
                                  "start": 690,
                                  "end": 698
                                },
                                "value": null,
                                "start": 686,
                                "end": 698
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
                                  "start": 703,
                                  "end": 707
                                },
                                "typeArguments": null,
                                "start": 703,
                                "end": 707
                              },
                              "start": 700,
                              "end": 707
                            },
                            "start": 681,
                            "end": 707
                          },
                          "start": 679,
                          "end": 707
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 676,
                        "end": 708
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
                          "start": 721,
                          "end": 724
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                        "end": 747
                                      }
                                    ],
                                    "start": 734,
                                    "end": 749
                                  },
                                  "start": 732,
                                  "end": 749
                                },
                                "start": 731,
                                "end": 749
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
                                          "start": 756,
                                          "end": 759
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 761,
                                            "end": 767
                                          },
                                          "start": 759,
                                          "end": 767
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 756,
                                        "end": 768
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
                                          "start": 769,
                                          "end": 772
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 774,
                                            "end": 780
                                          },
                                          "start": 772,
                                          "end": 780
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 769,
                                        "end": 780
                                      }
                                    ],
                                    "start": 754,
                                    "end": 782
                                  },
                                  "start": 752,
                                  "end": 782
                                },
                                "start": 751,
                                "end": 782
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
                                  "start": 787,
                                  "end": 791
                                },
                                "typeArguments": null,
                                "start": 787,
                                "end": 791
                              },
                              "start": 784,
                              "end": 791
                            },
                            "start": 726,
                            "end": 791
                          },
                          "start": 724,
                          "end": 791
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 721,
                        "end": 792
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
                          "start": 805,
                          "end": 808
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                      "start": 818,
                                      "end": 823
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
                                            "start": 824,
                                            "end": 828
                                          },
                                          "typeArguments": null,
                                          "start": 824,
                                          "end": 828
                                        }
                                      ],
                                      "start": 823,
                                      "end": 829
                                    },
                                    "start": 818,
                                    "end": 829
                                  },
                                  "start": 816,
                                  "end": 829
                                },
                                "start": 815,
                                "end": 829
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
                                      "start": 834,
                                      "end": 839
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
                                            "start": 840,
                                            "end": 848
                                          },
                                          "typeArguments": null,
                                          "start": 840,
                                          "end": 848
                                        }
                                      ],
                                      "start": 839,
                                      "end": 849
                                    },
                                    "start": 834,
                                    "end": 849
                                  },
                                  "start": 832,
                                  "end": 849
                                },
                                "start": 831,
                                "end": 849
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
                                  "start": 854,
                                  "end": 859
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
                                        "start": 860,
                                        "end": 867
                                      },
                                      "typeArguments": null,
                                      "start": 860,
                                      "end": 867
                                    }
                                  ],
                                  "start": 859,
                                  "end": 868
                                },
                                "start": 854,
                                "end": 868
                              },
                              "start": 851,
                              "end": 868
                            },
                            "start": 810,
                            "end": 868
                          },
                          "start": 808,
                          "end": 868
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 805,
                        "end": 869
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
                          "start": 882,
                          "end": 885
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSConstructSignatureDeclaration",
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
                                        "start": 913,
                                        "end": 919
                                      },
                                      "start": 911,
                                      "end": 919
                                    },
                                    "start": 910,
                                    "end": 919
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSNumberKeyword",
                                      "start": 922,
                                      "end": 928
                                    },
                                    "start": 922,
                                    "end": 930
                                  },
                                  "start": 920,
                                  "end": 930
                                },
                                "start": 905,
                                "end": 931
                              },
                              {
                                "type": "TSConstructSignatureDeclaration",
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
                                        "start": 956,
                                        "end": 962
                                      },
                                      "start": 954,
                                      "end": 962
                                    },
                                    "start": 953,
                                    "end": 962
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSStringKeyword",
                                      "start": 965,
                                      "end": 971
                                    },
                                    "start": 965,
                                    "end": 973
                                  },
                                  "start": 963,
                                  "end": 973
                                },
                                "start": 948,
                                "end": 974
                              }
                            ],
                            "start": 887,
                            "end": 988
                          },
                          "start": 885,
                          "end": 988
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 882,
                        "end": 989
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
                          "start": 1002,
                          "end": 1005
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                          "start": 1017,
                                          "end": 1018
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 1020,
                                            "end": 1026
                                          },
                                          "start": 1018,
                                          "end": 1026
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 1017,
                                        "end": 1027
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
                                          "start": 1028,
                                          "end": 1029
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSNumberKeyword",
                                            "start": 1031,
                                            "end": 1037
                                          },
                                          "start": 1029,
                                          "end": 1037
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 1028,
                                        "end": 1037
                                      }
                                    ],
                                    "start": 1015,
                                    "end": 1039
                                  },
                                  "start": 1013,
                                  "end": 1039
                                },
                                "start": 1012,
                                "end": 1039
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1044,
                                "end": 1050
                              },
                              "start": 1041,
                              "end": 1050
                            },
                            "start": 1007,
                            "end": 1050
                          },
                          "start": 1005,
                          "end": 1050
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1002,
                        "end": 1051
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
                          "start": 1064,
                          "end": 1067
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSConstructSignatureDeclaration",
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
                                            "type": "TSConstructSignatureDeclaration",
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
                                                    "start": 1231,
                                                    "end": 1237
                                                  },
                                                  "start": 1229,
                                                  "end": 1237
                                                },
                                                "start": 1228,
                                                "end": 1237
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSNumberKeyword",
                                                "start": 1240,
                                                "end": 1246
                                              },
                                              "start": 1238,
                                              "end": 1246
                                            },
                                            "start": 1223,
                                            "end": 1247
                                          },
                                          {
                                            "type": "TSConstructSignatureDeclaration",
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
                                                    "start": 1277,
                                                    "end": 1283
                                                  },
                                                  "start": 1275,
                                                  "end": 1283
                                                },
                                                "start": 1273,
                                                "end": 1283
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSNumberKeyword",
                                                "start": 1286,
                                                "end": 1292
                                              },
                                              "start": 1284,
                                              "end": 1292
                                            },
                                            "start": 1268,
                                            "end": 1293
                                          }
                                        ],
                                        "start": 1201,
                                        "end": 1311
                                      },
                                      "start": 1199,
                                      "end": 1311
                                    },
                                    "start": 1198,
                                    "end": 1311
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSNumberKeyword",
                                      "start": 1314,
                                      "end": 1320
                                    },
                                    "start": 1314,
                                    "end": 1322
                                  },
                                  "start": 1312,
                                  "end": 1322
                                },
                                "start": 1193,
                                "end": 1323
                              },
                              {
                                "type": "TSConstructSignatureDeclaration",
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
                                            "type": "TSConstructSignatureDeclaration",
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
                                                    "start": 1378,
                                                    "end": 1385
                                                  },
                                                  "start": 1376,
                                                  "end": 1385
                                                },
                                                "start": 1375,
                                                "end": 1385
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSBooleanKeyword",
                                                "start": 1388,
                                                "end": 1395
                                              },
                                              "start": 1386,
                                              "end": 1395
                                            },
                                            "start": 1370,
                                            "end": 1396
                                          },
                                          {
                                            "type": "TSConstructSignatureDeclaration",
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
                                                    "start": 1426,
                                                    "end": 1433
                                                  },
                                                  "start": 1424,
                                                  "end": 1433
                                                },
                                                "start": 1422,
                                                "end": 1433
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSBooleanKeyword",
                                                "start": 1436,
                                                "end": 1443
                                              },
                                              "start": 1434,
                                              "end": 1443
                                            },
                                            "start": 1417,
                                            "end": 1444
                                          }
                                        ],
                                        "start": 1348,
                                        "end": 1462
                                      },
                                      "start": 1346,
                                      "end": 1462
                                    },
                                    "start": 1345,
                                    "end": 1462
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSBooleanKeyword",
                                      "start": 1465,
                                      "end": 1472
                                    },
                                    "start": 1465,
                                    "end": 1474
                                  },
                                  "start": 1463,
                                  "end": 1474
                                },
                                "start": 1340,
                                "end": 1475
                              }
                            ],
                            "start": 1069,
                            "end": 1489
                          },
                          "start": 1067,
                          "end": 1489
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1064,
                        "end": 1490
                      }
                    ],
                    "start": 442,
                    "end": 1500
                  },
                  "declare": false,
                  "start": 430,
                  "end": 1500
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1520,
                    "end": 1521
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
                        "start": 1530,
                        "end": 1531
                      },
                      "typeArguments": null,
                      "start": 1530,
                      "end": 1531
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
                          "start": 1546,
                          "end": 1548
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 1555,
                                    "end": 1556
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1555,
                                  "end": 1556
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1558,
                                    "end": 1559
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1558,
                                  "end": 1559
                                }
                              ],
                              "start": 1554,
                              "end": 1560
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
                                      "start": 1564,
                                      "end": 1565
                                    },
                                    "typeArguments": null,
                                    "start": 1564,
                                    "end": 1565
                                  },
                                  "start": 1562,
                                  "end": 1565
                                },
                                "start": 1561,
                                "end": 1565
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
                                    "start": 1570,
                                    "end": 1571
                                  },
                                  "typeArguments": null,
                                  "start": 1570,
                                  "end": 1571
                                },
                                "start": 1570,
                                "end": 1573
                              },
                              "start": 1567,
                              "end": 1573
                            },
                            "start": 1550,
                            "end": 1573
                          },
                          "start": 1548,
                          "end": 1573
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1546,
                        "end": 1574
                      }
                    ],
                    "start": 1532,
                    "end": 1695
                  },
                  "declare": false,
                  "start": 1510,
                  "end": 1695
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1715,
                    "end": 1717
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
                          "start": 1718,
                          "end": 1719
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1718,
                        "end": 1719
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1721,
                          "end": 1722
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1721,
                        "end": 1722
                      }
                    ],
                    "start": 1717,
                    "end": 1723
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
                        "start": 1732,
                        "end": 1733
                      },
                      "typeArguments": null,
                      "start": 1732,
                      "end": 1733
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
                          "start": 1748,
                          "end": 1750
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                      "start": 1760,
                                      "end": 1761
                                    },
                                    "typeArguments": null,
                                    "start": 1760,
                                    "end": 1761
                                  },
                                  "start": 1758,
                                  "end": 1761
                                },
                                "start": 1757,
                                "end": 1761
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
                                    "start": 1766,
                                    "end": 1767
                                  },
                                  "typeArguments": null,
                                  "start": 1766,
                                  "end": 1767
                                },
                                "start": 1766,
                                "end": 1769
                              },
                              "start": 1763,
                              "end": 1769
                            },
                            "start": 1752,
                            "end": 1769
                          },
                          "start": 1750,
                          "end": 1769
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1748,
                        "end": 1770
                      }
                    ],
                    "start": 1734,
                    "end": 1855
                  },
                  "declare": false,
                  "start": 1705,
                  "end": 1855
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1875,
                    "end": 1877
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
                        "start": 1886,
                        "end": 1887
                      },
                      "typeArguments": null,
                      "start": 1886,
                      "end": 1887
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
                          "start": 1971,
                          "end": 1973
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 1980,
                                    "end": 1981
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1990,
                                      "end": 1994
                                    },
                                    "typeArguments": null,
                                    "start": 1990,
                                    "end": 1994
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1980,
                                  "end": 1994
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1996,
                                    "end": 1997
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2006,
                                      "end": 2013
                                    },
                                    "typeArguments": null,
                                    "start": 2006,
                                    "end": 2013
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1996,
                                  "end": 2013
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "V",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2015,
                                    "end": 2016
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2025,
                                      "end": 2033
                                    },
                                    "typeArguments": null,
                                    "start": 2025,
                                    "end": 2033
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2015,
                                  "end": 2033
                                }
                              ],
                              "start": 1979,
                              "end": 2034
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
                                              "start": 2044,
                                              "end": 2045
                                            },
                                            "typeArguments": null,
                                            "start": 2044,
                                            "end": 2045
                                          },
                                          "start": 2042,
                                          "end": 2045
                                        },
                                        "start": 2039,
                                        "end": 2045
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
                                          "start": 2050,
                                          "end": 2051
                                        },
                                        "typeArguments": null,
                                        "start": 2050,
                                        "end": 2051
                                      },
                                      "start": 2047,
                                      "end": 2051
                                    },
                                    "start": 2038,
                                    "end": 2051
                                  },
                                  "start": 2036,
                                  "end": 2051
                                },
                                "start": 2035,
                                "end": 2051
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
                                          "start": 2060,
                                          "end": 2061
                                        },
                                        "typeArguments": null,
                                        "start": 2060,
                                        "end": 2061
                                      },
                                      "start": 2058,
                                      "end": 2061
                                    },
                                    "start": 2057,
                                    "end": 2061
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
                                      "start": 2066,
                                      "end": 2067
                                    },
                                    "typeArguments": null,
                                    "start": 2066,
                                    "end": 2067
                                  },
                                  "start": 2063,
                                  "end": 2067
                                },
                                "start": 2056,
                                "end": 2067
                              },
                              "start": 2053,
                              "end": 2067
                            },
                            "start": 1975,
                            "end": 2067
                          },
                          "start": 1973,
                          "end": 2067
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1971,
                        "end": 2068
                      }
                    ],
                    "start": 1888,
                    "end": 2078
                  },
                  "declare": false,
                  "start": 1865,
                  "end": 2078
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2098,
                    "end": 2100
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
                        "start": 2109,
                        "end": 2110
                      },
                      "typeArguments": null,
                      "start": 2109,
                      "end": 2110
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
                          "start": 2125,
                          "end": 2127
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 2134,
                                    "end": 2135
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2144,
                                      "end": 2148
                                    },
                                    "typeArguments": null,
                                    "start": 2144,
                                    "end": 2148
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2134,
                                  "end": 2148
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2150,
                                    "end": 2151
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2160,
                                      "end": 2167
                                    },
                                    "typeArguments": null,
                                    "start": 2160,
                                    "end": 2167
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2150,
                                  "end": 2167
                                }
                              ],
                              "start": 2133,
                              "end": 2168
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
                                              "start": 2178,
                                              "end": 2179
                                            },
                                            "typeArguments": null,
                                            "start": 2178,
                                            "end": 2179
                                          },
                                          "start": 2176,
                                          "end": 2179
                                        },
                                        "start": 2173,
                                        "end": 2179
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
                                          "start": 2184,
                                          "end": 2185
                                        },
                                        "typeArguments": null,
                                        "start": 2184,
                                        "end": 2185
                                      },
                                      "start": 2181,
                                      "end": 2185
                                    },
                                    "start": 2172,
                                    "end": 2185
                                  },
                                  "start": 2170,
                                  "end": 2185
                                },
                                "start": 2169,
                                "end": 2185
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
                                                  "start": 2199,
                                                  "end": 2202
                                                },
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "typeAnnotation": {
                                                    "type": "TSNumberKeyword",
                                                    "start": 2204,
                                                    "end": 2210
                                                  },
                                                  "start": 2202,
                                                  "end": 2210
                                                },
                                                "accessibility": null,
                                                "static": false,
                                                "start": 2199,
                                                "end": 2211
                                              }
                                            ],
                                            "start": 2197,
                                            "end": 2213
                                          },
                                          "start": 2195,
                                          "end": 2213
                                        },
                                        "start": 2191,
                                        "end": 2213
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
                                          "start": 2218,
                                          "end": 2219
                                        },
                                        "typeArguments": null,
                                        "start": 2218,
                                        "end": 2219
                                      },
                                      "start": 2215,
                                      "end": 2219
                                    },
                                    "start": 2190,
                                    "end": 2219
                                  },
                                  "start": 2188,
                                  "end": 2219
                                },
                                "start": 2187,
                                "end": 2219
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
                                          "start": 2228,
                                          "end": 2229
                                        },
                                        "typeArguments": null,
                                        "start": 2228,
                                        "end": 2229
                                      },
                                      "start": 2226,
                                      "end": 2229
                                    },
                                    "start": 2225,
                                    "end": 2229
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
                                      "start": 2234,
                                      "end": 2235
                                    },
                                    "typeArguments": null,
                                    "start": 2234,
                                    "end": 2235
                                  },
                                  "start": 2231,
                                  "end": 2235
                                },
                                "start": 2224,
                                "end": 2235
                              },
                              "start": 2221,
                              "end": 2235
                            },
                            "start": 2129,
                            "end": 2235
                          },
                          "start": 2127,
                          "end": 2235
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2125,
                        "end": 2236
                      }
                    ],
                    "start": 2111,
                    "end": 2270
                  },
                  "declare": false,
                  "start": 2088,
                  "end": 2270
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I4B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2290,
                    "end": 2293
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
                        "start": 2302,
                        "end": 2303
                      },
                      "typeArguments": null,
                      "start": 2302,
                      "end": 2303
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
                          "start": 2318,
                          "end": 2321
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 2328,
                                    "end": 2329
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2338,
                                      "end": 2345
                                    },
                                    "typeArguments": null,
                                    "start": 2338,
                                    "end": 2345
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2328,
                                  "end": 2345
                                }
                              ],
                              "start": 2327,
                              "end": 2346
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
                                  "start": 2350,
                                  "end": 2351
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
                                        "start": 2353,
                                        "end": 2354
                                      },
                                      "typeArguments": null,
                                      "start": 2353,
                                      "end": 2354
                                    },
                                    "start": 2353,
                                    "end": 2356
                                  },
                                  "start": 2351,
                                  "end": 2356
                                },
                                "value": null,
                                "start": 2347,
                                "end": 2356
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
                                  "start": 2361,
                                  "end": 2362
                                },
                                "typeArguments": null,
                                "start": 2361,
                                "end": 2362
                              },
                              "start": 2358,
                              "end": 2362
                            },
                            "start": 2323,
                            "end": 2362
                          },
                          "start": 2321,
                          "end": 2362
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2318,
                        "end": 2363
                      }
                    ],
                    "start": 2304,
                    "end": 2456
                  },
                  "declare": false,
                  "start": 2280,
                  "end": 2456
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I4C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2476,
                    "end": 2479
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
                        "start": 2488,
                        "end": 2489
                      },
                      "typeArguments": null,
                      "start": 2488,
                      "end": 2489
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
                          "start": 2504,
                          "end": 2507
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 2514,
                                    "end": 2515
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2524,
                                      "end": 2531
                                    },
                                    "typeArguments": null,
                                    "start": 2524,
                                    "end": 2531
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2514,
                                  "end": 2531
                                }
                              ],
                              "start": 2513,
                              "end": 2532
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
                                      "start": 2536,
                                      "end": 2537
                                    },
                                    "typeArguments": null,
                                    "start": 2536,
                                    "end": 2537
                                  },
                                  "start": 2534,
                                  "end": 2537
                                },
                                "start": 2533,
                                "end": 2537
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
                                      "start": 2542,
                                      "end": 2543
                                    },
                                    "typeArguments": null,
                                    "start": 2542,
                                    "end": 2543
                                  },
                                  "start": 2540,
                                  "end": 2543
                                },
                                "start": 2539,
                                "end": 2543
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
                                  "start": 2548,
                                  "end": 2549
                                },
                                "typeArguments": null,
                                "start": 2548,
                                "end": 2549
                              },
                              "start": 2545,
                              "end": 2549
                            },
                            "start": 2509,
                            "end": 2549
                          },
                          "start": 2507,
                          "end": 2549
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2504,
                        "end": 2550
                      }
                    ],
                    "start": 2490,
                    "end": 2668
                  },
                  "declare": false,
                  "start": 2466,
                  "end": 2668
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I4E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2688,
                    "end": 2691
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
                        "start": 2700,
                        "end": 2701
                      },
                      "typeArguments": null,
                      "start": 2700,
                      "end": 2701
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
                          "start": 2716,
                          "end": 2719
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 2726,
                                    "end": 2727
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Array",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2736,
                                      "end": 2741
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
                                            "start": 2742,
                                            "end": 2750
                                          },
                                          "typeArguments": null,
                                          "start": 2742,
                                          "end": 2750
                                        }
                                      ],
                                      "start": 2741,
                                      "end": 2751
                                    },
                                    "start": 2736,
                                    "end": 2751
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2726,
                                  "end": 2751
                                }
                              ],
                              "start": 2725,
                              "end": 2752
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
                                      "start": 2756,
                                      "end": 2761
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
                                            "start": 2762,
                                            "end": 2766
                                          },
                                          "typeArguments": null,
                                          "start": 2762,
                                          "end": 2766
                                        }
                                      ],
                                      "start": 2761,
                                      "end": 2767
                                    },
                                    "start": 2756,
                                    "end": 2767
                                  },
                                  "start": 2754,
                                  "end": 2767
                                },
                                "start": 2753,
                                "end": 2767
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
                                      "start": 2772,
                                      "end": 2777
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
                                            "start": 2778,
                                            "end": 2782
                                          },
                                          "typeArguments": null,
                                          "start": 2778,
                                          "end": 2782
                                        }
                                      ],
                                      "start": 2777,
                                      "end": 2783
                                    },
                                    "start": 2772,
                                    "end": 2783
                                  },
                                  "start": 2770,
                                  "end": 2783
                                },
                                "start": 2769,
                                "end": 2783
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
                                  "start": 2788,
                                  "end": 2789
                                },
                                "typeArguments": null,
                                "start": 2788,
                                "end": 2789
                              },
                              "start": 2785,
                              "end": 2789
                            },
                            "start": 2721,
                            "end": 2789
                          },
                          "start": 2719,
                          "end": 2789
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2716,
                        "end": 2790
                      }
                    ],
                    "start": 2702,
                    "end": 2859
                  },
                  "declare": false,
                  "start": 2678,
                  "end": 2859
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2879,
                    "end": 2881
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
                        "start": 2890,
                        "end": 2891
                      },
                      "typeArguments": null,
                      "start": 2890,
                      "end": 2891
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
                          "start": 2906,
                          "end": 2909
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 2916,
                                    "end": 2917
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2916,
                                  "end": 2917
                                }
                              ],
                              "start": 2915,
                              "end": 2918
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
                                          "start": 2924,
                                          "end": 2925
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
                                              "start": 2927,
                                              "end": 2928
                                            },
                                            "typeArguments": null,
                                            "start": 2927,
                                            "end": 2928
                                          },
                                          "start": 2925,
                                          "end": 2928
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 2924,
                                        "end": 2929
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
                                          "start": 2930,
                                          "end": 2931
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
                                              "start": 2933,
                                              "end": 2934
                                            },
                                            "typeArguments": null,
                                            "start": 2933,
                                            "end": 2934
                                          },
                                          "start": 2931,
                                          "end": 2934
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 2930,
                                        "end": 2934
                                      }
                                    ],
                                    "start": 2922,
                                    "end": 2936
                                  },
                                  "start": 2920,
                                  "end": 2936
                                },
                                "start": 2919,
                                "end": 2936
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
                                  "start": 2941,
                                  "end": 2942
                                },
                                "typeArguments": null,
                                "start": 2941,
                                "end": 2942
                              },
                              "start": 2938,
                              "end": 2942
                            },
                            "start": 2911,
                            "end": 2942
                          },
                          "start": 2909,
                          "end": 2942
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2906,
                        "end": 2943
                      }
                    ],
                    "start": 2892,
                    "end": 3009
                  },
                  "declare": false,
                  "start": 2869,
                  "end": 3009
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3029,
                    "end": 3031
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
                        "start": 3040,
                        "end": 3041
                      },
                      "typeArguments": null,
                      "start": 3040,
                      "end": 3041
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
                          "start": 3056,
                          "end": 3059
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 3066,
                                    "end": 3067
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3076,
                                      "end": 3080
                                    },
                                    "typeArguments": null,
                                    "start": 3076,
                                    "end": 3080
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3066,
                                  "end": 3080
                                }
                              ],
                              "start": 3065,
                              "end": 3081
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
                                          "start": 3087,
                                          "end": 3088
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
                                              "start": 3090,
                                              "end": 3091
                                            },
                                            "typeArguments": null,
                                            "start": 3090,
                                            "end": 3091
                                          },
                                          "start": 3088,
                                          "end": 3091
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 3087,
                                        "end": 3092
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
                                          "start": 3093,
                                          "end": 3094
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
                                              "start": 3096,
                                              "end": 3097
                                            },
                                            "typeArguments": null,
                                            "start": 3096,
                                            "end": 3097
                                          },
                                          "start": 3094,
                                          "end": 3097
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 3093,
                                        "end": 3097
                                      }
                                    ],
                                    "start": 3085,
                                    "end": 3099
                                  },
                                  "start": 3083,
                                  "end": 3099
                                },
                                "start": 3082,
                                "end": 3099
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 3104,
                                "end": 3110
                              },
                              "start": 3101,
                              "end": 3110
                            },
                            "start": 3061,
                            "end": 3110
                          },
                          "start": 3059,
                          "end": 3110
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3056,
                        "end": 3111
                      }
                    ],
                    "start": 3042,
                    "end": 3197
                  },
                  "declare": false,
                  "start": 3019,
                  "end": 3197
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I8",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3217,
                    "end": 3219
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
                        "start": 3228,
                        "end": 3229
                      },
                      "typeArguments": null,
                      "start": 3228,
                      "end": 3229
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
                          "start": 3403,
                          "end": 3406
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 3413,
                                    "end": 3414
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3413,
                                  "end": 3414
                                }
                              ],
                              "start": 3412,
                              "end": 3415
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
                                    "type": "TSConstructorType",
                                    "abstract": false,
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
                                              "start": 3427,
                                              "end": 3428
                                            },
                                            "typeArguments": null,
                                            "start": 3427,
                                            "end": 3428
                                          },
                                          "start": 3425,
                                          "end": 3428
                                        },
                                        "start": 3424,
                                        "end": 3428
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
                                          "start": 3433,
                                          "end": 3434
                                        },
                                        "typeArguments": null,
                                        "start": 3433,
                                        "end": 3434
                                      },
                                      "start": 3430,
                                      "end": 3434
                                    },
                                    "start": 3419,
                                    "end": 3434
                                  },
                                  "start": 3417,
                                  "end": 3434
                                },
                                "start": 3416,
                                "end": 3434
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
                                    "start": 3439,
                                    "end": 3440
                                  },
                                  "typeArguments": null,
                                  "start": 3439,
                                  "end": 3440
                                },
                                "start": 3439,
                                "end": 3442
                              },
                              "start": 3436,
                              "end": 3442
                            },
                            "start": 3408,
                            "end": 3442
                          },
                          "start": 3406,
                          "end": 3442
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3403,
                        "end": 3443
                      }
                    ],
                    "start": 3230,
                    "end": 3453
                  },
                  "declare": false,
                  "start": 3207,
                  "end": 3453
                }
              ],
              "start": 366,
              "end": 3459
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 324,
            "end": 3459
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "WithGenericSignaturesInBaseType",
              "optional": false,
              "typeAnnotation": null,
              "start": 3472,
              "end": 3503
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
                    "start": 3572,
                    "end": 3573
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
                          "start": 3588,
                          "end": 3590
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 3597,
                                    "end": 3598
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3597,
                                  "end": 3598
                                }
                              ],
                              "start": 3596,
                              "end": 3599
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
                                      "start": 3603,
                                      "end": 3604
                                    },
                                    "typeArguments": null,
                                    "start": 3603,
                                    "end": 3604
                                  },
                                  "start": 3601,
                                  "end": 3604
                                },
                                "start": 3600,
                                "end": 3604
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
                                    "start": 3609,
                                    "end": 3610
                                  },
                                  "typeArguments": null,
                                  "start": 3609,
                                  "end": 3610
                                },
                                "start": 3609,
                                "end": 3612
                              },
                              "start": 3606,
                              "end": 3612
                            },
                            "start": 3592,
                            "end": 3612
                          },
                          "start": 3590,
                          "end": 3612
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3588,
                        "end": 3613
                      }
                    ],
                    "start": 3574,
                    "end": 3623
                  },
                  "declare": false,
                  "start": 3562,
                  "end": 3623
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3643,
                    "end": 3645
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
                        "start": 3654,
                        "end": 3655
                      },
                      "typeArguments": null,
                      "start": 3654,
                      "end": 3655
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
                          "start": 3670,
                          "end": 3672
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 3679,
                                    "end": 3680
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3679,
                                  "end": 3680
                                }
                              ],
                              "start": 3678,
                              "end": 3681
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
                                      "start": 3685,
                                      "end": 3686
                                    },
                                    "typeArguments": null,
                                    "start": 3685,
                                    "end": 3686
                                  },
                                  "start": 3683,
                                  "end": 3686
                                },
                                "start": 3682,
                                "end": 3686
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 3691,
                                  "end": 3697
                                },
                                "start": 3691,
                                "end": 3699
                              },
                              "start": 3688,
                              "end": 3699
                            },
                            "start": 3674,
                            "end": 3699
                          },
                          "start": 3672,
                          "end": 3699
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3670,
                        "end": 3700
                      }
                    ],
                    "start": 3656,
                    "end": 3719
                  },
                  "declare": false,
                  "start": 3633,
                  "end": 3719
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3787,
                    "end": 3788
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
                          "start": 3803,
                          "end": 3805
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 3812,
                                    "end": 3813
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3812,
                                  "end": 3813
                                }
                              ],
                              "start": 3811,
                              "end": 3814
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
                                      "start": 3818,
                                      "end": 3819
                                    },
                                    "typeArguments": null,
                                    "start": 3818,
                                    "end": 3819
                                  },
                                  "start": 3816,
                                  "end": 3819
                                },
                                "start": 3815,
                                "end": 3819
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 3824,
                                  "end": 3830
                                },
                                "start": 3824,
                                "end": 3832
                              },
                              "start": 3821,
                              "end": 3832
                            },
                            "start": 3807,
                            "end": 3832
                          },
                          "start": 3805,
                          "end": 3832
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3803,
                        "end": 3833
                      }
                    ],
                    "start": 3789,
                    "end": 3843
                  },
                  "declare": false,
                  "start": 3777,
                  "end": 3843
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3863,
                    "end": 3865
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
                        "start": 3874,
                        "end": 3875
                      },
                      "typeArguments": null,
                      "start": 3874,
                      "end": 3875
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
                          "start": 3890,
                          "end": 3892
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 3899,
                                    "end": 3900
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3899,
                                  "end": 3900
                                }
                              ],
                              "start": 3898,
                              "end": 3901
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
                                      "start": 3905,
                                      "end": 3906
                                    },
                                    "typeArguments": null,
                                    "start": 3905,
                                    "end": 3906
                                  },
                                  "start": 3903,
                                  "end": 3906
                                },
                                "start": 3902,
                                "end": 3906
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
                                    "start": 3911,
                                    "end": 3912
                                  },
                                  "typeArguments": null,
                                  "start": 3911,
                                  "end": 3912
                                },
                                "start": 3911,
                                "end": 3914
                              },
                              "start": 3908,
                              "end": 3914
                            },
                            "start": 3894,
                            "end": 3914
                          },
                          "start": 3892,
                          "end": 3914
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3890,
                        "end": 3915
                      }
                    ],
                    "start": 3876,
                    "end": 3934
                  },
                  "declare": false,
                  "start": 3853,
                  "end": 3934
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4019,
                    "end": 4020
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
                          "name": "a14",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4035,
                          "end": 4038
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSConstructSignatureDeclaration",
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
                                        "start": 4063,
                                        "end": 4064
                                      },
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Derived",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4073,
                                          "end": 4080
                                        },
                                        "typeArguments": null,
                                        "start": 4073,
                                        "end": 4080
                                      },
                                      "default": null,
                                      "in": false,
                                      "out": false,
                                      "const": false,
                                      "start": 4063,
                                      "end": 4080
                                    }
                                  ],
                                  "start": 4062,
                                  "end": 4081
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
                                          "start": 4085,
                                          "end": 4086
                                        },
                                        "typeArguments": null,
                                        "start": 4085,
                                        "end": 4086
                                      },
                                      "start": 4083,
                                      "end": 4086
                                    },
                                    "start": 4082,
                                    "end": 4086
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSNumberKeyword",
                                      "start": 4089,
                                      "end": 4095
                                    },
                                    "start": 4089,
                                    "end": 4097
                                  },
                                  "start": 4087,
                                  "end": 4097
                                },
                                "start": 4058,
                                "end": 4098
                              },
                              {
                                "type": "TSConstructSignatureDeclaration",
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
                                        "start": 4120,
                                        "end": 4121
                                      },
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Base",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4130,
                                          "end": 4134
                                        },
                                        "typeArguments": null,
                                        "start": 4130,
                                        "end": 4134
                                      },
                                      "default": null,
                                      "in": false,
                                      "out": false,
                                      "const": false,
                                      "start": 4120,
                                      "end": 4134
                                    }
                                  ],
                                  "start": 4119,
                                  "end": 4135
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
                                          "name": "U",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4139,
                                          "end": 4140
                                        },
                                        "typeArguments": null,
                                        "start": 4139,
                                        "end": 4140
                                      },
                                      "start": 4137,
                                      "end": 4140
                                    },
                                    "start": 4136,
                                    "end": 4140
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSNumberKeyword",
                                      "start": 4143,
                                      "end": 4149
                                    },
                                    "start": 4143,
                                    "end": 4151
                                  },
                                  "start": 4141,
                                  "end": 4151
                                },
                                "start": 4115,
                                "end": 4152
                              }
                            ],
                            "start": 4040,
                            "end": 4166
                          },
                          "start": 4038,
                          "end": 4166
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 4035,
                        "end": 4167
                      }
                    ],
                    "start": 4021,
                    "end": 4177
                  },
                  "declare": false,
                  "start": 4009,
                  "end": 4177
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I8",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4197,
                    "end": 4199
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4208,
                        "end": 4209
                      },
                      "typeArguments": null,
                      "start": 4208,
                      "end": 4209
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
                          "name": "a14",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4224,
                          "end": 4227
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 4234,
                                    "end": 4235
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4244,
                                      "end": 4248
                                    },
                                    "typeArguments": null,
                                    "start": 4244,
                                    "end": 4248
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 4234,
                                  "end": 4248
                                }
                              ],
                              "start": 4233,
                              "end": 4249
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
                                      "start": 4253,
                                      "end": 4254
                                    },
                                    "typeArguments": null,
                                    "start": 4253,
                                    "end": 4254
                                  },
                                  "start": 4251,
                                  "end": 4254
                                },
                                "start": 4250,
                                "end": 4254
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 4259,
                                  "end": 4265
                                },
                                "start": 4259,
                                "end": 4267
                              },
                              "start": 4256,
                              "end": 4267
                            },
                            "start": 4229,
                            "end": 4267
                          },
                          "start": 4227,
                          "end": 4267
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 4224,
                        "end": 4268
                      }
                    ],
                    "start": 4210,
                    "end": 4278
                  },
                  "declare": false,
                  "start": 4187,
                  "end": 4278
                }
              ],
              "start": 3504,
              "end": 4284
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 3465,
            "end": 4284
          }
        ],
        "start": 131,
        "end": 4286
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 117,
      "end": 4286
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 117,
  "end": 4286
}
```
