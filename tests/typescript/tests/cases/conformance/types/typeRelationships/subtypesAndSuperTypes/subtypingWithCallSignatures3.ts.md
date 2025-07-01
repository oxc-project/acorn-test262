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
                            "start": 398,
                            "end": 404
                          },
                          "start": 396,
                          "end": 404
                        },
                        "start": 395,
                        "end": 404
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 409,
                          "end": 415
                        },
                        "start": 409,
                        "end": 417
                      },
                      "start": 406,
                      "end": 417
                    },
                    "start": 394,
                    "end": 417
                  },
                  "start": 392,
                  "end": 417
                },
                "start": 390,
                "end": 417
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
                  "start": 427,
                  "end": 429
                },
                "typeArguments": null,
                "start": 420,
                "end": 429
              },
              "start": 418,
              "end": 429
            },
            "body": null,
            "expression": false,
            "start": 368,
            "end": 430
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 452,
              "end": 456
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
                    "start": 461,
                    "end": 464
                  },
                  "start": 459,
                  "end": 464
                },
                "start": 457,
                "end": 464
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 467,
                "end": 470
              },
              "start": 465,
              "end": 470
            },
            "body": null,
            "expression": false,
            "start": 435,
            "end": 471
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null,
              "start": 494,
              "end": 498
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
                                      "start": 513,
                                      "end": 517
                                    },
                                    "typeArguments": null,
                                    "start": 513,
                                    "end": 517
                                  },
                                  "start": 511,
                                  "end": 517
                                },
                                "start": 508,
                                "end": 517
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
                                  "start": 522,
                                  "end": 529
                                },
                                "typeArguments": null,
                                "start": 522,
                                "end": 529
                              },
                              "start": 519,
                              "end": 529
                            },
                            "start": 507,
                            "end": 529
                          },
                          "start": 505,
                          "end": 529
                        },
                        "start": 504,
                        "end": 529
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
                                  "start": 538,
                                  "end": 542
                                },
                                "typeArguments": null,
                                "start": 538,
                                "end": 542
                              },
                              "start": 536,
                              "end": 542
                            },
                            "start": 535,
                            "end": 542
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
                              "start": 547,
                              "end": 555
                            },
                            "typeArguments": null,
                            "start": 547,
                            "end": 555
                          },
                          "start": 544,
                          "end": 555
                        },
                        "start": 534,
                        "end": 555
                      },
                      "start": 531,
                      "end": 555
                    },
                    "start": 503,
                    "end": 555
                  },
                  "start": 501,
                  "end": 555
                },
                "start": 499,
                "end": 555
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
                  "start": 565,
                  "end": 567
                },
                "typeArguments": null,
                "start": 558,
                "end": 567
              },
              "start": 556,
              "end": 567
            },
            "body": null,
            "expression": false,
            "start": 477,
            "end": 568
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null,
              "start": 590,
              "end": 594
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
                    "start": 599,
                    "end": 602
                  },
                  "start": 597,
                  "end": 602
                },
                "start": 595,
                "end": 602
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 605,
                "end": 608
              },
              "start": 603,
              "end": 608
            },
            "body": null,
            "expression": false,
            "start": 573,
            "end": 609
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo8",
              "optional": false,
              "typeAnnotation": null,
              "start": 632,
              "end": 636
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
                                      "start": 651,
                                      "end": 655
                                    },
                                    "typeArguments": null,
                                    "start": 651,
                                    "end": 655
                                  },
                                  "start": 649,
                                  "end": 655
                                },
                                "start": 646,
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
                                  "name": "Derived",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 660,
                                  "end": 667
                                },
                                "typeArguments": null,
                                "start": 660,
                                "end": 667
                              },
                              "start": 657,
                              "end": 667
                            },
                            "start": 645,
                            "end": 667
                          },
                          "start": 643,
                          "end": 667
                        },
                        "start": 642,
                        "end": 667
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
                                      "start": 679,
                                      "end": 683
                                    },
                                    "typeArguments": null,
                                    "start": 679,
                                    "end": 683
                                  },
                                  "start": 677,
                                  "end": 683
                                },
                                "start": 673,
                                "end": 683
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
                                  "start": 688,
                                  "end": 695
                                },
                                "typeArguments": null,
                                "start": 688,
                                "end": 695
                              },
                              "start": 685,
                              "end": 695
                            },
                            "start": 672,
                            "end": 695
                          },
                          "start": 670,
                          "end": 695
                        },
                        "start": 669,
                        "end": 695
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
                                  "start": 704,
                                  "end": 708
                                },
                                "typeArguments": null,
                                "start": 704,
                                "end": 708
                              },
                              "start": 702,
                              "end": 708
                            },
                            "start": 701,
                            "end": 708
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
                              "start": 713,
                              "end": 720
                            },
                            "typeArguments": null,
                            "start": 713,
                            "end": 720
                          },
                          "start": 710,
                          "end": 720
                        },
                        "start": 700,
                        "end": 720
                      },
                      "start": 697,
                      "end": 720
                    },
                    "start": 641,
                    "end": 720
                  },
                  "start": 639,
                  "end": 720
                },
                "start": 637,
                "end": 720
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
                  "start": 730,
                  "end": 732
                },
                "typeArguments": null,
                "start": 723,
                "end": 732
              },
              "start": 721,
              "end": 732
            },
            "body": null,
            "expression": false,
            "start": 615,
            "end": 733
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo8",
              "optional": false,
              "typeAnnotation": null,
              "start": 755,
              "end": 759
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
                    "start": 764,
                    "end": 767
                  },
                  "start": 762,
                  "end": 767
                },
                "start": 760,
                "end": 767
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 770,
                "end": 773
              },
              "start": 768,
              "end": 773
            },
            "body": null,
            "expression": false,
            "start": 738,
            "end": 774
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo10",
              "optional": false,
              "typeAnnotation": null,
              "start": 797,
              "end": 802
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
                          "start": 811,
                          "end": 812
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
                                "start": 814,
                                "end": 818
                              },
                              "typeArguments": null,
                              "start": 814,
                              "end": 818
                            },
                            "start": 814,
                            "end": 820
                          },
                          "start": 812,
                          "end": 820
                        },
                        "value": null,
                        "start": 808,
                        "end": 820
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
                          "start": 825,
                          "end": 829
                        },
                        "typeArguments": null,
                        "start": 825,
                        "end": 829
                      },
                      "start": 822,
                      "end": 829
                    },
                    "start": 807,
                    "end": 829
                  },
                  "start": 805,
                  "end": 829
                },
                "start": 803,
                "end": 829
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
                  "start": 839,
                  "end": 841
                },
                "typeArguments": null,
                "start": 832,
                "end": 841
              },
              "start": 830,
              "end": 841
            },
            "body": null,
            "expression": false,
            "start": 780,
            "end": 842
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo10",
              "optional": false,
              "typeAnnotation": null,
              "start": 864,
              "end": 869
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
                    "start": 874,
                    "end": 877
                  },
                  "start": 872,
                  "end": 877
                },
                "start": 870,
                "end": 877
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 880,
                "end": 883
              },
              "start": 878,
              "end": 883
            },
            "body": null,
            "expression": false,
            "start": 847,
            "end": 884
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo11",
              "optional": false,
              "typeAnnotation": null,
              "start": 907,
              "end": 912
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
                                  "start": 923,
                                  "end": 926
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 928,
                                    "end": 934
                                  },
                                  "start": 926,
                                  "end": 934
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 923,
                                "end": 934
                              }
                            ],
                            "start": 921,
                            "end": 936
                          },
                          "start": 919,
                          "end": 936
                        },
                        "start": 918,
                        "end": 936
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
                                  "start": 943,
                                  "end": 946
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 948,
                                    "end": 954
                                  },
                                  "start": 946,
                                  "end": 954
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 943,
                                "end": 955
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
                                  "start": 956,
                                  "end": 959
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 961,
                                    "end": 967
                                  },
                                  "start": 959,
                                  "end": 967
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 956,
                                "end": 967
                              }
                            ],
                            "start": 941,
                            "end": 969
                          },
                          "start": 939,
                          "end": 969
                        },
                        "start": 938,
                        "end": 969
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
                          "start": 974,
                          "end": 978
                        },
                        "typeArguments": null,
                        "start": 974,
                        "end": 978
                      },
                      "start": 971,
                      "end": 978
                    },
                    "start": 917,
                    "end": 978
                  },
                  "start": 915,
                  "end": 978
                },
                "start": 913,
                "end": 978
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
                  "start": 988,
                  "end": 990
                },
                "typeArguments": null,
                "start": 981,
                "end": 990
              },
              "start": 979,
              "end": 990
            },
            "body": null,
            "expression": false,
            "start": 890,
            "end": 991
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo11",
              "optional": false,
              "typeAnnotation": null,
              "start": 1013,
              "end": 1018
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
                    "start": 1023,
                    "end": 1026
                  },
                  "start": 1021,
                  "end": 1026
                },
                "start": 1019,
                "end": 1026
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1029,
                "end": 1032
              },
              "start": 1027,
              "end": 1032
            },
            "body": null,
            "expression": false,
            "start": 996,
            "end": 1033
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo12",
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
                              "start": 1070,
                              "end": 1075
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
                                    "start": 1076,
                                    "end": 1080
                                  },
                                  "typeArguments": null,
                                  "start": 1076,
                                  "end": 1080
                                }
                              ],
                              "start": 1075,
                              "end": 1081
                            },
                            "start": 1070,
                            "end": 1081
                          },
                          "start": 1068,
                          "end": 1081
                        },
                        "start": 1067,
                        "end": 1081
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
                              "start": 1086,
                              "end": 1091
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
                                    "start": 1092,
                                    "end": 1100
                                  },
                                  "typeArguments": null,
                                  "start": 1092,
                                  "end": 1100
                                }
                              ],
                              "start": 1091,
                              "end": 1101
                            },
                            "start": 1086,
                            "end": 1101
                          },
                          "start": 1084,
                          "end": 1101
                        },
                        "start": 1083,
                        "end": 1101
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
                          "start": 1106,
                          "end": 1111
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
                                "start": 1112,
                                "end": 1119
                              },
                              "typeArguments": null,
                              "start": 1112,
                              "end": 1119
                            }
                          ],
                          "start": 1111,
                          "end": 1120
                        },
                        "start": 1106,
                        "end": 1120
                      },
                      "start": 1103,
                      "end": 1120
                    },
                    "start": 1066,
                    "end": 1120
                  },
                  "start": 1064,
                  "end": 1120
                },
                "start": 1062,
                "end": 1120
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
                  "start": 1130,
                  "end": 1132
                },
                "typeArguments": null,
                "start": 1123,
                "end": 1132
              },
              "start": 1121,
              "end": 1132
            },
            "body": null,
            "expression": false,
            "start": 1039,
            "end": 1133
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo12",
              "optional": false,
              "typeAnnotation": null,
              "start": 1155,
              "end": 1160
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
                    "start": 1165,
                    "end": 1168
                  },
                  "start": 1163,
                  "end": 1168
                },
                "start": 1161,
                "end": 1168
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1171,
                "end": 1174
              },
              "start": 1169,
              "end": 1174
            },
            "body": null,
            "expression": false,
            "start": 1138,
            "end": 1175
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo15",
              "optional": false,
              "typeAnnotation": null,
              "start": 1198,
              "end": 1203
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
                                  "start": 1214,
                                  "end": 1215
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1217,
                                    "end": 1223
                                  },
                                  "start": 1215,
                                  "end": 1223
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 1214,
                                "end": 1224
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
                                  "start": 1225,
                                  "end": 1226
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1228,
                                    "end": 1234
                                  },
                                  "start": 1226,
                                  "end": 1234
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 1225,
                                "end": 1234
                              }
                            ],
                            "start": 1212,
                            "end": 1236
                          },
                          "start": 1210,
                          "end": 1236
                        },
                        "start": 1209,
                        "end": 1236
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1241,
                        "end": 1247
                      },
                      "start": 1238,
                      "end": 1247
                    },
                    "start": 1208,
                    "end": 1247
                  },
                  "start": 1206,
                  "end": 1247
                },
                "start": 1204,
                "end": 1247
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
                  "start": 1257,
                  "end": 1259
                },
                "typeArguments": null,
                "start": 1250,
                "end": 1259
              },
              "start": 1248,
              "end": 1259
            },
            "body": null,
            "expression": false,
            "start": 1181,
            "end": 1260
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo15",
              "optional": false,
              "typeAnnotation": null,
              "start": 1282,
              "end": 1287
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
                    "start": 1292,
                    "end": 1295
                  },
                  "start": 1290,
                  "end": 1295
                },
                "start": 1288,
                "end": 1295
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1298,
                "end": 1301
              },
              "start": 1296,
              "end": 1301
            },
            "body": null,
            "expression": false,
            "start": 1265,
            "end": 1302
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo16",
              "optional": false,
              "typeAnnotation": null,
              "start": 1325,
              "end": 1330
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
                                            "start": 1465,
                                            "end": 1471
                                          },
                                          "start": 1463,
                                          "end": 1471
                                        },
                                        "start": 1462,
                                        "end": 1471
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 1474,
                                        "end": 1480
                                      },
                                      "start": 1472,
                                      "end": 1480
                                    },
                                    "start": 1461,
                                    "end": 1481
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
                                            "start": 1499,
                                            "end": 1505
                                          },
                                          "start": 1497,
                                          "end": 1505
                                        },
                                        "start": 1495,
                                        "end": 1505
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 1508,
                                        "end": 1514
                                      },
                                      "start": 1506,
                                      "end": 1514
                                    },
                                    "start": 1494,
                                    "end": 1515
                                  }
                                ],
                                "start": 1447,
                                "end": 1525
                              },
                              "start": 1445,
                              "end": 1525
                            },
                            "start": 1444,
                            "end": 1525
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSNumberKeyword",
                              "start": 1528,
                              "end": 1534
                            },
                            "start": 1528,
                            "end": 1536
                          },
                          "start": 1526,
                          "end": 1536
                        },
                        "start": 1443,
                        "end": 1537
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
                                            "start": 1568,
                                            "end": 1575
                                          },
                                          "start": 1566,
                                          "end": 1575
                                        },
                                        "start": 1565,
                                        "end": 1575
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSBooleanKeyword",
                                        "start": 1578,
                                        "end": 1585
                                      },
                                      "start": 1576,
                                      "end": 1585
                                    },
                                    "start": 1564,
                                    "end": 1586
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
                                            "start": 1604,
                                            "end": 1611
                                          },
                                          "start": 1602,
                                          "end": 1611
                                        },
                                        "start": 1600,
                                        "end": 1611
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSBooleanKeyword",
                                        "start": 1614,
                                        "end": 1621
                                      },
                                      "start": 1612,
                                      "end": 1621
                                    },
                                    "start": 1599,
                                    "end": 1622
                                  }
                                ],
                                "start": 1550,
                                "end": 1632
                              },
                              "start": 1548,
                              "end": 1632
                            },
                            "start": 1547,
                            "end": 1632
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSBooleanKeyword",
                              "start": 1635,
                              "end": 1642
                            },
                            "start": 1635,
                            "end": 1644
                          },
                          "start": 1633,
                          "end": 1644
                        },
                        "start": 1546,
                        "end": 1645
                      }
                    ],
                    "start": 1335,
                    "end": 1651
                  },
                  "start": 1333,
                  "end": 1651
                },
                "start": 1331,
                "end": 1651
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
                  "start": 1661,
                  "end": 1663
                },
                "typeArguments": null,
                "start": 1654,
                "end": 1663
              },
              "start": 1652,
              "end": 1663
            },
            "body": null,
            "expression": false,
            "start": 1308,
            "end": 1664
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo16",
              "optional": false,
              "typeAnnotation": null,
              "start": 1686,
              "end": 1691
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
                    "start": 1696,
                    "end": 1699
                  },
                  "start": 1694,
                  "end": 1699
                },
                "start": 1692,
                "end": 1699
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1702,
                "end": 1705
              },
              "start": 1700,
              "end": 1705
            },
            "body": null,
            "expression": false,
            "start": 1669,
            "end": 1706
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo17",
              "optional": false,
              "typeAnnotation": null,
              "start": 1729,
              "end": 1734
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
                                            "start": 1768,
                                            "end": 1769
                                          },
                                          "constraint": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Derived",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1778,
                                              "end": 1785
                                            },
                                            "typeArguments": null,
                                            "start": 1778,
                                            "end": 1785
                                          },
                                          "default": null,
                                          "in": false,
                                          "out": false,
                                          "const": false,
                                          "start": 1768,
                                          "end": 1785
                                        }
                                      ],
                                      "start": 1767,
                                      "end": 1786
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
                                              "start": 1790,
                                              "end": 1791
                                            },
                                            "typeArguments": null,
                                            "start": 1790,
                                            "end": 1791
                                          },
                                          "start": 1788,
                                          "end": 1791
                                        },
                                        "start": 1787,
                                        "end": 1791
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
                                      "start": 1792,
                                      "end": 1795
                                    },
                                    "start": 1767,
                                    "end": 1796
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
                                            "start": 1810,
                                            "end": 1811
                                          },
                                          "constraint": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Base",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1820,
                                              "end": 1824
                                            },
                                            "typeArguments": null,
                                            "start": 1820,
                                            "end": 1824
                                          },
                                          "default": null,
                                          "in": false,
                                          "out": false,
                                          "const": false,
                                          "start": 1810,
                                          "end": 1824
                                        }
                                      ],
                                      "start": 1809,
                                      "end": 1825
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
                                              "start": 1829,
                                              "end": 1830
                                            },
                                            "typeArguments": null,
                                            "start": 1829,
                                            "end": 1830
                                          },
                                          "start": 1827,
                                          "end": 1830
                                        },
                                        "start": 1826,
                                        "end": 1830
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
                                    "start": 1809,
                                    "end": 1835
                                  }
                                ],
                                "start": 1753,
                                "end": 1845
                              },
                              "start": 1751,
                              "end": 1845
                            },
                            "start": 1750,
                            "end": 1845
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 1848,
                              "end": 1851
                            },
                            "start": 1848,
                            "end": 1853
                          },
                          "start": 1846,
                          "end": 1853
                        },
                        "start": 1749,
                        "end": 1854
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
                                            "start": 1882,
                                            "end": 1883
                                          },
                                          "constraint": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Derived2",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1892,
                                              "end": 1900
                                            },
                                            "typeArguments": null,
                                            "start": 1892,
                                            "end": 1900
                                          },
                                          "default": null,
                                          "in": false,
                                          "out": false,
                                          "const": false,
                                          "start": 1882,
                                          "end": 1900
                                        }
                                      ],
                                      "start": 1881,
                                      "end": 1901
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
                                              "start": 1905,
                                              "end": 1906
                                            },
                                            "typeArguments": null,
                                            "start": 1905,
                                            "end": 1906
                                          },
                                          "start": 1903,
                                          "end": 1906
                                        },
                                        "start": 1902,
                                        "end": 1906
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
                                          "start": 1909,
                                          "end": 1910
                                        },
                                        "typeArguments": null,
                                        "start": 1909,
                                        "end": 1910
                                      },
                                      "start": 1907,
                                      "end": 1910
                                    },
                                    "start": 1881,
                                    "end": 1911
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
                                            "start": 1925,
                                            "end": 1926
                                          },
                                          "constraint": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Base",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1935,
                                              "end": 1939
                                            },
                                            "typeArguments": null,
                                            "start": 1935,
                                            "end": 1939
                                          },
                                          "default": null,
                                          "in": false,
                                          "out": false,
                                          "const": false,
                                          "start": 1925,
                                          "end": 1939
                                        }
                                      ],
                                      "start": 1924,
                                      "end": 1940
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
                                              "start": 1944,
                                              "end": 1945
                                            },
                                            "typeArguments": null,
                                            "start": 1944,
                                            "end": 1945
                                          },
                                          "start": 1942,
                                          "end": 1945
                                        },
                                        "start": 1941,
                                        "end": 1945
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
                                          "start": 1948,
                                          "end": 1949
                                        },
                                        "typeArguments": null,
                                        "start": 1948,
                                        "end": 1949
                                      },
                                      "start": 1946,
                                      "end": 1949
                                    },
                                    "start": 1924,
                                    "end": 1950
                                  }
                                ],
                                "start": 1867,
                                "end": 1960
                              },
                              "start": 1865,
                              "end": 1960
                            },
                            "start": 1864,
                            "end": 1960
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 1963,
                              "end": 1966
                            },
                            "start": 1963,
                            "end": 1968
                          },
                          "start": 1961,
                          "end": 1968
                        },
                        "start": 1863,
                        "end": 1969
                      }
                    ],
                    "start": 1739,
                    "end": 1975
                  },
                  "start": 1737,
                  "end": 1975
                },
                "start": 1735,
                "end": 1975
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
                  "start": 1985,
                  "end": 1987
                },
                "typeArguments": null,
                "start": 1978,
                "end": 1987
              },
              "start": 1976,
              "end": 1987
            },
            "body": null,
            "expression": false,
            "start": 1712,
            "end": 1988
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo17",
              "optional": false,
              "typeAnnotation": null,
              "start": 2010,
              "end": 2015
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
                    "start": 2020,
                    "end": 2023
                  },
                  "start": 2018,
                  "end": 2023
                },
                "start": 2016,
                "end": 2023
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2026,
                "end": 2029
              },
              "start": 2024,
              "end": 2029
            },
            "body": null,
            "expression": false,
            "start": 1993,
            "end": 2030
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
                  "start": 2040,
                  "end": 2042
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2045,
                    "end": 2049
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
                              "start": 2051,
                              "end": 2052
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2051,
                            "end": 2052
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
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
                          }
                        ],
                        "start": 2050,
                        "end": 2056
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
                              "start": 2067,
                              "end": 2068
                            },
                            "typeArguments": null,
                            "start": 2067,
                            "end": 2068
                          },
                          "start": 2067,
                          "end": 2070
                        },
                        "expression": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 2071,
                          "end": 2075
                        },
                        "start": 2066,
                        "end": 2075
                      },
                      "id": null,
                      "generator": false,
                      "start": 2050,
                      "end": 2075
                    }
                  ],
                  "optional": false,
                  "start": 2045,
                  "end": 2076
                },
                "definite": false,
                "start": 2040,
                "end": 2076
              }
            ],
            "declare": false,
            "start": 2036,
            "end": 2077
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
                  "start": 2093,
                  "end": 2096
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
                              "start": 2104,
                              "end": 2110
                            },
                            "start": 2102,
                            "end": 2110
                          },
                          "start": 2101,
                          "end": 2110
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
                            "start": 2116,
                            "end": 2118
                          }
                        ],
                        "start": 2115,
                        "end": 2119
                      },
                      "id": null,
                      "generator": false,
                      "start": 2100,
                      "end": 2119
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
                              "start": 2122,
                              "end": 2123
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2122,
                            "end": 2123
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
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
                          }
                        ],
                        "start": 2121,
                        "end": 2127
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
                                "start": 2131,
                                "end": 2132
                              },
                              "typeArguments": null,
                              "start": 2131,
                              "end": 2132
                            },
                            "start": 2129,
                            "end": 2132
                          },
                          "start": 2128,
                          "end": 2132
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
                              "start": 2138,
                              "end": 2139
                            },
                            "typeArguments": null,
                            "start": 2138,
                            "end": 2139
                          },
                          "start": 2138,
                          "end": 2141
                        },
                        "expression": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 2142,
                          "end": 2146
                        },
                        "start": 2137,
                        "end": 2146
                      },
                      "id": null,
                      "generator": false,
                      "start": 2121,
                      "end": 2146
                    }
                  ],
                  "start": 2099,
                  "end": 2147
                },
                "definite": false,
                "start": 2093,
                "end": 2147
              }
            ],
            "declare": false,
            "start": 2089,
            "end": 2148
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
                  "start": 2157,
                  "end": 2160
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
                              "start": 2165,
                              "end": 2166
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2165,
                            "end": 2166
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
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
                          }
                        ],
                        "start": 2164,
                        "end": 2170
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
                                "start": 2174,
                                "end": 2175
                              },
                              "typeArguments": null,
                              "start": 2174,
                              "end": 2175
                            },
                            "start": 2172,
                            "end": 2175
                          },
                          "start": 2171,
                          "end": 2175
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
                              "start": 2181,
                              "end": 2182
                            },
                            "typeArguments": null,
                            "start": 2181,
                            "end": 2182
                          },
                          "start": 2181,
                          "end": 2184
                        },
                        "expression": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 2185,
                          "end": 2189
                        },
                        "start": 2180,
                        "end": 2189
                      },
                      "id": null,
                      "generator": false,
                      "start": 2164,
                      "end": 2189
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
                              "start": 2195,
                              "end": 2201
                            },
                            "start": 2193,
                            "end": 2201
                          },
                          "start": 2192,
                          "end": 2201
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
                            "start": 2207,
                            "end": 2209
                          }
                        ],
                        "start": 2206,
                        "end": 2210
                      },
                      "id": null,
                      "generator": false,
                      "start": 2191,
                      "end": 2210
                    }
                  ],
                  "start": 2163,
                  "end": 2211
                },
                "definite": false,
                "start": 2157,
                "end": 2211
              }
            ],
            "declare": false,
            "start": 2153,
            "end": 2212
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
                  "start": 2222,
                  "end": 2227
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
                          "start": 2231,
                          "end": 2232
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Base",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2241,
                            "end": 2245
                          },
                          "typeArguments": null,
                          "start": 2241,
                          "end": 2245
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 2231,
                        "end": 2245
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2247,
                          "end": 2248
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2257,
                            "end": 2264
                          },
                          "typeArguments": null,
                          "start": 2257,
                          "end": 2264
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 2247,
                        "end": 2264
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2266,
                          "end": 2267
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Derived2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2276,
                            "end": 2284
                          },
                          "typeArguments": null,
                          "start": 2276,
                          "end": 2284
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 2266,
                        "end": 2284
                      }
                    ],
                    "start": 2230,
                    "end": 2285
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
                                    "start": 2295,
                                    "end": 2296
                                  },
                                  "typeArguments": null,
                                  "start": 2295,
                                  "end": 2296
                                },
                                "start": 2293,
                                "end": 2296
                              },
                              "start": 2290,
                              "end": 2296
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
                                "start": 2301,
                                "end": 2302
                              },
                              "typeArguments": null,
                              "start": 2301,
                              "end": 2302
                            },
                            "start": 2298,
                            "end": 2302
                          },
                          "start": 2289,
                          "end": 2302
                        },
                        "start": 2287,
                        "end": 2302
                      },
                      "start": 2286,
                      "end": 2302
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
                              "start": 2311,
                              "end": 2312
                            },
                            "typeArguments": null,
                            "start": 2311,
                            "end": 2312
                          },
                          "start": 2309,
                          "end": 2312
                        },
                        "start": 2308,
                        "end": 2312
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
                          "start": 2318,
                          "end": 2319
                        },
                        "typeArguments": null,
                        "start": 2318,
                        "end": 2319
                      },
                      "expression": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 2320,
                        "end": 2324
                      },
                      "start": 2317,
                      "end": 2324
                    },
                    "id": null,
                    "generator": false,
                    "start": 2307,
                    "end": 2324
                  },
                  "id": null,
                  "generator": false,
                  "start": 2230,
                  "end": 2324
                },
                "definite": false,
                "start": 2222,
                "end": 2324
              }
            ],
            "declare": false,
            "start": 2218,
            "end": 2325
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
                  "start": 2334,
                  "end": 2340
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
                                    "start": 2353,
                                    "end": 2357
                                  },
                                  "typeArguments": null,
                                  "start": 2353,
                                  "end": 2357
                                },
                                "start": 2351,
                                "end": 2357
                              },
                              "start": 2348,
                              "end": 2357
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
                                "start": 2362,
                                "end": 2369
                              },
                              "typeArguments": null,
                              "start": 2362,
                              "end": 2369
                            },
                            "start": 2359,
                            "end": 2369
                          },
                          "start": 2347,
                          "end": 2369
                        },
                        "start": 2345,
                        "end": 2369
                      },
                      "start": 2344,
                      "end": 2369
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
                              "start": 2378,
                              "end": 2382
                            },
                            "typeArguments": null,
                            "start": 2378,
                            "end": 2382
                          },
                          "start": 2376,
                          "end": 2382
                        },
                        "start": 2375,
                        "end": 2382
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
                          "start": 2388,
                          "end": 2396
                        },
                        "typeArguments": null,
                        "start": 2388,
                        "end": 2396
                      },
                      "expression": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 2397,
                        "end": 2401
                      },
                      "start": 2387,
                      "end": 2401
                    },
                    "id": null,
                    "generator": false,
                    "start": 2374,
                    "end": 2401
                  },
                  "id": null,
                  "generator": false,
                  "start": 2343,
                  "end": 2401
                },
                "definite": false,
                "start": 2334,
                "end": 2401
              }
            ],
            "declare": false,
            "start": 2330,
            "end": 2402
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
                  "start": 2411,
                  "end": 2413
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2416,
                    "end": 2420
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r2arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2421,
                      "end": 2426
                    }
                  ],
                  "optional": false,
                  "start": 2416,
                  "end": 2427
                },
                "definite": false,
                "start": 2411,
                "end": 2427
              }
            ],
            "declare": false,
            "start": 2407,
            "end": 2428
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
                  "start": 2444,
                  "end": 2447
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
                      "start": 2451,
                      "end": 2457
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r2arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2459,
                      "end": 2464
                    }
                  ],
                  "start": 2450,
                  "end": 2465
                },
                "definite": false,
                "start": 2444,
                "end": 2465
              }
            ],
            "declare": false,
            "start": 2440,
            "end": 2466
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
                  "start": 2475,
                  "end": 2478
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
                      "start": 2482,
                      "end": 2487
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r2arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2489,
                      "end": 2495
                    }
                  ],
                  "start": 2481,
                  "end": 2496
                },
                "definite": false,
                "start": 2475,
                "end": 2496
              }
            ],
            "declare": false,
            "start": 2471,
            "end": 2497
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
                  "start": 2507,
                  "end": 2512
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
                          "start": 2516,
                          "end": 2517
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Base",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2526,
                            "end": 2530
                          },
                          "typeArguments": null,
                          "start": 2526,
                          "end": 2530
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 2516,
                        "end": 2530
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2532,
                          "end": 2533
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2542,
                            "end": 2549
                          },
                          "typeArguments": null,
                          "start": 2542,
                          "end": 2549
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 2532,
                        "end": 2549
                      }
                    ],
                    "start": 2515,
                    "end": 2550
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
                                    "start": 2560,
                                    "end": 2561
                                  },
                                  "typeArguments": null,
                                  "start": 2560,
                                  "end": 2561
                                },
                                "start": 2558,
                                "end": 2561
                              },
                              "start": 2555,
                              "end": 2561
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
                                "start": 2566,
                                "end": 2567
                              },
                              "typeArguments": null,
                              "start": 2566,
                              "end": 2567
                            },
                            "start": 2563,
                            "end": 2567
                          },
                          "start": 2554,
                          "end": 2567
                        },
                        "start": 2552,
                        "end": 2567
                      },
                      "start": 2551,
                      "end": 2567
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
                                        "start": 2581,
                                        "end": 2584
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSNumberKeyword",
                                          "start": 2586,
                                          "end": 2592
                                        },
                                        "start": 2584,
                                        "end": 2592
                                      },
                                      "accessibility": null,
                                      "static": false,
                                      "start": 2581,
                                      "end": 2593
                                    }
                                  ],
                                  "start": 2579,
                                  "end": 2595
                                },
                                "start": 2577,
                                "end": 2595
                              },
                              "start": 2573,
                              "end": 2595
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
                                "start": 2600,
                                "end": 2601
                              },
                              "typeArguments": null,
                              "start": 2600,
                              "end": 2601
                            },
                            "start": 2597,
                            "end": 2601
                          },
                          "start": 2572,
                          "end": 2601
                        },
                        "start": 2570,
                        "end": 2601
                      },
                      "start": 2569,
                      "end": 2601
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
                              "start": 2610,
                              "end": 2611
                            },
                            "typeArguments": null,
                            "start": 2610,
                            "end": 2611
                          },
                          "start": 2608,
                          "end": 2611
                        },
                        "start": 2607,
                        "end": 2611
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
                          "start": 2617,
                          "end": 2618
                        },
                        "typeArguments": null,
                        "start": 2617,
                        "end": 2618
                      },
                      "expression": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 2619,
                        "end": 2623
                      },
                      "start": 2616,
                      "end": 2623
                    },
                    "id": null,
                    "generator": false,
                    "start": 2606,
                    "end": 2623
                  },
                  "id": null,
                  "generator": false,
                  "start": 2515,
                  "end": 2623
                },
                "definite": false,
                "start": 2507,
                "end": 2623
              }
            ],
            "declare": false,
            "start": 2503,
            "end": 2624
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
                  "start": 2633,
                  "end": 2639
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
                                    "start": 2652,
                                    "end": 2656
                                  },
                                  "typeArguments": null,
                                  "start": 2652,
                                  "end": 2656
                                },
                                "start": 2650,
                                "end": 2656
                              },
                              "start": 2647,
                              "end": 2656
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
                                "start": 2661,
                                "end": 2668
                              },
                              "typeArguments": null,
                              "start": 2661,
                              "end": 2668
                            },
                            "start": 2658,
                            "end": 2668
                          },
                          "start": 2646,
                          "end": 2668
                        },
                        "start": 2644,
                        "end": 2668
                      },
                      "start": 2643,
                      "end": 2668
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
                                    "start": 2680,
                                    "end": 2684
                                  },
                                  "typeArguments": null,
                                  "start": 2680,
                                  "end": 2684
                                },
                                "start": 2678,
                                "end": 2684
                              },
                              "start": 2674,
                              "end": 2684
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
                                "start": 2689,
                                "end": 2696
                              },
                              "typeArguments": null,
                              "start": 2689,
                              "end": 2696
                            },
                            "start": 2686,
                            "end": 2696
                          },
                          "start": 2673,
                          "end": 2696
                        },
                        "start": 2671,
                        "end": 2696
                      },
                      "start": 2670,
                      "end": 2696
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
                              "start": 2705,
                              "end": 2709
                            },
                            "typeArguments": null,
                            "start": 2705,
                            "end": 2709
                          },
                          "start": 2703,
                          "end": 2709
                        },
                        "start": 2702,
                        "end": 2709
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
                          "start": 2715,
                          "end": 2722
                        },
                        "typeArguments": null,
                        "start": 2715,
                        "end": 2722
                      },
                      "expression": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 2723,
                        "end": 2727
                      },
                      "start": 2714,
                      "end": 2727
                    },
                    "id": null,
                    "generator": false,
                    "start": 2701,
                    "end": 2727
                  },
                  "id": null,
                  "generator": false,
                  "start": 2642,
                  "end": 2727
                },
                "definite": false,
                "start": 2633,
                "end": 2727
              }
            ],
            "declare": false,
            "start": 2629,
            "end": 2728
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
                  "start": 2737,
                  "end": 2739
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo8",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2742,
                    "end": 2746
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r3arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2747,
                      "end": 2752
                    }
                  ],
                  "optional": false,
                  "start": 2742,
                  "end": 2753
                },
                "definite": false,
                "start": 2737,
                "end": 2753
              }
            ],
            "declare": false,
            "start": 2733,
            "end": 2754
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
                  "start": 2770,
                  "end": 2773
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
                      "start": 2777,
                      "end": 2783
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r3arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2785,
                      "end": 2790
                    }
                  ],
                  "start": 2776,
                  "end": 2791
                },
                "definite": false,
                "start": 2770,
                "end": 2791
              }
            ],
            "declare": false,
            "start": 2766,
            "end": 2792
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
                  "start": 2801,
                  "end": 2804
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
                      "start": 2808,
                      "end": 2813
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r3arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2815,
                      "end": 2821
                    }
                  ],
                  "start": 2807,
                  "end": 2822
                },
                "definite": false,
                "start": 2801,
                "end": 2822
              }
            ],
            "declare": false,
            "start": 2797,
            "end": 2823
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
                  "start": 2833,
                  "end": 2838
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
                          "start": 2842,
                          "end": 2843
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2852,
                            "end": 2859
                          },
                          "typeArguments": null,
                          "start": 2852,
                          "end": 2859
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 2842,
                        "end": 2859
                      }
                    ],
                    "start": 2841,
                    "end": 2860
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
                        "start": 2864,
                        "end": 2865
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
                              "start": 2867,
                              "end": 2868
                            },
                            "typeArguments": null,
                            "start": 2867,
                            "end": 2868
                          },
                          "start": 2867,
                          "end": 2870
                        },
                        "start": 2865,
                        "end": 2870
                      },
                      "value": null,
                      "start": 2861,
                      "end": 2870
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
                        "start": 2876,
                        "end": 2877
                      },
                      "typeArguments": null,
                      "start": 2876,
                      "end": 2877
                    },
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 2878,
                      "end": 2882
                    },
                    "start": 2875,
                    "end": 2882
                  },
                  "id": null,
                  "generator": false,
                  "start": 2841,
                  "end": 2882
                },
                "definite": false,
                "start": 2833,
                "end": 2882
              }
            ],
            "declare": false,
            "start": 2829,
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
                  "name": "r4arg2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2892,
                  "end": 2898
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
                        "start": 2905,
                        "end": 2906
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
                              "start": 2908,
                              "end": 2912
                            },
                            "typeArguments": null,
                            "start": 2908,
                            "end": 2912
                          },
                          "start": 2908,
                          "end": 2914
                        },
                        "start": 2906,
                        "end": 2914
                      },
                      "value": null,
                      "start": 2902,
                      "end": 2914
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
                        "start": 2920,
                        "end": 2924
                      },
                      "typeArguments": null,
                      "start": 2920,
                      "end": 2924
                    },
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 2925,
                      "end": 2929
                    },
                    "start": 2919,
                    "end": 2929
                  },
                  "id": null,
                  "generator": false,
                  "start": 2901,
                  "end": 2929
                },
                "definite": false,
                "start": 2892,
                "end": 2929
              }
            ],
            "declare": false,
            "start": 2888,
            "end": 2930
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
                  "start": 2939,
                  "end": 2941
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo10",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2944,
                    "end": 2949
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r4arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2950,
                      "end": 2955
                    }
                  ],
                  "optional": false,
                  "start": 2944,
                  "end": 2956
                },
                "definite": false,
                "start": 2939,
                "end": 2956
              }
            ],
            "declare": false,
            "start": 2935,
            "end": 2957
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
                  "start": 2973,
                  "end": 2976
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
                      "start": 2980,
                      "end": 2986
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r4arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2988,
                      "end": 2993
                    }
                  ],
                  "start": 2979,
                  "end": 2994
                },
                "definite": false,
                "start": 2973,
                "end": 2994
              }
            ],
            "declare": false,
            "start": 2969,
            "end": 2995
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
                  "start": 3004,
                  "end": 3007
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
                      "start": 3011,
                      "end": 3016
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r4arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3018,
                      "end": 3024
                    }
                  ],
                  "start": 3010,
                  "end": 3025
                },
                "definite": false,
                "start": 3004,
                "end": 3025
              }
            ],
            "declare": false,
            "start": 3000,
            "end": 3026
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
                  "start": 3036,
                  "end": 3041
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
                          "start": 3045,
                          "end": 3046
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3055,
                            "end": 3062
                          },
                          "typeArguments": null,
                          "start": 3055,
                          "end": 3062
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 3045,
                        "end": 3062
                      }
                    ],
                    "start": 3044,
                    "end": 3063
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
                            "start": 3067,
                            "end": 3068
                          },
                          "typeArguments": null,
                          "start": 3067,
                          "end": 3068
                        },
                        "start": 3065,
                        "end": 3068
                      },
                      "start": 3064,
                      "end": 3068
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
                            "start": 3073,
                            "end": 3074
                          },
                          "typeArguments": null,
                          "start": 3073,
                          "end": 3074
                        },
                        "start": 3071,
                        "end": 3074
                      },
                      "start": 3070,
                      "end": 3074
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
                        "start": 3080,
                        "end": 3081
                      },
                      "typeArguments": null,
                      "start": 3080,
                      "end": 3081
                    },
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 3082,
                      "end": 3086
                    },
                    "start": 3079,
                    "end": 3086
                  },
                  "id": null,
                  "generator": false,
                  "start": 3044,
                  "end": 3086
                },
                "definite": false,
                "start": 3036,
                "end": 3086
              }
            ],
            "declare": false,
            "start": 3032,
            "end": 3087
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
                  "start": 3096,
                  "end": 3102
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
                                "start": 3111,
                                "end": 3114
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 3116,
                                  "end": 3122
                                },
                                "start": 3114,
                                "end": 3122
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3111,
                              "end": 3122
                            }
                          ],
                          "start": 3109,
                          "end": 3124
                        },
                        "start": 3107,
                        "end": 3124
                      },
                      "start": 3106,
                      "end": 3124
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
                                "start": 3131,
                                "end": 3134
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 3136,
                                  "end": 3142
                                },
                                "start": 3134,
                                "end": 3142
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3131,
                              "end": 3143
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
                                "start": 3144,
                                "end": 3147
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 3149,
                                  "end": 3155
                                },
                                "start": 3147,
                                "end": 3155
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3144,
                              "end": 3155
                            }
                          ],
                          "start": 3129,
                          "end": 3157
                        },
                        "start": 3127,
                        "end": 3157
                      },
                      "start": 3126,
                      "end": 3157
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
                        "start": 3163,
                        "end": 3167
                      },
                      "typeArguments": null,
                      "start": 3163,
                      "end": 3167
                    },
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 3168,
                      "end": 3172
                    },
                    "start": 3162,
                    "end": 3172
                  },
                  "id": null,
                  "generator": false,
                  "start": 3105,
                  "end": 3172
                },
                "definite": false,
                "start": 3096,
                "end": 3172
              }
            ],
            "declare": false,
            "start": 3092,
            "end": 3173
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
                  "start": 3182,
                  "end": 3184
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo11",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3187,
                    "end": 3192
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r5arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3193,
                      "end": 3198
                    }
                  ],
                  "optional": false,
                  "start": 3187,
                  "end": 3199
                },
                "definite": false,
                "start": 3182,
                "end": 3199
              }
            ],
            "declare": false,
            "start": 3178,
            "end": 3200
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
                  "start": 3216,
                  "end": 3219
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
                      "start": 3223,
                      "end": 3229
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r5arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3231,
                      "end": 3236
                    }
                  ],
                  "start": 3222,
                  "end": 3237
                },
                "definite": false,
                "start": 3216,
                "end": 3237
              }
            ],
            "declare": false,
            "start": 3212,
            "end": 3238
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
                  "start": 3247,
                  "end": 3250
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
                      "start": 3254,
                      "end": 3259
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r5arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3261,
                      "end": 3267
                    }
                  ],
                  "start": 3253,
                  "end": 3268
                },
                "definite": false,
                "start": 3247,
                "end": 3268
              }
            ],
            "declare": false,
            "start": 3243,
            "end": 3269
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
                  "start": 3279,
                  "end": 3284
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
                            "start": 3291,
                            "end": 3296
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
                                  "start": 3297,
                                  "end": 3301
                                },
                                "typeArguments": null,
                                "start": 3297,
                                "end": 3301
                              }
                            ],
                            "start": 3296,
                            "end": 3302
                          },
                          "start": 3291,
                          "end": 3302
                        },
                        "start": 3289,
                        "end": 3302
                      },
                      "start": 3288,
                      "end": 3302
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
                            "start": 3307,
                            "end": 3312
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
                                  "start": 3313,
                                  "end": 3321
                                },
                                "typeArguments": null,
                                "start": 3313,
                                "end": 3321
                              }
                            ],
                            "start": 3312,
                            "end": 3322
                          },
                          "start": 3307,
                          "end": 3322
                        },
                        "start": 3305,
                        "end": 3322
                      },
                      "start": 3304,
                      "end": 3322
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
                        "start": 3328,
                        "end": 3333
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
                              "start": 3334,
                              "end": 3341
                            },
                            "typeArguments": null,
                            "start": 3334,
                            "end": 3341
                          }
                        ],
                        "start": 3333,
                        "end": 3342
                      },
                      "start": 3328,
                      "end": 3342
                    },
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 3343,
                      "end": 3347
                    },
                    "start": 3327,
                    "end": 3347
                  },
                  "id": null,
                  "generator": false,
                  "start": 3287,
                  "end": 3347
                },
                "definite": false,
                "start": 3279,
                "end": 3347
              }
            ],
            "declare": false,
            "start": 3275,
            "end": 3348
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
                  "start": 3357,
                  "end": 3363
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
                          "start": 3367,
                          "end": 3368
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Array",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3377,
                            "end": 3382
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
                                  "start": 3383,
                                  "end": 3391
                                },
                                "typeArguments": null,
                                "start": 3383,
                                "end": 3391
                              }
                            ],
                            "start": 3382,
                            "end": 3392
                          },
                          "start": 3377,
                          "end": 3392
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 3367,
                        "end": 3392
                      }
                    ],
                    "start": 3366,
                    "end": 3393
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
                            "start": 3397,
                            "end": 3402
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
                                  "start": 3403,
                                  "end": 3407
                                },
                                "typeArguments": null,
                                "start": 3403,
                                "end": 3407
                              }
                            ],
                            "start": 3402,
                            "end": 3408
                          },
                          "start": 3397,
                          "end": 3408
                        },
                        "start": 3395,
                        "end": 3408
                      },
                      "start": 3394,
                      "end": 3408
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
                            "start": 3413,
                            "end": 3418
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
                                  "start": 3419,
                                  "end": 3423
                                },
                                "typeArguments": null,
                                "start": 3419,
                                "end": 3423
                              }
                            ],
                            "start": 3418,
                            "end": 3424
                          },
                          "start": 3413,
                          "end": 3424
                        },
                        "start": 3411,
                        "end": 3424
                      },
                      "start": 3410,
                      "end": 3424
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
                        "start": 3430,
                        "end": 3431
                      },
                      "typeArguments": null,
                      "start": 3430,
                      "end": 3431
                    },
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 3432,
                      "end": 3436
                    },
                    "start": 3429,
                    "end": 3436
                  },
                  "id": null,
                  "generator": false,
                  "start": 3366,
                  "end": 3436
                },
                "definite": false,
                "start": 3357,
                "end": 3436
              }
            ],
            "declare": false,
            "start": 3353,
            "end": 3437
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
                  "start": 3446,
                  "end": 3448
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo12",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3451,
                    "end": 3456
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r6arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3457,
                      "end": 3462
                    }
                  ],
                  "optional": false,
                  "start": 3451,
                  "end": 3463
                },
                "definite": false,
                "start": 3446,
                "end": 3463
              }
            ],
            "declare": false,
            "start": 3442,
            "end": 3464
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
                  "start": 3531,
                  "end": 3534
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
                      "start": 3538,
                      "end": 3544
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r6arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3546,
                      "end": 3551
                    }
                  ],
                  "start": 3537,
                  "end": 3552
                },
                "definite": false,
                "start": 3531,
                "end": 3552
              }
            ],
            "declare": false,
            "start": 3527,
            "end": 3553
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
                  "start": 3562,
                  "end": 3565
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
                      "start": 3569,
                      "end": 3574
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r6arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3576,
                      "end": 3582
                    }
                  ],
                  "start": 3568,
                  "end": 3583
                },
                "definite": false,
                "start": 3562,
                "end": 3583
              }
            ],
            "declare": false,
            "start": 3558,
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
                  "name": "r7arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3594,
                  "end": 3599
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
                          "start": 3603,
                          "end": 3604
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 3603,
                        "end": 3604
                      }
                    ],
                    "start": 3602,
                    "end": 3605
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
                                "start": 3611,
                                "end": 3612
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
                                    "start": 3614,
                                    "end": 3615
                                  },
                                  "typeArguments": null,
                                  "start": 3614,
                                  "end": 3615
                                },
                                "start": 3612,
                                "end": 3615
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3611,
                              "end": 3616
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
                                "start": 3617,
                                "end": 3618
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
                                    "start": 3620,
                                    "end": 3621
                                  },
                                  "typeArguments": null,
                                  "start": 3620,
                                  "end": 3621
                                },
                                "start": 3618,
                                "end": 3621
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3617,
                              "end": 3621
                            }
                          ],
                          "start": 3609,
                          "end": 3623
                        },
                        "start": 3607,
                        "end": 3623
                      },
                      "start": 3606,
                      "end": 3623
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
                        "start": 3629,
                        "end": 3630
                      },
                      "typeArguments": null,
                      "start": 3629,
                      "end": 3630
                    },
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 3631,
                      "end": 3635
                    },
                    "start": 3628,
                    "end": 3635
                  },
                  "id": null,
                  "generator": false,
                  "start": 3602,
                  "end": 3635
                },
                "definite": false,
                "start": 3594,
                "end": 3635
              }
            ],
            "declare": false,
            "start": 3590,
            "end": 3636
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
                  "start": 3645,
                  "end": 3651
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
                                "start": 3660,
                                "end": 3661
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 3663,
                                  "end": 3669
                                },
                                "start": 3661,
                                "end": 3669
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3660,
                              "end": 3670
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
                                "start": 3671,
                                "end": 3672
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 3674,
                                  "end": 3680
                                },
                                "start": 3672,
                                "end": 3680
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3671,
                              "end": 3680
                            }
                          ],
                          "start": 3658,
                          "end": 3682
                        },
                        "start": 3656,
                        "end": 3682
                      },
                      "start": 3655,
                      "end": 3682
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 3687,
                    "end": 3688
                  },
                  "id": null,
                  "generator": false,
                  "start": 3654,
                  "end": 3688
                },
                "definite": false,
                "start": 3645,
                "end": 3688
              }
            ],
            "declare": false,
            "start": 3641,
            "end": 3689
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
                  "start": 3698,
                  "end": 3700
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo15",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3703,
                    "end": 3708
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3709,
                      "end": 3714
                    }
                  ],
                  "optional": false,
                  "start": 3703,
                  "end": 3715
                },
                "definite": false,
                "start": 3698,
                "end": 3715
              }
            ],
            "declare": false,
            "start": 3694,
            "end": 3716
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
                  "start": 3732,
                  "end": 3735
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
                      "start": 3739,
                      "end": 3745
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3747,
                      "end": 3752
                    }
                  ],
                  "start": 3738,
                  "end": 3753
                },
                "definite": false,
                "start": 3732,
                "end": 3753
              }
            ],
            "declare": false,
            "start": 3728,
            "end": 3754
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
                  "start": 3763,
                  "end": 3766
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
                      "start": 3770,
                      "end": 3775
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3777,
                      "end": 3783
                    }
                  ],
                  "start": 3769,
                  "end": 3784
                },
                "definite": false,
                "start": 3763,
                "end": 3784
              }
            ],
            "declare": false,
            "start": 3759,
            "end": 3785
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
                  "start": 3795,
                  "end": 3801
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
                          "start": 3805,
                          "end": 3806
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Base",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3815,
                            "end": 3819
                          },
                          "typeArguments": null,
                          "start": 3815,
                          "end": 3819
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 3805,
                        "end": 3819
                      }
                    ],
                    "start": 3804,
                    "end": 3820
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
                                "start": 3826,
                                "end": 3827
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
                                    "start": 3829,
                                    "end": 3830
                                  },
                                  "typeArguments": null,
                                  "start": 3829,
                                  "end": 3830
                                },
                                "start": 3827,
                                "end": 3830
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3826,
                              "end": 3831
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
                                "start": 3832,
                                "end": 3833
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
                                    "start": 3835,
                                    "end": 3836
                                  },
                                  "typeArguments": null,
                                  "start": 3835,
                                  "end": 3836
                                },
                                "start": 3833,
                                "end": 3836
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3832,
                              "end": 3836
                            }
                          ],
                          "start": 3824,
                          "end": 3838
                        },
                        "start": 3822,
                        "end": 3838
                      },
                      "start": 3821,
                      "end": 3838
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 3843,
                    "end": 3844
                  },
                  "id": null,
                  "generator": false,
                  "start": 3804,
                  "end": 3844
                },
                "definite": false,
                "start": 3795,
                "end": 3844
              }
            ],
            "declare": false,
            "start": 3791,
            "end": 3845
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
                  "start": 3854,
                  "end": 3857
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo15",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3860,
                    "end": 3865
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3866,
                      "end": 3872
                    }
                  ],
                  "optional": false,
                  "start": 3860,
                  "end": 3873
                },
                "definite": false,
                "start": 3854,
                "end": 3873
              }
            ],
            "declare": false,
            "start": 3850,
            "end": 3874
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
                  "start": 3936,
                  "end": 3939
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
                      "start": 3943,
                      "end": 3949
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3951,
                      "end": 3957
                    }
                  ],
                  "start": 3942,
                  "end": 3958
                },
                "definite": false,
                "start": 3936,
                "end": 3958
              }
            ],
            "declare": false,
            "start": 3932,
            "end": 3959
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
                  "start": 3968,
                  "end": 3971
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
                      "start": 3975,
                      "end": 3981
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3983,
                      "end": 3989
                    }
                  ],
                  "start": 3974,
                  "end": 3990
                },
                "definite": false,
                "start": 3968,
                "end": 3990
              }
            ],
            "declare": false,
            "start": 3964,
            "end": 3991
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
                  "start": 4001,
                  "end": 4006
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
                          "start": 4010,
                          "end": 4011
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 4010,
                        "end": 4011
                      }
                    ],
                    "start": 4009,
                    "end": 4012
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
                                    "start": 4020,
                                    "end": 4021
                                  },
                                  "typeArguments": null,
                                  "start": 4020,
                                  "end": 4021
                                },
                                "start": 4018,
                                "end": 4021
                              },
                              "start": 4017,
                              "end": 4021
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
                                "start": 4026,
                                "end": 4027
                              },
                              "typeArguments": null,
                              "start": 4026,
                              "end": 4027
                            },
                            "start": 4023,
                            "end": 4027
                          },
                          "start": 4016,
                          "end": 4027
                        },
                        "start": 4014,
                        "end": 4027
                      },
                      "start": 4013,
                      "end": 4027
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
                          "start": 4033,
                          "end": 4034
                        },
                        "typeArguments": null,
                        "start": 4033,
                        "end": 4034
                      },
                      "start": 4033,
                      "end": 4036
                    },
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 4037,
                      "end": 4041
                    },
                    "start": 4032,
                    "end": 4041
                  },
                  "id": null,
                  "generator": false,
                  "start": 4009,
                  "end": 4041
                },
                "definite": false,
                "start": 4001,
                "end": 4041
              }
            ],
            "declare": false,
            "start": 3997,
            "end": 4042
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
                  "start": 4051,
                  "end": 4053
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo16",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4056,
                    "end": 4061
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r8arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4062,
                      "end": 4067
                    }
                  ],
                  "optional": false,
                  "start": 4056,
                  "end": 4068
                },
                "definite": false,
                "start": 4051,
                "end": 4068
              }
            ],
            "declare": false,
            "start": 4047,
            "end": 4069
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
                  "start": 4086,
                  "end": 4091
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
                          "start": 4095,
                          "end": 4096
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 4095,
                        "end": 4096
                      }
                    ],
                    "start": 4094,
                    "end": 4097
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
                                    "start": 4105,
                                    "end": 4106
                                  },
                                  "typeArguments": null,
                                  "start": 4105,
                                  "end": 4106
                                },
                                "start": 4103,
                                "end": 4106
                              },
                              "start": 4102,
                              "end": 4106
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
                                "start": 4111,
                                "end": 4112
                              },
                              "typeArguments": null,
                              "start": 4111,
                              "end": 4112
                            },
                            "start": 4108,
                            "end": 4112
                          },
                          "start": 4101,
                          "end": 4112
                        },
                        "start": 4099,
                        "end": 4112
                      },
                      "start": 4098,
                      "end": 4112
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 4118,
                        "end": 4121
                      },
                      "start": 4118,
                      "end": 4123
                    },
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 4124,
                      "end": 4128
                    },
                    "start": 4117,
                    "end": 4128
                  },
                  "id": null,
                  "generator": false,
                  "start": 4094,
                  "end": 4128
                },
                "definite": false,
                "start": 4086,
                "end": 4128
              }
            ],
            "declare": false,
            "start": 4082,
            "end": 4129
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
                  "start": 4138,
                  "end": 4140
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo17",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4143,
                    "end": 4148
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r9arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4149,
                      "end": 4154
                    }
                  ],
                  "optional": false,
                  "start": 4143,
                  "end": 4155
                },
                "definite": false,
                "start": 4138,
                "end": 4155
              }
            ],
            "declare": false,
            "start": 4134,
            "end": 4156
          }
        ],
        "start": 175,
        "end": 4312
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 161,
      "end": 4312
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WithGenericSignaturesInBaseType",
        "optional": false,
        "typeAnnotation": null,
        "start": 4321,
        "end": 4352
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
              "start": 4376,
              "end": 4380
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
                            "start": 4386,
                            "end": 4387
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 4386,
                          "end": 4387
                        }
                      ],
                      "start": 4385,
                      "end": 4388
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
                              "start": 4392,
                              "end": 4393
                            },
                            "typeArguments": null,
                            "start": 4392,
                            "end": 4393
                          },
                          "start": 4390,
                          "end": 4393
                        },
                        "start": 4389,
                        "end": 4393
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
                            "start": 4398,
                            "end": 4399
                          },
                          "typeArguments": null,
                          "start": 4398,
                          "end": 4399
                        },
                        "start": 4398,
                        "end": 4401
                      },
                      "start": 4395,
                      "end": 4401
                    },
                    "start": 4385,
                    "end": 4401
                  },
                  "start": 4383,
                  "end": 4401
                },
                "start": 4381,
                "end": 4401
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
                  "start": 4411,
                  "end": 4413
                },
                "typeArguments": null,
                "start": 4404,
                "end": 4413
              },
              "start": 4402,
              "end": 4413
            },
            "body": null,
            "expression": false,
            "start": 4359,
            "end": 4414
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4436,
              "end": 4440
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
                    "start": 4445,
                    "end": 4448
                  },
                  "start": 4443,
                  "end": 4448
                },
                "start": 4441,
                "end": 4448
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4451,
                "end": 4454
              },
              "start": 4449,
              "end": 4454
            },
            "body": null,
            "expression": false,
            "start": 4419,
            "end": 4455
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
                  "start": 4464,
                  "end": 4470
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
                          "start": 4474,
                          "end": 4475
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 4474,
                        "end": 4475
                      }
                    ],
                    "start": 4473,
                    "end": 4476
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
                            "start": 4480,
                            "end": 4481
                          },
                          "typeArguments": null,
                          "start": 4480,
                          "end": 4481
                        },
                        "start": 4478,
                        "end": 4481
                      },
                      "start": 4477,
                      "end": 4481
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
                        "start": 4487,
                        "end": 4489
                      }
                    ],
                    "start": 4486,
                    "end": 4490
                  },
                  "id": null,
                  "generator": false,
                  "start": 4473,
                  "end": 4490
                },
                "definite": false,
                "start": 4464,
                "end": 4490
              }
            ],
            "declare": false,
            "start": 4460,
            "end": 4491
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
                  "start": 4500,
                  "end": 4502
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4505,
                    "end": 4509
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r2arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4510,
                      "end": 4516
                    }
                  ],
                  "optional": false,
                  "start": 4505,
                  "end": 4517
                },
                "definite": false,
                "start": 4500,
                "end": 4517
              }
            ],
            "declare": false,
            "start": 4496,
            "end": 4518
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 4607,
              "end": 4611
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
                            "start": 4617,
                            "end": 4618
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 4617,
                          "end": 4618
                        }
                      ],
                      "start": 4616,
                      "end": 4619
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
                              "start": 4623,
                              "end": 4624
                            },
                            "typeArguments": null,
                            "start": 4623,
                            "end": 4624
                          },
                          "start": 4621,
                          "end": 4624
                        },
                        "start": 4620,
                        "end": 4624
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 4629,
                          "end": 4635
                        },
                        "start": 4629,
                        "end": 4637
                      },
                      "start": 4626,
                      "end": 4637
                    },
                    "start": 4616,
                    "end": 4637
                  },
                  "start": 4614,
                  "end": 4637
                },
                "start": 4612,
                "end": 4637
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
                  "start": 4647,
                  "end": 4649
                },
                "typeArguments": null,
                "start": 4640,
                "end": 4649
              },
              "start": 4638,
              "end": 4649
            },
            "body": null,
            "expression": false,
            "start": 4590,
            "end": 4650
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 4672,
              "end": 4676
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
                    "start": 4681,
                    "end": 4684
                  },
                  "start": 4679,
                  "end": 4684
                },
                "start": 4677,
                "end": 4684
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4687,
                "end": 4690
              },
              "start": 4685,
              "end": 4690
            },
            "body": null,
            "expression": false,
            "start": 4655,
            "end": 4691
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
                  "start": 4700,
                  "end": 4706
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
                          "start": 4710,
                          "end": 4711
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 4710,
                        "end": 4711
                      }
                    ],
                    "start": 4709,
                    "end": 4712
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
                            "start": 4716,
                            "end": 4717
                          },
                          "typeArguments": null,
                          "start": 4716,
                          "end": 4717
                        },
                        "start": 4714,
                        "end": 4717
                      },
                      "start": 4713,
                      "end": 4717
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
                          "start": 4723,
                          "end": 4724
                        },
                        "typeArguments": null,
                        "start": 4723,
                        "end": 4724
                      },
                      "start": 4723,
                      "end": 4726
                    },
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 4727,
                      "end": 4731
                    },
                    "start": 4722,
                    "end": 4731
                  },
                  "id": null,
                  "generator": false,
                  "start": 4709,
                  "end": 4731
                },
                "definite": false,
                "start": 4700,
                "end": 4731
              }
            ],
            "declare": false,
            "start": 4696,
            "end": 4732
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
                  "start": 4741,
                  "end": 4743
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4746,
                    "end": 4750
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r3arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4751,
                      "end": 4757
                    }
                  ],
                  "optional": false,
                  "start": 4746,
                  "end": 4758
                },
                "definite": false,
                "start": 4741,
                "end": 4758
              }
            ],
            "declare": false,
            "start": 4737,
            "end": 4759
          }
        ],
        "start": 4353,
        "end": 4768
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 4314,
      "end": 4768
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 161,
  "end": 4768
}
```
