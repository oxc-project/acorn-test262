__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 102,
  "end": 6332,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 102,
      "end": 129,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 112,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 113,
        "end": 129,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 115,
            "end": 127,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 115,
              "end": 118,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 118,
              "end": 126,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 120,
                "end": 126
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 130,
      "end": 173,
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 143,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 152,
        "end": 156,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 157,
        "end": 173,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 159,
            "end": 171,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 159,
              "end": 162,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 162,
              "end": 170,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 164,
                "end": 170
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 174,
      "end": 221,
      "id": {
        "type": "Identifier",
        "start": 180,
        "end": 188,
        "name": "Derived2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 197,
        "end": 204,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 205,
        "end": 221,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 207,
            "end": 219,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 207,
              "end": 210,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 210,
              "end": 218,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 212,
                "end": 218
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 222,
      "end": 271,
      "id": {
        "type": "Identifier",
        "start": 228,
        "end": 240,
        "name": "OtherDerived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 249,
        "end": 253,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 254,
        "end": 271,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 256,
            "end": 269,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 256,
              "end": 260,
              "name": "bing",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 260,
              "end": 268,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 262,
                "end": 268
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 273,
      "end": 337,
      "id": {
        "type": "Identifier",
        "start": 290,
        "end": 294,
        "name": "foo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 295,
          "end": 325,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 296,
            "end": 325,
            "typeAnnotation": {
              "type": "TSConstructorType",
              "start": 298,
              "end": 325,
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 303,
                  "end": 312,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 304,
                    "end": 312,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 306,
                      "end": 312
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 314,
                "end": 325,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 317,
                  "end": 325,
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 317,
                    "end": 323
                  }
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 326,
        "end": 336,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 328,
          "end": 336,
          "exprName": {
            "type": "Identifier",
            "start": 335,
            "end": 336,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 338,
      "end": 373,
      "id": {
        "type": "Identifier",
        "start": 355,
        "end": 359,
        "name": "foo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 360,
          "end": 366,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 361,
            "end": 366,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 363,
              "end": 366
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 367,
        "end": 372,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 369,
          "end": 372
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 375,
      "end": 439,
      "id": {
        "type": "Identifier",
        "start": 392,
        "end": 396,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 397,
          "end": 427,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 398,
            "end": 427,
            "typeAnnotation": {
              "type": "TSConstructorType",
              "start": 400,
              "end": 427,
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 405,
                  "end": 414,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 406,
                    "end": 414,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 408,
                      "end": 414
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 416,
                "end": 427,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 419,
                  "end": 427,
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 419,
                    "end": 425
                  }
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 428,
        "end": 438,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 430,
          "end": 438,
          "exprName": {
            "type": "Identifier",
            "start": 437,
            "end": 438,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 440,
      "end": 475,
      "id": {
        "type": "Identifier",
        "start": 457,
        "end": 461,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 462,
          "end": 468,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 463,
            "end": 468,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 465,
              "end": 468
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 469,
        "end": 474,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 471,
          "end": 474
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 477,
      "end": 537,
      "id": {
        "type": "Identifier",
        "start": 494,
        "end": 498,
        "name": "foo3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 499,
          "end": 525,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 500,
            "end": 525,
            "typeAnnotation": {
              "type": "TSConstructorType",
              "start": 502,
              "end": 525,
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 507,
                  "end": 516,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 508,
                    "end": 516,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 510,
                      "end": 516
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 518,
                "end": 525,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 521,
                  "end": 525
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 526,
        "end": 536,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 528,
          "end": 536,
          "exprName": {
            "type": "Identifier",
            "start": 535,
            "end": 536,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 538,
      "end": 573,
      "id": {
        "type": "Identifier",
        "start": 555,
        "end": 559,
        "name": "foo3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 560,
          "end": 566,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 561,
            "end": 566,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 563,
              "end": 566
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 567,
        "end": 572,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 569,
          "end": 572
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 575,
      "end": 648,
      "id": {
        "type": "Identifier",
        "start": 592,
        "end": 596,
        "name": "foo4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 597,
          "end": 636,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 598,
            "end": 636,
            "typeAnnotation": {
              "type": "TSConstructorType",
              "start": 600,
              "end": 636,
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 605,
                  "end": 614,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 606,
                    "end": 614,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 608,
                      "end": 614
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 616,
                  "end": 625,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 617,
                    "end": 625,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 619,
                      "end": 625
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 627,
                "end": 636,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 630,
                  "end": 636
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 637,
        "end": 647,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 639,
          "end": 647,
          "exprName": {
            "type": "Identifier",
            "start": 646,
            "end": 647,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 649,
      "end": 684,
      "id": {
        "type": "Identifier",
        "start": 666,
        "end": 670,
        "name": "foo4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 671,
          "end": 677,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 672,
            "end": 677,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 674,
              "end": 677
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 678,
        "end": 683,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 680,
          "end": 683
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 686,
      "end": 769,
      "id": {
        "type": "Identifier",
        "start": 703,
        "end": 707,
        "name": "foo5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 708,
          "end": 757,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 709,
            "end": 757,
            "typeAnnotation": {
              "type": "TSConstructorType",
              "start": 711,
              "end": 757,
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 716,
                  "end": 746,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 717,
                    "end": 746,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 719,
                      "end": 746,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 724,
                          "end": 735,
                          "name": "arg",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 727,
                            "end": 735,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 729,
                              "end": 735
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 737,
                        "end": 746,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 740,
                          "end": 746
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 748,
                "end": 757,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 751,
                  "end": 757
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 758,
        "end": 768,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 760,
          "end": 768,
          "exprName": {
            "type": "Identifier",
            "start": 767,
            "end": 768,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 770,
      "end": 805,
      "id": {
        "type": "Identifier",
        "start": 787,
        "end": 791,
        "name": "foo5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 792,
          "end": 798,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 793,
            "end": 798,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 795,
              "end": 798
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 799,
        "end": 804,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 801,
          "end": 804
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 807,
      "end": 887,
      "id": {
        "type": "Identifier",
        "start": 824,
        "end": 828,
        "name": "foo6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 829,
          "end": 875,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 830,
            "end": 875,
            "typeAnnotation": {
              "type": "TSConstructorType",
              "start": 832,
              "end": 875,
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 837,
                  "end": 866,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 838,
                    "end": 866,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 840,
                      "end": 866,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 845,
                          "end": 854,
                          "name": "arg",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 848,
                            "end": 854,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 850,
                              "end": 854,
                              "typeName": {
                                "type": "Identifier",
                                "start": 850,
                                "end": 854,
                                "name": "Base",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 856,
                        "end": 866,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 859,
                          "end": 866,
                          "typeName": {
                            "type": "Identifier",
                            "start": 859,
                            "end": 866,
                            "name": "Derived",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 868,
                "end": 875,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 871,
                  "end": 875,
                  "typeName": {
                    "type": "Identifier",
                    "start": 871,
                    "end": 875,
                    "name": "Base",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 876,
        "end": 886,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 878,
          "end": 886,
          "exprName": {
            "type": "Identifier",
            "start": 885,
            "end": 886,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 888,
      "end": 923,
      "id": {
        "type": "Identifier",
        "start": 905,
        "end": 909,
        "name": "foo6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 910,
          "end": 916,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 911,
            "end": 916,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 913,
              "end": 916
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 917,
        "end": 922,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 919,
          "end": 922
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 925,
      "end": 1025,
      "id": {
        "type": "Identifier",
        "start": 942,
        "end": 946,
        "name": "foo7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 947,
          "end": 1013,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 948,
            "end": 1013,
            "typeAnnotation": {
              "type": "TSConstructorType",
              "start": 950,
              "end": 1013,
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 955,
                  "end": 984,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 956,
                    "end": 984,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 958,
                      "end": 984,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 963,
                          "end": 972,
                          "name": "arg",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 966,
                            "end": 972,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 968,
                              "end": 972,
                              "typeName": {
                                "type": "Identifier",
                                "start": 968,
                                "end": 972,
                                "name": "Base",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 974,
                        "end": 984,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 977,
                          "end": 984,
                          "typeName": {
                            "type": "Identifier",
                            "start": 977,
                            "end": 984,
                            "name": "Derived",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 986,
                "end": 1013,
                "typeAnnotation": {
                  "type": "TSConstructorType",
                  "start": 989,
                  "end": 1013,
                  "abstract": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 994,
                      "end": 1001,
                      "name": "r",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 995,
                        "end": 1001,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 997,
                          "end": 1001,
                          "typeName": {
                            "type": "Identifier",
                            "start": 997,
                            "end": 1001,
                            "name": "Base",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1003,
                    "end": 1013,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1006,
                      "end": 1013,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1006,
                        "end": 1013,
                        "name": "Derived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1014,
        "end": 1024,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 1016,
          "end": 1024,
          "exprName": {
            "type": "Identifier",
            "start": 1023,
            "end": 1024,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1026,
      "end": 1061,
      "id": {
        "type": "Identifier",
        "start": 1043,
        "end": 1047,
        "name": "foo7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1048,
          "end": 1054,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1049,
            "end": 1054,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1051,
              "end": 1054
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1055,
        "end": 1060,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1057,
          "end": 1060
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1063,
      "end": 1195,
      "id": {
        "type": "Identifier",
        "start": 1080,
        "end": 1084,
        "name": "foo8",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1085,
          "end": 1183,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1086,
            "end": 1183,
            "typeAnnotation": {
              "type": "TSConstructorType",
              "start": 1088,
              "end": 1183,
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1093,
                  "end": 1122,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1094,
                    "end": 1122,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 1096,
                      "end": 1122,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1101,
                          "end": 1110,
                          "name": "arg",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1104,
                            "end": 1110,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1106,
                              "end": 1110,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1106,
                                "end": 1110,
                                "name": "Base",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1112,
                        "end": 1122,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1115,
                          "end": 1122,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1115,
                            "end": 1122,
                            "name": "Derived",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 1124,
                  "end": 1154,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1125,
                    "end": 1154,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 1127,
                      "end": 1154,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1132,
                          "end": 1142,
                          "name": "arg2",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1136,
                            "end": 1142,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1138,
                              "end": 1142,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1138,
                                "end": 1142,
                                "name": "Base",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1144,
                        "end": 1154,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1147,
                          "end": 1154,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1147,
                            "end": 1154,
                            "name": "Derived",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1156,
                "end": 1183,
                "typeAnnotation": {
                  "type": "TSConstructorType",
                  "start": 1159,
                  "end": 1183,
                  "abstract": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1164,
                      "end": 1171,
                      "name": "r",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1165,
                        "end": 1171,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1167,
                          "end": 1171,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1167,
                            "end": 1171,
                            "name": "Base",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1173,
                    "end": 1183,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1176,
                      "end": 1183,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1176,
                        "end": 1183,
                        "name": "Derived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1184,
        "end": 1194,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 1186,
          "end": 1194,
          "exprName": {
            "type": "Identifier",
            "start": 1193,
            "end": 1194,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1196,
      "end": 1231,
      "id": {
        "type": "Identifier",
        "start": 1213,
        "end": 1217,
        "name": "foo8",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1218,
          "end": 1224,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1219,
            "end": 1224,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1221,
              "end": 1224
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1225,
        "end": 1230,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1227,
          "end": 1230
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1233,
      "end": 1365,
      "id": {
        "type": "Identifier",
        "start": 1250,
        "end": 1254,
        "name": "foo9",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1255,
          "end": 1353,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1256,
            "end": 1353,
            "typeAnnotation": {
              "type": "TSConstructorType",
              "start": 1258,
              "end": 1353,
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1263,
                  "end": 1292,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1264,
                    "end": 1292,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 1266,
                      "end": 1292,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1271,
                          "end": 1280,
                          "name": "arg",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1274,
                            "end": 1280,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1276,
                              "end": 1280,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1276,
                                "end": 1280,
                                "name": "Base",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1282,
                        "end": 1292,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1285,
                          "end": 1292,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1285,
                            "end": 1292,
                            "name": "Derived",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 1294,
                  "end": 1324,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1295,
                    "end": 1324,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 1297,
                      "end": 1324,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1302,
                          "end": 1312,
                          "name": "arg2",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1306,
                            "end": 1312,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1308,
                              "end": 1312,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1308,
                                "end": 1312,
                                "name": "Base",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1314,
                        "end": 1324,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1317,
                          "end": 1324,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1317,
                            "end": 1324,
                            "name": "Derived",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1326,
                "end": 1353,
                "typeAnnotation": {
                  "type": "TSConstructorType",
                  "start": 1329,
                  "end": 1353,
                  "abstract": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1334,
                      "end": 1341,
                      "name": "r",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1335,
                        "end": 1341,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1337,
                          "end": 1341,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1337,
                            "end": 1341,
                            "name": "Base",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1343,
                    "end": 1353,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1346,
                      "end": 1353,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1346,
                        "end": 1353,
                        "name": "Derived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1354,
        "end": 1364,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 1356,
          "end": 1364,
          "exprName": {
            "type": "Identifier",
            "start": 1363,
            "end": 1364,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1366,
      "end": 1401,
      "id": {
        "type": "Identifier",
        "start": 1383,
        "end": 1387,
        "name": "foo9",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1388,
          "end": 1394,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1389,
            "end": 1394,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1391,
              "end": 1394
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1395,
        "end": 1400,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1397,
          "end": 1400
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1403,
      "end": 1473,
      "id": {
        "type": "Identifier",
        "start": 1420,
        "end": 1425,
        "name": "foo10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1426,
          "end": 1461,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1427,
            "end": 1461,
            "typeAnnotation": {
              "type": "TSConstructorType",
              "start": 1429,
              "end": 1461,
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 1434,
                  "end": 1449,
                  "argument": {
                    "type": "Identifier",
                    "start": 1437,
                    "end": 1438,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1438,
                    "end": 1449,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1440,
                      "end": 1449,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 1440,
                        "end": 1447,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1440,
                          "end": 1447,
                          "name": "Derived",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1451,
                "end": 1461,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1454,
                  "end": 1461,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1454,
                    "end": 1461,
                    "name": "Derived",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1462,
        "end": 1472,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 1464,
          "end": 1472,
          "exprName": {
            "type": "Identifier",
            "start": 1471,
            "end": 1472,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1474,
      "end": 1510,
      "id": {
        "type": "Identifier",
        "start": 1491,
        "end": 1496,
        "name": "foo10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1497,
          "end": 1503,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1498,
            "end": 1503,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1500,
              "end": 1503
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1504,
        "end": 1509,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1506,
          "end": 1509
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1512,
      "end": 1615,
      "id": {
        "type": "Identifier",
        "start": 1529,
        "end": 1534,
        "name": "foo11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1535,
          "end": 1603,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1536,
            "end": 1603,
            "typeAnnotation": {
              "type": "TSConstructorType",
              "start": 1538,
              "end": 1603,
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1543,
                  "end": 1561,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1544,
                    "end": 1561,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 1546,
                      "end": 1561,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 1548,
                          "end": 1559,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1548,
                            "end": 1551,
                            "name": "foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1551,
                            "end": 1559,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1553,
                              "end": 1559
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 1563,
                  "end": 1594,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1564,
                    "end": 1594,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 1566,
                      "end": 1594,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 1568,
                          "end": 1580,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1568,
                            "end": 1571,
                            "name": "foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1571,
                            "end": 1579,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1573,
                              "end": 1579
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 1581,
                          "end": 1592,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1581,
                            "end": 1584,
                            "name": "bar",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1584,
                            "end": 1592,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1586,
                              "end": 1592
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1596,
                "end": 1603,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1599,
                  "end": 1603,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1599,
                    "end": 1603,
                    "name": "Base",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1604,
        "end": 1614,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 1606,
          "end": 1614,
          "exprName": {
            "type": "Identifier",
            "start": 1613,
            "end": 1614,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1616,
      "end": 1652,
      "id": {
        "type": "Identifier",
        "start": 1633,
        "end": 1638,
        "name": "foo11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1639,
          "end": 1645,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1640,
            "end": 1645,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1642,
              "end": 1645
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1646,
        "end": 1651,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1648,
          "end": 1651
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1654,
      "end": 1750,
      "id": {
        "type": "Identifier",
        "start": 1671,
        "end": 1676,
        "name": "foo12",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1677,
          "end": 1738,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1678,
            "end": 1738,
            "typeAnnotation": {
              "type": "TSConstructorType",
              "start": 1680,
              "end": 1738,
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1685,
                  "end": 1699,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1686,
                    "end": 1699,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1688,
                      "end": 1699,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1688,
                        "end": 1693,
                        "name": "Array",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1693,
                        "end": 1699,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1694,
                            "end": 1698,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1694,
                              "end": 1698,
                              "name": "Base",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 1701,
                  "end": 1719,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1702,
                    "end": 1719,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1704,
                      "end": 1719,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1704,
                        "end": 1709,
                        "name": "Array",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1709,
                        "end": 1719,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1710,
                            "end": 1718,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1710,
                              "end": 1718,
                              "name": "Derived2",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1721,
                "end": 1738,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1724,
                  "end": 1738,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1724,
                    "end": 1729,
                    "name": "Array",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1729,
                    "end": 1738,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1730,
                        "end": 1737,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1730,
                          "end": 1737,
                          "name": "Derived",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1739,
        "end": 1749,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 1741,
          "end": 1749,
          "exprName": {
            "type": "Identifier",
            "start": 1748,
            "end": 1749,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1751,
      "end": 1787,
      "id": {
        "type": "Identifier",
        "start": 1768,
        "end": 1773,
        "name": "foo12",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1774,
          "end": 1780,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1775,
            "end": 1780,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1777,
              "end": 1780
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1781,
        "end": 1786,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1783,
          "end": 1786
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1789,
      "end": 1884,
      "id": {
        "type": "Identifier",
        "start": 1806,
        "end": 1811,
        "name": "foo13",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1812,
          "end": 1872,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1813,
            "end": 1872,
            "typeAnnotation": {
              "type": "TSConstructorType",
              "start": 1815,
              "end": 1872,
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1820,
                  "end": 1834,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1821,
                    "end": 1834,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1823,
                      "end": 1834,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1823,
                        "end": 1828,
                        "name": "Array",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1828,
                        "end": 1834,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1829,
                            "end": 1833,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1829,
                              "end": 1833,
                              "name": "Base",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 1836,
                  "end": 1853,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1837,
                    "end": 1853,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1839,
                      "end": 1853,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1839,
                        "end": 1844,
                        "name": "Array",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1844,
                        "end": 1853,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1845,
                            "end": 1852,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1845,
                              "end": 1852,
                              "name": "Derived",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1855,
                "end": 1872,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1858,
                  "end": 1872,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1858,
                    "end": 1863,
                    "name": "Array",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1863,
                    "end": 1872,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1864,
                        "end": 1871,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1864,
                          "end": 1871,
                          "name": "Derived",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1873,
        "end": 1883,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 1875,
          "end": 1883,
          "exprName": {
            "type": "Identifier",
            "start": 1882,
            "end": 1883,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1885,
      "end": 1921,
      "id": {
        "type": "Identifier",
        "start": 1902,
        "end": 1907,
        "name": "foo13",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1908,
          "end": 1914,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1909,
            "end": 1914,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1911,
              "end": 1914
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1915,
        "end": 1920,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1917,
          "end": 1920
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1923,
      "end": 2004,
      "id": {
        "type": "Identifier",
        "start": 1940,
        "end": 1945,
        "name": "foo14",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1946,
          "end": 1992,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1947,
            "end": 1992,
            "typeAnnotation": {
              "type": "TSConstructorType",
              "start": 1949,
              "end": 1992,
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1954,
                  "end": 1981,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1955,
                    "end": 1981,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 1957,
                      "end": 1981,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 1959,
                          "end": 1969,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1959,
                            "end": 1960,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1960,
                            "end": 1968,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1962,
                              "end": 1968
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 1970,
                          "end": 1979,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1970,
                            "end": 1971,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1971,
                            "end": 1979,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1973,
                              "end": 1979
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1983,
                "end": 1992,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1986,
                  "end": 1992,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1986,
                    "end": 1992,
                    "name": "Object",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1993,
        "end": 2003,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 1995,
          "end": 2003,
          "exprName": {
            "type": "Identifier",
            "start": 2002,
            "end": 2003,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2005,
      "end": 2041,
      "id": {
        "type": "Identifier",
        "start": 2022,
        "end": 2027,
        "name": "foo14",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2028,
          "end": 2034,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2029,
            "end": 2034,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2031,
              "end": 2034
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2035,
        "end": 2040,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 2037,
          "end": 2040
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2043,
      "end": 2148,
      "id": {
        "type": "Identifier",
        "start": 2060,
        "end": 2065,
        "name": "foo15",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2066,
          "end": 2136,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2067,
            "end": 2136,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 2069,
              "end": 2136,
              "members": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 2076,
                  "end": 2102,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2081,
                      "end": 2090,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2082,
                        "end": 2090,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 2084,
                          "end": 2090
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2091,
                    "end": 2101,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 2093,
                      "end": 2101,
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 2093,
                        "end": 2099
                      }
                    }
                  }
                },
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 2107,
                  "end": 2133,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2112,
                      "end": 2121,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2113,
                        "end": 2121,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2115,
                          "end": 2121
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2122,
                    "end": 2132,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 2124,
                      "end": 2132,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 2124,
                        "end": 2130
                      }
                    }
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2137,
        "end": 2147,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 2139,
          "end": 2147,
          "exprName": {
            "type": "Identifier",
            "start": 2146,
            "end": 2147,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2149,
      "end": 2185,
      "id": {
        "type": "Identifier",
        "start": 2166,
        "end": 2171,
        "name": "foo15",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2172,
          "end": 2178,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2173,
            "end": 2178,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2175,
              "end": 2178
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2179,
        "end": 2184,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 2181,
          "end": 2184
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2187,
      "end": 2315,
      "id": {
        "type": "Identifier",
        "start": 2204,
        "end": 2209,
        "name": "foo16",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2210,
          "end": 2303,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2211,
            "end": 2303,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 2213,
              "end": 2303,
              "members": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 2219,
                  "end": 2259,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 2223,
                    "end": 2242,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 2224,
                        "end": 2241,
                        "name": {
                          "type": "Identifier",
                          "start": 2224,
                          "end": 2225,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 2234,
                          "end": 2241,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2234,
                            "end": 2241,
                            "name": "Derived",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      }
                    ]
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2243,
                      "end": 2247,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2244,
                        "end": 2247,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2246,
                          "end": 2247,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2246,
                            "end": 2247,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2248,
                    "end": 2258,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 2250,
                      "end": 2258,
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 2250,
                        "end": 2256
                      }
                    }
                  }
                },
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 2264,
                  "end": 2301,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 2268,
                    "end": 2284,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 2269,
                        "end": 2283,
                        "name": {
                          "type": "Identifier",
                          "start": 2269,
                          "end": 2270,
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 2279,
                          "end": 2283,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2279,
                            "end": 2283,
                            "name": "Base",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      }
                    ]
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2285,
                      "end": 2289,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2286,
                        "end": 2289,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2288,
                          "end": 2289,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2288,
                            "end": 2289,
                            "name": "U",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2290,
                    "end": 2300,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 2292,
                      "end": 2300,
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 2292,
                        "end": 2298
                      }
                    }
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2304,
        "end": 2314,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 2306,
          "end": 2314,
          "exprName": {
            "type": "Identifier",
            "start": 2313,
            "end": 2314,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2316,
      "end": 2352,
      "id": {
        "type": "Identifier",
        "start": 2333,
        "end": 2338,
        "name": "foo16",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2339,
          "end": 2345,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2340,
            "end": 2345,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2342,
              "end": 2345
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2346,
        "end": 2351,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 2348,
          "end": 2351
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2354,
      "end": 2487,
      "id": {
        "type": "Identifier",
        "start": 2371,
        "end": 2376,
        "name": "foo17",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2377,
          "end": 2475,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2378,
            "end": 2475,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 2380,
              "end": 2475,
              "members": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 2386,
                  "end": 2427,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2391,
                      "end": 2415,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2392,
                        "end": 2415,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 2394,
                          "end": 2415,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 2395,
                              "end": 2404,
                              "name": "a",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 2396,
                                "end": 2404,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 2398,
                                  "end": 2404
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 2406,
                            "end": 2415,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2409,
                              "end": 2415
                            }
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2416,
                    "end": 2426,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 2418,
                      "end": 2426,
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 2418,
                        "end": 2424
                      }
                    }
                  }
                },
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 2432,
                  "end": 2473,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2437,
                      "end": 2461,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2438,
                        "end": 2461,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 2440,
                          "end": 2461,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 2441,
                              "end": 2450,
                              "name": "a",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 2442,
                                "end": 2450,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 2444,
                                  "end": 2450
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 2452,
                            "end": 2461,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2455,
                              "end": 2461
                            }
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2462,
                    "end": 2472,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 2464,
                      "end": 2472,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 2464,
                        "end": 2470
                      }
                    }
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2476,
        "end": 2486,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 2478,
          "end": 2486,
          "exprName": {
            "type": "Identifier",
            "start": 2485,
            "end": 2486,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2488,
      "end": 2524,
      "id": {
        "type": "Identifier",
        "start": 2505,
        "end": 2510,
        "name": "foo17",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2511,
          "end": 2517,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2512,
            "end": 2517,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2514,
              "end": 2517
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2518,
        "end": 2523,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 2520,
          "end": 2523
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2526,
      "end": 2755,
      "id": {
        "type": "Identifier",
        "start": 2543,
        "end": 2548,
        "name": "foo18",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2549,
          "end": 2743,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2550,
            "end": 2743,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 2552,
              "end": 2743,
              "members": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 2558,
                  "end": 2648,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2563,
                      "end": 2639,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2564,
                        "end": 2639,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 2566,
                          "end": 2639,
                          "members": [
                            {
                              "type": "TSConstructSignatureDeclaration",
                              "start": 2576,
                              "end": 2600,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 2581,
                                  "end": 2590,
                                  "name": "a",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 2582,
                                    "end": 2590,
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 2584,
                                      "end": 2590
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 2591,
                                "end": 2599,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 2593,
                                  "end": 2599
                                }
                              }
                            },
                            {
                              "type": "TSConstructSignatureDeclaration",
                              "start": 2609,
                              "end": 2633,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 2614,
                                  "end": 2623,
                                  "name": "a",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 2615,
                                    "end": 2623,
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 2617,
                                      "end": 2623
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 2624,
                                "end": 2632,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 2626,
                                  "end": 2632
                                }
                              }
                            }
                          ]
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2640,
                    "end": 2647,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 2642,
                      "end": 2647,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 2642,
                        "end": 2645
                      }
                    }
                  }
                },
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 2653,
                  "end": 2741,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2658,
                      "end": 2732,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2659,
                        "end": 2732,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 2661,
                          "end": 2732,
                          "members": [
                            {
                              "type": "TSConstructSignatureDeclaration",
                              "start": 2671,
                              "end": 2697,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 2676,
                                  "end": 2686,
                                  "name": "a",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 2677,
                                    "end": 2686,
                                    "typeAnnotation": {
                                      "type": "TSBooleanKeyword",
                                      "start": 2679,
                                      "end": 2686
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 2687,
                                "end": 2696,
                                "typeAnnotation": {
                                  "type": "TSBooleanKeyword",
                                  "start": 2689,
                                  "end": 2696
                                }
                              }
                            },
                            {
                              "type": "TSConstructSignatureDeclaration",
                              "start": 2706,
                              "end": 2726,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 2711,
                                  "end": 2718,
                                  "name": "a",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 2712,
                                    "end": 2718,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 2714,
                                      "end": 2718,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 2714,
                                        "end": 2718,
                                        "name": "Date",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 2719,
                                "end": 2725,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 2721,
                                  "end": 2725,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2721,
                                    "end": 2725,
                                    "name": "Date",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          ]
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2733,
                    "end": 2740,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 2735,
                      "end": 2740,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 2735,
                        "end": 2738
                      }
                    }
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2744,
        "end": 2754,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 2746,
          "end": 2754,
          "exprName": {
            "type": "Identifier",
            "start": 2753,
            "end": 2754,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2756,
      "end": 2792,
      "id": {
        "type": "Identifier",
        "start": 2773,
        "end": 2778,
        "name": "foo18",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2779,
          "end": 2785,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2780,
            "end": 2785,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2782,
              "end": 2785
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2786,
        "end": 2791,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 2788,
          "end": 2791
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2794,
      "end": 2827,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2798,
          "end": 2826,
          "id": {
            "type": "Identifier",
            "start": 2798,
            "end": 2826,
            "name": "r1arg1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2804,
              "end": 2826,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2806,
                "end": 2826,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2810,
                  "end": 2813,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2811,
                      "end": 2812,
                      "name": {
                        "type": "Identifier",
                        "start": 2811,
                        "end": 2812,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2814,
                    "end": 2818,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2815,
                      "end": 2818,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2817,
                        "end": 2818,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2817,
                          "end": 2818,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2820,
                  "end": 2826,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 2823,
                    "end": 2826,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 2823,
                      "end": 2824,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2823,
                        "end": 2824,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2828,
      "end": 2868,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2832,
          "end": 2867,
          "id": {
            "type": "Identifier",
            "start": 2832,
            "end": 2867,
            "name": "r1arg2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2838,
              "end": 2867,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2840,
                "end": 2867,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2845,
                    "end": 2854,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2846,
                      "end": 2854,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2848,
                        "end": 2854
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2856,
                  "end": 2867,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 2859,
                    "end": 2867,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 2859,
                      "end": 2865
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2869,
      "end": 2891,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2873,
          "end": 2890,
          "id": {
            "type": "Identifier",
            "start": 2873,
            "end": 2875,
            "name": "r1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2878,
            "end": 2890,
            "callee": {
              "type": "Identifier",
              "start": 2878,
              "end": 2882,
              "name": "foo1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 2883,
                "end": 2889,
                "name": "r1arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2947,
      "end": 2974,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2951,
          "end": 2973,
          "id": {
            "type": "Identifier",
            "start": 2951,
            "end": 2954,
            "name": "r1a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 2957,
            "end": 2973,
            "elements": [
              {
                "type": "Identifier",
                "start": 2958,
                "end": 2964,
                "name": "r1arg2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 2966,
                "end": 2972,
                "name": "r1arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3024,
      "end": 3051,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3028,
          "end": 3050,
          "id": {
            "type": "Identifier",
            "start": 3028,
            "end": 3031,
            "name": "r1b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 3034,
            "end": 3050,
            "elements": [
              {
                "type": "Identifier",
                "start": 3035,
                "end": 3041,
                "name": "r1arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3043,
                "end": 3049,
                "name": "r1arg2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3102,
      "end": 3140,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3106,
          "end": 3139,
          "id": {
            "type": "Identifier",
            "start": 3106,
            "end": 3139,
            "name": "r2arg1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3112,
              "end": 3139,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 3114,
                "end": 3139,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 3118,
                  "end": 3121,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 3119,
                      "end": 3120,
                      "name": {
                        "type": "Identifier",
                        "start": 3119,
                        "end": 3120,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3122,
                    "end": 3126,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3123,
                      "end": 3126,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3125,
                        "end": 3126,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3125,
                          "end": 3126,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3128,
                  "end": 3139,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 3131,
                    "end": 3139,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 3131,
                      "end": 3137
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3141,
      "end": 3181,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3145,
          "end": 3180,
          "id": {
            "type": "Identifier",
            "start": 3145,
            "end": 3180,
            "name": "r2arg2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3151,
              "end": 3180,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 3153,
                "end": 3180,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3158,
                    "end": 3167,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3159,
                      "end": 3167,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3161,
                        "end": 3167
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3169,
                  "end": 3180,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 3172,
                    "end": 3180,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 3172,
                      "end": 3178
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3182,
      "end": 3204,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3186,
          "end": 3203,
          "id": {
            "type": "Identifier",
            "start": 3186,
            "end": 3188,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3191,
            "end": 3203,
            "callee": {
              "type": "Identifier",
              "start": 3191,
              "end": 3195,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 3196,
                "end": 3202,
                "name": "r2arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3205,
      "end": 3232,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3209,
          "end": 3231,
          "id": {
            "type": "Identifier",
            "start": 3209,
            "end": 3212,
            "name": "r2a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 3215,
            "end": 3231,
            "elements": [
              {
                "type": "Identifier",
                "start": 3216,
                "end": 3222,
                "name": "r2arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3224,
                "end": 3230,
                "name": "r2arg2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3233,
      "end": 3260,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3237,
          "end": 3259,
          "id": {
            "type": "Identifier",
            "start": 3237,
            "end": 3240,
            "name": "r2b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 3243,
            "end": 3259,
            "elements": [
              {
                "type": "Identifier",
                "start": 3244,
                "end": 3250,
                "name": "r2arg2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3252,
                "end": 3258,
                "name": "r2arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3262,
      "end": 3293,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3266,
          "end": 3292,
          "id": {
            "type": "Identifier",
            "start": 3266,
            "end": 3292,
            "name": "r3arg1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3272,
              "end": 3292,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 3274,
                "end": 3292,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 3278,
                  "end": 3281,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 3279,
                      "end": 3280,
                      "name": {
                        "type": "Identifier",
                        "start": 3279,
                        "end": 3280,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3282,
                    "end": 3286,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3283,
                      "end": 3286,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3285,
                        "end": 3286,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3285,
                          "end": 3286,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3288,
                  "end": 3292,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3291,
                    "end": 3292,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3291,
                      "end": 3292,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3294,
      "end": 3330,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3298,
          "end": 3329,
          "id": {
            "type": "Identifier",
            "start": 3298,
            "end": 3329,
            "name": "r3arg2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3304,
              "end": 3329,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 3306,
                "end": 3329,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3311,
                    "end": 3320,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3312,
                      "end": 3320,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3314,
                        "end": 3320
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3322,
                  "end": 3329,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 3325,
                    "end": 3329
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3331,
      "end": 3353,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3335,
          "end": 3352,
          "id": {
            "type": "Identifier",
            "start": 3335,
            "end": 3337,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3340,
            "end": 3352,
            "callee": {
              "type": "Identifier",
              "start": 3340,
              "end": 3344,
              "name": "foo3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 3345,
                "end": 3351,
                "name": "r3arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3354,
      "end": 3381,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3358,
          "end": 3380,
          "id": {
            "type": "Identifier",
            "start": 3358,
            "end": 3361,
            "name": "r3a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 3364,
            "end": 3380,
            "elements": [
              {
                "type": "Identifier",
                "start": 3365,
                "end": 3371,
                "name": "r3arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3373,
                "end": 3379,
                "name": "r3arg2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3382,
      "end": 3409,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3386,
          "end": 3408,
          "id": {
            "type": "Identifier",
            "start": 3386,
            "end": 3389,
            "name": "r3b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 3392,
            "end": 3408,
            "elements": [
              {
                "type": "Identifier",
                "start": 3393,
                "end": 3399,
                "name": "r3arg2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3401,
                "end": 3407,
                "name": "r3arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3411,
      "end": 3451,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3415,
          "end": 3450,
          "id": {
            "type": "Identifier",
            "start": 3415,
            "end": 3450,
            "name": "r4arg1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3421,
              "end": 3450,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 3423,
                "end": 3450,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 3427,
                  "end": 3433,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 3428,
                      "end": 3429,
                      "name": {
                        "type": "Identifier",
                        "start": 3428,
                        "end": 3429,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 3431,
                      "end": 3432,
                      "name": {
                        "type": "Identifier",
                        "start": 3431,
                        "end": 3432,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3434,
                    "end": 3438,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3435,
                      "end": 3438,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3437,
                        "end": 3438,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3437,
                          "end": 3438,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3440,
                    "end": 3444,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3441,
                      "end": 3444,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3443,
                        "end": 3444,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3443,
                          "end": 3444,
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3446,
                  "end": 3450,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3449,
                    "end": 3450,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3449,
                      "end": 3450,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3452,
      "end": 3501,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3456,
          "end": 3500,
          "id": {
            "type": "Identifier",
            "start": 3456,
            "end": 3500,
            "name": "r4arg2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3462,
              "end": 3500,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 3464,
                "end": 3500,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3469,
                    "end": 3478,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3470,
                      "end": 3478,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3472,
                        "end": 3478
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3480,
                    "end": 3489,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3481,
                      "end": 3489,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3483,
                        "end": 3489
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3491,
                  "end": 3500,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 3494,
                    "end": 3500
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3502,
      "end": 3524,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3506,
          "end": 3523,
          "id": {
            "type": "Identifier",
            "start": 3506,
            "end": 3508,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3511,
            "end": 3523,
            "callee": {
              "type": "Identifier",
              "start": 3511,
              "end": 3515,
              "name": "foo4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 3516,
                "end": 3522,
                "name": "r4arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3532,
      "end": 3559,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3536,
          "end": 3558,
          "id": {
            "type": "Identifier",
            "start": 3536,
            "end": 3539,
            "name": "r4a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 3542,
            "end": 3558,
            "elements": [
              {
                "type": "Identifier",
                "start": 3543,
                "end": 3549,
                "name": "r4arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3551,
                "end": 3557,
                "name": "r4arg2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3560,
      "end": 3587,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3564,
          "end": 3586,
          "id": {
            "type": "Identifier",
            "start": 3564,
            "end": 3567,
            "name": "r4b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 3570,
            "end": 3586,
            "elements": [
              {
                "type": "Identifier",
                "start": 3571,
                "end": 3577,
                "name": "r4arg2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3579,
                "end": 3585,
                "name": "r4arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3589,
      "end": 3639,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3593,
          "end": 3638,
          "id": {
            "type": "Identifier",
            "start": 3593,
            "end": 3638,
            "name": "r5arg1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3599,
              "end": 3638,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 3601,
                "end": 3638,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 3605,
                  "end": 3611,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 3606,
                      "end": 3607,
                      "name": {
                        "type": "Identifier",
                        "start": 3606,
                        "end": 3607,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 3609,
                      "end": 3610,
                      "name": {
                        "type": "Identifier",
                        "start": 3609,
                        "end": 3610,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3612,
                    "end": 3632,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3613,
                      "end": 3632,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 3615,
                        "end": 3632,
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 3620,
                            "end": 3626,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3623,
                              "end": 3626,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 3625,
                                "end": 3626,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3625,
                                  "end": 3626,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 3628,
                          "end": 3632,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3631,
                            "end": 3632,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3631,
                              "end": 3632,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3634,
                  "end": 3638,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3637,
                    "end": 3638,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3637,
                      "end": 3638,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3640,
      "end": 3699,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3644,
          "end": 3698,
          "id": {
            "type": "Identifier",
            "start": 3644,
            "end": 3698,
            "name": "r5arg2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3650,
              "end": 3698,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 3652,
                "end": 3698,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3657,
                    "end": 3687,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3658,
                      "end": 3687,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 3660,
                        "end": 3687,
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 3665,
                            "end": 3676,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3668,
                              "end": 3676,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 3670,
                                "end": 3676
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 3678,
                          "end": 3687,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 3681,
                            "end": 3687
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3689,
                  "end": 3698,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 3692,
                    "end": 3698
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3700,
      "end": 3722,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3704,
          "end": 3721,
          "id": {
            "type": "Identifier",
            "start": 3704,
            "end": 3706,
            "name": "r5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3709,
            "end": 3721,
            "callee": {
              "type": "Identifier",
              "start": 3709,
              "end": 3713,
              "name": "foo5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 3714,
                "end": 3720,
                "name": "r5arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3730,
      "end": 3757,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3734,
          "end": 3756,
          "id": {
            "type": "Identifier",
            "start": 3734,
            "end": 3737,
            "name": "r5a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 3740,
            "end": 3756,
            "elements": [
              {
                "type": "Identifier",
                "start": 3741,
                "end": 3747,
                "name": "r5arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3749,
                "end": 3755,
                "name": "r5arg2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3758,
      "end": 3785,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3762,
          "end": 3784,
          "id": {
            "type": "Identifier",
            "start": 3762,
            "end": 3765,
            "name": "r5b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 3768,
            "end": 3784,
            "elements": [
              {
                "type": "Identifier",
                "start": 3769,
                "end": 3775,
                "name": "r5arg2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3777,
                "end": 3783,
                "name": "r5arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3787,
      "end": 3866,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3791,
          "end": 3865,
          "id": {
            "type": "Identifier",
            "start": 3791,
            "end": 3865,
            "name": "r6arg1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3797,
              "end": 3865,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 3799,
                "end": 3865,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 3803,
                  "end": 3838,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 3804,
                      "end": 3818,
                      "name": {
                        "type": "Identifier",
                        "start": 3804,
                        "end": 3805,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 3814,
                        "end": 3818,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3814,
                          "end": 3818,
                          "name": "Base",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 3820,
                      "end": 3837,
                      "name": {
                        "type": "Identifier",
                        "start": 3820,
                        "end": 3821,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 3830,
                        "end": 3837,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3830,
                          "end": 3837,
                          "name": "Derived",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3839,
                    "end": 3859,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3840,
                      "end": 3859,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 3842,
                        "end": 3859,
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 3847,
                            "end": 3853,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3850,
                              "end": 3853,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 3852,
                                "end": 3853,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3852,
                                  "end": 3853,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 3855,
                          "end": 3859,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3858,
                            "end": 3859,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3858,
                              "end": 3859,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3861,
                  "end": 3865,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3864,
                    "end": 3865,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3864,
                      "end": 3865,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3867,
      "end": 3923,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3871,
          "end": 3922,
          "id": {
            "type": "Identifier",
            "start": 3871,
            "end": 3922,
            "name": "r6arg2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3877,
              "end": 3922,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 3879,
                "end": 3922,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3884,
                    "end": 3913,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3885,
                      "end": 3913,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 3887,
                        "end": 3913,
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 3892,
                            "end": 3901,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3895,
                              "end": 3901,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 3897,
                                "end": 3901,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3897,
                                  "end": 3901,
                                  "name": "Base",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 3903,
                          "end": 3913,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3906,
                            "end": 3913,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3906,
                              "end": 3913,
                              "name": "Derived",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3915,
                  "end": 3922,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3918,
                    "end": 3922,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3918,
                      "end": 3922,
                      "name": "Base",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3924,
      "end": 3946,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3928,
          "end": 3945,
          "id": {
            "type": "Identifier",
            "start": 3928,
            "end": 3930,
            "name": "r6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3933,
            "end": 3945,
            "callee": {
              "type": "Identifier",
              "start": 3933,
              "end": 3937,
              "name": "foo6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 3938,
                "end": 3944,
                "name": "r6arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3954,
      "end": 3981,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3958,
          "end": 3980,
          "id": {
            "type": "Identifier",
            "start": 3958,
            "end": 3961,
            "name": "r6a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 3964,
            "end": 3980,
            "elements": [
              {
                "type": "Identifier",
                "start": 3965,
                "end": 3971,
                "name": "r6arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3973,
                "end": 3979,
                "name": "r6arg2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3982,
      "end": 4009,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3986,
          "end": 4008,
          "id": {
            "type": "Identifier",
            "start": 3986,
            "end": 3989,
            "name": "r6b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 3992,
            "end": 4008,
            "elements": [
              {
                "type": "Identifier",
                "start": 3993,
                "end": 3999,
                "name": "r6arg2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4001,
                "end": 4007,
                "name": "r6arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4011,
      "end": 4104,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4015,
          "end": 4103,
          "id": {
            "type": "Identifier",
            "start": 4015,
            "end": 4103,
            "name": "r7arg1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4021,
              "end": 4103,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 4023,
                "end": 4103,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 4027,
                  "end": 4062,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 4028,
                      "end": 4042,
                      "name": {
                        "type": "Identifier",
                        "start": 4028,
                        "end": 4029,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 4038,
                        "end": 4042,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4038,
                          "end": 4042,
                          "name": "Base",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 4044,
                      "end": 4061,
                      "name": {
                        "type": "Identifier",
                        "start": 4044,
                        "end": 4045,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 4054,
                        "end": 4061,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4054,
                          "end": 4061,
                          "name": "Derived",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 4063,
                    "end": 4083,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4064,
                      "end": 4083,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 4066,
                        "end": 4083,
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 4071,
                            "end": 4077,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 4074,
                              "end": 4077,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 4076,
                                "end": 4077,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 4076,
                                  "end": 4077,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 4079,
                          "end": 4083,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4082,
                            "end": 4083,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4082,
                              "end": 4083,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 4085,
                  "end": 4103,
                  "typeAnnotation": {
                    "type": "TSConstructorType",
                    "start": 4088,
                    "end": 4103,
                    "abstract": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 4093,
                        "end": 4097,
                        "name": "r",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4094,
                          "end": 4097,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4096,
                            "end": 4097,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4096,
                              "end": 4097,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 4099,
                      "end": 4103,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4102,
                        "end": 4103,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4102,
                          "end": 4103,
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4105,
      "end": 4181,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4109,
          "end": 4180,
          "id": {
            "type": "Identifier",
            "start": 4109,
            "end": 4180,
            "name": "r7arg2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4115,
              "end": 4180,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 4117,
                "end": 4180,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 4122,
                    "end": 4151,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4123,
                      "end": 4151,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 4125,
                        "end": 4151,
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 4130,
                            "end": 4139,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 4133,
                              "end": 4139,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 4135,
                                "end": 4139,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 4135,
                                  "end": 4139,
                                  "name": "Base",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 4141,
                          "end": 4151,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4144,
                            "end": 4151,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4144,
                              "end": 4151,
                              "name": "Derived",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 4153,
                  "end": 4180,
                  "typeAnnotation": {
                    "type": "TSConstructorType",
                    "start": 4156,
                    "end": 4180,
                    "abstract": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 4161,
                        "end": 4168,
                        "name": "r",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4162,
                          "end": 4168,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4164,
                            "end": 4168,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4164,
                              "end": 4168,
                              "name": "Base",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 4170,
                      "end": 4180,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4173,
                        "end": 4180,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4173,
                          "end": 4180,
                          "name": "Derived",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4182,
      "end": 4204,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4186,
          "end": 4203,
          "id": {
            "type": "Identifier",
            "start": 4186,
            "end": 4188,
            "name": "r7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4191,
            "end": 4203,
            "callee": {
              "type": "Identifier",
              "start": 4191,
              "end": 4195,
              "name": "foo7",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 4196,
                "end": 4202,
                "name": "r7arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4212,
      "end": 4239,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4216,
          "end": 4238,
          "id": {
            "type": "Identifier",
            "start": 4216,
            "end": 4219,
            "name": "r7a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 4222,
            "end": 4238,
            "elements": [
              {
                "type": "Identifier",
                "start": 4223,
                "end": 4229,
                "name": "r7arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4231,
                "end": 4237,
                "name": "r7arg2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4240,
      "end": 4267,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4244,
          "end": 4266,
          "id": {
            "type": "Identifier",
            "start": 4244,
            "end": 4247,
            "name": "r7b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 4250,
            "end": 4266,
            "elements": [
              {
                "type": "Identifier",
                "start": 4251,
                "end": 4257,
                "name": "r7arg2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4259,
                "end": 4265,
                "name": "r7arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4269,
      "end": 4385,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4273,
          "end": 4384,
          "id": {
            "type": "Identifier",
            "start": 4273,
            "end": 4384,
            "name": "r8arg1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4279,
              "end": 4384,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 4281,
                "end": 4384,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 4285,
                  "end": 4320,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 4286,
                      "end": 4300,
                      "name": {
                        "type": "Identifier",
                        "start": 4286,
                        "end": 4287,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 4296,
                        "end": 4300,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4296,
                          "end": 4300,
                          "name": "Base",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 4302,
                      "end": 4319,
                      "name": {
                        "type": "Identifier",
                        "start": 4302,
                        "end": 4303,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 4312,
                        "end": 4319,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4312,
                          "end": 4319,
                          "name": "Derived",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 4321,
                    "end": 4341,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4322,
                      "end": 4341,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 4324,
                        "end": 4341,
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 4329,
                            "end": 4335,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 4332,
                              "end": 4335,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 4334,
                                "end": 4335,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 4334,
                                  "end": 4335,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 4337,
                          "end": 4341,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4340,
                            "end": 4341,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4340,
                              "end": 4341,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 4343,
                    "end": 4364,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4344,
                      "end": 4364,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 4346,
                        "end": 4364,
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 4351,
                            "end": 4358,
                            "name": "arg2",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 4355,
                              "end": 4358,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 4357,
                                "end": 4358,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 4357,
                                  "end": 4358,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 4360,
                          "end": 4364,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4363,
                            "end": 4364,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4363,
                              "end": 4364,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 4366,
                  "end": 4384,
                  "typeAnnotation": {
                    "type": "TSConstructorType",
                    "start": 4369,
                    "end": 4384,
                    "abstract": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 4374,
                        "end": 4378,
                        "name": "r",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4375,
                          "end": 4378,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4377,
                            "end": 4378,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4377,
                              "end": 4378,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 4380,
                      "end": 4384,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4383,
                        "end": 4384,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4383,
                          "end": 4384,
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4386,
      "end": 4494,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4390,
          "end": 4493,
          "id": {
            "type": "Identifier",
            "start": 4390,
            "end": 4493,
            "name": "r8arg2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4396,
              "end": 4493,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 4398,
                "end": 4493,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 4403,
                    "end": 4432,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4404,
                      "end": 4432,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 4406,
                        "end": 4432,
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 4411,
                            "end": 4420,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 4414,
                              "end": 4420,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 4416,
                                "end": 4420,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 4416,
                                  "end": 4420,
                                  "name": "Base",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 4422,
                          "end": 4432,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4425,
                            "end": 4432,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4425,
                              "end": 4432,
                              "name": "Derived",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 4434,
                    "end": 4464,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4435,
                      "end": 4464,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 4437,
                        "end": 4464,
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 4442,
                            "end": 4452,
                            "name": "arg2",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 4446,
                              "end": 4452,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 4448,
                                "end": 4452,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 4448,
                                  "end": 4452,
                                  "name": "Base",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 4454,
                          "end": 4464,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4457,
                            "end": 4464,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4457,
                              "end": 4464,
                              "name": "Derived",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 4466,
                  "end": 4493,
                  "typeAnnotation": {
                    "type": "TSConstructorType",
                    "start": 4469,
                    "end": 4493,
                    "abstract": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 4474,
                        "end": 4481,
                        "name": "r",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4475,
                          "end": 4481,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4477,
                            "end": 4481,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4477,
                              "end": 4481,
                              "name": "Base",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 4483,
                      "end": 4493,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4486,
                        "end": 4493,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4486,
                          "end": 4493,
                          "name": "Derived",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4495,
      "end": 4517,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4499,
          "end": 4516,
          "id": {
            "type": "Identifier",
            "start": 4499,
            "end": 4501,
            "name": "r8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4504,
            "end": 4516,
            "callee": {
              "type": "Identifier",
              "start": 4504,
              "end": 4508,
              "name": "foo8",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 4509,
                "end": 4515,
                "name": "r8arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4525,
      "end": 4552,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4529,
          "end": 4551,
          "id": {
            "type": "Identifier",
            "start": 4529,
            "end": 4532,
            "name": "r8a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 4535,
            "end": 4551,
            "elements": [
              {
                "type": "Identifier",
                "start": 4536,
                "end": 4542,
                "name": "r8arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4544,
                "end": 4550,
                "name": "r8arg2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4553,
      "end": 4580,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4557,
          "end": 4579,
          "id": {
            "type": "Identifier",
            "start": 4557,
            "end": 4560,
            "name": "r8b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 4563,
            "end": 4579,
            "elements": [
              {
                "type": "Identifier",
                "start": 4564,
                "end": 4570,
                "name": "r8arg2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4572,
                "end": 4578,
                "name": "r8arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4582,
      "end": 4722,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4586,
          "end": 4721,
          "id": {
            "type": "Identifier",
            "start": 4586,
            "end": 4721,
            "name": "r9arg1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4592,
              "end": 4721,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 4594,
                "end": 4721,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 4598,
                  "end": 4633,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 4599,
                      "end": 4613,
                      "name": {
                        "type": "Identifier",
                        "start": 4599,
                        "end": 4600,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 4609,
                        "end": 4613,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4609,
                          "end": 4613,
                          "name": "Base",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 4615,
                      "end": 4632,
                      "name": {
                        "type": "Identifier",
                        "start": 4615,
                        "end": 4616,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 4625,
                        "end": 4632,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4625,
                          "end": 4632,
                          "name": "Derived",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 4634,
                    "end": 4654,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4635,
                      "end": 4654,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 4637,
                        "end": 4654,
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 4642,
                            "end": 4648,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 4645,
                              "end": 4648,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 4647,
                                "end": 4648,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 4647,
                                  "end": 4648,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 4650,
                          "end": 4654,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4653,
                            "end": 4654,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4653,
                              "end": 4654,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 4656,
                    "end": 4701,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4657,
                      "end": 4701,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 4659,
                        "end": 4701,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 4660,
                            "end": 4695,
                            "name": "arg2",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 4664,
                              "end": 4695,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 4666,
                                "end": 4695,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 4668,
                                    "end": 4680,
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 4668,
                                      "end": 4671,
                                      "name": "foo",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 4671,
                                      "end": 4679,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 4673,
                                        "end": 4679
                                      }
                                    },
                                    "accessibility": null,
                                    "static": false
                                  },
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 4681,
                                    "end": 4693,
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 4681,
                                      "end": 4685,
                                      "name": "bing",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 4685,
                                      "end": 4693,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 4687,
                                        "end": 4693
                                      }
                                    },
                                    "accessibility": null,
                                    "static": false
                                  }
                                ]
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 4697,
                          "end": 4701,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4700,
                            "end": 4701,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4700,
                              "end": 4701,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 4703,
                  "end": 4721,
                  "typeAnnotation": {
                    "type": "TSConstructorType",
                    "start": 4706,
                    "end": 4721,
                    "abstract": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 4711,
                        "end": 4715,
                        "name": "r",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4712,
                          "end": 4715,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4714,
                            "end": 4715,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4714,
                              "end": 4715,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 4717,
                      "end": 4721,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4720,
                        "end": 4721,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4720,
                          "end": 4721,
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4723,
      "end": 4831,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4727,
          "end": 4830,
          "id": {
            "type": "Identifier",
            "start": 4727,
            "end": 4830,
            "name": "r9arg2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4733,
              "end": 4830,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 4735,
                "end": 4830,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 4740,
                    "end": 4769,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4741,
                      "end": 4769,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 4743,
                        "end": 4769,
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 4748,
                            "end": 4757,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 4751,
                              "end": 4757,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 4753,
                                "end": 4757,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 4753,
                                  "end": 4757,
                                  "name": "Base",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 4759,
                          "end": 4769,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4762,
                            "end": 4769,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4762,
                              "end": 4769,
                              "name": "Derived",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 4771,
                    "end": 4801,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4772,
                      "end": 4801,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 4774,
                        "end": 4801,
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 4779,
                            "end": 4789,
                            "name": "arg2",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 4783,
                              "end": 4789,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 4785,
                                "end": 4789,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 4785,
                                  "end": 4789,
                                  "name": "Base",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 4791,
                          "end": 4801,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4794,
                            "end": 4801,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4794,
                              "end": 4801,
                              "name": "Derived",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 4803,
                  "end": 4830,
                  "typeAnnotation": {
                    "type": "TSConstructorType",
                    "start": 4806,
                    "end": 4830,
                    "abstract": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 4811,
                        "end": 4818,
                        "name": "r",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4812,
                          "end": 4818,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4814,
                            "end": 4818,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4814,
                              "end": 4818,
                              "name": "Base",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 4820,
                      "end": 4830,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4823,
                        "end": 4830,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4823,
                          "end": 4830,
                          "name": "Derived",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4832,
      "end": 4854,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4836,
          "end": 4853,
          "id": {
            "type": "Identifier",
            "start": 4836,
            "end": 4838,
            "name": "r9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4841,
            "end": 4853,
            "callee": {
              "type": "Identifier",
              "start": 4841,
              "end": 4845,
              "name": "foo9",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 4846,
                "end": 4852,
                "name": "r9arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4862,
      "end": 4889,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4866,
          "end": 4888,
          "id": {
            "type": "Identifier",
            "start": 4866,
            "end": 4869,
            "name": "r9a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 4872,
            "end": 4888,
            "elements": [
              {
                "type": "Identifier",
                "start": 4873,
                "end": 4879,
                "name": "r9arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4881,
                "end": 4887,
                "name": "r9arg2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4890,
      "end": 4917,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4894,
          "end": 4916,
          "id": {
            "type": "Identifier",
            "start": 4894,
            "end": 4897,
            "name": "r9b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 4900,
            "end": 4916,
            "elements": [
              {
                "type": "Identifier",
                "start": 4901,
                "end": 4907,
                "name": "r9arg2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4909,
                "end": 4915,
                "name": "r9arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4919,
      "end": 4972,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4923,
          "end": 4971,
          "id": {
            "type": "Identifier",
            "start": 4923,
            "end": 4971,
            "name": "r10arg1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4930,
              "end": 4971,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 4932,
                "end": 4971,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 4936,
                  "end": 4955,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 4937,
                      "end": 4954,
                      "name": {
                        "type": "Identifier",
                        "start": 4937,
                        "end": 4938,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 4947,
                        "end": 4954,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4947,
                          "end": 4954,
                          "name": "Derived",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [
                  {
                    "type": "RestElement",
                    "start": 4956,
                    "end": 4965,
                    "argument": {
                      "type": "Identifier",
                      "start": 4959,
                      "end": 4960,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4960,
                      "end": 4965,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 4962,
                        "end": 4965,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 4962,
                          "end": 4963,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4962,
                            "end": 4963,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 4967,
                  "end": 4971,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4970,
                    "end": 4971,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4970,
                      "end": 4971,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4973,
      "end": 5019,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4977,
          "end": 5018,
          "id": {
            "type": "Identifier",
            "start": 4977,
            "end": 5018,
            "name": "r10arg2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4984,
              "end": 5018,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 4986,
                "end": 5018,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 4991,
                    "end": 5006,
                    "argument": {
                      "type": "Identifier",
                      "start": 4994,
                      "end": 4995,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4995,
                      "end": 5006,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 4997,
                        "end": 5006,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 4997,
                          "end": 5004,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4997,
                            "end": 5004,
                            "name": "Derived",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 5008,
                  "end": 5018,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 5011,
                    "end": 5018,
                    "typeName": {
                      "type": "Identifier",
                      "start": 5011,
                      "end": 5018,
                      "name": "Derived",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5020,
      "end": 5045,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5024,
          "end": 5044,
          "id": {
            "type": "Identifier",
            "start": 5024,
            "end": 5027,
            "name": "r10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5030,
            "end": 5044,
            "callee": {
              "type": "Identifier",
              "start": 5030,
              "end": 5035,
              "name": "foo10",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 5036,
                "end": 5043,
                "name": "r10arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5053,
      "end": 5083,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5057,
          "end": 5082,
          "id": {
            "type": "Identifier",
            "start": 5057,
            "end": 5061,
            "name": "r10a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 5064,
            "end": 5082,
            "elements": [
              {
                "type": "Identifier",
                "start": 5065,
                "end": 5072,
                "name": "r10arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5074,
                "end": 5081,
                "name": "r10arg2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5084,
      "end": 5114,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5088,
          "end": 5113,
          "id": {
            "type": "Identifier",
            "start": 5088,
            "end": 5092,
            "name": "r10b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 5095,
            "end": 5113,
            "elements": [
              {
                "type": "Identifier",
                "start": 5096,
                "end": 5103,
                "name": "r10arg2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5105,
                "end": 5112,
                "name": "r10arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5116,
      "end": 5167,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5120,
          "end": 5166,
          "id": {
            "type": "Identifier",
            "start": 5120,
            "end": 5166,
            "name": "r11arg1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5127,
              "end": 5166,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 5129,
                "end": 5166,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 5133,
                  "end": 5149,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 5134,
                      "end": 5148,
                      "name": {
                        "type": "Identifier",
                        "start": 5134,
                        "end": 5135,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 5144,
                        "end": 5148,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5144,
                          "end": 5148,
                          "name": "Base",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 5150,
                    "end": 5154,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5151,
                      "end": 5154,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5153,
                        "end": 5154,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5153,
                          "end": 5154,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 5156,
                    "end": 5160,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5157,
                      "end": 5160,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5159,
                        "end": 5160,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5159,
                          "end": 5160,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 5162,
                  "end": 5166,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 5165,
                    "end": 5166,
                    "typeName": {
                      "type": "Identifier",
                      "start": 5165,
                      "end": 5166,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5168,
      "end": 5247,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5172,
          "end": 5246,
          "id": {
            "type": "Identifier",
            "start": 5172,
            "end": 5246,
            "name": "r11arg2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5179,
              "end": 5246,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 5181,
                "end": 5246,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 5186,
                    "end": 5204,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5187,
                      "end": 5204,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 5189,
                        "end": 5204,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 5191,
                            "end": 5202,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 5191,
                              "end": 5194,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 5194,
                              "end": 5202,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 5196,
                                "end": 5202
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 5206,
                    "end": 5237,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5207,
                      "end": 5237,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 5209,
                        "end": 5237,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 5211,
                            "end": 5223,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 5211,
                              "end": 5214,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 5214,
                              "end": 5222,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 5216,
                                "end": 5222
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 5224,
                            "end": 5235,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 5224,
                              "end": 5227,
                              "name": "bar",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 5227,
                              "end": 5235,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 5229,
                                "end": 5235
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 5239,
                  "end": 5246,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 5242,
                    "end": 5246,
                    "typeName": {
                      "type": "Identifier",
                      "start": 5242,
                      "end": 5246,
                      "name": "Base",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5248,
      "end": 5273,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5252,
          "end": 5272,
          "id": {
            "type": "Identifier",
            "start": 5252,
            "end": 5255,
            "name": "r11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5258,
            "end": 5272,
            "callee": {
              "type": "Identifier",
              "start": 5258,
              "end": 5263,
              "name": "foo11",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 5264,
                "end": 5271,
                "name": "r11arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5281,
      "end": 5311,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5285,
          "end": 5310,
          "id": {
            "type": "Identifier",
            "start": 5285,
            "end": 5289,
            "name": "r11a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 5292,
            "end": 5310,
            "elements": [
              {
                "type": "Identifier",
                "start": 5293,
                "end": 5300,
                "name": "r11arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5302,
                "end": 5309,
                "name": "r11arg2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5312,
      "end": 5342,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5316,
          "end": 5341,
          "id": {
            "type": "Identifier",
            "start": 5316,
            "end": 5320,
            "name": "r11b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 5323,
            "end": 5341,
            "elements": [
              {
                "type": "Identifier",
                "start": 5324,
                "end": 5331,
                "name": "r11arg2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5333,
                "end": 5340,
                "name": "r11arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5344,
      "end": 5425,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5348,
          "end": 5424,
          "id": {
            "type": "Identifier",
            "start": 5348,
            "end": 5424,
            "name": "r12arg1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5355,
              "end": 5424,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 5357,
                "end": 5424,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 5361,
                  "end": 5384,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 5362,
                      "end": 5383,
                      "name": {
                        "type": "Identifier",
                        "start": 5362,
                        "end": 5363,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 5372,
                        "end": 5383,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5372,
                          "end": 5377,
                          "name": "Array",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 5377,
                          "end": 5383,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 5378,
                              "end": 5382,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5378,
                                "end": 5382,
                                "name": "Base",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 5385,
                    "end": 5399,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5386,
                      "end": 5399,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5388,
                        "end": 5399,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5388,
                          "end": 5393,
                          "name": "Array",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 5393,
                          "end": 5399,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 5394,
                              "end": 5398,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5394,
                                "end": 5398,
                                "name": "Base",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 5401,
                    "end": 5405,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5402,
                      "end": 5405,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5404,
                        "end": 5405,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5404,
                          "end": 5405,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 5407,
                  "end": 5424,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 5410,
                    "end": 5424,
                    "typeName": {
                      "type": "Identifier",
                      "start": 5410,
                      "end": 5415,
                      "name": "Array",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 5415,
                      "end": 5424,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 5416,
                          "end": 5423,
                          "typeName": {
                            "type": "Identifier",
                            "start": 5416,
                            "end": 5423,
                            "name": "Derived",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5426,
      "end": 5498,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5430,
          "end": 5497,
          "id": {
            "type": "Identifier",
            "start": 5430,
            "end": 5497,
            "name": "r12arg2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5437,
              "end": 5497,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 5439,
                "end": 5497,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 5444,
                    "end": 5458,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5445,
                      "end": 5458,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5447,
                        "end": 5458,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5447,
                          "end": 5452,
                          "name": "Array",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 5452,
                          "end": 5458,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 5453,
                              "end": 5457,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5453,
                                "end": 5457,
                                "name": "Base",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 5460,
                    "end": 5478,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5461,
                      "end": 5478,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5463,
                        "end": 5478,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5463,
                          "end": 5468,
                          "name": "Array",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 5468,
                          "end": 5478,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 5469,
                              "end": 5477,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5469,
                                "end": 5477,
                                "name": "Derived2",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 5480,
                  "end": 5497,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 5483,
                    "end": 5497,
                    "typeName": {
                      "type": "Identifier",
                      "start": 5483,
                      "end": 5488,
                      "name": "Array",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 5488,
                      "end": 5497,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 5489,
                          "end": 5496,
                          "typeName": {
                            "type": "Identifier",
                            "start": 5489,
                            "end": 5496,
                            "name": "Derived",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5499,
      "end": 5524,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5503,
          "end": 5523,
          "id": {
            "type": "Identifier",
            "start": 5503,
            "end": 5506,
            "name": "r12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5509,
            "end": 5523,
            "callee": {
              "type": "Identifier",
              "start": 5509,
              "end": 5514,
              "name": "foo12",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 5515,
                "end": 5522,
                "name": "r12arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5532,
      "end": 5562,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5536,
          "end": 5561,
          "id": {
            "type": "Identifier",
            "start": 5536,
            "end": 5540,
            "name": "r12a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 5543,
            "end": 5561,
            "elements": [
              {
                "type": "Identifier",
                "start": 5544,
                "end": 5551,
                "name": "r12arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5553,
                "end": 5560,
                "name": "r12arg2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5563,
      "end": 5593,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5567,
          "end": 5592,
          "id": {
            "type": "Identifier",
            "start": 5567,
            "end": 5571,
            "name": "r12b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 5574,
            "end": 5592,
            "elements": [
              {
                "type": "Identifier",
                "start": 5575,
                "end": 5582,
                "name": "r12arg2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5584,
                "end": 5591,
                "name": "r12arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5595,
      "end": 5666,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5599,
          "end": 5665,
          "id": {
            "type": "Identifier",
            "start": 5599,
            "end": 5665,
            "name": "r13arg1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5606,
              "end": 5665,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 5608,
                "end": 5665,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 5612,
                  "end": 5638,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 5613,
                      "end": 5637,
                      "name": {
                        "type": "Identifier",
                        "start": 5613,
                        "end": 5614,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 5623,
                        "end": 5637,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5623,
                          "end": 5628,
                          "name": "Array",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 5628,
                          "end": 5637,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 5629,
                              "end": 5636,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5629,
                                "end": 5636,
                                "name": "Derived",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 5639,
                    "end": 5653,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5640,
                      "end": 5653,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5642,
                        "end": 5653,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5642,
                          "end": 5647,
                          "name": "Array",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 5647,
                          "end": 5653,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 5648,
                              "end": 5652,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5648,
                                "end": 5652,
                                "name": "Base",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 5655,
                    "end": 5659,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5656,
                      "end": 5659,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5658,
                        "end": 5659,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5658,
                          "end": 5659,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 5661,
                  "end": 5665,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 5664,
                    "end": 5665,
                    "typeName": {
                      "type": "Identifier",
                      "start": 5664,
                      "end": 5665,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5667,
      "end": 5738,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5671,
          "end": 5737,
          "id": {
            "type": "Identifier",
            "start": 5671,
            "end": 5737,
            "name": "r13arg2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5678,
              "end": 5737,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 5680,
                "end": 5737,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 5685,
                    "end": 5699,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5686,
                      "end": 5699,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5688,
                        "end": 5699,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5688,
                          "end": 5693,
                          "name": "Array",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 5693,
                          "end": 5699,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 5694,
                              "end": 5698,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5694,
                                "end": 5698,
                                "name": "Base",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 5701,
                    "end": 5718,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5702,
                      "end": 5718,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5704,
                        "end": 5718,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5704,
                          "end": 5709,
                          "name": "Array",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 5709,
                          "end": 5718,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 5710,
                              "end": 5717,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5710,
                                "end": 5717,
                                "name": "Derived",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 5720,
                  "end": 5737,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 5723,
                    "end": 5737,
                    "typeName": {
                      "type": "Identifier",
                      "start": 5723,
                      "end": 5728,
                      "name": "Array",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 5728,
                      "end": 5737,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 5729,
                          "end": 5736,
                          "typeName": {
                            "type": "Identifier",
                            "start": 5729,
                            "end": 5736,
                            "name": "Derived",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5739,
      "end": 5764,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5743,
          "end": 5763,
          "id": {
            "type": "Identifier",
            "start": 5743,
            "end": 5746,
            "name": "r13",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5749,
            "end": 5763,
            "callee": {
              "type": "Identifier",
              "start": 5749,
              "end": 5754,
              "name": "foo13",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 5755,
                "end": 5762,
                "name": "r13arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5772,
      "end": 5802,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5776,
          "end": 5801,
          "id": {
            "type": "Identifier",
            "start": 5776,
            "end": 5780,
            "name": "r13a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 5783,
            "end": 5801,
            "elements": [
              {
                "type": "Identifier",
                "start": 5784,
                "end": 5791,
                "name": "r13arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5793,
                "end": 5800,
                "name": "r13arg2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5803,
      "end": 5833,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5807,
          "end": 5832,
          "id": {
            "type": "Identifier",
            "start": 5807,
            "end": 5811,
            "name": "r13b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 5814,
            "end": 5832,
            "elements": [
              {
                "type": "Identifier",
                "start": 5815,
                "end": 5822,
                "name": "r13arg2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5824,
                "end": 5831,
                "name": "r13arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5835,
      "end": 5880,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5839,
          "end": 5879,
          "id": {
            "type": "Identifier",
            "start": 5839,
            "end": 5879,
            "name": "r14arg1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5846,
              "end": 5879,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 5848,
                "end": 5879,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 5852,
                  "end": 5855,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 5853,
                      "end": 5854,
                      "name": {
                        "type": "Identifier",
                        "start": 5853,
                        "end": 5854,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 5856,
                    "end": 5873,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5857,
                      "end": 5873,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 5859,
                        "end": 5873,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 5861,
                            "end": 5866,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 5861,
                              "end": 5862,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 5862,
                              "end": 5865,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 5864,
                                "end": 5865,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 5864,
                                  "end": 5865,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 5867,
                            "end": 5871,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 5867,
                              "end": 5868,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 5868,
                              "end": 5871,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 5870,
                                "end": 5871,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 5870,
                                  "end": 5871,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 5875,
                  "end": 5879,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 5878,
                    "end": 5879,
                    "typeName": {
                      "type": "Identifier",
                      "start": 5878,
                      "end": 5879,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5881,
      "end": 5938,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5885,
          "end": 5937,
          "id": {
            "type": "Identifier",
            "start": 5885,
            "end": 5937,
            "name": "r14arg2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5892,
              "end": 5937,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 5894,
                "end": 5937,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 5899,
                    "end": 5926,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5900,
                      "end": 5926,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 5902,
                        "end": 5926,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 5904,
                            "end": 5914,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 5904,
                              "end": 5905,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 5905,
                              "end": 5913,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 5907,
                                "end": 5913
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 5915,
                            "end": 5924,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 5915,
                              "end": 5916,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 5916,
                              "end": 5924,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 5918,
                                "end": 5924
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 5928,
                  "end": 5937,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 5931,
                    "end": 5937,
                    "typeName": {
                      "type": "Identifier",
                      "start": 5931,
                      "end": 5937,
                      "name": "Object",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5939,
      "end": 5964,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5943,
          "end": 5963,
          "id": {
            "type": "Identifier",
            "start": 5943,
            "end": 5946,
            "name": "r14",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5949,
            "end": 5963,
            "callee": {
              "type": "Identifier",
              "start": 5949,
              "end": 5954,
              "name": "foo14",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 5955,
                "end": 5962,
                "name": "r14arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5972,
      "end": 6002,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5976,
          "end": 6001,
          "id": {
            "type": "Identifier",
            "start": 5976,
            "end": 5980,
            "name": "r14a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 5983,
            "end": 6001,
            "elements": [
              {
                "type": "Identifier",
                "start": 5984,
                "end": 5991,
                "name": "r14arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5993,
                "end": 6000,
                "name": "r14arg2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6003,
      "end": 6033,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6007,
          "end": 6032,
          "id": {
            "type": "Identifier",
            "start": 6007,
            "end": 6011,
            "name": "r14b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 6014,
            "end": 6032,
            "elements": [
              {
                "type": "Identifier",
                "start": 6015,
                "end": 6022,
                "name": "r14arg2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6024,
                "end": 6031,
                "name": "r14arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6035,
      "end": 6069,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6039,
          "end": 6068,
          "id": {
            "type": "Identifier",
            "start": 6039,
            "end": 6068,
            "name": "r15arg1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6046,
              "end": 6068,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 6048,
                "end": 6068,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 6052,
                  "end": 6055,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 6053,
                      "end": 6054,
                      "name": {
                        "type": "Identifier",
                        "start": 6053,
                        "end": 6054,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 6056,
                    "end": 6060,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6057,
                      "end": 6060,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 6059,
                        "end": 6060,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6059,
                          "end": 6060,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 6062,
                  "end": 6068,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 6065,
                    "end": 6068,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 6065,
                      "end": 6066,
                      "typeName": {
                        "type": "Identifier",
                        "start": 6065,
                        "end": 6066,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6070,
      "end": 6095,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6074,
          "end": 6094,
          "id": {
            "type": "Identifier",
            "start": 6074,
            "end": 6077,
            "name": "r15",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6080,
            "end": 6094,
            "callee": {
              "type": "Identifier",
              "start": 6080,
              "end": 6085,
              "name": "foo15",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 6086,
                "end": 6093,
                "name": "r15arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6103,
      "end": 6155,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6107,
          "end": 6154,
          "id": {
            "type": "Identifier",
            "start": 6107,
            "end": 6154,
            "name": "r16arg1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6114,
              "end": 6154,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 6116,
                "end": 6154,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 6120,
                  "end": 6136,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 6121,
                      "end": 6135,
                      "name": {
                        "type": "Identifier",
                        "start": 6121,
                        "end": 6122,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 6131,
                        "end": 6135,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6131,
                          "end": 6135,
                          "name": "Base",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 6137,
                    "end": 6141,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6138,
                      "end": 6141,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 6140,
                        "end": 6141,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6140,
                          "end": 6141,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 6143,
                  "end": 6154,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 6146,
                    "end": 6154,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 6146,
                      "end": 6152
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6156,
      "end": 6181,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6160,
          "end": 6180,
          "id": {
            "type": "Identifier",
            "start": 6160,
            "end": 6163,
            "name": "r16",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6166,
            "end": 6180,
            "callee": {
              "type": "Identifier",
              "start": 6166,
              "end": 6171,
              "name": "foo16",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 6172,
                "end": 6179,
                "name": "r16arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6182,
      "end": 6226,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6186,
          "end": 6225,
          "id": {
            "type": "Identifier",
            "start": 6186,
            "end": 6225,
            "name": "r17arg1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6193,
              "end": 6225,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 6195,
                "end": 6225,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 6199,
                  "end": 6202,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 6200,
                      "end": 6201,
                      "name": {
                        "type": "Identifier",
                        "start": 6200,
                        "end": 6201,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 6203,
                    "end": 6217,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6204,
                      "end": 6217,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 6206,
                        "end": 6217,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 6207,
                            "end": 6211,
                            "name": "a",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 6208,
                              "end": 6211,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 6210,
                                "end": 6211,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 6210,
                                  "end": 6211,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 6213,
                          "end": 6217,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 6216,
                            "end": 6217,
                            "typeName": {
                              "type": "Identifier",
                              "start": 6216,
                              "end": 6217,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 6219,
                  "end": 6225,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 6222,
                    "end": 6225,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 6222,
                      "end": 6223,
                      "typeName": {
                        "type": "Identifier",
                        "start": 6222,
                        "end": 6223,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6227,
      "end": 6252,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6231,
          "end": 6251,
          "id": {
            "type": "Identifier",
            "start": 6231,
            "end": 6234,
            "name": "r17",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6237,
            "end": 6251,
            "callee": {
              "type": "Identifier",
              "start": 6237,
              "end": 6242,
              "name": "foo17",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 6243,
                "end": 6250,
                "name": "r17arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6260,
      "end": 6304,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6264,
          "end": 6303,
          "id": {
            "type": "Identifier",
            "start": 6264,
            "end": 6303,
            "name": "r18arg1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6271,
              "end": 6303,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 6273,
                "end": 6303,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 6277,
                  "end": 6280,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 6278,
                      "end": 6279,
                      "name": {
                        "type": "Identifier",
                        "start": 6278,
                        "end": 6279,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 6281,
                    "end": 6295,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6282,
                      "end": 6295,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 6284,
                        "end": 6295,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 6285,
                            "end": 6289,
                            "name": "a",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 6286,
                              "end": 6289,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 6288,
                                "end": 6289,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 6288,
                                  "end": 6289,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 6291,
                          "end": 6295,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 6294,
                            "end": 6295,
                            "typeName": {
                              "type": "Identifier",
                              "start": 6294,
                              "end": 6295,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 6297,
                  "end": 6303,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 6300,
                    "end": 6303,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 6300,
                      "end": 6301,
                      "typeName": {
                        "type": "Identifier",
                        "start": 6300,
                        "end": 6301,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6305,
      "end": 6330,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6309,
          "end": 6329,
          "id": {
            "type": "Identifier",
            "start": 6309,
            "end": 6312,
            "name": "r18",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6315,
            "end": 6329,
            "callee": {
              "type": "Identifier",
              "start": 6315,
              "end": 6320,
              "name": "foo18",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 6321,
                "end": 6328,
                "name": "r18arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
