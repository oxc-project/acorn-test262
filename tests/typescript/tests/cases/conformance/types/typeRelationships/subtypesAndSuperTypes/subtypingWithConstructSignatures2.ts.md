__ESTREE_TEST__:AST:
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
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 290,
        "end": 294
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                      "start": 306,
                      "end": 312
                    },
                    "start": 304,
                    "end": 312
                  },
                  "start": 303,
                  "end": 312
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 317,
                    "end": 323
                  },
                  "start": 317,
                  "end": 325
                },
                "start": 314,
                "end": 325
              },
              "start": 298,
              "end": 325
            },
            "start": 296,
            "end": 325
          },
          "start": 295,
          "end": 325
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 335,
            "end": 336
          },
          "typeArguments": null,
          "start": 328,
          "end": 336
        },
        "start": 326,
        "end": 336
      },
      "body": null,
      "expression": false,
      "start": 273,
      "end": 337
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 355,
        "end": 359
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 363,
              "end": 366
            },
            "start": 361,
            "end": 366
          },
          "start": 360,
          "end": 366
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 369,
          "end": 372
        },
        "start": 367,
        "end": 372
      },
      "body": null,
      "expression": false,
      "start": 338,
      "end": 373
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 392,
        "end": 396
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                      "start": 408,
                      "end": 414
                    },
                    "start": 406,
                    "end": 414
                  },
                  "start": 405,
                  "end": 414
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 419,
                    "end": 425
                  },
                  "start": 419,
                  "end": 427
                },
                "start": 416,
                "end": 427
              },
              "start": 400,
              "end": 427
            },
            "start": 398,
            "end": 427
          },
          "start": 397,
          "end": 427
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 437,
            "end": 438
          },
          "typeArguments": null,
          "start": 430,
          "end": 438
        },
        "start": 428,
        "end": 438
      },
      "body": null,
      "expression": false,
      "start": 375,
      "end": 439
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 457,
        "end": 461
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 465,
              "end": 468
            },
            "start": 463,
            "end": 468
          },
          "start": 462,
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
      "start": 440,
      "end": 475
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
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
          "name": "a",
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
                      "start": 510,
                      "end": 516
                    },
                    "start": 508,
                    "end": 516
                  },
                  "start": 507,
                  "end": 516
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 521,
                  "end": 525
                },
                "start": 518,
                "end": 525
              },
              "start": 502,
              "end": 525
            },
            "start": 500,
            "end": 525
          },
          "start": 499,
          "end": 525
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 535,
            "end": 536
          },
          "typeArguments": null,
          "start": 528,
          "end": 536
        },
        "start": 526,
        "end": 536
      },
      "body": null,
      "expression": false,
      "start": 477,
      "end": 537
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 555,
        "end": 559
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 563,
              "end": 566
            },
            "start": 561,
            "end": 566
          },
          "start": 560,
          "end": 566
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 569,
          "end": 572
        },
        "start": 567,
        "end": 572
      },
      "body": null,
      "expression": false,
      "start": 538,
      "end": 573
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 592,
        "end": 596
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                      "start": 608,
                      "end": 614
                    },
                    "start": 606,
                    "end": 614
                  },
                  "start": 605,
                  "end": 614
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
                      "start": 619,
                      "end": 625
                    },
                    "start": 617,
                    "end": 625
                  },
                  "start": 616,
                  "end": 625
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 630,
                  "end": 636
                },
                "start": 627,
                "end": 636
              },
              "start": 600,
              "end": 636
            },
            "start": 598,
            "end": 636
          },
          "start": 597,
          "end": 636
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 646,
            "end": 647
          },
          "typeArguments": null,
          "start": 639,
          "end": 647
        },
        "start": 637,
        "end": 647
      },
      "body": null,
      "expression": false,
      "start": 575,
      "end": 648
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 666,
        "end": 670
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 674,
              "end": 677
            },
            "start": 672,
            "end": 677
          },
          "start": 671,
          "end": 677
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 680,
          "end": 683
        },
        "start": 678,
        "end": 683
      },
      "body": null,
      "expression": false,
      "start": 649,
      "end": 684
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 703,
        "end": 707
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                              "type": "TSStringKeyword",
                              "start": 729,
                              "end": 735
                            },
                            "start": 727,
                            "end": 735
                          },
                          "start": 724,
                          "end": 735
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 740,
                          "end": 746
                        },
                        "start": 737,
                        "end": 746
                      },
                      "start": 719,
                      "end": 746
                    },
                    "start": 717,
                    "end": 746
                  },
                  "start": 716,
                  "end": 746
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 751,
                  "end": 757
                },
                "start": 748,
                "end": 757
              },
              "start": 711,
              "end": 757
            },
            "start": 709,
            "end": 757
          },
          "start": 708,
          "end": 757
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 767,
            "end": 768
          },
          "typeArguments": null,
          "start": 760,
          "end": 768
        },
        "start": 758,
        "end": 768
      },
      "body": null,
      "expression": false,
      "start": 686,
      "end": 769
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
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
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 795,
              "end": 798
            },
            "start": 793,
            "end": 798
          },
          "start": 792,
          "end": 798
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 801,
          "end": 804
        },
        "start": 799,
        "end": 804
      },
      "body": null,
      "expression": false,
      "start": 770,
      "end": 805
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 824,
        "end": 828
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                                "start": 850,
                                "end": 854
                              },
                              "typeArguments": null,
                              "start": 850,
                              "end": 854
                            },
                            "start": 848,
                            "end": 854
                          },
                          "start": 845,
                          "end": 854
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
                            "start": 859,
                            "end": 866
                          },
                          "typeArguments": null,
                          "start": 859,
                          "end": 866
                        },
                        "start": 856,
                        "end": 866
                      },
                      "start": 840,
                      "end": 866
                    },
                    "start": 838,
                    "end": 866
                  },
                  "start": 837,
                  "end": 866
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
                    "start": 871,
                    "end": 875
                  },
                  "typeArguments": null,
                  "start": 871,
                  "end": 875
                },
                "start": 868,
                "end": 875
              },
              "start": 832,
              "end": 875
            },
            "start": 830,
            "end": 875
          },
          "start": 829,
          "end": 875
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 885,
            "end": 886
          },
          "typeArguments": null,
          "start": 878,
          "end": 886
        },
        "start": 876,
        "end": 886
      },
      "body": null,
      "expression": false,
      "start": 807,
      "end": 887
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 905,
        "end": 909
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 913,
              "end": 916
            },
            "start": 911,
            "end": 916
          },
          "start": 910,
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
      "start": 888,
      "end": 923
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 942,
        "end": 946
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                                "start": 968,
                                "end": 972
                              },
                              "typeArguments": null,
                              "start": 968,
                              "end": 972
                            },
                            "start": 966,
                            "end": 972
                          },
                          "start": 963,
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
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 977,
                            "end": 984
                          },
                          "typeArguments": null,
                          "start": 977,
                          "end": 984
                        },
                        "start": 974,
                        "end": 984
                      },
                      "start": 958,
                      "end": 984
                    },
                    "start": 956,
                    "end": 984
                  },
                  "start": 955,
                  "end": 984
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
                            "start": 997,
                            "end": 1001
                          },
                          "typeArguments": null,
                          "start": 997,
                          "end": 1001
                        },
                        "start": 995,
                        "end": 1001
                      },
                      "start": 994,
                      "end": 1001
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
                        "start": 1006,
                        "end": 1013
                      },
                      "typeArguments": null,
                      "start": 1006,
                      "end": 1013
                    },
                    "start": 1003,
                    "end": 1013
                  },
                  "start": 989,
                  "end": 1013
                },
                "start": 986,
                "end": 1013
              },
              "start": 950,
              "end": 1013
            },
            "start": 948,
            "end": 1013
          },
          "start": 947,
          "end": 1013
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1023,
            "end": 1024
          },
          "typeArguments": null,
          "start": 1016,
          "end": 1024
        },
        "start": 1014,
        "end": 1024
      },
      "body": null,
      "expression": false,
      "start": 925,
      "end": 1025
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1043,
        "end": 1047
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 1051,
              "end": 1054
            },
            "start": 1049,
            "end": 1054
          },
          "start": 1048,
          "end": 1054
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1057,
          "end": 1060
        },
        "start": 1055,
        "end": 1060
      },
      "body": null,
      "expression": false,
      "start": 1026,
      "end": 1061
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1080,
        "end": 1084
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                                "start": 1106,
                                "end": 1110
                              },
                              "typeArguments": null,
                              "start": 1106,
                              "end": 1110
                            },
                            "start": 1104,
                            "end": 1110
                          },
                          "start": 1101,
                          "end": 1110
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
                            "start": 1115,
                            "end": 1122
                          },
                          "typeArguments": null,
                          "start": 1115,
                          "end": 1122
                        },
                        "start": 1112,
                        "end": 1122
                      },
                      "start": 1096,
                      "end": 1122
                    },
                    "start": 1094,
                    "end": 1122
                  },
                  "start": 1093,
                  "end": 1122
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
                                "start": 1138,
                                "end": 1142
                              },
                              "typeArguments": null,
                              "start": 1138,
                              "end": 1142
                            },
                            "start": 1136,
                            "end": 1142
                          },
                          "start": 1132,
                          "end": 1142
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
                            "start": 1147,
                            "end": 1154
                          },
                          "typeArguments": null,
                          "start": 1147,
                          "end": 1154
                        },
                        "start": 1144,
                        "end": 1154
                      },
                      "start": 1127,
                      "end": 1154
                    },
                    "start": 1125,
                    "end": 1154
                  },
                  "start": 1124,
                  "end": 1154
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
                            "start": 1167,
                            "end": 1171
                          },
                          "typeArguments": null,
                          "start": 1167,
                          "end": 1171
                        },
                        "start": 1165,
                        "end": 1171
                      },
                      "start": 1164,
                      "end": 1171
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
                        "start": 1176,
                        "end": 1183
                      },
                      "typeArguments": null,
                      "start": 1176,
                      "end": 1183
                    },
                    "start": 1173,
                    "end": 1183
                  },
                  "start": 1159,
                  "end": 1183
                },
                "start": 1156,
                "end": 1183
              },
              "start": 1088,
              "end": 1183
            },
            "start": 1086,
            "end": 1183
          },
          "start": 1085,
          "end": 1183
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1193,
            "end": 1194
          },
          "typeArguments": null,
          "start": 1186,
          "end": 1194
        },
        "start": 1184,
        "end": 1194
      },
      "body": null,
      "expression": false,
      "start": 1063,
      "end": 1195
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1213,
        "end": 1217
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 1221,
              "end": 1224
            },
            "start": 1219,
            "end": 1224
          },
          "start": 1218,
          "end": 1224
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1227,
          "end": 1230
        },
        "start": 1225,
        "end": 1230
      },
      "body": null,
      "expression": false,
      "start": 1196,
      "end": 1231
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1250,
        "end": 1254
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                                "start": 1276,
                                "end": 1280
                              },
                              "typeArguments": null,
                              "start": 1276,
                              "end": 1280
                            },
                            "start": 1274,
                            "end": 1280
                          },
                          "start": 1271,
                          "end": 1280
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
                            "start": 1285,
                            "end": 1292
                          },
                          "typeArguments": null,
                          "start": 1285,
                          "end": 1292
                        },
                        "start": 1282,
                        "end": 1292
                      },
                      "start": 1266,
                      "end": 1292
                    },
                    "start": 1264,
                    "end": 1292
                  },
                  "start": 1263,
                  "end": 1292
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
                                "start": 1308,
                                "end": 1312
                              },
                              "typeArguments": null,
                              "start": 1308,
                              "end": 1312
                            },
                            "start": 1306,
                            "end": 1312
                          },
                          "start": 1302,
                          "end": 1312
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
                            "start": 1317,
                            "end": 1324
                          },
                          "typeArguments": null,
                          "start": 1317,
                          "end": 1324
                        },
                        "start": 1314,
                        "end": 1324
                      },
                      "start": 1297,
                      "end": 1324
                    },
                    "start": 1295,
                    "end": 1324
                  },
                  "start": 1294,
                  "end": 1324
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
                            "start": 1337,
                            "end": 1341
                          },
                          "typeArguments": null,
                          "start": 1337,
                          "end": 1341
                        },
                        "start": 1335,
                        "end": 1341
                      },
                      "start": 1334,
                      "end": 1341
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
                        "start": 1346,
                        "end": 1353
                      },
                      "typeArguments": null,
                      "start": 1346,
                      "end": 1353
                    },
                    "start": 1343,
                    "end": 1353
                  },
                  "start": 1329,
                  "end": 1353
                },
                "start": 1326,
                "end": 1353
              },
              "start": 1258,
              "end": 1353
            },
            "start": 1256,
            "end": 1353
          },
          "start": 1255,
          "end": 1353
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1363,
            "end": 1364
          },
          "typeArguments": null,
          "start": 1356,
          "end": 1364
        },
        "start": 1354,
        "end": 1364
      },
      "body": null,
      "expression": false,
      "start": 1233,
      "end": 1365
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1383,
        "end": 1387
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 1391,
              "end": 1394
            },
            "start": 1389,
            "end": 1394
          },
          "start": 1388,
          "end": 1394
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1397,
          "end": 1400
        },
        "start": 1395,
        "end": 1400
      },
      "body": null,
      "expression": false,
      "start": 1366,
      "end": 1401
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1420,
        "end": 1425
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                    "start": 1437,
                    "end": 1438
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
                          "start": 1440,
                          "end": 1447
                        },
                        "typeArguments": null,
                        "start": 1440,
                        "end": 1447
                      },
                      "start": 1440,
                      "end": 1449
                    },
                    "start": 1438,
                    "end": 1449
                  },
                  "value": null,
                  "start": 1434,
                  "end": 1449
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
                    "start": 1454,
                    "end": 1461
                  },
                  "typeArguments": null,
                  "start": 1454,
                  "end": 1461
                },
                "start": 1451,
                "end": 1461
              },
              "start": 1429,
              "end": 1461
            },
            "start": 1427,
            "end": 1461
          },
          "start": 1426,
          "end": 1461
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1471,
            "end": 1472
          },
          "typeArguments": null,
          "start": 1464,
          "end": 1472
        },
        "start": 1462,
        "end": 1472
      },
      "body": null,
      "expression": false,
      "start": 1403,
      "end": 1473
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1491,
        "end": 1496
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 1500,
              "end": 1503
            },
            "start": 1498,
            "end": 1503
          },
          "start": 1497,
          "end": 1503
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1506,
          "end": 1509
        },
        "start": 1504,
        "end": 1509
      },
      "body": null,
      "expression": false,
      "start": 1474,
      "end": 1510
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1529,
        "end": 1534
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                            "start": 1548,
                            "end": 1551
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1553,
                              "end": 1559
                            },
                            "start": 1551,
                            "end": 1559
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1548,
                          "end": 1559
                        }
                      ],
                      "start": 1546,
                      "end": 1561
                    },
                    "start": 1544,
                    "end": 1561
                  },
                  "start": 1543,
                  "end": 1561
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
                            "start": 1568,
                            "end": 1571
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1573,
                              "end": 1579
                            },
                            "start": 1571,
                            "end": 1579
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1568,
                          "end": 1580
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
                            "start": 1581,
                            "end": 1584
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1586,
                              "end": 1592
                            },
                            "start": 1584,
                            "end": 1592
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1581,
                          "end": 1592
                        }
                      ],
                      "start": 1566,
                      "end": 1594
                    },
                    "start": 1564,
                    "end": 1594
                  },
                  "start": 1563,
                  "end": 1594
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
                    "start": 1599,
                    "end": 1603
                  },
                  "typeArguments": null,
                  "start": 1599,
                  "end": 1603
                },
                "start": 1596,
                "end": 1603
              },
              "start": 1538,
              "end": 1603
            },
            "start": 1536,
            "end": 1603
          },
          "start": 1535,
          "end": 1603
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1613,
            "end": 1614
          },
          "typeArguments": null,
          "start": 1606,
          "end": 1614
        },
        "start": 1604,
        "end": 1614
      },
      "body": null,
      "expression": false,
      "start": 1512,
      "end": 1615
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1633,
        "end": 1638
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 1642,
              "end": 1645
            },
            "start": 1640,
            "end": 1645
          },
          "start": 1639,
          "end": 1645
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1648,
          "end": 1651
        },
        "start": 1646,
        "end": 1651
      },
      "body": null,
      "expression": false,
      "start": 1616,
      "end": 1652
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1671,
        "end": 1676
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                        "start": 1688,
                        "end": 1693
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
                              "start": 1694,
                              "end": 1698
                            },
                            "typeArguments": null,
                            "start": 1694,
                            "end": 1698
                          }
                        ],
                        "start": 1693,
                        "end": 1699
                      },
                      "start": 1688,
                      "end": 1699
                    },
                    "start": 1686,
                    "end": 1699
                  },
                  "start": 1685,
                  "end": 1699
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
                        "start": 1704,
                        "end": 1709
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
                              "start": 1710,
                              "end": 1718
                            },
                            "typeArguments": null,
                            "start": 1710,
                            "end": 1718
                          }
                        ],
                        "start": 1709,
                        "end": 1719
                      },
                      "start": 1704,
                      "end": 1719
                    },
                    "start": 1702,
                    "end": 1719
                  },
                  "start": 1701,
                  "end": 1719
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
                    "start": 1724,
                    "end": 1729
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
                          "start": 1730,
                          "end": 1737
                        },
                        "typeArguments": null,
                        "start": 1730,
                        "end": 1737
                      }
                    ],
                    "start": 1729,
                    "end": 1738
                  },
                  "start": 1724,
                  "end": 1738
                },
                "start": 1721,
                "end": 1738
              },
              "start": 1680,
              "end": 1738
            },
            "start": 1678,
            "end": 1738
          },
          "start": 1677,
          "end": 1738
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1748,
            "end": 1749
          },
          "typeArguments": null,
          "start": 1741,
          "end": 1749
        },
        "start": 1739,
        "end": 1749
      },
      "body": null,
      "expression": false,
      "start": 1654,
      "end": 1750
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1768,
        "end": 1773
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 1777,
              "end": 1780
            },
            "start": 1775,
            "end": 1780
          },
          "start": 1774,
          "end": 1780
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1783,
          "end": 1786
        },
        "start": 1781,
        "end": 1786
      },
      "body": null,
      "expression": false,
      "start": 1751,
      "end": 1787
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1806,
        "end": 1811
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                        "start": 1823,
                        "end": 1828
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
                              "start": 1829,
                              "end": 1833
                            },
                            "typeArguments": null,
                            "start": 1829,
                            "end": 1833
                          }
                        ],
                        "start": 1828,
                        "end": 1834
                      },
                      "start": 1823,
                      "end": 1834
                    },
                    "start": 1821,
                    "end": 1834
                  },
                  "start": 1820,
                  "end": 1834
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
                        "start": 1839,
                        "end": 1844
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
                              "start": 1845,
                              "end": 1852
                            },
                            "typeArguments": null,
                            "start": 1845,
                            "end": 1852
                          }
                        ],
                        "start": 1844,
                        "end": 1853
                      },
                      "start": 1839,
                      "end": 1853
                    },
                    "start": 1837,
                    "end": 1853
                  },
                  "start": 1836,
                  "end": 1853
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
                    "start": 1858,
                    "end": 1863
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
                          "start": 1864,
                          "end": 1871
                        },
                        "typeArguments": null,
                        "start": 1864,
                        "end": 1871
                      }
                    ],
                    "start": 1863,
                    "end": 1872
                  },
                  "start": 1858,
                  "end": 1872
                },
                "start": 1855,
                "end": 1872
              },
              "start": 1815,
              "end": 1872
            },
            "start": 1813,
            "end": 1872
          },
          "start": 1812,
          "end": 1872
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1882,
            "end": 1883
          },
          "typeArguments": null,
          "start": 1875,
          "end": 1883
        },
        "start": 1873,
        "end": 1883
      },
      "body": null,
      "expression": false,
      "start": 1789,
      "end": 1884
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1902,
        "end": 1907
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 1911,
              "end": 1914
            },
            "start": 1909,
            "end": 1914
          },
          "start": 1908,
          "end": 1914
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1917,
          "end": 1920
        },
        "start": 1915,
        "end": 1920
      },
      "body": null,
      "expression": false,
      "start": 1885,
      "end": 1921
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1940,
        "end": 1945
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                            "start": 1959,
                            "end": 1960
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1962,
                              "end": 1968
                            },
                            "start": 1960,
                            "end": 1968
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1959,
                          "end": 1969
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
                            "start": 1970,
                            "end": 1971
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1973,
                              "end": 1979
                            },
                            "start": 1971,
                            "end": 1979
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1970,
                          "end": 1979
                        }
                      ],
                      "start": 1957,
                      "end": 1981
                    },
                    "start": 1955,
                    "end": 1981
                  },
                  "start": 1954,
                  "end": 1981
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
                    "start": 1986,
                    "end": 1992
                  },
                  "typeArguments": null,
                  "start": 1986,
                  "end": 1992
                },
                "start": 1983,
                "end": 1992
              },
              "start": 1949,
              "end": 1992
            },
            "start": 1947,
            "end": 1992
          },
          "start": 1946,
          "end": 1992
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 2002,
            "end": 2003
          },
          "typeArguments": null,
          "start": 1995,
          "end": 2003
        },
        "start": 1993,
        "end": 2003
      },
      "body": null,
      "expression": false,
      "start": 1923,
      "end": 2004
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2022,
        "end": 2027
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 2031,
              "end": 2034
            },
            "start": 2029,
            "end": 2034
          },
          "start": 2028,
          "end": 2034
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 2037,
          "end": 2040
        },
        "start": 2035,
        "end": 2040
      },
      "body": null,
      "expression": false,
      "start": 2005,
      "end": 2041
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2060,
        "end": 2065
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                          "start": 2084,
                          "end": 2090
                        },
                        "start": 2082,
                        "end": 2090
                      },
                      "start": 2081,
                      "end": 2090
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 2093,
                        "end": 2099
                      },
                      "start": 2093,
                      "end": 2101
                    },
                    "start": 2091,
                    "end": 2101
                  },
                  "start": 2076,
                  "end": 2102
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
                          "start": 2115,
                          "end": 2121
                        },
                        "start": 2113,
                        "end": 2121
                      },
                      "start": 2112,
                      "end": 2121
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 2124,
                        "end": 2130
                      },
                      "start": 2124,
                      "end": 2132
                    },
                    "start": 2122,
                    "end": 2132
                  },
                  "start": 2107,
                  "end": 2133
                }
              ],
              "start": 2069,
              "end": 2136
            },
            "start": 2067,
            "end": 2136
          },
          "start": 2066,
          "end": 2136
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 2146,
            "end": 2147
          },
          "typeArguments": null,
          "start": 2139,
          "end": 2147
        },
        "start": 2137,
        "end": 2147
      },
      "body": null,
      "expression": false,
      "start": 2043,
      "end": 2148
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2166,
        "end": 2171
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 2175,
              "end": 2178
            },
            "start": 2173,
            "end": 2178
          },
          "start": 2172,
          "end": 2178
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 2181,
          "end": 2184
        },
        "start": 2179,
        "end": 2184
      },
      "body": null,
      "expression": false,
      "start": 2149,
      "end": 2185
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null,
        "start": 2204,
        "end": 2209
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                          "start": 2224,
                          "end": 2225
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2234,
                            "end": 2241
                          },
                          "typeArguments": null,
                          "start": 2234,
                          "end": 2241
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 2224,
                        "end": 2241
                      }
                    ],
                    "start": 2223,
                    "end": 2242
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
                            "start": 2246,
                            "end": 2247
                          },
                          "typeArguments": null,
                          "start": 2246,
                          "end": 2247
                        },
                        "start": 2244,
                        "end": 2247
                      },
                      "start": 2243,
                      "end": 2247
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 2250,
                        "end": 2256
                      },
                      "start": 2250,
                      "end": 2258
                    },
                    "start": 2248,
                    "end": 2258
                  },
                  "start": 2219,
                  "end": 2259
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
                          "start": 2269,
                          "end": 2270
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Base",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2279,
                            "end": 2283
                          },
                          "typeArguments": null,
                          "start": 2279,
                          "end": 2283
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 2269,
                        "end": 2283
                      }
                    ],
                    "start": 2268,
                    "end": 2284
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
                            "start": 2288,
                            "end": 2289
                          },
                          "typeArguments": null,
                          "start": 2288,
                          "end": 2289
                        },
                        "start": 2286,
                        "end": 2289
                      },
                      "start": 2285,
                      "end": 2289
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 2292,
                        "end": 2298
                      },
                      "start": 2292,
                      "end": 2300
                    },
                    "start": 2290,
                    "end": 2300
                  },
                  "start": 2264,
                  "end": 2301
                }
              ],
              "start": 2213,
              "end": 2303
            },
            "start": 2211,
            "end": 2303
          },
          "start": 2210,
          "end": 2303
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 2313,
            "end": 2314
          },
          "typeArguments": null,
          "start": 2306,
          "end": 2314
        },
        "start": 2304,
        "end": 2314
      },
      "body": null,
      "expression": false,
      "start": 2187,
      "end": 2315
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null,
        "start": 2333,
        "end": 2338
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 2342,
              "end": 2345
            },
            "start": 2340,
            "end": 2345
          },
          "start": 2339,
          "end": 2345
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 2348,
          "end": 2351
        },
        "start": 2346,
        "end": 2351
      },
      "body": null,
      "expression": false,
      "start": 2316,
      "end": 2352
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo17",
        "optional": false,
        "typeAnnotation": null,
        "start": 2371,
        "end": 2376
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                                  "type": "TSNumberKeyword",
                                  "start": 2398,
                                  "end": 2404
                                },
                                "start": 2396,
                                "end": 2404
                              },
                              "start": 2395,
                              "end": 2404
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2409,
                              "end": 2415
                            },
                            "start": 2406,
                            "end": 2415
                          },
                          "start": 2394,
                          "end": 2415
                        },
                        "start": 2392,
                        "end": 2415
                      },
                      "start": 2391,
                      "end": 2415
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 2418,
                        "end": 2424
                      },
                      "start": 2418,
                      "end": 2426
                    },
                    "start": 2416,
                    "end": 2426
                  },
                  "start": 2386,
                  "end": 2427
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
                                  "type": "TSStringKeyword",
                                  "start": 2444,
                                  "end": 2450
                                },
                                "start": 2442,
                                "end": 2450
                              },
                              "start": 2441,
                              "end": 2450
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2455,
                              "end": 2461
                            },
                            "start": 2452,
                            "end": 2461
                          },
                          "start": 2440,
                          "end": 2461
                        },
                        "start": 2438,
                        "end": 2461
                      },
                      "start": 2437,
                      "end": 2461
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 2464,
                        "end": 2470
                      },
                      "start": 2464,
                      "end": 2472
                    },
                    "start": 2462,
                    "end": 2472
                  },
                  "start": 2432,
                  "end": 2473
                }
              ],
              "start": 2380,
              "end": 2475
            },
            "start": 2378,
            "end": 2475
          },
          "start": 2377,
          "end": 2475
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 2485,
            "end": 2486
          },
          "typeArguments": null,
          "start": 2478,
          "end": 2486
        },
        "start": 2476,
        "end": 2486
      },
      "body": null,
      "expression": false,
      "start": 2354,
      "end": 2487
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo17",
        "optional": false,
        "typeAnnotation": null,
        "start": 2505,
        "end": 2510
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 2514,
              "end": 2517
            },
            "start": 2512,
            "end": 2517
          },
          "start": 2511,
          "end": 2517
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 2520,
          "end": 2523
        },
        "start": 2518,
        "end": 2523
      },
      "body": null,
      "expression": false,
      "start": 2488,
      "end": 2524
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo18",
        "optional": false,
        "typeAnnotation": null,
        "start": 2543,
        "end": 2548
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                                      "start": 2584,
                                      "end": 2590
                                    },
                                    "start": 2582,
                                    "end": 2590
                                  },
                                  "start": 2581,
                                  "end": 2590
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 2593,
                                  "end": 2599
                                },
                                "start": 2591,
                                "end": 2599
                              },
                              "start": 2576,
                              "end": 2600
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
                                      "start": 2617,
                                      "end": 2623
                                    },
                                    "start": 2615,
                                    "end": 2623
                                  },
                                  "start": 2614,
                                  "end": 2623
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 2626,
                                  "end": 2632
                                },
                                "start": 2624,
                                "end": 2632
                              },
                              "start": 2609,
                              "end": 2633
                            }
                          ],
                          "start": 2566,
                          "end": 2639
                        },
                        "start": 2564,
                        "end": 2639
                      },
                      "start": 2563,
                      "end": 2639
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 2642,
                        "end": 2645
                      },
                      "start": 2642,
                      "end": 2647
                    },
                    "start": 2640,
                    "end": 2647
                  },
                  "start": 2558,
                  "end": 2648
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
                                      "start": 2679,
                                      "end": 2686
                                    },
                                    "start": 2677,
                                    "end": 2686
                                  },
                                  "start": 2676,
                                  "end": 2686
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSBooleanKeyword",
                                  "start": 2689,
                                  "end": 2696
                                },
                                "start": 2687,
                                "end": 2696
                              },
                              "start": 2671,
                              "end": 2697
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
                                        "start": 2714,
                                        "end": 2718
                                      },
                                      "typeArguments": null,
                                      "start": 2714,
                                      "end": 2718
                                    },
                                    "start": 2712,
                                    "end": 2718
                                  },
                                  "start": 2711,
                                  "end": 2718
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
                                    "start": 2721,
                                    "end": 2725
                                  },
                                  "typeArguments": null,
                                  "start": 2721,
                                  "end": 2725
                                },
                                "start": 2719,
                                "end": 2725
                              },
                              "start": 2706,
                              "end": 2726
                            }
                          ],
                          "start": 2661,
                          "end": 2732
                        },
                        "start": 2659,
                        "end": 2732
                      },
                      "start": 2658,
                      "end": 2732
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 2735,
                        "end": 2738
                      },
                      "start": 2735,
                      "end": 2740
                    },
                    "start": 2733,
                    "end": 2740
                  },
                  "start": 2653,
                  "end": 2741
                }
              ],
              "start": 2552,
              "end": 2743
            },
            "start": 2550,
            "end": 2743
          },
          "start": 2549,
          "end": 2743
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 2753,
            "end": 2754
          },
          "typeArguments": null,
          "start": 2746,
          "end": 2754
        },
        "start": 2744,
        "end": 2754
      },
      "body": null,
      "expression": false,
      "start": 2526,
      "end": 2755
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo18",
        "optional": false,
        "typeAnnotation": null,
        "start": 2773,
        "end": 2778
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 2782,
              "end": 2785
            },
            "start": 2780,
            "end": 2785
          },
          "start": 2779,
          "end": 2785
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 2788,
          "end": 2791
        },
        "start": 2786,
        "end": 2791
      },
      "body": null,
      "expression": false,
      "start": 2756,
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
                        "start": 2811,
                        "end": 2812
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2811,
                      "end": 2812
                    }
                  ],
                  "start": 2810,
                  "end": 2813
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
                          "start": 2817,
                          "end": 2818
                        },
                        "typeArguments": null,
                        "start": 2817,
                        "end": 2818
                      },
                      "start": 2815,
                      "end": 2818
                    },
                    "start": 2814,
                    "end": 2818
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
                        "start": 2823,
                        "end": 2824
                      },
                      "typeArguments": null,
                      "start": 2823,
                      "end": 2824
                    },
                    "start": 2823,
                    "end": 2826
                  },
                  "start": 2820,
                  "end": 2826
                },
                "start": 2806,
                "end": 2826
              },
              "start": 2804,
              "end": 2826
            },
            "start": 2798,
            "end": 2826
          },
          "init": null,
          "definite": false,
          "start": 2798,
          "end": 2826
        }
      ],
      "declare": false,
      "start": 2794,
      "end": 2827
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
                        "start": 2848,
                        "end": 2854
                      },
                      "start": 2846,
                      "end": 2854
                    },
                    "start": 2845,
                    "end": 2854
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 2859,
                      "end": 2865
                    },
                    "start": 2859,
                    "end": 2867
                  },
                  "start": 2856,
                  "end": 2867
                },
                "start": 2840,
                "end": 2867
              },
              "start": 2838,
              "end": 2867
            },
            "start": 2832,
            "end": 2867
          },
          "init": null,
          "definite": false,
          "start": 2832,
          "end": 2867
        }
      ],
      "declare": false,
      "start": 2828,
      "end": 2868
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
            "start": 2873,
            "end": 2875
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2878,
              "end": 2882
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r1arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2883,
                "end": 2889
              }
            ],
            "optional": false,
            "start": 2878,
            "end": 2890
          },
          "definite": false,
          "start": 2873,
          "end": 2890
        }
      ],
      "declare": false,
      "start": 2869,
      "end": 2891
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
            "start": 2951,
            "end": 2954
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
                "start": 2958,
                "end": 2964
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r1arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2966,
                "end": 2972
              }
            ],
            "start": 2957,
            "end": 2973
          },
          "definite": false,
          "start": 2951,
          "end": 2973
        }
      ],
      "declare": false,
      "start": 2947,
      "end": 2974
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
            "start": 3028,
            "end": 3031
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
                "start": 3035,
                "end": 3041
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r1arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3043,
                "end": 3049
              }
            ],
            "start": 3034,
            "end": 3050
          },
          "definite": false,
          "start": 3028,
          "end": 3050
        }
      ],
      "declare": false,
      "start": 3024,
      "end": 3051
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
                        "start": 3119,
                        "end": 3120
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3119,
                      "end": 3120
                    }
                  ],
                  "start": 3118,
                  "end": 3121
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
                          "start": 3125,
                          "end": 3126
                        },
                        "typeArguments": null,
                        "start": 3125,
                        "end": 3126
                      },
                      "start": 3123,
                      "end": 3126
                    },
                    "start": 3122,
                    "end": 3126
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 3131,
                      "end": 3137
                    },
                    "start": 3131,
                    "end": 3139
                  },
                  "start": 3128,
                  "end": 3139
                },
                "start": 3114,
                "end": 3139
              },
              "start": 3112,
              "end": 3139
            },
            "start": 3106,
            "end": 3139
          },
          "init": null,
          "definite": false,
          "start": 3106,
          "end": 3139
        }
      ],
      "declare": false,
      "start": 3102,
      "end": 3140
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
                        "type": "TSNumberKeyword",
                        "start": 3161,
                        "end": 3167
                      },
                      "start": 3159,
                      "end": 3167
                    },
                    "start": 3158,
                    "end": 3167
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 3172,
                      "end": 3178
                    },
                    "start": 3172,
                    "end": 3180
                  },
                  "start": 3169,
                  "end": 3180
                },
                "start": 3153,
                "end": 3180
              },
              "start": 3151,
              "end": 3180
            },
            "start": 3145,
            "end": 3180
          },
          "init": null,
          "definite": false,
          "start": 3145,
          "end": 3180
        }
      ],
      "declare": false,
      "start": 3141,
      "end": 3181
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
            "start": 3186,
            "end": 3188
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3191,
              "end": 3195
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r2arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3196,
                "end": 3202
              }
            ],
            "optional": false,
            "start": 3191,
            "end": 3203
          },
          "definite": false,
          "start": 3186,
          "end": 3203
        }
      ],
      "declare": false,
      "start": 3182,
      "end": 3204
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
            "start": 3209,
            "end": 3212
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
                "start": 3216,
                "end": 3222
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r2arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3224,
                "end": 3230
              }
            ],
            "start": 3215,
            "end": 3231
          },
          "definite": false,
          "start": 3209,
          "end": 3231
        }
      ],
      "declare": false,
      "start": 3205,
      "end": 3232
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
            "start": 3237,
            "end": 3240
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
                "start": 3244,
                "end": 3250
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r2arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3252,
                "end": 3258
              }
            ],
            "start": 3243,
            "end": 3259
          },
          "definite": false,
          "start": 3237,
          "end": 3259
        }
      ],
      "declare": false,
      "start": 3233,
      "end": 3260
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
                        "start": 3279,
                        "end": 3280
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3279,
                      "end": 3280
                    }
                  ],
                  "start": 3278,
                  "end": 3281
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
                          "start": 3285,
                          "end": 3286
                        },
                        "typeArguments": null,
                        "start": 3285,
                        "end": 3286
                      },
                      "start": 3283,
                      "end": 3286
                    },
                    "start": 3282,
                    "end": 3286
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
                      "start": 3291,
                      "end": 3292
                    },
                    "typeArguments": null,
                    "start": 3291,
                    "end": 3292
                  },
                  "start": 3288,
                  "end": 3292
                },
                "start": 3274,
                "end": 3292
              },
              "start": 3272,
              "end": 3292
            },
            "start": 3266,
            "end": 3292
          },
          "init": null,
          "definite": false,
          "start": 3266,
          "end": 3292
        }
      ],
      "declare": false,
      "start": 3262,
      "end": 3293
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
                        "type": "TSNumberKeyword",
                        "start": 3314,
                        "end": 3320
                      },
                      "start": 3312,
                      "end": 3320
                    },
                    "start": 3311,
                    "end": 3320
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 3325,
                    "end": 3329
                  },
                  "start": 3322,
                  "end": 3329
                },
                "start": 3306,
                "end": 3329
              },
              "start": 3304,
              "end": 3329
            },
            "start": 3298,
            "end": 3329
          },
          "init": null,
          "definite": false,
          "start": 3298,
          "end": 3329
        }
      ],
      "declare": false,
      "start": 3294,
      "end": 3330
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
            "start": 3335,
            "end": 3337
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 3340,
              "end": 3344
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r3arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3345,
                "end": 3351
              }
            ],
            "optional": false,
            "start": 3340,
            "end": 3352
          },
          "definite": false,
          "start": 3335,
          "end": 3352
        }
      ],
      "declare": false,
      "start": 3331,
      "end": 3353
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
            "start": 3358,
            "end": 3361
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
                "start": 3365,
                "end": 3371
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r3arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3373,
                "end": 3379
              }
            ],
            "start": 3364,
            "end": 3380
          },
          "definite": false,
          "start": 3358,
          "end": 3380
        }
      ],
      "declare": false,
      "start": 3354,
      "end": 3381
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
            "start": 3386,
            "end": 3389
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
                "start": 3393,
                "end": 3399
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r3arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3401,
                "end": 3407
              }
            ],
            "start": 3392,
            "end": 3408
          },
          "definite": false,
          "start": 3386,
          "end": 3408
        }
      ],
      "declare": false,
      "start": 3382,
      "end": 3409
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
                        "start": 3428,
                        "end": 3429
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3428,
                      "end": 3429
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3431,
                        "end": 3432
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3431,
                      "end": 3432
                    }
                  ],
                  "start": 3427,
                  "end": 3433
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
                          "start": 3437,
                          "end": 3438
                        },
                        "typeArguments": null,
                        "start": 3437,
                        "end": 3438
                      },
                      "start": 3435,
                      "end": 3438
                    },
                    "start": 3434,
                    "end": 3438
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
                          "start": 3443,
                          "end": 3444
                        },
                        "typeArguments": null,
                        "start": 3443,
                        "end": 3444
                      },
                      "start": 3441,
                      "end": 3444
                    },
                    "start": 3440,
                    "end": 3444
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
                      "start": 3449,
                      "end": 3450
                    },
                    "typeArguments": null,
                    "start": 3449,
                    "end": 3450
                  },
                  "start": 3446,
                  "end": 3450
                },
                "start": 3423,
                "end": 3450
              },
              "start": 3421,
              "end": 3450
            },
            "start": 3415,
            "end": 3450
          },
          "init": null,
          "definite": false,
          "start": 3415,
          "end": 3450
        }
      ],
      "declare": false,
      "start": 3411,
      "end": 3451
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3472,
                        "end": 3478
                      },
                      "start": 3470,
                      "end": 3478
                    },
                    "start": 3469,
                    "end": 3478
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
                        "start": 3483,
                        "end": 3489
                      },
                      "start": 3481,
                      "end": 3489
                    },
                    "start": 3480,
                    "end": 3489
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 3494,
                    "end": 3500
                  },
                  "start": 3491,
                  "end": 3500
                },
                "start": 3464,
                "end": 3500
              },
              "start": 3462,
              "end": 3500
            },
            "start": 3456,
            "end": 3500
          },
          "init": null,
          "definite": false,
          "start": 3456,
          "end": 3500
        }
      ],
      "declare": false,
      "start": 3452,
      "end": 3501
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
            "start": 3506,
            "end": 3508
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null,
              "start": 3511,
              "end": 3515
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r4arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3516,
                "end": 3522
              }
            ],
            "optional": false,
            "start": 3511,
            "end": 3523
          },
          "definite": false,
          "start": 3506,
          "end": 3523
        }
      ],
      "declare": false,
      "start": 3502,
      "end": 3524
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
            "start": 3536,
            "end": 3539
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
                "start": 3543,
                "end": 3549
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r4arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3551,
                "end": 3557
              }
            ],
            "start": 3542,
            "end": 3558
          },
          "definite": false,
          "start": 3536,
          "end": 3558
        }
      ],
      "declare": false,
      "start": 3532,
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
            "name": "r4b",
            "optional": false,
            "typeAnnotation": null,
            "start": 3564,
            "end": 3567
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
                "start": 3571,
                "end": 3577
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r4arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3579,
                "end": 3585
              }
            ],
            "start": 3570,
            "end": 3586
          },
          "definite": false,
          "start": 3564,
          "end": 3586
        }
      ],
      "declare": false,
      "start": 3560,
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3609,
                        "end": 3610
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3609,
                      "end": 3610
                    }
                  ],
                  "start": 3605,
                  "end": 3611
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
                                  "start": 3625,
                                  "end": 3626
                                },
                                "typeArguments": null,
                                "start": 3625,
                                "end": 3626
                              },
                              "start": 3623,
                              "end": 3626
                            },
                            "start": 3620,
                            "end": 3626
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
                              "start": 3631,
                              "end": 3632
                            },
                            "typeArguments": null,
                            "start": 3631,
                            "end": 3632
                          },
                          "start": 3628,
                          "end": 3632
                        },
                        "start": 3615,
                        "end": 3632
                      },
                      "start": 3613,
                      "end": 3632
                    },
                    "start": 3612,
                    "end": 3632
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
                      "start": 3637,
                      "end": 3638
                    },
                    "typeArguments": null,
                    "start": 3637,
                    "end": 3638
                  },
                  "start": 3634,
                  "end": 3638
                },
                "start": 3601,
                "end": 3638
              },
              "start": 3599,
              "end": 3638
            },
            "start": 3593,
            "end": 3638
          },
          "init": null,
          "definite": false,
          "start": 3593,
          "end": 3638
        }
      ],
      "declare": false,
      "start": 3589,
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
                                "type": "TSStringKeyword",
                                "start": 3670,
                                "end": 3676
                              },
                              "start": 3668,
                              "end": 3676
                            },
                            "start": 3665,
                            "end": 3676
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 3681,
                            "end": 3687
                          },
                          "start": 3678,
                          "end": 3687
                        },
                        "start": 3660,
                        "end": 3687
                      },
                      "start": 3658,
                      "end": 3687
                    },
                    "start": 3657,
                    "end": 3687
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 3692,
                    "end": 3698
                  },
                  "start": 3689,
                  "end": 3698
                },
                "start": 3652,
                "end": 3698
              },
              "start": 3650,
              "end": 3698
            },
            "start": 3644,
            "end": 3698
          },
          "init": null,
          "definite": false,
          "start": 3644,
          "end": 3698
        }
      ],
      "declare": false,
      "start": 3640,
      "end": 3699
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
            "start": 3704,
            "end": 3706
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo5",
              "optional": false,
              "typeAnnotation": null,
              "start": 3709,
              "end": 3713
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r5arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3714,
                "end": 3720
              }
            ],
            "optional": false,
            "start": 3709,
            "end": 3721
          },
          "definite": false,
          "start": 3704,
          "end": 3721
        }
      ],
      "declare": false,
      "start": 3700,
      "end": 3722
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
            "start": 3734,
            "end": 3737
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
                "start": 3741,
                "end": 3747
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r5arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3749,
                "end": 3755
              }
            ],
            "start": 3740,
            "end": 3756
          },
          "definite": false,
          "start": 3734,
          "end": 3756
        }
      ],
      "declare": false,
      "start": 3730,
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
            "name": "r5b",
            "optional": false,
            "typeAnnotation": null,
            "start": 3762,
            "end": 3765
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
                "start": 3769,
                "end": 3775
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r5arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3777,
                "end": 3783
              }
            ],
            "start": 3768,
            "end": 3784
          },
          "definite": false,
          "start": 3762,
          "end": 3784
        }
      ],
      "declare": false,
      "start": 3758,
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
            "name": "r6arg1",
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
                        "start": 3804,
                        "end": 3805
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3814,
                          "end": 3818
                        },
                        "typeArguments": null,
                        "start": 3814,
                        "end": 3818
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3804,
                      "end": 3818
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3820,
                        "end": 3821
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3830,
                          "end": 3837
                        },
                        "typeArguments": null,
                        "start": 3830,
                        "end": 3837
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3820,
                      "end": 3837
                    }
                  ],
                  "start": 3803,
                  "end": 3838
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
                                  "start": 3852,
                                  "end": 3853
                                },
                                "typeArguments": null,
                                "start": 3852,
                                "end": 3853
                              },
                              "start": 3850,
                              "end": 3853
                            },
                            "start": 3847,
                            "end": 3853
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
                              "start": 3858,
                              "end": 3859
                            },
                            "typeArguments": null,
                            "start": 3858,
                            "end": 3859
                          },
                          "start": 3855,
                          "end": 3859
                        },
                        "start": 3842,
                        "end": 3859
                      },
                      "start": 3840,
                      "end": 3859
                    },
                    "start": 3839,
                    "end": 3859
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
                      "start": 3864,
                      "end": 3865
                    },
                    "typeArguments": null,
                    "start": 3864,
                    "end": 3865
                  },
                  "start": 3861,
                  "end": 3865
                },
                "start": 3799,
                "end": 3865
              },
              "start": 3797,
              "end": 3865
            },
            "start": 3791,
            "end": 3865
          },
          "init": null,
          "definite": false,
          "start": 3791,
          "end": 3865
        }
      ],
      "declare": false,
      "start": 3787,
      "end": 3866
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
                                  "start": 3897,
                                  "end": 3901
                                },
                                "typeArguments": null,
                                "start": 3897,
                                "end": 3901
                              },
                              "start": 3895,
                              "end": 3901
                            },
                            "start": 3892,
                            "end": 3901
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
                              "start": 3906,
                              "end": 3913
                            },
                            "typeArguments": null,
                            "start": 3906,
                            "end": 3913
                          },
                          "start": 3903,
                          "end": 3913
                        },
                        "start": 3887,
                        "end": 3913
                      },
                      "start": 3885,
                      "end": 3913
                    },
                    "start": 3884,
                    "end": 3913
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
                      "start": 3918,
                      "end": 3922
                    },
                    "typeArguments": null,
                    "start": 3918,
                    "end": 3922
                  },
                  "start": 3915,
                  "end": 3922
                },
                "start": 3879,
                "end": 3922
              },
              "start": 3877,
              "end": 3922
            },
            "start": 3871,
            "end": 3922
          },
          "init": null,
          "definite": false,
          "start": 3871,
          "end": 3922
        }
      ],
      "declare": false,
      "start": 3867,
      "end": 3923
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
            "start": 3928,
            "end": 3930
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo6",
              "optional": false,
              "typeAnnotation": null,
              "start": 3933,
              "end": 3937
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r6arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3938,
                "end": 3944
              }
            ],
            "optional": false,
            "start": 3933,
            "end": 3945
          },
          "definite": false,
          "start": 3928,
          "end": 3945
        }
      ],
      "declare": false,
      "start": 3924,
      "end": 3946
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
            "start": 3958,
            "end": 3961
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
                "start": 3965,
                "end": 3971
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r6arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3973,
                "end": 3979
              }
            ],
            "start": 3964,
            "end": 3980
          },
          "definite": false,
          "start": 3958,
          "end": 3980
        }
      ],
      "declare": false,
      "start": 3954,
      "end": 3981
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
            "start": 3986,
            "end": 3989
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
                "start": 3993,
                "end": 3999
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r6arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4001,
                "end": 4007
              }
            ],
            "start": 3992,
            "end": 4008
          },
          "definite": false,
          "start": 3986,
          "end": 4008
        }
      ],
      "declare": false,
      "start": 3982,
      "end": 4009
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
                        "start": 4028,
                        "end": 4029
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4038,
                          "end": 4042
                        },
                        "typeArguments": null,
                        "start": 4038,
                        "end": 4042
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 4028,
                      "end": 4042
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4044,
                        "end": 4045
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4054,
                          "end": 4061
                        },
                        "typeArguments": null,
                        "start": 4054,
                        "end": 4061
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 4044,
                      "end": 4061
                    }
                  ],
                  "start": 4027,
                  "end": 4062
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
                                  "start": 4076,
                                  "end": 4077
                                },
                                "typeArguments": null,
                                "start": 4076,
                                "end": 4077
                              },
                              "start": 4074,
                              "end": 4077
                            },
                            "start": 4071,
                            "end": 4077
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
                              "start": 4082,
                              "end": 4083
                            },
                            "typeArguments": null,
                            "start": 4082,
                            "end": 4083
                          },
                          "start": 4079,
                          "end": 4083
                        },
                        "start": 4066,
                        "end": 4083
                      },
                      "start": 4064,
                      "end": 4083
                    },
                    "start": 4063,
                    "end": 4083
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
                              "start": 4096,
                              "end": 4097
                            },
                            "typeArguments": null,
                            "start": 4096,
                            "end": 4097
                          },
                          "start": 4094,
                          "end": 4097
                        },
                        "start": 4093,
                        "end": 4097
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
                          "start": 4102,
                          "end": 4103
                        },
                        "typeArguments": null,
                        "start": 4102,
                        "end": 4103
                      },
                      "start": 4099,
                      "end": 4103
                    },
                    "start": 4088,
                    "end": 4103
                  },
                  "start": 4085,
                  "end": 4103
                },
                "start": 4023,
                "end": 4103
              },
              "start": 4021,
              "end": 4103
            },
            "start": 4015,
            "end": 4103
          },
          "init": null,
          "definite": false,
          "start": 4015,
          "end": 4103
        }
      ],
      "declare": false,
      "start": 4011,
      "end": 4104
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
                                  "start": 4135,
                                  "end": 4139
                                },
                                "typeArguments": null,
                                "start": 4135,
                                "end": 4139
                              },
                              "start": 4133,
                              "end": 4139
                            },
                            "start": 4130,
                            "end": 4139
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
                              "start": 4144,
                              "end": 4151
                            },
                            "typeArguments": null,
                            "start": 4144,
                            "end": 4151
                          },
                          "start": 4141,
                          "end": 4151
                        },
                        "start": 4125,
                        "end": 4151
                      },
                      "start": 4123,
                      "end": 4151
                    },
                    "start": 4122,
                    "end": 4151
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
                              "start": 4164,
                              "end": 4168
                            },
                            "typeArguments": null,
                            "start": 4164,
                            "end": 4168
                          },
                          "start": 4162,
                          "end": 4168
                        },
                        "start": 4161,
                        "end": 4168
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
                          "start": 4173,
                          "end": 4180
                        },
                        "typeArguments": null,
                        "start": 4173,
                        "end": 4180
                      },
                      "start": 4170,
                      "end": 4180
                    },
                    "start": 4156,
                    "end": 4180
                  },
                  "start": 4153,
                  "end": 4180
                },
                "start": 4117,
                "end": 4180
              },
              "start": 4115,
              "end": 4180
            },
            "start": 4109,
            "end": 4180
          },
          "init": null,
          "definite": false,
          "start": 4109,
          "end": 4180
        }
      ],
      "declare": false,
      "start": 4105,
      "end": 4181
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
            "start": 4186,
            "end": 4188
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null,
              "start": 4191,
              "end": 4195
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r7arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4196,
                "end": 4202
              }
            ],
            "optional": false,
            "start": 4191,
            "end": 4203
          },
          "definite": false,
          "start": 4186,
          "end": 4203
        }
      ],
      "declare": false,
      "start": 4182,
      "end": 4204
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
            "start": 4216,
            "end": 4219
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
                "start": 4223,
                "end": 4229
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r7arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4231,
                "end": 4237
              }
            ],
            "start": 4222,
            "end": 4238
          },
          "definite": false,
          "start": 4216,
          "end": 4238
        }
      ],
      "declare": false,
      "start": 4212,
      "end": 4239
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
            "start": 4244,
            "end": 4247
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
                "start": 4251,
                "end": 4257
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r7arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4259,
                "end": 4265
              }
            ],
            "start": 4250,
            "end": 4266
          },
          "definite": false,
          "start": 4244,
          "end": 4266
        }
      ],
      "declare": false,
      "start": 4240,
      "end": 4267
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
            "name": "r8arg1",
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
                        "start": 4286,
                        "end": 4287
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4296,
                          "end": 4300
                        },
                        "typeArguments": null,
                        "start": 4296,
                        "end": 4300
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 4286,
                      "end": 4300
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4302,
                        "end": 4303
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4312,
                          "end": 4319
                        },
                        "typeArguments": null,
                        "start": 4312,
                        "end": 4319
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 4302,
                      "end": 4319
                    }
                  ],
                  "start": 4285,
                  "end": 4320
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
                                  "start": 4334,
                                  "end": 4335
                                },
                                "typeArguments": null,
                                "start": 4334,
                                "end": 4335
                              },
                              "start": 4332,
                              "end": 4335
                            },
                            "start": 4329,
                            "end": 4335
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
                              "start": 4340,
                              "end": 4341
                            },
                            "typeArguments": null,
                            "start": 4340,
                            "end": 4341
                          },
                          "start": 4337,
                          "end": 4341
                        },
                        "start": 4324,
                        "end": 4341
                      },
                      "start": 4322,
                      "end": 4341
                    },
                    "start": 4321,
                    "end": 4341
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
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4357,
                                  "end": 4358
                                },
                                "typeArguments": null,
                                "start": 4357,
                                "end": 4358
                              },
                              "start": 4355,
                              "end": 4358
                            },
                            "start": 4351,
                            "end": 4358
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
                              "start": 4363,
                              "end": 4364
                            },
                            "typeArguments": null,
                            "start": 4363,
                            "end": 4364
                          },
                          "start": 4360,
                          "end": 4364
                        },
                        "start": 4346,
                        "end": 4364
                      },
                      "start": 4344,
                      "end": 4364
                    },
                    "start": 4343,
                    "end": 4364
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
                              "start": 4377,
                              "end": 4378
                            },
                            "typeArguments": null,
                            "start": 4377,
                            "end": 4378
                          },
                          "start": 4375,
                          "end": 4378
                        },
                        "start": 4374,
                        "end": 4378
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
                          "start": 4383,
                          "end": 4384
                        },
                        "typeArguments": null,
                        "start": 4383,
                        "end": 4384
                      },
                      "start": 4380,
                      "end": 4384
                    },
                    "start": 4369,
                    "end": 4384
                  },
                  "start": 4366,
                  "end": 4384
                },
                "start": 4281,
                "end": 4384
              },
              "start": 4279,
              "end": 4384
            },
            "start": 4273,
            "end": 4384
          },
          "init": null,
          "definite": false,
          "start": 4273,
          "end": 4384
        }
      ],
      "declare": false,
      "start": 4269,
      "end": 4385
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
            "name": "r8arg2",
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
                                  "start": 4416,
                                  "end": 4420
                                },
                                "typeArguments": null,
                                "start": 4416,
                                "end": 4420
                              },
                              "start": 4414,
                              "end": 4420
                            },
                            "start": 4411,
                            "end": 4420
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
                              "start": 4425,
                              "end": 4432
                            },
                            "typeArguments": null,
                            "start": 4425,
                            "end": 4432
                          },
                          "start": 4422,
                          "end": 4432
                        },
                        "start": 4406,
                        "end": 4432
                      },
                      "start": 4404,
                      "end": 4432
                    },
                    "start": 4403,
                    "end": 4432
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
                                  "start": 4448,
                                  "end": 4452
                                },
                                "typeArguments": null,
                                "start": 4448,
                                "end": 4452
                              },
                              "start": 4446,
                              "end": 4452
                            },
                            "start": 4442,
                            "end": 4452
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
                              "start": 4457,
                              "end": 4464
                            },
                            "typeArguments": null,
                            "start": 4457,
                            "end": 4464
                          },
                          "start": 4454,
                          "end": 4464
                        },
                        "start": 4437,
                        "end": 4464
                      },
                      "start": 4435,
                      "end": 4464
                    },
                    "start": 4434,
                    "end": 4464
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
                              "start": 4477,
                              "end": 4481
                            },
                            "typeArguments": null,
                            "start": 4477,
                            "end": 4481
                          },
                          "start": 4475,
                          "end": 4481
                        },
                        "start": 4474,
                        "end": 4481
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
                          "start": 4486,
                          "end": 4493
                        },
                        "typeArguments": null,
                        "start": 4486,
                        "end": 4493
                      },
                      "start": 4483,
                      "end": 4493
                    },
                    "start": 4469,
                    "end": 4493
                  },
                  "start": 4466,
                  "end": 4493
                },
                "start": 4398,
                "end": 4493
              },
              "start": 4396,
              "end": 4493
            },
            "start": 4390,
            "end": 4493
          },
          "init": null,
          "definite": false,
          "start": 4390,
          "end": 4493
        }
      ],
      "declare": false,
      "start": 4386,
      "end": 4494
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
            "start": 4499,
            "end": 4501
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo8",
              "optional": false,
              "typeAnnotation": null,
              "start": 4504,
              "end": 4508
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r8arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4509,
                "end": 4515
              }
            ],
            "optional": false,
            "start": 4504,
            "end": 4516
          },
          "definite": false,
          "start": 4499,
          "end": 4516
        }
      ],
      "declare": false,
      "start": 4495,
      "end": 4517
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
            "name": "r8a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4529,
            "end": 4532
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r8arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4536,
                "end": 4542
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r8arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4544,
                "end": 4550
              }
            ],
            "start": 4535,
            "end": 4551
          },
          "definite": false,
          "start": 4529,
          "end": 4551
        }
      ],
      "declare": false,
      "start": 4525,
      "end": 4552
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
            "name": "r8b",
            "optional": false,
            "typeAnnotation": null,
            "start": 4557,
            "end": 4560
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r8arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4564,
                "end": 4570
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r8arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4572,
                "end": 4578
              }
            ],
            "start": 4563,
            "end": 4579
          },
          "definite": false,
          "start": 4557,
          "end": 4579
        }
      ],
      "declare": false,
      "start": 4553,
      "end": 4580
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
            "name": "r9arg1",
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
                        "start": 4599,
                        "end": 4600
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4609,
                          "end": 4613
                        },
                        "typeArguments": null,
                        "start": 4609,
                        "end": 4613
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 4599,
                      "end": 4613
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4615,
                        "end": 4616
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4625,
                          "end": 4632
                        },
                        "typeArguments": null,
                        "start": 4625,
                        "end": 4632
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 4615,
                      "end": 4632
                    }
                  ],
                  "start": 4598,
                  "end": 4633
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
                                  "start": 4647,
                                  "end": 4648
                                },
                                "typeArguments": null,
                                "start": 4647,
                                "end": 4648
                              },
                              "start": 4645,
                              "end": 4648
                            },
                            "start": 4642,
                            "end": 4648
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
                              "start": 4653,
                              "end": 4654
                            },
                            "typeArguments": null,
                            "start": 4653,
                            "end": 4654
                          },
                          "start": 4650,
                          "end": 4654
                        },
                        "start": 4637,
                        "end": 4654
                      },
                      "start": 4635,
                      "end": 4654
                    },
                    "start": 4634,
                    "end": 4654
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
                                      "start": 4668,
                                      "end": 4671
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 4673,
                                        "end": 4679
                                      },
                                      "start": 4671,
                                      "end": 4679
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 4668,
                                    "end": 4680
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
                                      "start": 4681,
                                      "end": 4685
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 4687,
                                        "end": 4693
                                      },
                                      "start": 4685,
                                      "end": 4693
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 4681,
                                    "end": 4693
                                  }
                                ],
                                "start": 4666,
                                "end": 4695
                              },
                              "start": 4664,
                              "end": 4695
                            },
                            "start": 4660,
                            "end": 4695
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
                              "start": 4700,
                              "end": 4701
                            },
                            "typeArguments": null,
                            "start": 4700,
                            "end": 4701
                          },
                          "start": 4697,
                          "end": 4701
                        },
                        "start": 4659,
                        "end": 4701
                      },
                      "start": 4657,
                      "end": 4701
                    },
                    "start": 4656,
                    "end": 4701
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
                              "start": 4714,
                              "end": 4715
                            },
                            "typeArguments": null,
                            "start": 4714,
                            "end": 4715
                          },
                          "start": 4712,
                          "end": 4715
                        },
                        "start": 4711,
                        "end": 4715
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
                          "start": 4720,
                          "end": 4721
                        },
                        "typeArguments": null,
                        "start": 4720,
                        "end": 4721
                      },
                      "start": 4717,
                      "end": 4721
                    },
                    "start": 4706,
                    "end": 4721
                  },
                  "start": 4703,
                  "end": 4721
                },
                "start": 4594,
                "end": 4721
              },
              "start": 4592,
              "end": 4721
            },
            "start": 4586,
            "end": 4721
          },
          "init": null,
          "definite": false,
          "start": 4586,
          "end": 4721
        }
      ],
      "declare": false,
      "start": 4582,
      "end": 4722
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
            "name": "r9arg2",
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
                                  "start": 4753,
                                  "end": 4757
                                },
                                "typeArguments": null,
                                "start": 4753,
                                "end": 4757
                              },
                              "start": 4751,
                              "end": 4757
                            },
                            "start": 4748,
                            "end": 4757
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
                              "start": 4762,
                              "end": 4769
                            },
                            "typeArguments": null,
                            "start": 4762,
                            "end": 4769
                          },
                          "start": 4759,
                          "end": 4769
                        },
                        "start": 4743,
                        "end": 4769
                      },
                      "start": 4741,
                      "end": 4769
                    },
                    "start": 4740,
                    "end": 4769
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
                                  "start": 4785,
                                  "end": 4789
                                },
                                "typeArguments": null,
                                "start": 4785,
                                "end": 4789
                              },
                              "start": 4783,
                              "end": 4789
                            },
                            "start": 4779,
                            "end": 4789
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
                              "start": 4794,
                              "end": 4801
                            },
                            "typeArguments": null,
                            "start": 4794,
                            "end": 4801
                          },
                          "start": 4791,
                          "end": 4801
                        },
                        "start": 4774,
                        "end": 4801
                      },
                      "start": 4772,
                      "end": 4801
                    },
                    "start": 4771,
                    "end": 4801
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
                              "start": 4814,
                              "end": 4818
                            },
                            "typeArguments": null,
                            "start": 4814,
                            "end": 4818
                          },
                          "start": 4812,
                          "end": 4818
                        },
                        "start": 4811,
                        "end": 4818
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
                          "start": 4823,
                          "end": 4830
                        },
                        "typeArguments": null,
                        "start": 4823,
                        "end": 4830
                      },
                      "start": 4820,
                      "end": 4830
                    },
                    "start": 4806,
                    "end": 4830
                  },
                  "start": 4803,
                  "end": 4830
                },
                "start": 4735,
                "end": 4830
              },
              "start": 4733,
              "end": 4830
            },
            "start": 4727,
            "end": 4830
          },
          "init": null,
          "definite": false,
          "start": 4727,
          "end": 4830
        }
      ],
      "declare": false,
      "start": 4723,
      "end": 4831
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
            "start": 4836,
            "end": 4838
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo9",
              "optional": false,
              "typeAnnotation": null,
              "start": 4841,
              "end": 4845
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r9arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4846,
                "end": 4852
              }
            ],
            "optional": false,
            "start": 4841,
            "end": 4853
          },
          "definite": false,
          "start": 4836,
          "end": 4853
        }
      ],
      "declare": false,
      "start": 4832,
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
            "name": "r9a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4866,
            "end": 4869
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r9arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4873,
                "end": 4879
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r9arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4881,
                "end": 4887
              }
            ],
            "start": 4872,
            "end": 4888
          },
          "definite": false,
          "start": 4866,
          "end": 4888
        }
      ],
      "declare": false,
      "start": 4862,
      "end": 4889
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
            "name": "r9b",
            "optional": false,
            "typeAnnotation": null,
            "start": 4894,
            "end": 4897
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r9arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4901,
                "end": 4907
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r9arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4909,
                "end": 4915
              }
            ],
            "start": 4900,
            "end": 4916
          },
          "definite": false,
          "start": 4894,
          "end": 4916
        }
      ],
      "declare": false,
      "start": 4890,
      "end": 4917
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
            "name": "r10arg1",
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
                        "start": 4937,
                        "end": 4938
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4947,
                          "end": 4954
                        },
                        "typeArguments": null,
                        "start": 4947,
                        "end": 4954
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 4937,
                      "end": 4954
                    }
                  ],
                  "start": 4936,
                  "end": 4955
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
                      "start": 4959,
                      "end": 4960
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
                            "start": 4962,
                            "end": 4963
                          },
                          "typeArguments": null,
                          "start": 4962,
                          "end": 4963
                        },
                        "start": 4962,
                        "end": 4965
                      },
                      "start": 4960,
                      "end": 4965
                    },
                    "value": null,
                    "start": 4956,
                    "end": 4965
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
                      "start": 4970,
                      "end": 4971
                    },
                    "typeArguments": null,
                    "start": 4970,
                    "end": 4971
                  },
                  "start": 4967,
                  "end": 4971
                },
                "start": 4932,
                "end": 4971
              },
              "start": 4930,
              "end": 4971
            },
            "start": 4923,
            "end": 4971
          },
          "init": null,
          "definite": false,
          "start": 4923,
          "end": 4971
        }
      ],
      "declare": false,
      "start": 4919,
      "end": 4972
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
            "name": "r10arg2",
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
                      "start": 4994,
                      "end": 4995
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
                            "start": 4997,
                            "end": 5004
                          },
                          "typeArguments": null,
                          "start": 4997,
                          "end": 5004
                        },
                        "start": 4997,
                        "end": 5006
                      },
                      "start": 4995,
                      "end": 5006
                    },
                    "value": null,
                    "start": 4991,
                    "end": 5006
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
                      "start": 5011,
                      "end": 5018
                    },
                    "typeArguments": null,
                    "start": 5011,
                    "end": 5018
                  },
                  "start": 5008,
                  "end": 5018
                },
                "start": 4986,
                "end": 5018
              },
              "start": 4984,
              "end": 5018
            },
            "start": 4977,
            "end": 5018
          },
          "init": null,
          "definite": false,
          "start": 4977,
          "end": 5018
        }
      ],
      "declare": false,
      "start": 4973,
      "end": 5019
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
            "name": "r10",
            "optional": false,
            "typeAnnotation": null,
            "start": 5024,
            "end": 5027
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo10",
              "optional": false,
              "typeAnnotation": null,
              "start": 5030,
              "end": 5035
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r10arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 5036,
                "end": 5043
              }
            ],
            "optional": false,
            "start": 5030,
            "end": 5044
          },
          "definite": false,
          "start": 5024,
          "end": 5044
        }
      ],
      "declare": false,
      "start": 5020,
      "end": 5045
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
            "name": "r10a",
            "optional": false,
            "typeAnnotation": null,
            "start": 5057,
            "end": 5061
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r10arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 5065,
                "end": 5072
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r10arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 5074,
                "end": 5081
              }
            ],
            "start": 5064,
            "end": 5082
          },
          "definite": false,
          "start": 5057,
          "end": 5082
        }
      ],
      "declare": false,
      "start": 5053,
      "end": 5083
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
            "name": "r10b",
            "optional": false,
            "typeAnnotation": null,
            "start": 5088,
            "end": 5092
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r10arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 5096,
                "end": 5103
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r10arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 5105,
                "end": 5112
              }
            ],
            "start": 5095,
            "end": 5113
          },
          "definite": false,
          "start": 5088,
          "end": 5113
        }
      ],
      "declare": false,
      "start": 5084,
      "end": 5114
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
            "name": "r11arg1",
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
                        "start": 5134,
                        "end": 5135
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5144,
                          "end": 5148
                        },
                        "typeArguments": null,
                        "start": 5144,
                        "end": 5148
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 5134,
                      "end": 5148
                    }
                  ],
                  "start": 5133,
                  "end": 5149
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
                          "start": 5153,
                          "end": 5154
                        },
                        "typeArguments": null,
                        "start": 5153,
                        "end": 5154
                      },
                      "start": 5151,
                      "end": 5154
                    },
                    "start": 5150,
                    "end": 5154
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
                          "start": 5159,
                          "end": 5160
                        },
                        "typeArguments": null,
                        "start": 5159,
                        "end": 5160
                      },
                      "start": 5157,
                      "end": 5160
                    },
                    "start": 5156,
                    "end": 5160
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
                      "start": 5165,
                      "end": 5166
                    },
                    "typeArguments": null,
                    "start": 5165,
                    "end": 5166
                  },
                  "start": 5162,
                  "end": 5166
                },
                "start": 5129,
                "end": 5166
              },
              "start": 5127,
              "end": 5166
            },
            "start": 5120,
            "end": 5166
          },
          "init": null,
          "definite": false,
          "start": 5120,
          "end": 5166
        }
      ],
      "declare": false,
      "start": 5116,
      "end": 5167
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
            "name": "r11arg2",
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
                              "start": 5191,
                              "end": 5194
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 5196,
                                "end": 5202
                              },
                              "start": 5194,
                              "end": 5202
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 5191,
                            "end": 5202
                          }
                        ],
                        "start": 5189,
                        "end": 5204
                      },
                      "start": 5187,
                      "end": 5204
                    },
                    "start": 5186,
                    "end": 5204
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
                              "start": 5211,
                              "end": 5214
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 5216,
                                "end": 5222
                              },
                              "start": 5214,
                              "end": 5222
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 5211,
                            "end": 5223
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
                              "start": 5224,
                              "end": 5227
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 5229,
                                "end": 5235
                              },
                              "start": 5227,
                              "end": 5235
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 5224,
                            "end": 5235
                          }
                        ],
                        "start": 5209,
                        "end": 5237
                      },
                      "start": 5207,
                      "end": 5237
                    },
                    "start": 5206,
                    "end": 5237
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
                      "start": 5242,
                      "end": 5246
                    },
                    "typeArguments": null,
                    "start": 5242,
                    "end": 5246
                  },
                  "start": 5239,
                  "end": 5246
                },
                "start": 5181,
                "end": 5246
              },
              "start": 5179,
              "end": 5246
            },
            "start": 5172,
            "end": 5246
          },
          "init": null,
          "definite": false,
          "start": 5172,
          "end": 5246
        }
      ],
      "declare": false,
      "start": 5168,
      "end": 5247
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
            "name": "r11",
            "optional": false,
            "typeAnnotation": null,
            "start": 5252,
            "end": 5255
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo11",
              "optional": false,
              "typeAnnotation": null,
              "start": 5258,
              "end": 5263
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r11arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 5264,
                "end": 5271
              }
            ],
            "optional": false,
            "start": 5258,
            "end": 5272
          },
          "definite": false,
          "start": 5252,
          "end": 5272
        }
      ],
      "declare": false,
      "start": 5248,
      "end": 5273
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
            "name": "r11a",
            "optional": false,
            "typeAnnotation": null,
            "start": 5285,
            "end": 5289
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r11arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 5293,
                "end": 5300
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r11arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 5302,
                "end": 5309
              }
            ],
            "start": 5292,
            "end": 5310
          },
          "definite": false,
          "start": 5285,
          "end": 5310
        }
      ],
      "declare": false,
      "start": 5281,
      "end": 5311
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
            "name": "r11b",
            "optional": false,
            "typeAnnotation": null,
            "start": 5316,
            "end": 5320
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r11arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 5324,
                "end": 5331
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r11arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 5333,
                "end": 5340
              }
            ],
            "start": 5323,
            "end": 5341
          },
          "definite": false,
          "start": 5316,
          "end": 5341
        }
      ],
      "declare": false,
      "start": 5312,
      "end": 5342
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
            "name": "r12arg1",
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
                        "start": 5362,
                        "end": 5363
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5372,
                          "end": 5377
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
                                "start": 5378,
                                "end": 5382
                              },
                              "typeArguments": null,
                              "start": 5378,
                              "end": 5382
                            }
                          ],
                          "start": 5377,
                          "end": 5383
                        },
                        "start": 5372,
                        "end": 5383
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 5362,
                      "end": 5383
                    }
                  ],
                  "start": 5361,
                  "end": 5384
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
                          "start": 5388,
                          "end": 5393
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
                                "start": 5394,
                                "end": 5398
                              },
                              "typeArguments": null,
                              "start": 5394,
                              "end": 5398
                            }
                          ],
                          "start": 5393,
                          "end": 5399
                        },
                        "start": 5388,
                        "end": 5399
                      },
                      "start": 5386,
                      "end": 5399
                    },
                    "start": 5385,
                    "end": 5399
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
                          "start": 5404,
                          "end": 5405
                        },
                        "typeArguments": null,
                        "start": 5404,
                        "end": 5405
                      },
                      "start": 5402,
                      "end": 5405
                    },
                    "start": 5401,
                    "end": 5405
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
                      "start": 5410,
                      "end": 5415
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
                            "start": 5416,
                            "end": 5423
                          },
                          "typeArguments": null,
                          "start": 5416,
                          "end": 5423
                        }
                      ],
                      "start": 5415,
                      "end": 5424
                    },
                    "start": 5410,
                    "end": 5424
                  },
                  "start": 5407,
                  "end": 5424
                },
                "start": 5357,
                "end": 5424
              },
              "start": 5355,
              "end": 5424
            },
            "start": 5348,
            "end": 5424
          },
          "init": null,
          "definite": false,
          "start": 5348,
          "end": 5424
        }
      ],
      "declare": false,
      "start": 5344,
      "end": 5425
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
            "name": "r12arg2",
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
                          "start": 5447,
                          "end": 5452
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
                                "start": 5453,
                                "end": 5457
                              },
                              "typeArguments": null,
                              "start": 5453,
                              "end": 5457
                            }
                          ],
                          "start": 5452,
                          "end": 5458
                        },
                        "start": 5447,
                        "end": 5458
                      },
                      "start": 5445,
                      "end": 5458
                    },
                    "start": 5444,
                    "end": 5458
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
                          "start": 5463,
                          "end": 5468
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
                                "start": 5469,
                                "end": 5477
                              },
                              "typeArguments": null,
                              "start": 5469,
                              "end": 5477
                            }
                          ],
                          "start": 5468,
                          "end": 5478
                        },
                        "start": 5463,
                        "end": 5478
                      },
                      "start": 5461,
                      "end": 5478
                    },
                    "start": 5460,
                    "end": 5478
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
                      "start": 5483,
                      "end": 5488
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
                            "start": 5489,
                            "end": 5496
                          },
                          "typeArguments": null,
                          "start": 5489,
                          "end": 5496
                        }
                      ],
                      "start": 5488,
                      "end": 5497
                    },
                    "start": 5483,
                    "end": 5497
                  },
                  "start": 5480,
                  "end": 5497
                },
                "start": 5439,
                "end": 5497
              },
              "start": 5437,
              "end": 5497
            },
            "start": 5430,
            "end": 5497
          },
          "init": null,
          "definite": false,
          "start": 5430,
          "end": 5497
        }
      ],
      "declare": false,
      "start": 5426,
      "end": 5498
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
            "name": "r12",
            "optional": false,
            "typeAnnotation": null,
            "start": 5503,
            "end": 5506
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo12",
              "optional": false,
              "typeAnnotation": null,
              "start": 5509,
              "end": 5514
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r12arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 5515,
                "end": 5522
              }
            ],
            "optional": false,
            "start": 5509,
            "end": 5523
          },
          "definite": false,
          "start": 5503,
          "end": 5523
        }
      ],
      "declare": false,
      "start": 5499,
      "end": 5524
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
            "name": "r12a",
            "optional": false,
            "typeAnnotation": null,
            "start": 5536,
            "end": 5540
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r12arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 5544,
                "end": 5551
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r12arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 5553,
                "end": 5560
              }
            ],
            "start": 5543,
            "end": 5561
          },
          "definite": false,
          "start": 5536,
          "end": 5561
        }
      ],
      "declare": false,
      "start": 5532,
      "end": 5562
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
            "name": "r12b",
            "optional": false,
            "typeAnnotation": null,
            "start": 5567,
            "end": 5571
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r12arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 5575,
                "end": 5582
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r12arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 5584,
                "end": 5591
              }
            ],
            "start": 5574,
            "end": 5592
          },
          "definite": false,
          "start": 5567,
          "end": 5592
        }
      ],
      "declare": false,
      "start": 5563,
      "end": 5593
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
            "name": "r13arg1",
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
                        "start": 5613,
                        "end": 5614
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5623,
                          "end": 5628
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
                                "start": 5629,
                                "end": 5636
                              },
                              "typeArguments": null,
                              "start": 5629,
                              "end": 5636
                            }
                          ],
                          "start": 5628,
                          "end": 5637
                        },
                        "start": 5623,
                        "end": 5637
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 5613,
                      "end": 5637
                    }
                  ],
                  "start": 5612,
                  "end": 5638
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
                          "start": 5642,
                          "end": 5647
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
                                "start": 5648,
                                "end": 5652
                              },
                              "typeArguments": null,
                              "start": 5648,
                              "end": 5652
                            }
                          ],
                          "start": 5647,
                          "end": 5653
                        },
                        "start": 5642,
                        "end": 5653
                      },
                      "start": 5640,
                      "end": 5653
                    },
                    "start": 5639,
                    "end": 5653
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
                          "start": 5658,
                          "end": 5659
                        },
                        "typeArguments": null,
                        "start": 5658,
                        "end": 5659
                      },
                      "start": 5656,
                      "end": 5659
                    },
                    "start": 5655,
                    "end": 5659
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
                      "start": 5664,
                      "end": 5665
                    },
                    "typeArguments": null,
                    "start": 5664,
                    "end": 5665
                  },
                  "start": 5661,
                  "end": 5665
                },
                "start": 5608,
                "end": 5665
              },
              "start": 5606,
              "end": 5665
            },
            "start": 5599,
            "end": 5665
          },
          "init": null,
          "definite": false,
          "start": 5599,
          "end": 5665
        }
      ],
      "declare": false,
      "start": 5595,
      "end": 5666
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
            "name": "r13arg2",
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
                          "start": 5688,
                          "end": 5693
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
                                "start": 5694,
                                "end": 5698
                              },
                              "typeArguments": null,
                              "start": 5694,
                              "end": 5698
                            }
                          ],
                          "start": 5693,
                          "end": 5699
                        },
                        "start": 5688,
                        "end": 5699
                      },
                      "start": 5686,
                      "end": 5699
                    },
                    "start": 5685,
                    "end": 5699
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
                          "start": 5704,
                          "end": 5709
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
                                "start": 5710,
                                "end": 5717
                              },
                              "typeArguments": null,
                              "start": 5710,
                              "end": 5717
                            }
                          ],
                          "start": 5709,
                          "end": 5718
                        },
                        "start": 5704,
                        "end": 5718
                      },
                      "start": 5702,
                      "end": 5718
                    },
                    "start": 5701,
                    "end": 5718
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
                      "start": 5723,
                      "end": 5728
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
                            "start": 5729,
                            "end": 5736
                          },
                          "typeArguments": null,
                          "start": 5729,
                          "end": 5736
                        }
                      ],
                      "start": 5728,
                      "end": 5737
                    },
                    "start": 5723,
                    "end": 5737
                  },
                  "start": 5720,
                  "end": 5737
                },
                "start": 5680,
                "end": 5737
              },
              "start": 5678,
              "end": 5737
            },
            "start": 5671,
            "end": 5737
          },
          "init": null,
          "definite": false,
          "start": 5671,
          "end": 5737
        }
      ],
      "declare": false,
      "start": 5667,
      "end": 5738
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
            "name": "r13",
            "optional": false,
            "typeAnnotation": null,
            "start": 5743,
            "end": 5746
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo13",
              "optional": false,
              "typeAnnotation": null,
              "start": 5749,
              "end": 5754
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r13arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 5755,
                "end": 5762
              }
            ],
            "optional": false,
            "start": 5749,
            "end": 5763
          },
          "definite": false,
          "start": 5743,
          "end": 5763
        }
      ],
      "declare": false,
      "start": 5739,
      "end": 5764
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
            "name": "r13a",
            "optional": false,
            "typeAnnotation": null,
            "start": 5776,
            "end": 5780
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r13arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 5784,
                "end": 5791
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r13arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 5793,
                "end": 5800
              }
            ],
            "start": 5783,
            "end": 5801
          },
          "definite": false,
          "start": 5776,
          "end": 5801
        }
      ],
      "declare": false,
      "start": 5772,
      "end": 5802
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
            "name": "r13b",
            "optional": false,
            "typeAnnotation": null,
            "start": 5807,
            "end": 5811
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r13arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 5815,
                "end": 5822
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r13arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 5824,
                "end": 5831
              }
            ],
            "start": 5814,
            "end": 5832
          },
          "definite": false,
          "start": 5807,
          "end": 5832
        }
      ],
      "declare": false,
      "start": 5803,
      "end": 5833
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
            "name": "r14arg1",
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
                        "start": 5853,
                        "end": 5854
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 5853,
                      "end": 5854
                    }
                  ],
                  "start": 5852,
                  "end": 5855
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
                              "start": 5861,
                              "end": 5862
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
                                  "start": 5864,
                                  "end": 5865
                                },
                                "typeArguments": null,
                                "start": 5864,
                                "end": 5865
                              },
                              "start": 5862,
                              "end": 5865
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 5861,
                            "end": 5866
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
                              "start": 5867,
                              "end": 5868
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
                                  "start": 5870,
                                  "end": 5871
                                },
                                "typeArguments": null,
                                "start": 5870,
                                "end": 5871
                              },
                              "start": 5868,
                              "end": 5871
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 5867,
                            "end": 5871
                          }
                        ],
                        "start": 5859,
                        "end": 5873
                      },
                      "start": 5857,
                      "end": 5873
                    },
                    "start": 5856,
                    "end": 5873
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
                      "start": 5878,
                      "end": 5879
                    },
                    "typeArguments": null,
                    "start": 5878,
                    "end": 5879
                  },
                  "start": 5875,
                  "end": 5879
                },
                "start": 5848,
                "end": 5879
              },
              "start": 5846,
              "end": 5879
            },
            "start": 5839,
            "end": 5879
          },
          "init": null,
          "definite": false,
          "start": 5839,
          "end": 5879
        }
      ],
      "declare": false,
      "start": 5835,
      "end": 5880
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
            "name": "r14arg2",
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
                              "start": 5904,
                              "end": 5905
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 5907,
                                "end": 5913
                              },
                              "start": 5905,
                              "end": 5913
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 5904,
                            "end": 5914
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
                              "start": 5915,
                              "end": 5916
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 5918,
                                "end": 5924
                              },
                              "start": 5916,
                              "end": 5924
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 5915,
                            "end": 5924
                          }
                        ],
                        "start": 5902,
                        "end": 5926
                      },
                      "start": 5900,
                      "end": 5926
                    },
                    "start": 5899,
                    "end": 5926
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
                      "start": 5931,
                      "end": 5937
                    },
                    "typeArguments": null,
                    "start": 5931,
                    "end": 5937
                  },
                  "start": 5928,
                  "end": 5937
                },
                "start": 5894,
                "end": 5937
              },
              "start": 5892,
              "end": 5937
            },
            "start": 5885,
            "end": 5937
          },
          "init": null,
          "definite": false,
          "start": 5885,
          "end": 5937
        }
      ],
      "declare": false,
      "start": 5881,
      "end": 5938
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
            "name": "r14",
            "optional": false,
            "typeAnnotation": null,
            "start": 5943,
            "end": 5946
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo14",
              "optional": false,
              "typeAnnotation": null,
              "start": 5949,
              "end": 5954
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r14arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 5955,
                "end": 5962
              }
            ],
            "optional": false,
            "start": 5949,
            "end": 5963
          },
          "definite": false,
          "start": 5943,
          "end": 5963
        }
      ],
      "declare": false,
      "start": 5939,
      "end": 5964
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
            "name": "r14a",
            "optional": false,
            "typeAnnotation": null,
            "start": 5976,
            "end": 5980
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r14arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 5984,
                "end": 5991
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r14arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 5993,
                "end": 6000
              }
            ],
            "start": 5983,
            "end": 6001
          },
          "definite": false,
          "start": 5976,
          "end": 6001
        }
      ],
      "declare": false,
      "start": 5972,
      "end": 6002
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
            "name": "r14b",
            "optional": false,
            "typeAnnotation": null,
            "start": 6007,
            "end": 6011
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r14arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 6015,
                "end": 6022
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r14arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 6024,
                "end": 6031
              }
            ],
            "start": 6014,
            "end": 6032
          },
          "definite": false,
          "start": 6007,
          "end": 6032
        }
      ],
      "declare": false,
      "start": 6003,
      "end": 6033
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
            "name": "r15arg1",
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
                        "start": 6053,
                        "end": 6054
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 6053,
                      "end": 6054
                    }
                  ],
                  "start": 6052,
                  "end": 6055
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
                          "start": 6059,
                          "end": 6060
                        },
                        "typeArguments": null,
                        "start": 6059,
                        "end": 6060
                      },
                      "start": 6057,
                      "end": 6060
                    },
                    "start": 6056,
                    "end": 6060
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
                        "start": 6065,
                        "end": 6066
                      },
                      "typeArguments": null,
                      "start": 6065,
                      "end": 6066
                    },
                    "start": 6065,
                    "end": 6068
                  },
                  "start": 6062,
                  "end": 6068
                },
                "start": 6048,
                "end": 6068
              },
              "start": 6046,
              "end": 6068
            },
            "start": 6039,
            "end": 6068
          },
          "init": null,
          "definite": false,
          "start": 6039,
          "end": 6068
        }
      ],
      "declare": false,
      "start": 6035,
      "end": 6069
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
            "name": "r15",
            "optional": false,
            "typeAnnotation": null,
            "start": 6074,
            "end": 6077
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo15",
              "optional": false,
              "typeAnnotation": null,
              "start": 6080,
              "end": 6085
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r15arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 6086,
                "end": 6093
              }
            ],
            "optional": false,
            "start": 6080,
            "end": 6094
          },
          "definite": false,
          "start": 6074,
          "end": 6094
        }
      ],
      "declare": false,
      "start": 6070,
      "end": 6095
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
            "name": "r16arg1",
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
                        "start": 6121,
                        "end": 6122
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6131,
                          "end": 6135
                        },
                        "typeArguments": null,
                        "start": 6131,
                        "end": 6135
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 6121,
                      "end": 6135
                    }
                  ],
                  "start": 6120,
                  "end": 6136
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
                          "start": 6140,
                          "end": 6141
                        },
                        "typeArguments": null,
                        "start": 6140,
                        "end": 6141
                      },
                      "start": 6138,
                      "end": 6141
                    },
                    "start": 6137,
                    "end": 6141
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 6146,
                      "end": 6152
                    },
                    "start": 6146,
                    "end": 6154
                  },
                  "start": 6143,
                  "end": 6154
                },
                "start": 6116,
                "end": 6154
              },
              "start": 6114,
              "end": 6154
            },
            "start": 6107,
            "end": 6154
          },
          "init": null,
          "definite": false,
          "start": 6107,
          "end": 6154
        }
      ],
      "declare": false,
      "start": 6103,
      "end": 6155
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
            "name": "r16",
            "optional": false,
            "typeAnnotation": null,
            "start": 6160,
            "end": 6163
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo16",
              "optional": false,
              "typeAnnotation": null,
              "start": 6166,
              "end": 6171
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r16arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 6172,
                "end": 6179
              }
            ],
            "optional": false,
            "start": 6166,
            "end": 6180
          },
          "definite": false,
          "start": 6160,
          "end": 6180
        }
      ],
      "declare": false,
      "start": 6156,
      "end": 6181
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
            "name": "r17arg1",
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
                        "start": 6200,
                        "end": 6201
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 6200,
                      "end": 6201
                    }
                  ],
                  "start": 6199,
                  "end": 6202
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
                                  "start": 6210,
                                  "end": 6211
                                },
                                "typeArguments": null,
                                "start": 6210,
                                "end": 6211
                              },
                              "start": 6208,
                              "end": 6211
                            },
                            "start": 6207,
                            "end": 6211
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
                              "start": 6216,
                              "end": 6217
                            },
                            "typeArguments": null,
                            "start": 6216,
                            "end": 6217
                          },
                          "start": 6213,
                          "end": 6217
                        },
                        "start": 6206,
                        "end": 6217
                      },
                      "start": 6204,
                      "end": 6217
                    },
                    "start": 6203,
                    "end": 6217
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
                        "start": 6222,
                        "end": 6223
                      },
                      "typeArguments": null,
                      "start": 6222,
                      "end": 6223
                    },
                    "start": 6222,
                    "end": 6225
                  },
                  "start": 6219,
                  "end": 6225
                },
                "start": 6195,
                "end": 6225
              },
              "start": 6193,
              "end": 6225
            },
            "start": 6186,
            "end": 6225
          },
          "init": null,
          "definite": false,
          "start": 6186,
          "end": 6225
        }
      ],
      "declare": false,
      "start": 6182,
      "end": 6226
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
            "name": "r17",
            "optional": false,
            "typeAnnotation": null,
            "start": 6231,
            "end": 6234
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo17",
              "optional": false,
              "typeAnnotation": null,
              "start": 6237,
              "end": 6242
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r17arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 6243,
                "end": 6250
              }
            ],
            "optional": false,
            "start": 6237,
            "end": 6251
          },
          "definite": false,
          "start": 6231,
          "end": 6251
        }
      ],
      "declare": false,
      "start": 6227,
      "end": 6252
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
            "name": "r18arg1",
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
                        "start": 6278,
                        "end": 6279
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 6278,
                      "end": 6279
                    }
                  ],
                  "start": 6277,
                  "end": 6280
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
                                  "start": 6288,
                                  "end": 6289
                                },
                                "typeArguments": null,
                                "start": 6288,
                                "end": 6289
                              },
                              "start": 6286,
                              "end": 6289
                            },
                            "start": 6285,
                            "end": 6289
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
                              "start": 6294,
                              "end": 6295
                            },
                            "typeArguments": null,
                            "start": 6294,
                            "end": 6295
                          },
                          "start": 6291,
                          "end": 6295
                        },
                        "start": 6284,
                        "end": 6295
                      },
                      "start": 6282,
                      "end": 6295
                    },
                    "start": 6281,
                    "end": 6295
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
                        "start": 6300,
                        "end": 6301
                      },
                      "typeArguments": null,
                      "start": 6300,
                      "end": 6301
                    },
                    "start": 6300,
                    "end": 6303
                  },
                  "start": 6297,
                  "end": 6303
                },
                "start": 6273,
                "end": 6303
              },
              "start": 6271,
              "end": 6303
            },
            "start": 6264,
            "end": 6303
          },
          "init": null,
          "definite": false,
          "start": 6264,
          "end": 6303
        }
      ],
      "declare": false,
      "start": 6260,
      "end": 6304
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
            "name": "r18",
            "optional": false,
            "typeAnnotation": null,
            "start": 6309,
            "end": 6312
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo18",
              "optional": false,
              "typeAnnotation": null,
              "start": 6315,
              "end": 6320
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r18arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 6321,
                "end": 6328
              }
            ],
            "optional": false,
            "start": 6315,
            "end": 6329
          },
          "definite": false,
          "start": 6309,
          "end": 6329
        }
      ],
      "declare": false,
      "start": 6305,
      "end": 6330
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 102,
  "end": 6331
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 102,
    "end": 107,
    "range": [
      102,
      107
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 108,
    "end": 112,
    "range": [
      108,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 115,
    "end": 118,
    "range": [
      115,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 120,
    "end": 126,
    "range": [
      120,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 130,
    "end": 135,
    "range": [
      130,
      135
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 136,
    "end": 143,
    "range": [
      136,
      143
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 144,
    "end": 151,
    "range": [
      144,
      151
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 152,
    "end": 156,
    "range": [
      152,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 159,
    "end": 162,
    "range": [
      159,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 164,
    "end": 170,
    "range": [
      164,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 174,
    "end": 179,
    "range": [
      174,
      179
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 180,
    "end": 188,
    "range": [
      180,
      188
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 189,
    "end": 196,
    "range": [
      189,
      196
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 197,
    "end": 204,
    "range": [
      197,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 207,
    "end": 210,
    "range": [
      207,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 212,
    "end": 218,
    "range": [
      212,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 222,
    "end": 227,
    "range": [
      222,
      227
    ]
  },
  {
    "type": "Identifier",
    "value": "OtherDerived",
    "start": 228,
    "end": 240,
    "range": [
      228,
      240
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 241,
    "end": 248,
    "range": [
      241,
      248
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 249,
    "end": 253,
    "range": [
      249,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Identifier",
    "value": "bing",
    "start": 256,
    "end": 260,
    "range": [
      256,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 262,
    "end": 268,
    "range": [
      262,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 273,
    "end": 280,
    "range": [
      273,
      280
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 281,
    "end": 289,
    "range": [
      281,
      289
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 290,
    "end": 294,
    "range": [
      290,
      294
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 298,
    "end": 301,
    "range": [
      298,
      301
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 303,
    "end": 304,
    "range": [
      303,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 306,
    "end": 312,
    "range": [
      306,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 314,
    "end": 316,
    "range": [
      314,
      316
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 317,
    "end": 323,
    "range": [
      317,
      323
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 328,
    "end": 334,
    "range": [
      328,
      334
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 338,
    "end": 345,
    "range": [
      338,
      345
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 346,
    "end": 354,
    "range": [
      346,
      354
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 355,
    "end": 359,
    "range": [
      355,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 363,
    "end": 366,
    "range": [
      363,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 369,
    "end": 372,
    "range": [
      369,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 375,
    "end": 382,
    "range": [
      375,
      382
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 383,
    "end": 391,
    "range": [
      383,
      391
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 392,
    "end": 396,
    "range": [
      392,
      396
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 400,
    "end": 403,
    "range": [
      400,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 408,
    "end": 414,
    "range": [
      408,
      414
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 416,
    "end": 418,
    "range": [
      416,
      418
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 419,
    "end": 425,
    "range": [
      419,
      425
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 425,
    "end": 426,
    "range": [
      425,
      426
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 426,
    "end": 427,
    "range": [
      426,
      427
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 427,
    "end": 428,
    "range": [
      427,
      428
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 428,
    "end": 429,
    "range": [
      428,
      429
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 430,
    "end": 436,
    "range": [
      430,
      436
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 440,
    "end": 447,
    "range": [
      440,
      447
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 448,
    "end": 456,
    "range": [
      448,
      456
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 457,
    "end": 461,
    "range": [
      457,
      461
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 461,
    "end": 462,
    "range": [
      461,
      462
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 462,
    "end": 463,
    "range": [
      462,
      463
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 465,
    "end": 468,
    "range": [
      465,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 469,
    "end": 470,
    "range": [
      469,
      470
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 471,
    "end": 474,
    "range": [
      471,
      474
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 477,
    "end": 484,
    "range": [
      477,
      484
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 485,
    "end": 493,
    "range": [
      485,
      493
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 494,
    "end": 498,
    "range": [
      494,
      498
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 500,
    "end": 501,
    "range": [
      500,
      501
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 502,
    "end": 505,
    "range": [
      502,
      505
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 510,
    "end": 516,
    "range": [
      510,
      516
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 518,
    "end": 520,
    "range": [
      518,
      520
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 521,
    "end": 525,
    "range": [
      521,
      525
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 528,
    "end": 534,
    "range": [
      528,
      534
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 535,
    "end": 536,
    "range": [
      535,
      536
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 536,
    "end": 537,
    "range": [
      536,
      537
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 538,
    "end": 545,
    "range": [
      538,
      545
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 546,
    "end": 554,
    "range": [
      546,
      554
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 555,
    "end": 559,
    "range": [
      555,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 561,
    "end": 562,
    "range": [
      561,
      562
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 563,
    "end": 566,
    "range": [
      563,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 569,
    "end": 572,
    "range": [
      569,
      572
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 575,
    "end": 582,
    "range": [
      575,
      582
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 583,
    "end": 591,
    "range": [
      583,
      591
    ]
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 592,
    "end": 596,
    "range": [
      592,
      596
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 597,
    "end": 598,
    "range": [
      597,
      598
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 598,
    "end": 599,
    "range": [
      598,
      599
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 600,
    "end": 603,
    "range": [
      600,
      603
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 604,
    "end": 605,
    "range": [
      604,
      605
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 606,
    "end": 607,
    "range": [
      606,
      607
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 608,
    "end": 614,
    "range": [
      608,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 617,
    "end": 618,
    "range": [
      617,
      618
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 619,
    "end": 625,
    "range": [
      619,
      625
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 625,
    "end": 626,
    "range": [
      625,
      626
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 627,
    "end": 629,
    "range": [
      627,
      629
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 630,
    "end": 636,
    "range": [
      630,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 637,
    "end": 638,
    "range": [
      637,
      638
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 639,
    "end": 645,
    "range": [
      639,
      645
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 647,
    "end": 648,
    "range": [
      647,
      648
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 649,
    "end": 656,
    "range": [
      649,
      656
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 657,
    "end": 665,
    "range": [
      657,
      665
    ]
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 666,
    "end": 670,
    "range": [
      666,
      670
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 670,
    "end": 671,
    "range": [
      670,
      671
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 671,
    "end": 672,
    "range": [
      671,
      672
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 672,
    "end": 673,
    "range": [
      672,
      673
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 674,
    "end": 677,
    "range": [
      674,
      677
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 677,
    "end": 678,
    "range": [
      677,
      678
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 678,
    "end": 679,
    "range": [
      678,
      679
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 680,
    "end": 683,
    "range": [
      680,
      683
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 683,
    "end": 684,
    "range": [
      683,
      684
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 686,
    "end": 693,
    "range": [
      686,
      693
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 694,
    "end": 702,
    "range": [
      694,
      702
    ]
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 703,
    "end": 707,
    "range": [
      703,
      707
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 707,
    "end": 708,
    "range": [
      707,
      708
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 708,
    "end": 709,
    "range": [
      708,
      709
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 709,
    "end": 710,
    "range": [
      709,
      710
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 711,
    "end": 714,
    "range": [
      711,
      714
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 715,
    "end": 716,
    "range": [
      715,
      716
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 716,
    "end": 717,
    "range": [
      716,
      717
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 717,
    "end": 718,
    "range": [
      717,
      718
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 719,
    "end": 722,
    "range": [
      719,
      722
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 723,
    "end": 724,
    "range": [
      723,
      724
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 724,
    "end": 727,
    "range": [
      724,
      727
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 727,
    "end": 728,
    "range": [
      727,
      728
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 729,
    "end": 735,
    "range": [
      729,
      735
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 735,
    "end": 736,
    "range": [
      735,
      736
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 737,
    "end": 739,
    "range": [
      737,
      739
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 740,
    "end": 746,
    "range": [
      740,
      746
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 746,
    "end": 747,
    "range": [
      746,
      747
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 748,
    "end": 750,
    "range": [
      748,
      750
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 751,
    "end": 757,
    "range": [
      751,
      757
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 757,
    "end": 758,
    "range": [
      757,
      758
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 758,
    "end": 759,
    "range": [
      758,
      759
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 760,
    "end": 766,
    "range": [
      760,
      766
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 767,
    "end": 768,
    "range": [
      767,
      768
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 768,
    "end": 769,
    "range": [
      768,
      769
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 770,
    "end": 777,
    "range": [
      770,
      777
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 778,
    "end": 786,
    "range": [
      778,
      786
    ]
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 787,
    "end": 791,
    "range": [
      787,
      791
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 791,
    "end": 792,
    "range": [
      791,
      792
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 792,
    "end": 793,
    "range": [
      792,
      793
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 793,
    "end": 794,
    "range": [
      793,
      794
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 795,
    "end": 798,
    "range": [
      795,
      798
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 798,
    "end": 799,
    "range": [
      798,
      799
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 799,
    "end": 800,
    "range": [
      799,
      800
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 801,
    "end": 804,
    "range": [
      801,
      804
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 804,
    "end": 805,
    "range": [
      804,
      805
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 807,
    "end": 814,
    "range": [
      807,
      814
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 815,
    "end": 823,
    "range": [
      815,
      823
    ]
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 824,
    "end": 828,
    "range": [
      824,
      828
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 828,
    "end": 829,
    "range": [
      828,
      829
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 829,
    "end": 830,
    "range": [
      829,
      830
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 832,
    "end": 835,
    "range": [
      832,
      835
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 836,
    "end": 837,
    "range": [
      836,
      837
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 837,
    "end": 838,
    "range": [
      837,
      838
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 838,
    "end": 839,
    "range": [
      838,
      839
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 840,
    "end": 843,
    "range": [
      840,
      843
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 844,
    "end": 845,
    "range": [
      844,
      845
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 845,
    "end": 848,
    "range": [
      845,
      848
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 848,
    "end": 849,
    "range": [
      848,
      849
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 850,
    "end": 854,
    "range": [
      850,
      854
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 854,
    "end": 855,
    "range": [
      854,
      855
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 856,
    "end": 858,
    "range": [
      856,
      858
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 859,
    "end": 866,
    "range": [
      859,
      866
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 866,
    "end": 867,
    "range": [
      866,
      867
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 868,
    "end": 870,
    "range": [
      868,
      870
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 871,
    "end": 875,
    "range": [
      871,
      875
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 875,
    "end": 876,
    "range": [
      875,
      876
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 876,
    "end": 877,
    "range": [
      876,
      877
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 878,
    "end": 884,
    "range": [
      878,
      884
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 885,
    "end": 886,
    "range": [
      885,
      886
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 888,
    "end": 895,
    "range": [
      888,
      895
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 896,
    "end": 904,
    "range": [
      896,
      904
    ]
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 905,
    "end": 909,
    "range": [
      905,
      909
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 909,
    "end": 910,
    "range": [
      909,
      910
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 910,
    "end": 911,
    "range": [
      910,
      911
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 911,
    "end": 912,
    "range": [
      911,
      912
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 913,
    "end": 916,
    "range": [
      913,
      916
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 916,
    "end": 917,
    "range": [
      916,
      917
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 917,
    "end": 918,
    "range": [
      917,
      918
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 919,
    "end": 922,
    "range": [
      919,
      922
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 922,
    "end": 923,
    "range": [
      922,
      923
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 925,
    "end": 932,
    "range": [
      925,
      932
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 933,
    "end": 941,
    "range": [
      933,
      941
    ]
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 942,
    "end": 946,
    "range": [
      942,
      946
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 946,
    "end": 947,
    "range": [
      946,
      947
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 947,
    "end": 948,
    "range": [
      947,
      948
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 948,
    "end": 949,
    "range": [
      948,
      949
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 950,
    "end": 953,
    "range": [
      950,
      953
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 954,
    "end": 955,
    "range": [
      954,
      955
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 955,
    "end": 956,
    "range": [
      955,
      956
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 956,
    "end": 957,
    "range": [
      956,
      957
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 958,
    "end": 961,
    "range": [
      958,
      961
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 962,
    "end": 963,
    "range": [
      962,
      963
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 963,
    "end": 966,
    "range": [
      963,
      966
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 966,
    "end": 967,
    "range": [
      966,
      967
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 968,
    "end": 972,
    "range": [
      968,
      972
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 972,
    "end": 973,
    "range": [
      972,
      973
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 974,
    "end": 976,
    "range": [
      974,
      976
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 977,
    "end": 984,
    "range": [
      977,
      984
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 984,
    "end": 985,
    "range": [
      984,
      985
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 986,
    "end": 988,
    "range": [
      986,
      988
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 989,
    "end": 992,
    "range": [
      989,
      992
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 993,
    "end": 994,
    "range": [
      993,
      994
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 994,
    "end": 995,
    "range": [
      994,
      995
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 995,
    "end": 996,
    "range": [
      995,
      996
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 997,
    "end": 1001,
    "range": [
      997,
      1001
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1001,
    "end": 1002,
    "range": [
      1001,
      1002
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1003,
    "end": 1005,
    "range": [
      1003,
      1005
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1006,
    "end": 1013,
    "range": [
      1006,
      1013
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1013,
    "end": 1014,
    "range": [
      1013,
      1014
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1014,
    "end": 1015,
    "range": [
      1014,
      1015
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1016,
    "end": 1022,
    "range": [
      1016,
      1022
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1023,
    "end": 1024,
    "range": [
      1023,
      1024
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1024,
    "end": 1025,
    "range": [
      1024,
      1025
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1026,
    "end": 1033,
    "range": [
      1026,
      1033
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1034,
    "end": 1042,
    "range": [
      1034,
      1042
    ]
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1043,
    "end": 1047,
    "range": [
      1043,
      1047
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1047,
    "end": 1048,
    "range": [
      1047,
      1048
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1048,
    "end": 1049,
    "range": [
      1048,
      1049
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1049,
    "end": 1050,
    "range": [
      1049,
      1050
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1051,
    "end": 1054,
    "range": [
      1051,
      1054
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1054,
    "end": 1055,
    "range": [
      1054,
      1055
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1055,
    "end": 1056,
    "range": [
      1055,
      1056
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1057,
    "end": 1060,
    "range": [
      1057,
      1060
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1060,
    "end": 1061,
    "range": [
      1060,
      1061
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1063,
    "end": 1070,
    "range": [
      1063,
      1070
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1071,
    "end": 1079,
    "range": [
      1071,
      1079
    ]
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1080,
    "end": 1084,
    "range": [
      1080,
      1084
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1084,
    "end": 1085,
    "range": [
      1084,
      1085
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1085,
    "end": 1086,
    "range": [
      1085,
      1086
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1086,
    "end": 1087,
    "range": [
      1086,
      1087
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1088,
    "end": 1091,
    "range": [
      1088,
      1091
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1092,
    "end": 1093,
    "range": [
      1092,
      1093
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1093,
    "end": 1094,
    "range": [
      1093,
      1094
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1094,
    "end": 1095,
    "range": [
      1094,
      1095
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1096,
    "end": 1099,
    "range": [
      1096,
      1099
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1100,
    "end": 1101,
    "range": [
      1100,
      1101
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1101,
    "end": 1104,
    "range": [
      1101,
      1104
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1104,
    "end": 1105,
    "range": [
      1104,
      1105
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1106,
    "end": 1110,
    "range": [
      1106,
      1110
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1110,
    "end": 1111,
    "range": [
      1110,
      1111
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1112,
    "end": 1114,
    "range": [
      1112,
      1114
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1115,
    "end": 1122,
    "range": [
      1115,
      1122
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1122,
    "end": 1123,
    "range": [
      1122,
      1123
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1124,
    "end": 1125,
    "range": [
      1124,
      1125
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1125,
    "end": 1126,
    "range": [
      1125,
      1126
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1127,
    "end": 1130,
    "range": [
      1127,
      1130
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1131,
    "end": 1132,
    "range": [
      1131,
      1132
    ]
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 1132,
    "end": 1136,
    "range": [
      1132,
      1136
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1136,
    "end": 1137,
    "range": [
      1136,
      1137
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1138,
    "end": 1142,
    "range": [
      1138,
      1142
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1142,
    "end": 1143,
    "range": [
      1142,
      1143
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1144,
    "end": 1146,
    "range": [
      1144,
      1146
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1147,
    "end": 1154,
    "range": [
      1147,
      1154
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1154,
    "end": 1155,
    "range": [
      1154,
      1155
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1156,
    "end": 1158,
    "range": [
      1156,
      1158
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1159,
    "end": 1162,
    "range": [
      1159,
      1162
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1163,
    "end": 1164,
    "range": [
      1163,
      1164
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1164,
    "end": 1165,
    "range": [
      1164,
      1165
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1165,
    "end": 1166,
    "range": [
      1165,
      1166
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1167,
    "end": 1171,
    "range": [
      1167,
      1171
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1171,
    "end": 1172,
    "range": [
      1171,
      1172
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1173,
    "end": 1175,
    "range": [
      1173,
      1175
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1176,
    "end": 1183,
    "range": [
      1176,
      1183
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1183,
    "end": 1184,
    "range": [
      1183,
      1184
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1184,
    "end": 1185,
    "range": [
      1184,
      1185
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1186,
    "end": 1192,
    "range": [
      1186,
      1192
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1193,
    "end": 1194,
    "range": [
      1193,
      1194
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1194,
    "end": 1195,
    "range": [
      1194,
      1195
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1196,
    "end": 1203,
    "range": [
      1196,
      1203
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1204,
    "end": 1212,
    "range": [
      1204,
      1212
    ]
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1213,
    "end": 1217,
    "range": [
      1213,
      1217
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1217,
    "end": 1218,
    "range": [
      1217,
      1218
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1218,
    "end": 1219,
    "range": [
      1218,
      1219
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1219,
    "end": 1220,
    "range": [
      1219,
      1220
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1221,
    "end": 1224,
    "range": [
      1221,
      1224
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1224,
    "end": 1225,
    "range": [
      1224,
      1225
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1225,
    "end": 1226,
    "range": [
      1225,
      1226
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1227,
    "end": 1230,
    "range": [
      1227,
      1230
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1230,
    "end": 1231,
    "range": [
      1230,
      1231
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1233,
    "end": 1240,
    "range": [
      1233,
      1240
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1241,
    "end": 1249,
    "range": [
      1241,
      1249
    ]
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1250,
    "end": 1254,
    "range": [
      1250,
      1254
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1254,
    "end": 1255,
    "range": [
      1254,
      1255
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1255,
    "end": 1256,
    "range": [
      1255,
      1256
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1256,
    "end": 1257,
    "range": [
      1256,
      1257
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1258,
    "end": 1261,
    "range": [
      1258,
      1261
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1262,
    "end": 1263,
    "range": [
      1262,
      1263
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1263,
    "end": 1264,
    "range": [
      1263,
      1264
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1264,
    "end": 1265,
    "range": [
      1264,
      1265
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1266,
    "end": 1269,
    "range": [
      1266,
      1269
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1270,
    "end": 1271,
    "range": [
      1270,
      1271
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1271,
    "end": 1274,
    "range": [
      1271,
      1274
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1274,
    "end": 1275,
    "range": [
      1274,
      1275
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1276,
    "end": 1280,
    "range": [
      1276,
      1280
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1280,
    "end": 1281,
    "range": [
      1280,
      1281
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1282,
    "end": 1284,
    "range": [
      1282,
      1284
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1285,
    "end": 1292,
    "range": [
      1285,
      1292
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1292,
    "end": 1293,
    "range": [
      1292,
      1293
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1294,
    "end": 1295,
    "range": [
      1294,
      1295
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1295,
    "end": 1296,
    "range": [
      1295,
      1296
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1297,
    "end": 1300,
    "range": [
      1297,
      1300
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1301,
    "end": 1302,
    "range": [
      1301,
      1302
    ]
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 1302,
    "end": 1306,
    "range": [
      1302,
      1306
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1306,
    "end": 1307,
    "range": [
      1306,
      1307
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1308,
    "end": 1312,
    "range": [
      1308,
      1312
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1312,
    "end": 1313,
    "range": [
      1312,
      1313
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1314,
    "end": 1316,
    "range": [
      1314,
      1316
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1317,
    "end": 1324,
    "range": [
      1317,
      1324
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1324,
    "end": 1325,
    "range": [
      1324,
      1325
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1326,
    "end": 1328,
    "range": [
      1326,
      1328
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1329,
    "end": 1332,
    "range": [
      1329,
      1332
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1333,
    "end": 1334,
    "range": [
      1333,
      1334
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1334,
    "end": 1335,
    "range": [
      1334,
      1335
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1335,
    "end": 1336,
    "range": [
      1335,
      1336
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1337,
    "end": 1341,
    "range": [
      1337,
      1341
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1341,
    "end": 1342,
    "range": [
      1341,
      1342
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1343,
    "end": 1345,
    "range": [
      1343,
      1345
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1346,
    "end": 1353,
    "range": [
      1346,
      1353
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1353,
    "end": 1354,
    "range": [
      1353,
      1354
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1354,
    "end": 1355,
    "range": [
      1354,
      1355
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1356,
    "end": 1362,
    "range": [
      1356,
      1362
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1363,
    "end": 1364,
    "range": [
      1363,
      1364
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1364,
    "end": 1365,
    "range": [
      1364,
      1365
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1366,
    "end": 1373,
    "range": [
      1366,
      1373
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1374,
    "end": 1382,
    "range": [
      1374,
      1382
    ]
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1383,
    "end": 1387,
    "range": [
      1383,
      1387
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1387,
    "end": 1388,
    "range": [
      1387,
      1388
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1388,
    "end": 1389,
    "range": [
      1388,
      1389
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1389,
    "end": 1390,
    "range": [
      1389,
      1390
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1391,
    "end": 1394,
    "range": [
      1391,
      1394
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1394,
    "end": 1395,
    "range": [
      1394,
      1395
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1395,
    "end": 1396,
    "range": [
      1395,
      1396
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1397,
    "end": 1400,
    "range": [
      1397,
      1400
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1400,
    "end": 1401,
    "range": [
      1400,
      1401
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1403,
    "end": 1410,
    "range": [
      1403,
      1410
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1411,
    "end": 1419,
    "range": [
      1411,
      1419
    ]
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1420,
    "end": 1425,
    "range": [
      1420,
      1425
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1425,
    "end": 1426,
    "range": [
      1425,
      1426
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1426,
    "end": 1427,
    "range": [
      1426,
      1427
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1427,
    "end": 1428,
    "range": [
      1427,
      1428
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1429,
    "end": 1432,
    "range": [
      1429,
      1432
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1433,
    "end": 1434,
    "range": [
      1433,
      1434
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1434,
    "end": 1437,
    "range": [
      1434,
      1437
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1437,
    "end": 1438,
    "range": [
      1437,
      1438
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1438,
    "end": 1439,
    "range": [
      1438,
      1439
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1440,
    "end": 1447,
    "range": [
      1440,
      1447
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1447,
    "end": 1448,
    "range": [
      1447,
      1448
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1448,
    "end": 1449,
    "range": [
      1448,
      1449
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1449,
    "end": 1450,
    "range": [
      1449,
      1450
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1451,
    "end": 1453,
    "range": [
      1451,
      1453
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1454,
    "end": 1461,
    "range": [
      1454,
      1461
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1461,
    "end": 1462,
    "range": [
      1461,
      1462
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1462,
    "end": 1463,
    "range": [
      1462,
      1463
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1464,
    "end": 1470,
    "range": [
      1464,
      1470
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1471,
    "end": 1472,
    "range": [
      1471,
      1472
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1472,
    "end": 1473,
    "range": [
      1472,
      1473
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1474,
    "end": 1481,
    "range": [
      1474,
      1481
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1482,
    "end": 1490,
    "range": [
      1482,
      1490
    ]
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1491,
    "end": 1496,
    "range": [
      1491,
      1496
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1496,
    "end": 1497,
    "range": [
      1496,
      1497
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1497,
    "end": 1498,
    "range": [
      1497,
      1498
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1498,
    "end": 1499,
    "range": [
      1498,
      1499
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1500,
    "end": 1503,
    "range": [
      1500,
      1503
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1503,
    "end": 1504,
    "range": [
      1503,
      1504
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1504,
    "end": 1505,
    "range": [
      1504,
      1505
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1506,
    "end": 1509,
    "range": [
      1506,
      1509
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1509,
    "end": 1510,
    "range": [
      1509,
      1510
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1512,
    "end": 1519,
    "range": [
      1512,
      1519
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1520,
    "end": 1528,
    "range": [
      1520,
      1528
    ]
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1529,
    "end": 1534,
    "range": [
      1529,
      1534
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1534,
    "end": 1535,
    "range": [
      1534,
      1535
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1535,
    "end": 1536,
    "range": [
      1535,
      1536
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1536,
    "end": 1537,
    "range": [
      1536,
      1537
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1538,
    "end": 1541,
    "range": [
      1538,
      1541
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1542,
    "end": 1543,
    "range": [
      1542,
      1543
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1543,
    "end": 1544,
    "range": [
      1543,
      1544
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1544,
    "end": 1545,
    "range": [
      1544,
      1545
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1546,
    "end": 1547,
    "range": [
      1546,
      1547
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1548,
    "end": 1551,
    "range": [
      1548,
      1551
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1551,
    "end": 1552,
    "range": [
      1551,
      1552
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1553,
    "end": 1559,
    "range": [
      1553,
      1559
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1560,
    "end": 1561,
    "range": [
      1560,
      1561
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1561,
    "end": 1562,
    "range": [
      1561,
      1562
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1563,
    "end": 1564,
    "range": [
      1563,
      1564
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1564,
    "end": 1565,
    "range": [
      1564,
      1565
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1566,
    "end": 1567,
    "range": [
      1566,
      1567
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1568,
    "end": 1571,
    "range": [
      1568,
      1571
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1571,
    "end": 1572,
    "range": [
      1571,
      1572
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1573,
    "end": 1579,
    "range": [
      1573,
      1579
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1579,
    "end": 1580,
    "range": [
      1579,
      1580
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1581,
    "end": 1584,
    "range": [
      1581,
      1584
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1584,
    "end": 1585,
    "range": [
      1584,
      1585
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1586,
    "end": 1592,
    "range": [
      1586,
      1592
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1593,
    "end": 1594,
    "range": [
      1593,
      1594
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1594,
    "end": 1595,
    "range": [
      1594,
      1595
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1596,
    "end": 1598,
    "range": [
      1596,
      1598
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1599,
    "end": 1603,
    "range": [
      1599,
      1603
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1603,
    "end": 1604,
    "range": [
      1603,
      1604
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1604,
    "end": 1605,
    "range": [
      1604,
      1605
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1606,
    "end": 1612,
    "range": [
      1606,
      1612
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1613,
    "end": 1614,
    "range": [
      1613,
      1614
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1614,
    "end": 1615,
    "range": [
      1614,
      1615
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1616,
    "end": 1623,
    "range": [
      1616,
      1623
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1624,
    "end": 1632,
    "range": [
      1624,
      1632
    ]
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1633,
    "end": 1638,
    "range": [
      1633,
      1638
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1638,
    "end": 1639,
    "range": [
      1638,
      1639
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1639,
    "end": 1640,
    "range": [
      1639,
      1640
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1640,
    "end": 1641,
    "range": [
      1640,
      1641
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1642,
    "end": 1645,
    "range": [
      1642,
      1645
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1645,
    "end": 1646,
    "range": [
      1645,
      1646
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1646,
    "end": 1647,
    "range": [
      1646,
      1647
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1648,
    "end": 1651,
    "range": [
      1648,
      1651
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1651,
    "end": 1652,
    "range": [
      1651,
      1652
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1654,
    "end": 1661,
    "range": [
      1654,
      1661
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1662,
    "end": 1670,
    "range": [
      1662,
      1670
    ]
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1671,
    "end": 1676,
    "range": [
      1671,
      1676
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1676,
    "end": 1677,
    "range": [
      1676,
      1677
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1677,
    "end": 1678,
    "range": [
      1677,
      1678
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1678,
    "end": 1679,
    "range": [
      1678,
      1679
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1680,
    "end": 1683,
    "range": [
      1680,
      1683
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1684,
    "end": 1685,
    "range": [
      1684,
      1685
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1685,
    "end": 1686,
    "range": [
      1685,
      1686
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1686,
    "end": 1687,
    "range": [
      1686,
      1687
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1688,
    "end": 1693,
    "range": [
      1688,
      1693
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1693,
    "end": 1694,
    "range": [
      1693,
      1694
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1694,
    "end": 1698,
    "range": [
      1694,
      1698
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1698,
    "end": 1699,
    "range": [
      1698,
      1699
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1699,
    "end": 1700,
    "range": [
      1699,
      1700
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1701,
    "end": 1702,
    "range": [
      1701,
      1702
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1702,
    "end": 1703,
    "range": [
      1702,
      1703
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1704,
    "end": 1709,
    "range": [
      1704,
      1709
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1709,
    "end": 1710,
    "range": [
      1709,
      1710
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1710,
    "end": 1718,
    "range": [
      1710,
      1718
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1718,
    "end": 1719,
    "range": [
      1718,
      1719
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1719,
    "end": 1720,
    "range": [
      1719,
      1720
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1721,
    "end": 1723,
    "range": [
      1721,
      1723
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1724,
    "end": 1729,
    "range": [
      1724,
      1729
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1729,
    "end": 1730,
    "range": [
      1729,
      1730
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1730,
    "end": 1737,
    "range": [
      1730,
      1737
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1737,
    "end": 1738,
    "range": [
      1737,
      1738
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1738,
    "end": 1739,
    "range": [
      1738,
      1739
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1739,
    "end": 1740,
    "range": [
      1739,
      1740
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1741,
    "end": 1747,
    "range": [
      1741,
      1747
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1748,
    "end": 1749,
    "range": [
      1748,
      1749
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1749,
    "end": 1750,
    "range": [
      1749,
      1750
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1751,
    "end": 1758,
    "range": [
      1751,
      1758
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1759,
    "end": 1767,
    "range": [
      1759,
      1767
    ]
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1768,
    "end": 1773,
    "range": [
      1768,
      1773
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1773,
    "end": 1774,
    "range": [
      1773,
      1774
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1774,
    "end": 1775,
    "range": [
      1774,
      1775
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1775,
    "end": 1776,
    "range": [
      1775,
      1776
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1777,
    "end": 1780,
    "range": [
      1777,
      1780
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1780,
    "end": 1781,
    "range": [
      1780,
      1781
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1781,
    "end": 1782,
    "range": [
      1781,
      1782
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1783,
    "end": 1786,
    "range": [
      1783,
      1786
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1786,
    "end": 1787,
    "range": [
      1786,
      1787
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1789,
    "end": 1796,
    "range": [
      1789,
      1796
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1797,
    "end": 1805,
    "range": [
      1797,
      1805
    ]
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1806,
    "end": 1811,
    "range": [
      1806,
      1811
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1811,
    "end": 1812,
    "range": [
      1811,
      1812
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1812,
    "end": 1813,
    "range": [
      1812,
      1813
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1813,
    "end": 1814,
    "range": [
      1813,
      1814
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1815,
    "end": 1818,
    "range": [
      1815,
      1818
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1819,
    "end": 1820,
    "range": [
      1819,
      1820
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1820,
    "end": 1821,
    "range": [
      1820,
      1821
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1821,
    "end": 1822,
    "range": [
      1821,
      1822
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1823,
    "end": 1828,
    "range": [
      1823,
      1828
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1828,
    "end": 1829,
    "range": [
      1828,
      1829
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1829,
    "end": 1833,
    "range": [
      1829,
      1833
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1833,
    "end": 1834,
    "range": [
      1833,
      1834
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1834,
    "end": 1835,
    "range": [
      1834,
      1835
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1836,
    "end": 1837,
    "range": [
      1836,
      1837
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1837,
    "end": 1838,
    "range": [
      1837,
      1838
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1839,
    "end": 1844,
    "range": [
      1839,
      1844
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1844,
    "end": 1845,
    "range": [
      1844,
      1845
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1845,
    "end": 1852,
    "range": [
      1845,
      1852
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1852,
    "end": 1853,
    "range": [
      1852,
      1853
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1853,
    "end": 1854,
    "range": [
      1853,
      1854
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1855,
    "end": 1857,
    "range": [
      1855,
      1857
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1858,
    "end": 1863,
    "range": [
      1858,
      1863
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1863,
    "end": 1864,
    "range": [
      1863,
      1864
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1864,
    "end": 1871,
    "range": [
      1864,
      1871
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1871,
    "end": 1872,
    "range": [
      1871,
      1872
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1872,
    "end": 1873,
    "range": [
      1872,
      1873
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1873,
    "end": 1874,
    "range": [
      1873,
      1874
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1875,
    "end": 1881,
    "range": [
      1875,
      1881
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1882,
    "end": 1883,
    "range": [
      1882,
      1883
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1883,
    "end": 1884,
    "range": [
      1883,
      1884
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1885,
    "end": 1892,
    "range": [
      1885,
      1892
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1893,
    "end": 1901,
    "range": [
      1893,
      1901
    ]
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1902,
    "end": 1907,
    "range": [
      1902,
      1907
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1907,
    "end": 1908,
    "range": [
      1907,
      1908
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1908,
    "end": 1909,
    "range": [
      1908,
      1909
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1909,
    "end": 1910,
    "range": [
      1909,
      1910
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1911,
    "end": 1914,
    "range": [
      1911,
      1914
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1914,
    "end": 1915,
    "range": [
      1914,
      1915
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1915,
    "end": 1916,
    "range": [
      1915,
      1916
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1917,
    "end": 1920,
    "range": [
      1917,
      1920
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1920,
    "end": 1921,
    "range": [
      1920,
      1921
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1923,
    "end": 1930,
    "range": [
      1923,
      1930
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1931,
    "end": 1939,
    "range": [
      1931,
      1939
    ]
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 1940,
    "end": 1945,
    "range": [
      1940,
      1945
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1945,
    "end": 1946,
    "range": [
      1945,
      1946
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1946,
    "end": 1947,
    "range": [
      1946,
      1947
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1947,
    "end": 1948,
    "range": [
      1947,
      1948
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1949,
    "end": 1952,
    "range": [
      1949,
      1952
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1953,
    "end": 1954,
    "range": [
      1953,
      1954
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1954,
    "end": 1955,
    "range": [
      1954,
      1955
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1955,
    "end": 1956,
    "range": [
      1955,
      1956
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1957,
    "end": 1958,
    "range": [
      1957,
      1958
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1959,
    "end": 1960,
    "range": [
      1959,
      1960
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1960,
    "end": 1961,
    "range": [
      1960,
      1961
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1962,
    "end": 1968,
    "range": [
      1962,
      1968
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1968,
    "end": 1969,
    "range": [
      1968,
      1969
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1970,
    "end": 1971,
    "range": [
      1970,
      1971
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1971,
    "end": 1972,
    "range": [
      1971,
      1972
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1973,
    "end": 1979,
    "range": [
      1973,
      1979
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1980,
    "end": 1981,
    "range": [
      1980,
      1981
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1981,
    "end": 1982,
    "range": [
      1981,
      1982
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1983,
    "end": 1985,
    "range": [
      1983,
      1985
    ]
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1986,
    "end": 1992,
    "range": [
      1986,
      1992
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1992,
    "end": 1993,
    "range": [
      1992,
      1993
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1993,
    "end": 1994,
    "range": [
      1993,
      1994
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1995,
    "end": 2001,
    "range": [
      1995,
      2001
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2002,
    "end": 2003,
    "range": [
      2002,
      2003
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2003,
    "end": 2004,
    "range": [
      2003,
      2004
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2005,
    "end": 2012,
    "range": [
      2005,
      2012
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2013,
    "end": 2021,
    "range": [
      2013,
      2021
    ]
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2022,
    "end": 2027,
    "range": [
      2022,
      2027
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2027,
    "end": 2028,
    "range": [
      2027,
      2028
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2028,
    "end": 2029,
    "range": [
      2028,
      2029
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2029,
    "end": 2030,
    "range": [
      2029,
      2030
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2031,
    "end": 2034,
    "range": [
      2031,
      2034
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2034,
    "end": 2035,
    "range": [
      2034,
      2035
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2035,
    "end": 2036,
    "range": [
      2035,
      2036
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2037,
    "end": 2040,
    "range": [
      2037,
      2040
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2040,
    "end": 2041,
    "range": [
      2040,
      2041
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2043,
    "end": 2050,
    "range": [
      2043,
      2050
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2051,
    "end": 2059,
    "range": [
      2051,
      2059
    ]
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2060,
    "end": 2065,
    "range": [
      2060,
      2065
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2065,
    "end": 2066,
    "range": [
      2065,
      2066
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2066,
    "end": 2067,
    "range": [
      2066,
      2067
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2067,
    "end": 2068,
    "range": [
      2067,
      2068
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2069,
    "end": 2070,
    "range": [
      2069,
      2070
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2076,
    "end": 2079,
    "range": [
      2076,
      2079
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2080,
    "end": 2081,
    "range": [
      2080,
      2081
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2081,
    "end": 2082,
    "range": [
      2081,
      2082
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2082,
    "end": 2083,
    "range": [
      2082,
      2083
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2084,
    "end": 2090,
    "range": [
      2084,
      2090
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2090,
    "end": 2091,
    "range": [
      2090,
      2091
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2091,
    "end": 2092,
    "range": [
      2091,
      2092
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2093,
    "end": 2099,
    "range": [
      2093,
      2099
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2099,
    "end": 2100,
    "range": [
      2099,
      2100
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2100,
    "end": 2101,
    "range": [
      2100,
      2101
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2101,
    "end": 2102,
    "range": [
      2101,
      2102
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2107,
    "end": 2110,
    "range": [
      2107,
      2110
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2111,
    "end": 2112,
    "range": [
      2111,
      2112
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2112,
    "end": 2113,
    "range": [
      2112,
      2113
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2113,
    "end": 2114,
    "range": [
      2113,
      2114
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2115,
    "end": 2121,
    "range": [
      2115,
      2121
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2121,
    "end": 2122,
    "range": [
      2121,
      2122
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2122,
    "end": 2123,
    "range": [
      2122,
      2123
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2124,
    "end": 2130,
    "range": [
      2124,
      2130
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2130,
    "end": 2131,
    "range": [
      2130,
      2131
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2131,
    "end": 2132,
    "range": [
      2131,
      2132
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2132,
    "end": 2133,
    "range": [
      2132,
      2133
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2135,
    "end": 2136,
    "range": [
      2135,
      2136
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2136,
    "end": 2137,
    "range": [
      2136,
      2137
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2137,
    "end": 2138,
    "range": [
      2137,
      2138
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2139,
    "end": 2145,
    "range": [
      2139,
      2145
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2146,
    "end": 2147,
    "range": [
      2146,
      2147
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2147,
    "end": 2148,
    "range": [
      2147,
      2148
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2149,
    "end": 2156,
    "range": [
      2149,
      2156
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2157,
    "end": 2165,
    "range": [
      2157,
      2165
    ]
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2166,
    "end": 2171,
    "range": [
      2166,
      2171
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2171,
    "end": 2172,
    "range": [
      2171,
      2172
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2172,
    "end": 2173,
    "range": [
      2172,
      2173
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2173,
    "end": 2174,
    "range": [
      2173,
      2174
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2175,
    "end": 2178,
    "range": [
      2175,
      2178
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2178,
    "end": 2179,
    "range": [
      2178,
      2179
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2179,
    "end": 2180,
    "range": [
      2179,
      2180
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2181,
    "end": 2184,
    "range": [
      2181,
      2184
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2184,
    "end": 2185,
    "range": [
      2184,
      2185
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2187,
    "end": 2194,
    "range": [
      2187,
      2194
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2195,
    "end": 2203,
    "range": [
      2195,
      2203
    ]
  },
  {
    "type": "Identifier",
    "value": "foo16",
    "start": 2204,
    "end": 2209,
    "range": [
      2204,
      2209
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2209,
    "end": 2210,
    "range": [
      2209,
      2210
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2210,
    "end": 2211,
    "range": [
      2210,
      2211
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2211,
    "end": 2212,
    "range": [
      2211,
      2212
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2213,
    "end": 2214,
    "range": [
      2213,
      2214
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2219,
    "end": 2222,
    "range": [
      2219,
      2222
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2223,
    "end": 2224,
    "range": [
      2223,
      2224
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2224,
    "end": 2225,
    "range": [
      2224,
      2225
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2226,
    "end": 2233,
    "range": [
      2226,
      2233
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2234,
    "end": 2241,
    "range": [
      2234,
      2241
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2241,
    "end": 2242,
    "range": [
      2241,
      2242
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2242,
    "end": 2243,
    "range": [
      2242,
      2243
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2243,
    "end": 2244,
    "range": [
      2243,
      2244
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2244,
    "end": 2245,
    "range": [
      2244,
      2245
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2246,
    "end": 2247,
    "range": [
      2246,
      2247
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2247,
    "end": 2248,
    "range": [
      2247,
      2248
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2248,
    "end": 2249,
    "range": [
      2248,
      2249
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2250,
    "end": 2256,
    "range": [
      2250,
      2256
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2256,
    "end": 2257,
    "range": [
      2256,
      2257
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2257,
    "end": 2258,
    "range": [
      2257,
      2258
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2258,
    "end": 2259,
    "range": [
      2258,
      2259
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2264,
    "end": 2267,
    "range": [
      2264,
      2267
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2268,
    "end": 2269,
    "range": [
      2268,
      2269
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2269,
    "end": 2270,
    "range": [
      2269,
      2270
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2271,
    "end": 2278,
    "range": [
      2271,
      2278
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2279,
    "end": 2283,
    "range": [
      2279,
      2283
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2283,
    "end": 2284,
    "range": [
      2283,
      2284
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2284,
    "end": 2285,
    "range": [
      2284,
      2285
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2285,
    "end": 2286,
    "range": [
      2285,
      2286
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2286,
    "end": 2287,
    "range": [
      2286,
      2287
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2288,
    "end": 2289,
    "range": [
      2288,
      2289
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2289,
    "end": 2290,
    "range": [
      2289,
      2290
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2290,
    "end": 2291,
    "range": [
      2290,
      2291
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2292,
    "end": 2298,
    "range": [
      2292,
      2298
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2298,
    "end": 2299,
    "range": [
      2298,
      2299
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2299,
    "end": 2300,
    "range": [
      2299,
      2300
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2300,
    "end": 2301,
    "range": [
      2300,
      2301
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2302,
    "end": 2303,
    "range": [
      2302,
      2303
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2303,
    "end": 2304,
    "range": [
      2303,
      2304
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2304,
    "end": 2305,
    "range": [
      2304,
      2305
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2306,
    "end": 2312,
    "range": [
      2306,
      2312
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2313,
    "end": 2314,
    "range": [
      2313,
      2314
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2314,
    "end": 2315,
    "range": [
      2314,
      2315
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2316,
    "end": 2323,
    "range": [
      2316,
      2323
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2324,
    "end": 2332,
    "range": [
      2324,
      2332
    ]
  },
  {
    "type": "Identifier",
    "value": "foo16",
    "start": 2333,
    "end": 2338,
    "range": [
      2333,
      2338
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2338,
    "end": 2339,
    "range": [
      2338,
      2339
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2339,
    "end": 2340,
    "range": [
      2339,
      2340
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2340,
    "end": 2341,
    "range": [
      2340,
      2341
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2342,
    "end": 2345,
    "range": [
      2342,
      2345
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2345,
    "end": 2346,
    "range": [
      2345,
      2346
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2346,
    "end": 2347,
    "range": [
      2346,
      2347
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2348,
    "end": 2351,
    "range": [
      2348,
      2351
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2351,
    "end": 2352,
    "range": [
      2351,
      2352
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2354,
    "end": 2361,
    "range": [
      2354,
      2361
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2362,
    "end": 2370,
    "range": [
      2362,
      2370
    ]
  },
  {
    "type": "Identifier",
    "value": "foo17",
    "start": 2371,
    "end": 2376,
    "range": [
      2371,
      2376
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2376,
    "end": 2377,
    "range": [
      2376,
      2377
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2377,
    "end": 2378,
    "range": [
      2377,
      2378
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2378,
    "end": 2379,
    "range": [
      2378,
      2379
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2380,
    "end": 2381,
    "range": [
      2380,
      2381
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2386,
    "end": 2389,
    "range": [
      2386,
      2389
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2390,
    "end": 2391,
    "range": [
      2390,
      2391
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2391,
    "end": 2392,
    "range": [
      2391,
      2392
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2392,
    "end": 2393,
    "range": [
      2392,
      2393
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2394,
    "end": 2395,
    "range": [
      2394,
      2395
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2395,
    "end": 2396,
    "range": [
      2395,
      2396
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2396,
    "end": 2397,
    "range": [
      2396,
      2397
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2398,
    "end": 2404,
    "range": [
      2398,
      2404
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2404,
    "end": 2405,
    "range": [
      2404,
      2405
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2406,
    "end": 2408,
    "range": [
      2406,
      2408
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2409,
    "end": 2415,
    "range": [
      2409,
      2415
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2415,
    "end": 2416,
    "range": [
      2415,
      2416
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2416,
    "end": 2417,
    "range": [
      2416,
      2417
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2418,
    "end": 2424,
    "range": [
      2418,
      2424
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2424,
    "end": 2425,
    "range": [
      2424,
      2425
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2425,
    "end": 2426,
    "range": [
      2425,
      2426
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2426,
    "end": 2427,
    "range": [
      2426,
      2427
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2432,
    "end": 2435,
    "range": [
      2432,
      2435
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2436,
    "end": 2437,
    "range": [
      2436,
      2437
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2437,
    "end": 2438,
    "range": [
      2437,
      2438
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2438,
    "end": 2439,
    "range": [
      2438,
      2439
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2440,
    "end": 2441,
    "range": [
      2440,
      2441
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2441,
    "end": 2442,
    "range": [
      2441,
      2442
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2442,
    "end": 2443,
    "range": [
      2442,
      2443
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2444,
    "end": 2450,
    "range": [
      2444,
      2450
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2450,
    "end": 2451,
    "range": [
      2450,
      2451
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2452,
    "end": 2454,
    "range": [
      2452,
      2454
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2455,
    "end": 2461,
    "range": [
      2455,
      2461
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2461,
    "end": 2462,
    "range": [
      2461,
      2462
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2462,
    "end": 2463,
    "range": [
      2462,
      2463
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2464,
    "end": 2470,
    "range": [
      2464,
      2470
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2470,
    "end": 2471,
    "range": [
      2470,
      2471
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2471,
    "end": 2472,
    "range": [
      2471,
      2472
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2472,
    "end": 2473,
    "range": [
      2472,
      2473
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2474,
    "end": 2475,
    "range": [
      2474,
      2475
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2475,
    "end": 2476,
    "range": [
      2475,
      2476
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2476,
    "end": 2477,
    "range": [
      2476,
      2477
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2478,
    "end": 2484,
    "range": [
      2478,
      2484
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2485,
    "end": 2486,
    "range": [
      2485,
      2486
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2486,
    "end": 2487,
    "range": [
      2486,
      2487
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2488,
    "end": 2495,
    "range": [
      2488,
      2495
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2496,
    "end": 2504,
    "range": [
      2496,
      2504
    ]
  },
  {
    "type": "Identifier",
    "value": "foo17",
    "start": 2505,
    "end": 2510,
    "range": [
      2505,
      2510
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2510,
    "end": 2511,
    "range": [
      2510,
      2511
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2511,
    "end": 2512,
    "range": [
      2511,
      2512
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2512,
    "end": 2513,
    "range": [
      2512,
      2513
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2514,
    "end": 2517,
    "range": [
      2514,
      2517
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2517,
    "end": 2518,
    "range": [
      2517,
      2518
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2518,
    "end": 2519,
    "range": [
      2518,
      2519
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2520,
    "end": 2523,
    "range": [
      2520,
      2523
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2523,
    "end": 2524,
    "range": [
      2523,
      2524
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2526,
    "end": 2533,
    "range": [
      2526,
      2533
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2534,
    "end": 2542,
    "range": [
      2534,
      2542
    ]
  },
  {
    "type": "Identifier",
    "value": "foo18",
    "start": 2543,
    "end": 2548,
    "range": [
      2543,
      2548
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2548,
    "end": 2549,
    "range": [
      2548,
      2549
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2549,
    "end": 2550,
    "range": [
      2549,
      2550
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2550,
    "end": 2551,
    "range": [
      2550,
      2551
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2552,
    "end": 2553,
    "range": [
      2552,
      2553
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2558,
    "end": 2561,
    "range": [
      2558,
      2561
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2562,
    "end": 2563,
    "range": [
      2562,
      2563
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2563,
    "end": 2564,
    "range": [
      2563,
      2564
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2564,
    "end": 2565,
    "range": [
      2564,
      2565
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2566,
    "end": 2567,
    "range": [
      2566,
      2567
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2576,
    "end": 2579,
    "range": [
      2576,
      2579
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2580,
    "end": 2581,
    "range": [
      2580,
      2581
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2581,
    "end": 2582,
    "range": [
      2581,
      2582
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2582,
    "end": 2583,
    "range": [
      2582,
      2583
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2584,
    "end": 2590,
    "range": [
      2584,
      2590
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2590,
    "end": 2591,
    "range": [
      2590,
      2591
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2591,
    "end": 2592,
    "range": [
      2591,
      2592
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2593,
    "end": 2599,
    "range": [
      2593,
      2599
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2599,
    "end": 2600,
    "range": [
      2599,
      2600
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2609,
    "end": 2612,
    "range": [
      2609,
      2612
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2613,
    "end": 2614,
    "range": [
      2613,
      2614
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2614,
    "end": 2615,
    "range": [
      2614,
      2615
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2615,
    "end": 2616,
    "range": [
      2615,
      2616
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2617,
    "end": 2623,
    "range": [
      2617,
      2623
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2623,
    "end": 2624,
    "range": [
      2623,
      2624
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2624,
    "end": 2625,
    "range": [
      2624,
      2625
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2626,
    "end": 2632,
    "range": [
      2626,
      2632
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2632,
    "end": 2633,
    "range": [
      2632,
      2633
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2638,
    "end": 2639,
    "range": [
      2638,
      2639
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2639,
    "end": 2640,
    "range": [
      2639,
      2640
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2640,
    "end": 2641,
    "range": [
      2640,
      2641
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2642,
    "end": 2645,
    "range": [
      2642,
      2645
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2645,
    "end": 2646,
    "range": [
      2645,
      2646
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2646,
    "end": 2647,
    "range": [
      2646,
      2647
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2647,
    "end": 2648,
    "range": [
      2647,
      2648
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2653,
    "end": 2656,
    "range": [
      2653,
      2656
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2657,
    "end": 2658,
    "range": [
      2657,
      2658
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2658,
    "end": 2659,
    "range": [
      2658,
      2659
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2659,
    "end": 2660,
    "range": [
      2659,
      2660
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2661,
    "end": 2662,
    "range": [
      2661,
      2662
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2671,
    "end": 2674,
    "range": [
      2671,
      2674
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2675,
    "end": 2676,
    "range": [
      2675,
      2676
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2676,
    "end": 2677,
    "range": [
      2676,
      2677
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2677,
    "end": 2678,
    "range": [
      2677,
      2678
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2679,
    "end": 2686,
    "range": [
      2679,
      2686
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2686,
    "end": 2687,
    "range": [
      2686,
      2687
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2687,
    "end": 2688,
    "range": [
      2687,
      2688
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2689,
    "end": 2696,
    "range": [
      2689,
      2696
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2696,
    "end": 2697,
    "range": [
      2696,
      2697
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2706,
    "end": 2709,
    "range": [
      2706,
      2709
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2710,
    "end": 2711,
    "range": [
      2710,
      2711
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2711,
    "end": 2712,
    "range": [
      2711,
      2712
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2712,
    "end": 2713,
    "range": [
      2712,
      2713
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 2714,
    "end": 2718,
    "range": [
      2714,
      2718
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2718,
    "end": 2719,
    "range": [
      2718,
      2719
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2719,
    "end": 2720,
    "range": [
      2719,
      2720
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 2721,
    "end": 2725,
    "range": [
      2721,
      2725
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2725,
    "end": 2726,
    "range": [
      2725,
      2726
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2731,
    "end": 2732,
    "range": [
      2731,
      2732
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2732,
    "end": 2733,
    "range": [
      2732,
      2733
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2733,
    "end": 2734,
    "range": [
      2733,
      2734
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2735,
    "end": 2738,
    "range": [
      2735,
      2738
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2738,
    "end": 2739,
    "range": [
      2738,
      2739
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2739,
    "end": 2740,
    "range": [
      2739,
      2740
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2740,
    "end": 2741,
    "range": [
      2740,
      2741
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2742,
    "end": 2743,
    "range": [
      2742,
      2743
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2743,
    "end": 2744,
    "range": [
      2743,
      2744
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2744,
    "end": 2745,
    "range": [
      2744,
      2745
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2746,
    "end": 2752,
    "range": [
      2746,
      2752
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2753,
    "end": 2754,
    "range": [
      2753,
      2754
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2754,
    "end": 2755,
    "range": [
      2754,
      2755
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2756,
    "end": 2763,
    "range": [
      2756,
      2763
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2764,
    "end": 2772,
    "range": [
      2764,
      2772
    ]
  },
  {
    "type": "Identifier",
    "value": "foo18",
    "start": 2773,
    "end": 2778,
    "range": [
      2773,
      2778
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2778,
    "end": 2779,
    "range": [
      2778,
      2779
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2779,
    "end": 2780,
    "range": [
      2779,
      2780
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2780,
    "end": 2781,
    "range": [
      2780,
      2781
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2782,
    "end": 2785,
    "range": [
      2782,
      2785
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2785,
    "end": 2786,
    "range": [
      2785,
      2786
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2786,
    "end": 2787,
    "range": [
      2786,
      2787
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2788,
    "end": 2791,
    "range": [
      2788,
      2791
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2791,
    "end": 2792,
    "range": [
      2791,
      2792
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2794,
    "end": 2797,
    "range": [
      2794,
      2797
    ]
  },
  {
    "type": "Identifier",
    "value": "r1arg1",
    "start": 2798,
    "end": 2804,
    "range": [
      2798,
      2804
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2804,
    "end": 2805,
    "range": [
      2804,
      2805
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2806,
    "end": 2809,
    "range": [
      2806,
      2809
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2810,
    "end": 2811,
    "range": [
      2810,
      2811
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2811,
    "end": 2812,
    "range": [
      2811,
      2812
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2812,
    "end": 2813,
    "range": [
      2812,
      2813
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2813,
    "end": 2814,
    "range": [
      2813,
      2814
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2814,
    "end": 2815,
    "range": [
      2814,
      2815
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2815,
    "end": 2816,
    "range": [
      2815,
      2816
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2817,
    "end": 2818,
    "range": [
      2817,
      2818
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2818,
    "end": 2819,
    "range": [
      2818,
      2819
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2820,
    "end": 2822,
    "range": [
      2820,
      2822
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2823,
    "end": 2824,
    "range": [
      2823,
      2824
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2824,
    "end": 2825,
    "range": [
      2824,
      2825
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2825,
    "end": 2826,
    "range": [
      2825,
      2826
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2826,
    "end": 2827,
    "range": [
      2826,
      2827
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2828,
    "end": 2831,
    "range": [
      2828,
      2831
    ]
  },
  {
    "type": "Identifier",
    "value": "r1arg2",
    "start": 2832,
    "end": 2838,
    "range": [
      2832,
      2838
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2838,
    "end": 2839,
    "range": [
      2838,
      2839
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2840,
    "end": 2843,
    "range": [
      2840,
      2843
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2844,
    "end": 2845,
    "range": [
      2844,
      2845
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2845,
    "end": 2846,
    "range": [
      2845,
      2846
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2846,
    "end": 2847,
    "range": [
      2846,
      2847
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2848,
    "end": 2854,
    "range": [
      2848,
      2854
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2854,
    "end": 2855,
    "range": [
      2854,
      2855
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2856,
    "end": 2858,
    "range": [
      2856,
      2858
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2859,
    "end": 2865,
    "range": [
      2859,
      2865
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2865,
    "end": 2866,
    "range": [
      2865,
      2866
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2866,
    "end": 2867,
    "range": [
      2866,
      2867
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2867,
    "end": 2868,
    "range": [
      2867,
      2868
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2869,
    "end": 2872,
    "range": [
      2869,
      2872
    ]
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 2873,
    "end": 2875,
    "range": [
      2873,
      2875
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2876,
    "end": 2877,
    "range": [
      2876,
      2877
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 2878,
    "end": 2882,
    "range": [
      2878,
      2882
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2882,
    "end": 2883,
    "range": [
      2882,
      2883
    ]
  },
  {
    "type": "Identifier",
    "value": "r1arg1",
    "start": 2883,
    "end": 2889,
    "range": [
      2883,
      2889
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2889,
    "end": 2890,
    "range": [
      2889,
      2890
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2890,
    "end": 2891,
    "range": [
      2890,
      2891
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2947,
    "end": 2950,
    "range": [
      2947,
      2950
    ]
  },
  {
    "type": "Identifier",
    "value": "r1a",
    "start": 2951,
    "end": 2954,
    "range": [
      2951,
      2954
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2955,
    "end": 2956,
    "range": [
      2955,
      2956
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2957,
    "end": 2958,
    "range": [
      2957,
      2958
    ]
  },
  {
    "type": "Identifier",
    "value": "r1arg2",
    "start": 2958,
    "end": 2964,
    "range": [
      2958,
      2964
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2964,
    "end": 2965,
    "range": [
      2964,
      2965
    ]
  },
  {
    "type": "Identifier",
    "value": "r1arg1",
    "start": 2966,
    "end": 2972,
    "range": [
      2966,
      2972
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2972,
    "end": 2973,
    "range": [
      2972,
      2973
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2973,
    "end": 2974,
    "range": [
      2973,
      2974
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3024,
    "end": 3027,
    "range": [
      3024,
      3027
    ]
  },
  {
    "type": "Identifier",
    "value": "r1b",
    "start": 3028,
    "end": 3031,
    "range": [
      3028,
      3031
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3032,
    "end": 3033,
    "range": [
      3032,
      3033
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3034,
    "end": 3035,
    "range": [
      3034,
      3035
    ]
  },
  {
    "type": "Identifier",
    "value": "r1arg1",
    "start": 3035,
    "end": 3041,
    "range": [
      3035,
      3041
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3041,
    "end": 3042,
    "range": [
      3041,
      3042
    ]
  },
  {
    "type": "Identifier",
    "value": "r1arg2",
    "start": 3043,
    "end": 3049,
    "range": [
      3043,
      3049
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3049,
    "end": 3050,
    "range": [
      3049,
      3050
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3050,
    "end": 3051,
    "range": [
      3050,
      3051
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3102,
    "end": 3105,
    "range": [
      3102,
      3105
    ]
  },
  {
    "type": "Identifier",
    "value": "r2arg1",
    "start": 3106,
    "end": 3112,
    "range": [
      3106,
      3112
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3112,
    "end": 3113,
    "range": [
      3112,
      3113
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3114,
    "end": 3117,
    "range": [
      3114,
      3117
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3118,
    "end": 3119,
    "range": [
      3118,
      3119
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3119,
    "end": 3120,
    "range": [
      3119,
      3120
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3120,
    "end": 3121,
    "range": [
      3120,
      3121
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3121,
    "end": 3122,
    "range": [
      3121,
      3122
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3122,
    "end": 3123,
    "range": [
      3122,
      3123
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3123,
    "end": 3124,
    "range": [
      3123,
      3124
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3125,
    "end": 3126,
    "range": [
      3125,
      3126
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3126,
    "end": 3127,
    "range": [
      3126,
      3127
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3128,
    "end": 3130,
    "range": [
      3128,
      3130
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3131,
    "end": 3137,
    "range": [
      3131,
      3137
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3137,
    "end": 3138,
    "range": [
      3137,
      3138
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3138,
    "end": 3139,
    "range": [
      3138,
      3139
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3139,
    "end": 3140,
    "range": [
      3139,
      3140
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3141,
    "end": 3144,
    "range": [
      3141,
      3144
    ]
  },
  {
    "type": "Identifier",
    "value": "r2arg2",
    "start": 3145,
    "end": 3151,
    "range": [
      3145,
      3151
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3151,
    "end": 3152,
    "range": [
      3151,
      3152
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3153,
    "end": 3156,
    "range": [
      3153,
      3156
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3157,
    "end": 3158,
    "range": [
      3157,
      3158
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3158,
    "end": 3159,
    "range": [
      3158,
      3159
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3159,
    "end": 3160,
    "range": [
      3159,
      3160
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3161,
    "end": 3167,
    "range": [
      3161,
      3167
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3167,
    "end": 3168,
    "range": [
      3167,
      3168
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3169,
    "end": 3171,
    "range": [
      3169,
      3171
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3172,
    "end": 3178,
    "range": [
      3172,
      3178
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3178,
    "end": 3179,
    "range": [
      3178,
      3179
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3179,
    "end": 3180,
    "range": [
      3179,
      3180
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3180,
    "end": 3181,
    "range": [
      3180,
      3181
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3182,
    "end": 3185,
    "range": [
      3182,
      3185
    ]
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 3186,
    "end": 3188,
    "range": [
      3186,
      3188
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3189,
    "end": 3190,
    "range": [
      3189,
      3190
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 3191,
    "end": 3195,
    "range": [
      3191,
      3195
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3195,
    "end": 3196,
    "range": [
      3195,
      3196
    ]
  },
  {
    "type": "Identifier",
    "value": "r2arg1",
    "start": 3196,
    "end": 3202,
    "range": [
      3196,
      3202
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3202,
    "end": 3203,
    "range": [
      3202,
      3203
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3203,
    "end": 3204,
    "range": [
      3203,
      3204
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3205,
    "end": 3208,
    "range": [
      3205,
      3208
    ]
  },
  {
    "type": "Identifier",
    "value": "r2a",
    "start": 3209,
    "end": 3212,
    "range": [
      3209,
      3212
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3213,
    "end": 3214,
    "range": [
      3213,
      3214
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3215,
    "end": 3216,
    "range": [
      3215,
      3216
    ]
  },
  {
    "type": "Identifier",
    "value": "r2arg1",
    "start": 3216,
    "end": 3222,
    "range": [
      3216,
      3222
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3222,
    "end": 3223,
    "range": [
      3222,
      3223
    ]
  },
  {
    "type": "Identifier",
    "value": "r2arg2",
    "start": 3224,
    "end": 3230,
    "range": [
      3224,
      3230
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3230,
    "end": 3231,
    "range": [
      3230,
      3231
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3231,
    "end": 3232,
    "range": [
      3231,
      3232
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3233,
    "end": 3236,
    "range": [
      3233,
      3236
    ]
  },
  {
    "type": "Identifier",
    "value": "r2b",
    "start": 3237,
    "end": 3240,
    "range": [
      3237,
      3240
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3241,
    "end": 3242,
    "range": [
      3241,
      3242
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3243,
    "end": 3244,
    "range": [
      3243,
      3244
    ]
  },
  {
    "type": "Identifier",
    "value": "r2arg2",
    "start": 3244,
    "end": 3250,
    "range": [
      3244,
      3250
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3250,
    "end": 3251,
    "range": [
      3250,
      3251
    ]
  },
  {
    "type": "Identifier",
    "value": "r2arg1",
    "start": 3252,
    "end": 3258,
    "range": [
      3252,
      3258
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3258,
    "end": 3259,
    "range": [
      3258,
      3259
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3259,
    "end": 3260,
    "range": [
      3259,
      3260
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3262,
    "end": 3265,
    "range": [
      3262,
      3265
    ]
  },
  {
    "type": "Identifier",
    "value": "r3arg1",
    "start": 3266,
    "end": 3272,
    "range": [
      3266,
      3272
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3272,
    "end": 3273,
    "range": [
      3272,
      3273
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3274,
    "end": 3277,
    "range": [
      3274,
      3277
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3278,
    "end": 3279,
    "range": [
      3278,
      3279
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3279,
    "end": 3280,
    "range": [
      3279,
      3280
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3280,
    "end": 3281,
    "range": [
      3280,
      3281
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3281,
    "end": 3282,
    "range": [
      3281,
      3282
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3282,
    "end": 3283,
    "range": [
      3282,
      3283
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3283,
    "end": 3284,
    "range": [
      3283,
      3284
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3285,
    "end": 3286,
    "range": [
      3285,
      3286
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3286,
    "end": 3287,
    "range": [
      3286,
      3287
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3288,
    "end": 3290,
    "range": [
      3288,
      3290
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3291,
    "end": 3292,
    "range": [
      3291,
      3292
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3292,
    "end": 3293,
    "range": [
      3292,
      3293
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3294,
    "end": 3297,
    "range": [
      3294,
      3297
    ]
  },
  {
    "type": "Identifier",
    "value": "r3arg2",
    "start": 3298,
    "end": 3304,
    "range": [
      3298,
      3304
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3304,
    "end": 3305,
    "range": [
      3304,
      3305
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3306,
    "end": 3309,
    "range": [
      3306,
      3309
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3310,
    "end": 3311,
    "range": [
      3310,
      3311
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3311,
    "end": 3312,
    "range": [
      3311,
      3312
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3312,
    "end": 3313,
    "range": [
      3312,
      3313
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3314,
    "end": 3320,
    "range": [
      3314,
      3320
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3320,
    "end": 3321,
    "range": [
      3320,
      3321
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3322,
    "end": 3324,
    "range": [
      3322,
      3324
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3325,
    "end": 3329,
    "range": [
      3325,
      3329
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3329,
    "end": 3330,
    "range": [
      3329,
      3330
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3331,
    "end": 3334,
    "range": [
      3331,
      3334
    ]
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 3335,
    "end": 3337,
    "range": [
      3335,
      3337
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3338,
    "end": 3339,
    "range": [
      3338,
      3339
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 3340,
    "end": 3344,
    "range": [
      3340,
      3344
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3344,
    "end": 3345,
    "range": [
      3344,
      3345
    ]
  },
  {
    "type": "Identifier",
    "value": "r3arg1",
    "start": 3345,
    "end": 3351,
    "range": [
      3345,
      3351
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3351,
    "end": 3352,
    "range": [
      3351,
      3352
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3352,
    "end": 3353,
    "range": [
      3352,
      3353
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3354,
    "end": 3357,
    "range": [
      3354,
      3357
    ]
  },
  {
    "type": "Identifier",
    "value": "r3a",
    "start": 3358,
    "end": 3361,
    "range": [
      3358,
      3361
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3362,
    "end": 3363,
    "range": [
      3362,
      3363
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3364,
    "end": 3365,
    "range": [
      3364,
      3365
    ]
  },
  {
    "type": "Identifier",
    "value": "r3arg1",
    "start": 3365,
    "end": 3371,
    "range": [
      3365,
      3371
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3371,
    "end": 3372,
    "range": [
      3371,
      3372
    ]
  },
  {
    "type": "Identifier",
    "value": "r3arg2",
    "start": 3373,
    "end": 3379,
    "range": [
      3373,
      3379
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3379,
    "end": 3380,
    "range": [
      3379,
      3380
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3380,
    "end": 3381,
    "range": [
      3380,
      3381
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3382,
    "end": 3385,
    "range": [
      3382,
      3385
    ]
  },
  {
    "type": "Identifier",
    "value": "r3b",
    "start": 3386,
    "end": 3389,
    "range": [
      3386,
      3389
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3390,
    "end": 3391,
    "range": [
      3390,
      3391
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3392,
    "end": 3393,
    "range": [
      3392,
      3393
    ]
  },
  {
    "type": "Identifier",
    "value": "r3arg2",
    "start": 3393,
    "end": 3399,
    "range": [
      3393,
      3399
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3399,
    "end": 3400,
    "range": [
      3399,
      3400
    ]
  },
  {
    "type": "Identifier",
    "value": "r3arg1",
    "start": 3401,
    "end": 3407,
    "range": [
      3401,
      3407
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3407,
    "end": 3408,
    "range": [
      3407,
      3408
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3408,
    "end": 3409,
    "range": [
      3408,
      3409
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3411,
    "end": 3414,
    "range": [
      3411,
      3414
    ]
  },
  {
    "type": "Identifier",
    "value": "r4arg1",
    "start": 3415,
    "end": 3421,
    "range": [
      3415,
      3421
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3421,
    "end": 3422,
    "range": [
      3421,
      3422
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3423,
    "end": 3426,
    "range": [
      3423,
      3426
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3427,
    "end": 3428,
    "range": [
      3427,
      3428
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3428,
    "end": 3429,
    "range": [
      3428,
      3429
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3429,
    "end": 3430,
    "range": [
      3429,
      3430
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3431,
    "end": 3432,
    "range": [
      3431,
      3432
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3432,
    "end": 3433,
    "range": [
      3432,
      3433
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3433,
    "end": 3434,
    "range": [
      3433,
      3434
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3434,
    "end": 3435,
    "range": [
      3434,
      3435
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3435,
    "end": 3436,
    "range": [
      3435,
      3436
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3437,
    "end": 3438,
    "range": [
      3437,
      3438
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3438,
    "end": 3439,
    "range": [
      3438,
      3439
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3440,
    "end": 3441,
    "range": [
      3440,
      3441
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3441,
    "end": 3442,
    "range": [
      3441,
      3442
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3443,
    "end": 3444,
    "range": [
      3443,
      3444
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3444,
    "end": 3445,
    "range": [
      3444,
      3445
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3446,
    "end": 3448,
    "range": [
      3446,
      3448
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3449,
    "end": 3450,
    "range": [
      3449,
      3450
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3450,
    "end": 3451,
    "range": [
      3450,
      3451
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3452,
    "end": 3455,
    "range": [
      3452,
      3455
    ]
  },
  {
    "type": "Identifier",
    "value": "r4arg2",
    "start": 3456,
    "end": 3462,
    "range": [
      3456,
      3462
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3462,
    "end": 3463,
    "range": [
      3462,
      3463
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3464,
    "end": 3467,
    "range": [
      3464,
      3467
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3468,
    "end": 3469,
    "range": [
      3468,
      3469
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3469,
    "end": 3470,
    "range": [
      3469,
      3470
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3470,
    "end": 3471,
    "range": [
      3470,
      3471
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3472,
    "end": 3478,
    "range": [
      3472,
      3478
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3478,
    "end": 3479,
    "range": [
      3478,
      3479
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3480,
    "end": 3481,
    "range": [
      3480,
      3481
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3481,
    "end": 3482,
    "range": [
      3481,
      3482
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3483,
    "end": 3489,
    "range": [
      3483,
      3489
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3489,
    "end": 3490,
    "range": [
      3489,
      3490
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3491,
    "end": 3493,
    "range": [
      3491,
      3493
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3494,
    "end": 3500,
    "range": [
      3494,
      3500
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3500,
    "end": 3501,
    "range": [
      3500,
      3501
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3502,
    "end": 3505,
    "range": [
      3502,
      3505
    ]
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 3506,
    "end": 3508,
    "range": [
      3506,
      3508
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3509,
    "end": 3510,
    "range": [
      3509,
      3510
    ]
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 3511,
    "end": 3515,
    "range": [
      3511,
      3515
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3515,
    "end": 3516,
    "range": [
      3515,
      3516
    ]
  },
  {
    "type": "Identifier",
    "value": "r4arg1",
    "start": 3516,
    "end": 3522,
    "range": [
      3516,
      3522
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3522,
    "end": 3523,
    "range": [
      3522,
      3523
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3523,
    "end": 3524,
    "range": [
      3523,
      3524
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3532,
    "end": 3535,
    "range": [
      3532,
      3535
    ]
  },
  {
    "type": "Identifier",
    "value": "r4a",
    "start": 3536,
    "end": 3539,
    "range": [
      3536,
      3539
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3540,
    "end": 3541,
    "range": [
      3540,
      3541
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3542,
    "end": 3543,
    "range": [
      3542,
      3543
    ]
  },
  {
    "type": "Identifier",
    "value": "r4arg1",
    "start": 3543,
    "end": 3549,
    "range": [
      3543,
      3549
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3549,
    "end": 3550,
    "range": [
      3549,
      3550
    ]
  },
  {
    "type": "Identifier",
    "value": "r4arg2",
    "start": 3551,
    "end": 3557,
    "range": [
      3551,
      3557
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3557,
    "end": 3558,
    "range": [
      3557,
      3558
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3558,
    "end": 3559,
    "range": [
      3558,
      3559
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3560,
    "end": 3563,
    "range": [
      3560,
      3563
    ]
  },
  {
    "type": "Identifier",
    "value": "r4b",
    "start": 3564,
    "end": 3567,
    "range": [
      3564,
      3567
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3568,
    "end": 3569,
    "range": [
      3568,
      3569
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3570,
    "end": 3571,
    "range": [
      3570,
      3571
    ]
  },
  {
    "type": "Identifier",
    "value": "r4arg2",
    "start": 3571,
    "end": 3577,
    "range": [
      3571,
      3577
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3577,
    "end": 3578,
    "range": [
      3577,
      3578
    ]
  },
  {
    "type": "Identifier",
    "value": "r4arg1",
    "start": 3579,
    "end": 3585,
    "range": [
      3579,
      3585
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3585,
    "end": 3586,
    "range": [
      3585,
      3586
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3586,
    "end": 3587,
    "range": [
      3586,
      3587
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3589,
    "end": 3592,
    "range": [
      3589,
      3592
    ]
  },
  {
    "type": "Identifier",
    "value": "r5arg1",
    "start": 3593,
    "end": 3599,
    "range": [
      3593,
      3599
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3599,
    "end": 3600,
    "range": [
      3599,
      3600
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3601,
    "end": 3604,
    "range": [
      3601,
      3604
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3605,
    "end": 3606,
    "range": [
      3605,
      3606
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3606,
    "end": 3607,
    "range": [
      3606,
      3607
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3607,
    "end": 3608,
    "range": [
      3607,
      3608
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3609,
    "end": 3610,
    "range": [
      3609,
      3610
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3610,
    "end": 3611,
    "range": [
      3610,
      3611
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3611,
    "end": 3612,
    "range": [
      3611,
      3612
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3612,
    "end": 3613,
    "range": [
      3612,
      3613
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3613,
    "end": 3614,
    "range": [
      3613,
      3614
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3615,
    "end": 3618,
    "range": [
      3615,
      3618
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3619,
    "end": 3620,
    "range": [
      3619,
      3620
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 3620,
    "end": 3623,
    "range": [
      3620,
      3623
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3623,
    "end": 3624,
    "range": [
      3623,
      3624
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3625,
    "end": 3626,
    "range": [
      3625,
      3626
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3626,
    "end": 3627,
    "range": [
      3626,
      3627
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3628,
    "end": 3630,
    "range": [
      3628,
      3630
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3631,
    "end": 3632,
    "range": [
      3631,
      3632
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3632,
    "end": 3633,
    "range": [
      3632,
      3633
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3634,
    "end": 3636,
    "range": [
      3634,
      3636
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3637,
    "end": 3638,
    "range": [
      3637,
      3638
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3638,
    "end": 3639,
    "range": [
      3638,
      3639
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3640,
    "end": 3643,
    "range": [
      3640,
      3643
    ]
  },
  {
    "type": "Identifier",
    "value": "r5arg2",
    "start": 3644,
    "end": 3650,
    "range": [
      3644,
      3650
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3650,
    "end": 3651,
    "range": [
      3650,
      3651
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3652,
    "end": 3655,
    "range": [
      3652,
      3655
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3656,
    "end": 3657,
    "range": [
      3656,
      3657
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3657,
    "end": 3658,
    "range": [
      3657,
      3658
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3658,
    "end": 3659,
    "range": [
      3658,
      3659
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3660,
    "end": 3663,
    "range": [
      3660,
      3663
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3664,
    "end": 3665,
    "range": [
      3664,
      3665
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 3665,
    "end": 3668,
    "range": [
      3665,
      3668
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3668,
    "end": 3669,
    "range": [
      3668,
      3669
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3670,
    "end": 3676,
    "range": [
      3670,
      3676
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3676,
    "end": 3677,
    "range": [
      3676,
      3677
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3678,
    "end": 3680,
    "range": [
      3678,
      3680
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3681,
    "end": 3687,
    "range": [
      3681,
      3687
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3687,
    "end": 3688,
    "range": [
      3687,
      3688
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3689,
    "end": 3691,
    "range": [
      3689,
      3691
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3692,
    "end": 3698,
    "range": [
      3692,
      3698
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3698,
    "end": 3699,
    "range": [
      3698,
      3699
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3700,
    "end": 3703,
    "range": [
      3700,
      3703
    ]
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 3704,
    "end": 3706,
    "range": [
      3704,
      3706
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3707,
    "end": 3708,
    "range": [
      3707,
      3708
    ]
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 3709,
    "end": 3713,
    "range": [
      3709,
      3713
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3713,
    "end": 3714,
    "range": [
      3713,
      3714
    ]
  },
  {
    "type": "Identifier",
    "value": "r5arg1",
    "start": 3714,
    "end": 3720,
    "range": [
      3714,
      3720
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3720,
    "end": 3721,
    "range": [
      3720,
      3721
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3721,
    "end": 3722,
    "range": [
      3721,
      3722
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3730,
    "end": 3733,
    "range": [
      3730,
      3733
    ]
  },
  {
    "type": "Identifier",
    "value": "r5a",
    "start": 3734,
    "end": 3737,
    "range": [
      3734,
      3737
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3738,
    "end": 3739,
    "range": [
      3738,
      3739
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3740,
    "end": 3741,
    "range": [
      3740,
      3741
    ]
  },
  {
    "type": "Identifier",
    "value": "r5arg1",
    "start": 3741,
    "end": 3747,
    "range": [
      3741,
      3747
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3747,
    "end": 3748,
    "range": [
      3747,
      3748
    ]
  },
  {
    "type": "Identifier",
    "value": "r5arg2",
    "start": 3749,
    "end": 3755,
    "range": [
      3749,
      3755
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3755,
    "end": 3756,
    "range": [
      3755,
      3756
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3756,
    "end": 3757,
    "range": [
      3756,
      3757
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3758,
    "end": 3761,
    "range": [
      3758,
      3761
    ]
  },
  {
    "type": "Identifier",
    "value": "r5b",
    "start": 3762,
    "end": 3765,
    "range": [
      3762,
      3765
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3766,
    "end": 3767,
    "range": [
      3766,
      3767
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3768,
    "end": 3769,
    "range": [
      3768,
      3769
    ]
  },
  {
    "type": "Identifier",
    "value": "r5arg2",
    "start": 3769,
    "end": 3775,
    "range": [
      3769,
      3775
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3775,
    "end": 3776,
    "range": [
      3775,
      3776
    ]
  },
  {
    "type": "Identifier",
    "value": "r5arg1",
    "start": 3777,
    "end": 3783,
    "range": [
      3777,
      3783
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3783,
    "end": 3784,
    "range": [
      3783,
      3784
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3784,
    "end": 3785,
    "range": [
      3784,
      3785
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3787,
    "end": 3790,
    "range": [
      3787,
      3790
    ]
  },
  {
    "type": "Identifier",
    "value": "r6arg1",
    "start": 3791,
    "end": 3797,
    "range": [
      3791,
      3797
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3797,
    "end": 3798,
    "range": [
      3797,
      3798
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3799,
    "end": 3802,
    "range": [
      3799,
      3802
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3803,
    "end": 3804,
    "range": [
      3803,
      3804
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3804,
    "end": 3805,
    "range": [
      3804,
      3805
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3806,
    "end": 3813,
    "range": [
      3806,
      3813
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 3814,
    "end": 3818,
    "range": [
      3814,
      3818
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3818,
    "end": 3819,
    "range": [
      3818,
      3819
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3820,
    "end": 3821,
    "range": [
      3820,
      3821
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3822,
    "end": 3829,
    "range": [
      3822,
      3829
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 3830,
    "end": 3837,
    "range": [
      3830,
      3837
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3837,
    "end": 3838,
    "range": [
      3837,
      3838
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3838,
    "end": 3839,
    "range": [
      3838,
      3839
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3839,
    "end": 3840,
    "range": [
      3839,
      3840
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3840,
    "end": 3841,
    "range": [
      3840,
      3841
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3842,
    "end": 3845,
    "range": [
      3842,
      3845
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3846,
    "end": 3847,
    "range": [
      3846,
      3847
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 3847,
    "end": 3850,
    "range": [
      3847,
      3850
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3850,
    "end": 3851,
    "range": [
      3850,
      3851
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3852,
    "end": 3853,
    "range": [
      3852,
      3853
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3853,
    "end": 3854,
    "range": [
      3853,
      3854
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3855,
    "end": 3857,
    "range": [
      3855,
      3857
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3858,
    "end": 3859,
    "range": [
      3858,
      3859
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3859,
    "end": 3860,
    "range": [
      3859,
      3860
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3861,
    "end": 3863,
    "range": [
      3861,
      3863
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3864,
    "end": 3865,
    "range": [
      3864,
      3865
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3865,
    "end": 3866,
    "range": [
      3865,
      3866
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3867,
    "end": 3870,
    "range": [
      3867,
      3870
    ]
  },
  {
    "type": "Identifier",
    "value": "r6arg2",
    "start": 3871,
    "end": 3877,
    "range": [
      3871,
      3877
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3877,
    "end": 3878,
    "range": [
      3877,
      3878
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3879,
    "end": 3882,
    "range": [
      3879,
      3882
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3883,
    "end": 3884,
    "range": [
      3883,
      3884
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3884,
    "end": 3885,
    "range": [
      3884,
      3885
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3885,
    "end": 3886,
    "range": [
      3885,
      3886
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3887,
    "end": 3890,
    "range": [
      3887,
      3890
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3891,
    "end": 3892,
    "range": [
      3891,
      3892
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 3892,
    "end": 3895,
    "range": [
      3892,
      3895
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3895,
    "end": 3896,
    "range": [
      3895,
      3896
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 3897,
    "end": 3901,
    "range": [
      3897,
      3901
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3901,
    "end": 3902,
    "range": [
      3901,
      3902
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3903,
    "end": 3905,
    "range": [
      3903,
      3905
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 3906,
    "end": 3913,
    "range": [
      3906,
      3913
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3913,
    "end": 3914,
    "range": [
      3913,
      3914
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3915,
    "end": 3917,
    "range": [
      3915,
      3917
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 3918,
    "end": 3922,
    "range": [
      3918,
      3922
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3922,
    "end": 3923,
    "range": [
      3922,
      3923
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3924,
    "end": 3927,
    "range": [
      3924,
      3927
    ]
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 3928,
    "end": 3930,
    "range": [
      3928,
      3930
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3931,
    "end": 3932,
    "range": [
      3931,
      3932
    ]
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 3933,
    "end": 3937,
    "range": [
      3933,
      3937
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3937,
    "end": 3938,
    "range": [
      3937,
      3938
    ]
  },
  {
    "type": "Identifier",
    "value": "r6arg1",
    "start": 3938,
    "end": 3944,
    "range": [
      3938,
      3944
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3944,
    "end": 3945,
    "range": [
      3944,
      3945
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3945,
    "end": 3946,
    "range": [
      3945,
      3946
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3954,
    "end": 3957,
    "range": [
      3954,
      3957
    ]
  },
  {
    "type": "Identifier",
    "value": "r6a",
    "start": 3958,
    "end": 3961,
    "range": [
      3958,
      3961
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3962,
    "end": 3963,
    "range": [
      3962,
      3963
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3964,
    "end": 3965,
    "range": [
      3964,
      3965
    ]
  },
  {
    "type": "Identifier",
    "value": "r6arg1",
    "start": 3965,
    "end": 3971,
    "range": [
      3965,
      3971
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3971,
    "end": 3972,
    "range": [
      3971,
      3972
    ]
  },
  {
    "type": "Identifier",
    "value": "r6arg2",
    "start": 3973,
    "end": 3979,
    "range": [
      3973,
      3979
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3979,
    "end": 3980,
    "range": [
      3979,
      3980
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3980,
    "end": 3981,
    "range": [
      3980,
      3981
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3982,
    "end": 3985,
    "range": [
      3982,
      3985
    ]
  },
  {
    "type": "Identifier",
    "value": "r6b",
    "start": 3986,
    "end": 3989,
    "range": [
      3986,
      3989
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3990,
    "end": 3991,
    "range": [
      3990,
      3991
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3992,
    "end": 3993,
    "range": [
      3992,
      3993
    ]
  },
  {
    "type": "Identifier",
    "value": "r6arg2",
    "start": 3993,
    "end": 3999,
    "range": [
      3993,
      3999
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3999,
    "end": 4000,
    "range": [
      3999,
      4000
    ]
  },
  {
    "type": "Identifier",
    "value": "r6arg1",
    "start": 4001,
    "end": 4007,
    "range": [
      4001,
      4007
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4007,
    "end": 4008,
    "range": [
      4007,
      4008
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4008,
    "end": 4009,
    "range": [
      4008,
      4009
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4011,
    "end": 4014,
    "range": [
      4011,
      4014
    ]
  },
  {
    "type": "Identifier",
    "value": "r7arg1",
    "start": 4015,
    "end": 4021,
    "range": [
      4015,
      4021
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4021,
    "end": 4022,
    "range": [
      4021,
      4022
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4023,
    "end": 4026,
    "range": [
      4023,
      4026
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4027,
    "end": 4028,
    "range": [
      4027,
      4028
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4028,
    "end": 4029,
    "range": [
      4028,
      4029
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4030,
    "end": 4037,
    "range": [
      4030,
      4037
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 4038,
    "end": 4042,
    "range": [
      4038,
      4042
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4042,
    "end": 4043,
    "range": [
      4042,
      4043
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4044,
    "end": 4045,
    "range": [
      4044,
      4045
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4046,
    "end": 4053,
    "range": [
      4046,
      4053
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 4054,
    "end": 4061,
    "range": [
      4054,
      4061
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4061,
    "end": 4062,
    "range": [
      4061,
      4062
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4062,
    "end": 4063,
    "range": [
      4062,
      4063
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4063,
    "end": 4064,
    "range": [
      4063,
      4064
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4064,
    "end": 4065,
    "range": [
      4064,
      4065
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4066,
    "end": 4069,
    "range": [
      4066,
      4069
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4070,
    "end": 4071,
    "range": [
      4070,
      4071
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 4071,
    "end": 4074,
    "range": [
      4071,
      4074
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4074,
    "end": 4075,
    "range": [
      4074,
      4075
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4076,
    "end": 4077,
    "range": [
      4076,
      4077
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4077,
    "end": 4078,
    "range": [
      4077,
      4078
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4079,
    "end": 4081,
    "range": [
      4079,
      4081
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4082,
    "end": 4083,
    "range": [
      4082,
      4083
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4083,
    "end": 4084,
    "range": [
      4083,
      4084
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4085,
    "end": 4087,
    "range": [
      4085,
      4087
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4088,
    "end": 4091,
    "range": [
      4088,
      4091
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4092,
    "end": 4093,
    "range": [
      4092,
      4093
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 4093,
    "end": 4094,
    "range": [
      4093,
      4094
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4094,
    "end": 4095,
    "range": [
      4094,
      4095
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4096,
    "end": 4097,
    "range": [
      4096,
      4097
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4097,
    "end": 4098,
    "range": [
      4097,
      4098
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4099,
    "end": 4101,
    "range": [
      4099,
      4101
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4102,
    "end": 4103,
    "range": [
      4102,
      4103
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4103,
    "end": 4104,
    "range": [
      4103,
      4104
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4105,
    "end": 4108,
    "range": [
      4105,
      4108
    ]
  },
  {
    "type": "Identifier",
    "value": "r7arg2",
    "start": 4109,
    "end": 4115,
    "range": [
      4109,
      4115
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4115,
    "end": 4116,
    "range": [
      4115,
      4116
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4117,
    "end": 4120,
    "range": [
      4117,
      4120
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4121,
    "end": 4122,
    "range": [
      4121,
      4122
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4122,
    "end": 4123,
    "range": [
      4122,
      4123
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4123,
    "end": 4124,
    "range": [
      4123,
      4124
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4125,
    "end": 4128,
    "range": [
      4125,
      4128
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4129,
    "end": 4130,
    "range": [
      4129,
      4130
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 4130,
    "end": 4133,
    "range": [
      4130,
      4133
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4133,
    "end": 4134,
    "range": [
      4133,
      4134
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 4135,
    "end": 4139,
    "range": [
      4135,
      4139
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4139,
    "end": 4140,
    "range": [
      4139,
      4140
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4141,
    "end": 4143,
    "range": [
      4141,
      4143
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 4144,
    "end": 4151,
    "range": [
      4144,
      4151
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4151,
    "end": 4152,
    "range": [
      4151,
      4152
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4153,
    "end": 4155,
    "range": [
      4153,
      4155
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4156,
    "end": 4159,
    "range": [
      4156,
      4159
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4160,
    "end": 4161,
    "range": [
      4160,
      4161
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 4161,
    "end": 4162,
    "range": [
      4161,
      4162
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4162,
    "end": 4163,
    "range": [
      4162,
      4163
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 4164,
    "end": 4168,
    "range": [
      4164,
      4168
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4168,
    "end": 4169,
    "range": [
      4168,
      4169
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4170,
    "end": 4172,
    "range": [
      4170,
      4172
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 4173,
    "end": 4180,
    "range": [
      4173,
      4180
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4180,
    "end": 4181,
    "range": [
      4180,
      4181
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4182,
    "end": 4185,
    "range": [
      4182,
      4185
    ]
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 4186,
    "end": 4188,
    "range": [
      4186,
      4188
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4189,
    "end": 4190,
    "range": [
      4189,
      4190
    ]
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 4191,
    "end": 4195,
    "range": [
      4191,
      4195
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4195,
    "end": 4196,
    "range": [
      4195,
      4196
    ]
  },
  {
    "type": "Identifier",
    "value": "r7arg1",
    "start": 4196,
    "end": 4202,
    "range": [
      4196,
      4202
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4202,
    "end": 4203,
    "range": [
      4202,
      4203
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4203,
    "end": 4204,
    "range": [
      4203,
      4204
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4212,
    "end": 4215,
    "range": [
      4212,
      4215
    ]
  },
  {
    "type": "Identifier",
    "value": "r7a",
    "start": 4216,
    "end": 4219,
    "range": [
      4216,
      4219
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4220,
    "end": 4221,
    "range": [
      4220,
      4221
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4222,
    "end": 4223,
    "range": [
      4222,
      4223
    ]
  },
  {
    "type": "Identifier",
    "value": "r7arg1",
    "start": 4223,
    "end": 4229,
    "range": [
      4223,
      4229
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4229,
    "end": 4230,
    "range": [
      4229,
      4230
    ]
  },
  {
    "type": "Identifier",
    "value": "r7arg2",
    "start": 4231,
    "end": 4237,
    "range": [
      4231,
      4237
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4237,
    "end": 4238,
    "range": [
      4237,
      4238
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4238,
    "end": 4239,
    "range": [
      4238,
      4239
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4240,
    "end": 4243,
    "range": [
      4240,
      4243
    ]
  },
  {
    "type": "Identifier",
    "value": "r7b",
    "start": 4244,
    "end": 4247,
    "range": [
      4244,
      4247
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4248,
    "end": 4249,
    "range": [
      4248,
      4249
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4250,
    "end": 4251,
    "range": [
      4250,
      4251
    ]
  },
  {
    "type": "Identifier",
    "value": "r7arg2",
    "start": 4251,
    "end": 4257,
    "range": [
      4251,
      4257
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4257,
    "end": 4258,
    "range": [
      4257,
      4258
    ]
  },
  {
    "type": "Identifier",
    "value": "r7arg1",
    "start": 4259,
    "end": 4265,
    "range": [
      4259,
      4265
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4265,
    "end": 4266,
    "range": [
      4265,
      4266
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4266,
    "end": 4267,
    "range": [
      4266,
      4267
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4269,
    "end": 4272,
    "range": [
      4269,
      4272
    ]
  },
  {
    "type": "Identifier",
    "value": "r8arg1",
    "start": 4273,
    "end": 4279,
    "range": [
      4273,
      4279
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4279,
    "end": 4280,
    "range": [
      4279,
      4280
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4281,
    "end": 4284,
    "range": [
      4281,
      4284
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4285,
    "end": 4286,
    "range": [
      4285,
      4286
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4286,
    "end": 4287,
    "range": [
      4286,
      4287
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4288,
    "end": 4295,
    "range": [
      4288,
      4295
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 4296,
    "end": 4300,
    "range": [
      4296,
      4300
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4300,
    "end": 4301,
    "range": [
      4300,
      4301
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4302,
    "end": 4303,
    "range": [
      4302,
      4303
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4304,
    "end": 4311,
    "range": [
      4304,
      4311
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 4312,
    "end": 4319,
    "range": [
      4312,
      4319
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4319,
    "end": 4320,
    "range": [
      4319,
      4320
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4320,
    "end": 4321,
    "range": [
      4320,
      4321
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4321,
    "end": 4322,
    "range": [
      4321,
      4322
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4322,
    "end": 4323,
    "range": [
      4322,
      4323
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4324,
    "end": 4327,
    "range": [
      4324,
      4327
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4328,
    "end": 4329,
    "range": [
      4328,
      4329
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 4329,
    "end": 4332,
    "range": [
      4329,
      4332
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4332,
    "end": 4333,
    "range": [
      4332,
      4333
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4334,
    "end": 4335,
    "range": [
      4334,
      4335
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4335,
    "end": 4336,
    "range": [
      4335,
      4336
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4337,
    "end": 4339,
    "range": [
      4337,
      4339
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4340,
    "end": 4341,
    "range": [
      4340,
      4341
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4341,
    "end": 4342,
    "range": [
      4341,
      4342
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4343,
    "end": 4344,
    "range": [
      4343,
      4344
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4344,
    "end": 4345,
    "range": [
      4344,
      4345
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4346,
    "end": 4349,
    "range": [
      4346,
      4349
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4350,
    "end": 4351,
    "range": [
      4350,
      4351
    ]
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 4351,
    "end": 4355,
    "range": [
      4351,
      4355
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4355,
    "end": 4356,
    "range": [
      4355,
      4356
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4357,
    "end": 4358,
    "range": [
      4357,
      4358
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4358,
    "end": 4359,
    "range": [
      4358,
      4359
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4360,
    "end": 4362,
    "range": [
      4360,
      4362
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4363,
    "end": 4364,
    "range": [
      4363,
      4364
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4364,
    "end": 4365,
    "range": [
      4364,
      4365
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4366,
    "end": 4368,
    "range": [
      4366,
      4368
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4369,
    "end": 4372,
    "range": [
      4369,
      4372
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4373,
    "end": 4374,
    "range": [
      4373,
      4374
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 4374,
    "end": 4375,
    "range": [
      4374,
      4375
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4375,
    "end": 4376,
    "range": [
      4375,
      4376
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4377,
    "end": 4378,
    "range": [
      4377,
      4378
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4378,
    "end": 4379,
    "range": [
      4378,
      4379
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4380,
    "end": 4382,
    "range": [
      4380,
      4382
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4383,
    "end": 4384,
    "range": [
      4383,
      4384
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4384,
    "end": 4385,
    "range": [
      4384,
      4385
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4386,
    "end": 4389,
    "range": [
      4386,
      4389
    ]
  },
  {
    "type": "Identifier",
    "value": "r8arg2",
    "start": 4390,
    "end": 4396,
    "range": [
      4390,
      4396
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4396,
    "end": 4397,
    "range": [
      4396,
      4397
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4398,
    "end": 4401,
    "range": [
      4398,
      4401
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4402,
    "end": 4403,
    "range": [
      4402,
      4403
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4403,
    "end": 4404,
    "range": [
      4403,
      4404
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4404,
    "end": 4405,
    "range": [
      4404,
      4405
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4406,
    "end": 4409,
    "range": [
      4406,
      4409
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4410,
    "end": 4411,
    "range": [
      4410,
      4411
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 4411,
    "end": 4414,
    "range": [
      4411,
      4414
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4414,
    "end": 4415,
    "range": [
      4414,
      4415
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 4416,
    "end": 4420,
    "range": [
      4416,
      4420
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4420,
    "end": 4421,
    "range": [
      4420,
      4421
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4422,
    "end": 4424,
    "range": [
      4422,
      4424
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 4425,
    "end": 4432,
    "range": [
      4425,
      4432
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4432,
    "end": 4433,
    "range": [
      4432,
      4433
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4434,
    "end": 4435,
    "range": [
      4434,
      4435
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4435,
    "end": 4436,
    "range": [
      4435,
      4436
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4437,
    "end": 4440,
    "range": [
      4437,
      4440
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4441,
    "end": 4442,
    "range": [
      4441,
      4442
    ]
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 4442,
    "end": 4446,
    "range": [
      4442,
      4446
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4446,
    "end": 4447,
    "range": [
      4446,
      4447
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 4448,
    "end": 4452,
    "range": [
      4448,
      4452
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4452,
    "end": 4453,
    "range": [
      4452,
      4453
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4454,
    "end": 4456,
    "range": [
      4454,
      4456
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 4457,
    "end": 4464,
    "range": [
      4457,
      4464
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4464,
    "end": 4465,
    "range": [
      4464,
      4465
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4466,
    "end": 4468,
    "range": [
      4466,
      4468
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4469,
    "end": 4472,
    "range": [
      4469,
      4472
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4473,
    "end": 4474,
    "range": [
      4473,
      4474
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 4474,
    "end": 4475,
    "range": [
      4474,
      4475
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4475,
    "end": 4476,
    "range": [
      4475,
      4476
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 4477,
    "end": 4481,
    "range": [
      4477,
      4481
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4481,
    "end": 4482,
    "range": [
      4481,
      4482
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4483,
    "end": 4485,
    "range": [
      4483,
      4485
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 4486,
    "end": 4493,
    "range": [
      4486,
      4493
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4493,
    "end": 4494,
    "range": [
      4493,
      4494
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4495,
    "end": 4498,
    "range": [
      4495,
      4498
    ]
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 4499,
    "end": 4501,
    "range": [
      4499,
      4501
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4502,
    "end": 4503,
    "range": [
      4502,
      4503
    ]
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 4504,
    "end": 4508,
    "range": [
      4504,
      4508
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4508,
    "end": 4509,
    "range": [
      4508,
      4509
    ]
  },
  {
    "type": "Identifier",
    "value": "r8arg1",
    "start": 4509,
    "end": 4515,
    "range": [
      4509,
      4515
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4515,
    "end": 4516,
    "range": [
      4515,
      4516
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4516,
    "end": 4517,
    "range": [
      4516,
      4517
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4525,
    "end": 4528,
    "range": [
      4525,
      4528
    ]
  },
  {
    "type": "Identifier",
    "value": "r8a",
    "start": 4529,
    "end": 4532,
    "range": [
      4529,
      4532
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4533,
    "end": 4534,
    "range": [
      4533,
      4534
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4535,
    "end": 4536,
    "range": [
      4535,
      4536
    ]
  },
  {
    "type": "Identifier",
    "value": "r8arg1",
    "start": 4536,
    "end": 4542,
    "range": [
      4536,
      4542
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4542,
    "end": 4543,
    "range": [
      4542,
      4543
    ]
  },
  {
    "type": "Identifier",
    "value": "r8arg2",
    "start": 4544,
    "end": 4550,
    "range": [
      4544,
      4550
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4550,
    "end": 4551,
    "range": [
      4550,
      4551
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4551,
    "end": 4552,
    "range": [
      4551,
      4552
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4553,
    "end": 4556,
    "range": [
      4553,
      4556
    ]
  },
  {
    "type": "Identifier",
    "value": "r8b",
    "start": 4557,
    "end": 4560,
    "range": [
      4557,
      4560
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4561,
    "end": 4562,
    "range": [
      4561,
      4562
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4563,
    "end": 4564,
    "range": [
      4563,
      4564
    ]
  },
  {
    "type": "Identifier",
    "value": "r8arg2",
    "start": 4564,
    "end": 4570,
    "range": [
      4564,
      4570
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4570,
    "end": 4571,
    "range": [
      4570,
      4571
    ]
  },
  {
    "type": "Identifier",
    "value": "r8arg1",
    "start": 4572,
    "end": 4578,
    "range": [
      4572,
      4578
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4578,
    "end": 4579,
    "range": [
      4578,
      4579
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4579,
    "end": 4580,
    "range": [
      4579,
      4580
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4582,
    "end": 4585,
    "range": [
      4582,
      4585
    ]
  },
  {
    "type": "Identifier",
    "value": "r9arg1",
    "start": 4586,
    "end": 4592,
    "range": [
      4586,
      4592
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4592,
    "end": 4593,
    "range": [
      4592,
      4593
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4594,
    "end": 4597,
    "range": [
      4594,
      4597
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4598,
    "end": 4599,
    "range": [
      4598,
      4599
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4599,
    "end": 4600,
    "range": [
      4599,
      4600
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4601,
    "end": 4608,
    "range": [
      4601,
      4608
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 4609,
    "end": 4613,
    "range": [
      4609,
      4613
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4613,
    "end": 4614,
    "range": [
      4613,
      4614
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4615,
    "end": 4616,
    "range": [
      4615,
      4616
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4617,
    "end": 4624,
    "range": [
      4617,
      4624
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 4625,
    "end": 4632,
    "range": [
      4625,
      4632
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4632,
    "end": 4633,
    "range": [
      4632,
      4633
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4633,
    "end": 4634,
    "range": [
      4633,
      4634
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4634,
    "end": 4635,
    "range": [
      4634,
      4635
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4635,
    "end": 4636,
    "range": [
      4635,
      4636
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4637,
    "end": 4640,
    "range": [
      4637,
      4640
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4641,
    "end": 4642,
    "range": [
      4641,
      4642
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 4642,
    "end": 4645,
    "range": [
      4642,
      4645
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4645,
    "end": 4646,
    "range": [
      4645,
      4646
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4647,
    "end": 4648,
    "range": [
      4647,
      4648
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4648,
    "end": 4649,
    "range": [
      4648,
      4649
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4650,
    "end": 4652,
    "range": [
      4650,
      4652
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4653,
    "end": 4654,
    "range": [
      4653,
      4654
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4654,
    "end": 4655,
    "range": [
      4654,
      4655
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4656,
    "end": 4657,
    "range": [
      4656,
      4657
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4657,
    "end": 4658,
    "range": [
      4657,
      4658
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4659,
    "end": 4660,
    "range": [
      4659,
      4660
    ]
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 4660,
    "end": 4664,
    "range": [
      4660,
      4664
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4664,
    "end": 4665,
    "range": [
      4664,
      4665
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4666,
    "end": 4667,
    "range": [
      4666,
      4667
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4668,
    "end": 4671,
    "range": [
      4668,
      4671
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4671,
    "end": 4672,
    "range": [
      4671,
      4672
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4673,
    "end": 4679,
    "range": [
      4673,
      4679
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4679,
    "end": 4680,
    "range": [
      4679,
      4680
    ]
  },
  {
    "type": "Identifier",
    "value": "bing",
    "start": 4681,
    "end": 4685,
    "range": [
      4681,
      4685
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4685,
    "end": 4686,
    "range": [
      4685,
      4686
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4687,
    "end": 4693,
    "range": [
      4687,
      4693
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4694,
    "end": 4695,
    "range": [
      4694,
      4695
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4695,
    "end": 4696,
    "range": [
      4695,
      4696
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4697,
    "end": 4699,
    "range": [
      4697,
      4699
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4700,
    "end": 4701,
    "range": [
      4700,
      4701
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4701,
    "end": 4702,
    "range": [
      4701,
      4702
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4703,
    "end": 4705,
    "range": [
      4703,
      4705
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4706,
    "end": 4709,
    "range": [
      4706,
      4709
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4710,
    "end": 4711,
    "range": [
      4710,
      4711
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 4711,
    "end": 4712,
    "range": [
      4711,
      4712
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4712,
    "end": 4713,
    "range": [
      4712,
      4713
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4714,
    "end": 4715,
    "range": [
      4714,
      4715
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4715,
    "end": 4716,
    "range": [
      4715,
      4716
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4717,
    "end": 4719,
    "range": [
      4717,
      4719
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4720,
    "end": 4721,
    "range": [
      4720,
      4721
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4721,
    "end": 4722,
    "range": [
      4721,
      4722
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4723,
    "end": 4726,
    "range": [
      4723,
      4726
    ]
  },
  {
    "type": "Identifier",
    "value": "r9arg2",
    "start": 4727,
    "end": 4733,
    "range": [
      4727,
      4733
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4733,
    "end": 4734,
    "range": [
      4733,
      4734
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4735,
    "end": 4738,
    "range": [
      4735,
      4738
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4739,
    "end": 4740,
    "range": [
      4739,
      4740
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4740,
    "end": 4741,
    "range": [
      4740,
      4741
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4741,
    "end": 4742,
    "range": [
      4741,
      4742
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4743,
    "end": 4746,
    "range": [
      4743,
      4746
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4747,
    "end": 4748,
    "range": [
      4747,
      4748
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 4748,
    "end": 4751,
    "range": [
      4748,
      4751
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4751,
    "end": 4752,
    "range": [
      4751,
      4752
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 4753,
    "end": 4757,
    "range": [
      4753,
      4757
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4757,
    "end": 4758,
    "range": [
      4757,
      4758
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4759,
    "end": 4761,
    "range": [
      4759,
      4761
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 4762,
    "end": 4769,
    "range": [
      4762,
      4769
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4769,
    "end": 4770,
    "range": [
      4769,
      4770
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4771,
    "end": 4772,
    "range": [
      4771,
      4772
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4772,
    "end": 4773,
    "range": [
      4772,
      4773
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4774,
    "end": 4777,
    "range": [
      4774,
      4777
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4778,
    "end": 4779,
    "range": [
      4778,
      4779
    ]
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 4779,
    "end": 4783,
    "range": [
      4779,
      4783
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4783,
    "end": 4784,
    "range": [
      4783,
      4784
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 4785,
    "end": 4789,
    "range": [
      4785,
      4789
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4789,
    "end": 4790,
    "range": [
      4789,
      4790
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4791,
    "end": 4793,
    "range": [
      4791,
      4793
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 4794,
    "end": 4801,
    "range": [
      4794,
      4801
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4801,
    "end": 4802,
    "range": [
      4801,
      4802
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4803,
    "end": 4805,
    "range": [
      4803,
      4805
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4806,
    "end": 4809,
    "range": [
      4806,
      4809
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4810,
    "end": 4811,
    "range": [
      4810,
      4811
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 4811,
    "end": 4812,
    "range": [
      4811,
      4812
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4812,
    "end": 4813,
    "range": [
      4812,
      4813
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 4814,
    "end": 4818,
    "range": [
      4814,
      4818
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4818,
    "end": 4819,
    "range": [
      4818,
      4819
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4820,
    "end": 4822,
    "range": [
      4820,
      4822
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 4823,
    "end": 4830,
    "range": [
      4823,
      4830
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4830,
    "end": 4831,
    "range": [
      4830,
      4831
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4832,
    "end": 4835,
    "range": [
      4832,
      4835
    ]
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 4836,
    "end": 4838,
    "range": [
      4836,
      4838
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4839,
    "end": 4840,
    "range": [
      4839,
      4840
    ]
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 4841,
    "end": 4845,
    "range": [
      4841,
      4845
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4845,
    "end": 4846,
    "range": [
      4845,
      4846
    ]
  },
  {
    "type": "Identifier",
    "value": "r9arg1",
    "start": 4846,
    "end": 4852,
    "range": [
      4846,
      4852
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4852,
    "end": 4853,
    "range": [
      4852,
      4853
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4853,
    "end": 4854,
    "range": [
      4853,
      4854
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4862,
    "end": 4865,
    "range": [
      4862,
      4865
    ]
  },
  {
    "type": "Identifier",
    "value": "r9a",
    "start": 4866,
    "end": 4869,
    "range": [
      4866,
      4869
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4870,
    "end": 4871,
    "range": [
      4870,
      4871
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4872,
    "end": 4873,
    "range": [
      4872,
      4873
    ]
  },
  {
    "type": "Identifier",
    "value": "r9arg1",
    "start": 4873,
    "end": 4879,
    "range": [
      4873,
      4879
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4879,
    "end": 4880,
    "range": [
      4879,
      4880
    ]
  },
  {
    "type": "Identifier",
    "value": "r9arg2",
    "start": 4881,
    "end": 4887,
    "range": [
      4881,
      4887
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4887,
    "end": 4888,
    "range": [
      4887,
      4888
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4888,
    "end": 4889,
    "range": [
      4888,
      4889
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4890,
    "end": 4893,
    "range": [
      4890,
      4893
    ]
  },
  {
    "type": "Identifier",
    "value": "r9b",
    "start": 4894,
    "end": 4897,
    "range": [
      4894,
      4897
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4898,
    "end": 4899,
    "range": [
      4898,
      4899
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4900,
    "end": 4901,
    "range": [
      4900,
      4901
    ]
  },
  {
    "type": "Identifier",
    "value": "r9arg2",
    "start": 4901,
    "end": 4907,
    "range": [
      4901,
      4907
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4907,
    "end": 4908,
    "range": [
      4907,
      4908
    ]
  },
  {
    "type": "Identifier",
    "value": "r9arg1",
    "start": 4909,
    "end": 4915,
    "range": [
      4909,
      4915
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4915,
    "end": 4916,
    "range": [
      4915,
      4916
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4916,
    "end": 4917,
    "range": [
      4916,
      4917
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4919,
    "end": 4922,
    "range": [
      4919,
      4922
    ]
  },
  {
    "type": "Identifier",
    "value": "r10arg1",
    "start": 4923,
    "end": 4930,
    "range": [
      4923,
      4930
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4930,
    "end": 4931,
    "range": [
      4930,
      4931
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4932,
    "end": 4935,
    "range": [
      4932,
      4935
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4936,
    "end": 4937,
    "range": [
      4936,
      4937
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4937,
    "end": 4938,
    "range": [
      4937,
      4938
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4939,
    "end": 4946,
    "range": [
      4939,
      4946
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 4947,
    "end": 4954,
    "range": [
      4947,
      4954
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4954,
    "end": 4955,
    "range": [
      4954,
      4955
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4955,
    "end": 4956,
    "range": [
      4955,
      4956
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4956,
    "end": 4959,
    "range": [
      4956,
      4959
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4959,
    "end": 4960,
    "range": [
      4959,
      4960
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4960,
    "end": 4961,
    "range": [
      4960,
      4961
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4962,
    "end": 4963,
    "range": [
      4962,
      4963
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4963,
    "end": 4964,
    "range": [
      4963,
      4964
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4964,
    "end": 4965,
    "range": [
      4964,
      4965
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4965,
    "end": 4966,
    "range": [
      4965,
      4966
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4967,
    "end": 4969,
    "range": [
      4967,
      4969
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4970,
    "end": 4971,
    "range": [
      4970,
      4971
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4971,
    "end": 4972,
    "range": [
      4971,
      4972
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4973,
    "end": 4976,
    "range": [
      4973,
      4976
    ]
  },
  {
    "type": "Identifier",
    "value": "r10arg2",
    "start": 4977,
    "end": 4984,
    "range": [
      4977,
      4984
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4984,
    "end": 4985,
    "range": [
      4984,
      4985
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4986,
    "end": 4989,
    "range": [
      4986,
      4989
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4990,
    "end": 4991,
    "range": [
      4990,
      4991
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4991,
    "end": 4994,
    "range": [
      4991,
      4994
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4994,
    "end": 4995,
    "range": [
      4994,
      4995
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4995,
    "end": 4996,
    "range": [
      4995,
      4996
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 4997,
    "end": 5004,
    "range": [
      4997,
      5004
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5004,
    "end": 5005,
    "range": [
      5004,
      5005
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5005,
    "end": 5006,
    "range": [
      5005,
      5006
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5006,
    "end": 5007,
    "range": [
      5006,
      5007
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5008,
    "end": 5010,
    "range": [
      5008,
      5010
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 5011,
    "end": 5018,
    "range": [
      5011,
      5018
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5018,
    "end": 5019,
    "range": [
      5018,
      5019
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5020,
    "end": 5023,
    "range": [
      5020,
      5023
    ]
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 5024,
    "end": 5027,
    "range": [
      5024,
      5027
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5028,
    "end": 5029,
    "range": [
      5028,
      5029
    ]
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 5030,
    "end": 5035,
    "range": [
      5030,
      5035
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5035,
    "end": 5036,
    "range": [
      5035,
      5036
    ]
  },
  {
    "type": "Identifier",
    "value": "r10arg1",
    "start": 5036,
    "end": 5043,
    "range": [
      5036,
      5043
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5043,
    "end": 5044,
    "range": [
      5043,
      5044
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5044,
    "end": 5045,
    "range": [
      5044,
      5045
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5053,
    "end": 5056,
    "range": [
      5053,
      5056
    ]
  },
  {
    "type": "Identifier",
    "value": "r10a",
    "start": 5057,
    "end": 5061,
    "range": [
      5057,
      5061
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5062,
    "end": 5063,
    "range": [
      5062,
      5063
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5064,
    "end": 5065,
    "range": [
      5064,
      5065
    ]
  },
  {
    "type": "Identifier",
    "value": "r10arg1",
    "start": 5065,
    "end": 5072,
    "range": [
      5065,
      5072
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5072,
    "end": 5073,
    "range": [
      5072,
      5073
    ]
  },
  {
    "type": "Identifier",
    "value": "r10arg2",
    "start": 5074,
    "end": 5081,
    "range": [
      5074,
      5081
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5081,
    "end": 5082,
    "range": [
      5081,
      5082
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5082,
    "end": 5083,
    "range": [
      5082,
      5083
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5084,
    "end": 5087,
    "range": [
      5084,
      5087
    ]
  },
  {
    "type": "Identifier",
    "value": "r10b",
    "start": 5088,
    "end": 5092,
    "range": [
      5088,
      5092
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5093,
    "end": 5094,
    "range": [
      5093,
      5094
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5095,
    "end": 5096,
    "range": [
      5095,
      5096
    ]
  },
  {
    "type": "Identifier",
    "value": "r10arg2",
    "start": 5096,
    "end": 5103,
    "range": [
      5096,
      5103
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5103,
    "end": 5104,
    "range": [
      5103,
      5104
    ]
  },
  {
    "type": "Identifier",
    "value": "r10arg1",
    "start": 5105,
    "end": 5112,
    "range": [
      5105,
      5112
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5112,
    "end": 5113,
    "range": [
      5112,
      5113
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5113,
    "end": 5114,
    "range": [
      5113,
      5114
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5116,
    "end": 5119,
    "range": [
      5116,
      5119
    ]
  },
  {
    "type": "Identifier",
    "value": "r11arg1",
    "start": 5120,
    "end": 5127,
    "range": [
      5120,
      5127
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5127,
    "end": 5128,
    "range": [
      5127,
      5128
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5129,
    "end": 5132,
    "range": [
      5129,
      5132
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5133,
    "end": 5134,
    "range": [
      5133,
      5134
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5134,
    "end": 5135,
    "range": [
      5134,
      5135
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5136,
    "end": 5143,
    "range": [
      5136,
      5143
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 5144,
    "end": 5148,
    "range": [
      5144,
      5148
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5148,
    "end": 5149,
    "range": [
      5148,
      5149
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5149,
    "end": 5150,
    "range": [
      5149,
      5150
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5150,
    "end": 5151,
    "range": [
      5150,
      5151
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5151,
    "end": 5152,
    "range": [
      5151,
      5152
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5153,
    "end": 5154,
    "range": [
      5153,
      5154
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5154,
    "end": 5155,
    "range": [
      5154,
      5155
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 5156,
    "end": 5157,
    "range": [
      5156,
      5157
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5157,
    "end": 5158,
    "range": [
      5157,
      5158
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5159,
    "end": 5160,
    "range": [
      5159,
      5160
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5160,
    "end": 5161,
    "range": [
      5160,
      5161
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5162,
    "end": 5164,
    "range": [
      5162,
      5164
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5165,
    "end": 5166,
    "range": [
      5165,
      5166
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5166,
    "end": 5167,
    "range": [
      5166,
      5167
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5168,
    "end": 5171,
    "range": [
      5168,
      5171
    ]
  },
  {
    "type": "Identifier",
    "value": "r11arg2",
    "start": 5172,
    "end": 5179,
    "range": [
      5172,
      5179
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5179,
    "end": 5180,
    "range": [
      5179,
      5180
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5181,
    "end": 5184,
    "range": [
      5181,
      5184
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5185,
    "end": 5186,
    "range": [
      5185,
      5186
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5186,
    "end": 5187,
    "range": [
      5186,
      5187
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5187,
    "end": 5188,
    "range": [
      5187,
      5188
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5189,
    "end": 5190,
    "range": [
      5189,
      5190
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5191,
    "end": 5194,
    "range": [
      5191,
      5194
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5194,
    "end": 5195,
    "range": [
      5194,
      5195
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5196,
    "end": 5202,
    "range": [
      5196,
      5202
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5203,
    "end": 5204,
    "range": [
      5203,
      5204
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5204,
    "end": 5205,
    "range": [
      5204,
      5205
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 5206,
    "end": 5207,
    "range": [
      5206,
      5207
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5207,
    "end": 5208,
    "range": [
      5207,
      5208
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5209,
    "end": 5210,
    "range": [
      5209,
      5210
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5211,
    "end": 5214,
    "range": [
      5211,
      5214
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5214,
    "end": 5215,
    "range": [
      5214,
      5215
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5216,
    "end": 5222,
    "range": [
      5216,
      5222
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5222,
    "end": 5223,
    "range": [
      5222,
      5223
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 5224,
    "end": 5227,
    "range": [
      5224,
      5227
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5227,
    "end": 5228,
    "range": [
      5227,
      5228
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5229,
    "end": 5235,
    "range": [
      5229,
      5235
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5236,
    "end": 5237,
    "range": [
      5236,
      5237
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5237,
    "end": 5238,
    "range": [
      5237,
      5238
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5239,
    "end": 5241,
    "range": [
      5239,
      5241
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 5242,
    "end": 5246,
    "range": [
      5242,
      5246
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5246,
    "end": 5247,
    "range": [
      5246,
      5247
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5248,
    "end": 5251,
    "range": [
      5248,
      5251
    ]
  },
  {
    "type": "Identifier",
    "value": "r11",
    "start": 5252,
    "end": 5255,
    "range": [
      5252,
      5255
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5256,
    "end": 5257,
    "range": [
      5256,
      5257
    ]
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 5258,
    "end": 5263,
    "range": [
      5258,
      5263
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5263,
    "end": 5264,
    "range": [
      5263,
      5264
    ]
  },
  {
    "type": "Identifier",
    "value": "r11arg1",
    "start": 5264,
    "end": 5271,
    "range": [
      5264,
      5271
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5271,
    "end": 5272,
    "range": [
      5271,
      5272
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5272,
    "end": 5273,
    "range": [
      5272,
      5273
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5281,
    "end": 5284,
    "range": [
      5281,
      5284
    ]
  },
  {
    "type": "Identifier",
    "value": "r11a",
    "start": 5285,
    "end": 5289,
    "range": [
      5285,
      5289
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5290,
    "end": 5291,
    "range": [
      5290,
      5291
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5292,
    "end": 5293,
    "range": [
      5292,
      5293
    ]
  },
  {
    "type": "Identifier",
    "value": "r11arg1",
    "start": 5293,
    "end": 5300,
    "range": [
      5293,
      5300
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5300,
    "end": 5301,
    "range": [
      5300,
      5301
    ]
  },
  {
    "type": "Identifier",
    "value": "r11arg2",
    "start": 5302,
    "end": 5309,
    "range": [
      5302,
      5309
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5309,
    "end": 5310,
    "range": [
      5309,
      5310
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5310,
    "end": 5311,
    "range": [
      5310,
      5311
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5312,
    "end": 5315,
    "range": [
      5312,
      5315
    ]
  },
  {
    "type": "Identifier",
    "value": "r11b",
    "start": 5316,
    "end": 5320,
    "range": [
      5316,
      5320
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5321,
    "end": 5322,
    "range": [
      5321,
      5322
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5323,
    "end": 5324,
    "range": [
      5323,
      5324
    ]
  },
  {
    "type": "Identifier",
    "value": "r11arg2",
    "start": 5324,
    "end": 5331,
    "range": [
      5324,
      5331
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5331,
    "end": 5332,
    "range": [
      5331,
      5332
    ]
  },
  {
    "type": "Identifier",
    "value": "r11arg1",
    "start": 5333,
    "end": 5340,
    "range": [
      5333,
      5340
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5340,
    "end": 5341,
    "range": [
      5340,
      5341
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5341,
    "end": 5342,
    "range": [
      5341,
      5342
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5344,
    "end": 5347,
    "range": [
      5344,
      5347
    ]
  },
  {
    "type": "Identifier",
    "value": "r12arg1",
    "start": 5348,
    "end": 5355,
    "range": [
      5348,
      5355
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5355,
    "end": 5356,
    "range": [
      5355,
      5356
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5357,
    "end": 5360,
    "range": [
      5357,
      5360
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5361,
    "end": 5362,
    "range": [
      5361,
      5362
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5362,
    "end": 5363,
    "range": [
      5362,
      5363
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5364,
    "end": 5371,
    "range": [
      5364,
      5371
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 5372,
    "end": 5377,
    "range": [
      5372,
      5377
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5377,
    "end": 5378,
    "range": [
      5377,
      5378
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 5378,
    "end": 5382,
    "range": [
      5378,
      5382
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5382,
    "end": 5383,
    "range": [
      5382,
      5383
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5383,
    "end": 5384,
    "range": [
      5383,
      5384
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5384,
    "end": 5385,
    "range": [
      5384,
      5385
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5385,
    "end": 5386,
    "range": [
      5385,
      5386
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5386,
    "end": 5387,
    "range": [
      5386,
      5387
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 5388,
    "end": 5393,
    "range": [
      5388,
      5393
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5393,
    "end": 5394,
    "range": [
      5393,
      5394
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 5394,
    "end": 5398,
    "range": [
      5394,
      5398
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5398,
    "end": 5399,
    "range": [
      5398,
      5399
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5399,
    "end": 5400,
    "range": [
      5399,
      5400
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 5401,
    "end": 5402,
    "range": [
      5401,
      5402
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5402,
    "end": 5403,
    "range": [
      5402,
      5403
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5404,
    "end": 5405,
    "range": [
      5404,
      5405
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5405,
    "end": 5406,
    "range": [
      5405,
      5406
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5407,
    "end": 5409,
    "range": [
      5407,
      5409
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 5410,
    "end": 5415,
    "range": [
      5410,
      5415
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5415,
    "end": 5416,
    "range": [
      5415,
      5416
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 5416,
    "end": 5423,
    "range": [
      5416,
      5423
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5423,
    "end": 5424,
    "range": [
      5423,
      5424
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5424,
    "end": 5425,
    "range": [
      5424,
      5425
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5426,
    "end": 5429,
    "range": [
      5426,
      5429
    ]
  },
  {
    "type": "Identifier",
    "value": "r12arg2",
    "start": 5430,
    "end": 5437,
    "range": [
      5430,
      5437
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5437,
    "end": 5438,
    "range": [
      5437,
      5438
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5439,
    "end": 5442,
    "range": [
      5439,
      5442
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5443,
    "end": 5444,
    "range": [
      5443,
      5444
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5444,
    "end": 5445,
    "range": [
      5444,
      5445
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5445,
    "end": 5446,
    "range": [
      5445,
      5446
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 5447,
    "end": 5452,
    "range": [
      5447,
      5452
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5452,
    "end": 5453,
    "range": [
      5452,
      5453
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 5453,
    "end": 5457,
    "range": [
      5453,
      5457
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5457,
    "end": 5458,
    "range": [
      5457,
      5458
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5458,
    "end": 5459,
    "range": [
      5458,
      5459
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 5460,
    "end": 5461,
    "range": [
      5460,
      5461
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5461,
    "end": 5462,
    "range": [
      5461,
      5462
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 5463,
    "end": 5468,
    "range": [
      5463,
      5468
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5468,
    "end": 5469,
    "range": [
      5468,
      5469
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 5469,
    "end": 5477,
    "range": [
      5469,
      5477
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5477,
    "end": 5478,
    "range": [
      5477,
      5478
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5478,
    "end": 5479,
    "range": [
      5478,
      5479
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5480,
    "end": 5482,
    "range": [
      5480,
      5482
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 5483,
    "end": 5488,
    "range": [
      5483,
      5488
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5488,
    "end": 5489,
    "range": [
      5488,
      5489
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 5489,
    "end": 5496,
    "range": [
      5489,
      5496
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5496,
    "end": 5497,
    "range": [
      5496,
      5497
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5497,
    "end": 5498,
    "range": [
      5497,
      5498
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5499,
    "end": 5502,
    "range": [
      5499,
      5502
    ]
  },
  {
    "type": "Identifier",
    "value": "r12",
    "start": 5503,
    "end": 5506,
    "range": [
      5503,
      5506
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5507,
    "end": 5508,
    "range": [
      5507,
      5508
    ]
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 5509,
    "end": 5514,
    "range": [
      5509,
      5514
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5514,
    "end": 5515,
    "range": [
      5514,
      5515
    ]
  },
  {
    "type": "Identifier",
    "value": "r12arg1",
    "start": 5515,
    "end": 5522,
    "range": [
      5515,
      5522
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5522,
    "end": 5523,
    "range": [
      5522,
      5523
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5523,
    "end": 5524,
    "range": [
      5523,
      5524
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5532,
    "end": 5535,
    "range": [
      5532,
      5535
    ]
  },
  {
    "type": "Identifier",
    "value": "r12a",
    "start": 5536,
    "end": 5540,
    "range": [
      5536,
      5540
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5541,
    "end": 5542,
    "range": [
      5541,
      5542
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5543,
    "end": 5544,
    "range": [
      5543,
      5544
    ]
  },
  {
    "type": "Identifier",
    "value": "r12arg1",
    "start": 5544,
    "end": 5551,
    "range": [
      5544,
      5551
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5551,
    "end": 5552,
    "range": [
      5551,
      5552
    ]
  },
  {
    "type": "Identifier",
    "value": "r12arg2",
    "start": 5553,
    "end": 5560,
    "range": [
      5553,
      5560
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5560,
    "end": 5561,
    "range": [
      5560,
      5561
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5561,
    "end": 5562,
    "range": [
      5561,
      5562
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5563,
    "end": 5566,
    "range": [
      5563,
      5566
    ]
  },
  {
    "type": "Identifier",
    "value": "r12b",
    "start": 5567,
    "end": 5571,
    "range": [
      5567,
      5571
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5572,
    "end": 5573,
    "range": [
      5572,
      5573
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5574,
    "end": 5575,
    "range": [
      5574,
      5575
    ]
  },
  {
    "type": "Identifier",
    "value": "r12arg2",
    "start": 5575,
    "end": 5582,
    "range": [
      5575,
      5582
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5582,
    "end": 5583,
    "range": [
      5582,
      5583
    ]
  },
  {
    "type": "Identifier",
    "value": "r12arg1",
    "start": 5584,
    "end": 5591,
    "range": [
      5584,
      5591
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5591,
    "end": 5592,
    "range": [
      5591,
      5592
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5592,
    "end": 5593,
    "range": [
      5592,
      5593
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5595,
    "end": 5598,
    "range": [
      5595,
      5598
    ]
  },
  {
    "type": "Identifier",
    "value": "r13arg1",
    "start": 5599,
    "end": 5606,
    "range": [
      5599,
      5606
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5606,
    "end": 5607,
    "range": [
      5606,
      5607
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5608,
    "end": 5611,
    "range": [
      5608,
      5611
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5612,
    "end": 5613,
    "range": [
      5612,
      5613
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5613,
    "end": 5614,
    "range": [
      5613,
      5614
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5615,
    "end": 5622,
    "range": [
      5615,
      5622
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 5623,
    "end": 5628,
    "range": [
      5623,
      5628
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5628,
    "end": 5629,
    "range": [
      5628,
      5629
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 5629,
    "end": 5636,
    "range": [
      5629,
      5636
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5636,
    "end": 5637,
    "range": [
      5636,
      5637
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5637,
    "end": 5638,
    "range": [
      5637,
      5638
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5638,
    "end": 5639,
    "range": [
      5638,
      5639
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5639,
    "end": 5640,
    "range": [
      5639,
      5640
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5640,
    "end": 5641,
    "range": [
      5640,
      5641
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 5642,
    "end": 5647,
    "range": [
      5642,
      5647
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5647,
    "end": 5648,
    "range": [
      5647,
      5648
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 5648,
    "end": 5652,
    "range": [
      5648,
      5652
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5652,
    "end": 5653,
    "range": [
      5652,
      5653
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5653,
    "end": 5654,
    "range": [
      5653,
      5654
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 5655,
    "end": 5656,
    "range": [
      5655,
      5656
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5656,
    "end": 5657,
    "range": [
      5656,
      5657
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5658,
    "end": 5659,
    "range": [
      5658,
      5659
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5659,
    "end": 5660,
    "range": [
      5659,
      5660
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5661,
    "end": 5663,
    "range": [
      5661,
      5663
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5664,
    "end": 5665,
    "range": [
      5664,
      5665
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5665,
    "end": 5666,
    "range": [
      5665,
      5666
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5667,
    "end": 5670,
    "range": [
      5667,
      5670
    ]
  },
  {
    "type": "Identifier",
    "value": "r13arg2",
    "start": 5671,
    "end": 5678,
    "range": [
      5671,
      5678
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5678,
    "end": 5679,
    "range": [
      5678,
      5679
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5680,
    "end": 5683,
    "range": [
      5680,
      5683
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5684,
    "end": 5685,
    "range": [
      5684,
      5685
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5685,
    "end": 5686,
    "range": [
      5685,
      5686
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5686,
    "end": 5687,
    "range": [
      5686,
      5687
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 5688,
    "end": 5693,
    "range": [
      5688,
      5693
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5693,
    "end": 5694,
    "range": [
      5693,
      5694
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 5694,
    "end": 5698,
    "range": [
      5694,
      5698
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5698,
    "end": 5699,
    "range": [
      5698,
      5699
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5699,
    "end": 5700,
    "range": [
      5699,
      5700
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 5701,
    "end": 5702,
    "range": [
      5701,
      5702
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5702,
    "end": 5703,
    "range": [
      5702,
      5703
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 5704,
    "end": 5709,
    "range": [
      5704,
      5709
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5709,
    "end": 5710,
    "range": [
      5709,
      5710
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 5710,
    "end": 5717,
    "range": [
      5710,
      5717
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5717,
    "end": 5718,
    "range": [
      5717,
      5718
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5718,
    "end": 5719,
    "range": [
      5718,
      5719
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5720,
    "end": 5722,
    "range": [
      5720,
      5722
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 5723,
    "end": 5728,
    "range": [
      5723,
      5728
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5728,
    "end": 5729,
    "range": [
      5728,
      5729
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 5729,
    "end": 5736,
    "range": [
      5729,
      5736
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5736,
    "end": 5737,
    "range": [
      5736,
      5737
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5737,
    "end": 5738,
    "range": [
      5737,
      5738
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5739,
    "end": 5742,
    "range": [
      5739,
      5742
    ]
  },
  {
    "type": "Identifier",
    "value": "r13",
    "start": 5743,
    "end": 5746,
    "range": [
      5743,
      5746
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5747,
    "end": 5748,
    "range": [
      5747,
      5748
    ]
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 5749,
    "end": 5754,
    "range": [
      5749,
      5754
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5754,
    "end": 5755,
    "range": [
      5754,
      5755
    ]
  },
  {
    "type": "Identifier",
    "value": "r13arg1",
    "start": 5755,
    "end": 5762,
    "range": [
      5755,
      5762
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5762,
    "end": 5763,
    "range": [
      5762,
      5763
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5763,
    "end": 5764,
    "range": [
      5763,
      5764
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5772,
    "end": 5775,
    "range": [
      5772,
      5775
    ]
  },
  {
    "type": "Identifier",
    "value": "r13a",
    "start": 5776,
    "end": 5780,
    "range": [
      5776,
      5780
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5781,
    "end": 5782,
    "range": [
      5781,
      5782
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5783,
    "end": 5784,
    "range": [
      5783,
      5784
    ]
  },
  {
    "type": "Identifier",
    "value": "r13arg1",
    "start": 5784,
    "end": 5791,
    "range": [
      5784,
      5791
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5791,
    "end": 5792,
    "range": [
      5791,
      5792
    ]
  },
  {
    "type": "Identifier",
    "value": "r13arg2",
    "start": 5793,
    "end": 5800,
    "range": [
      5793,
      5800
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5800,
    "end": 5801,
    "range": [
      5800,
      5801
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5801,
    "end": 5802,
    "range": [
      5801,
      5802
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5803,
    "end": 5806,
    "range": [
      5803,
      5806
    ]
  },
  {
    "type": "Identifier",
    "value": "r13b",
    "start": 5807,
    "end": 5811,
    "range": [
      5807,
      5811
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5812,
    "end": 5813,
    "range": [
      5812,
      5813
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5814,
    "end": 5815,
    "range": [
      5814,
      5815
    ]
  },
  {
    "type": "Identifier",
    "value": "r13arg2",
    "start": 5815,
    "end": 5822,
    "range": [
      5815,
      5822
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5822,
    "end": 5823,
    "range": [
      5822,
      5823
    ]
  },
  {
    "type": "Identifier",
    "value": "r13arg1",
    "start": 5824,
    "end": 5831,
    "range": [
      5824,
      5831
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5831,
    "end": 5832,
    "range": [
      5831,
      5832
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5832,
    "end": 5833,
    "range": [
      5832,
      5833
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5835,
    "end": 5838,
    "range": [
      5835,
      5838
    ]
  },
  {
    "type": "Identifier",
    "value": "r14arg1",
    "start": 5839,
    "end": 5846,
    "range": [
      5839,
      5846
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5846,
    "end": 5847,
    "range": [
      5846,
      5847
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5848,
    "end": 5851,
    "range": [
      5848,
      5851
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5852,
    "end": 5853,
    "range": [
      5852,
      5853
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5853,
    "end": 5854,
    "range": [
      5853,
      5854
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5854,
    "end": 5855,
    "range": [
      5854,
      5855
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5855,
    "end": 5856,
    "range": [
      5855,
      5856
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5856,
    "end": 5857,
    "range": [
      5856,
      5857
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5857,
    "end": 5858,
    "range": [
      5857,
      5858
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5859,
    "end": 5860,
    "range": [
      5859,
      5860
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 5861,
    "end": 5862,
    "range": [
      5861,
      5862
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5862,
    "end": 5863,
    "range": [
      5862,
      5863
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5864,
    "end": 5865,
    "range": [
      5864,
      5865
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5865,
    "end": 5866,
    "range": [
      5865,
      5866
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 5867,
    "end": 5868,
    "range": [
      5867,
      5868
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5868,
    "end": 5869,
    "range": [
      5868,
      5869
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5870,
    "end": 5871,
    "range": [
      5870,
      5871
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5872,
    "end": 5873,
    "range": [
      5872,
      5873
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5873,
    "end": 5874,
    "range": [
      5873,
      5874
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5875,
    "end": 5877,
    "range": [
      5875,
      5877
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5878,
    "end": 5879,
    "range": [
      5878,
      5879
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5879,
    "end": 5880,
    "range": [
      5879,
      5880
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5881,
    "end": 5884,
    "range": [
      5881,
      5884
    ]
  },
  {
    "type": "Identifier",
    "value": "r14arg2",
    "start": 5885,
    "end": 5892,
    "range": [
      5885,
      5892
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5892,
    "end": 5893,
    "range": [
      5892,
      5893
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5894,
    "end": 5897,
    "range": [
      5894,
      5897
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5898,
    "end": 5899,
    "range": [
      5898,
      5899
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5899,
    "end": 5900,
    "range": [
      5899,
      5900
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5900,
    "end": 5901,
    "range": [
      5900,
      5901
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5902,
    "end": 5903,
    "range": [
      5902,
      5903
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 5904,
    "end": 5905,
    "range": [
      5904,
      5905
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5905,
    "end": 5906,
    "range": [
      5905,
      5906
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5907,
    "end": 5913,
    "range": [
      5907,
      5913
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5913,
    "end": 5914,
    "range": [
      5913,
      5914
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 5915,
    "end": 5916,
    "range": [
      5915,
      5916
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5916,
    "end": 5917,
    "range": [
      5916,
      5917
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5918,
    "end": 5924,
    "range": [
      5918,
      5924
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5925,
    "end": 5926,
    "range": [
      5925,
      5926
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5926,
    "end": 5927,
    "range": [
      5926,
      5927
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5928,
    "end": 5930,
    "range": [
      5928,
      5930
    ]
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 5931,
    "end": 5937,
    "range": [
      5931,
      5937
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5937,
    "end": 5938,
    "range": [
      5937,
      5938
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5939,
    "end": 5942,
    "range": [
      5939,
      5942
    ]
  },
  {
    "type": "Identifier",
    "value": "r14",
    "start": 5943,
    "end": 5946,
    "range": [
      5943,
      5946
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5947,
    "end": 5948,
    "range": [
      5947,
      5948
    ]
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 5949,
    "end": 5954,
    "range": [
      5949,
      5954
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5954,
    "end": 5955,
    "range": [
      5954,
      5955
    ]
  },
  {
    "type": "Identifier",
    "value": "r14arg1",
    "start": 5955,
    "end": 5962,
    "range": [
      5955,
      5962
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5962,
    "end": 5963,
    "range": [
      5962,
      5963
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5963,
    "end": 5964,
    "range": [
      5963,
      5964
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5972,
    "end": 5975,
    "range": [
      5972,
      5975
    ]
  },
  {
    "type": "Identifier",
    "value": "r14a",
    "start": 5976,
    "end": 5980,
    "range": [
      5976,
      5980
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5981,
    "end": 5982,
    "range": [
      5981,
      5982
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5983,
    "end": 5984,
    "range": [
      5983,
      5984
    ]
  },
  {
    "type": "Identifier",
    "value": "r14arg1",
    "start": 5984,
    "end": 5991,
    "range": [
      5984,
      5991
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5991,
    "end": 5992,
    "range": [
      5991,
      5992
    ]
  },
  {
    "type": "Identifier",
    "value": "r14arg2",
    "start": 5993,
    "end": 6000,
    "range": [
      5993,
      6000
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6000,
    "end": 6001,
    "range": [
      6000,
      6001
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6001,
    "end": 6002,
    "range": [
      6001,
      6002
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6003,
    "end": 6006,
    "range": [
      6003,
      6006
    ]
  },
  {
    "type": "Identifier",
    "value": "r14b",
    "start": 6007,
    "end": 6011,
    "range": [
      6007,
      6011
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6012,
    "end": 6013,
    "range": [
      6012,
      6013
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6014,
    "end": 6015,
    "range": [
      6014,
      6015
    ]
  },
  {
    "type": "Identifier",
    "value": "r14arg2",
    "start": 6015,
    "end": 6022,
    "range": [
      6015,
      6022
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6022,
    "end": 6023,
    "range": [
      6022,
      6023
    ]
  },
  {
    "type": "Identifier",
    "value": "r14arg1",
    "start": 6024,
    "end": 6031,
    "range": [
      6024,
      6031
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6031,
    "end": 6032,
    "range": [
      6031,
      6032
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6032,
    "end": 6033,
    "range": [
      6032,
      6033
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6035,
    "end": 6038,
    "range": [
      6035,
      6038
    ]
  },
  {
    "type": "Identifier",
    "value": "r15arg1",
    "start": 6039,
    "end": 6046,
    "range": [
      6039,
      6046
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6046,
    "end": 6047,
    "range": [
      6046,
      6047
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6048,
    "end": 6051,
    "range": [
      6048,
      6051
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6052,
    "end": 6053,
    "range": [
      6052,
      6053
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6053,
    "end": 6054,
    "range": [
      6053,
      6054
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6054,
    "end": 6055,
    "range": [
      6054,
      6055
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6055,
    "end": 6056,
    "range": [
      6055,
      6056
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6056,
    "end": 6057,
    "range": [
      6056,
      6057
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6057,
    "end": 6058,
    "range": [
      6057,
      6058
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6059,
    "end": 6060,
    "range": [
      6059,
      6060
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6060,
    "end": 6061,
    "range": [
      6060,
      6061
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6062,
    "end": 6064,
    "range": [
      6062,
      6064
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6065,
    "end": 6066,
    "range": [
      6065,
      6066
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6066,
    "end": 6067,
    "range": [
      6066,
      6067
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6067,
    "end": 6068,
    "range": [
      6067,
      6068
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6068,
    "end": 6069,
    "range": [
      6068,
      6069
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6070,
    "end": 6073,
    "range": [
      6070,
      6073
    ]
  },
  {
    "type": "Identifier",
    "value": "r15",
    "start": 6074,
    "end": 6077,
    "range": [
      6074,
      6077
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6078,
    "end": 6079,
    "range": [
      6078,
      6079
    ]
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 6080,
    "end": 6085,
    "range": [
      6080,
      6085
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6085,
    "end": 6086,
    "range": [
      6085,
      6086
    ]
  },
  {
    "type": "Identifier",
    "value": "r15arg1",
    "start": 6086,
    "end": 6093,
    "range": [
      6086,
      6093
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6093,
    "end": 6094,
    "range": [
      6093,
      6094
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6094,
    "end": 6095,
    "range": [
      6094,
      6095
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6103,
    "end": 6106,
    "range": [
      6103,
      6106
    ]
  },
  {
    "type": "Identifier",
    "value": "r16arg1",
    "start": 6107,
    "end": 6114,
    "range": [
      6107,
      6114
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6114,
    "end": 6115,
    "range": [
      6114,
      6115
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6116,
    "end": 6119,
    "range": [
      6116,
      6119
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6120,
    "end": 6121,
    "range": [
      6120,
      6121
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6121,
    "end": 6122,
    "range": [
      6121,
      6122
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6123,
    "end": 6130,
    "range": [
      6123,
      6130
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 6131,
    "end": 6135,
    "range": [
      6131,
      6135
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6135,
    "end": 6136,
    "range": [
      6135,
      6136
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6136,
    "end": 6137,
    "range": [
      6136,
      6137
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6137,
    "end": 6138,
    "range": [
      6137,
      6138
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6138,
    "end": 6139,
    "range": [
      6138,
      6139
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6140,
    "end": 6141,
    "range": [
      6140,
      6141
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6141,
    "end": 6142,
    "range": [
      6141,
      6142
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6143,
    "end": 6145,
    "range": [
      6143,
      6145
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6146,
    "end": 6152,
    "range": [
      6146,
      6152
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6152,
    "end": 6153,
    "range": [
      6152,
      6153
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6153,
    "end": 6154,
    "range": [
      6153,
      6154
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6154,
    "end": 6155,
    "range": [
      6154,
      6155
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6156,
    "end": 6159,
    "range": [
      6156,
      6159
    ]
  },
  {
    "type": "Identifier",
    "value": "r16",
    "start": 6160,
    "end": 6163,
    "range": [
      6160,
      6163
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6164,
    "end": 6165,
    "range": [
      6164,
      6165
    ]
  },
  {
    "type": "Identifier",
    "value": "foo16",
    "start": 6166,
    "end": 6171,
    "range": [
      6166,
      6171
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6171,
    "end": 6172,
    "range": [
      6171,
      6172
    ]
  },
  {
    "type": "Identifier",
    "value": "r16arg1",
    "start": 6172,
    "end": 6179,
    "range": [
      6172,
      6179
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6179,
    "end": 6180,
    "range": [
      6179,
      6180
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6180,
    "end": 6181,
    "range": [
      6180,
      6181
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6182,
    "end": 6185,
    "range": [
      6182,
      6185
    ]
  },
  {
    "type": "Identifier",
    "value": "r17arg1",
    "start": 6186,
    "end": 6193,
    "range": [
      6186,
      6193
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6193,
    "end": 6194,
    "range": [
      6193,
      6194
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6195,
    "end": 6198,
    "range": [
      6195,
      6198
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6199,
    "end": 6200,
    "range": [
      6199,
      6200
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6200,
    "end": 6201,
    "range": [
      6200,
      6201
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6201,
    "end": 6202,
    "range": [
      6201,
      6202
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6202,
    "end": 6203,
    "range": [
      6202,
      6203
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6203,
    "end": 6204,
    "range": [
      6203,
      6204
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6204,
    "end": 6205,
    "range": [
      6204,
      6205
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6206,
    "end": 6207,
    "range": [
      6206,
      6207
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 6207,
    "end": 6208,
    "range": [
      6207,
      6208
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6208,
    "end": 6209,
    "range": [
      6208,
      6209
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6210,
    "end": 6211,
    "range": [
      6210,
      6211
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6211,
    "end": 6212,
    "range": [
      6211,
      6212
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6213,
    "end": 6215,
    "range": [
      6213,
      6215
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6216,
    "end": 6217,
    "range": [
      6216,
      6217
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6217,
    "end": 6218,
    "range": [
      6217,
      6218
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6219,
    "end": 6221,
    "range": [
      6219,
      6221
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6222,
    "end": 6223,
    "range": [
      6222,
      6223
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6223,
    "end": 6224,
    "range": [
      6223,
      6224
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6224,
    "end": 6225,
    "range": [
      6224,
      6225
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6225,
    "end": 6226,
    "range": [
      6225,
      6226
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6227,
    "end": 6230,
    "range": [
      6227,
      6230
    ]
  },
  {
    "type": "Identifier",
    "value": "r17",
    "start": 6231,
    "end": 6234,
    "range": [
      6231,
      6234
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6235,
    "end": 6236,
    "range": [
      6235,
      6236
    ]
  },
  {
    "type": "Identifier",
    "value": "foo17",
    "start": 6237,
    "end": 6242,
    "range": [
      6237,
      6242
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6242,
    "end": 6243,
    "range": [
      6242,
      6243
    ]
  },
  {
    "type": "Identifier",
    "value": "r17arg1",
    "start": 6243,
    "end": 6250,
    "range": [
      6243,
      6250
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6250,
    "end": 6251,
    "range": [
      6250,
      6251
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6251,
    "end": 6252,
    "range": [
      6251,
      6252
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6260,
    "end": 6263,
    "range": [
      6260,
      6263
    ]
  },
  {
    "type": "Identifier",
    "value": "r18arg1",
    "start": 6264,
    "end": 6271,
    "range": [
      6264,
      6271
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6271,
    "end": 6272,
    "range": [
      6271,
      6272
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6273,
    "end": 6276,
    "range": [
      6273,
      6276
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6277,
    "end": 6278,
    "range": [
      6277,
      6278
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6278,
    "end": 6279,
    "range": [
      6278,
      6279
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6279,
    "end": 6280,
    "range": [
      6279,
      6280
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6280,
    "end": 6281,
    "range": [
      6280,
      6281
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6281,
    "end": 6282,
    "range": [
      6281,
      6282
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6282,
    "end": 6283,
    "range": [
      6282,
      6283
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6284,
    "end": 6285,
    "range": [
      6284,
      6285
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 6285,
    "end": 6286,
    "range": [
      6285,
      6286
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6286,
    "end": 6287,
    "range": [
      6286,
      6287
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6288,
    "end": 6289,
    "range": [
      6288,
      6289
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6289,
    "end": 6290,
    "range": [
      6289,
      6290
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6291,
    "end": 6293,
    "range": [
      6291,
      6293
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6294,
    "end": 6295,
    "range": [
      6294,
      6295
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6295,
    "end": 6296,
    "range": [
      6295,
      6296
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6297,
    "end": 6299,
    "range": [
      6297,
      6299
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6300,
    "end": 6301,
    "range": [
      6300,
      6301
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6301,
    "end": 6302,
    "range": [
      6301,
      6302
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6302,
    "end": 6303,
    "range": [
      6302,
      6303
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6303,
    "end": 6304,
    "range": [
      6303,
      6304
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6305,
    "end": 6308,
    "range": [
      6305,
      6308
    ]
  },
  {
    "type": "Identifier",
    "value": "r18",
    "start": 6309,
    "end": 6312,
    "range": [
      6309,
      6312
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6313,
    "end": 6314,
    "range": [
      6313,
      6314
    ]
  },
  {
    "type": "Identifier",
    "value": "foo18",
    "start": 6315,
    "end": 6320,
    "range": [
      6315,
      6320
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6320,
    "end": 6321,
    "range": [
      6320,
      6321
    ]
  },
  {
    "type": "Identifier",
    "value": "r18arg1",
    "start": 6321,
    "end": 6328,
    "range": [
      6321,
      6328
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6328,
    "end": 6329,
    "range": [
      6328,
      6329
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6329,
    "end": 6330,
    "range": [
      6329,
      6330
    ]
  }
]
```
