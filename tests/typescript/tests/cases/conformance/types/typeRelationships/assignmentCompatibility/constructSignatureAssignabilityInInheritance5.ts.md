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
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 218,
        "end": 222
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
              "start": 225,
              "end": 228
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 230,
                "end": 236
              },
              "start": 228,
              "end": 236
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
            "start": 225,
            "end": 237
          }
        ],
        "start": 223,
        "end": 239
      },
      "abstract": false,
      "declare": false,
      "start": 212,
      "end": 239
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
        "start": 246,
        "end": 253
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 262,
        "end": 266
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
              "start": 269,
              "end": 272
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 274,
                "end": 280
              },
              "start": 272,
              "end": 280
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
            "start": 269,
            "end": 281
          }
        ],
        "start": 267,
        "end": 283
      },
      "abstract": false,
      "declare": false,
      "start": 240,
      "end": 283
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
        "start": 290,
        "end": 298
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 307,
        "end": 314
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
              "start": 317,
              "end": 320
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 322,
                "end": 328
              },
              "start": 320,
              "end": 328
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
            "start": 317,
            "end": 329
          }
        ],
        "start": 315,
        "end": 331
      },
      "abstract": false,
      "declare": false,
      "start": 284,
      "end": 331
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
        "start": 338,
        "end": 350
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 359,
        "end": 363
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
              "start": 366,
              "end": 370
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 372,
                "end": 378
              },
              "start": 370,
              "end": 378
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
            "start": 366,
            "end": 379
          }
        ],
        "start": 364,
        "end": 381
      },
      "abstract": false,
      "declare": false,
      "start": 332,
      "end": 381
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 393,
        "end": 394
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 417,
              "end": 418
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
                        "start": 428,
                        "end": 434
                      },
                      "start": 426,
                      "end": 434
                    },
                    "start": 425,
                    "end": 434
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 439,
                      "end": 445
                    },
                    "start": 439,
                    "end": 447
                  },
                  "start": 436,
                  "end": 447
                },
                "start": 420,
                "end": 447
              },
              "start": 418,
              "end": 447
            },
            "accessibility": null,
            "static": false,
            "start": 417,
            "end": 448
          },
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
              "start": 453,
              "end": 455
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
                        "start": 465,
                        "end": 471
                      },
                      "start": 463,
                      "end": 471
                    },
                    "start": 462,
                    "end": 471
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 476,
                      "end": 482
                    },
                    "start": 476,
                    "end": 484
                  },
                  "start": 473,
                  "end": 484
                },
                "start": 457,
                "end": 484
              },
              "start": 455,
              "end": 484
            },
            "accessibility": null,
            "static": false,
            "start": 453,
            "end": 485
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 490,
              "end": 492
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
                        "start": 502,
                        "end": 508
                      },
                      "start": 500,
                      "end": 508
                    },
                    "start": 499,
                    "end": 508
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 513,
                    "end": 517
                  },
                  "start": 510,
                  "end": 517
                },
                "start": 494,
                "end": 517
              },
              "start": 492,
              "end": 517
            },
            "accessibility": null,
            "static": false,
            "start": 490,
            "end": 518
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 523,
              "end": 525
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
                        "type": "TSStringKeyword",
                        "start": 535,
                        "end": 541
                      },
                      "start": 533,
                      "end": 541
                    },
                    "start": 532,
                    "end": 541
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 546,
                        "end": 552
                      },
                      "start": 544,
                      "end": 552
                    },
                    "start": 543,
                    "end": 552
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 557,
                    "end": 563
                  },
                  "start": 554,
                  "end": 563
                },
                "start": 527,
                "end": 563
              },
              "start": 525,
              "end": 563
            },
            "accessibility": null,
            "static": false,
            "start": 523,
            "end": 564
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 569,
              "end": 571
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
                                "type": "TSStringKeyword",
                                "start": 587,
                                "end": 593
                              },
                              "start": 585,
                              "end": 593
                            },
                            "start": 582,
                            "end": 593
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 598,
                            "end": 604
                          },
                          "start": 595,
                          "end": 604
                        },
                        "start": 581,
                        "end": 604
                      },
                      "start": 579,
                      "end": 604
                    },
                    "start": 578,
                    "end": 604
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 609,
                    "end": 615
                  },
                  "start": 606,
                  "end": 615
                },
                "start": 573,
                "end": 615
              },
              "start": 571,
              "end": 615
            },
            "accessibility": null,
            "static": false,
            "start": 569,
            "end": 616
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 621,
              "end": 623
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
                                  "start": 639,
                                  "end": 643
                                },
                                "typeArguments": null,
                                "start": 639,
                                "end": 643
                              },
                              "start": 637,
                              "end": 643
                            },
                            "start": 634,
                            "end": 643
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
                              "start": 648,
                              "end": 655
                            },
                            "typeArguments": null,
                            "start": 648,
                            "end": 655
                          },
                          "start": 645,
                          "end": 655
                        },
                        "start": 633,
                        "end": 655
                      },
                      "start": 631,
                      "end": 655
                    },
                    "start": 630,
                    "end": 655
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
                      "start": 660,
                      "end": 664
                    },
                    "typeArguments": null,
                    "start": 660,
                    "end": 664
                  },
                  "start": 657,
                  "end": 664
                },
                "start": 625,
                "end": 664
              },
              "start": 623,
              "end": 664
            },
            "accessibility": null,
            "static": false,
            "start": 621,
            "end": 665
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
              "start": 670,
              "end": 672
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
                                  "start": 688,
                                  "end": 692
                                },
                                "typeArguments": null,
                                "start": 688,
                                "end": 692
                              },
                              "start": 686,
                              "end": 692
                            },
                            "start": 683,
                            "end": 692
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
                              "start": 697,
                              "end": 704
                            },
                            "typeArguments": null,
                            "start": 697,
                            "end": 704
                          },
                          "start": 694,
                          "end": 704
                        },
                        "start": 682,
                        "end": 704
                      },
                      "start": 680,
                      "end": 704
                    },
                    "start": 679,
                    "end": 704
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
                              "start": 713,
                              "end": 717
                            },
                            "typeArguments": null,
                            "start": 713,
                            "end": 717
                          },
                          "start": 711,
                          "end": 717
                        },
                        "start": 710,
                        "end": 717
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
                          "start": 722,
                          "end": 729
                        },
                        "typeArguments": null,
                        "start": 722,
                        "end": 729
                      },
                      "start": 719,
                      "end": 729
                    },
                    "start": 709,
                    "end": 729
                  },
                  "start": 706,
                  "end": 729
                },
                "start": 674,
                "end": 729
              },
              "start": 672,
              "end": 729
            },
            "accessibility": null,
            "static": false,
            "start": 670,
            "end": 730
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
              "start": 735,
              "end": 737
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
                                  "start": 753,
                                  "end": 757
                                },
                                "typeArguments": null,
                                "start": 753,
                                "end": 757
                              },
                              "start": 751,
                              "end": 757
                            },
                            "start": 748,
                            "end": 757
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
                              "start": 762,
                              "end": 769
                            },
                            "typeArguments": null,
                            "start": 762,
                            "end": 769
                          },
                          "start": 759,
                          "end": 769
                        },
                        "start": 747,
                        "end": 769
                      },
                      "start": 745,
                      "end": 769
                    },
                    "start": 744,
                    "end": 769
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
                                  "start": 781,
                                  "end": 785
                                },
                                "typeArguments": null,
                                "start": 781,
                                "end": 785
                              },
                              "start": 779,
                              "end": 785
                            },
                            "start": 775,
                            "end": 785
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
                              "start": 790,
                              "end": 797
                            },
                            "typeArguments": null,
                            "start": 790,
                            "end": 797
                          },
                          "start": 787,
                          "end": 797
                        },
                        "start": 774,
                        "end": 797
                      },
                      "start": 772,
                      "end": 797
                    },
                    "start": 771,
                    "end": 797
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
                              "start": 806,
                              "end": 810
                            },
                            "typeArguments": null,
                            "start": 806,
                            "end": 810
                          },
                          "start": 804,
                          "end": 810
                        },
                        "start": 803,
                        "end": 810
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
                          "start": 815,
                          "end": 822
                        },
                        "typeArguments": null,
                        "start": 815,
                        "end": 822
                      },
                      "start": 812,
                      "end": 822
                    },
                    "start": 802,
                    "end": 822
                  },
                  "start": 799,
                  "end": 822
                },
                "start": 739,
                "end": 822
              },
              "start": 737,
              "end": 822
            },
            "accessibility": null,
            "static": false,
            "start": 735,
            "end": 823
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a9",
              "optional": false,
              "typeAnnotation": null,
              "start": 828,
              "end": 830
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
                                  "start": 846,
                                  "end": 850
                                },
                                "typeArguments": null,
                                "start": 846,
                                "end": 850
                              },
                              "start": 844,
                              "end": 850
                            },
                            "start": 841,
                            "end": 850
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
                              "start": 855,
                              "end": 862
                            },
                            "typeArguments": null,
                            "start": 855,
                            "end": 862
                          },
                          "start": 852,
                          "end": 862
                        },
                        "start": 840,
                        "end": 862
                      },
                      "start": 838,
                      "end": 862
                    },
                    "start": 837,
                    "end": 862
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
                                  "start": 874,
                                  "end": 878
                                },
                                "typeArguments": null,
                                "start": 874,
                                "end": 878
                              },
                              "start": 872,
                              "end": 878
                            },
                            "start": 868,
                            "end": 878
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
                              "start": 883,
                              "end": 890
                            },
                            "typeArguments": null,
                            "start": 883,
                            "end": 890
                          },
                          "start": 880,
                          "end": 890
                        },
                        "start": 867,
                        "end": 890
                      },
                      "start": 865,
                      "end": 890
                    },
                    "start": 864,
                    "end": 890
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
                              "start": 899,
                              "end": 903
                            },
                            "typeArguments": null,
                            "start": 899,
                            "end": 903
                          },
                          "start": 897,
                          "end": 903
                        },
                        "start": 896,
                        "end": 903
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
                          "start": 908,
                          "end": 915
                        },
                        "typeArguments": null,
                        "start": 908,
                        "end": 915
                      },
                      "start": 905,
                      "end": 915
                    },
                    "start": 895,
                    "end": 915
                  },
                  "start": 892,
                  "end": 915
                },
                "start": 832,
                "end": 915
              },
              "start": 830,
              "end": 915
            },
            "accessibility": null,
            "static": false,
            "start": 828,
            "end": 916
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
              "start": 921,
              "end": 924
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
                      "start": 934,
                      "end": 935
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
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 937,
                            "end": 944
                          },
                          "typeArguments": null,
                          "start": 937,
                          "end": 944
                        },
                        "start": 937,
                        "end": 946
                      },
                      "start": 935,
                      "end": 946
                    },
                    "value": null,
                    "start": 931,
                    "end": 946
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
                      "start": 951,
                      "end": 958
                    },
                    "typeArguments": null,
                    "start": 951,
                    "end": 958
                  },
                  "start": 948,
                  "end": 958
                },
                "start": 926,
                "end": 958
              },
              "start": 924,
              "end": 958
            },
            "accessibility": null,
            "static": false,
            "start": 921,
            "end": 959
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
              "start": 964,
              "end": 967
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
                              "start": 979,
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
                            "start": 979,
                            "end": 990
                          }
                        ],
                        "start": 977,
                        "end": 992
                      },
                      "start": 975,
                      "end": 992
                    },
                    "start": 974,
                    "end": 992
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
                            "end": 1011
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
                              "start": 1012,
                              "end": 1015
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1017,
                                "end": 1023
                              },
                              "start": 1015,
                              "end": 1023
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1012,
                            "end": 1023
                          }
                        ],
                        "start": 997,
                        "end": 1025
                      },
                      "start": 995,
                      "end": 1025
                    },
                    "start": 994,
                    "end": 1025
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
                      "start": 1030,
                      "end": 1034
                    },
                    "typeArguments": null,
                    "start": 1030,
                    "end": 1034
                  },
                  "start": 1027,
                  "end": 1034
                },
                "start": 969,
                "end": 1034
              },
              "start": 967,
              "end": 1034
            },
            "accessibility": null,
            "static": false,
            "start": 964,
            "end": 1035
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
              "start": 1040,
              "end": 1043
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
                          "start": 1053,
                          "end": 1058
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
                                "start": 1059,
                                "end": 1063
                              },
                              "typeArguments": null,
                              "start": 1059,
                              "end": 1063
                            }
                          ],
                          "start": 1058,
                          "end": 1064
                        },
                        "start": 1053,
                        "end": 1064
                      },
                      "start": 1051,
                      "end": 1064
                    },
                    "start": 1050,
                    "end": 1064
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
                          "start": 1069,
                          "end": 1074
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
                                "start": 1075,
                                "end": 1083
                              },
                              "typeArguments": null,
                              "start": 1075,
                              "end": 1083
                            }
                          ],
                          "start": 1074,
                          "end": 1084
                        },
                        "start": 1069,
                        "end": 1084
                      },
                      "start": 1067,
                      "end": 1084
                    },
                    "start": 1066,
                    "end": 1084
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
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1095,
                            "end": 1102
                          },
                          "typeArguments": null,
                          "start": 1095,
                          "end": 1102
                        }
                      ],
                      "start": 1094,
                      "end": 1103
                    },
                    "start": 1089,
                    "end": 1103
                  },
                  "start": 1086,
                  "end": 1103
                },
                "start": 1045,
                "end": 1103
              },
              "start": 1043,
              "end": 1103
            },
            "accessibility": null,
            "static": false,
            "start": 1040,
            "end": 1104
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a13",
              "optional": false,
              "typeAnnotation": null,
              "start": 1109,
              "end": 1112
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
                          "start": 1122,
                          "end": 1127
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
                                "start": 1128,
                                "end": 1132
                              },
                              "typeArguments": null,
                              "start": 1128,
                              "end": 1132
                            }
                          ],
                          "start": 1127,
                          "end": 1133
                        },
                        "start": 1122,
                        "end": 1133
                      },
                      "start": 1120,
                      "end": 1133
                    },
                    "start": 1119,
                    "end": 1133
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
                          "start": 1138,
                          "end": 1143
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
                                "start": 1144,
                                "end": 1151
                              },
                              "typeArguments": null,
                              "start": 1144,
                              "end": 1151
                            }
                          ],
                          "start": 1143,
                          "end": 1152
                        },
                        "start": 1138,
                        "end": 1152
                      },
                      "start": 1136,
                      "end": 1152
                    },
                    "start": 1135,
                    "end": 1152
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
                      "start": 1157,
                      "end": 1162
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
                            "start": 1163,
                            "end": 1170
                          },
                          "typeArguments": null,
                          "start": 1163,
                          "end": 1170
                        }
                      ],
                      "start": 1162,
                      "end": 1171
                    },
                    "start": 1157,
                    "end": 1171
                  },
                  "start": 1154,
                  "end": 1171
                },
                "start": 1114,
                "end": 1171
              },
              "start": 1112,
              "end": 1171
            },
            "accessibility": null,
            "static": false,
            "start": 1109,
            "end": 1172
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
              "start": 1177,
              "end": 1180
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
                              "start": 1192,
                              "end": 1193
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1195,
                                "end": 1201
                              },
                              "start": 1193,
                              "end": 1201
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1192,
                            "end": 1202
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
                              "start": 1203,
                              "end": 1204
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1206,
                                "end": 1212
                              },
                              "start": 1204,
                              "end": 1212
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1203,
                            "end": 1212
                          }
                        ],
                        "start": 1190,
                        "end": 1214
                      },
                      "start": 1188,
                      "end": 1214
                    },
                    "start": 1187,
                    "end": 1214
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Object",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1219,
                      "end": 1225
                    },
                    "typeArguments": null,
                    "start": 1219,
                    "end": 1225
                  },
                  "start": 1216,
                  "end": 1225
                },
                "start": 1182,
                "end": 1225
              },
              "start": 1180,
              "end": 1225
            },
            "accessibility": null,
            "static": false,
            "start": 1177,
            "end": 1226
          }
        ],
        "start": 395,
        "end": 1228
      },
      "declare": false,
      "start": 383,
      "end": 1228
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 1240,
        "end": 1241
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
            "start": 1250,
            "end": 1251
          },
          "typeArguments": null,
          "start": 1250,
          "end": 1251
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
              "start": 1258,
              "end": 1259
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
                        "start": 1266,
                        "end": 1267
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1266,
                      "end": 1267
                    }
                  ],
                  "start": 1265,
                  "end": 1268
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
                          "start": 1272,
                          "end": 1273
                        },
                        "typeArguments": null,
                        "start": 1272,
                        "end": 1273
                      },
                      "start": 1270,
                      "end": 1273
                    },
                    "start": 1269,
                    "end": 1273
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
                        "start": 1278,
                        "end": 1279
                      },
                      "typeArguments": null,
                      "start": 1278,
                      "end": 1279
                    },
                    "start": 1278,
                    "end": 1281
                  },
                  "start": 1275,
                  "end": 1281
                },
                "start": 1261,
                "end": 1281
              },
              "start": 1259,
              "end": 1281
            },
            "accessibility": null,
            "static": false,
            "start": 1258,
            "end": 1282
          }
        ],
        "start": 1252,
        "end": 1284
      },
      "declare": false,
      "start": 1230,
      "end": 1284
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 1303,
        "end": 1304
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
            "start": 1313,
            "end": 1314
          },
          "typeArguments": null,
          "start": 1313,
          "end": 1314
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
              "start": 1332,
              "end": 1333
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
                        "start": 1340,
                        "end": 1341
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1340,
                      "end": 1341
                    }
                  ],
                  "start": 1339,
                  "end": 1342
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
                          "start": 1346,
                          "end": 1347
                        },
                        "typeArguments": null,
                        "start": 1346,
                        "end": 1347
                      },
                      "start": 1344,
                      "end": 1347
                    },
                    "start": 1343,
                    "end": 1347
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
                        "start": 1352,
                        "end": 1353
                      },
                      "typeArguments": null,
                      "start": 1352,
                      "end": 1353
                    },
                    "start": 1352,
                    "end": 1355
                  },
                  "start": 1349,
                  "end": 1355
                },
                "start": 1335,
                "end": 1355
              },
              "start": 1333,
              "end": 1355
            },
            "accessibility": null,
            "static": false,
            "start": 1332,
            "end": 1356
          },
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
              "start": 1418,
              "end": 1420
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
                        "start": 1427,
                        "end": 1428
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1427,
                      "end": 1428
                    }
                  ],
                  "start": 1426,
                  "end": 1429
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
                          "start": 1433,
                          "end": 1434
                        },
                        "typeArguments": null,
                        "start": 1433,
                        "end": 1434
                      },
                      "start": 1431,
                      "end": 1434
                    },
                    "start": 1430,
                    "end": 1434
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1439,
                      "end": 1445
                    },
                    "start": 1439,
                    "end": 1447
                  },
                  "start": 1436,
                  "end": 1447
                },
                "start": 1422,
                "end": 1447
              },
              "start": 1420,
              "end": 1447
            },
            "accessibility": null,
            "static": false,
            "start": 1418,
            "end": 1448
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1459,
              "end": 1461
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
                        "start": 1468,
                        "end": 1469
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1468,
                      "end": 1469
                    }
                  ],
                  "start": 1467,
                  "end": 1470
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
                          "start": 1474,
                          "end": 1475
                        },
                        "typeArguments": null,
                        "start": 1474,
                        "end": 1475
                      },
                      "start": 1472,
                      "end": 1475
                    },
                    "start": 1471,
                    "end": 1475
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
                      "start": 1480,
                      "end": 1481
                    },
                    "typeArguments": null,
                    "start": 1480,
                    "end": 1481
                  },
                  "start": 1477,
                  "end": 1481
                },
                "start": 1463,
                "end": 1481
              },
              "start": 1461,
              "end": 1481
            },
            "accessibility": null,
            "static": false,
            "start": 1459,
            "end": 1482
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1517,
              "end": 1519
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
                        "start": 1526,
                        "end": 1527
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1526,
                      "end": 1527
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1529,
                        "end": 1530
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1529,
                      "end": 1530
                    }
                  ],
                  "start": 1525,
                  "end": 1531
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
                          "start": 1535,
                          "end": 1536
                        },
                        "typeArguments": null,
                        "start": 1535,
                        "end": 1536
                      },
                      "start": 1533,
                      "end": 1536
                    },
                    "start": 1532,
                    "end": 1536
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
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1541,
                          "end": 1542
                        },
                        "typeArguments": null,
                        "start": 1541,
                        "end": 1542
                      },
                      "start": 1539,
                      "end": 1542
                    },
                    "start": 1538,
                    "end": 1542
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
                      "start": 1547,
                      "end": 1548
                    },
                    "typeArguments": null,
                    "start": 1547,
                    "end": 1548
                  },
                  "start": 1544,
                  "end": 1548
                },
                "start": 1521,
                "end": 1548
              },
              "start": 1519,
              "end": 1548
            },
            "accessibility": null,
            "static": false,
            "start": 1517,
            "end": 1549
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1624,
              "end": 1626
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
                        "start": 1633,
                        "end": 1634
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1633,
                      "end": 1634
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1636,
                        "end": 1637
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1636,
                      "end": 1637
                    }
                  ],
                  "start": 1632,
                  "end": 1638
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
                                  "start": 1648,
                                  "end": 1649
                                },
                                "typeArguments": null,
                                "start": 1648,
                                "end": 1649
                              },
                              "start": 1646,
                              "end": 1649
                            },
                            "start": 1643,
                            "end": 1649
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
                              "start": 1654,
                              "end": 1655
                            },
                            "typeArguments": null,
                            "start": 1654,
                            "end": 1655
                          },
                          "start": 1651,
                          "end": 1655
                        },
                        "start": 1642,
                        "end": 1655
                      },
                      "start": 1640,
                      "end": 1655
                    },
                    "start": 1639,
                    "end": 1655
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
                      "start": 1660,
                      "end": 1661
                    },
                    "typeArguments": null,
                    "start": 1660,
                    "end": 1661
                  },
                  "start": 1657,
                  "end": 1661
                },
                "start": 1628,
                "end": 1661
              },
              "start": 1626,
              "end": 1661
            },
            "accessibility": null,
            "static": false,
            "start": 1624,
            "end": 1662
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1729,
              "end": 1731
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
                        "start": 1738,
                        "end": 1739
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1748,
                          "end": 1752
                        },
                        "typeArguments": null,
                        "start": 1748,
                        "end": 1752
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1738,
                      "end": 1752
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1754,
                        "end": 1755
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1764,
                          "end": 1771
                        },
                        "typeArguments": null,
                        "start": 1764,
                        "end": 1771
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1754,
                      "end": 1771
                    }
                  ],
                  "start": 1737,
                  "end": 1772
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
                                  "start": 1782,
                                  "end": 1783
                                },
                                "typeArguments": null,
                                "start": 1782,
                                "end": 1783
                              },
                              "start": 1780,
                              "end": 1783
                            },
                            "start": 1777,
                            "end": 1783
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
                              "start": 1788,
                              "end": 1789
                            },
                            "typeArguments": null,
                            "start": 1788,
                            "end": 1789
                          },
                          "start": 1785,
                          "end": 1789
                        },
                        "start": 1776,
                        "end": 1789
                      },
                      "start": 1774,
                      "end": 1789
                    },
                    "start": 1773,
                    "end": 1789
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
                      "start": 1794,
                      "end": 1795
                    },
                    "typeArguments": null,
                    "start": 1794,
                    "end": 1795
                  },
                  "start": 1791,
                  "end": 1795
                },
                "start": 1733,
                "end": 1795
              },
              "start": 1731,
              "end": 1795
            },
            "accessibility": null,
            "static": false,
            "start": 1729,
            "end": 1796
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
              "start": 1850,
              "end": 1852
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
                        "start": 1859,
                        "end": 1860
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1869,
                          "end": 1873
                        },
                        "typeArguments": null,
                        "start": 1869,
                        "end": 1873
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1859,
                      "end": 1873
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1875,
                        "end": 1876
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1885,
                          "end": 1892
                        },
                        "typeArguments": null,
                        "start": 1885,
                        "end": 1892
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1875,
                      "end": 1892
                    }
                  ],
                  "start": 1858,
                  "end": 1893
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
                                  "start": 1903,
                                  "end": 1904
                                },
                                "typeArguments": null,
                                "start": 1903,
                                "end": 1904
                              },
                              "start": 1901,
                              "end": 1904
                            },
                            "start": 1898,
                            "end": 1904
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
                              "start": 1909,
                              "end": 1910
                            },
                            "typeArguments": null,
                            "start": 1909,
                            "end": 1910
                          },
                          "start": 1906,
                          "end": 1910
                        },
                        "start": 1897,
                        "end": 1910
                      },
                      "start": 1895,
                      "end": 1910
                    },
                    "start": 1894,
                    "end": 1910
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
                              "start": 1919,
                              "end": 1920
                            },
                            "typeArguments": null,
                            "start": 1919,
                            "end": 1920
                          },
                          "start": 1917,
                          "end": 1920
                        },
                        "start": 1916,
                        "end": 1920
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
                          "start": 1925,
                          "end": 1926
                        },
                        "typeArguments": null,
                        "start": 1925,
                        "end": 1926
                      },
                      "start": 1922,
                      "end": 1926
                    },
                    "start": 1915,
                    "end": 1926
                  },
                  "start": 1912,
                  "end": 1926
                },
                "start": 1854,
                "end": 1926
              },
              "start": 1852,
              "end": 1926
            },
            "accessibility": null,
            "static": false,
            "start": 1850,
            "end": 1927
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
              "start": 1938,
              "end": 1940
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
                        "start": 1947,
                        "end": 1948
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1957,
                          "end": 1961
                        },
                        "typeArguments": null,
                        "start": 1957,
                        "end": 1961
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1947,
                      "end": 1961
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1963,
                        "end": 1964
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1973,
                          "end": 1980
                        },
                        "typeArguments": null,
                        "start": 1973,
                        "end": 1980
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1963,
                      "end": 1980
                    }
                  ],
                  "start": 1946,
                  "end": 1981
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
                                  "start": 1991,
                                  "end": 1992
                                },
                                "typeArguments": null,
                                "start": 1991,
                                "end": 1992
                              },
                              "start": 1989,
                              "end": 1992
                            },
                            "start": 1986,
                            "end": 1992
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
                              "start": 1997,
                              "end": 1998
                            },
                            "typeArguments": null,
                            "start": 1997,
                            "end": 1998
                          },
                          "start": 1994,
                          "end": 1998
                        },
                        "start": 1985,
                        "end": 1998
                      },
                      "start": 1983,
                      "end": 1998
                    },
                    "start": 1982,
                    "end": 1998
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
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2010,
                                  "end": 2011
                                },
                                "typeArguments": null,
                                "start": 2010,
                                "end": 2011
                              },
                              "start": 2008,
                              "end": 2011
                            },
                            "start": 2004,
                            "end": 2011
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
                              "start": 2016,
                              "end": 2017
                            },
                            "typeArguments": null,
                            "start": 2016,
                            "end": 2017
                          },
                          "start": 2013,
                          "end": 2017
                        },
                        "start": 2003,
                        "end": 2017
                      },
                      "start": 2001,
                      "end": 2017
                    },
                    "start": 2000,
                    "end": 2017
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
                              "start": 2026,
                              "end": 2027
                            },
                            "typeArguments": null,
                            "start": 2026,
                            "end": 2027
                          },
                          "start": 2024,
                          "end": 2027
                        },
                        "start": 2023,
                        "end": 2027
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
                          "start": 2032,
                          "end": 2033
                        },
                        "typeArguments": null,
                        "start": 2032,
                        "end": 2033
                      },
                      "start": 2029,
                      "end": 2033
                    },
                    "start": 2022,
                    "end": 2033
                  },
                  "start": 2019,
                  "end": 2033
                },
                "start": 1942,
                "end": 2033
              },
              "start": 1940,
              "end": 2033
            },
            "accessibility": null,
            "static": false,
            "start": 1938,
            "end": 2034
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a9",
              "optional": false,
              "typeAnnotation": null,
              "start": 2045,
              "end": 2047
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
                        "start": 2054,
                        "end": 2055
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2064,
                          "end": 2068
                        },
                        "typeArguments": null,
                        "start": 2064,
                        "end": 2068
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2054,
                      "end": 2068
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2070,
                        "end": 2071
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2080,
                          "end": 2087
                        },
                        "typeArguments": null,
                        "start": 2080,
                        "end": 2087
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2070,
                      "end": 2087
                    }
                  ],
                  "start": 2053,
                  "end": 2088
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
                                  "start": 2098,
                                  "end": 2099
                                },
                                "typeArguments": null,
                                "start": 2098,
                                "end": 2099
                              },
                              "start": 2096,
                              "end": 2099
                            },
                            "start": 2093,
                            "end": 2099
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
                              "start": 2104,
                              "end": 2105
                            },
                            "typeArguments": null,
                            "start": 2104,
                            "end": 2105
                          },
                          "start": 2101,
                          "end": 2105
                        },
                        "start": 2092,
                        "end": 2105
                      },
                      "start": 2090,
                      "end": 2105
                    },
                    "start": 2089,
                    "end": 2105
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
                                      "start": 2119,
                                      "end": 2122
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 2124,
                                        "end": 2130
                                      },
                                      "start": 2122,
                                      "end": 2130
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 2119,
                                    "end": 2131
                                  },
                                  {
                                    "type": "TSPropertySignature",
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "bing",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2132,
                                      "end": 2136
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 2138,
                                        "end": 2144
                                      },
                                      "start": 2136,
                                      "end": 2144
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 2132,
                                    "end": 2144
                                  }
                                ],
                                "start": 2117,
                                "end": 2146
                              },
                              "start": 2115,
                              "end": 2146
                            },
                            "start": 2111,
                            "end": 2146
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
                              "start": 2151,
                              "end": 2152
                            },
                            "typeArguments": null,
                            "start": 2151,
                            "end": 2152
                          },
                          "start": 2148,
                          "end": 2152
                        },
                        "start": 2110,
                        "end": 2152
                      },
                      "start": 2108,
                      "end": 2152
                    },
                    "start": 2107,
                    "end": 2152
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
                      "start": 2164,
                      "end": 2168
                    },
                    "start": 2157,
                    "end": 2168
                  },
                  "start": 2154,
                  "end": 2168
                },
                "start": 2049,
                "end": 2168
              },
              "start": 2047,
              "end": 2168
            },
            "accessibility": null,
            "static": false,
            "start": 2045,
            "end": 2169
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
              "start": 2223,
              "end": 2226
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
                        "start": 2233,
                        "end": 2234
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2243,
                          "end": 2250
                        },
                        "typeArguments": null,
                        "start": 2243,
                        "end": 2250
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2233,
                      "end": 2250
                    }
                  ],
                  "start": 2232,
                  "end": 2251
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
                      "start": 2255,
                      "end": 2256
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
                            "start": 2258,
                            "end": 2259
                          },
                          "typeArguments": null,
                          "start": 2258,
                          "end": 2259
                        },
                        "start": 2258,
                        "end": 2261
                      },
                      "start": 2256,
                      "end": 2261
                    },
                    "value": null,
                    "start": 2252,
                    "end": 2261
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
                      "start": 2266,
                      "end": 2267
                    },
                    "typeArguments": null,
                    "start": 2266,
                    "end": 2267
                  },
                  "start": 2263,
                  "end": 2267
                },
                "start": 2228,
                "end": 2267
              },
              "start": 2226,
              "end": 2267
            },
            "accessibility": null,
            "static": false,
            "start": 2223,
            "end": 2268
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
              "start": 2279,
              "end": 2282
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
                        "start": 2289,
                        "end": 2290
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2299,
                          "end": 2303
                        },
                        "typeArguments": null,
                        "start": 2299,
                        "end": 2303
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2289,
                      "end": 2303
                    }
                  ],
                  "start": 2288,
                  "end": 2304
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
                          "start": 2308,
                          "end": 2309
                        },
                        "typeArguments": null,
                        "start": 2308,
                        "end": 2309
                      },
                      "start": 2306,
                      "end": 2309
                    },
                    "start": 2305,
                    "end": 2309
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
                      "start": 2320,
                      "end": 2321
                    },
                    "typeArguments": null,
                    "start": 2320,
                    "end": 2321
                  },
                  "start": 2317,
                  "end": 2321
                },
                "start": 2284,
                "end": 2321
              },
              "start": 2282,
              "end": 2321
            },
            "accessibility": null,
            "static": false,
            "start": 2279,
            "end": 2322
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
              "start": 2333,
              "end": 2336
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
                        "start": 2343,
                        "end": 2344
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2353,
                          "end": 2358
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
                                "start": 2359,
                                "end": 2363
                              },
                              "typeArguments": null,
                              "start": 2359,
                              "end": 2363
                            }
                          ],
                          "start": 2358,
                          "end": 2364
                        },
                        "start": 2353,
                        "end": 2364
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2343,
                      "end": 2364
                    }
                  ],
                  "start": 2342,
                  "end": 2365
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
                          "start": 2369,
                          "end": 2374
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
                                "start": 2375,
                                "end": 2379
                              },
                              "typeArguments": null,
                              "start": 2375,
                              "end": 2379
                            }
                          ],
                          "start": 2374,
                          "end": 2380
                        },
                        "start": 2369,
                        "end": 2380
                      },
                      "start": 2367,
                      "end": 2380
                    },
                    "start": 2366,
                    "end": 2380
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
                          "start": 2385,
                          "end": 2386
                        },
                        "typeArguments": null,
                        "start": 2385,
                        "end": 2386
                      },
                      "start": 2383,
                      "end": 2386
                    },
                    "start": 2382,
                    "end": 2386
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
                      "start": 2391,
                      "end": 2396
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
                            "start": 2397,
                            "end": 2404
                          },
                          "typeArguments": null,
                          "start": 2397,
                          "end": 2404
                        }
                      ],
                      "start": 2396,
                      "end": 2405
                    },
                    "start": 2391,
                    "end": 2405
                  },
                  "start": 2388,
                  "end": 2405
                },
                "start": 2338,
                "end": 2405
              },
              "start": 2336,
              "end": 2405
            },
            "accessibility": null,
            "static": false,
            "start": 2333,
            "end": 2406
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a13",
              "optional": false,
              "typeAnnotation": null,
              "start": 2447,
              "end": 2450
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
                        "start": 2457,
                        "end": 2458
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2467,
                          "end": 2472
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
                                "start": 2473,
                                "end": 2480
                              },
                              "typeArguments": null,
                              "start": 2473,
                              "end": 2480
                            }
                          ],
                          "start": 2472,
                          "end": 2481
                        },
                        "start": 2467,
                        "end": 2481
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2457,
                      "end": 2481
                    }
                  ],
                  "start": 2456,
                  "end": 2482
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
                          "start": 2486,
                          "end": 2491
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
                                "start": 2492,
                                "end": 2496
                              },
                              "typeArguments": null,
                              "start": 2492,
                              "end": 2496
                            }
                          ],
                          "start": 2491,
                          "end": 2497
                        },
                        "start": 2486,
                        "end": 2497
                      },
                      "start": 2484,
                      "end": 2497
                    },
                    "start": 2483,
                    "end": 2497
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
                          "start": 2502,
                          "end": 2503
                        },
                        "typeArguments": null,
                        "start": 2502,
                        "end": 2503
                      },
                      "start": 2500,
                      "end": 2503
                    },
                    "start": 2499,
                    "end": 2503
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
                      "start": 2508,
                      "end": 2509
                    },
                    "typeArguments": null,
                    "start": 2508,
                    "end": 2509
                  },
                  "start": 2505,
                  "end": 2509
                },
                "start": 2452,
                "end": 2509
              },
              "start": 2450,
              "end": 2509
            },
            "accessibility": null,
            "static": false,
            "start": 2447,
            "end": 2510
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
              "start": 2608,
              "end": 2611
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
                        "start": 2618,
                        "end": 2619
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2618,
                      "end": 2619
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2621,
                        "end": 2622
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2621,
                      "end": 2622
                    }
                  ],
                  "start": 2617,
                  "end": 2623
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
                              "start": 2629,
                              "end": 2630
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
                                  "start": 2632,
                                  "end": 2633
                                },
                                "typeArguments": null,
                                "start": 2632,
                                "end": 2633
                              },
                              "start": 2630,
                              "end": 2633
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2629,
                            "end": 2634
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
                              "start": 2635,
                              "end": 2636
                            },
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
                                  "start": 2638,
                                  "end": 2639
                                },
                                "typeArguments": null,
                                "start": 2638,
                                "end": 2639
                              },
                              "start": 2636,
                              "end": 2639
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2635,
                            "end": 2639
                          }
                        ],
                        "start": 2627,
                        "end": 2641
                      },
                      "start": 2625,
                      "end": 2641
                    },
                    "start": 2624,
                    "end": 2641
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
                      "start": 2646,
                      "end": 2647
                    },
                    "typeArguments": null,
                    "start": 2646,
                    "end": 2647
                  },
                  "start": 2643,
                  "end": 2647
                },
                "start": 2613,
                "end": 2647
              },
              "start": 2611,
              "end": 2647
            },
            "accessibility": null,
            "static": false,
            "start": 2608,
            "end": 2648
          }
        ],
        "start": 1315,
        "end": 2656
      },
      "declare": false,
      "start": 1293,
      "end": 2656
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 212,
  "end": 2656
}
```
