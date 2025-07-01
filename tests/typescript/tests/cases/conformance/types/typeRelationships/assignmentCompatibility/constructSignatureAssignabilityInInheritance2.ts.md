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
        "start": 108,
        "end": 112
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
              "start": 115,
              "end": 118
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 120,
                "end": 126
              },
              "start": 118,
              "end": 126
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
            "start": 115,
            "end": 127
          }
        ],
        "start": 113,
        "end": 129
      },
      "abstract": false,
      "declare": false,
      "start": 102,
      "end": 129
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
        "start": 136,
        "end": 143
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 152,
        "end": 156
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
              "start": 159,
              "end": 162
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 164,
                "end": 170
              },
              "start": 162,
              "end": 170
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
            "start": 159,
            "end": 171
          }
        ],
        "start": 157,
        "end": 173
      },
      "abstract": false,
      "declare": false,
      "start": 130,
      "end": 173
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
        "start": 180,
        "end": 188
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 197,
        "end": 204
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
              "start": 207,
              "end": 210
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 212,
                "end": 218
              },
              "start": 210,
              "end": 218
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
            "start": 207,
            "end": 219
          }
        ],
        "start": 205,
        "end": 221
      },
      "abstract": false,
      "declare": false,
      "start": 174,
      "end": 221
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
        "start": 228,
        "end": 240
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 249,
        "end": 253
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
              "start": 256,
              "end": 260
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 262,
                "end": 268
              },
              "start": 260,
              "end": 268
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
            "start": 256,
            "end": 269
          }
        ],
        "start": 254,
        "end": 271
      },
      "abstract": false,
      "declare": false,
      "start": 222,
      "end": 271
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 283,
        "end": 284
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
              "start": 307,
              "end": 308
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
                        "start": 318,
                        "end": 324
                      },
                      "start": 316,
                      "end": 324
                    },
                    "start": 315,
                    "end": 324
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 329,
                      "end": 335
                    },
                    "start": 329,
                    "end": 337
                  },
                  "start": 326,
                  "end": 337
                },
                "start": 310,
                "end": 337
              },
              "start": 308,
              "end": 337
            },
            "accessibility": null,
            "static": false,
            "start": 307,
            "end": 338
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
              "start": 343,
              "end": 345
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
                        "start": 355,
                        "end": 361
                      },
                      "start": 353,
                      "end": 361
                    },
                    "start": 352,
                    "end": 361
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 366,
                      "end": 372
                    },
                    "start": 366,
                    "end": 374
                  },
                  "start": 363,
                  "end": 374
                },
                "start": 347,
                "end": 374
              },
              "start": 345,
              "end": 374
            },
            "accessibility": null,
            "static": false,
            "start": 343,
            "end": 375
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
              "start": 380,
              "end": 382
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
                        "start": 392,
                        "end": 398
                      },
                      "start": 390,
                      "end": 398
                    },
                    "start": 389,
                    "end": 398
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 403,
                    "end": 407
                  },
                  "start": 400,
                  "end": 407
                },
                "start": 384,
                "end": 407
              },
              "start": 382,
              "end": 407
            },
            "accessibility": null,
            "static": false,
            "start": 380,
            "end": 408
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
              "start": 413,
              "end": 415
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
                        "start": 425,
                        "end": 431
                      },
                      "start": 423,
                      "end": 431
                    },
                    "start": 422,
                    "end": 431
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
                        "start": 436,
                        "end": 442
                      },
                      "start": 434,
                      "end": 442
                    },
                    "start": 433,
                    "end": 442
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 447,
                    "end": 453
                  },
                  "start": 444,
                  "end": 453
                },
                "start": 417,
                "end": 453
              },
              "start": 415,
              "end": 453
            },
            "accessibility": null,
            "static": false,
            "start": 413,
            "end": 454
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
              "start": 459,
              "end": 461
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
                                "start": 477,
                                "end": 483
                              },
                              "start": 475,
                              "end": 483
                            },
                            "start": 472,
                            "end": 483
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 488,
                            "end": 494
                          },
                          "start": 485,
                          "end": 494
                        },
                        "start": 471,
                        "end": 494
                      },
                      "start": 469,
                      "end": 494
                    },
                    "start": 468,
                    "end": 494
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 499,
                    "end": 505
                  },
                  "start": 496,
                  "end": 505
                },
                "start": 463,
                "end": 505
              },
              "start": 461,
              "end": 505
            },
            "accessibility": null,
            "static": false,
            "start": 459,
            "end": 506
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
              "start": 511,
              "end": 513
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
                                  "start": 529,
                                  "end": 533
                                },
                                "typeArguments": null,
                                "start": 529,
                                "end": 533
                              },
                              "start": 527,
                              "end": 533
                            },
                            "start": 524,
                            "end": 533
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
                              "start": 538,
                              "end": 545
                            },
                            "typeArguments": null,
                            "start": 538,
                            "end": 545
                          },
                          "start": 535,
                          "end": 545
                        },
                        "start": 523,
                        "end": 545
                      },
                      "start": 521,
                      "end": 545
                    },
                    "start": 520,
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
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 550,
                      "end": 554
                    },
                    "typeArguments": null,
                    "start": 550,
                    "end": 554
                  },
                  "start": 547,
                  "end": 554
                },
                "start": 515,
                "end": 554
              },
              "start": 513,
              "end": 554
            },
            "accessibility": null,
            "static": false,
            "start": 511,
            "end": 555
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
              "start": 560,
              "end": 562
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
                                  "start": 578,
                                  "end": 582
                                },
                                "typeArguments": null,
                                "start": 578,
                                "end": 582
                              },
                              "start": 576,
                              "end": 582
                            },
                            "start": 573,
                            "end": 582
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
                              "start": 587,
                              "end": 594
                            },
                            "typeArguments": null,
                            "start": 587,
                            "end": 594
                          },
                          "start": 584,
                          "end": 594
                        },
                        "start": 572,
                        "end": 594
                      },
                      "start": 570,
                      "end": 594
                    },
                    "start": 569,
                    "end": 594
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
                              "start": 603,
                              "end": 607
                            },
                            "typeArguments": null,
                            "start": 603,
                            "end": 607
                          },
                          "start": 601,
                          "end": 607
                        },
                        "start": 600,
                        "end": 607
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
                          "start": 612,
                          "end": 619
                        },
                        "typeArguments": null,
                        "start": 612,
                        "end": 619
                      },
                      "start": 609,
                      "end": 619
                    },
                    "start": 599,
                    "end": 619
                  },
                  "start": 596,
                  "end": 619
                },
                "start": 564,
                "end": 619
              },
              "start": 562,
              "end": 619
            },
            "accessibility": null,
            "static": false,
            "start": 560,
            "end": 620
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
              "start": 625,
              "end": 627
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
                                  "start": 643,
                                  "end": 647
                                },
                                "typeArguments": null,
                                "start": 643,
                                "end": 647
                              },
                              "start": 641,
                              "end": 647
                            },
                            "start": 638,
                            "end": 647
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
                              "start": 652,
                              "end": 659
                            },
                            "typeArguments": null,
                            "start": 652,
                            "end": 659
                          },
                          "start": 649,
                          "end": 659
                        },
                        "start": 637,
                        "end": 659
                      },
                      "start": 635,
                      "end": 659
                    },
                    "start": 634,
                    "end": 659
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
                                  "start": 671,
                                  "end": 675
                                },
                                "typeArguments": null,
                                "start": 671,
                                "end": 675
                              },
                              "start": 669,
                              "end": 675
                            },
                            "start": 665,
                            "end": 675
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
                              "start": 680,
                              "end": 687
                            },
                            "typeArguments": null,
                            "start": 680,
                            "end": 687
                          },
                          "start": 677,
                          "end": 687
                        },
                        "start": 664,
                        "end": 687
                      },
                      "start": 662,
                      "end": 687
                    },
                    "start": 661,
                    "end": 687
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
                              "start": 696,
                              "end": 700
                            },
                            "typeArguments": null,
                            "start": 696,
                            "end": 700
                          },
                          "start": 694,
                          "end": 700
                        },
                        "start": 693,
                        "end": 700
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
                          "start": 705,
                          "end": 712
                        },
                        "typeArguments": null,
                        "start": 705,
                        "end": 712
                      },
                      "start": 702,
                      "end": 712
                    },
                    "start": 692,
                    "end": 712
                  },
                  "start": 689,
                  "end": 712
                },
                "start": 629,
                "end": 712
              },
              "start": 627,
              "end": 712
            },
            "accessibility": null,
            "static": false,
            "start": 625,
            "end": 713
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
              "start": 718,
              "end": 720
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
                            "start": 731,
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
                        "start": 730,
                        "end": 752
                      },
                      "start": 728,
                      "end": 752
                    },
                    "start": 727,
                    "end": 752
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
                                  "start": 764,
                                  "end": 768
                                },
                                "typeArguments": null,
                                "start": 764,
                                "end": 768
                              },
                              "start": 762,
                              "end": 768
                            },
                            "start": 758,
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
                              "name": "Derived",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 773,
                              "end": 780
                            },
                            "typeArguments": null,
                            "start": 773,
                            "end": 780
                          },
                          "start": 770,
                          "end": 780
                        },
                        "start": 757,
                        "end": 780
                      },
                      "start": 755,
                      "end": 780
                    },
                    "start": 754,
                    "end": 780
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
                              "start": 789,
                              "end": 793
                            },
                            "typeArguments": null,
                            "start": 789,
                            "end": 793
                          },
                          "start": 787,
                          "end": 793
                        },
                        "start": 786,
                        "end": 793
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
                          "start": 798,
                          "end": 805
                        },
                        "typeArguments": null,
                        "start": 798,
                        "end": 805
                      },
                      "start": 795,
                      "end": 805
                    },
                    "start": 785,
                    "end": 805
                  },
                  "start": 782,
                  "end": 805
                },
                "start": 722,
                "end": 805
              },
              "start": 720,
              "end": 805
            },
            "accessibility": null,
            "static": false,
            "start": 718,
            "end": 806
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
              "start": 811,
              "end": 814
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
                      "start": 824,
                      "end": 825
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
                            "start": 827,
                            "end": 834
                          },
                          "typeArguments": null,
                          "start": 827,
                          "end": 834
                        },
                        "start": 827,
                        "end": 836
                      },
                      "start": 825,
                      "end": 836
                    },
                    "value": null,
                    "start": 821,
                    "end": 836
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
                      "start": 841,
                      "end": 848
                    },
                    "typeArguments": null,
                    "start": 841,
                    "end": 848
                  },
                  "start": 838,
                  "end": 848
                },
                "start": 816,
                "end": 848
              },
              "start": 814,
              "end": 848
            },
            "accessibility": null,
            "static": false,
            "start": 811,
            "end": 849
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
              "start": 854,
              "end": 857
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
                              "start": 869,
                              "end": 872
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 874,
                                "end": 880
                              },
                              "start": 872,
                              "end": 880
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 869,
                            "end": 880
                          }
                        ],
                        "start": 867,
                        "end": 882
                      },
                      "start": 865,
                      "end": 882
                    },
                    "start": 864,
                    "end": 882
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
                              "start": 889,
                              "end": 892
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 894,
                                "end": 900
                              },
                              "start": 892,
                              "end": 900
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 889,
                            "end": 901
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
                              "start": 902,
                              "end": 905
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 907,
                                "end": 913
                              },
                              "start": 905,
                              "end": 913
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 902,
                            "end": 913
                          }
                        ],
                        "start": 887,
                        "end": 915
                      },
                      "start": 885,
                      "end": 915
                    },
                    "start": 884,
                    "end": 915
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
                      "start": 920,
                      "end": 924
                    },
                    "typeArguments": null,
                    "start": 920,
                    "end": 924
                  },
                  "start": 917,
                  "end": 924
                },
                "start": 859,
                "end": 924
              },
              "start": 857,
              "end": 924
            },
            "accessibility": null,
            "static": false,
            "start": 854,
            "end": 925
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
              "start": 930,
              "end": 933
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
                          "start": 943,
                          "end": 948
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
                                "start": 949,
                                "end": 953
                              },
                              "typeArguments": null,
                              "start": 949,
                              "end": 953
                            }
                          ],
                          "start": 948,
                          "end": 954
                        },
                        "start": 943,
                        "end": 954
                      },
                      "start": 941,
                      "end": 954
                    },
                    "start": 940,
                    "end": 954
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
                          "start": 959,
                          "end": 964
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
                                "start": 965,
                                "end": 973
                              },
                              "typeArguments": null,
                              "start": 965,
                              "end": 973
                            }
                          ],
                          "start": 964,
                          "end": 974
                        },
                        "start": 959,
                        "end": 974
                      },
                      "start": 957,
                      "end": 974
                    },
                    "start": 956,
                    "end": 974
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
                      "start": 979,
                      "end": 984
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
                            "start": 985,
                            "end": 992
                          },
                          "typeArguments": null,
                          "start": 985,
                          "end": 992
                        }
                      ],
                      "start": 984,
                      "end": 993
                    },
                    "start": 979,
                    "end": 993
                  },
                  "start": 976,
                  "end": 993
                },
                "start": 935,
                "end": 993
              },
              "start": 933,
              "end": 993
            },
            "accessibility": null,
            "static": false,
            "start": 930,
            "end": 994
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
              "start": 999,
              "end": 1002
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
                          "start": 1012,
                          "end": 1017
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
                                "start": 1018,
                                "end": 1022
                              },
                              "typeArguments": null,
                              "start": 1018,
                              "end": 1022
                            }
                          ],
                          "start": 1017,
                          "end": 1023
                        },
                        "start": 1012,
                        "end": 1023
                      },
                      "start": 1010,
                      "end": 1023
                    },
                    "start": 1009,
                    "end": 1023
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
                          "start": 1028,
                          "end": 1033
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
                                "start": 1034,
                                "end": 1041
                              },
                              "typeArguments": null,
                              "start": 1034,
                              "end": 1041
                            }
                          ],
                          "start": 1033,
                          "end": 1042
                        },
                        "start": 1028,
                        "end": 1042
                      },
                      "start": 1026,
                      "end": 1042
                    },
                    "start": 1025,
                    "end": 1042
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
                      "start": 1047,
                      "end": 1052
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
                            "start": 1053,
                            "end": 1060
                          },
                          "typeArguments": null,
                          "start": 1053,
                          "end": 1060
                        }
                      ],
                      "start": 1052,
                      "end": 1061
                    },
                    "start": 1047,
                    "end": 1061
                  },
                  "start": 1044,
                  "end": 1061
                },
                "start": 1004,
                "end": 1061
              },
              "start": 1002,
              "end": 1061
            },
            "accessibility": null,
            "static": false,
            "start": 999,
            "end": 1062
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
              "start": 1067,
              "end": 1070
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
                              "start": 1082,
                              "end": 1083
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1085,
                                "end": 1091
                              },
                              "start": 1083,
                              "end": 1091
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1082,
                            "end": 1092
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
                              "start": 1093,
                              "end": 1094
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1096,
                                "end": 1102
                              },
                              "start": 1094,
                              "end": 1102
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1093,
                            "end": 1102
                          }
                        ],
                        "start": 1080,
                        "end": 1104
                      },
                      "start": 1078,
                      "end": 1104
                    },
                    "start": 1077,
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
                      "name": "Object",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1109,
                      "end": 1115
                    },
                    "typeArguments": null,
                    "start": 1109,
                    "end": 1115
                  },
                  "start": 1106,
                  "end": 1115
                },
                "start": 1072,
                "end": 1115
              },
              "start": 1070,
              "end": 1115
            },
            "accessibility": null,
            "static": false,
            "start": 1067,
            "end": 1116
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
              "start": 1121,
              "end": 1124
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
                            "start": 1144,
                            "end": 1150
                          },
                          "start": 1142,
                          "end": 1150
                        },
                        "start": 1141,
                        "end": 1150
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1153,
                          "end": 1159
                        },
                        "start": 1153,
                        "end": 1161
                      },
                      "start": 1151,
                      "end": 1161
                    },
                    "start": 1136,
                    "end": 1162
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
                            "start": 1179,
                            "end": 1185
                          },
                          "start": 1177,
                          "end": 1185
                        },
                        "start": 1176,
                        "end": 1185
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 1188,
                          "end": 1194
                        },
                        "start": 1188,
                        "end": 1196
                      },
                      "start": 1186,
                      "end": 1196
                    },
                    "start": 1171,
                    "end": 1197
                  }
                ],
                "start": 1126,
                "end": 1203
              },
              "start": 1124,
              "end": 1203
            },
            "accessibility": null,
            "static": false,
            "start": 1121,
            "end": 1204
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
              "start": 1209,
              "end": 1212
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
                            "start": 1229,
                            "end": 1230
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Derived",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1239,
                              "end": 1246
                            },
                            "typeArguments": null,
                            "start": 1239,
                            "end": 1246
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1229,
                          "end": 1246
                        }
                      ],
                      "start": 1228,
                      "end": 1247
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
                              "start": 1251,
                              "end": 1252
                            },
                            "typeArguments": null,
                            "start": 1251,
                            "end": 1252
                          },
                          "start": 1249,
                          "end": 1252
                        },
                        "start": 1248,
                        "end": 1252
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1255,
                          "end": 1261
                        },
                        "start": 1255,
                        "end": 1263
                      },
                      "start": 1253,
                      "end": 1263
                    },
                    "start": 1224,
                    "end": 1264
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
                            "start": 1278,
                            "end": 1279
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1288,
                              "end": 1292
                            },
                            "typeArguments": null,
                            "start": 1288,
                            "end": 1292
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1278,
                          "end": 1292
                        }
                      ],
                      "start": 1277,
                      "end": 1293
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
                              "start": 1297,
                              "end": 1298
                            },
                            "typeArguments": null,
                            "start": 1297,
                            "end": 1298
                          },
                          "start": 1295,
                          "end": 1298
                        },
                        "start": 1294,
                        "end": 1298
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1301,
                          "end": 1307
                        },
                        "start": 1301,
                        "end": 1309
                      },
                      "start": 1299,
                      "end": 1309
                    },
                    "start": 1273,
                    "end": 1310
                  }
                ],
                "start": 1214,
                "end": 1316
              },
              "start": 1212,
              "end": 1316
            },
            "accessibility": null,
            "static": false,
            "start": 1209,
            "end": 1317
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
              "start": 1322,
              "end": 1325
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
                                    "type": "TSNumberKeyword",
                                    "start": 1353,
                                    "end": 1359
                                  },
                                  "start": 1351,
                                  "end": 1359
                                },
                                "start": 1350,
                                "end": 1359
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1364,
                                "end": 1370
                              },
                              "start": 1361,
                              "end": 1370
                            },
                            "start": 1345,
                            "end": 1370
                          },
                          "start": 1343,
                          "end": 1370
                        },
                        "start": 1342,
                        "end": 1370
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1373,
                          "end": 1379
                        },
                        "start": 1373,
                        "end": 1381
                      },
                      "start": 1371,
                      "end": 1381
                    },
                    "start": 1337,
                    "end": 1382
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
                                    "type": "TSStringKeyword",
                                    "start": 1407,
                                    "end": 1413
                                  },
                                  "start": 1405,
                                  "end": 1413
                                },
                                "start": 1404,
                                "end": 1413
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1418,
                                "end": 1424
                              },
                              "start": 1415,
                              "end": 1424
                            },
                            "start": 1399,
                            "end": 1424
                          },
                          "start": 1397,
                          "end": 1424
                        },
                        "start": 1396,
                        "end": 1424
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 1427,
                          "end": 1433
                        },
                        "start": 1427,
                        "end": 1435
                      },
                      "start": 1425,
                      "end": 1435
                    },
                    "start": 1391,
                    "end": 1436
                  }
                ],
                "start": 1327,
                "end": 1442
              },
              "start": 1325,
              "end": 1442
            },
            "accessibility": null,
            "static": false,
            "start": 1322,
            "end": 1443
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a18",
              "optional": false,
              "typeAnnotation": null,
              "start": 1448,
              "end": 1451
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
                                        "start": 1493,
                                        "end": 1499
                                      },
                                      "start": 1491,
                                      "end": 1499
                                    },
                                    "start": 1490,
                                    "end": 1499
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1502,
                                    "end": 1508
                                  },
                                  "start": 1500,
                                  "end": 1508
                                },
                                "start": 1485,
                                "end": 1509
                              },
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
                                        "type": "TSStringKeyword",
                                        "start": 1530,
                                        "end": 1536
                                      },
                                      "start": 1528,
                                      "end": 1536
                                    },
                                    "start": 1527,
                                    "end": 1536
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1539,
                                    "end": 1545
                                  },
                                  "start": 1537,
                                  "end": 1545
                                },
                                "start": 1522,
                                "end": 1546
                              }
                            ],
                            "start": 1471,
                            "end": 1556
                          },
                          "start": 1469,
                          "end": 1556
                        },
                        "start": 1468,
                        "end": 1556
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 1559,
                          "end": 1562
                        },
                        "start": 1559,
                        "end": 1564
                      },
                      "start": 1557,
                      "end": 1564
                    },
                    "start": 1463,
                    "end": 1565
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
                                        "start": 1604,
                                        "end": 1611
                                      },
                                      "start": 1602,
                                      "end": 1611
                                    },
                                    "start": 1601,
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
                                "start": 1596,
                                "end": 1622
                              },
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
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Date",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1643,
                                          "end": 1647
                                        },
                                        "typeArguments": null,
                                        "start": 1643,
                                        "end": 1647
                                      },
                                      "start": 1641,
                                      "end": 1647
                                    },
                                    "start": 1640,
                                    "end": 1647
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Date",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1650,
                                      "end": 1654
                                    },
                                    "typeArguments": null,
                                    "start": 1650,
                                    "end": 1654
                                  },
                                  "start": 1648,
                                  "end": 1654
                                },
                                "start": 1635,
                                "end": 1655
                              }
                            ],
                            "start": 1582,
                            "end": 1665
                          },
                          "start": 1580,
                          "end": 1665
                        },
                        "start": 1579,
                        "end": 1665
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 1668,
                          "end": 1671
                        },
                        "start": 1668,
                        "end": 1673
                      },
                      "start": 1666,
                      "end": 1673
                    },
                    "start": 1574,
                    "end": 1674
                  }
                ],
                "start": 1453,
                "end": 1680
              },
              "start": 1451,
              "end": 1680
            },
            "accessibility": null,
            "static": false,
            "start": 1448,
            "end": 1681
          }
        ],
        "start": 285,
        "end": 1683
      },
      "declare": false,
      "start": 273,
      "end": 1683
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 1702,
        "end": 1703
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
            "start": 1712,
            "end": 1713
          },
          "typeArguments": null,
          "start": 1712,
          "end": 1713
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
              "start": 1731,
              "end": 1732
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
                        "start": 1739,
                        "end": 1740
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1739,
                      "end": 1740
                    }
                  ],
                  "start": 1738,
                  "end": 1741
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
                          "start": 1745,
                          "end": 1746
                        },
                        "typeArguments": null,
                        "start": 1745,
                        "end": 1746
                      },
                      "start": 1743,
                      "end": 1746
                    },
                    "start": 1742,
                    "end": 1746
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
                        "start": 1751,
                        "end": 1752
                      },
                      "typeArguments": null,
                      "start": 1751,
                      "end": 1752
                    },
                    "start": 1751,
                    "end": 1754
                  },
                  "start": 1748,
                  "end": 1754
                },
                "start": 1734,
                "end": 1754
              },
              "start": 1732,
              "end": 1754
            },
            "accessibility": null,
            "static": false,
            "start": 1731,
            "end": 1755
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
              "start": 1817,
              "end": 1819
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
                        "start": 1826,
                        "end": 1827
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1826,
                      "end": 1827
                    }
                  ],
                  "start": 1825,
                  "end": 1828
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
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1838,
                      "end": 1844
                    },
                    "start": 1838,
                    "end": 1846
                  },
                  "start": 1835,
                  "end": 1846
                },
                "start": 1821,
                "end": 1846
              },
              "start": 1819,
              "end": 1846
            },
            "accessibility": null,
            "static": false,
            "start": 1817,
            "end": 1847
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
              "start": 1858,
              "end": 1860
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
                        "start": 1867,
                        "end": 1868
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1867,
                      "end": 1868
                    }
                  ],
                  "start": 1866,
                  "end": 1869
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
                      "start": 1879,
                      "end": 1880
                    },
                    "typeArguments": null,
                    "start": 1879,
                    "end": 1880
                  },
                  "start": 1876,
                  "end": 1880
                },
                "start": 1862,
                "end": 1880
              },
              "start": 1860,
              "end": 1880
            },
            "accessibility": null,
            "static": false,
            "start": 1858,
            "end": 1881
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
              "start": 1916,
              "end": 1918
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
                        "start": 1925,
                        "end": 1926
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1925,
                      "end": 1926
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1928,
                        "end": 1929
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1928,
                      "end": 1929
                    }
                  ],
                  "start": 1924,
                  "end": 1930
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
                          "start": 1934,
                          "end": 1935
                        },
                        "typeArguments": null,
                        "start": 1934,
                        "end": 1935
                      },
                      "start": 1932,
                      "end": 1935
                    },
                    "start": 1931,
                    "end": 1935
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
                          "start": 1940,
                          "end": 1941
                        },
                        "typeArguments": null,
                        "start": 1940,
                        "end": 1941
                      },
                      "start": 1938,
                      "end": 1941
                    },
                    "start": 1937,
                    "end": 1941
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
                      "start": 1946,
                      "end": 1947
                    },
                    "typeArguments": null,
                    "start": 1946,
                    "end": 1947
                  },
                  "start": 1943,
                  "end": 1947
                },
                "start": 1920,
                "end": 1947
              },
              "start": 1918,
              "end": 1947
            },
            "accessibility": null,
            "static": false,
            "start": 1916,
            "end": 1948
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
              "start": 2023,
              "end": 2025
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
                        "start": 2032,
                        "end": 2033
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2032,
                      "end": 2033
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2035,
                        "end": 2036
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2035,
                      "end": 2036
                    }
                  ],
                  "start": 2031,
                  "end": 2037
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
                            "start": 2042,
                            "end": 2048
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
                              "start": 2053,
                              "end": 2054
                            },
                            "typeArguments": null,
                            "start": 2053,
                            "end": 2054
                          },
                          "start": 2050,
                          "end": 2054
                        },
                        "start": 2041,
                        "end": 2054
                      },
                      "start": 2039,
                      "end": 2054
                    },
                    "start": 2038,
                    "end": 2054
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
                      "start": 2059,
                      "end": 2060
                    },
                    "typeArguments": null,
                    "start": 2059,
                    "end": 2060
                  },
                  "start": 2056,
                  "end": 2060
                },
                "start": 2027,
                "end": 2060
              },
              "start": 2025,
              "end": 2060
            },
            "accessibility": null,
            "static": false,
            "start": 2023,
            "end": 2061
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
              "start": 2128,
              "end": 2130
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
                        "start": 2137,
                        "end": 2138
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2147,
                          "end": 2151
                        },
                        "typeArguments": null,
                        "start": 2147,
                        "end": 2151
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2137,
                      "end": 2151
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2153,
                        "end": 2154
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2163,
                          "end": 2170
                        },
                        "typeArguments": null,
                        "start": 2163,
                        "end": 2170
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2153,
                      "end": 2170
                    }
                  ],
                  "start": 2136,
                  "end": 2171
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
                                  "start": 2181,
                                  "end": 2182
                                },
                                "typeArguments": null,
                                "start": 2181,
                                "end": 2182
                              },
                              "start": 2179,
                              "end": 2182
                            },
                            "start": 2176,
                            "end": 2182
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
                              "start": 2187,
                              "end": 2188
                            },
                            "typeArguments": null,
                            "start": 2187,
                            "end": 2188
                          },
                          "start": 2184,
                          "end": 2188
                        },
                        "start": 2175,
                        "end": 2188
                      },
                      "start": 2173,
                      "end": 2188
                    },
                    "start": 2172,
                    "end": 2188
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
                      "start": 2193,
                      "end": 2194
                    },
                    "typeArguments": null,
                    "start": 2193,
                    "end": 2194
                  },
                  "start": 2190,
                  "end": 2194
                },
                "start": 2132,
                "end": 2194
              },
              "start": 2130,
              "end": 2194
            },
            "accessibility": null,
            "static": false,
            "start": 2128,
            "end": 2195
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
              "start": 2249,
              "end": 2251
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
                        "start": 2258,
                        "end": 2259
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2268,
                          "end": 2272
                        },
                        "typeArguments": null,
                        "start": 2268,
                        "end": 2272
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2258,
                      "end": 2272
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2274,
                        "end": 2275
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2284,
                          "end": 2291
                        },
                        "typeArguments": null,
                        "start": 2284,
                        "end": 2291
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2274,
                      "end": 2291
                    }
                  ],
                  "start": 2257,
                  "end": 2292
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
                                  "start": 2302,
                                  "end": 2303
                                },
                                "typeArguments": null,
                                "start": 2302,
                                "end": 2303
                              },
                              "start": 2300,
                              "end": 2303
                            },
                            "start": 2297,
                            "end": 2303
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
                              "start": 2308,
                              "end": 2309
                            },
                            "typeArguments": null,
                            "start": 2308,
                            "end": 2309
                          },
                          "start": 2305,
                          "end": 2309
                        },
                        "start": 2296,
                        "end": 2309
                      },
                      "start": 2294,
                      "end": 2309
                    },
                    "start": 2293,
                    "end": 2309
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
                              "start": 2318,
                              "end": 2319
                            },
                            "typeArguments": null,
                            "start": 2318,
                            "end": 2319
                          },
                          "start": 2316,
                          "end": 2319
                        },
                        "start": 2315,
                        "end": 2319
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
                          "start": 2324,
                          "end": 2325
                        },
                        "typeArguments": null,
                        "start": 2324,
                        "end": 2325
                      },
                      "start": 2321,
                      "end": 2325
                    },
                    "start": 2314,
                    "end": 2325
                  },
                  "start": 2311,
                  "end": 2325
                },
                "start": 2253,
                "end": 2325
              },
              "start": 2251,
              "end": 2325
            },
            "accessibility": null,
            "static": false,
            "start": 2249,
            "end": 2326
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
              "start": 2337,
              "end": 2339
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
                        "start": 2346,
                        "end": 2347
                      },
                      "constraint": {
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
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2346,
                      "end": 2360
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2362,
                        "end": 2363
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2372,
                          "end": 2379
                        },
                        "typeArguments": null,
                        "start": 2372,
                        "end": 2379
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2362,
                      "end": 2379
                    }
                  ],
                  "start": 2345,
                  "end": 2380
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
                                  "start": 2390,
                                  "end": 2391
                                },
                                "typeArguments": null,
                                "start": 2390,
                                "end": 2391
                              },
                              "start": 2388,
                              "end": 2391
                            },
                            "start": 2385,
                            "end": 2391
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
                              "start": 2396,
                              "end": 2397
                            },
                            "typeArguments": null,
                            "start": 2396,
                            "end": 2397
                          },
                          "start": 2393,
                          "end": 2397
                        },
                        "start": 2384,
                        "end": 2397
                      },
                      "start": 2382,
                      "end": 2397
                    },
                    "start": 2381,
                    "end": 2397
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
                                  "start": 2409,
                                  "end": 2410
                                },
                                "typeArguments": null,
                                "start": 2409,
                                "end": 2410
                              },
                              "start": 2407,
                              "end": 2410
                            },
                            "start": 2403,
                            "end": 2410
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
                              "start": 2415,
                              "end": 2416
                            },
                            "typeArguments": null,
                            "start": 2415,
                            "end": 2416
                          },
                          "start": 2412,
                          "end": 2416
                        },
                        "start": 2402,
                        "end": 2416
                      },
                      "start": 2400,
                      "end": 2416
                    },
                    "start": 2399,
                    "end": 2416
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
                              "start": 2425,
                              "end": 2426
                            },
                            "typeArguments": null,
                            "start": 2425,
                            "end": 2426
                          },
                          "start": 2423,
                          "end": 2426
                        },
                        "start": 2422,
                        "end": 2426
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
                          "start": 2431,
                          "end": 2432
                        },
                        "typeArguments": null,
                        "start": 2431,
                        "end": 2432
                      },
                      "start": 2428,
                      "end": 2432
                    },
                    "start": 2421,
                    "end": 2432
                  },
                  "start": 2418,
                  "end": 2432
                },
                "start": 2341,
                "end": 2432
              },
              "start": 2339,
              "end": 2432
            },
            "accessibility": null,
            "static": false,
            "start": 2337,
            "end": 2433
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
              "start": 2444,
              "end": 2446
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
                        "start": 2453,
                        "end": 2454
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2463,
                          "end": 2467
                        },
                        "typeArguments": null,
                        "start": 2463,
                        "end": 2467
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2453,
                      "end": 2467
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2469,
                        "end": 2470
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2479,
                          "end": 2486
                        },
                        "typeArguments": null,
                        "start": 2479,
                        "end": 2486
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2469,
                      "end": 2486
                    }
                  ],
                  "start": 2452,
                  "end": 2487
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
                                  "start": 2497,
                                  "end": 2498
                                },
                                "typeArguments": null,
                                "start": 2497,
                                "end": 2498
                              },
                              "start": 2495,
                              "end": 2498
                            },
                            "start": 2492,
                            "end": 2498
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
                              "start": 2503,
                              "end": 2504
                            },
                            "typeArguments": null,
                            "start": 2503,
                            "end": 2504
                          },
                          "start": 2500,
                          "end": 2504
                        },
                        "start": 2491,
                        "end": 2504
                      },
                      "start": 2489,
                      "end": 2504
                    },
                    "start": 2488,
                    "end": 2504
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
                                      "start": 2518,
                                      "end": 2521
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 2523,
                                        "end": 2529
                                      },
                                      "start": 2521,
                                      "end": 2529
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 2518,
                                    "end": 2530
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
                                      "start": 2531,
                                      "end": 2535
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 2537,
                                        "end": 2543
                                      },
                                      "start": 2535,
                                      "end": 2543
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 2531,
                                    "end": 2543
                                  }
                                ],
                                "start": 2516,
                                "end": 2545
                              },
                              "start": 2514,
                              "end": 2545
                            },
                            "start": 2510,
                            "end": 2545
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
                              "start": 2550,
                              "end": 2551
                            },
                            "typeArguments": null,
                            "start": 2550,
                            "end": 2551
                          },
                          "start": 2547,
                          "end": 2551
                        },
                        "start": 2509,
                        "end": 2551
                      },
                      "start": 2507,
                      "end": 2551
                    },
                    "start": 2506,
                    "end": 2551
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
                        "start": 2557,
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
                    "start": 2556,
                    "end": 2567
                  },
                  "start": 2553,
                  "end": 2567
                },
                "start": 2448,
                "end": 2567
              },
              "start": 2446,
              "end": 2567
            },
            "accessibility": null,
            "static": false,
            "start": 2444,
            "end": 2568
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
              "start": 2622,
              "end": 2625
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
                        "start": 2632,
                        "end": 2633
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2642,
                          "end": 2649
                        },
                        "typeArguments": null,
                        "start": 2642,
                        "end": 2649
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2632,
                      "end": 2649
                    }
                  ],
                  "start": 2631,
                  "end": 2650
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
                      "start": 2654,
                      "end": 2655
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
                            "start": 2657,
                            "end": 2658
                          },
                          "typeArguments": null,
                          "start": 2657,
                          "end": 2658
                        },
                        "start": 2657,
                        "end": 2660
                      },
                      "start": 2655,
                      "end": 2660
                    },
                    "value": null,
                    "start": 2651,
                    "end": 2660
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
                      "start": 2665,
                      "end": 2666
                    },
                    "typeArguments": null,
                    "start": 2665,
                    "end": 2666
                  },
                  "start": 2662,
                  "end": 2666
                },
                "start": 2627,
                "end": 2666
              },
              "start": 2625,
              "end": 2666
            },
            "accessibility": null,
            "static": false,
            "start": 2622,
            "end": 2667
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
              "start": 2678,
              "end": 2681
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
                        "start": 2688,
                        "end": 2689
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2698,
                          "end": 2702
                        },
                        "typeArguments": null,
                        "start": 2698,
                        "end": 2702
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2688,
                      "end": 2702
                    }
                  ],
                  "start": 2687,
                  "end": 2703
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
                          "start": 2707,
                          "end": 2708
                        },
                        "typeArguments": null,
                        "start": 2707,
                        "end": 2708
                      },
                      "start": 2705,
                      "end": 2708
                    },
                    "start": 2704,
                    "end": 2708
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
                          "start": 2713,
                          "end": 2714
                        },
                        "typeArguments": null,
                        "start": 2713,
                        "end": 2714
                      },
                      "start": 2711,
                      "end": 2714
                    },
                    "start": 2710,
                    "end": 2714
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
                      "start": 2719,
                      "end": 2720
                    },
                    "typeArguments": null,
                    "start": 2719,
                    "end": 2720
                  },
                  "start": 2716,
                  "end": 2720
                },
                "start": 2683,
                "end": 2720
              },
              "start": 2681,
              "end": 2720
            },
            "accessibility": null,
            "static": false,
            "start": 2678,
            "end": 2721
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
              "start": 2732,
              "end": 2735
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
                        "start": 2742,
                        "end": 2743
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2752,
                          "end": 2757
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
                                "start": 2758,
                                "end": 2762
                              },
                              "typeArguments": null,
                              "start": 2758,
                              "end": 2762
                            }
                          ],
                          "start": 2757,
                          "end": 2763
                        },
                        "start": 2752,
                        "end": 2763
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2742,
                      "end": 2763
                    }
                  ],
                  "start": 2741,
                  "end": 2764
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
                          "start": 2768,
                          "end": 2773
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
                                "start": 2774,
                                "end": 2778
                              },
                              "typeArguments": null,
                              "start": 2774,
                              "end": 2778
                            }
                          ],
                          "start": 2773,
                          "end": 2779
                        },
                        "start": 2768,
                        "end": 2779
                      },
                      "start": 2766,
                      "end": 2779
                    },
                    "start": 2765,
                    "end": 2779
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
                          "start": 2784,
                          "end": 2785
                        },
                        "typeArguments": null,
                        "start": 2784,
                        "end": 2785
                      },
                      "start": 2782,
                      "end": 2785
                    },
                    "start": 2781,
                    "end": 2785
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
                      "start": 2790,
                      "end": 2795
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
                            "start": 2796,
                            "end": 2803
                          },
                          "typeArguments": null,
                          "start": 2796,
                          "end": 2803
                        }
                      ],
                      "start": 2795,
                      "end": 2804
                    },
                    "start": 2790,
                    "end": 2804
                  },
                  "start": 2787,
                  "end": 2804
                },
                "start": 2737,
                "end": 2804
              },
              "start": 2735,
              "end": 2804
            },
            "accessibility": null,
            "static": false,
            "start": 2732,
            "end": 2805
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
              "start": 2846,
              "end": 2849
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
                        "start": 2856,
                        "end": 2857
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2866,
                          "end": 2871
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
                                "start": 2872,
                                "end": 2879
                              },
                              "typeArguments": null,
                              "start": 2872,
                              "end": 2879
                            }
                          ],
                          "start": 2871,
                          "end": 2880
                        },
                        "start": 2866,
                        "end": 2880
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2856,
                      "end": 2880
                    }
                  ],
                  "start": 2855,
                  "end": 2881
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
                          "start": 2885,
                          "end": 2890
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
                                "start": 2891,
                                "end": 2895
                              },
                              "typeArguments": null,
                              "start": 2891,
                              "end": 2895
                            }
                          ],
                          "start": 2890,
                          "end": 2896
                        },
                        "start": 2885,
                        "end": 2896
                      },
                      "start": 2883,
                      "end": 2896
                    },
                    "start": 2882,
                    "end": 2896
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
                          "start": 2901,
                          "end": 2902
                        },
                        "typeArguments": null,
                        "start": 2901,
                        "end": 2902
                      },
                      "start": 2899,
                      "end": 2902
                    },
                    "start": 2898,
                    "end": 2902
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
                      "start": 2907,
                      "end": 2908
                    },
                    "typeArguments": null,
                    "start": 2907,
                    "end": 2908
                  },
                  "start": 2904,
                  "end": 2908
                },
                "start": 2851,
                "end": 2908
              },
              "start": 2849,
              "end": 2908
            },
            "accessibility": null,
            "static": false,
            "start": 2846,
            "end": 2909
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
              "start": 3007,
              "end": 3010
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
                        "start": 3017,
                        "end": 3018
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3017,
                      "end": 3018
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3020,
                        "end": 3021
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3020,
                      "end": 3021
                    }
                  ],
                  "start": 3016,
                  "end": 3022
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
                              "start": 3028,
                              "end": 3029
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
                                  "start": 3031,
                                  "end": 3032
                                },
                                "typeArguments": null,
                                "start": 3031,
                                "end": 3032
                              },
                              "start": 3029,
                              "end": 3032
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 3028,
                            "end": 3033
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
                              "start": 3034,
                              "end": 3035
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
                                  "start": 3037,
                                  "end": 3038
                                },
                                "typeArguments": null,
                                "start": 3037,
                                "end": 3038
                              },
                              "start": 3035,
                              "end": 3038
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 3034,
                            "end": 3038
                          }
                        ],
                        "start": 3026,
                        "end": 3040
                      },
                      "start": 3024,
                      "end": 3040
                    },
                    "start": 3023,
                    "end": 3040
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
                      "start": 3045,
                      "end": 3046
                    },
                    "typeArguments": null,
                    "start": 3045,
                    "end": 3046
                  },
                  "start": 3042,
                  "end": 3046
                },
                "start": 3012,
                "end": 3046
              },
              "start": 3010,
              "end": 3046
            },
            "accessibility": null,
            "static": false,
            "start": 3007,
            "end": 3047
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
              "start": 3058,
              "end": 3061
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
                        "start": 3068,
                        "end": 3069
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3068,
                      "end": 3069
                    }
                  ],
                  "start": 3067,
                  "end": 3070
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
                          "start": 3074,
                          "end": 3075
                        },
                        "typeArguments": null,
                        "start": 3074,
                        "end": 3075
                      },
                      "start": 3072,
                      "end": 3075
                    },
                    "start": 3071,
                    "end": 3075
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
                        "start": 3080,
                        "end": 3081
                      },
                      "typeArguments": null,
                      "start": 3080,
                      "end": 3081
                    },
                    "start": 3080,
                    "end": 3083
                  },
                  "start": 3077,
                  "end": 3083
                },
                "start": 3063,
                "end": 3083
              },
              "start": 3061,
              "end": 3083
            },
            "accessibility": null,
            "static": false,
            "start": 3058,
            "end": 3084
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
              "start": 3095,
              "end": 3098
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
                        "start": 3105,
                        "end": 3106
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3115,
                          "end": 3119
                        },
                        "typeArguments": null,
                        "start": 3115,
                        "end": 3119
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3105,
                      "end": 3119
                    }
                  ],
                  "start": 3104,
                  "end": 3120
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
                          "start": 3124,
                          "end": 3125
                        },
                        "typeArguments": null,
                        "start": 3124,
                        "end": 3125
                      },
                      "start": 3122,
                      "end": 3125
                    },
                    "start": 3121,
                    "end": 3125
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 3130,
                      "end": 3136
                    },
                    "start": 3130,
                    "end": 3138
                  },
                  "start": 3127,
                  "end": 3138
                },
                "start": 3100,
                "end": 3138
              },
              "start": 3098,
              "end": 3138
            },
            "accessibility": null,
            "static": false,
            "start": 3095,
            "end": 3139
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
              "start": 3150,
              "end": 3153
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
                        "start": 3160,
                        "end": 3161
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3160,
                      "end": 3161
                    }
                  ],
                  "start": 3159,
                  "end": 3162
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
                            "start": 3171,
                            "end": 3175
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
                              "start": 3180,
                              "end": 3181
                            },
                            "typeArguments": null,
                            "start": 3180,
                            "end": 3181
                          },
                          "start": 3177,
                          "end": 3181
                        },
                        "start": 3166,
                        "end": 3181
                      },
                      "start": 3164,
                      "end": 3181
                    },
                    "start": 3163,
                    "end": 3181
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
                        "start": 3186,
                        "end": 3187
                      },
                      "typeArguments": null,
                      "start": 3186,
                      "end": 3187
                    },
                    "start": 3186,
                    "end": 3189
                  },
                  "start": 3183,
                  "end": 3189
                },
                "start": 3155,
                "end": 3189
              },
              "start": 3153,
              "end": 3189
            },
            "accessibility": null,
            "static": false,
            "start": 3150,
            "end": 3190
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a18",
              "optional": false,
              "typeAnnotation": null,
              "start": 3201,
              "end": 3204
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
                        "start": 3211,
                        "end": 3212
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3211,
                      "end": 3212
                    }
                  ],
                  "start": 3210,
                  "end": 3213
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
                                  "start": 3225,
                                  "end": 3226
                                },
                                "typeArguments": null,
                                "start": 3225,
                                "end": 3226
                              },
                              "start": 3223,
                              "end": 3226
                            },
                            "start": 3222,
                            "end": 3226
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
                              "start": 3231,
                              "end": 3232
                            },
                            "typeArguments": null,
                            "start": 3231,
                            "end": 3232
                          },
                          "start": 3228,
                          "end": 3232
                        },
                        "start": 3217,
                        "end": 3232
                      },
                      "start": 3215,
                      "end": 3232
                    },
                    "start": 3214,
                    "end": 3232
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
                        "start": 3237,
                        "end": 3238
                      },
                      "typeArguments": null,
                      "start": 3237,
                      "end": 3238
                    },
                    "start": 3237,
                    "end": 3240
                  },
                  "start": 3234,
                  "end": 3240
                },
                "start": 3206,
                "end": 3240
              },
              "start": 3204,
              "end": 3240
            },
            "accessibility": null,
            "static": false,
            "start": 3201,
            "end": 3241
          }
        ],
        "start": 1714,
        "end": 3292
      },
      "declare": false,
      "start": 1692,
      "end": 3292
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 102,
  "end": 3292
}
```
