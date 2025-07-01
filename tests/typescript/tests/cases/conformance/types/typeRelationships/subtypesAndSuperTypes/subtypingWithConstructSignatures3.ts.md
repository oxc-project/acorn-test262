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
        "start": 168,
        "end": 174
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
              "start": 187,
              "end": 191
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
                    "start": 194,
                    "end": 197
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 199,
                      "end": 205
                    },
                    "start": 197,
                    "end": 205
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
                  "start": 194,
                  "end": 206
                }
              ],
              "start": 192,
              "end": 208
            },
            "abstract": false,
            "declare": false,
            "start": 181,
            "end": 208
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
              "start": 219,
              "end": 226
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 235,
              "end": 239
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
                    "start": 242,
                    "end": 245
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 247,
                      "end": 253
                    },
                    "start": 245,
                    "end": 253
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
                  "start": 242,
                  "end": 254
                }
              ],
              "start": 240,
              "end": 256
            },
            "abstract": false,
            "declare": false,
            "start": 213,
            "end": 256
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
              "start": 267,
              "end": 275
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 284,
              "end": 291
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
                    "start": 294,
                    "end": 297
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 299,
                      "end": 305
                    },
                    "start": 297,
                    "end": 305
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
                  "start": 294,
                  "end": 306
                }
              ],
              "start": 292,
              "end": 308
            },
            "abstract": false,
            "declare": false,
            "start": 261,
            "end": 308
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
              "start": 319,
              "end": 331
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 340,
              "end": 344
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
                    "start": 347,
                    "end": 351
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 353,
                      "end": 359
                    },
                    "start": 351,
                    "end": 359
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
                  "start": 347,
                  "end": 360
                }
              ],
              "start": 345,
              "end": 362
            },
            "abstract": false,
            "declare": false,
            "start": 313,
            "end": 362
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 385,
              "end": 389
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
                            "start": 402,
                            "end": 408
                          },
                          "start": 400,
                          "end": 408
                        },
                        "start": 399,
                        "end": 408
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 413,
                          "end": 419
                        },
                        "start": 413,
                        "end": 421
                      },
                      "start": 410,
                      "end": 421
                    },
                    "start": 394,
                    "end": 421
                  },
                  "start": 392,
                  "end": 421
                },
                "start": 390,
                "end": 421
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
                  "start": 431,
                  "end": 433
                },
                "typeArguments": null,
                "start": 424,
                "end": 433
              },
              "start": 422,
              "end": 433
            },
            "body": null,
            "expression": false,
            "start": 368,
            "end": 434
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 456,
              "end": 460
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
                    "start": 465,
                    "end": 468
                  },
                  "start": 463,
                  "end": 468
                },
                "start": 461,
                "end": 468
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 471,
                "end": 474
              },
              "start": 469,
              "end": 474
            },
            "body": null,
            "expression": false,
            "start": 439,
            "end": 475
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null,
              "start": 498,
              "end": 502
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
                                      "start": 525,
                                      "end": 529
                                    },
                                    "typeArguments": null,
                                    "start": 525,
                                    "end": 529
                                  },
                                  "start": 523,
                                  "end": 529
                                },
                                "start": 520,
                                "end": 529
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
                                  "start": 534,
                                  "end": 541
                                },
                                "typeArguments": null,
                                "start": 534,
                                "end": 541
                              },
                              "start": 531,
                              "end": 541
                            },
                            "start": 515,
                            "end": 541
                          },
                          "start": 513,
                          "end": 541
                        },
                        "start": 512,
                        "end": 541
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
                                  "start": 554,
                                  "end": 558
                                },
                                "typeArguments": null,
                                "start": 554,
                                "end": 558
                              },
                              "start": 552,
                              "end": 558
                            },
                            "start": 551,
                            "end": 558
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
                              "start": 563,
                              "end": 571
                            },
                            "typeArguments": null,
                            "start": 563,
                            "end": 571
                          },
                          "start": 560,
                          "end": 571
                        },
                        "start": 546,
                        "end": 571
                      },
                      "start": 543,
                      "end": 571
                    },
                    "start": 507,
                    "end": 571
                  },
                  "start": 505,
                  "end": 571
                },
                "start": 503,
                "end": 571
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
                  "start": 581,
                  "end": 583
                },
                "typeArguments": null,
                "start": 574,
                "end": 583
              },
              "start": 572,
              "end": 583
            },
            "body": null,
            "expression": false,
            "start": 481,
            "end": 584
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null,
              "start": 606,
              "end": 610
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
                    "start": 615,
                    "end": 618
                  },
                  "start": 613,
                  "end": 618
                },
                "start": 611,
                "end": 618
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 621,
                "end": 624
              },
              "start": 619,
              "end": 624
            },
            "body": null,
            "expression": false,
            "start": 589,
            "end": 625
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo8",
              "optional": false,
              "typeAnnotation": null,
              "start": 648,
              "end": 652
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
                                      "start": 675,
                                      "end": 679
                                    },
                                    "typeArguments": null,
                                    "start": 675,
                                    "end": 679
                                  },
                                  "start": 673,
                                  "end": 679
                                },
                                "start": 670,
                                "end": 679
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
                                  "start": 684,
                                  "end": 691
                                },
                                "typeArguments": null,
                                "start": 684,
                                "end": 691
                              },
                              "start": 681,
                              "end": 691
                            },
                            "start": 665,
                            "end": 691
                          },
                          "start": 663,
                          "end": 691
                        },
                        "start": 662,
                        "end": 691
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
                                "start": 701,
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
                            "start": 696,
                            "end": 723
                          },
                          "start": 694,
                          "end": 723
                        },
                        "start": 693,
                        "end": 723
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
                                  "start": 736,
                                  "end": 740
                                },
                                "typeArguments": null,
                                "start": 736,
                                "end": 740
                              },
                              "start": 734,
                              "end": 740
                            },
                            "start": 733,
                            "end": 740
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
                              "start": 745,
                              "end": 752
                            },
                            "typeArguments": null,
                            "start": 745,
                            "end": 752
                          },
                          "start": 742,
                          "end": 752
                        },
                        "start": 728,
                        "end": 752
                      },
                      "start": 725,
                      "end": 752
                    },
                    "start": 657,
                    "end": 752
                  },
                  "start": 655,
                  "end": 752
                },
                "start": 653,
                "end": 752
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
                  "start": 762,
                  "end": 764
                },
                "typeArguments": null,
                "start": 755,
                "end": 764
              },
              "start": 753,
              "end": 764
            },
            "body": null,
            "expression": false,
            "start": 631,
            "end": 765
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo8",
              "optional": false,
              "typeAnnotation": null,
              "start": 787,
              "end": 791
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
                    "start": 796,
                    "end": 799
                  },
                  "start": 794,
                  "end": 799
                },
                "start": 792,
                "end": 799
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 802,
                "end": 805
              },
              "start": 800,
              "end": 805
            },
            "body": null,
            "expression": false,
            "start": 770,
            "end": 806
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo10",
              "optional": false,
              "typeAnnotation": null,
              "start": 829,
              "end": 834
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
                          "start": 847,
                          "end": 848
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
                                "start": 850,
                                "end": 854
                              },
                              "typeArguments": null,
                              "start": 850,
                              "end": 854
                            },
                            "start": 850,
                            "end": 856
                          },
                          "start": 848,
                          "end": 856
                        },
                        "value": null,
                        "start": 844,
                        "end": 856
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
                          "start": 861,
                          "end": 865
                        },
                        "typeArguments": null,
                        "start": 861,
                        "end": 865
                      },
                      "start": 858,
                      "end": 865
                    },
                    "start": 839,
                    "end": 865
                  },
                  "start": 837,
                  "end": 865
                },
                "start": 835,
                "end": 865
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
                  "start": 875,
                  "end": 877
                },
                "typeArguments": null,
                "start": 868,
                "end": 877
              },
              "start": 866,
              "end": 877
            },
            "body": null,
            "expression": false,
            "start": 812,
            "end": 878
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo10",
              "optional": false,
              "typeAnnotation": null,
              "start": 900,
              "end": 905
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
                    "start": 910,
                    "end": 913
                  },
                  "start": 908,
                  "end": 913
                },
                "start": 906,
                "end": 913
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 916,
                "end": 919
              },
              "start": 914,
              "end": 919
            },
            "body": null,
            "expression": false,
            "start": 883,
            "end": 920
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo11",
              "optional": false,
              "typeAnnotation": null,
              "start": 943,
              "end": 948
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
                                  "start": 963,
                                  "end": 966
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 968,
                                    "end": 974
                                  },
                                  "start": 966,
                                  "end": 974
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 963,
                                "end": 974
                              }
                            ],
                            "start": 961,
                            "end": 976
                          },
                          "start": 959,
                          "end": 976
                        },
                        "start": 958,
                        "end": 976
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
                                  "start": 983,
                                  "end": 986
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 988,
                                    "end": 994
                                  },
                                  "start": 986,
                                  "end": 994
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 983,
                                "end": 995
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
                                  "start": 996,
                                  "end": 999
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1001,
                                    "end": 1007
                                  },
                                  "start": 999,
                                  "end": 1007
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 996,
                                "end": 1007
                              }
                            ],
                            "start": 981,
                            "end": 1009
                          },
                          "start": 979,
                          "end": 1009
                        },
                        "start": 978,
                        "end": 1009
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
                          "start": 1014,
                          "end": 1018
                        },
                        "typeArguments": null,
                        "start": 1014,
                        "end": 1018
                      },
                      "start": 1011,
                      "end": 1018
                    },
                    "start": 953,
                    "end": 1018
                  },
                  "start": 951,
                  "end": 1018
                },
                "start": 949,
                "end": 1018
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
                  "start": 1028,
                  "end": 1030
                },
                "typeArguments": null,
                "start": 1021,
                "end": 1030
              },
              "start": 1019,
              "end": 1030
            },
            "body": null,
            "expression": false,
            "start": 926,
            "end": 1031
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo11",
              "optional": false,
              "typeAnnotation": null,
              "start": 1053,
              "end": 1058
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
                    "start": 1063,
                    "end": 1066
                  },
                  "start": 1061,
                  "end": 1066
                },
                "start": 1059,
                "end": 1066
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1069,
                "end": 1072
              },
              "start": 1067,
              "end": 1072
            },
            "body": null,
            "expression": false,
            "start": 1036,
            "end": 1073
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo12",
              "optional": false,
              "typeAnnotation": null,
              "start": 1096,
              "end": 1101
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
                              "start": 1114,
                              "end": 1119
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
                                    "start": 1120,
                                    "end": 1124
                                  },
                                  "typeArguments": null,
                                  "start": 1120,
                                  "end": 1124
                                }
                              ],
                              "start": 1119,
                              "end": 1125
                            },
                            "start": 1114,
                            "end": 1125
                          },
                          "start": 1112,
                          "end": 1125
                        },
                        "start": 1111,
                        "end": 1125
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
                              "start": 1130,
                              "end": 1135
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
                                    "start": 1136,
                                    "end": 1144
                                  },
                                  "typeArguments": null,
                                  "start": 1136,
                                  "end": 1144
                                }
                              ],
                              "start": 1135,
                              "end": 1145
                            },
                            "start": 1130,
                            "end": 1145
                          },
                          "start": 1128,
                          "end": 1145
                        },
                        "start": 1127,
                        "end": 1145
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
                          "start": 1150,
                          "end": 1155
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
                                "start": 1156,
                                "end": 1163
                              },
                              "typeArguments": null,
                              "start": 1156,
                              "end": 1163
                            }
                          ],
                          "start": 1155,
                          "end": 1164
                        },
                        "start": 1150,
                        "end": 1164
                      },
                      "start": 1147,
                      "end": 1164
                    },
                    "start": 1106,
                    "end": 1164
                  },
                  "start": 1104,
                  "end": 1164
                },
                "start": 1102,
                "end": 1164
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
                  "start": 1174,
                  "end": 1176
                },
                "typeArguments": null,
                "start": 1167,
                "end": 1176
              },
              "start": 1165,
              "end": 1176
            },
            "body": null,
            "expression": false,
            "start": 1079,
            "end": 1177
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo12",
              "optional": false,
              "typeAnnotation": null,
              "start": 1199,
              "end": 1204
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
                    "start": 1209,
                    "end": 1212
                  },
                  "start": 1207,
                  "end": 1212
                },
                "start": 1205,
                "end": 1212
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1215,
                "end": 1218
              },
              "start": 1213,
              "end": 1218
            },
            "body": null,
            "expression": false,
            "start": 1182,
            "end": 1219
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo15",
              "optional": false,
              "typeAnnotation": null,
              "start": 1242,
              "end": 1247
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
                                  "start": 1262,
                                  "end": 1263
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1265,
                                    "end": 1271
                                  },
                                  "start": 1263,
                                  "end": 1271
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 1262,
                                "end": 1272
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
                                  "start": 1273,
                                  "end": 1274
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1276,
                                    "end": 1282
                                  },
                                  "start": 1274,
                                  "end": 1282
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 1273,
                                "end": 1282
                              }
                            ],
                            "start": 1260,
                            "end": 1284
                          },
                          "start": 1258,
                          "end": 1284
                        },
                        "start": 1257,
                        "end": 1284
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1289,
                        "end": 1295
                      },
                      "start": 1286,
                      "end": 1295
                    },
                    "start": 1252,
                    "end": 1295
                  },
                  "start": 1250,
                  "end": 1295
                },
                "start": 1248,
                "end": 1295
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
                  "start": 1305,
                  "end": 1307
                },
                "typeArguments": null,
                "start": 1298,
                "end": 1307
              },
              "start": 1296,
              "end": 1307
            },
            "body": null,
            "expression": false,
            "start": 1225,
            "end": 1308
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo15",
              "optional": false,
              "typeAnnotation": null,
              "start": 1330,
              "end": 1335
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
                    "start": 1340,
                    "end": 1343
                  },
                  "start": 1338,
                  "end": 1343
                },
                "start": 1336,
                "end": 1343
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1346,
                "end": 1349
              },
              "start": 1344,
              "end": 1349
            },
            "body": null,
            "expression": false,
            "start": 1313,
            "end": 1350
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo16",
              "optional": false,
              "typeAnnotation": null,
              "start": 1373,
              "end": 1378
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
                                            "start": 1521,
                                            "end": 1527
                                          },
                                          "start": 1519,
                                          "end": 1527
                                        },
                                        "start": 1518,
                                        "end": 1527
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 1530,
                                        "end": 1536
                                      },
                                      "start": 1528,
                                      "end": 1536
                                    },
                                    "start": 1513,
                                    "end": 1537
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
                                            "start": 1559,
                                            "end": 1565
                                          },
                                          "start": 1557,
                                          "end": 1565
                                        },
                                        "start": 1555,
                                        "end": 1565
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 1568,
                                        "end": 1574
                                      },
                                      "start": 1566,
                                      "end": 1574
                                    },
                                    "start": 1550,
                                    "end": 1575
                                  }
                                ],
                                "start": 1499,
                                "end": 1585
                              },
                              "start": 1497,
                              "end": 1585
                            },
                            "start": 1496,
                            "end": 1585
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSNumberKeyword",
                              "start": 1588,
                              "end": 1594
                            },
                            "start": 1588,
                            "end": 1596
                          },
                          "start": 1586,
                          "end": 1596
                        },
                        "start": 1491,
                        "end": 1597
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
                                            "start": 1636,
                                            "end": 1643
                                          },
                                          "start": 1634,
                                          "end": 1643
                                        },
                                        "start": 1633,
                                        "end": 1643
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSBooleanKeyword",
                                        "start": 1646,
                                        "end": 1653
                                      },
                                      "start": 1644,
                                      "end": 1653
                                    },
                                    "start": 1628,
                                    "end": 1654
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
                                            "start": 1676,
                                            "end": 1683
                                          },
                                          "start": 1674,
                                          "end": 1683
                                        },
                                        "start": 1672,
                                        "end": 1683
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSBooleanKeyword",
                                        "start": 1686,
                                        "end": 1693
                                      },
                                      "start": 1684,
                                      "end": 1693
                                    },
                                    "start": 1667,
                                    "end": 1694
                                  }
                                ],
                                "start": 1614,
                                "end": 1704
                              },
                              "start": 1612,
                              "end": 1704
                            },
                            "start": 1611,
                            "end": 1704
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSBooleanKeyword",
                              "start": 1707,
                              "end": 1714
                            },
                            "start": 1707,
                            "end": 1716
                          },
                          "start": 1705,
                          "end": 1716
                        },
                        "start": 1606,
                        "end": 1717
                      }
                    ],
                    "start": 1383,
                    "end": 1723
                  },
                  "start": 1381,
                  "end": 1723
                },
                "start": 1379,
                "end": 1723
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
                  "start": 1733,
                  "end": 1735
                },
                "typeArguments": null,
                "start": 1726,
                "end": 1735
              },
              "start": 1724,
              "end": 1735
            },
            "body": null,
            "expression": false,
            "start": 1356,
            "end": 1736
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo16",
              "optional": false,
              "typeAnnotation": null,
              "start": 1758,
              "end": 1763
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
                    "start": 1768,
                    "end": 1771
                  },
                  "start": 1766,
                  "end": 1771
                },
                "start": 1764,
                "end": 1771
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1774,
                "end": 1777
              },
              "start": 1772,
              "end": 1777
            },
            "body": null,
            "expression": false,
            "start": 1741,
            "end": 1778
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo17",
              "optional": false,
              "typeAnnotation": null,
              "start": 1801,
              "end": 1806
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
                                            "start": 1848,
                                            "end": 1849
                                          },
                                          "constraint": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Derived",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1858,
                                              "end": 1865
                                            },
                                            "typeArguments": null,
                                            "start": 1858,
                                            "end": 1865
                                          },
                                          "default": null,
                                          "in": false,
                                          "out": false,
                                          "const": false,
                                          "start": 1848,
                                          "end": 1865
                                        }
                                      ],
                                      "start": 1847,
                                      "end": 1866
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
                                              "start": 1870,
                                              "end": 1871
                                            },
                                            "typeArguments": null,
                                            "start": 1870,
                                            "end": 1871
                                          },
                                          "start": 1868,
                                          "end": 1871
                                        },
                                        "start": 1867,
                                        "end": 1871
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
                                          "start": 1874,
                                          "end": 1875
                                        },
                                        "typeArguments": null,
                                        "start": 1874,
                                        "end": 1875
                                      },
                                      "start": 1872,
                                      "end": 1875
                                    },
                                    "start": 1843,
                                    "end": 1876
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
                                            "start": 1894,
                                            "end": 1895
                                          },
                                          "constraint": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Base",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1904,
                                              "end": 1908
                                            },
                                            "typeArguments": null,
                                            "start": 1904,
                                            "end": 1908
                                          },
                                          "default": null,
                                          "in": false,
                                          "out": false,
                                          "const": false,
                                          "start": 1894,
                                          "end": 1908
                                        }
                                      ],
                                      "start": 1893,
                                      "end": 1909
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
                                              "start": 1913,
                                              "end": 1914
                                            },
                                            "typeArguments": null,
                                            "start": 1913,
                                            "end": 1914
                                          },
                                          "start": 1911,
                                          "end": 1914
                                        },
                                        "start": 1910,
                                        "end": 1914
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
                                          "start": 1917,
                                          "end": 1918
                                        },
                                        "typeArguments": null,
                                        "start": 1917,
                                        "end": 1918
                                      },
                                      "start": 1915,
                                      "end": 1918
                                    },
                                    "start": 1889,
                                    "end": 1919
                                  }
                                ],
                                "start": 1829,
                                "end": 1929
                              },
                              "start": 1827,
                              "end": 1929
                            },
                            "start": 1826,
                            "end": 1929
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 1932,
                              "end": 1935
                            },
                            "start": 1932,
                            "end": 1937
                          },
                          "start": 1930,
                          "end": 1937
                        },
                        "start": 1821,
                        "end": 1938
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
                                            "start": 1974,
                                            "end": 1975
                                          },
                                          "constraint": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Derived2",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1984,
                                              "end": 1992
                                            },
                                            "typeArguments": null,
                                            "start": 1984,
                                            "end": 1992
                                          },
                                          "default": null,
                                          "in": false,
                                          "out": false,
                                          "const": false,
                                          "start": 1974,
                                          "end": 1992
                                        }
                                      ],
                                      "start": 1973,
                                      "end": 1993
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
                                              "start": 1997,
                                              "end": 1998
                                            },
                                            "typeArguments": null,
                                            "start": 1997,
                                            "end": 1998
                                          },
                                          "start": 1995,
                                          "end": 1998
                                        },
                                        "start": 1994,
                                        "end": 1998
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
                                          "start": 2001,
                                          "end": 2002
                                        },
                                        "typeArguments": null,
                                        "start": 2001,
                                        "end": 2002
                                      },
                                      "start": 1999,
                                      "end": 2002
                                    },
                                    "start": 1969,
                                    "end": 2003
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
                                            "start": 2021,
                                            "end": 2022
                                          },
                                          "constraint": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Base",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 2031,
                                              "end": 2035
                                            },
                                            "typeArguments": null,
                                            "start": 2031,
                                            "end": 2035
                                          },
                                          "default": null,
                                          "in": false,
                                          "out": false,
                                          "const": false,
                                          "start": 2021,
                                          "end": 2035
                                        }
                                      ],
                                      "start": 2020,
                                      "end": 2036
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
                                              "start": 2040,
                                              "end": 2041
                                            },
                                            "typeArguments": null,
                                            "start": 2040,
                                            "end": 2041
                                          },
                                          "start": 2038,
                                          "end": 2041
                                        },
                                        "start": 2037,
                                        "end": 2041
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
                                    "start": 2016,
                                    "end": 2046
                                  }
                                ],
                                "start": 1955,
                                "end": 2056
                              },
                              "start": 1953,
                              "end": 2056
                            },
                            "start": 1952,
                            "end": 2056
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 2059,
                              "end": 2062
                            },
                            "start": 2059,
                            "end": 2064
                          },
                          "start": 2057,
                          "end": 2064
                        },
                        "start": 1947,
                        "end": 2065
                      }
                    ],
                    "start": 1811,
                    "end": 2071
                  },
                  "start": 1809,
                  "end": 2071
                },
                "start": 1807,
                "end": 2071
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
                  "start": 2081,
                  "end": 2083
                },
                "typeArguments": null,
                "start": 2074,
                "end": 2083
              },
              "start": 2072,
              "end": 2083
            },
            "body": null,
            "expression": false,
            "start": 1784,
            "end": 2084
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo17",
              "optional": false,
              "typeAnnotation": null,
              "start": 2106,
              "end": 2111
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
                    "start": 2116,
                    "end": 2119
                  },
                  "start": 2114,
                  "end": 2119
                },
                "start": 2112,
                "end": 2119
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2122,
                "end": 2125
              },
              "start": 2120,
              "end": 2125
            },
            "body": null,
            "expression": false,
            "start": 2089,
            "end": 2126
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
                              "start": 2149,
                              "end": 2150
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2149,
                            "end": 2150
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
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
                          }
                        ],
                        "start": 2148,
                        "end": 2154
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
                                "start": 2158,
                                "end": 2159
                              },
                              "typeArguments": null,
                              "start": 2158,
                              "end": 2159
                            },
                            "start": 2156,
                            "end": 2159
                          },
                          "start": 2155,
                          "end": 2159
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
                              "start": 2164,
                              "end": 2165
                            },
                            "typeArguments": null,
                            "start": 2164,
                            "end": 2165
                          },
                          "start": 2164,
                          "end": 2167
                        },
                        "start": 2161,
                        "end": 2167
                      },
                      "start": 2144,
                      "end": 2167
                    },
                    "start": 2142,
                    "end": 2167
                  },
                  "start": 2136,
                  "end": 2167
                },
                "init": null,
                "definite": false,
                "start": 2136,
                "end": 2167
              }
            ],
            "declare": false,
            "start": 2132,
            "end": 2168
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
                              "start": 2193,
                              "end": 2199
                            },
                            "start": 2191,
                            "end": 2199
                          },
                          "start": 2190,
                          "end": 2199
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSStringKeyword",
                            "start": 2204,
                            "end": 2210
                          },
                          "start": 2204,
                          "end": 2212
                        },
                        "start": 2201,
                        "end": 2212
                      },
                      "start": 2185,
                      "end": 2212
                    },
                    "start": 2183,
                    "end": 2212
                  },
                  "start": 2177,
                  "end": 2212
                },
                "init": null,
                "definite": false,
                "start": 2177,
                "end": 2212
              }
            ],
            "declare": false,
            "start": 2173,
            "end": 2213
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
                  "start": 2223,
                  "end": 2225
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2228,
                    "end": 2232
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r1arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2233,
                      "end": 2239
                    }
                  ],
                  "optional": false,
                  "start": 2228,
                  "end": 2240
                },
                "definite": false,
                "start": 2223,
                "end": 2240
              }
            ],
            "declare": false,
            "start": 2219,
            "end": 2241
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
                  "start": 2257,
                  "end": 2260
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
                      "start": 2264,
                      "end": 2270
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r1arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2272,
                      "end": 2278
                    }
                  ],
                  "start": 2263,
                  "end": 2279
                },
                "definite": false,
                "start": 2257,
                "end": 2279
              }
            ],
            "declare": false,
            "start": 2253,
            "end": 2280
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
                  "start": 2289,
                  "end": 2292
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
                      "start": 2296,
                      "end": 2302
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r1arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2304,
                      "end": 2310
                    }
                  ],
                  "start": 2295,
                  "end": 2311
                },
                "definite": false,
                "start": 2289,
                "end": 2311
              }
            ],
            "declare": false,
            "start": 2285,
            "end": 2312
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
                              "start": 2335,
                              "end": 2336
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2345,
                                "end": 2349
                              },
                              "typeArguments": null,
                              "start": 2345,
                              "end": 2349
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2335,
                            "end": 2349
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2351,
                              "end": 2352
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2361,
                                "end": 2368
                              },
                              "typeArguments": null,
                              "start": 2361,
                              "end": 2368
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2351,
                            "end": 2368
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "V",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2370,
                              "end": 2371
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2380,
                                "end": 2388
                              },
                              "typeArguments": null,
                              "start": 2380,
                              "end": 2388
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2370,
                            "end": 2388
                          }
                        ],
                        "start": 2334,
                        "end": 2389
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
                                        "start": 2403,
                                        "end": 2404
                                      },
                                      "typeArguments": null,
                                      "start": 2403,
                                      "end": 2404
                                    },
                                    "start": 2401,
                                    "end": 2404
                                  },
                                  "start": 2398,
                                  "end": 2404
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
                                    "start": 2409,
                                    "end": 2410
                                  },
                                  "typeArguments": null,
                                  "start": 2409,
                                  "end": 2410
                                },
                                "start": 2406,
                                "end": 2410
                              },
                              "start": 2393,
                              "end": 2410
                            },
                            "start": 2391,
                            "end": 2410
                          },
                          "start": 2390,
                          "end": 2410
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
                                    "start": 2423,
                                    "end": 2424
                                  },
                                  "typeArguments": null,
                                  "start": 2423,
                                  "end": 2424
                                },
                                "start": 2421,
                                "end": 2424
                              },
                              "start": 2420,
                              "end": 2424
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
                                "start": 2429,
                                "end": 2430
                              },
                              "typeArguments": null,
                              "start": 2429,
                              "end": 2430
                            },
                            "start": 2426,
                            "end": 2430
                          },
                          "start": 2415,
                          "end": 2430
                        },
                        "start": 2412,
                        "end": 2430
                      },
                      "start": 2330,
                      "end": 2430
                    },
                    "start": 2328,
                    "end": 2430
                  },
                  "start": 2322,
                  "end": 2430
                },
                "init": null,
                "definite": false,
                "start": 2322,
                "end": 2430
              }
            ],
            "declare": false,
            "start": 2318,
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
                                        "start": 2466,
                                        "end": 2470
                                      },
                                      "typeArguments": null,
                                      "start": 2466,
                                      "end": 2470
                                    },
                                    "start": 2464,
                                    "end": 2470
                                  },
                                  "start": 2461,
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
                                    "name": "Derived",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2475,
                                    "end": 2482
                                  },
                                  "typeArguments": null,
                                  "start": 2475,
                                  "end": 2482
                                },
                                "start": 2472,
                                "end": 2482
                              },
                              "start": 2456,
                              "end": 2482
                            },
                            "start": 2454,
                            "end": 2482
                          },
                          "start": 2453,
                          "end": 2482
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
                                    "start": 2495,
                                    "end": 2499
                                  },
                                  "typeArguments": null,
                                  "start": 2495,
                                  "end": 2499
                                },
                                "start": 2493,
                                "end": 2499
                              },
                              "start": 2492,
                              "end": 2499
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
                                "start": 2504,
                                "end": 2512
                              },
                              "typeArguments": null,
                              "start": 2504,
                              "end": 2512
                            },
                            "start": 2501,
                            "end": 2512
                          },
                          "start": 2487,
                          "end": 2512
                        },
                        "start": 2484,
                        "end": 2512
                      },
                      "start": 2448,
                      "end": 2512
                    },
                    "start": 2446,
                    "end": 2512
                  },
                  "start": 2440,
                  "end": 2512
                },
                "init": null,
                "definite": false,
                "start": 2440,
                "end": 2512
              }
            ],
            "declare": false,
            "start": 2436,
            "end": 2513
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
                  "start": 2522,
                  "end": 2524
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2527,
                    "end": 2531
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r2arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2532,
                      "end": 2538
                    }
                  ],
                  "optional": false,
                  "start": 2527,
                  "end": 2539
                },
                "definite": false,
                "start": 2522,
                "end": 2539
              }
            ],
            "declare": false,
            "start": 2518,
            "end": 2540
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
                  "start": 2556,
                  "end": 2559
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
                      "start": 2563,
                      "end": 2569
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r2arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2571,
                      "end": 2577
                    }
                  ],
                  "start": 2562,
                  "end": 2578
                },
                "definite": false,
                "start": 2556,
                "end": 2578
              }
            ],
            "declare": false,
            "start": 2552,
            "end": 2579
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
                  "start": 2588,
                  "end": 2591
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
                      "start": 2595,
                      "end": 2601
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r2arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2603,
                      "end": 2609
                    }
                  ],
                  "start": 2594,
                  "end": 2610
                },
                "definite": false,
                "start": 2588,
                "end": 2610
              }
            ],
            "declare": false,
            "start": 2584,
            "end": 2611
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
                              "start": 2634,
                              "end": 2635
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2644,
                                "end": 2648
                              },
                              "typeArguments": null,
                              "start": 2644,
                              "end": 2648
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2634,
                            "end": 2648
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2650,
                              "end": 2651
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2660,
                                "end": 2667
                              },
                              "typeArguments": null,
                              "start": 2660,
                              "end": 2667
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2650,
                            "end": 2667
                          }
                        ],
                        "start": 2633,
                        "end": 2668
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
                                        "start": 2682,
                                        "end": 2683
                                      },
                                      "typeArguments": null,
                                      "start": 2682,
                                      "end": 2683
                                    },
                                    "start": 2680,
                                    "end": 2683
                                  },
                                  "start": 2677,
                                  "end": 2683
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
                                    "start": 2688,
                                    "end": 2689
                                  },
                                  "typeArguments": null,
                                  "start": 2688,
                                  "end": 2689
                                },
                                "start": 2685,
                                "end": 2689
                              },
                              "start": 2672,
                              "end": 2689
                            },
                            "start": 2670,
                            "end": 2689
                          },
                          "start": 2669,
                          "end": 2689
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
                                            "start": 2703,
                                            "end": 2706
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSNumberKeyword",
                                              "start": 2708,
                                              "end": 2714
                                            },
                                            "start": 2706,
                                            "end": 2714
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 2703,
                                          "end": 2715
                                        }
                                      ],
                                      "start": 2701,
                                      "end": 2717
                                    },
                                    "start": 2699,
                                    "end": 2717
                                  },
                                  "start": 2695,
                                  "end": 2717
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
                                    "start": 2722,
                                    "end": 2723
                                  },
                                  "typeArguments": null,
                                  "start": 2722,
                                  "end": 2723
                                },
                                "start": 2719,
                                "end": 2723
                              },
                              "start": 2694,
                              "end": 2723
                            },
                            "start": 2692,
                            "end": 2723
                          },
                          "start": 2691,
                          "end": 2723
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
                                    "start": 2736,
                                    "end": 2737
                                  },
                                  "typeArguments": null,
                                  "start": 2736,
                                  "end": 2737
                                },
                                "start": 2734,
                                "end": 2737
                              },
                              "start": 2733,
                              "end": 2737
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
                                "start": 2742,
                                "end": 2743
                              },
                              "typeArguments": null,
                              "start": 2742,
                              "end": 2743
                            },
                            "start": 2739,
                            "end": 2743
                          },
                          "start": 2728,
                          "end": 2743
                        },
                        "start": 2725,
                        "end": 2743
                      },
                      "start": 2629,
                      "end": 2743
                    },
                    "start": 2627,
                    "end": 2743
                  },
                  "start": 2621,
                  "end": 2743
                },
                "init": null,
                "definite": false,
                "start": 2621,
                "end": 2743
              }
            ],
            "declare": false,
            "start": 2617,
            "end": 2744
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
                                        "start": 2775,
                                        "end": 2779
                                      },
                                      "typeArguments": null,
                                      "start": 2775,
                                      "end": 2779
                                    },
                                    "start": 2773,
                                    "end": 2779
                                  },
                                  "start": 2770,
                                  "end": 2779
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
                                    "start": 2784,
                                    "end": 2791
                                  },
                                  "typeArguments": null,
                                  "start": 2784,
                                  "end": 2791
                                },
                                "start": 2781,
                                "end": 2791
                              },
                              "start": 2769,
                              "end": 2791
                            },
                            "start": 2767,
                            "end": 2791
                          },
                          "start": 2766,
                          "end": 2791
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
                                        "start": 2807,
                                        "end": 2811
                                      },
                                      "typeArguments": null,
                                      "start": 2807,
                                      "end": 2811
                                    },
                                    "start": 2805,
                                    "end": 2811
                                  },
                                  "start": 2801,
                                  "end": 2811
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
                                    "start": 2816,
                                    "end": 2823
                                  },
                                  "typeArguments": null,
                                  "start": 2816,
                                  "end": 2823
                                },
                                "start": 2813,
                                "end": 2823
                              },
                              "start": 2796,
                              "end": 2823
                            },
                            "start": 2794,
                            "end": 2823
                          },
                          "start": 2793,
                          "end": 2823
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
                                    "start": 2836,
                                    "end": 2840
                                  },
                                  "typeArguments": null,
                                  "start": 2836,
                                  "end": 2840
                                },
                                "start": 2834,
                                "end": 2840
                              },
                              "start": 2833,
                              "end": 2840
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
                                "start": 2845,
                                "end": 2852
                              },
                              "typeArguments": null,
                              "start": 2845,
                              "end": 2852
                            },
                            "start": 2842,
                            "end": 2852
                          },
                          "start": 2828,
                          "end": 2852
                        },
                        "start": 2825,
                        "end": 2852
                      },
                      "start": 2761,
                      "end": 2852
                    },
                    "start": 2759,
                    "end": 2852
                  },
                  "start": 2753,
                  "end": 2852
                },
                "init": null,
                "definite": false,
                "start": 2753,
                "end": 2852
              }
            ],
            "declare": false,
            "start": 2749,
            "end": 2853
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
                  "start": 2862,
                  "end": 2864
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo8",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2867,
                    "end": 2871
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r3arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2872,
                      "end": 2878
                    }
                  ],
                  "optional": false,
                  "start": 2867,
                  "end": 2879
                },
                "definite": false,
                "start": 2862,
                "end": 2879
              }
            ],
            "declare": false,
            "start": 2858,
            "end": 2880
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
                  "start": 2896,
                  "end": 2899
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
                      "start": 2903,
                      "end": 2909
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r3arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2911,
                      "end": 2917
                    }
                  ],
                  "start": 2902,
                  "end": 2918
                },
                "definite": false,
                "start": 2896,
                "end": 2918
              }
            ],
            "declare": false,
            "start": 2892,
            "end": 2919
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
                  "start": 2928,
                  "end": 2931
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
                      "start": 2935,
                      "end": 2941
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r3arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2943,
                      "end": 2949
                    }
                  ],
                  "start": 2934,
                  "end": 2950
                },
                "definite": false,
                "start": 2928,
                "end": 2950
              }
            ],
            "declare": false,
            "start": 2924,
            "end": 2951
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
                              "start": 2974,
                              "end": 2975
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2984,
                                "end": 2991
                              },
                              "typeArguments": null,
                              "start": 2984,
                              "end": 2991
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2974,
                            "end": 2991
                          }
                        ],
                        "start": 2973,
                        "end": 2992
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
                            "start": 2996,
                            "end": 2997
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
                                  "start": 2999,
                                  "end": 3000
                                },
                                "typeArguments": null,
                                "start": 2999,
                                "end": 3000
                              },
                              "start": 2999,
                              "end": 3002
                            },
                            "start": 2997,
                            "end": 3002
                          },
                          "value": null,
                          "start": 2993,
                          "end": 3002
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
                            "start": 3007,
                            "end": 3008
                          },
                          "typeArguments": null,
                          "start": 3007,
                          "end": 3008
                        },
                        "start": 3004,
                        "end": 3008
                      },
                      "start": 2969,
                      "end": 3008
                    },
                    "start": 2967,
                    "end": 3008
                  },
                  "start": 2961,
                  "end": 3008
                },
                "init": null,
                "definite": false,
                "start": 2961,
                "end": 3008
              }
            ],
            "declare": false,
            "start": 2957,
            "end": 3009
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
                            "start": 3034,
                            "end": 3035
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
                                  "start": 3037,
                                  "end": 3041
                                },
                                "typeArguments": null,
                                "start": 3037,
                                "end": 3041
                              },
                              "start": 3037,
                              "end": 3043
                            },
                            "start": 3035,
                            "end": 3043
                          },
                          "value": null,
                          "start": 3031,
                          "end": 3043
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
                            "start": 3048,
                            "end": 3052
                          },
                          "typeArguments": null,
                          "start": 3048,
                          "end": 3052
                        },
                        "start": 3045,
                        "end": 3052
                      },
                      "start": 3026,
                      "end": 3052
                    },
                    "start": 3024,
                    "end": 3052
                  },
                  "start": 3018,
                  "end": 3052
                },
                "init": null,
                "definite": false,
                "start": 3018,
                "end": 3052
              }
            ],
            "declare": false,
            "start": 3014,
            "end": 3053
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
                  "start": 3062,
                  "end": 3064
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo10",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3067,
                    "end": 3072
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r4arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3073,
                      "end": 3079
                    }
                  ],
                  "optional": false,
                  "start": 3067,
                  "end": 3080
                },
                "definite": false,
                "start": 3062,
                "end": 3080
              }
            ],
            "declare": false,
            "start": 3058,
            "end": 3081
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
                  "start": 3097,
                  "end": 3100
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
                      "start": 3104,
                      "end": 3110
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r4arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3112,
                      "end": 3118
                    }
                  ],
                  "start": 3103,
                  "end": 3119
                },
                "definite": false,
                "start": 3097,
                "end": 3119
              }
            ],
            "declare": false,
            "start": 3093,
            "end": 3120
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
                  "start": 3129,
                  "end": 3132
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
                      "start": 3136,
                      "end": 3142
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r4arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3144,
                      "end": 3150
                    }
                  ],
                  "start": 3135,
                  "end": 3151
                },
                "definite": false,
                "start": 3129,
                "end": 3151
              }
            ],
            "declare": false,
            "start": 3125,
            "end": 3152
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
                              "start": 3175,
                              "end": 3176
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3185,
                                "end": 3192
                              },
                              "typeArguments": null,
                              "start": 3185,
                              "end": 3192
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3175,
                            "end": 3192
                          }
                        ],
                        "start": 3174,
                        "end": 3193
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
                                "start": 3197,
                                "end": 3198
                              },
                              "typeArguments": null,
                              "start": 3197,
                              "end": 3198
                            },
                            "start": 3195,
                            "end": 3198
                          },
                          "start": 3194,
                          "end": 3198
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
                                "start": 3203,
                                "end": 3204
                              },
                              "typeArguments": null,
                              "start": 3203,
                              "end": 3204
                            },
                            "start": 3201,
                            "end": 3204
                          },
                          "start": 3200,
                          "end": 3204
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
                            "start": 3209,
                            "end": 3210
                          },
                          "typeArguments": null,
                          "start": 3209,
                          "end": 3210
                        },
                        "start": 3206,
                        "end": 3210
                      },
                      "start": 3170,
                      "end": 3210
                    },
                    "start": 3168,
                    "end": 3210
                  },
                  "start": 3162,
                  "end": 3210
                },
                "init": null,
                "definite": false,
                "start": 3162,
                "end": 3210
              }
            ],
            "declare": false,
            "start": 3158,
            "end": 3211
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
                                    "start": 3238,
                                    "end": 3241
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 3243,
                                      "end": 3249
                                    },
                                    "start": 3241,
                                    "end": 3249
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 3238,
                                  "end": 3249
                                }
                              ],
                              "start": 3236,
                              "end": 3251
                            },
                            "start": 3234,
                            "end": 3251
                          },
                          "start": 3233,
                          "end": 3251
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
                                    "start": 3258,
                                    "end": 3261
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 3263,
                                      "end": 3269
                                    },
                                    "start": 3261,
                                    "end": 3269
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 3258,
                                  "end": 3270
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
                                    "start": 3271,
                                    "end": 3274
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 3276,
                                      "end": 3282
                                    },
                                    "start": 3274,
                                    "end": 3282
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 3271,
                                  "end": 3282
                                }
                              ],
                              "start": 3256,
                              "end": 3284
                            },
                            "start": 3254,
                            "end": 3284
                          },
                          "start": 3253,
                          "end": 3284
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
                            "start": 3289,
                            "end": 3293
                          },
                          "typeArguments": null,
                          "start": 3289,
                          "end": 3293
                        },
                        "start": 3286,
                        "end": 3293
                      },
                      "start": 3228,
                      "end": 3293
                    },
                    "start": 3226,
                    "end": 3293
                  },
                  "start": 3220,
                  "end": 3293
                },
                "init": null,
                "definite": false,
                "start": 3220,
                "end": 3293
              }
            ],
            "declare": false,
            "start": 3216,
            "end": 3294
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
                  "start": 3303,
                  "end": 3305
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo11",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3308,
                    "end": 3313
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r5arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3314,
                      "end": 3320
                    }
                  ],
                  "optional": false,
                  "start": 3308,
                  "end": 3321
                },
                "definite": false,
                "start": 3303,
                "end": 3321
              }
            ],
            "declare": false,
            "start": 3299,
            "end": 3322
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
                  "start": 3338,
                  "end": 3341
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
                      "start": 3345,
                      "end": 3351
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r5arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3353,
                      "end": 3359
                    }
                  ],
                  "start": 3344,
                  "end": 3360
                },
                "definite": false,
                "start": 3338,
                "end": 3360
              }
            ],
            "declare": false,
            "start": 3334,
            "end": 3361
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
                  "start": 3370,
                  "end": 3373
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
                      "start": 3377,
                      "end": 3383
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r5arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3385,
                      "end": 3391
                    }
                  ],
                  "start": 3376,
                  "end": 3392
                },
                "definite": false,
                "start": 3370,
                "end": 3392
              }
            ],
            "declare": false,
            "start": 3366,
            "end": 3393
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
                                "start": 3419,
                                "end": 3424
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
                                      "start": 3425,
                                      "end": 3429
                                    },
                                    "typeArguments": null,
                                    "start": 3425,
                                    "end": 3429
                                  }
                                ],
                                "start": 3424,
                                "end": 3430
                              },
                              "start": 3419,
                              "end": 3430
                            },
                            "start": 3417,
                            "end": 3430
                          },
                          "start": 3416,
                          "end": 3430
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
                                "start": 3435,
                                "end": 3440
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
                                      "start": 3441,
                                      "end": 3449
                                    },
                                    "typeArguments": null,
                                    "start": 3441,
                                    "end": 3449
                                  }
                                ],
                                "start": 3440,
                                "end": 3450
                              },
                              "start": 3435,
                              "end": 3450
                            },
                            "start": 3433,
                            "end": 3450
                          },
                          "start": 3432,
                          "end": 3450
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
                            "start": 3455,
                            "end": 3460
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
                                  "start": 3461,
                                  "end": 3468
                                },
                                "typeArguments": null,
                                "start": 3461,
                                "end": 3468
                              }
                            ],
                            "start": 3460,
                            "end": 3469
                          },
                          "start": 3455,
                          "end": 3469
                        },
                        "start": 3452,
                        "end": 3469
                      },
                      "start": 3411,
                      "end": 3469
                    },
                    "start": 3409,
                    "end": 3469
                  },
                  "start": 3403,
                  "end": 3469
                },
                "init": null,
                "definite": false,
                "start": 3403,
                "end": 3469
              }
            ],
            "declare": false,
            "start": 3399,
            "end": 3470
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
                              "start": 3492,
                              "end": 3493
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Array",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3502,
                                "end": 3507
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
                                      "start": 3508,
                                      "end": 3516
                                    },
                                    "typeArguments": null,
                                    "start": 3508,
                                    "end": 3516
                                  }
                                ],
                                "start": 3507,
                                "end": 3517
                              },
                              "start": 3502,
                              "end": 3517
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3492,
                            "end": 3517
                          }
                        ],
                        "start": 3491,
                        "end": 3518
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
                                "start": 3522,
                                "end": 3527
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
                                      "start": 3528,
                                      "end": 3532
                                    },
                                    "typeArguments": null,
                                    "start": 3528,
                                    "end": 3532
                                  }
                                ],
                                "start": 3527,
                                "end": 3533
                              },
                              "start": 3522,
                              "end": 3533
                            },
                            "start": 3520,
                            "end": 3533
                          },
                          "start": 3519,
                          "end": 3533
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
                                "start": 3538,
                                "end": 3543
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
                                      "start": 3544,
                                      "end": 3548
                                    },
                                    "typeArguments": null,
                                    "start": 3544,
                                    "end": 3548
                                  }
                                ],
                                "start": 3543,
                                "end": 3549
                              },
                              "start": 3538,
                              "end": 3549
                            },
                            "start": 3536,
                            "end": 3549
                          },
                          "start": 3535,
                          "end": 3549
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
                            "start": 3554,
                            "end": 3555
                          },
                          "typeArguments": null,
                          "start": 3554,
                          "end": 3555
                        },
                        "start": 3551,
                        "end": 3555
                      },
                      "start": 3487,
                      "end": 3555
                    },
                    "start": 3485,
                    "end": 3555
                  },
                  "start": 3479,
                  "end": 3555
                },
                "init": null,
                "definite": false,
                "start": 3479,
                "end": 3555
              }
            ],
            "declare": false,
            "start": 3475,
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
                  "name": "r6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3565,
                  "end": 3567
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo12",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3570,
                    "end": 3575
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r6arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3576,
                      "end": 3582
                    }
                  ],
                  "optional": false,
                  "start": 3570,
                  "end": 3583
                },
                "definite": false,
                "start": 3565,
                "end": 3583
              }
            ],
            "declare": false,
            "start": 3561,
            "end": 3584
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
                  "start": 3655,
                  "end": 3658
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
                      "start": 3662,
                      "end": 3668
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r6arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3670,
                      "end": 3676
                    }
                  ],
                  "start": 3661,
                  "end": 3677
                },
                "definite": false,
                "start": 3655,
                "end": 3677
              }
            ],
            "declare": false,
            "start": 3651,
            "end": 3678
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
                  "start": 3687,
                  "end": 3690
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
                      "start": 3694,
                      "end": 3700
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r6arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3702,
                      "end": 3708
                    }
                  ],
                  "start": 3693,
                  "end": 3709
                },
                "definite": false,
                "start": 3687,
                "end": 3709
              }
            ],
            "declare": false,
            "start": 3683,
            "end": 3710
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
                              "start": 3733,
                              "end": 3734
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3733,
                            "end": 3734
                          }
                        ],
                        "start": 3732,
                        "end": 3735
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
                                    "start": 3741,
                                    "end": 3742
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
                                        "start": 3744,
                                        "end": 3745
                                      },
                                      "typeArguments": null,
                                      "start": 3744,
                                      "end": 3745
                                    },
                                    "start": 3742,
                                    "end": 3745
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 3741,
                                  "end": 3746
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
                                    "start": 3747,
                                    "end": 3748
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
                                        "start": 3750,
                                        "end": 3751
                                      },
                                      "typeArguments": null,
                                      "start": 3750,
                                      "end": 3751
                                    },
                                    "start": 3748,
                                    "end": 3751
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 3747,
                                  "end": 3751
                                }
                              ],
                              "start": 3739,
                              "end": 3753
                            },
                            "start": 3737,
                            "end": 3753
                          },
                          "start": 3736,
                          "end": 3753
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
                            "start": 3758,
                            "end": 3759
                          },
                          "typeArguments": null,
                          "start": 3758,
                          "end": 3759
                        },
                        "start": 3755,
                        "end": 3759
                      },
                      "start": 3728,
                      "end": 3759
                    },
                    "start": 3726,
                    "end": 3759
                  },
                  "start": 3720,
                  "end": 3759
                },
                "init": null,
                "definite": false,
                "start": 3720,
                "end": 3759
              }
            ],
            "declare": false,
            "start": 3716,
            "end": 3760
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
                                    "start": 3787,
                                    "end": 3788
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 3790,
                                      "end": 3796
                                    },
                                    "start": 3788,
                                    "end": 3796
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 3787,
                                  "end": 3797
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
                                    "start": 3798,
                                    "end": 3799
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 3801,
                                      "end": 3807
                                    },
                                    "start": 3799,
                                    "end": 3807
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 3798,
                                  "end": 3807
                                }
                              ],
                              "start": 3785,
                              "end": 3809
                            },
                            "start": 3783,
                            "end": 3809
                          },
                          "start": 3782,
                          "end": 3809
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 3814,
                          "end": 3820
                        },
                        "start": 3811,
                        "end": 3820
                      },
                      "start": 3777,
                      "end": 3820
                    },
                    "start": 3775,
                    "end": 3820
                  },
                  "start": 3769,
                  "end": 3820
                },
                "init": null,
                "definite": false,
                "start": 3769,
                "end": 3820
              }
            ],
            "declare": false,
            "start": 3765,
            "end": 3821
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
                  "start": 3830,
                  "end": 3832
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo15",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3835,
                    "end": 3840
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3841,
                      "end": 3847
                    }
                  ],
                  "optional": false,
                  "start": 3835,
                  "end": 3848
                },
                "definite": false,
                "start": 3830,
                "end": 3848
              }
            ],
            "declare": false,
            "start": 3826,
            "end": 3849
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
                  "start": 3911,
                  "end": 3914
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
                      "start": 3918,
                      "end": 3924
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3926,
                      "end": 3932
                    }
                  ],
                  "start": 3917,
                  "end": 3933
                },
                "definite": false,
                "start": 3911,
                "end": 3933
              }
            ],
            "declare": false,
            "start": 3907,
            "end": 3934
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
                  "start": 3943,
                  "end": 3946
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
                      "start": 3950,
                      "end": 3956
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3958,
                      "end": 3964
                    }
                  ],
                  "start": 3949,
                  "end": 3965
                },
                "definite": false,
                "start": 3943,
                "end": 3965
              }
            ],
            "declare": false,
            "start": 3939,
            "end": 3966
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
                              "start": 3989,
                              "end": 3990
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3999,
                                "end": 4003
                              },
                              "typeArguments": null,
                              "start": 3999,
                              "end": 4003
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3989,
                            "end": 4003
                          }
                        ],
                        "start": 3988,
                        "end": 4004
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
                                    "start": 4010,
                                    "end": 4011
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
                                        "start": 4013,
                                        "end": 4014
                                      },
                                      "typeArguments": null,
                                      "start": 4013,
                                      "end": 4014
                                    },
                                    "start": 4011,
                                    "end": 4014
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 4010,
                                  "end": 4015
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
                                    "start": 4016,
                                    "end": 4017
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
                                        "start": 4019,
                                        "end": 4020
                                      },
                                      "typeArguments": null,
                                      "start": 4019,
                                      "end": 4020
                                    },
                                    "start": 4017,
                                    "end": 4020
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 4016,
                                  "end": 4020
                                }
                              ],
                              "start": 4008,
                              "end": 4022
                            },
                            "start": 4006,
                            "end": 4022
                          },
                          "start": 4005,
                          "end": 4022
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 4027,
                          "end": 4033
                        },
                        "start": 4024,
                        "end": 4033
                      },
                      "start": 3984,
                      "end": 4033
                    },
                    "start": 3982,
                    "end": 4033
                  },
                  "start": 3976,
                  "end": 4033
                },
                "init": null,
                "definite": false,
                "start": 3976,
                "end": 4033
              }
            ],
            "declare": false,
            "start": 3972,
            "end": 4034
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
                  "start": 4043,
                  "end": 4046
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo15",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4049,
                    "end": 4054
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4055,
                      "end": 4061
                    }
                  ],
                  "optional": false,
                  "start": 4049,
                  "end": 4062
                },
                "definite": false,
                "start": 4043,
                "end": 4062
              }
            ],
            "declare": false,
            "start": 4039,
            "end": 4063
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
                  "start": 4079,
                  "end": 4082
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
                      "start": 4086,
                      "end": 4092
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4094,
                      "end": 4100
                    }
                  ],
                  "start": 4085,
                  "end": 4101
                },
                "definite": false,
                "start": 4079,
                "end": 4101
              }
            ],
            "declare": false,
            "start": 4075,
            "end": 4102
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
                  "start": 4111,
                  "end": 4114
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
                      "start": 4118,
                      "end": 4124
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4126,
                      "end": 4132
                    }
                  ],
                  "start": 4117,
                  "end": 4133
                },
                "definite": false,
                "start": 4111,
                "end": 4133
              }
            ],
            "declare": false,
            "start": 4107,
            "end": 4134
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
                              "start": 4156,
                              "end": 4157
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4156,
                            "end": 4157
                          }
                        ],
                        "start": 4155,
                        "end": 4158
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
                                        "start": 4170,
                                        "end": 4171
                                      },
                                      "typeArguments": null,
                                      "start": 4170,
                                      "end": 4171
                                    },
                                    "start": 4168,
                                    "end": 4171
                                  },
                                  "start": 4167,
                                  "end": 4171
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
                                    "start": 4176,
                                    "end": 4177
                                  },
                                  "typeArguments": null,
                                  "start": 4176,
                                  "end": 4177
                                },
                                "start": 4173,
                                "end": 4177
                              },
                              "start": 4162,
                              "end": 4177
                            },
                            "start": 4160,
                            "end": 4177
                          },
                          "start": 4159,
                          "end": 4177
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
                              "start": 4182,
                              "end": 4183
                            },
                            "typeArguments": null,
                            "start": 4182,
                            "end": 4183
                          },
                          "start": 4182,
                          "end": 4185
                        },
                        "start": 4179,
                        "end": 4185
                      },
                      "start": 4151,
                      "end": 4185
                    },
                    "start": 4149,
                    "end": 4185
                  },
                  "start": 4144,
                  "end": 4185
                },
                "init": null,
                "definite": false,
                "start": 4144,
                "end": 4185
              }
            ],
            "declare": false,
            "start": 4140,
            "end": 4186
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
                  "start": 4195,
                  "end": 4197
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo16",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4200,
                    "end": 4205
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r8arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4206,
                      "end": 4211
                    }
                  ],
                  "optional": false,
                  "start": 4200,
                  "end": 4212
                },
                "definite": false,
                "start": 4195,
                "end": 4212
              }
            ],
            "declare": false,
            "start": 4191,
            "end": 4213
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
                              "start": 4242,
                              "end": 4243
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4242,
                            "end": 4243
                          }
                        ],
                        "start": 4241,
                        "end": 4244
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
                                        "start": 4256,
                                        "end": 4257
                                      },
                                      "typeArguments": null,
                                      "start": 4256,
                                      "end": 4257
                                    },
                                    "start": 4254,
                                    "end": 4257
                                  },
                                  "start": 4253,
                                  "end": 4257
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
                                    "start": 4262,
                                    "end": 4263
                                  },
                                  "typeArguments": null,
                                  "start": 4262,
                                  "end": 4263
                                },
                                "start": 4259,
                                "end": 4263
                              },
                              "start": 4248,
                              "end": 4263
                            },
                            "start": 4246,
                            "end": 4263
                          },
                          "start": 4245,
                          "end": 4263
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSAnyKeyword",
                            "start": 4268,
                            "end": 4271
                          },
                          "start": 4268,
                          "end": 4273
                        },
                        "start": 4265,
                        "end": 4273
                      },
                      "start": 4237,
                      "end": 4273
                    },
                    "start": 4235,
                    "end": 4273
                  },
                  "start": 4230,
                  "end": 4273
                },
                "init": null,
                "definite": false,
                "start": 4230,
                "end": 4273
              }
            ],
            "declare": false,
            "start": 4226,
            "end": 4274
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
                  "start": 4283,
                  "end": 4285
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo17",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4288,
                    "end": 4293
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r9arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4294,
                      "end": 4299
                    }
                  ],
                  "optional": false,
                  "start": 4288,
                  "end": 4300
                },
                "definite": false,
                "start": 4283,
                "end": 4300
              }
            ],
            "declare": false,
            "start": 4279,
            "end": 4301
          }
        ],
        "start": 175,
        "end": 4460
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 161,
      "end": 4460
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WithGenericSignaturesInBaseType",
        "optional": false,
        "typeAnnotation": null,
        "start": 4469,
        "end": 4500
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
              "start": 4524,
              "end": 4528
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
                            "start": 4538,
                            "end": 4539
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 4538,
                          "end": 4539
                        }
                      ],
                      "start": 4537,
                      "end": 4540
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
                              "start": 4544,
                              "end": 4545
                            },
                            "typeArguments": null,
                            "start": 4544,
                            "end": 4545
                          },
                          "start": 4542,
                          "end": 4545
                        },
                        "start": 4541,
                        "end": 4545
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
                            "start": 4550,
                            "end": 4551
                          },
                          "typeArguments": null,
                          "start": 4550,
                          "end": 4551
                        },
                        "start": 4550,
                        "end": 4553
                      },
                      "start": 4547,
                      "end": 4553
                    },
                    "start": 4533,
                    "end": 4553
                  },
                  "start": 4531,
                  "end": 4553
                },
                "start": 4529,
                "end": 4553
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
                  "start": 4563,
                  "end": 4565
                },
                "typeArguments": null,
                "start": 4556,
                "end": 4565
              },
              "start": 4554,
              "end": 4565
            },
            "body": null,
            "expression": false,
            "start": 4507,
            "end": 4566
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4588,
              "end": 4592
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
                    "start": 4597,
                    "end": 4600
                  },
                  "start": 4595,
                  "end": 4600
                },
                "start": 4593,
                "end": 4600
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4603,
                "end": 4606
              },
              "start": 4601,
              "end": 4606
            },
            "body": null,
            "expression": false,
            "start": 4571,
            "end": 4607
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
                              "start": 4629,
                              "end": 4630
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4629,
                            "end": 4630
                          }
                        ],
                        "start": 4628,
                        "end": 4631
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
                                "start": 4635,
                                "end": 4636
                              },
                              "typeArguments": null,
                              "start": 4635,
                              "end": 4636
                            },
                            "start": 4633,
                            "end": 4636
                          },
                          "start": 4632,
                          "end": 4636
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSStringKeyword",
                            "start": 4641,
                            "end": 4647
                          },
                          "start": 4641,
                          "end": 4649
                        },
                        "start": 4638,
                        "end": 4649
                      },
                      "start": 4624,
                      "end": 4649
                    },
                    "start": 4622,
                    "end": 4649
                  },
                  "start": 4616,
                  "end": 4649
                },
                "init": null,
                "definite": false,
                "start": 4616,
                "end": 4649
              }
            ],
            "declare": false,
            "start": 4612,
            "end": 4650
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
                  "start": 4659,
                  "end": 4661
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4664,
                    "end": 4668
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r2arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4669,
                      "end": 4675
                    }
                  ],
                  "optional": false,
                  "start": 4664,
                  "end": 4676
                },
                "definite": false,
                "start": 4659,
                "end": 4676
              }
            ],
            "declare": false,
            "start": 4655,
            "end": 4677
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 4766,
              "end": 4770
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
                            "start": 4780,
                            "end": 4781
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 4780,
                          "end": 4781
                        }
                      ],
                      "start": 4779,
                      "end": 4782
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
                              "start": 4786,
                              "end": 4787
                            },
                            "typeArguments": null,
                            "start": 4786,
                            "end": 4787
                          },
                          "start": 4784,
                          "end": 4787
                        },
                        "start": 4783,
                        "end": 4787
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 4792,
                          "end": 4798
                        },
                        "start": 4792,
                        "end": 4800
                      },
                      "start": 4789,
                      "end": 4800
                    },
                    "start": 4775,
                    "end": 4800
                  },
                  "start": 4773,
                  "end": 4800
                },
                "start": 4771,
                "end": 4800
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
                  "start": 4810,
                  "end": 4812
                },
                "typeArguments": null,
                "start": 4803,
                "end": 4812
              },
              "start": 4801,
              "end": 4812
            },
            "body": null,
            "expression": false,
            "start": 4749,
            "end": 4813
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 4835,
              "end": 4839
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
                    "start": 4844,
                    "end": 4847
                  },
                  "start": 4842,
                  "end": 4847
                },
                "start": 4840,
                "end": 4847
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4850,
                "end": 4853
              },
              "start": 4848,
              "end": 4853
            },
            "body": null,
            "expression": false,
            "start": 4818,
            "end": 4854
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
                              "start": 4876,
                              "end": 4877
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4876,
                            "end": 4877
                          }
                        ],
                        "start": 4875,
                        "end": 4878
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
                                "start": 4882,
                                "end": 4883
                              },
                              "typeArguments": null,
                              "start": 4882,
                              "end": 4883
                            },
                            "start": 4880,
                            "end": 4883
                          },
                          "start": 4879,
                          "end": 4883
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
                              "start": 4888,
                              "end": 4889
                            },
                            "typeArguments": null,
                            "start": 4888,
                            "end": 4889
                          },
                          "start": 4888,
                          "end": 4891
                        },
                        "start": 4885,
                        "end": 4891
                      },
                      "start": 4871,
                      "end": 4891
                    },
                    "start": 4869,
                    "end": 4891
                  },
                  "start": 4863,
                  "end": 4891
                },
                "init": null,
                "definite": false,
                "start": 4863,
                "end": 4891
              }
            ],
            "declare": false,
            "start": 4859,
            "end": 4892
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
                  "start": 4901,
                  "end": 4903
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4906,
                    "end": 4910
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r3arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4911,
                      "end": 4917
                    }
                  ],
                  "optional": false,
                  "start": 4906,
                  "end": 4918
                },
                "definite": false,
                "start": 4901,
                "end": 4918
              }
            ],
            "declare": false,
            "start": 4897,
            "end": 4919
          }
        ],
        "start": 4501,
        "end": 4928
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 4462,
      "end": 4928
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 161,
  "end": 4928
}
```
