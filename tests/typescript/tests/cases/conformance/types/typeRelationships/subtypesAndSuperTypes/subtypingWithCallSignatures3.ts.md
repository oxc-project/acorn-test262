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
        "start": 171,
        "end": 177
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
              "start": 190,
              "end": 194
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
                    "start": 197,
                    "end": 200
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 202,
                      "end": 208
                    },
                    "start": 200,
                    "end": 208
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
                  "start": 197,
                  "end": 209
                }
              ],
              "start": 195,
              "end": 211
            },
            "abstract": false,
            "declare": false,
            "start": 184,
            "end": 211
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
              "start": 222,
              "end": 229
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 242
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
                    "start": 245,
                    "end": 248
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 250,
                      "end": 256
                    },
                    "start": 248,
                    "end": 256
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
                  "start": 245,
                  "end": 257
                }
              ],
              "start": 243,
              "end": 259
            },
            "abstract": false,
            "declare": false,
            "start": 216,
            "end": 259
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
              "start": 270,
              "end": 278
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 287,
              "end": 294
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
                    "start": 297,
                    "end": 300
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 302,
                      "end": 308
                    },
                    "start": 300,
                    "end": 308
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
                  "start": 297,
                  "end": 309
                }
              ],
              "start": 295,
              "end": 311
            },
            "abstract": false,
            "declare": false,
            "start": 264,
            "end": 311
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
              "start": 322,
              "end": 334
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 343,
              "end": 347
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
                    "start": 350,
                    "end": 354
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 356,
                      "end": 362
                    },
                    "start": 354,
                    "end": 362
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
                  "start": 350,
                  "end": 363
                }
              ],
              "start": 348,
              "end": 365
            },
            "abstract": false,
            "declare": false,
            "start": 316,
            "end": 365
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 388,
              "end": 392
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 401,
                            "end": 407
                          },
                          "start": 399,
                          "end": 407
                        },
                        "start": 398,
                        "end": 407
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 412,
                          "end": 418
                        },
                        "start": 412,
                        "end": 420
                      },
                      "start": 409,
                      "end": 420
                    },
                    "start": 397,
                    "end": 420
                  },
                  "start": 395,
                  "end": 420
                },
                "start": 393,
                "end": 420
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 430,
                  "end": 432
                },
                "typeArguments": null,
                "start": 423,
                "end": 432
              },
              "start": 421,
              "end": 432
            },
            "body": null,
            "expression": false,
            "start": 371,
            "end": 433
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 455,
              "end": 459
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 464,
                    "end": 467
                  },
                  "start": 462,
                  "end": 467
                },
                "start": 460,
                "end": 467
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 470,
                "end": 473
              },
              "start": 468,
              "end": 473
            },
            "body": null,
            "expression": false,
            "start": 438,
            "end": 474
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null,
              "start": 497,
              "end": 501
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
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
                                      "start": 516,
                                      "end": 520
                                    },
                                    "typeArguments": null,
                                    "start": 516,
                                    "end": 520
                                  },
                                  "start": 514,
                                  "end": 520
                                },
                                "start": 511,
                                "end": 520
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
                                  "start": 525,
                                  "end": 532
                                },
                                "typeArguments": null,
                                "start": 525,
                                "end": 532
                              },
                              "start": 522,
                              "end": 532
                            },
                            "start": 510,
                            "end": 532
                          },
                          "start": 508,
                          "end": 532
                        },
                        "start": 507,
                        "end": 532
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
                                  "start": 541,
                                  "end": 545
                                },
                                "typeArguments": null,
                                "start": 541,
                                "end": 545
                              },
                              "start": 539,
                              "end": 545
                            },
                            "start": 538,
                            "end": 545
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
                              "start": 550,
                              "end": 558
                            },
                            "typeArguments": null,
                            "start": 550,
                            "end": 558
                          },
                          "start": 547,
                          "end": 558
                        },
                        "start": 537,
                        "end": 558
                      },
                      "start": 534,
                      "end": 558
                    },
                    "start": 506,
                    "end": 558
                  },
                  "start": 504,
                  "end": 558
                },
                "start": 502,
                "end": 558
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 568,
                  "end": 570
                },
                "typeArguments": null,
                "start": 561,
                "end": 570
              },
              "start": 559,
              "end": 570
            },
            "body": null,
            "expression": false,
            "start": 480,
            "end": 571
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null,
              "start": 593,
              "end": 597
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 602,
                    "end": 605
                  },
                  "start": 600,
                  "end": 605
                },
                "start": 598,
                "end": 605
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 608,
                "end": 611
              },
              "start": 606,
              "end": 611
            },
            "body": null,
            "expression": false,
            "start": 576,
            "end": 612
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo8",
              "optional": false,
              "typeAnnotation": null,
              "start": 635,
              "end": 639
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
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
                                      "start": 654,
                                      "end": 658
                                    },
                                    "typeArguments": null,
                                    "start": 654,
                                    "end": 658
                                  },
                                  "start": 652,
                                  "end": 658
                                },
                                "start": 649,
                                "end": 658
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
                                  "start": 663,
                                  "end": 670
                                },
                                "typeArguments": null,
                                "start": 663,
                                "end": 670
                              },
                              "start": 660,
                              "end": 670
                            },
                            "start": 648,
                            "end": 670
                          },
                          "start": 646,
                          "end": 670
                        },
                        "start": 645,
                        "end": 670
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
                                      "start": 682,
                                      "end": 686
                                    },
                                    "typeArguments": null,
                                    "start": 682,
                                    "end": 686
                                  },
                                  "start": 680,
                                  "end": 686
                                },
                                "start": 676,
                                "end": 686
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
                                  "start": 691,
                                  "end": 698
                                },
                                "typeArguments": null,
                                "start": 691,
                                "end": 698
                              },
                              "start": 688,
                              "end": 698
                            },
                            "start": 675,
                            "end": 698
                          },
                          "start": 673,
                          "end": 698
                        },
                        "start": 672,
                        "end": 698
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
                                  "start": 707,
                                  "end": 711
                                },
                                "typeArguments": null,
                                "start": 707,
                                "end": 711
                              },
                              "start": 705,
                              "end": 711
                            },
                            "start": 704,
                            "end": 711
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
                              "start": 716,
                              "end": 723
                            },
                            "typeArguments": null,
                            "start": 716,
                            "end": 723
                          },
                          "start": 713,
                          "end": 723
                        },
                        "start": 703,
                        "end": 723
                      },
                      "start": 700,
                      "end": 723
                    },
                    "start": 644,
                    "end": 723
                  },
                  "start": 642,
                  "end": 723
                },
                "start": 640,
                "end": 723
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 733,
                  "end": 735
                },
                "typeArguments": null,
                "start": 726,
                "end": 735
              },
              "start": 724,
              "end": 735
            },
            "body": null,
            "expression": false,
            "start": 618,
            "end": 736
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo8",
              "optional": false,
              "typeAnnotation": null,
              "start": 758,
              "end": 762
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 767,
                    "end": 770
                  },
                  "start": 765,
                  "end": 770
                },
                "start": 763,
                "end": 770
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 773,
                "end": 776
              },
              "start": 771,
              "end": 776
            },
            "body": null,
            "expression": false,
            "start": 741,
            "end": 777
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo10",
              "optional": false,
              "typeAnnotation": null,
              "start": 800,
              "end": 805
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
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
                          "start": 814,
                          "end": 815
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
                                "start": 817,
                                "end": 821
                              },
                              "typeArguments": null,
                              "start": 817,
                              "end": 821
                            },
                            "start": 817,
                            "end": 823
                          },
                          "start": 815,
                          "end": 823
                        },
                        "value": null,
                        "start": 811,
                        "end": 823
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
                          "start": 828,
                          "end": 832
                        },
                        "typeArguments": null,
                        "start": 828,
                        "end": 832
                      },
                      "start": 825,
                      "end": 832
                    },
                    "start": 810,
                    "end": 832
                  },
                  "start": 808,
                  "end": 832
                },
                "start": 806,
                "end": 832
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 842,
                  "end": 844
                },
                "typeArguments": null,
                "start": 835,
                "end": 844
              },
              "start": 833,
              "end": 844
            },
            "body": null,
            "expression": false,
            "start": 783,
            "end": 845
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo10",
              "optional": false,
              "typeAnnotation": null,
              "start": 867,
              "end": 872
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 877,
                    "end": 880
                  },
                  "start": 875,
                  "end": 880
                },
                "start": 873,
                "end": 880
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 883,
                "end": 886
              },
              "start": 881,
              "end": 886
            },
            "body": null,
            "expression": false,
            "start": 850,
            "end": 887
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo11",
              "optional": false,
              "typeAnnotation": null,
              "start": 910,
              "end": 915
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
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
                                  "start": 926,
                                  "end": 929
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 931,
                                    "end": 937
                                  },
                                  "start": 929,
                                  "end": 937
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 926,
                                "end": 937
                              }
                            ],
                            "start": 924,
                            "end": 939
                          },
                          "start": 922,
                          "end": 939
                        },
                        "start": 921,
                        "end": 939
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
                                  "start": 946,
                                  "end": 949
                                },
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
                                "accessibility": null,
                                "static": false,
                                "start": 946,
                                "end": 958
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
                                  "start": 959,
                                  "end": 962
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 964,
                                    "end": 970
                                  },
                                  "start": 962,
                                  "end": 970
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 959,
                                "end": 970
                              }
                            ],
                            "start": 944,
                            "end": 972
                          },
                          "start": 942,
                          "end": 972
                        },
                        "start": 941,
                        "end": 972
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
                          "start": 977,
                          "end": 981
                        },
                        "typeArguments": null,
                        "start": 977,
                        "end": 981
                      },
                      "start": 974,
                      "end": 981
                    },
                    "start": 920,
                    "end": 981
                  },
                  "start": 918,
                  "end": 981
                },
                "start": 916,
                "end": 981
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 991,
                  "end": 993
                },
                "typeArguments": null,
                "start": 984,
                "end": 993
              },
              "start": 982,
              "end": 993
            },
            "body": null,
            "expression": false,
            "start": 893,
            "end": 994
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo11",
              "optional": false,
              "typeAnnotation": null,
              "start": 1016,
              "end": 1021
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1026,
                    "end": 1029
                  },
                  "start": 1024,
                  "end": 1029
                },
                "start": 1022,
                "end": 1029
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1032,
                "end": 1035
              },
              "start": 1030,
              "end": 1035
            },
            "body": null,
            "expression": false,
            "start": 999,
            "end": 1036
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo12",
              "optional": false,
              "typeAnnotation": null,
              "start": 1059,
              "end": 1064
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
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
                              "start": 1073,
                              "end": 1078
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
                                    "start": 1079,
                                    "end": 1083
                                  },
                                  "typeArguments": null,
                                  "start": 1079,
                                  "end": 1083
                                }
                              ],
                              "start": 1078,
                              "end": 1084
                            },
                            "start": 1073,
                            "end": 1084
                          },
                          "start": 1071,
                          "end": 1084
                        },
                        "start": 1070,
                        "end": 1084
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
                              "start": 1089,
                              "end": 1094
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
                                    "start": 1095,
                                    "end": 1103
                                  },
                                  "typeArguments": null,
                                  "start": 1095,
                                  "end": 1103
                                }
                              ],
                              "start": 1094,
                              "end": 1104
                            },
                            "start": 1089,
                            "end": 1104
                          },
                          "start": 1087,
                          "end": 1104
                        },
                        "start": 1086,
                        "end": 1104
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
                          "start": 1109,
                          "end": 1114
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
                                "start": 1115,
                                "end": 1122
                              },
                              "typeArguments": null,
                              "start": 1115,
                              "end": 1122
                            }
                          ],
                          "start": 1114,
                          "end": 1123
                        },
                        "start": 1109,
                        "end": 1123
                      },
                      "start": 1106,
                      "end": 1123
                    },
                    "start": 1069,
                    "end": 1123
                  },
                  "start": 1067,
                  "end": 1123
                },
                "start": 1065,
                "end": 1123
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1133,
                  "end": 1135
                },
                "typeArguments": null,
                "start": 1126,
                "end": 1135
              },
              "start": 1124,
              "end": 1135
            },
            "body": null,
            "expression": false,
            "start": 1042,
            "end": 1136
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo12",
              "optional": false,
              "typeAnnotation": null,
              "start": 1158,
              "end": 1163
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1168,
                    "end": 1171
                  },
                  "start": 1166,
                  "end": 1171
                },
                "start": 1164,
                "end": 1171
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1174,
                "end": 1177
              },
              "start": 1172,
              "end": 1177
            },
            "body": null,
            "expression": false,
            "start": 1141,
            "end": 1178
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo15",
              "optional": false,
              "typeAnnotation": null,
              "start": 1201,
              "end": 1206
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
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
                                  "start": 1217,
                                  "end": 1218
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1220,
                                    "end": 1226
                                  },
                                  "start": 1218,
                                  "end": 1226
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 1217,
                                "end": 1227
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
                                  "start": 1228,
                                  "end": 1229
                                },
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
                                "accessibility": null,
                                "static": false,
                                "start": 1228,
                                "end": 1237
                              }
                            ],
                            "start": 1215,
                            "end": 1239
                          },
                          "start": 1213,
                          "end": 1239
                        },
                        "start": 1212,
                        "end": 1239
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1244,
                        "end": 1250
                      },
                      "start": 1241,
                      "end": 1250
                    },
                    "start": 1211,
                    "end": 1250
                  },
                  "start": 1209,
                  "end": 1250
                },
                "start": 1207,
                "end": 1250
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1260,
                  "end": 1262
                },
                "typeArguments": null,
                "start": 1253,
                "end": 1262
              },
              "start": 1251,
              "end": 1262
            },
            "body": null,
            "expression": false,
            "start": 1184,
            "end": 1263
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo15",
              "optional": false,
              "typeAnnotation": null,
              "start": 1285,
              "end": 1290
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1295,
                    "end": 1298
                  },
                  "start": 1293,
                  "end": 1298
                },
                "start": 1291,
                "end": 1298
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1301,
                "end": 1304
              },
              "start": 1299,
              "end": 1304
            },
            "body": null,
            "expression": false,
            "start": 1268,
            "end": 1305
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo16",
              "optional": false,
              "typeAnnotation": null,
              "start": 1328,
              "end": 1333
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
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
                                            "start": 1468,
                                            "end": 1474
                                          },
                                          "start": 1466,
                                          "end": 1474
                                        },
                                        "start": 1465,
                                        "end": 1474
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 1477,
                                        "end": 1483
                                      },
                                      "start": 1475,
                                      "end": 1483
                                    },
                                    "start": 1464,
                                    "end": 1484
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
                                            "start": 1502,
                                            "end": 1508
                                          },
                                          "start": 1500,
                                          "end": 1508
                                        },
                                        "start": 1498,
                                        "end": 1508
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 1511,
                                        "end": 1517
                                      },
                                      "start": 1509,
                                      "end": 1517
                                    },
                                    "start": 1497,
                                    "end": 1518
                                  }
                                ],
                                "start": 1450,
                                "end": 1528
                              },
                              "start": 1448,
                              "end": 1528
                            },
                            "start": 1447,
                            "end": 1528
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSNumberKeyword",
                              "start": 1531,
                              "end": 1537
                            },
                            "start": 1531,
                            "end": 1539
                          },
                          "start": 1529,
                          "end": 1539
                        },
                        "start": 1446,
                        "end": 1540
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
                                            "start": 1571,
                                            "end": 1578
                                          },
                                          "start": 1569,
                                          "end": 1578
                                        },
                                        "start": 1568,
                                        "end": 1578
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSBooleanKeyword",
                                        "start": 1581,
                                        "end": 1588
                                      },
                                      "start": 1579,
                                      "end": 1588
                                    },
                                    "start": 1567,
                                    "end": 1589
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
                                            "start": 1607,
                                            "end": 1614
                                          },
                                          "start": 1605,
                                          "end": 1614
                                        },
                                        "start": 1603,
                                        "end": 1614
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSBooleanKeyword",
                                        "start": 1617,
                                        "end": 1624
                                      },
                                      "start": 1615,
                                      "end": 1624
                                    },
                                    "start": 1602,
                                    "end": 1625
                                  }
                                ],
                                "start": 1553,
                                "end": 1635
                              },
                              "start": 1551,
                              "end": 1635
                            },
                            "start": 1550,
                            "end": 1635
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSBooleanKeyword",
                              "start": 1638,
                              "end": 1645
                            },
                            "start": 1638,
                            "end": 1647
                          },
                          "start": 1636,
                          "end": 1647
                        },
                        "start": 1549,
                        "end": 1648
                      }
                    ],
                    "start": 1338,
                    "end": 1654
                  },
                  "start": 1336,
                  "end": 1654
                },
                "start": 1334,
                "end": 1654
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1664,
                  "end": 1666
                },
                "typeArguments": null,
                "start": 1657,
                "end": 1666
              },
              "start": 1655,
              "end": 1666
            },
            "body": null,
            "expression": false,
            "start": 1311,
            "end": 1667
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo16",
              "optional": false,
              "typeAnnotation": null,
              "start": 1689,
              "end": 1694
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1699,
                    "end": 1702
                  },
                  "start": 1697,
                  "end": 1702
                },
                "start": 1695,
                "end": 1702
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1705,
                "end": 1708
              },
              "start": 1703,
              "end": 1708
            },
            "body": null,
            "expression": false,
            "start": 1672,
            "end": 1709
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo17",
              "optional": false,
              "typeAnnotation": null,
              "start": 1732,
              "end": 1737
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
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
                                            "start": 1771,
                                            "end": 1772
                                          },
                                          "constraint": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Derived",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1781,
                                              "end": 1788
                                            },
                                            "typeArguments": null,
                                            "start": 1781,
                                            "end": 1788
                                          },
                                          "default": null,
                                          "in": false,
                                          "out": false,
                                          "const": false,
                                          "start": 1771,
                                          "end": 1788
                                        }
                                      ],
                                      "start": 1770,
                                      "end": 1789
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
                                              "start": 1793,
                                              "end": 1794
                                            },
                                            "typeArguments": null,
                                            "start": 1793,
                                            "end": 1794
                                          },
                                          "start": 1791,
                                          "end": 1794
                                        },
                                        "start": 1790,
                                        "end": 1794
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
                                          "start": 1797,
                                          "end": 1798
                                        },
                                        "typeArguments": null,
                                        "start": 1797,
                                        "end": 1798
                                      },
                                      "start": 1795,
                                      "end": 1798
                                    },
                                    "start": 1770,
                                    "end": 1799
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
                                            "start": 1813,
                                            "end": 1814
                                          },
                                          "constraint": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Base",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1823,
                                              "end": 1827
                                            },
                                            "typeArguments": null,
                                            "start": 1823,
                                            "end": 1827
                                          },
                                          "default": null,
                                          "in": false,
                                          "out": false,
                                          "const": false,
                                          "start": 1813,
                                          "end": 1827
                                        }
                                      ],
                                      "start": 1812,
                                      "end": 1828
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
                                              "start": 1832,
                                              "end": 1833
                                            },
                                            "typeArguments": null,
                                            "start": 1832,
                                            "end": 1833
                                          },
                                          "start": 1830,
                                          "end": 1833
                                        },
                                        "start": 1829,
                                        "end": 1833
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
                                          "start": 1836,
                                          "end": 1837
                                        },
                                        "typeArguments": null,
                                        "start": 1836,
                                        "end": 1837
                                      },
                                      "start": 1834,
                                      "end": 1837
                                    },
                                    "start": 1812,
                                    "end": 1838
                                  }
                                ],
                                "start": 1756,
                                "end": 1848
                              },
                              "start": 1754,
                              "end": 1848
                            },
                            "start": 1753,
                            "end": 1848
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 1851,
                              "end": 1854
                            },
                            "start": 1851,
                            "end": 1856
                          },
                          "start": 1849,
                          "end": 1856
                        },
                        "start": 1752,
                        "end": 1857
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
                                            "start": 1885,
                                            "end": 1886
                                          },
                                          "constraint": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Derived2",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1895,
                                              "end": 1903
                                            },
                                            "typeArguments": null,
                                            "start": 1895,
                                            "end": 1903
                                          },
                                          "default": null,
                                          "in": false,
                                          "out": false,
                                          "const": false,
                                          "start": 1885,
                                          "end": 1903
                                        }
                                      ],
                                      "start": 1884,
                                      "end": 1904
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
                                              "start": 1908,
                                              "end": 1909
                                            },
                                            "typeArguments": null,
                                            "start": 1908,
                                            "end": 1909
                                          },
                                          "start": 1906,
                                          "end": 1909
                                        },
                                        "start": 1905,
                                        "end": 1909
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
                                          "start": 1912,
                                          "end": 1913
                                        },
                                        "typeArguments": null,
                                        "start": 1912,
                                        "end": 1913
                                      },
                                      "start": 1910,
                                      "end": 1913
                                    },
                                    "start": 1884,
                                    "end": 1914
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
                                            "start": 1928,
                                            "end": 1929
                                          },
                                          "constraint": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Base",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1938,
                                              "end": 1942
                                            },
                                            "typeArguments": null,
                                            "start": 1938,
                                            "end": 1942
                                          },
                                          "default": null,
                                          "in": false,
                                          "out": false,
                                          "const": false,
                                          "start": 1928,
                                          "end": 1942
                                        }
                                      ],
                                      "start": 1927,
                                      "end": 1943
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
                                              "start": 1947,
                                              "end": 1948
                                            },
                                            "typeArguments": null,
                                            "start": 1947,
                                            "end": 1948
                                          },
                                          "start": 1945,
                                          "end": 1948
                                        },
                                        "start": 1944,
                                        "end": 1948
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
                                          "start": 1951,
                                          "end": 1952
                                        },
                                        "typeArguments": null,
                                        "start": 1951,
                                        "end": 1952
                                      },
                                      "start": 1949,
                                      "end": 1952
                                    },
                                    "start": 1927,
                                    "end": 1953
                                  }
                                ],
                                "start": 1870,
                                "end": 1963
                              },
                              "start": 1868,
                              "end": 1963
                            },
                            "start": 1867,
                            "end": 1963
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 1966,
                              "end": 1969
                            },
                            "start": 1966,
                            "end": 1971
                          },
                          "start": 1964,
                          "end": 1971
                        },
                        "start": 1866,
                        "end": 1972
                      }
                    ],
                    "start": 1742,
                    "end": 1978
                  },
                  "start": 1740,
                  "end": 1978
                },
                "start": 1738,
                "end": 1978
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1988,
                  "end": 1990
                },
                "typeArguments": null,
                "start": 1981,
                "end": 1990
              },
              "start": 1979,
              "end": 1990
            },
            "body": null,
            "expression": false,
            "start": 1715,
            "end": 1991
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo17",
              "optional": false,
              "typeAnnotation": null,
              "start": 2013,
              "end": 2018
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2023,
                    "end": 2026
                  },
                  "start": 2021,
                  "end": 2026
                },
                "start": 2019,
                "end": 2026
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2029,
                "end": 2032
              },
              "start": 2027,
              "end": 2032
            },
            "body": null,
            "expression": false,
            "start": 1996,
            "end": 2033
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
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2043,
                  "end": 2045
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2048,
                    "end": 2052
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
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
                              "start": 2054,
                              "end": 2055
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2054,
                            "end": 2055
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2057,
                              "end": 2058
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2057,
                            "end": 2058
                          }
                        ],
                        "start": 2053,
                        "end": 2059
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
                                "start": 2063,
                                "end": 2064
                              },
                              "typeArguments": null,
                              "start": 2063,
                              "end": 2064
                            },
                            "start": 2061,
                            "end": 2064
                          },
                          "start": 2060,
                          "end": 2064
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "TSTypeAssertion",
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
                              "start": 2070,
                              "end": 2071
                            },
                            "typeArguments": null,
                            "start": 2070,
                            "end": 2071
                          },
                          "start": 2070,
                          "end": 2073
                        },
                        "expression": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 2074,
                          "end": 2078
                        },
                        "start": 2069,
                        "end": 2078
                      },
                      "id": null,
                      "generator": false,
                      "start": 2053,
                      "end": 2078
                    }
                  ],
                  "optional": false,
                  "start": 2048,
                  "end": 2079
                },
                "definite": false,
                "start": 2043,
                "end": 2079
              }
            ],
            "declare": false,
            "start": 2039,
            "end": 2080
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
                  "name": "r1a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2096,
                  "end": 2099
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
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
                              "start": 2107,
                              "end": 2113
                            },
                            "start": 2105,
                            "end": 2113
                          },
                          "start": 2104,
                          "end": 2113
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": "",
                            "raw": "''",
                            "start": 2119,
                            "end": 2121
                          }
                        ],
                        "start": 2118,
                        "end": 2122
                      },
                      "id": null,
                      "generator": false,
                      "start": 2103,
                      "end": 2122
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
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
                              "start": 2125,
                              "end": 2126
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2125,
                            "end": 2126
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2128,
                              "end": 2129
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2128,
                            "end": 2129
                          }
                        ],
                        "start": 2124,
                        "end": 2130
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
                                "start": 2134,
                                "end": 2135
                              },
                              "typeArguments": null,
                              "start": 2134,
                              "end": 2135
                            },
                            "start": 2132,
                            "end": 2135
                          },
                          "start": 2131,
                          "end": 2135
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "TSTypeAssertion",
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
                              "start": 2141,
                              "end": 2142
                            },
                            "typeArguments": null,
                            "start": 2141,
                            "end": 2142
                          },
                          "start": 2141,
                          "end": 2144
                        },
                        "expression": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 2145,
                          "end": 2149
                        },
                        "start": 2140,
                        "end": 2149
                      },
                      "id": null,
                      "generator": false,
                      "start": 2124,
                      "end": 2149
                    }
                  ],
                  "start": 2102,
                  "end": 2150
                },
                "definite": false,
                "start": 2096,
                "end": 2150
              }
            ],
            "declare": false,
            "start": 2092,
            "end": 2151
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
                  "name": "r1b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2160,
                  "end": 2163
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
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
                              "start": 2168,
                              "end": 2169
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2168,
                            "end": 2169
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2171,
                              "end": 2172
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2171,
                            "end": 2172
                          }
                        ],
                        "start": 2167,
                        "end": 2173
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
                                "start": 2177,
                                "end": 2178
                              },
                              "typeArguments": null,
                              "start": 2177,
                              "end": 2178
                            },
                            "start": 2175,
                            "end": 2178
                          },
                          "start": 2174,
                          "end": 2178
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "TSTypeAssertion",
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
                              "start": 2184,
                              "end": 2185
                            },
                            "typeArguments": null,
                            "start": 2184,
                            "end": 2185
                          },
                          "start": 2184,
                          "end": 2187
                        },
                        "expression": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 2188,
                          "end": 2192
                        },
                        "start": 2183,
                        "end": 2192
                      },
                      "id": null,
                      "generator": false,
                      "start": 2167,
                      "end": 2192
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
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
                              "start": 2198,
                              "end": 2204
                            },
                            "start": 2196,
                            "end": 2204
                          },
                          "start": 2195,
                          "end": 2204
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": "",
                            "raw": "''",
                            "start": 2210,
                            "end": 2212
                          }
                        ],
                        "start": 2209,
                        "end": 2213
                      },
                      "id": null,
                      "generator": false,
                      "start": 2194,
                      "end": 2213
                    }
                  ],
                  "start": 2166,
                  "end": 2214
                },
                "definite": false,
                "start": 2160,
                "end": 2214
              }
            ],
            "declare": false,
            "start": 2156,
            "end": 2215
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
                  "name": "r2arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2225,
                  "end": 2230
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
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
                          "start": 2234,
                          "end": 2235
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Base",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2244,
                            "end": 2248
                          },
                          "typeArguments": null,
                          "start": 2244,
                          "end": 2248
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 2234,
                        "end": 2248
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2250,
                          "end": 2251
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2260,
                            "end": 2267
                          },
                          "typeArguments": null,
                          "start": 2260,
                          "end": 2267
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 2250,
                        "end": 2267
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2269,
                          "end": 2270
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Derived2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2279,
                            "end": 2287
                          },
                          "typeArguments": null,
                          "start": 2279,
                          "end": 2287
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 2269,
                        "end": 2287
                      }
                    ],
                    "start": 2233,
                    "end": 2288
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
                                    "start": 2298,
                                    "end": 2299
                                  },
                                  "typeArguments": null,
                                  "start": 2298,
                                  "end": 2299
                                },
                                "start": 2296,
                                "end": 2299
                              },
                              "start": 2293,
                              "end": 2299
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
                                "start": 2304,
                                "end": 2305
                              },
                              "typeArguments": null,
                              "start": 2304,
                              "end": 2305
                            },
                            "start": 2301,
                            "end": 2305
                          },
                          "start": 2292,
                          "end": 2305
                        },
                        "start": 2290,
                        "end": 2305
                      },
                      "start": 2289,
                      "end": 2305
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
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
                              "start": 2314,
                              "end": 2315
                            },
                            "typeArguments": null,
                            "start": 2314,
                            "end": 2315
                          },
                          "start": 2312,
                          "end": 2315
                        },
                        "start": 2311,
                        "end": 2315
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "TSTypeAssertion",
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
                      "expression": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 2323,
                        "end": 2327
                      },
                      "start": 2320,
                      "end": 2327
                    },
                    "id": null,
                    "generator": false,
                    "start": 2310,
                    "end": 2327
                  },
                  "id": null,
                  "generator": false,
                  "start": 2233,
                  "end": 2327
                },
                "definite": false,
                "start": 2225,
                "end": 2327
              }
            ],
            "declare": false,
            "start": 2221,
            "end": 2328
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
                  "name": "r2arg2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2337,
                  "end": 2343
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
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
                                    "start": 2356,
                                    "end": 2360
                                  },
                                  "typeArguments": null,
                                  "start": 2356,
                                  "end": 2360
                                },
                                "start": 2354,
                                "end": 2360
                              },
                              "start": 2351,
                              "end": 2360
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
                                "start": 2365,
                                "end": 2372
                              },
                              "typeArguments": null,
                              "start": 2365,
                              "end": 2372
                            },
                            "start": 2362,
                            "end": 2372
                          },
                          "start": 2350,
                          "end": 2372
                        },
                        "start": 2348,
                        "end": 2372
                      },
                      "start": 2347,
                      "end": 2372
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
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
                              "start": 2381,
                              "end": 2385
                            },
                            "typeArguments": null,
                            "start": 2381,
                            "end": 2385
                          },
                          "start": 2379,
                          "end": 2385
                        },
                        "start": 2378,
                        "end": 2385
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "TSTypeAssertion",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2391,
                          "end": 2399
                        },
                        "typeArguments": null,
                        "start": 2391,
                        "end": 2399
                      },
                      "expression": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 2400,
                        "end": 2404
                      },
                      "start": 2390,
                      "end": 2404
                    },
                    "id": null,
                    "generator": false,
                    "start": 2377,
                    "end": 2404
                  },
                  "id": null,
                  "generator": false,
                  "start": 2346,
                  "end": 2404
                },
                "definite": false,
                "start": 2337,
                "end": 2404
              }
            ],
            "declare": false,
            "start": 2333,
            "end": 2405
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
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2414,
                  "end": 2416
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2419,
                    "end": 2423
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r2arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2424,
                      "end": 2429
                    }
                  ],
                  "optional": false,
                  "start": 2419,
                  "end": 2430
                },
                "definite": false,
                "start": 2414,
                "end": 2430
              }
            ],
            "declare": false,
            "start": 2410,
            "end": 2431
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
                  "name": "r2a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2447,
                  "end": 2450
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r2arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2454,
                      "end": 2460
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r2arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2462,
                      "end": 2467
                    }
                  ],
                  "start": 2453,
                  "end": 2468
                },
                "definite": false,
                "start": 2447,
                "end": 2468
              }
            ],
            "declare": false,
            "start": 2443,
            "end": 2469
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
                  "name": "r2b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2478,
                  "end": 2481
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r2arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2485,
                      "end": 2490
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r2arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2492,
                      "end": 2498
                    }
                  ],
                  "start": 2484,
                  "end": 2499
                },
                "definite": false,
                "start": 2478,
                "end": 2499
              }
            ],
            "declare": false,
            "start": 2474,
            "end": 2500
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
                  "name": "r3arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2510,
                  "end": 2515
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
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
                          "start": 2519,
                          "end": 2520
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Base",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2529,
                            "end": 2533
                          },
                          "typeArguments": null,
                          "start": 2529,
                          "end": 2533
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 2519,
                        "end": 2533
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2535,
                          "end": 2536
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2545,
                            "end": 2552
                          },
                          "typeArguments": null,
                          "start": 2545,
                          "end": 2552
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 2535,
                        "end": 2552
                      }
                    ],
                    "start": 2518,
                    "end": 2553
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
                                    "start": 2563,
                                    "end": 2564
                                  },
                                  "typeArguments": null,
                                  "start": 2563,
                                  "end": 2564
                                },
                                "start": 2561,
                                "end": 2564
                              },
                              "start": 2558,
                              "end": 2564
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
                                "start": 2569,
                                "end": 2570
                              },
                              "typeArguments": null,
                              "start": 2569,
                              "end": 2570
                            },
                            "start": 2566,
                            "end": 2570
                          },
                          "start": 2557,
                          "end": 2570
                        },
                        "start": 2555,
                        "end": 2570
                      },
                      "start": 2554,
                      "end": 2570
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
                                        "start": 2584,
                                        "end": 2587
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSNumberKeyword",
                                          "start": 2589,
                                          "end": 2595
                                        },
                                        "start": 2587,
                                        "end": 2595
                                      },
                                      "accessibility": null,
                                      "static": false,
                                      "start": 2584,
                                      "end": 2596
                                    }
                                  ],
                                  "start": 2582,
                                  "end": 2598
                                },
                                "start": 2580,
                                "end": 2598
                              },
                              "start": 2576,
                              "end": 2598
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
                                "start": 2603,
                                "end": 2604
                              },
                              "typeArguments": null,
                              "start": 2603,
                              "end": 2604
                            },
                            "start": 2600,
                            "end": 2604
                          },
                          "start": 2575,
                          "end": 2604
                        },
                        "start": 2573,
                        "end": 2604
                      },
                      "start": 2572,
                      "end": 2604
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
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
                              "start": 2613,
                              "end": 2614
                            },
                            "typeArguments": null,
                            "start": 2613,
                            "end": 2614
                          },
                          "start": 2611,
                          "end": 2614
                        },
                        "start": 2610,
                        "end": 2614
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "TSTypeAssertion",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2620,
                          "end": 2621
                        },
                        "typeArguments": null,
                        "start": 2620,
                        "end": 2621
                      },
                      "expression": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 2622,
                        "end": 2626
                      },
                      "start": 2619,
                      "end": 2626
                    },
                    "id": null,
                    "generator": false,
                    "start": 2609,
                    "end": 2626
                  },
                  "id": null,
                  "generator": false,
                  "start": 2518,
                  "end": 2626
                },
                "definite": false,
                "start": 2510,
                "end": 2626
              }
            ],
            "declare": false,
            "start": 2506,
            "end": 2627
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
                  "name": "r3arg2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2636,
                  "end": 2642
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
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
                                    "start": 2655,
                                    "end": 2659
                                  },
                                  "typeArguments": null,
                                  "start": 2655,
                                  "end": 2659
                                },
                                "start": 2653,
                                "end": 2659
                              },
                              "start": 2650,
                              "end": 2659
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
                                "start": 2664,
                                "end": 2671
                              },
                              "typeArguments": null,
                              "start": 2664,
                              "end": 2671
                            },
                            "start": 2661,
                            "end": 2671
                          },
                          "start": 2649,
                          "end": 2671
                        },
                        "start": 2647,
                        "end": 2671
                      },
                      "start": 2646,
                      "end": 2671
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
                                    "start": 2683,
                                    "end": 2687
                                  },
                                  "typeArguments": null,
                                  "start": 2683,
                                  "end": 2687
                                },
                                "start": 2681,
                                "end": 2687
                              },
                              "start": 2677,
                              "end": 2687
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
                                "start": 2692,
                                "end": 2699
                              },
                              "typeArguments": null,
                              "start": 2692,
                              "end": 2699
                            },
                            "start": 2689,
                            "end": 2699
                          },
                          "start": 2676,
                          "end": 2699
                        },
                        "start": 2674,
                        "end": 2699
                      },
                      "start": 2673,
                      "end": 2699
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
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
                              "start": 2708,
                              "end": 2712
                            },
                            "typeArguments": null,
                            "start": 2708,
                            "end": 2712
                          },
                          "start": 2706,
                          "end": 2712
                        },
                        "start": 2705,
                        "end": 2712
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "TSTypeAssertion",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2718,
                          "end": 2725
                        },
                        "typeArguments": null,
                        "start": 2718,
                        "end": 2725
                      },
                      "expression": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 2726,
                        "end": 2730
                      },
                      "start": 2717,
                      "end": 2730
                    },
                    "id": null,
                    "generator": false,
                    "start": 2704,
                    "end": 2730
                  },
                  "id": null,
                  "generator": false,
                  "start": 2645,
                  "end": 2730
                },
                "definite": false,
                "start": 2636,
                "end": 2730
              }
            ],
            "declare": false,
            "start": 2632,
            "end": 2731
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
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2740,
                  "end": 2742
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo8",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2745,
                    "end": 2749
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r3arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2750,
                      "end": 2755
                    }
                  ],
                  "optional": false,
                  "start": 2745,
                  "end": 2756
                },
                "definite": false,
                "start": 2740,
                "end": 2756
              }
            ],
            "declare": false,
            "start": 2736,
            "end": 2757
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
                  "name": "r3a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2773,
                  "end": 2776
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r3arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2780,
                      "end": 2786
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r3arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2788,
                      "end": 2793
                    }
                  ],
                  "start": 2779,
                  "end": 2794
                },
                "definite": false,
                "start": 2773,
                "end": 2794
              }
            ],
            "declare": false,
            "start": 2769,
            "end": 2795
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
                  "name": "r3b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2804,
                  "end": 2807
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r3arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2811,
                      "end": 2816
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r3arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2818,
                      "end": 2824
                    }
                  ],
                  "start": 2810,
                  "end": 2825
                },
                "definite": false,
                "start": 2804,
                "end": 2825
              }
            ],
            "declare": false,
            "start": 2800,
            "end": 2826
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
                  "name": "r4arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2836,
                  "end": 2841
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
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
                          "start": 2845,
                          "end": 2846
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2855,
                            "end": 2862
                          },
                          "typeArguments": null,
                          "start": 2855,
                          "end": 2862
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 2845,
                        "end": 2862
                      }
                    ],
                    "start": 2844,
                    "end": 2863
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
                        "start": 2867,
                        "end": 2868
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
                              "start": 2870,
                              "end": 2871
                            },
                            "typeArguments": null,
                            "start": 2870,
                            "end": 2871
                          },
                          "start": 2870,
                          "end": 2873
                        },
                        "start": 2868,
                        "end": 2873
                      },
                      "value": null,
                      "start": 2864,
                      "end": 2873
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2879,
                        "end": 2880
                      },
                      "typeArguments": null,
                      "start": 2879,
                      "end": 2880
                    },
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 2881,
                      "end": 2885
                    },
                    "start": 2878,
                    "end": 2885
                  },
                  "id": null,
                  "generator": false,
                  "start": 2844,
                  "end": 2885
                },
                "definite": false,
                "start": 2836,
                "end": 2885
              }
            ],
            "declare": false,
            "start": 2832,
            "end": 2886
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
                  "name": "r4arg2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2895,
                  "end": 2901
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
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
                        "start": 2908,
                        "end": 2909
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
                              "start": 2911,
                              "end": 2915
                            },
                            "typeArguments": null,
                            "start": 2911,
                            "end": 2915
                          },
                          "start": 2911,
                          "end": 2917
                        },
                        "start": 2909,
                        "end": 2917
                      },
                      "value": null,
                      "start": 2905,
                      "end": 2917
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2923,
                        "end": 2927
                      },
                      "typeArguments": null,
                      "start": 2923,
                      "end": 2927
                    },
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 2928,
                      "end": 2932
                    },
                    "start": 2922,
                    "end": 2932
                  },
                  "id": null,
                  "generator": false,
                  "start": 2904,
                  "end": 2932
                },
                "definite": false,
                "start": 2895,
                "end": 2932
              }
            ],
            "declare": false,
            "start": 2891,
            "end": 2933
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
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2942,
                  "end": 2944
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo10",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2947,
                    "end": 2952
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r4arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2953,
                      "end": 2958
                    }
                  ],
                  "optional": false,
                  "start": 2947,
                  "end": 2959
                },
                "definite": false,
                "start": 2942,
                "end": 2959
              }
            ],
            "declare": false,
            "start": 2938,
            "end": 2960
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
                  "name": "r4a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2976,
                  "end": 2979
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r4arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2983,
                      "end": 2989
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r4arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2991,
                      "end": 2996
                    }
                  ],
                  "start": 2982,
                  "end": 2997
                },
                "definite": false,
                "start": 2976,
                "end": 2997
              }
            ],
            "declare": false,
            "start": 2972,
            "end": 2998
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
                  "name": "r4b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3007,
                  "end": 3010
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r4arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3014,
                      "end": 3019
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r4arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3021,
                      "end": 3027
                    }
                  ],
                  "start": 3013,
                  "end": 3028
                },
                "definite": false,
                "start": 3007,
                "end": 3028
              }
            ],
            "declare": false,
            "start": 3003,
            "end": 3029
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
                  "name": "r5arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3039,
                  "end": 3044
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
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
                          "start": 3048,
                          "end": 3049
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3058,
                            "end": 3065
                          },
                          "typeArguments": null,
                          "start": 3058,
                          "end": 3065
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 3048,
                        "end": 3065
                      }
                    ],
                    "start": 3047,
                    "end": 3066
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
                            "start": 3070,
                            "end": 3071
                          },
                          "typeArguments": null,
                          "start": 3070,
                          "end": 3071
                        },
                        "start": 3068,
                        "end": 3071
                      },
                      "start": 3067,
                      "end": 3071
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
                            "start": 3076,
                            "end": 3077
                          },
                          "typeArguments": null,
                          "start": 3076,
                          "end": 3077
                        },
                        "start": 3074,
                        "end": 3077
                      },
                      "start": 3073,
                      "end": 3077
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3083,
                        "end": 3084
                      },
                      "typeArguments": null,
                      "start": 3083,
                      "end": 3084
                    },
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 3085,
                      "end": 3089
                    },
                    "start": 3082,
                    "end": 3089
                  },
                  "id": null,
                  "generator": false,
                  "start": 3047,
                  "end": 3089
                },
                "definite": false,
                "start": 3039,
                "end": 3089
              }
            ],
            "declare": false,
            "start": 3035,
            "end": 3090
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
                  "name": "r5arg2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3099,
                  "end": 3105
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
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
                                "start": 3114,
                                "end": 3117
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 3119,
                                  "end": 3125
                                },
                                "start": 3117,
                                "end": 3125
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3114,
                              "end": 3125
                            }
                          ],
                          "start": 3112,
                          "end": 3127
                        },
                        "start": 3110,
                        "end": 3127
                      },
                      "start": 3109,
                      "end": 3127
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
                                "start": 3134,
                                "end": 3137
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 3139,
                                  "end": 3145
                                },
                                "start": 3137,
                                "end": 3145
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3134,
                              "end": 3146
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
                                "start": 3147,
                                "end": 3150
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 3152,
                                  "end": 3158
                                },
                                "start": 3150,
                                "end": 3158
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3147,
                              "end": 3158
                            }
                          ],
                          "start": 3132,
                          "end": 3160
                        },
                        "start": 3130,
                        "end": 3160
                      },
                      "start": 3129,
                      "end": 3160
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3166,
                        "end": 3170
                      },
                      "typeArguments": null,
                      "start": 3166,
                      "end": 3170
                    },
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 3171,
                      "end": 3175
                    },
                    "start": 3165,
                    "end": 3175
                  },
                  "id": null,
                  "generator": false,
                  "start": 3108,
                  "end": 3175
                },
                "definite": false,
                "start": 3099,
                "end": 3175
              }
            ],
            "declare": false,
            "start": 3095,
            "end": 3176
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
                  "name": "r5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3185,
                  "end": 3187
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo11",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3190,
                    "end": 3195
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r5arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3196,
                      "end": 3201
                    }
                  ],
                  "optional": false,
                  "start": 3190,
                  "end": 3202
                },
                "definite": false,
                "start": 3185,
                "end": 3202
              }
            ],
            "declare": false,
            "start": 3181,
            "end": 3203
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
                  "name": "r5a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3219,
                  "end": 3222
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r5arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3226,
                      "end": 3232
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r5arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3234,
                      "end": 3239
                    }
                  ],
                  "start": 3225,
                  "end": 3240
                },
                "definite": false,
                "start": 3219,
                "end": 3240
              }
            ],
            "declare": false,
            "start": 3215,
            "end": 3241
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
                  "name": "r5b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3250,
                  "end": 3253
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r5arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3257,
                      "end": 3262
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r5arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3264,
                      "end": 3270
                    }
                  ],
                  "start": 3256,
                  "end": 3271
                },
                "definite": false,
                "start": 3250,
                "end": 3271
              }
            ],
            "declare": false,
            "start": 3246,
            "end": 3272
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
                  "name": "r6arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3282,
                  "end": 3287
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
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
                            "start": 3294,
                            "end": 3299
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
                                  "start": 3300,
                                  "end": 3304
                                },
                                "typeArguments": null,
                                "start": 3300,
                                "end": 3304
                              }
                            ],
                            "start": 3299,
                            "end": 3305
                          },
                          "start": 3294,
                          "end": 3305
                        },
                        "start": 3292,
                        "end": 3305
                      },
                      "start": 3291,
                      "end": 3305
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
                            "start": 3310,
                            "end": 3315
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
                                  "start": 3316,
                                  "end": 3324
                                },
                                "typeArguments": null,
                                "start": 3316,
                                "end": 3324
                              }
                            ],
                            "start": 3315,
                            "end": 3325
                          },
                          "start": 3310,
                          "end": 3325
                        },
                        "start": 3308,
                        "end": 3325
                      },
                      "start": 3307,
                      "end": 3325
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3331,
                        "end": 3336
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
                              "start": 3337,
                              "end": 3344
                            },
                            "typeArguments": null,
                            "start": 3337,
                            "end": 3344
                          }
                        ],
                        "start": 3336,
                        "end": 3345
                      },
                      "start": 3331,
                      "end": 3345
                    },
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 3346,
                      "end": 3350
                    },
                    "start": 3330,
                    "end": 3350
                  },
                  "id": null,
                  "generator": false,
                  "start": 3290,
                  "end": 3350
                },
                "definite": false,
                "start": 3282,
                "end": 3350
              }
            ],
            "declare": false,
            "start": 3278,
            "end": 3351
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
                  "name": "r6arg2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3360,
                  "end": 3366
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
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
                          "start": 3370,
                          "end": 3371
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Array",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3380,
                            "end": 3385
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
                                  "start": 3386,
                                  "end": 3394
                                },
                                "typeArguments": null,
                                "start": 3386,
                                "end": 3394
                              }
                            ],
                            "start": 3385,
                            "end": 3395
                          },
                          "start": 3380,
                          "end": 3395
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 3370,
                        "end": 3395
                      }
                    ],
                    "start": 3369,
                    "end": 3396
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
                            "start": 3400,
                            "end": 3405
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
                                  "start": 3406,
                                  "end": 3410
                                },
                                "typeArguments": null,
                                "start": 3406,
                                "end": 3410
                              }
                            ],
                            "start": 3405,
                            "end": 3411
                          },
                          "start": 3400,
                          "end": 3411
                        },
                        "start": 3398,
                        "end": 3411
                      },
                      "start": 3397,
                      "end": 3411
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
                            "start": 3416,
                            "end": 3421
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
                                  "start": 3422,
                                  "end": 3426
                                },
                                "typeArguments": null,
                                "start": 3422,
                                "end": 3426
                              }
                            ],
                            "start": 3421,
                            "end": 3427
                          },
                          "start": 3416,
                          "end": 3427
                        },
                        "start": 3414,
                        "end": 3427
                      },
                      "start": 3413,
                      "end": 3427
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "TSTypeAssertion",
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
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 3435,
                      "end": 3439
                    },
                    "start": 3432,
                    "end": 3439
                  },
                  "id": null,
                  "generator": false,
                  "start": 3369,
                  "end": 3439
                },
                "definite": false,
                "start": 3360,
                "end": 3439
              }
            ],
            "declare": false,
            "start": 3356,
            "end": 3440
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
                  "name": "r6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3449,
                  "end": 3451
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo12",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3454,
                    "end": 3459
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r6arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3460,
                      "end": 3465
                    }
                  ],
                  "optional": false,
                  "start": 3454,
                  "end": 3466
                },
                "definite": false,
                "start": 3449,
                "end": 3466
              }
            ],
            "declare": false,
            "start": 3445,
            "end": 3467
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
                  "name": "r6a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3534,
                  "end": 3537
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r6arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3541,
                      "end": 3547
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r6arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3549,
                      "end": 3554
                    }
                  ],
                  "start": 3540,
                  "end": 3555
                },
                "definite": false,
                "start": 3534,
                "end": 3555
              }
            ],
            "declare": false,
            "start": 3530,
            "end": 3556
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
                  "name": "r6b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3565,
                  "end": 3568
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r6arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3572,
                      "end": 3577
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r6arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3579,
                      "end": 3585
                    }
                  ],
                  "start": 3571,
                  "end": 3586
                },
                "definite": false,
                "start": 3565,
                "end": 3586
              }
            ],
            "declare": false,
            "start": 3561,
            "end": 3587
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
                  "name": "r7arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3597,
                  "end": 3602
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
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
                          "start": 3606,
                          "end": 3607
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 3606,
                        "end": 3607
                      }
                    ],
                    "start": 3605,
                    "end": 3608
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
                                "start": 3614,
                                "end": 3615
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
                                    "start": 3617,
                                    "end": 3618
                                  },
                                  "typeArguments": null,
                                  "start": 3617,
                                  "end": 3618
                                },
                                "start": 3615,
                                "end": 3618
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3614,
                              "end": 3619
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
                                "start": 3620,
                                "end": 3621
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
                                    "start": 3623,
                                    "end": 3624
                                  },
                                  "typeArguments": null,
                                  "start": 3623,
                                  "end": 3624
                                },
                                "start": 3621,
                                "end": 3624
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3620,
                              "end": 3624
                            }
                          ],
                          "start": 3612,
                          "end": 3626
                        },
                        "start": 3610,
                        "end": 3626
                      },
                      "start": 3609,
                      "end": 3626
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3632,
                        "end": 3633
                      },
                      "typeArguments": null,
                      "start": 3632,
                      "end": 3633
                    },
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 3634,
                      "end": 3638
                    },
                    "start": 3631,
                    "end": 3638
                  },
                  "id": null,
                  "generator": false,
                  "start": 3605,
                  "end": 3638
                },
                "definite": false,
                "start": 3597,
                "end": 3638
              }
            ],
            "declare": false,
            "start": 3593,
            "end": 3639
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
                  "name": "r7arg2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3648,
                  "end": 3654
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
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
                                "start": 3663,
                                "end": 3664
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 3666,
                                  "end": 3672
                                },
                                "start": 3664,
                                "end": 3672
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3663,
                              "end": 3673
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
                                "start": 3674,
                                "end": 3675
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 3677,
                                  "end": 3683
                                },
                                "start": 3675,
                                "end": 3683
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3674,
                              "end": 3683
                            }
                          ],
                          "start": 3661,
                          "end": 3685
                        },
                        "start": 3659,
                        "end": 3685
                      },
                      "start": 3658,
                      "end": 3685
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 3690,
                    "end": 3691
                  },
                  "id": null,
                  "generator": false,
                  "start": 3657,
                  "end": 3691
                },
                "definite": false,
                "start": 3648,
                "end": 3691
              }
            ],
            "declare": false,
            "start": 3644,
            "end": 3692
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
                  "name": "r7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3701,
                  "end": 3703
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo15",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3706,
                    "end": 3711
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3712,
                      "end": 3717
                    }
                  ],
                  "optional": false,
                  "start": 3706,
                  "end": 3718
                },
                "definite": false,
                "start": 3701,
                "end": 3718
              }
            ],
            "declare": false,
            "start": 3697,
            "end": 3719
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
                  "name": "r7a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3735,
                  "end": 3738
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3742,
                      "end": 3748
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3750,
                      "end": 3755
                    }
                  ],
                  "start": 3741,
                  "end": 3756
                },
                "definite": false,
                "start": 3735,
                "end": 3756
              }
            ],
            "declare": false,
            "start": 3731,
            "end": 3757
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
                  "name": "r7b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3766,
                  "end": 3769
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3773,
                      "end": 3778
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3780,
                      "end": 3786
                    }
                  ],
                  "start": 3772,
                  "end": 3787
                },
                "definite": false,
                "start": 3766,
                "end": 3787
              }
            ],
            "declare": false,
            "start": 3762,
            "end": 3788
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
                  "name": "r7arg3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3798,
                  "end": 3804
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
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
                          "start": 3808,
                          "end": 3809
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Base",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3818,
                            "end": 3822
                          },
                          "typeArguments": null,
                          "start": 3818,
                          "end": 3822
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 3808,
                        "end": 3822
                      }
                    ],
                    "start": 3807,
                    "end": 3823
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
                                "start": 3829,
                                "end": 3830
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
                                    "start": 3832,
                                    "end": 3833
                                  },
                                  "typeArguments": null,
                                  "start": 3832,
                                  "end": 3833
                                },
                                "start": 3830,
                                "end": 3833
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3829,
                              "end": 3834
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
                                "start": 3835,
                                "end": 3836
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
                                    "start": 3838,
                                    "end": 3839
                                  },
                                  "typeArguments": null,
                                  "start": 3838,
                                  "end": 3839
                                },
                                "start": 3836,
                                "end": 3839
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3835,
                              "end": 3839
                            }
                          ],
                          "start": 3827,
                          "end": 3841
                        },
                        "start": 3825,
                        "end": 3841
                      },
                      "start": 3824,
                      "end": 3841
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 3846,
                    "end": 3847
                  },
                  "id": null,
                  "generator": false,
                  "start": 3807,
                  "end": 3847
                },
                "definite": false,
                "start": 3798,
                "end": 3847
              }
            ],
            "declare": false,
            "start": 3794,
            "end": 3848
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
                  "name": "r7c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3857,
                  "end": 3860
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo15",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3863,
                    "end": 3868
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3869,
                      "end": 3875
                    }
                  ],
                  "optional": false,
                  "start": 3863,
                  "end": 3876
                },
                "definite": false,
                "start": 3857,
                "end": 3876
              }
            ],
            "declare": false,
            "start": 3853,
            "end": 3877
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
                  "name": "r7d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3939,
                  "end": 3942
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3946,
                      "end": 3952
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3954,
                      "end": 3960
                    }
                  ],
                  "start": 3945,
                  "end": 3961
                },
                "definite": false,
                "start": 3939,
                "end": 3961
              }
            ],
            "declare": false,
            "start": 3935,
            "end": 3962
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
                  "name": "r7e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3971,
                  "end": 3974
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3978,
                      "end": 3984
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3986,
                      "end": 3992
                    }
                  ],
                  "start": 3977,
                  "end": 3993
                },
                "definite": false,
                "start": 3971,
                "end": 3993
              }
            ],
            "declare": false,
            "start": 3967,
            "end": 3994
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
                  "name": "r8arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4004,
                  "end": 4009
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
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
                          "start": 4013,
                          "end": 4014
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 4013,
                        "end": 4014
                      }
                    ],
                    "start": 4012,
                    "end": 4015
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
                                    "start": 4023,
                                    "end": 4024
                                  },
                                  "typeArguments": null,
                                  "start": 4023,
                                  "end": 4024
                                },
                                "start": 4021,
                                "end": 4024
                              },
                              "start": 4020,
                              "end": 4024
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
                                "start": 4029,
                                "end": 4030
                              },
                              "typeArguments": null,
                              "start": 4029,
                              "end": 4030
                            },
                            "start": 4026,
                            "end": 4030
                          },
                          "start": 4019,
                          "end": 4030
                        },
                        "start": 4017,
                        "end": 4030
                      },
                      "start": 4016,
                      "end": 4030
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "TSTypeAssertion",
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
                          "start": 4036,
                          "end": 4037
                        },
                        "typeArguments": null,
                        "start": 4036,
                        "end": 4037
                      },
                      "start": 4036,
                      "end": 4039
                    },
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 4040,
                      "end": 4044
                    },
                    "start": 4035,
                    "end": 4044
                  },
                  "id": null,
                  "generator": false,
                  "start": 4012,
                  "end": 4044
                },
                "definite": false,
                "start": 4004,
                "end": 4044
              }
            ],
            "declare": false,
            "start": 4000,
            "end": 4045
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
                  "name": "r8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4054,
                  "end": 4056
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo16",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4059,
                    "end": 4064
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r8arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4065,
                      "end": 4070
                    }
                  ],
                  "optional": false,
                  "start": 4059,
                  "end": 4071
                },
                "definite": false,
                "start": 4054,
                "end": 4071
              }
            ],
            "declare": false,
            "start": 4050,
            "end": 4072
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
                  "name": "r9arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4089,
                  "end": 4094
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
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
                          "start": 4098,
                          "end": 4099
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 4098,
                        "end": 4099
                      }
                    ],
                    "start": 4097,
                    "end": 4100
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
                                    "start": 4108,
                                    "end": 4109
                                  },
                                  "typeArguments": null,
                                  "start": 4108,
                                  "end": 4109
                                },
                                "start": 4106,
                                "end": 4109
                              },
                              "start": 4105,
                              "end": 4109
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
                                "start": 4114,
                                "end": 4115
                              },
                              "typeArguments": null,
                              "start": 4114,
                              "end": 4115
                            },
                            "start": 4111,
                            "end": 4115
                          },
                          "start": 4104,
                          "end": 4115
                        },
                        "start": 4102,
                        "end": 4115
                      },
                      "start": 4101,
                      "end": 4115
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 4121,
                        "end": 4124
                      },
                      "start": 4121,
                      "end": 4126
                    },
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 4127,
                      "end": 4131
                    },
                    "start": 4120,
                    "end": 4131
                  },
                  "id": null,
                  "generator": false,
                  "start": 4097,
                  "end": 4131
                },
                "definite": false,
                "start": 4089,
                "end": 4131
              }
            ],
            "declare": false,
            "start": 4085,
            "end": 4132
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
                  "name": "r9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4141,
                  "end": 4143
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo17",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4146,
                    "end": 4151
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r9arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4152,
                      "end": 4157
                    }
                  ],
                  "optional": false,
                  "start": 4146,
                  "end": 4158
                },
                "definite": false,
                "start": 4141,
                "end": 4158
              }
            ],
            "declare": false,
            "start": 4137,
            "end": 4159
          }
        ],
        "start": 178,
        "end": 4315
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 161,
      "end": 4315
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WithGenericSignaturesInBaseType",
        "optional": false,
        "typeAnnotation": null,
        "start": 4327,
        "end": 4358
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4382,
              "end": 4386
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
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
                            "start": 4392,
                            "end": 4393
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 4392,
                          "end": 4393
                        }
                      ],
                      "start": 4391,
                      "end": 4394
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
                              "start": 4398,
                              "end": 4399
                            },
                            "typeArguments": null,
                            "start": 4398,
                            "end": 4399
                          },
                          "start": 4396,
                          "end": 4399
                        },
                        "start": 4395,
                        "end": 4399
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
                            "start": 4404,
                            "end": 4405
                          },
                          "typeArguments": null,
                          "start": 4404,
                          "end": 4405
                        },
                        "start": 4404,
                        "end": 4407
                      },
                      "start": 4401,
                      "end": 4407
                    },
                    "start": 4391,
                    "end": 4407
                  },
                  "start": 4389,
                  "end": 4407
                },
                "start": 4387,
                "end": 4407
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4417,
                  "end": 4419
                },
                "typeArguments": null,
                "start": 4410,
                "end": 4419
              },
              "start": 4408,
              "end": 4419
            },
            "body": null,
            "expression": false,
            "start": 4365,
            "end": 4420
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4442,
              "end": 4446
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4451,
                    "end": 4454
                  },
                  "start": 4449,
                  "end": 4454
                },
                "start": 4447,
                "end": 4454
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4457,
                "end": 4460
              },
              "start": 4455,
              "end": 4460
            },
            "body": null,
            "expression": false,
            "start": 4425,
            "end": 4461
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
                  "name": "r2arg2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4470,
                  "end": 4476
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
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
                          "start": 4480,
                          "end": 4481
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 4480,
                        "end": 4481
                      }
                    ],
                    "start": 4479,
                    "end": 4482
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
                            "start": 4486,
                            "end": 4487
                          },
                          "typeArguments": null,
                          "start": 4486,
                          "end": 4487
                        },
                        "start": 4484,
                        "end": 4487
                      },
                      "start": 4483,
                      "end": 4487
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 4493,
                        "end": 4495
                      }
                    ],
                    "start": 4492,
                    "end": 4496
                  },
                  "id": null,
                  "generator": false,
                  "start": 4479,
                  "end": 4496
                },
                "definite": false,
                "start": 4470,
                "end": 4496
              }
            ],
            "declare": false,
            "start": 4466,
            "end": 4497
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
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4506,
                  "end": 4508
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4511,
                    "end": 4515
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r2arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4516,
                      "end": 4522
                    }
                  ],
                  "optional": false,
                  "start": 4511,
                  "end": 4523
                },
                "definite": false,
                "start": 4506,
                "end": 4523
              }
            ],
            "declare": false,
            "start": 4502,
            "end": 4524
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 4613,
              "end": 4617
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
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
                            "start": 4623,
                            "end": 4624
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 4623,
                          "end": 4624
                        }
                      ],
                      "start": 4622,
                      "end": 4625
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
                              "start": 4629,
                              "end": 4630
                            },
                            "typeArguments": null,
                            "start": 4629,
                            "end": 4630
                          },
                          "start": 4627,
                          "end": 4630
                        },
                        "start": 4626,
                        "end": 4630
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 4635,
                          "end": 4641
                        },
                        "start": 4635,
                        "end": 4643
                      },
                      "start": 4632,
                      "end": 4643
                    },
                    "start": 4622,
                    "end": 4643
                  },
                  "start": 4620,
                  "end": 4643
                },
                "start": 4618,
                "end": 4643
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4653,
                  "end": 4655
                },
                "typeArguments": null,
                "start": 4646,
                "end": 4655
              },
              "start": 4644,
              "end": 4655
            },
            "body": null,
            "expression": false,
            "start": 4596,
            "end": 4656
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 4678,
              "end": 4682
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4687,
                    "end": 4690
                  },
                  "start": 4685,
                  "end": 4690
                },
                "start": 4683,
                "end": 4690
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4693,
                "end": 4696
              },
              "start": 4691,
              "end": 4696
            },
            "body": null,
            "expression": false,
            "start": 4661,
            "end": 4697
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
                  "name": "r3arg2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4706,
                  "end": 4712
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
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
                          "start": 4716,
                          "end": 4717
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 4716,
                        "end": 4717
                      }
                    ],
                    "start": 4715,
                    "end": 4718
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
                            "start": 4722,
                            "end": 4723
                          },
                          "typeArguments": null,
                          "start": 4722,
                          "end": 4723
                        },
                        "start": 4720,
                        "end": 4723
                      },
                      "start": 4719,
                      "end": 4723
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "TSTypeAssertion",
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
                          "start": 4729,
                          "end": 4730
                        },
                        "typeArguments": null,
                        "start": 4729,
                        "end": 4730
                      },
                      "start": 4729,
                      "end": 4732
                    },
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 4733,
                      "end": 4737
                    },
                    "start": 4728,
                    "end": 4737
                  },
                  "id": null,
                  "generator": false,
                  "start": 4715,
                  "end": 4737
                },
                "definite": false,
                "start": 4706,
                "end": 4737
              }
            ],
            "declare": false,
            "start": 4702,
            "end": 4738
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
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4747,
                  "end": 4749
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4752,
                    "end": 4756
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r3arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4757,
                      "end": 4763
                    }
                  ],
                  "optional": false,
                  "start": 4752,
                  "end": 4764
                },
                "definite": false,
                "start": 4747,
                "end": 4764
              }
            ],
            "declare": false,
            "start": 4743,
            "end": 4765
          }
        ],
        "start": 4359,
        "end": 4774
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 4317,
      "end": 4774
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 161,
  "end": 4774
}
```
