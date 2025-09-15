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
                            "start": 405,
                            "end": 411
                          },
                          "start": 403,
                          "end": 411
                        },
                        "start": 402,
                        "end": 411
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 416,
                          "end": 422
                        },
                        "start": 416,
                        "end": 424
                      },
                      "start": 413,
                      "end": 424
                    },
                    "start": 397,
                    "end": 424
                  },
                  "start": 395,
                  "end": 424
                },
                "start": 393,
                "end": 424
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
                  "start": 434,
                  "end": 436
                },
                "typeArguments": null,
                "start": 427,
                "end": 436
              },
              "start": 425,
              "end": 436
            },
            "body": null,
            "expression": false,
            "start": 371,
            "end": 437
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 459,
              "end": 463
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
                    "start": 468,
                    "end": 471
                  },
                  "start": 466,
                  "end": 471
                },
                "start": 464,
                "end": 471
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 474,
                "end": 477
              },
              "start": 472,
              "end": 477
            },
            "body": null,
            "expression": false,
            "start": 442,
            "end": 478
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null,
              "start": 501,
              "end": 505
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
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                      "start": 528,
                                      "end": 532
                                    },
                                    "typeArguments": null,
                                    "start": 528,
                                    "end": 532
                                  },
                                  "start": 526,
                                  "end": 532
                                },
                                "start": 523,
                                "end": 532
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
                                  "start": 537,
                                  "end": 544
                                },
                                "typeArguments": null,
                                "start": 537,
                                "end": 544
                              },
                              "start": 534,
                              "end": 544
                            },
                            "start": 518,
                            "end": 544
                          },
                          "start": 516,
                          "end": 544
                        },
                        "start": 515,
                        "end": 544
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "abstract": false,
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
                                  "start": 557,
                                  "end": 561
                                },
                                "typeArguments": null,
                                "start": 557,
                                "end": 561
                              },
                              "start": 555,
                              "end": 561
                            },
                            "start": 554,
                            "end": 561
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
                              "start": 566,
                              "end": 574
                            },
                            "typeArguments": null,
                            "start": 566,
                            "end": 574
                          },
                          "start": 563,
                          "end": 574
                        },
                        "start": 549,
                        "end": 574
                      },
                      "start": 546,
                      "end": 574
                    },
                    "start": 510,
                    "end": 574
                  },
                  "start": 508,
                  "end": 574
                },
                "start": 506,
                "end": 574
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
                  "start": 584,
                  "end": 586
                },
                "typeArguments": null,
                "start": 577,
                "end": 586
              },
              "start": 575,
              "end": 586
            },
            "body": null,
            "expression": false,
            "start": 484,
            "end": 587
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null,
              "start": 609,
              "end": 613
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
                    "start": 618,
                    "end": 621
                  },
                  "start": 616,
                  "end": 621
                },
                "start": 614,
                "end": 621
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 624,
                "end": 627
              },
              "start": 622,
              "end": 627
            },
            "body": null,
            "expression": false,
            "start": 592,
            "end": 628
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo8",
              "optional": false,
              "typeAnnotation": null,
              "start": 651,
              "end": 655
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
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                      "start": 678,
                                      "end": 682
                                    },
                                    "typeArguments": null,
                                    "start": 678,
                                    "end": 682
                                  },
                                  "start": 676,
                                  "end": 682
                                },
                                "start": 673,
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
                                  "name": "Derived",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 687,
                                  "end": 694
                                },
                                "typeArguments": null,
                                "start": 687,
                                "end": 694
                              },
                              "start": 684,
                              "end": 694
                            },
                            "start": 668,
                            "end": 694
                          },
                          "start": 666,
                          "end": 694
                        },
                        "start": 665,
                        "end": 694
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
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
                                      "start": 710,
                                      "end": 714
                                    },
                                    "typeArguments": null,
                                    "start": 710,
                                    "end": 714
                                  },
                                  "start": 708,
                                  "end": 714
                                },
                                "start": 704,
                                "end": 714
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
                                  "start": 719,
                                  "end": 726
                                },
                                "typeArguments": null,
                                "start": 719,
                                "end": 726
                              },
                              "start": 716,
                              "end": 726
                            },
                            "start": 699,
                            "end": 726
                          },
                          "start": 697,
                          "end": 726
                        },
                        "start": 696,
                        "end": 726
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "abstract": false,
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
                                  "start": 739,
                                  "end": 743
                                },
                                "typeArguments": null,
                                "start": 739,
                                "end": 743
                              },
                              "start": 737,
                              "end": 743
                            },
                            "start": 736,
                            "end": 743
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
                              "start": 748,
                              "end": 755
                            },
                            "typeArguments": null,
                            "start": 748,
                            "end": 755
                          },
                          "start": 745,
                          "end": 755
                        },
                        "start": 731,
                        "end": 755
                      },
                      "start": 728,
                      "end": 755
                    },
                    "start": 660,
                    "end": 755
                  },
                  "start": 658,
                  "end": 755
                },
                "start": 656,
                "end": 755
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
                  "start": 765,
                  "end": 767
                },
                "typeArguments": null,
                "start": 758,
                "end": 767
              },
              "start": 756,
              "end": 767
            },
            "body": null,
            "expression": false,
            "start": 634,
            "end": 768
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo8",
              "optional": false,
              "typeAnnotation": null,
              "start": 790,
              "end": 794
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
                    "start": 799,
                    "end": 802
                  },
                  "start": 797,
                  "end": 802
                },
                "start": 795,
                "end": 802
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 805,
                "end": 808
              },
              "start": 803,
              "end": 808
            },
            "body": null,
            "expression": false,
            "start": 773,
            "end": 809
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo10",
              "optional": false,
              "typeAnnotation": null,
              "start": 832,
              "end": 837
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
                          "start": 850,
                          "end": 851
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
                                "start": 853,
                                "end": 857
                              },
                              "typeArguments": null,
                              "start": 853,
                              "end": 857
                            },
                            "start": 853,
                            "end": 859
                          },
                          "start": 851,
                          "end": 859
                        },
                        "value": null,
                        "start": 847,
                        "end": 859
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
                          "start": 864,
                          "end": 868
                        },
                        "typeArguments": null,
                        "start": 864,
                        "end": 868
                      },
                      "start": 861,
                      "end": 868
                    },
                    "start": 842,
                    "end": 868
                  },
                  "start": 840,
                  "end": 868
                },
                "start": 838,
                "end": 868
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
                  "start": 878,
                  "end": 880
                },
                "typeArguments": null,
                "start": 871,
                "end": 880
              },
              "start": 869,
              "end": 880
            },
            "body": null,
            "expression": false,
            "start": 815,
            "end": 881
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo10",
              "optional": false,
              "typeAnnotation": null,
              "start": 903,
              "end": 908
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
                    "start": 913,
                    "end": 916
                  },
                  "start": 911,
                  "end": 916
                },
                "start": 909,
                "end": 916
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 919,
                "end": 922
              },
              "start": 917,
              "end": 922
            },
            "body": null,
            "expression": false,
            "start": 886,
            "end": 923
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo11",
              "optional": false,
              "typeAnnotation": null,
              "start": 946,
              "end": 951
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
                                  "start": 966,
                                  "end": 969
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 971,
                                    "end": 977
                                  },
                                  "start": 969,
                                  "end": 977
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 966,
                                "end": 977
                              }
                            ],
                            "start": 964,
                            "end": 979
                          },
                          "start": 962,
                          "end": 979
                        },
                        "start": 961,
                        "end": 979
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
                                  "start": 986,
                                  "end": 989
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 991,
                                    "end": 997
                                  },
                                  "start": 989,
                                  "end": 997
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 986,
                                "end": 998
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
                                  "start": 999,
                                  "end": 1002
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1004,
                                    "end": 1010
                                  },
                                  "start": 1002,
                                  "end": 1010
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 999,
                                "end": 1010
                              }
                            ],
                            "start": 984,
                            "end": 1012
                          },
                          "start": 982,
                          "end": 1012
                        },
                        "start": 981,
                        "end": 1012
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
                          "start": 1017,
                          "end": 1021
                        },
                        "typeArguments": null,
                        "start": 1017,
                        "end": 1021
                      },
                      "start": 1014,
                      "end": 1021
                    },
                    "start": 956,
                    "end": 1021
                  },
                  "start": 954,
                  "end": 1021
                },
                "start": 952,
                "end": 1021
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
                  "start": 1031,
                  "end": 1033
                },
                "typeArguments": null,
                "start": 1024,
                "end": 1033
              },
              "start": 1022,
              "end": 1033
            },
            "body": null,
            "expression": false,
            "start": 929,
            "end": 1034
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo11",
              "optional": false,
              "typeAnnotation": null,
              "start": 1056,
              "end": 1061
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
                    "start": 1066,
                    "end": 1069
                  },
                  "start": 1064,
                  "end": 1069
                },
                "start": 1062,
                "end": 1069
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1072,
                "end": 1075
              },
              "start": 1070,
              "end": 1075
            },
            "body": null,
            "expression": false,
            "start": 1039,
            "end": 1076
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo12",
              "optional": false,
              "typeAnnotation": null,
              "start": 1099,
              "end": 1104
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
                              "start": 1117,
                              "end": 1122
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
                                    "start": 1123,
                                    "end": 1127
                                  },
                                  "typeArguments": null,
                                  "start": 1123,
                                  "end": 1127
                                }
                              ],
                              "start": 1122,
                              "end": 1128
                            },
                            "start": 1117,
                            "end": 1128
                          },
                          "start": 1115,
                          "end": 1128
                        },
                        "start": 1114,
                        "end": 1128
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
                              "start": 1133,
                              "end": 1138
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
                                    "start": 1139,
                                    "end": 1147
                                  },
                                  "typeArguments": null,
                                  "start": 1139,
                                  "end": 1147
                                }
                              ],
                              "start": 1138,
                              "end": 1148
                            },
                            "start": 1133,
                            "end": 1148
                          },
                          "start": 1131,
                          "end": 1148
                        },
                        "start": 1130,
                        "end": 1148
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
                          "start": 1153,
                          "end": 1158
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
                                "start": 1159,
                                "end": 1166
                              },
                              "typeArguments": null,
                              "start": 1159,
                              "end": 1166
                            }
                          ],
                          "start": 1158,
                          "end": 1167
                        },
                        "start": 1153,
                        "end": 1167
                      },
                      "start": 1150,
                      "end": 1167
                    },
                    "start": 1109,
                    "end": 1167
                  },
                  "start": 1107,
                  "end": 1167
                },
                "start": 1105,
                "end": 1167
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
                  "start": 1177,
                  "end": 1179
                },
                "typeArguments": null,
                "start": 1170,
                "end": 1179
              },
              "start": 1168,
              "end": 1179
            },
            "body": null,
            "expression": false,
            "start": 1082,
            "end": 1180
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo12",
              "optional": false,
              "typeAnnotation": null,
              "start": 1202,
              "end": 1207
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
                    "start": 1212,
                    "end": 1215
                  },
                  "start": 1210,
                  "end": 1215
                },
                "start": 1208,
                "end": 1215
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1218,
                "end": 1221
              },
              "start": 1216,
              "end": 1221
            },
            "body": null,
            "expression": false,
            "start": 1185,
            "end": 1222
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo15",
              "optional": false,
              "typeAnnotation": null,
              "start": 1245,
              "end": 1250
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
                                  "start": 1265,
                                  "end": 1266
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1268,
                                    "end": 1274
                                  },
                                  "start": 1266,
                                  "end": 1274
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 1265,
                                "end": 1275
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
                                  "start": 1276,
                                  "end": 1277
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1279,
                                    "end": 1285
                                  },
                                  "start": 1277,
                                  "end": 1285
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 1276,
                                "end": 1285
                              }
                            ],
                            "start": 1263,
                            "end": 1287
                          },
                          "start": 1261,
                          "end": 1287
                        },
                        "start": 1260,
                        "end": 1287
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1292,
                        "end": 1298
                      },
                      "start": 1289,
                      "end": 1298
                    },
                    "start": 1255,
                    "end": 1298
                  },
                  "start": 1253,
                  "end": 1298
                },
                "start": 1251,
                "end": 1298
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
                  "start": 1308,
                  "end": 1310
                },
                "typeArguments": null,
                "start": 1301,
                "end": 1310
              },
              "start": 1299,
              "end": 1310
            },
            "body": null,
            "expression": false,
            "start": 1228,
            "end": 1311
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo15",
              "optional": false,
              "typeAnnotation": null,
              "start": 1333,
              "end": 1338
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
                    "start": 1343,
                    "end": 1346
                  },
                  "start": 1341,
                  "end": 1346
                },
                "start": 1339,
                "end": 1346
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1349,
                "end": 1352
              },
              "start": 1347,
              "end": 1352
            },
            "body": null,
            "expression": false,
            "start": 1316,
            "end": 1353
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo16",
              "optional": false,
              "typeAnnotation": null,
              "start": 1376,
              "end": 1381
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
                                            "start": 1524,
                                            "end": 1530
                                          },
                                          "start": 1522,
                                          "end": 1530
                                        },
                                        "start": 1521,
                                        "end": 1530
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 1533,
                                        "end": 1539
                                      },
                                      "start": 1531,
                                      "end": 1539
                                    },
                                    "start": 1516,
                                    "end": 1540
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
                                            "start": 1562,
                                            "end": 1568
                                          },
                                          "start": 1560,
                                          "end": 1568
                                        },
                                        "start": 1558,
                                        "end": 1568
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 1571,
                                        "end": 1577
                                      },
                                      "start": 1569,
                                      "end": 1577
                                    },
                                    "start": 1553,
                                    "end": 1578
                                  }
                                ],
                                "start": 1502,
                                "end": 1588
                              },
                              "start": 1500,
                              "end": 1588
                            },
                            "start": 1499,
                            "end": 1588
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSNumberKeyword",
                              "start": 1591,
                              "end": 1597
                            },
                            "start": 1591,
                            "end": 1599
                          },
                          "start": 1589,
                          "end": 1599
                        },
                        "start": 1494,
                        "end": 1600
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
                                            "start": 1639,
                                            "end": 1646
                                          },
                                          "start": 1637,
                                          "end": 1646
                                        },
                                        "start": 1636,
                                        "end": 1646
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSBooleanKeyword",
                                        "start": 1649,
                                        "end": 1656
                                      },
                                      "start": 1647,
                                      "end": 1656
                                    },
                                    "start": 1631,
                                    "end": 1657
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
                                            "start": 1679,
                                            "end": 1686
                                          },
                                          "start": 1677,
                                          "end": 1686
                                        },
                                        "start": 1675,
                                        "end": 1686
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSBooleanKeyword",
                                        "start": 1689,
                                        "end": 1696
                                      },
                                      "start": 1687,
                                      "end": 1696
                                    },
                                    "start": 1670,
                                    "end": 1697
                                  }
                                ],
                                "start": 1617,
                                "end": 1707
                              },
                              "start": 1615,
                              "end": 1707
                            },
                            "start": 1614,
                            "end": 1707
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSBooleanKeyword",
                              "start": 1710,
                              "end": 1717
                            },
                            "start": 1710,
                            "end": 1719
                          },
                          "start": 1708,
                          "end": 1719
                        },
                        "start": 1609,
                        "end": 1720
                      }
                    ],
                    "start": 1386,
                    "end": 1726
                  },
                  "start": 1384,
                  "end": 1726
                },
                "start": 1382,
                "end": 1726
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
                  "start": 1736,
                  "end": 1738
                },
                "typeArguments": null,
                "start": 1729,
                "end": 1738
              },
              "start": 1727,
              "end": 1738
            },
            "body": null,
            "expression": false,
            "start": 1359,
            "end": 1739
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo16",
              "optional": false,
              "typeAnnotation": null,
              "start": 1761,
              "end": 1766
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
                    "start": 1771,
                    "end": 1774
                  },
                  "start": 1769,
                  "end": 1774
                },
                "start": 1767,
                "end": 1774
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1777,
                "end": 1780
              },
              "start": 1775,
              "end": 1780
            },
            "body": null,
            "expression": false,
            "start": 1744,
            "end": 1781
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo17",
              "optional": false,
              "typeAnnotation": null,
              "start": 1804,
              "end": 1809
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
                                            "start": 1851,
                                            "end": 1852
                                          },
                                          "constraint": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Derived",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1861,
                                              "end": 1868
                                            },
                                            "typeArguments": null,
                                            "start": 1861,
                                            "end": 1868
                                          },
                                          "default": null,
                                          "in": false,
                                          "out": false,
                                          "const": false,
                                          "start": 1851,
                                          "end": 1868
                                        }
                                      ],
                                      "start": 1850,
                                      "end": 1869
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
                                              "start": 1873,
                                              "end": 1874
                                            },
                                            "typeArguments": null,
                                            "start": 1873,
                                            "end": 1874
                                          },
                                          "start": 1871,
                                          "end": 1874
                                        },
                                        "start": 1870,
                                        "end": 1874
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
                                          "start": 1877,
                                          "end": 1878
                                        },
                                        "typeArguments": null,
                                        "start": 1877,
                                        "end": 1878
                                      },
                                      "start": 1875,
                                      "end": 1878
                                    },
                                    "start": 1846,
                                    "end": 1879
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
                                            "name": "T",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1897,
                                            "end": 1898
                                          },
                                          "constraint": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Base",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1907,
                                              "end": 1911
                                            },
                                            "typeArguments": null,
                                            "start": 1907,
                                            "end": 1911
                                          },
                                          "default": null,
                                          "in": false,
                                          "out": false,
                                          "const": false,
                                          "start": 1897,
                                          "end": 1911
                                        }
                                      ],
                                      "start": 1896,
                                      "end": 1912
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
                                              "start": 1916,
                                              "end": 1917
                                            },
                                            "typeArguments": null,
                                            "start": 1916,
                                            "end": 1917
                                          },
                                          "start": 1914,
                                          "end": 1917
                                        },
                                        "start": 1913,
                                        "end": 1917
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
                                          "start": 1920,
                                          "end": 1921
                                        },
                                        "typeArguments": null,
                                        "start": 1920,
                                        "end": 1921
                                      },
                                      "start": 1918,
                                      "end": 1921
                                    },
                                    "start": 1892,
                                    "end": 1922
                                  }
                                ],
                                "start": 1832,
                                "end": 1932
                              },
                              "start": 1830,
                              "end": 1932
                            },
                            "start": 1829,
                            "end": 1932
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 1935,
                              "end": 1938
                            },
                            "start": 1935,
                            "end": 1940
                          },
                          "start": 1933,
                          "end": 1940
                        },
                        "start": 1824,
                        "end": 1941
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
                                            "start": 1977,
                                            "end": 1978
                                          },
                                          "constraint": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Derived2",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1987,
                                              "end": 1995
                                            },
                                            "typeArguments": null,
                                            "start": 1987,
                                            "end": 1995
                                          },
                                          "default": null,
                                          "in": false,
                                          "out": false,
                                          "const": false,
                                          "start": 1977,
                                          "end": 1995
                                        }
                                      ],
                                      "start": 1976,
                                      "end": 1996
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
                                              "start": 2000,
                                              "end": 2001
                                            },
                                            "typeArguments": null,
                                            "start": 2000,
                                            "end": 2001
                                          },
                                          "start": 1998,
                                          "end": 2001
                                        },
                                        "start": 1997,
                                        "end": 2001
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
                                          "start": 2004,
                                          "end": 2005
                                        },
                                        "typeArguments": null,
                                        "start": 2004,
                                        "end": 2005
                                      },
                                      "start": 2002,
                                      "end": 2005
                                    },
                                    "start": 1972,
                                    "end": 2006
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
                                            "name": "T",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2024,
                                            "end": 2025
                                          },
                                          "constraint": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Base",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 2034,
                                              "end": 2038
                                            },
                                            "typeArguments": null,
                                            "start": 2034,
                                            "end": 2038
                                          },
                                          "default": null,
                                          "in": false,
                                          "out": false,
                                          "const": false,
                                          "start": 2024,
                                          "end": 2038
                                        }
                                      ],
                                      "start": 2023,
                                      "end": 2039
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
                                              "start": 2043,
                                              "end": 2044
                                            },
                                            "typeArguments": null,
                                            "start": 2043,
                                            "end": 2044
                                          },
                                          "start": 2041,
                                          "end": 2044
                                        },
                                        "start": 2040,
                                        "end": 2044
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
                                          "start": 2047,
                                          "end": 2048
                                        },
                                        "typeArguments": null,
                                        "start": 2047,
                                        "end": 2048
                                      },
                                      "start": 2045,
                                      "end": 2048
                                    },
                                    "start": 2019,
                                    "end": 2049
                                  }
                                ],
                                "start": 1958,
                                "end": 2059
                              },
                              "start": 1956,
                              "end": 2059
                            },
                            "start": 1955,
                            "end": 2059
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 2062,
                              "end": 2065
                            },
                            "start": 2062,
                            "end": 2067
                          },
                          "start": 2060,
                          "end": 2067
                        },
                        "start": 1950,
                        "end": 2068
                      }
                    ],
                    "start": 1814,
                    "end": 2074
                  },
                  "start": 1812,
                  "end": 2074
                },
                "start": 1810,
                "end": 2074
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
                  "start": 2084,
                  "end": 2086
                },
                "typeArguments": null,
                "start": 2077,
                "end": 2086
              },
              "start": 2075,
              "end": 2086
            },
            "body": null,
            "expression": false,
            "start": 1787,
            "end": 2087
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo17",
              "optional": false,
              "typeAnnotation": null,
              "start": 2109,
              "end": 2114
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
                    "start": 2119,
                    "end": 2122
                  },
                  "start": 2117,
                  "end": 2122
                },
                "start": 2115,
                "end": 2122
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2125,
                "end": 2128
              },
              "start": 2123,
              "end": 2128
            },
            "body": null,
            "expression": false,
            "start": 2092,
            "end": 2129
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
                  "name": "r1arg1",
                  "optional": false,
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
                              "start": 2152,
                              "end": 2153
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2152,
                            "end": 2153
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2155,
                              "end": 2156
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2155,
                            "end": 2156
                          }
                        ],
                        "start": 2151,
                        "end": 2157
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
                                "start": 2161,
                                "end": 2162
                              },
                              "typeArguments": null,
                              "start": 2161,
                              "end": 2162
                            },
                            "start": 2159,
                            "end": 2162
                          },
                          "start": 2158,
                          "end": 2162
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
                              "start": 2167,
                              "end": 2168
                            },
                            "typeArguments": null,
                            "start": 2167,
                            "end": 2168
                          },
                          "start": 2167,
                          "end": 2170
                        },
                        "start": 2164,
                        "end": 2170
                      },
                      "start": 2147,
                      "end": 2170
                    },
                    "start": 2145,
                    "end": 2170
                  },
                  "start": 2139,
                  "end": 2170
                },
                "init": null,
                "definite": false,
                "start": 2139,
                "end": 2170
              }
            ],
            "declare": false,
            "start": 2135,
            "end": 2171
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
                  "name": "r1arg2",
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2196,
                              "end": 2202
                            },
                            "start": 2194,
                            "end": 2202
                          },
                          "start": 2193,
                          "end": 2202
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSStringKeyword",
                            "start": 2207,
                            "end": 2213
                          },
                          "start": 2207,
                          "end": 2215
                        },
                        "start": 2204,
                        "end": 2215
                      },
                      "start": 2188,
                      "end": 2215
                    },
                    "start": 2186,
                    "end": 2215
                  },
                  "start": 2180,
                  "end": 2215
                },
                "init": null,
                "definite": false,
                "start": 2180,
                "end": 2215
              }
            ],
            "declare": false,
            "start": 2176,
            "end": 2216
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
                  "start": 2226,
                  "end": 2228
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2231,
                    "end": 2235
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r1arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2236,
                      "end": 2242
                    }
                  ],
                  "optional": false,
                  "start": 2231,
                  "end": 2243
                },
                "definite": false,
                "start": 2226,
                "end": 2243
              }
            ],
            "declare": false,
            "start": 2222,
            "end": 2244
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
                  "start": 2260,
                  "end": 2263
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r1arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2267,
                      "end": 2273
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r1arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2275,
                      "end": 2281
                    }
                  ],
                  "start": 2266,
                  "end": 2282
                },
                "definite": false,
                "start": 2260,
                "end": 2282
              }
            ],
            "declare": false,
            "start": 2256,
            "end": 2283
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
                  "start": 2292,
                  "end": 2295
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r1arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2299,
                      "end": 2305
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r1arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2307,
                      "end": 2313
                    }
                  ],
                  "start": 2298,
                  "end": 2314
                },
                "definite": false,
                "start": 2292,
                "end": 2314
              }
            ],
            "declare": false,
            "start": 2288,
            "end": 2315
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
                  "name": "r2arg1",
                  "optional": false,
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
                              "start": 2338,
                              "end": 2339
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2348,
                                "end": 2352
                              },
                              "typeArguments": null,
                              "start": 2348,
                              "end": 2352
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2338,
                            "end": 2352
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2354,
                              "end": 2355
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2364,
                                "end": 2371
                              },
                              "typeArguments": null,
                              "start": 2364,
                              "end": 2371
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2354,
                            "end": 2371
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "V",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2373,
                              "end": 2374
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2383,
                                "end": 2391
                              },
                              "typeArguments": null,
                              "start": 2383,
                              "end": 2391
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2373,
                            "end": 2391
                          }
                        ],
                        "start": 2337,
                        "end": 2392
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
                                        "start": 2406,
                                        "end": 2407
                                      },
                                      "typeArguments": null,
                                      "start": 2406,
                                      "end": 2407
                                    },
                                    "start": 2404,
                                    "end": 2407
                                  },
                                  "start": 2401,
                                  "end": 2407
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
                                    "start": 2412,
                                    "end": 2413
                                  },
                                  "typeArguments": null,
                                  "start": 2412,
                                  "end": 2413
                                },
                                "start": 2409,
                                "end": 2413
                              },
                              "start": 2396,
                              "end": 2413
                            },
                            "start": 2394,
                            "end": 2413
                          },
                          "start": 2393,
                          "end": 2413
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSConstructorType",
                          "abstract": false,
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
                                    "start": 2426,
                                    "end": 2427
                                  },
                                  "typeArguments": null,
                                  "start": 2426,
                                  "end": 2427
                                },
                                "start": 2424,
                                "end": 2427
                              },
                              "start": 2423,
                              "end": 2427
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
                                "start": 2432,
                                "end": 2433
                              },
                              "typeArguments": null,
                              "start": 2432,
                              "end": 2433
                            },
                            "start": 2429,
                            "end": 2433
                          },
                          "start": 2418,
                          "end": 2433
                        },
                        "start": 2415,
                        "end": 2433
                      },
                      "start": 2333,
                      "end": 2433
                    },
                    "start": 2331,
                    "end": 2433
                  },
                  "start": 2325,
                  "end": 2433
                },
                "init": null,
                "definite": false,
                "start": 2325,
                "end": 2433
              }
            ],
            "declare": false,
            "start": 2321,
            "end": 2434
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
                              "type": "TSConstructorType",
                              "abstract": false,
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
                                        "start": 2469,
                                        "end": 2473
                                      },
                                      "typeArguments": null,
                                      "start": 2469,
                                      "end": 2473
                                    },
                                    "start": 2467,
                                    "end": 2473
                                  },
                                  "start": 2464,
                                  "end": 2473
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
                                    "start": 2478,
                                    "end": 2485
                                  },
                                  "typeArguments": null,
                                  "start": 2478,
                                  "end": 2485
                                },
                                "start": 2475,
                                "end": 2485
                              },
                              "start": 2459,
                              "end": 2485
                            },
                            "start": 2457,
                            "end": 2485
                          },
                          "start": 2456,
                          "end": 2485
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSConstructorType",
                          "abstract": false,
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
                                    "start": 2498,
                                    "end": 2502
                                  },
                                  "typeArguments": null,
                                  "start": 2498,
                                  "end": 2502
                                },
                                "start": 2496,
                                "end": 2502
                              },
                              "start": 2495,
                              "end": 2502
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
                                "start": 2507,
                                "end": 2515
                              },
                              "typeArguments": null,
                              "start": 2507,
                              "end": 2515
                            },
                            "start": 2504,
                            "end": 2515
                          },
                          "start": 2490,
                          "end": 2515
                        },
                        "start": 2487,
                        "end": 2515
                      },
                      "start": 2451,
                      "end": 2515
                    },
                    "start": 2449,
                    "end": 2515
                  },
                  "start": 2443,
                  "end": 2515
                },
                "init": null,
                "definite": false,
                "start": 2443,
                "end": 2515
              }
            ],
            "declare": false,
            "start": 2439,
            "end": 2516
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
                  "start": 2525,
                  "end": 2527
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2530,
                    "end": 2534
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r2arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2535,
                      "end": 2541
                    }
                  ],
                  "optional": false,
                  "start": 2530,
                  "end": 2542
                },
                "definite": false,
                "start": 2525,
                "end": 2542
              }
            ],
            "declare": false,
            "start": 2521,
            "end": 2543
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
                  "start": 2559,
                  "end": 2562
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
                      "start": 2566,
                      "end": 2572
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r2arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2574,
                      "end": 2580
                    }
                  ],
                  "start": 2565,
                  "end": 2581
                },
                "definite": false,
                "start": 2559,
                "end": 2581
              }
            ],
            "declare": false,
            "start": 2555,
            "end": 2582
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
                  "start": 2591,
                  "end": 2594
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r2arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2598,
                      "end": 2604
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r2arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2606,
                      "end": 2612
                    }
                  ],
                  "start": 2597,
                  "end": 2613
                },
                "definite": false,
                "start": 2591,
                "end": 2613
              }
            ],
            "declare": false,
            "start": 2587,
            "end": 2614
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
                  "name": "r3arg1",
                  "optional": false,
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
                              "start": 2637,
                              "end": 2638
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2647,
                                "end": 2651
                              },
                              "typeArguments": null,
                              "start": 2647,
                              "end": 2651
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2637,
                            "end": 2651
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2653,
                              "end": 2654
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2663,
                                "end": 2670
                              },
                              "typeArguments": null,
                              "start": 2663,
                              "end": 2670
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2653,
                            "end": 2670
                          }
                        ],
                        "start": 2636,
                        "end": 2671
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
                                        "start": 2685,
                                        "end": 2686
                                      },
                                      "typeArguments": null,
                                      "start": 2685,
                                      "end": 2686
                                    },
                                    "start": 2683,
                                    "end": 2686
                                  },
                                  "start": 2680,
                                  "end": 2686
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
                                    "start": 2691,
                                    "end": 2692
                                  },
                                  "typeArguments": null,
                                  "start": 2691,
                                  "end": 2692
                                },
                                "start": 2688,
                                "end": 2692
                              },
                              "start": 2675,
                              "end": 2692
                            },
                            "start": 2673,
                            "end": 2692
                          },
                          "start": 2672,
                          "end": 2692
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
                                            "start": 2706,
                                            "end": 2709
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSNumberKeyword",
                                              "start": 2711,
                                              "end": 2717
                                            },
                                            "start": 2709,
                                            "end": 2717
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 2706,
                                          "end": 2718
                                        }
                                      ],
                                      "start": 2704,
                                      "end": 2720
                                    },
                                    "start": 2702,
                                    "end": 2720
                                  },
                                  "start": 2698,
                                  "end": 2720
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
                                    "start": 2725,
                                    "end": 2726
                                  },
                                  "typeArguments": null,
                                  "start": 2725,
                                  "end": 2726
                                },
                                "start": 2722,
                                "end": 2726
                              },
                              "start": 2697,
                              "end": 2726
                            },
                            "start": 2695,
                            "end": 2726
                          },
                          "start": 2694,
                          "end": 2726
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSConstructorType",
                          "abstract": false,
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
                                    "start": 2739,
                                    "end": 2740
                                  },
                                  "typeArguments": null,
                                  "start": 2739,
                                  "end": 2740
                                },
                                "start": 2737,
                                "end": 2740
                              },
                              "start": 2736,
                              "end": 2740
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
                                "start": 2745,
                                "end": 2746
                              },
                              "typeArguments": null,
                              "start": 2745,
                              "end": 2746
                            },
                            "start": 2742,
                            "end": 2746
                          },
                          "start": 2731,
                          "end": 2746
                        },
                        "start": 2728,
                        "end": 2746
                      },
                      "start": 2632,
                      "end": 2746
                    },
                    "start": 2630,
                    "end": 2746
                  },
                  "start": 2624,
                  "end": 2746
                },
                "init": null,
                "definite": false,
                "start": 2624,
                "end": 2746
              }
            ],
            "declare": false,
            "start": 2620,
            "end": 2747
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
                                        "start": 2778,
                                        "end": 2782
                                      },
                                      "typeArguments": null,
                                      "start": 2778,
                                      "end": 2782
                                    },
                                    "start": 2776,
                                    "end": 2782
                                  },
                                  "start": 2773,
                                  "end": 2782
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
                                    "start": 2787,
                                    "end": 2794
                                  },
                                  "typeArguments": null,
                                  "start": 2787,
                                  "end": 2794
                                },
                                "start": 2784,
                                "end": 2794
                              },
                              "start": 2772,
                              "end": 2794
                            },
                            "start": 2770,
                            "end": 2794
                          },
                          "start": 2769,
                          "end": 2794
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
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
                                        "start": 2810,
                                        "end": 2814
                                      },
                                      "typeArguments": null,
                                      "start": 2810,
                                      "end": 2814
                                    },
                                    "start": 2808,
                                    "end": 2814
                                  },
                                  "start": 2804,
                                  "end": 2814
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
                                    "start": 2819,
                                    "end": 2826
                                  },
                                  "typeArguments": null,
                                  "start": 2819,
                                  "end": 2826
                                },
                                "start": 2816,
                                "end": 2826
                              },
                              "start": 2799,
                              "end": 2826
                            },
                            "start": 2797,
                            "end": 2826
                          },
                          "start": 2796,
                          "end": 2826
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSConstructorType",
                          "abstract": false,
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
                                    "start": 2839,
                                    "end": 2843
                                  },
                                  "typeArguments": null,
                                  "start": 2839,
                                  "end": 2843
                                },
                                "start": 2837,
                                "end": 2843
                              },
                              "start": 2836,
                              "end": 2843
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
                                "start": 2848,
                                "end": 2855
                              },
                              "typeArguments": null,
                              "start": 2848,
                              "end": 2855
                            },
                            "start": 2845,
                            "end": 2855
                          },
                          "start": 2831,
                          "end": 2855
                        },
                        "start": 2828,
                        "end": 2855
                      },
                      "start": 2764,
                      "end": 2855
                    },
                    "start": 2762,
                    "end": 2855
                  },
                  "start": 2756,
                  "end": 2855
                },
                "init": null,
                "definite": false,
                "start": 2756,
                "end": 2855
              }
            ],
            "declare": false,
            "start": 2752,
            "end": 2856
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
                  "start": 2865,
                  "end": 2867
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo8",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2870,
                    "end": 2874
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r3arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2875,
                      "end": 2881
                    }
                  ],
                  "optional": false,
                  "start": 2870,
                  "end": 2882
                },
                "definite": false,
                "start": 2865,
                "end": 2882
              }
            ],
            "declare": false,
            "start": 2861,
            "end": 2883
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
                  "start": 2899,
                  "end": 2902
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
                      "start": 2906,
                      "end": 2912
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r3arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2914,
                      "end": 2920
                    }
                  ],
                  "start": 2905,
                  "end": 2921
                },
                "definite": false,
                "start": 2899,
                "end": 2921
              }
            ],
            "declare": false,
            "start": 2895,
            "end": 2922
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
                  "start": 2931,
                  "end": 2934
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r3arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2938,
                      "end": 2944
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r3arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2946,
                      "end": 2952
                    }
                  ],
                  "start": 2937,
                  "end": 2953
                },
                "definite": false,
                "start": 2931,
                "end": 2953
              }
            ],
            "declare": false,
            "start": 2927,
            "end": 2954
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
                  "name": "r4arg1",
                  "optional": false,
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
                              "start": 2977,
                              "end": 2978
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2987,
                                "end": 2994
                              },
                              "typeArguments": null,
                              "start": 2987,
                              "end": 2994
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2977,
                            "end": 2994
                          }
                        ],
                        "start": 2976,
                        "end": 2995
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
                            "start": 2999,
                            "end": 3000
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
                                  "start": 3002,
                                  "end": 3003
                                },
                                "typeArguments": null,
                                "start": 3002,
                                "end": 3003
                              },
                              "start": 3002,
                              "end": 3005
                            },
                            "start": 3000,
                            "end": 3005
                          },
                          "value": null,
                          "start": 2996,
                          "end": 3005
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
                            "start": 3010,
                            "end": 3011
                          },
                          "typeArguments": null,
                          "start": 3010,
                          "end": 3011
                        },
                        "start": 3007,
                        "end": 3011
                      },
                      "start": 2972,
                      "end": 3011
                    },
                    "start": 2970,
                    "end": 3011
                  },
                  "start": 2964,
                  "end": 3011
                },
                "init": null,
                "definite": false,
                "start": 2964,
                "end": 3011
              }
            ],
            "declare": false,
            "start": 2960,
            "end": 3012
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
                            "start": 3037,
                            "end": 3038
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
                                  "start": 3040,
                                  "end": 3044
                                },
                                "typeArguments": null,
                                "start": 3040,
                                "end": 3044
                              },
                              "start": 3040,
                              "end": 3046
                            },
                            "start": 3038,
                            "end": 3046
                          },
                          "value": null,
                          "start": 3034,
                          "end": 3046
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
                            "start": 3051,
                            "end": 3055
                          },
                          "typeArguments": null,
                          "start": 3051,
                          "end": 3055
                        },
                        "start": 3048,
                        "end": 3055
                      },
                      "start": 3029,
                      "end": 3055
                    },
                    "start": 3027,
                    "end": 3055
                  },
                  "start": 3021,
                  "end": 3055
                },
                "init": null,
                "definite": false,
                "start": 3021,
                "end": 3055
              }
            ],
            "declare": false,
            "start": 3017,
            "end": 3056
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
                  "start": 3065,
                  "end": 3067
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo10",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3070,
                    "end": 3075
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r4arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3076,
                      "end": 3082
                    }
                  ],
                  "optional": false,
                  "start": 3070,
                  "end": 3083
                },
                "definite": false,
                "start": 3065,
                "end": 3083
              }
            ],
            "declare": false,
            "start": 3061,
            "end": 3084
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
                  "start": 3100,
                  "end": 3103
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
                      "start": 3107,
                      "end": 3113
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r4arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3115,
                      "end": 3121
                    }
                  ],
                  "start": 3106,
                  "end": 3122
                },
                "definite": false,
                "start": 3100,
                "end": 3122
              }
            ],
            "declare": false,
            "start": 3096,
            "end": 3123
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
                  "start": 3132,
                  "end": 3135
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r4arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3139,
                      "end": 3145
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r4arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3147,
                      "end": 3153
                    }
                  ],
                  "start": 3138,
                  "end": 3154
                },
                "definite": false,
                "start": 3132,
                "end": 3154
              }
            ],
            "declare": false,
            "start": 3128,
            "end": 3155
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
                  "name": "r5arg1",
                  "optional": false,
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
                              "start": 3178,
                              "end": 3179
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3188,
                                "end": 3195
                              },
                              "typeArguments": null,
                              "start": 3188,
                              "end": 3195
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3178,
                            "end": 3195
                          }
                        ],
                        "start": 3177,
                        "end": 3196
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
                                "start": 3200,
                                "end": 3201
                              },
                              "typeArguments": null,
                              "start": 3200,
                              "end": 3201
                            },
                            "start": 3198,
                            "end": 3201
                          },
                          "start": 3197,
                          "end": 3201
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
                                "start": 3206,
                                "end": 3207
                              },
                              "typeArguments": null,
                              "start": 3206,
                              "end": 3207
                            },
                            "start": 3204,
                            "end": 3207
                          },
                          "start": 3203,
                          "end": 3207
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
                            "start": 3212,
                            "end": 3213
                          },
                          "typeArguments": null,
                          "start": 3212,
                          "end": 3213
                        },
                        "start": 3209,
                        "end": 3213
                      },
                      "start": 3173,
                      "end": 3213
                    },
                    "start": 3171,
                    "end": 3213
                  },
                  "start": 3165,
                  "end": 3213
                },
                "init": null,
                "definite": false,
                "start": 3165,
                "end": 3213
              }
            ],
            "declare": false,
            "start": 3161,
            "end": 3214
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
                                    "start": 3241,
                                    "end": 3244
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 3246,
                                      "end": 3252
                                    },
                                    "start": 3244,
                                    "end": 3252
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 3241,
                                  "end": 3252
                                }
                              ],
                              "start": 3239,
                              "end": 3254
                            },
                            "start": 3237,
                            "end": 3254
                          },
                          "start": 3236,
                          "end": 3254
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
                                    "start": 3261,
                                    "end": 3264
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 3266,
                                      "end": 3272
                                    },
                                    "start": 3264,
                                    "end": 3272
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 3261,
                                  "end": 3273
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
                                    "start": 3274,
                                    "end": 3277
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 3279,
                                      "end": 3285
                                    },
                                    "start": 3277,
                                    "end": 3285
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 3274,
                                  "end": 3285
                                }
                              ],
                              "start": 3259,
                              "end": 3287
                            },
                            "start": 3257,
                            "end": 3287
                          },
                          "start": 3256,
                          "end": 3287
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
                            "start": 3292,
                            "end": 3296
                          },
                          "typeArguments": null,
                          "start": 3292,
                          "end": 3296
                        },
                        "start": 3289,
                        "end": 3296
                      },
                      "start": 3231,
                      "end": 3296
                    },
                    "start": 3229,
                    "end": 3296
                  },
                  "start": 3223,
                  "end": 3296
                },
                "init": null,
                "definite": false,
                "start": 3223,
                "end": 3296
              }
            ],
            "declare": false,
            "start": 3219,
            "end": 3297
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
                  "start": 3306,
                  "end": 3308
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo11",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3311,
                    "end": 3316
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r5arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3317,
                      "end": 3323
                    }
                  ],
                  "optional": false,
                  "start": 3311,
                  "end": 3324
                },
                "definite": false,
                "start": 3306,
                "end": 3324
              }
            ],
            "declare": false,
            "start": 3302,
            "end": 3325
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
                  "start": 3341,
                  "end": 3344
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
                      "start": 3348,
                      "end": 3354
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r5arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3356,
                      "end": 3362
                    }
                  ],
                  "start": 3347,
                  "end": 3363
                },
                "definite": false,
                "start": 3341,
                "end": 3363
              }
            ],
            "declare": false,
            "start": 3337,
            "end": 3364
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
                  "start": 3373,
                  "end": 3376
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r5arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3380,
                      "end": 3386
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r5arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3388,
                      "end": 3394
                    }
                  ],
                  "start": 3379,
                  "end": 3395
                },
                "definite": false,
                "start": 3373,
                "end": 3395
              }
            ],
            "declare": false,
            "start": 3369,
            "end": 3396
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
                  "name": "r6arg1",
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
                                "start": 3422,
                                "end": 3427
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
                                      "start": 3428,
                                      "end": 3432
                                    },
                                    "typeArguments": null,
                                    "start": 3428,
                                    "end": 3432
                                  }
                                ],
                                "start": 3427,
                                "end": 3433
                              },
                              "start": 3422,
                              "end": 3433
                            },
                            "start": 3420,
                            "end": 3433
                          },
                          "start": 3419,
                          "end": 3433
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
                                "start": 3438,
                                "end": 3443
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
                                      "start": 3444,
                                      "end": 3452
                                    },
                                    "typeArguments": null,
                                    "start": 3444,
                                    "end": 3452
                                  }
                                ],
                                "start": 3443,
                                "end": 3453
                              },
                              "start": 3438,
                              "end": 3453
                            },
                            "start": 3436,
                            "end": 3453
                          },
                          "start": 3435,
                          "end": 3453
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
                            "start": 3458,
                            "end": 3463
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
                                  "start": 3464,
                                  "end": 3471
                                },
                                "typeArguments": null,
                                "start": 3464,
                                "end": 3471
                              }
                            ],
                            "start": 3463,
                            "end": 3472
                          },
                          "start": 3458,
                          "end": 3472
                        },
                        "start": 3455,
                        "end": 3472
                      },
                      "start": 3414,
                      "end": 3472
                    },
                    "start": 3412,
                    "end": 3472
                  },
                  "start": 3406,
                  "end": 3472
                },
                "init": null,
                "definite": false,
                "start": 3406,
                "end": 3472
              }
            ],
            "declare": false,
            "start": 3402,
            "end": 3473
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
                              "start": 3495,
                              "end": 3496
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Array",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3505,
                                "end": 3510
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
                                      "start": 3511,
                                      "end": 3519
                                    },
                                    "typeArguments": null,
                                    "start": 3511,
                                    "end": 3519
                                  }
                                ],
                                "start": 3510,
                                "end": 3520
                              },
                              "start": 3505,
                              "end": 3520
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3495,
                            "end": 3520
                          }
                        ],
                        "start": 3494,
                        "end": 3521
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
                                "start": 3525,
                                "end": 3530
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
                                      "start": 3531,
                                      "end": 3535
                                    },
                                    "typeArguments": null,
                                    "start": 3531,
                                    "end": 3535
                                  }
                                ],
                                "start": 3530,
                                "end": 3536
                              },
                              "start": 3525,
                              "end": 3536
                            },
                            "start": 3523,
                            "end": 3536
                          },
                          "start": 3522,
                          "end": 3536
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
                                "start": 3541,
                                "end": 3546
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
                                      "start": 3547,
                                      "end": 3551
                                    },
                                    "typeArguments": null,
                                    "start": 3547,
                                    "end": 3551
                                  }
                                ],
                                "start": 3546,
                                "end": 3552
                              },
                              "start": 3541,
                              "end": 3552
                            },
                            "start": 3539,
                            "end": 3552
                          },
                          "start": 3538,
                          "end": 3552
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
                            "start": 3557,
                            "end": 3558
                          },
                          "typeArguments": null,
                          "start": 3557,
                          "end": 3558
                        },
                        "start": 3554,
                        "end": 3558
                      },
                      "start": 3490,
                      "end": 3558
                    },
                    "start": 3488,
                    "end": 3558
                  },
                  "start": 3482,
                  "end": 3558
                },
                "init": null,
                "definite": false,
                "start": 3482,
                "end": 3558
              }
            ],
            "declare": false,
            "start": 3478,
            "end": 3559
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
                  "start": 3568,
                  "end": 3570
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo12",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3573,
                    "end": 3578
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r6arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3579,
                      "end": 3585
                    }
                  ],
                  "optional": false,
                  "start": 3573,
                  "end": 3586
                },
                "definite": false,
                "start": 3568,
                "end": 3586
              }
            ],
            "declare": false,
            "start": 3564,
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
                  "name": "r6a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3658,
                  "end": 3661
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
                      "start": 3665,
                      "end": 3671
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r6arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3673,
                      "end": 3679
                    }
                  ],
                  "start": 3664,
                  "end": 3680
                },
                "definite": false,
                "start": 3658,
                "end": 3680
              }
            ],
            "declare": false,
            "start": 3654,
            "end": 3681
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
                  "start": 3690,
                  "end": 3693
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r6arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3697,
                      "end": 3703
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r6arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3705,
                      "end": 3711
                    }
                  ],
                  "start": 3696,
                  "end": 3712
                },
                "definite": false,
                "start": 3690,
                "end": 3712
              }
            ],
            "declare": false,
            "start": 3686,
            "end": 3713
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
                  "name": "r7arg1",
                  "optional": false,
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
                              "start": 3736,
                              "end": 3737
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3736,
                            "end": 3737
                          }
                        ],
                        "start": 3735,
                        "end": 3738
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
                                    "start": 3744,
                                    "end": 3745
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
                                        "start": 3747,
                                        "end": 3748
                                      },
                                      "typeArguments": null,
                                      "start": 3747,
                                      "end": 3748
                                    },
                                    "start": 3745,
                                    "end": 3748
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 3744,
                                  "end": 3749
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
                                    "start": 3750,
                                    "end": 3751
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
                                        "start": 3753,
                                        "end": 3754
                                      },
                                      "typeArguments": null,
                                      "start": 3753,
                                      "end": 3754
                                    },
                                    "start": 3751,
                                    "end": 3754
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 3750,
                                  "end": 3754
                                }
                              ],
                              "start": 3742,
                              "end": 3756
                            },
                            "start": 3740,
                            "end": 3756
                          },
                          "start": 3739,
                          "end": 3756
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
                            "start": 3761,
                            "end": 3762
                          },
                          "typeArguments": null,
                          "start": 3761,
                          "end": 3762
                        },
                        "start": 3758,
                        "end": 3762
                      },
                      "start": 3731,
                      "end": 3762
                    },
                    "start": 3729,
                    "end": 3762
                  },
                  "start": 3723,
                  "end": 3762
                },
                "init": null,
                "definite": false,
                "start": 3723,
                "end": 3762
              }
            ],
            "declare": false,
            "start": 3719,
            "end": 3763
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
                                    "start": 3790,
                                    "end": 3791
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 3793,
                                      "end": 3799
                                    },
                                    "start": 3791,
                                    "end": 3799
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 3790,
                                  "end": 3800
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
                                    "start": 3801,
                                    "end": 3802
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 3804,
                                      "end": 3810
                                    },
                                    "start": 3802,
                                    "end": 3810
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 3801,
                                  "end": 3810
                                }
                              ],
                              "start": 3788,
                              "end": 3812
                            },
                            "start": 3786,
                            "end": 3812
                          },
                          "start": 3785,
                          "end": 3812
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 3817,
                          "end": 3823
                        },
                        "start": 3814,
                        "end": 3823
                      },
                      "start": 3780,
                      "end": 3823
                    },
                    "start": 3778,
                    "end": 3823
                  },
                  "start": 3772,
                  "end": 3823
                },
                "init": null,
                "definite": false,
                "start": 3772,
                "end": 3823
              }
            ],
            "declare": false,
            "start": 3768,
            "end": 3824
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
                  "start": 3833,
                  "end": 3835
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo15",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3838,
                    "end": 3843
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3844,
                      "end": 3850
                    }
                  ],
                  "optional": false,
                  "start": 3838,
                  "end": 3851
                },
                "definite": false,
                "start": 3833,
                "end": 3851
              }
            ],
            "declare": false,
            "start": 3829,
            "end": 3852
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
                  "start": 3914,
                  "end": 3917
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
                      "start": 3921,
                      "end": 3927
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3929,
                      "end": 3935
                    }
                  ],
                  "start": 3920,
                  "end": 3936
                },
                "definite": false,
                "start": 3914,
                "end": 3936
              }
            ],
            "declare": false,
            "start": 3910,
            "end": 3937
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
                  "start": 3946,
                  "end": 3949
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3953,
                      "end": 3959
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3961,
                      "end": 3967
                    }
                  ],
                  "start": 3952,
                  "end": 3968
                },
                "definite": false,
                "start": 3946,
                "end": 3968
              }
            ],
            "declare": false,
            "start": 3942,
            "end": 3969
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
                              "start": 3992,
                              "end": 3993
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4002,
                                "end": 4006
                              },
                              "typeArguments": null,
                              "start": 4002,
                              "end": 4006
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3992,
                            "end": 4006
                          }
                        ],
                        "start": 3991,
                        "end": 4007
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
                                    "start": 4013,
                                    "end": 4014
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
                                        "start": 4016,
                                        "end": 4017
                                      },
                                      "typeArguments": null,
                                      "start": 4016,
                                      "end": 4017
                                    },
                                    "start": 4014,
                                    "end": 4017
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 4013,
                                  "end": 4018
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
                                    "start": 4019,
                                    "end": 4020
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
                                        "start": 4022,
                                        "end": 4023
                                      },
                                      "typeArguments": null,
                                      "start": 4022,
                                      "end": 4023
                                    },
                                    "start": 4020,
                                    "end": 4023
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 4019,
                                  "end": 4023
                                }
                              ],
                              "start": 4011,
                              "end": 4025
                            },
                            "start": 4009,
                            "end": 4025
                          },
                          "start": 4008,
                          "end": 4025
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 4030,
                          "end": 4036
                        },
                        "start": 4027,
                        "end": 4036
                      },
                      "start": 3987,
                      "end": 4036
                    },
                    "start": 3985,
                    "end": 4036
                  },
                  "start": 3979,
                  "end": 4036
                },
                "init": null,
                "definite": false,
                "start": 3979,
                "end": 4036
              }
            ],
            "declare": false,
            "start": 3975,
            "end": 4037
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
                  "start": 4046,
                  "end": 4049
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo15",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4052,
                    "end": 4057
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4058,
                      "end": 4064
                    }
                  ],
                  "optional": false,
                  "start": 4052,
                  "end": 4065
                },
                "definite": false,
                "start": 4046,
                "end": 4065
              }
            ],
            "declare": false,
            "start": 4042,
            "end": 4066
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
                  "start": 4082,
                  "end": 4085
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
                      "start": 4089,
                      "end": 4095
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4097,
                      "end": 4103
                    }
                  ],
                  "start": 4088,
                  "end": 4104
                },
                "definite": false,
                "start": 4082,
                "end": 4104
              }
            ],
            "declare": false,
            "start": 4078,
            "end": 4105
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
                  "start": 4114,
                  "end": 4117
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
                      "start": 4121,
                      "end": 4127
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4129,
                      "end": 4135
                    }
                  ],
                  "start": 4120,
                  "end": 4136
                },
                "definite": false,
                "start": 4114,
                "end": 4136
              }
            ],
            "declare": false,
            "start": 4110,
            "end": 4137
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
                              "start": 4159,
                              "end": 4160
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4159,
                            "end": 4160
                          }
                        ],
                        "start": 4158,
                        "end": 4161
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
                                        "start": 4173,
                                        "end": 4174
                                      },
                                      "typeArguments": null,
                                      "start": 4173,
                                      "end": 4174
                                    },
                                    "start": 4171,
                                    "end": 4174
                                  },
                                  "start": 4170,
                                  "end": 4174
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
                                    "start": 4179,
                                    "end": 4180
                                  },
                                  "typeArguments": null,
                                  "start": 4179,
                                  "end": 4180
                                },
                                "start": 4176,
                                "end": 4180
                              },
                              "start": 4165,
                              "end": 4180
                            },
                            "start": 4163,
                            "end": 4180
                          },
                          "start": 4162,
                          "end": 4180
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
                              "start": 4185,
                              "end": 4186
                            },
                            "typeArguments": null,
                            "start": 4185,
                            "end": 4186
                          },
                          "start": 4185,
                          "end": 4188
                        },
                        "start": 4182,
                        "end": 4188
                      },
                      "start": 4154,
                      "end": 4188
                    },
                    "start": 4152,
                    "end": 4188
                  },
                  "start": 4147,
                  "end": 4188
                },
                "init": null,
                "definite": false,
                "start": 4147,
                "end": 4188
              }
            ],
            "declare": false,
            "start": 4143,
            "end": 4189
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
                  "start": 4198,
                  "end": 4200
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo16",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4203,
                    "end": 4208
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r8arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4209,
                      "end": 4214
                    }
                  ],
                  "optional": false,
                  "start": 4203,
                  "end": 4215
                },
                "definite": false,
                "start": 4198,
                "end": 4215
              }
            ],
            "declare": false,
            "start": 4194,
            "end": 4216
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
                              "start": 4245,
                              "end": 4246
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4245,
                            "end": 4246
                          }
                        ],
                        "start": 4244,
                        "end": 4247
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
                                        "start": 4259,
                                        "end": 4260
                                      },
                                      "typeArguments": null,
                                      "start": 4259,
                                      "end": 4260
                                    },
                                    "start": 4257,
                                    "end": 4260
                                  },
                                  "start": 4256,
                                  "end": 4260
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
                                    "start": 4265,
                                    "end": 4266
                                  },
                                  "typeArguments": null,
                                  "start": 4265,
                                  "end": 4266
                                },
                                "start": 4262,
                                "end": 4266
                              },
                              "start": 4251,
                              "end": 4266
                            },
                            "start": 4249,
                            "end": 4266
                          },
                          "start": 4248,
                          "end": 4266
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSAnyKeyword",
                            "start": 4271,
                            "end": 4274
                          },
                          "start": 4271,
                          "end": 4276
                        },
                        "start": 4268,
                        "end": 4276
                      },
                      "start": 4240,
                      "end": 4276
                    },
                    "start": 4238,
                    "end": 4276
                  },
                  "start": 4233,
                  "end": 4276
                },
                "init": null,
                "definite": false,
                "start": 4233,
                "end": 4276
              }
            ],
            "declare": false,
            "start": 4229,
            "end": 4277
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
                  "start": 4286,
                  "end": 4288
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo17",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4291,
                    "end": 4296
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r9arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4297,
                      "end": 4302
                    }
                  ],
                  "optional": false,
                  "start": 4291,
                  "end": 4303
                },
                "definite": false,
                "start": 4286,
                "end": 4303
              }
            ],
            "declare": false,
            "start": 4282,
            "end": 4304
          }
        ],
        "start": 178,
        "end": 4463
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 161,
      "end": 4463
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WithGenericSignaturesInBaseType",
        "optional": false,
        "typeAnnotation": null,
        "start": 4475,
        "end": 4506
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
              "start": 4530,
              "end": 4534
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
                            "start": 4544,
                            "end": 4545
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 4544,
                          "end": 4545
                        }
                      ],
                      "start": 4543,
                      "end": 4546
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
                              "start": 4550,
                              "end": 4551
                            },
                            "typeArguments": null,
                            "start": 4550,
                            "end": 4551
                          },
                          "start": 4548,
                          "end": 4551
                        },
                        "start": 4547,
                        "end": 4551
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
                            "start": 4556,
                            "end": 4557
                          },
                          "typeArguments": null,
                          "start": 4556,
                          "end": 4557
                        },
                        "start": 4556,
                        "end": 4559
                      },
                      "start": 4553,
                      "end": 4559
                    },
                    "start": 4539,
                    "end": 4559
                  },
                  "start": 4537,
                  "end": 4559
                },
                "start": 4535,
                "end": 4559
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
                  "start": 4569,
                  "end": 4571
                },
                "typeArguments": null,
                "start": 4562,
                "end": 4571
              },
              "start": 4560,
              "end": 4571
            },
            "body": null,
            "expression": false,
            "start": 4513,
            "end": 4572
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4594,
              "end": 4598
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
                    "start": 4603,
                    "end": 4606
                  },
                  "start": 4601,
                  "end": 4606
                },
                "start": 4599,
                "end": 4606
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4609,
                "end": 4612
              },
              "start": 4607,
              "end": 4612
            },
            "body": null,
            "expression": false,
            "start": 4577,
            "end": 4613
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
                              "start": 4635,
                              "end": 4636
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4635,
                            "end": 4636
                          }
                        ],
                        "start": 4634,
                        "end": 4637
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
                                "start": 4641,
                                "end": 4642
                              },
                              "typeArguments": null,
                              "start": 4641,
                              "end": 4642
                            },
                            "start": 4639,
                            "end": 4642
                          },
                          "start": 4638,
                          "end": 4642
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSStringKeyword",
                            "start": 4647,
                            "end": 4653
                          },
                          "start": 4647,
                          "end": 4655
                        },
                        "start": 4644,
                        "end": 4655
                      },
                      "start": 4630,
                      "end": 4655
                    },
                    "start": 4628,
                    "end": 4655
                  },
                  "start": 4622,
                  "end": 4655
                },
                "init": null,
                "definite": false,
                "start": 4622,
                "end": 4655
              }
            ],
            "declare": false,
            "start": 4618,
            "end": 4656
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
                  "start": 4665,
                  "end": 4667
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4670,
                    "end": 4674
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r2arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4675,
                      "end": 4681
                    }
                  ],
                  "optional": false,
                  "start": 4670,
                  "end": 4682
                },
                "definite": false,
                "start": 4665,
                "end": 4682
              }
            ],
            "declare": false,
            "start": 4661,
            "end": 4683
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 4772,
              "end": 4776
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
                            "start": 4786,
                            "end": 4787
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 4786,
                          "end": 4787
                        }
                      ],
                      "start": 4785,
                      "end": 4788
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
                              "start": 4792,
                              "end": 4793
                            },
                            "typeArguments": null,
                            "start": 4792,
                            "end": 4793
                          },
                          "start": 4790,
                          "end": 4793
                        },
                        "start": 4789,
                        "end": 4793
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 4798,
                          "end": 4804
                        },
                        "start": 4798,
                        "end": 4806
                      },
                      "start": 4795,
                      "end": 4806
                    },
                    "start": 4781,
                    "end": 4806
                  },
                  "start": 4779,
                  "end": 4806
                },
                "start": 4777,
                "end": 4806
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
                  "start": 4816,
                  "end": 4818
                },
                "typeArguments": null,
                "start": 4809,
                "end": 4818
              },
              "start": 4807,
              "end": 4818
            },
            "body": null,
            "expression": false,
            "start": 4755,
            "end": 4819
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 4841,
              "end": 4845
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
                    "start": 4850,
                    "end": 4853
                  },
                  "start": 4848,
                  "end": 4853
                },
                "start": 4846,
                "end": 4853
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4856,
                "end": 4859
              },
              "start": 4854,
              "end": 4859
            },
            "body": null,
            "expression": false,
            "start": 4824,
            "end": 4860
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
                              "start": 4882,
                              "end": 4883
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4882,
                            "end": 4883
                          }
                        ],
                        "start": 4881,
                        "end": 4884
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
                                "start": 4888,
                                "end": 4889
                              },
                              "typeArguments": null,
                              "start": 4888,
                              "end": 4889
                            },
                            "start": 4886,
                            "end": 4889
                          },
                          "start": 4885,
                          "end": 4889
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
                              "start": 4894,
                              "end": 4895
                            },
                            "typeArguments": null,
                            "start": 4894,
                            "end": 4895
                          },
                          "start": 4894,
                          "end": 4897
                        },
                        "start": 4891,
                        "end": 4897
                      },
                      "start": 4877,
                      "end": 4897
                    },
                    "start": 4875,
                    "end": 4897
                  },
                  "start": 4869,
                  "end": 4897
                },
                "init": null,
                "definite": false,
                "start": 4869,
                "end": 4897
              }
            ],
            "declare": false,
            "start": 4865,
            "end": 4898
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
                  "start": 4907,
                  "end": 4909
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4912,
                    "end": 4916
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r3arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4917,
                      "end": 4923
                    }
                  ],
                  "optional": false,
                  "start": 4912,
                  "end": 4924
                },
                "definite": false,
                "start": 4907,
                "end": 4924
              }
            ],
            "declare": false,
            "start": 4903,
            "end": 4925
          }
        ],
        "start": 4507,
        "end": 4934
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 4465,
      "end": 4934
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 161,
  "end": 4934
}
```
