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
