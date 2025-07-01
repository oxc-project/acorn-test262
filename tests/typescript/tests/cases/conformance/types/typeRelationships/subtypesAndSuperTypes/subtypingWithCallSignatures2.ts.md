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
                      "start": 302,
                      "end": 308
                    },
                    "start": 300,
                    "end": 308
                  },
                  "start": 299,
                  "end": 308
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 313,
                    "end": 319
                  },
                  "start": 313,
                  "end": 321
                },
                "start": 310,
                "end": 321
              },
              "start": 298,
              "end": 321
            },
            "start": 296,
            "end": 321
          },
          "start": 295,
          "end": 321
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
            "start": 331,
            "end": 332
          },
          "typeArguments": null,
          "start": 324,
          "end": 332
        },
        "start": 322,
        "end": 332
      },
      "body": null,
      "expression": false,
      "start": 273,
      "end": 333
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 351,
        "end": 355
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
              "start": 359,
              "end": 362
            },
            "start": 357,
            "end": 362
          },
          "start": 356,
          "end": 362
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 365,
          "end": 368
        },
        "start": 363,
        "end": 368
      },
      "body": null,
      "expression": false,
      "start": 334,
      "end": 369
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
          "name": "a",
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
                      "start": 400,
                      "end": 406
                    },
                    "start": 398,
                    "end": 406
                  },
                  "start": 397,
                  "end": 406
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 411,
                    "end": 417
                  },
                  "start": 411,
                  "end": 419
                },
                "start": 408,
                "end": 419
              },
              "start": 396,
              "end": 419
            },
            "start": 394,
            "end": 419
          },
          "start": 393,
          "end": 419
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
            "start": 429,
            "end": 430
          },
          "typeArguments": null,
          "start": 422,
          "end": 430
        },
        "start": 420,
        "end": 430
      },
      "body": null,
      "expression": false,
      "start": 371,
      "end": 431
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 449,
        "end": 453
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
              "start": 457,
              "end": 460
            },
            "start": 455,
            "end": 460
          },
          "start": 454,
          "end": 460
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 463,
          "end": 466
        },
        "start": 461,
        "end": 466
      },
      "body": null,
      "expression": false,
      "start": 432,
      "end": 467
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 486,
        "end": 490
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
                      "start": 498,
                      "end": 504
                    },
                    "start": 496,
                    "end": 504
                  },
                  "start": 495,
                  "end": 504
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 509,
                  "end": 513
                },
                "start": 506,
                "end": 513
              },
              "start": 494,
              "end": 513
            },
            "start": 492,
            "end": 513
          },
          "start": 491,
          "end": 513
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
            "start": 523,
            "end": 524
          },
          "typeArguments": null,
          "start": 516,
          "end": 524
        },
        "start": 514,
        "end": 524
      },
      "body": null,
      "expression": false,
      "start": 469,
      "end": 525
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 543,
        "end": 547
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
              "start": 551,
              "end": 554
            },
            "start": 549,
            "end": 554
          },
          "start": 548,
          "end": 554
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 557,
          "end": 560
        },
        "start": 555,
        "end": 560
      },
      "body": null,
      "expression": false,
      "start": 526,
      "end": 561
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 580,
        "end": 584
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
                      "type": "TSStringKeyword",
                      "start": 592,
                      "end": 598
                    },
                    "start": 590,
                    "end": 598
                  },
                  "start": 589,
                  "end": 598
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
                      "start": 603,
                      "end": 609
                    },
                    "start": 601,
                    "end": 609
                  },
                  "start": 600,
                  "end": 609
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 614,
                  "end": 620
                },
                "start": 611,
                "end": 620
              },
              "start": 588,
              "end": 620
            },
            "start": 586,
            "end": 620
          },
          "start": 585,
          "end": 620
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
            "start": 630,
            "end": 631
          },
          "typeArguments": null,
          "start": 623,
          "end": 631
        },
        "start": 621,
        "end": 631
      },
      "body": null,
      "expression": false,
      "start": 563,
      "end": 632
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 650,
        "end": 654
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
              "start": 658,
              "end": 661
            },
            "start": 656,
            "end": 661
          },
          "start": 655,
          "end": 661
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 664,
          "end": 667
        },
        "start": 662,
        "end": 667
      },
      "body": null,
      "expression": false,
      "start": 633,
      "end": 668
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 687,
        "end": 691
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
                              "type": "TSStringKeyword",
                              "start": 705,
                              "end": 711
                            },
                            "start": 703,
                            "end": 711
                          },
                          "start": 700,
                          "end": 711
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 716,
                          "end": 722
                        },
                        "start": 713,
                        "end": 722
                      },
                      "start": 699,
                      "end": 722
                    },
                    "start": 697,
                    "end": 722
                  },
                  "start": 696,
                  "end": 722
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 727,
                  "end": 733
                },
                "start": 724,
                "end": 733
              },
              "start": 695,
              "end": 733
            },
            "start": 693,
            "end": 733
          },
          "start": 692,
          "end": 733
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
            "start": 743,
            "end": 744
          },
          "typeArguments": null,
          "start": 736,
          "end": 744
        },
        "start": 734,
        "end": 744
      },
      "body": null,
      "expression": false,
      "start": 670,
      "end": 745
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 763,
        "end": 767
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
              "start": 771,
              "end": 774
            },
            "start": 769,
            "end": 774
          },
          "start": 768,
          "end": 774
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 777,
          "end": 780
        },
        "start": 775,
        "end": 780
      },
      "body": null,
      "expression": false,
      "start": 746,
      "end": 781
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 800,
        "end": 804
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
                                "start": 818,
                                "end": 822
                              },
                              "typeArguments": null,
                              "start": 818,
                              "end": 822
                            },
                            "start": 816,
                            "end": 822
                          },
                          "start": 813,
                          "end": 822
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
                            "start": 827,
                            "end": 834
                          },
                          "typeArguments": null,
                          "start": 827,
                          "end": 834
                        },
                        "start": 824,
                        "end": 834
                      },
                      "start": 812,
                      "end": 834
                    },
                    "start": 810,
                    "end": 834
                  },
                  "start": 809,
                  "end": 834
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
                    "start": 839,
                    "end": 843
                  },
                  "typeArguments": null,
                  "start": 839,
                  "end": 843
                },
                "start": 836,
                "end": 843
              },
              "start": 808,
              "end": 843
            },
            "start": 806,
            "end": 843
          },
          "start": 805,
          "end": 843
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
            "start": 853,
            "end": 854
          },
          "typeArguments": null,
          "start": 846,
          "end": 854
        },
        "start": 844,
        "end": 854
      },
      "body": null,
      "expression": false,
      "start": 783,
      "end": 855
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 873,
        "end": 877
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
              "start": 881,
              "end": 884
            },
            "start": 879,
            "end": 884
          },
          "start": 878,
          "end": 884
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 887,
          "end": 890
        },
        "start": 885,
        "end": 890
      },
      "body": null,
      "expression": false,
      "start": 856,
      "end": 891
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 910,
        "end": 914
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
                                "start": 928,
                                "end": 932
                              },
                              "typeArguments": null,
                              "start": 928,
                              "end": 932
                            },
                            "start": 926,
                            "end": 932
                          },
                          "start": 923,
                          "end": 932
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
                            "start": 937,
                            "end": 944
                          },
                          "typeArguments": null,
                          "start": 937,
                          "end": 944
                        },
                        "start": 934,
                        "end": 944
                      },
                      "start": 922,
                      "end": 944
                    },
                    "start": 920,
                    "end": 944
                  },
                  "start": 919,
                  "end": 944
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
                            "start": 953,
                            "end": 957
                          },
                          "typeArguments": null,
                          "start": 953,
                          "end": 957
                        },
                        "start": 951,
                        "end": 957
                      },
                      "start": 950,
                      "end": 957
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
                        "start": 962,
                        "end": 969
                      },
                      "typeArguments": null,
                      "start": 962,
                      "end": 969
                    },
                    "start": 959,
                    "end": 969
                  },
                  "start": 949,
                  "end": 969
                },
                "start": 946,
                "end": 969
              },
              "start": 918,
              "end": 969
            },
            "start": 916,
            "end": 969
          },
          "start": 915,
          "end": 969
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
            "start": 979,
            "end": 980
          },
          "typeArguments": null,
          "start": 972,
          "end": 980
        },
        "start": 970,
        "end": 980
      },
      "body": null,
      "expression": false,
      "start": 893,
      "end": 981
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 999,
        "end": 1003
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
              "start": 1007,
              "end": 1010
            },
            "start": 1005,
            "end": 1010
          },
          "start": 1004,
          "end": 1010
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1013,
          "end": 1016
        },
        "start": 1011,
        "end": 1016
      },
      "body": null,
      "expression": false,
      "start": 982,
      "end": 1017
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1036,
        "end": 1040
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
                                "start": 1054,
                                "end": 1058
                              },
                              "typeArguments": null,
                              "start": 1054,
                              "end": 1058
                            },
                            "start": 1052,
                            "end": 1058
                          },
                          "start": 1049,
                          "end": 1058
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
                            "start": 1063,
                            "end": 1070
                          },
                          "typeArguments": null,
                          "start": 1063,
                          "end": 1070
                        },
                        "start": 1060,
                        "end": 1070
                      },
                      "start": 1048,
                      "end": 1070
                    },
                    "start": 1046,
                    "end": 1070
                  },
                  "start": 1045,
                  "end": 1070
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
                                "start": 1082,
                                "end": 1086
                              },
                              "typeArguments": null,
                              "start": 1082,
                              "end": 1086
                            },
                            "start": 1080,
                            "end": 1086
                          },
                          "start": 1076,
                          "end": 1086
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
                            "start": 1091,
                            "end": 1098
                          },
                          "typeArguments": null,
                          "start": 1091,
                          "end": 1098
                        },
                        "start": 1088,
                        "end": 1098
                      },
                      "start": 1075,
                      "end": 1098
                    },
                    "start": 1073,
                    "end": 1098
                  },
                  "start": 1072,
                  "end": 1098
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
                            "start": 1107,
                            "end": 1111
                          },
                          "typeArguments": null,
                          "start": 1107,
                          "end": 1111
                        },
                        "start": 1105,
                        "end": 1111
                      },
                      "start": 1104,
                      "end": 1111
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
                        "start": 1116,
                        "end": 1123
                      },
                      "typeArguments": null,
                      "start": 1116,
                      "end": 1123
                    },
                    "start": 1113,
                    "end": 1123
                  },
                  "start": 1103,
                  "end": 1123
                },
                "start": 1100,
                "end": 1123
              },
              "start": 1044,
              "end": 1123
            },
            "start": 1042,
            "end": 1123
          },
          "start": 1041,
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1133,
            "end": 1134
          },
          "typeArguments": null,
          "start": 1126,
          "end": 1134
        },
        "start": 1124,
        "end": 1134
      },
      "body": null,
      "expression": false,
      "start": 1019,
      "end": 1135
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1153,
        "end": 1157
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
              "start": 1161,
              "end": 1164
            },
            "start": 1159,
            "end": 1164
          },
          "start": 1158,
          "end": 1164
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1167,
          "end": 1170
        },
        "start": 1165,
        "end": 1170
      },
      "body": null,
      "expression": false,
      "start": 1136,
      "end": 1171
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1190,
        "end": 1194
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
                                "start": 1208,
                                "end": 1212
                              },
                              "typeArguments": null,
                              "start": 1208,
                              "end": 1212
                            },
                            "start": 1206,
                            "end": 1212
                          },
                          "start": 1203,
                          "end": 1212
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
                            "start": 1217,
                            "end": 1224
                          },
                          "typeArguments": null,
                          "start": 1217,
                          "end": 1224
                        },
                        "start": 1214,
                        "end": 1224
                      },
                      "start": 1202,
                      "end": 1224
                    },
                    "start": 1200,
                    "end": 1224
                  },
                  "start": 1199,
                  "end": 1224
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
                                "start": 1236,
                                "end": 1240
                              },
                              "typeArguments": null,
                              "start": 1236,
                              "end": 1240
                            },
                            "start": 1234,
                            "end": 1240
                          },
                          "start": 1230,
                          "end": 1240
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
                            "start": 1245,
                            "end": 1252
                          },
                          "typeArguments": null,
                          "start": 1245,
                          "end": 1252
                        },
                        "start": 1242,
                        "end": 1252
                      },
                      "start": 1229,
                      "end": 1252
                    },
                    "start": 1227,
                    "end": 1252
                  },
                  "start": 1226,
                  "end": 1252
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
                            "start": 1261,
                            "end": 1265
                          },
                          "typeArguments": null,
                          "start": 1261,
                          "end": 1265
                        },
                        "start": 1259,
                        "end": 1265
                      },
                      "start": 1258,
                      "end": 1265
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
                        "start": 1270,
                        "end": 1277
                      },
                      "typeArguments": null,
                      "start": 1270,
                      "end": 1277
                    },
                    "start": 1267,
                    "end": 1277
                  },
                  "start": 1257,
                  "end": 1277
                },
                "start": 1254,
                "end": 1277
              },
              "start": 1198,
              "end": 1277
            },
            "start": 1196,
            "end": 1277
          },
          "start": 1195,
          "end": 1277
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
            "start": 1287,
            "end": 1288
          },
          "typeArguments": null,
          "start": 1280,
          "end": 1288
        },
        "start": 1278,
        "end": 1288
      },
      "body": null,
      "expression": false,
      "start": 1173,
      "end": 1289
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1307,
        "end": 1311
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
              "start": 1315,
              "end": 1318
            },
            "start": 1313,
            "end": 1318
          },
          "start": 1312,
          "end": 1318
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1321,
          "end": 1324
        },
        "start": 1319,
        "end": 1324
      },
      "body": null,
      "expression": false,
      "start": 1290,
      "end": 1325
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1344,
        "end": 1349
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
                    "start": 1357,
                    "end": 1358
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
                          "start": 1360,
                          "end": 1367
                        },
                        "typeArguments": null,
                        "start": 1360,
                        "end": 1367
                      },
                      "start": 1360,
                      "end": 1369
                    },
                    "start": 1358,
                    "end": 1369
                  },
                  "value": null,
                  "start": 1354,
                  "end": 1369
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
                    "start": 1374,
                    "end": 1381
                  },
                  "typeArguments": null,
                  "start": 1374,
                  "end": 1381
                },
                "start": 1371,
                "end": 1381
              },
              "start": 1353,
              "end": 1381
            },
            "start": 1351,
            "end": 1381
          },
          "start": 1350,
          "end": 1381
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
            "start": 1391,
            "end": 1392
          },
          "typeArguments": null,
          "start": 1384,
          "end": 1392
        },
        "start": 1382,
        "end": 1392
      },
      "body": null,
      "expression": false,
      "start": 1327,
      "end": 1393
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1411,
        "end": 1416
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
              "start": 1420,
              "end": 1423
            },
            "start": 1418,
            "end": 1423
          },
          "start": 1417,
          "end": 1423
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1426,
          "end": 1429
        },
        "start": 1424,
        "end": 1429
      },
      "body": null,
      "expression": false,
      "start": 1394,
      "end": 1430
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1449,
        "end": 1454
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
                            "start": 1464,
                            "end": 1467
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1469,
                              "end": 1475
                            },
                            "start": 1467,
                            "end": 1475
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1464,
                          "end": 1475
                        }
                      ],
                      "start": 1462,
                      "end": 1477
                    },
                    "start": 1460,
                    "end": 1477
                  },
                  "start": 1459,
                  "end": 1477
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
                            "start": 1484,
                            "end": 1487
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1489,
                              "end": 1495
                            },
                            "start": 1487,
                            "end": 1495
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1484,
                          "end": 1496
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
                            "start": 1497,
                            "end": 1500
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1502,
                              "end": 1508
                            },
                            "start": 1500,
                            "end": 1508
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1497,
                          "end": 1508
                        }
                      ],
                      "start": 1482,
                      "end": 1510
                    },
                    "start": 1480,
                    "end": 1510
                  },
                  "start": 1479,
                  "end": 1510
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
                    "start": 1515,
                    "end": 1519
                  },
                  "typeArguments": null,
                  "start": 1515,
                  "end": 1519
                },
                "start": 1512,
                "end": 1519
              },
              "start": 1458,
              "end": 1519
            },
            "start": 1456,
            "end": 1519
          },
          "start": 1455,
          "end": 1519
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
            "start": 1529,
            "end": 1530
          },
          "typeArguments": null,
          "start": 1522,
          "end": 1530
        },
        "start": 1520,
        "end": 1530
      },
      "body": null,
      "expression": false,
      "start": 1432,
      "end": 1531
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1549,
        "end": 1554
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
              "start": 1558,
              "end": 1561
            },
            "start": 1556,
            "end": 1561
          },
          "start": 1555,
          "end": 1561
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1564,
          "end": 1567
        },
        "start": 1562,
        "end": 1567
      },
      "body": null,
      "expression": false,
      "start": 1532,
      "end": 1568
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1587,
        "end": 1592
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
                        "start": 1600,
                        "end": 1605
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
                              "start": 1606,
                              "end": 1610
                            },
                            "typeArguments": null,
                            "start": 1606,
                            "end": 1610
                          }
                        ],
                        "start": 1605,
                        "end": 1611
                      },
                      "start": 1600,
                      "end": 1611
                    },
                    "start": 1598,
                    "end": 1611
                  },
                  "start": 1597,
                  "end": 1611
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
                        "start": 1616,
                        "end": 1621
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
                              "start": 1622,
                              "end": 1630
                            },
                            "typeArguments": null,
                            "start": 1622,
                            "end": 1630
                          }
                        ],
                        "start": 1621,
                        "end": 1631
                      },
                      "start": 1616,
                      "end": 1631
                    },
                    "start": 1614,
                    "end": 1631
                  },
                  "start": 1613,
                  "end": 1631
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
                    "start": 1636,
                    "end": 1641
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
                          "start": 1642,
                          "end": 1649
                        },
                        "typeArguments": null,
                        "start": 1642,
                        "end": 1649
                      }
                    ],
                    "start": 1641,
                    "end": 1650
                  },
                  "start": 1636,
                  "end": 1650
                },
                "start": 1633,
                "end": 1650
              },
              "start": 1596,
              "end": 1650
            },
            "start": 1594,
            "end": 1650
          },
          "start": 1593,
          "end": 1650
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
            "start": 1660,
            "end": 1661
          },
          "typeArguments": null,
          "start": 1653,
          "end": 1661
        },
        "start": 1651,
        "end": 1661
      },
      "body": null,
      "expression": false,
      "start": 1570,
      "end": 1662
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1680,
        "end": 1685
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
              "start": 1689,
              "end": 1692
            },
            "start": 1687,
            "end": 1692
          },
          "start": 1686,
          "end": 1692
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1695,
          "end": 1698
        },
        "start": 1693,
        "end": 1698
      },
      "body": null,
      "expression": false,
      "start": 1663,
      "end": 1699
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1718,
        "end": 1723
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
                        "start": 1731,
                        "end": 1736
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
                              "start": 1737,
                              "end": 1741
                            },
                            "typeArguments": null,
                            "start": 1737,
                            "end": 1741
                          }
                        ],
                        "start": 1736,
                        "end": 1742
                      },
                      "start": 1731,
                      "end": 1742
                    },
                    "start": 1729,
                    "end": 1742
                  },
                  "start": 1728,
                  "end": 1742
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
                        "start": 1747,
                        "end": 1752
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
                              "start": 1753,
                              "end": 1760
                            },
                            "typeArguments": null,
                            "start": 1753,
                            "end": 1760
                          }
                        ],
                        "start": 1752,
                        "end": 1761
                      },
                      "start": 1747,
                      "end": 1761
                    },
                    "start": 1745,
                    "end": 1761
                  },
                  "start": 1744,
                  "end": 1761
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
                    "start": 1766,
                    "end": 1771
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
                          "start": 1772,
                          "end": 1779
                        },
                        "typeArguments": null,
                        "start": 1772,
                        "end": 1779
                      }
                    ],
                    "start": 1771,
                    "end": 1780
                  },
                  "start": 1766,
                  "end": 1780
                },
                "start": 1763,
                "end": 1780
              },
              "start": 1727,
              "end": 1780
            },
            "start": 1725,
            "end": 1780
          },
          "start": 1724,
          "end": 1780
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
            "start": 1790,
            "end": 1791
          },
          "typeArguments": null,
          "start": 1783,
          "end": 1791
        },
        "start": 1781,
        "end": 1791
      },
      "body": null,
      "expression": false,
      "start": 1701,
      "end": 1792
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1810,
        "end": 1815
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
              "start": 1819,
              "end": 1822
            },
            "start": 1817,
            "end": 1822
          },
          "start": 1816,
          "end": 1822
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1825,
          "end": 1828
        },
        "start": 1823,
        "end": 1828
      },
      "body": null,
      "expression": false,
      "start": 1793,
      "end": 1829
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1848,
        "end": 1853
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
                            "start": 1863,
                            "end": 1864
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1866,
                              "end": 1872
                            },
                            "start": 1864,
                            "end": 1872
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1863,
                          "end": 1873
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
                            "start": 1874,
                            "end": 1875
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1877,
                              "end": 1883
                            },
                            "start": 1875,
                            "end": 1883
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1874,
                          "end": 1883
                        }
                      ],
                      "start": 1861,
                      "end": 1885
                    },
                    "start": 1859,
                    "end": 1885
                  },
                  "start": 1858,
                  "end": 1885
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
                    "start": 1890,
                    "end": 1896
                  },
                  "typeArguments": null,
                  "start": 1890,
                  "end": 1896
                },
                "start": 1887,
                "end": 1896
              },
              "start": 1857,
              "end": 1896
            },
            "start": 1855,
            "end": 1896
          },
          "start": 1854,
          "end": 1896
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
            "start": 1906,
            "end": 1907
          },
          "typeArguments": null,
          "start": 1899,
          "end": 1907
        },
        "start": 1897,
        "end": 1907
      },
      "body": null,
      "expression": false,
      "start": 1831,
      "end": 1908
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1926,
        "end": 1931
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
              "start": 1935,
              "end": 1938
            },
            "start": 1933,
            "end": 1938
          },
          "start": 1932,
          "end": 1938
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1941,
          "end": 1944
        },
        "start": 1939,
        "end": 1944
      },
      "body": null,
      "expression": false,
      "start": 1909,
      "end": 1945
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 1964,
        "end": 1969
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
                          "type": "TSNumberKeyword",
                          "start": 1984,
                          "end": 1990
                        },
                        "start": 1982,
                        "end": 1990
                      },
                      "start": 1981,
                      "end": 1990
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 1993,
                        "end": 1999
                      },
                      "start": 1993,
                      "end": 2001
                    },
                    "start": 1991,
                    "end": 2001
                  },
                  "start": 1980,
                  "end": 2002
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
                          "type": "TSStringKeyword",
                          "start": 2011,
                          "end": 2017
                        },
                        "start": 2009,
                        "end": 2017
                      },
                      "start": 2008,
                      "end": 2017
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 2020,
                        "end": 2026
                      },
                      "start": 2020,
                      "end": 2028
                    },
                    "start": 2018,
                    "end": 2028
                  },
                  "start": 2007,
                  "end": 2029
                }
              ],
              "start": 1973,
              "end": 2032
            },
            "start": 1971,
            "end": 2032
          },
          "start": 1970,
          "end": 2032
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
            "start": 2042,
            "end": 2043
          },
          "typeArguments": null,
          "start": 2035,
          "end": 2043
        },
        "start": 2033,
        "end": 2043
      },
      "body": null,
      "expression": false,
      "start": 1947,
      "end": 2044
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2062,
        "end": 2067
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
              "start": 2071,
              "end": 2074
            },
            "start": 2069,
            "end": 2074
          },
          "start": 2068,
          "end": 2074
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 2077,
          "end": 2080
        },
        "start": 2075,
        "end": 2080
      },
      "body": null,
      "expression": false,
      "start": 2045,
      "end": 2081
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null,
        "start": 2100,
        "end": 2105
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
                          "start": 2116,
                          "end": 2117
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2126,
                            "end": 2133
                          },
                          "typeArguments": null,
                          "start": 2126,
                          "end": 2133
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 2116,
                        "end": 2133
                      }
                    ],
                    "start": 2115,
                    "end": 2134
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
                            "start": 2138,
                            "end": 2139
                          },
                          "typeArguments": null,
                          "start": 2138,
                          "end": 2139
                        },
                        "start": 2136,
                        "end": 2139
                      },
                      "start": 2135,
                      "end": 2139
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 2142,
                        "end": 2148
                      },
                      "start": 2142,
                      "end": 2150
                    },
                    "start": 2140,
                    "end": 2150
                  },
                  "start": 2115,
                  "end": 2151
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
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2157,
                          "end": 2158
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Base",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2167,
                            "end": 2171
                          },
                          "typeArguments": null,
                          "start": 2167,
                          "end": 2171
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 2157,
                        "end": 2171
                      }
                    ],
                    "start": 2156,
                    "end": 2172
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
                            "start": 2176,
                            "end": 2177
                          },
                          "typeArguments": null,
                          "start": 2176,
                          "end": 2177
                        },
                        "start": 2174,
                        "end": 2177
                      },
                      "start": 2173,
                      "end": 2177
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 2180,
                        "end": 2186
                      },
                      "start": 2180,
                      "end": 2188
                    },
                    "start": 2178,
                    "end": 2188
                  },
                  "start": 2156,
                  "end": 2189
                }
              ],
              "start": 2109,
              "end": 2191
            },
            "start": 2107,
            "end": 2191
          },
          "start": 2106,
          "end": 2191
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
            "start": 2201,
            "end": 2202
          },
          "typeArguments": null,
          "start": 2194,
          "end": 2202
        },
        "start": 2192,
        "end": 2202
      },
      "body": null,
      "expression": false,
      "start": 2083,
      "end": 2203
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null,
        "start": 2221,
        "end": 2226
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
              "start": 2230,
              "end": 2233
            },
            "start": 2228,
            "end": 2233
          },
          "start": 2227,
          "end": 2233
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 2236,
          "end": 2239
        },
        "start": 2234,
        "end": 2239
      },
      "body": null,
      "expression": false,
      "start": 2204,
      "end": 2240
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo17",
        "optional": false,
        "typeAnnotation": null,
        "start": 2259,
        "end": 2264
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
                                  "start": 2282,
                                  "end": 2288
                                },
                                "start": 2280,
                                "end": 2288
                              },
                              "start": 2279,
                              "end": 2288
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2293,
                              "end": 2299
                            },
                            "start": 2290,
                            "end": 2299
                          },
                          "start": 2278,
                          "end": 2299
                        },
                        "start": 2276,
                        "end": 2299
                      },
                      "start": 2275,
                      "end": 2299
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 2302,
                        "end": 2308
                      },
                      "start": 2302,
                      "end": 2310
                    },
                    "start": 2300,
                    "end": 2310
                  },
                  "start": 2274,
                  "end": 2311
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
                                  "start": 2324,
                                  "end": 2330
                                },
                                "start": 2322,
                                "end": 2330
                              },
                              "start": 2321,
                              "end": 2330
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2335,
                              "end": 2341
                            },
                            "start": 2332,
                            "end": 2341
                          },
                          "start": 2320,
                          "end": 2341
                        },
                        "start": 2318,
                        "end": 2341
                      },
                      "start": 2317,
                      "end": 2341
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 2344,
                        "end": 2350
                      },
                      "start": 2344,
                      "end": 2352
                    },
                    "start": 2342,
                    "end": 2352
                  },
                  "start": 2316,
                  "end": 2353
                }
              ],
              "start": 2268,
              "end": 2355
            },
            "start": 2266,
            "end": 2355
          },
          "start": 2265,
          "end": 2355
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
            "start": 2365,
            "end": 2366
          },
          "typeArguments": null,
          "start": 2358,
          "end": 2366
        },
        "start": 2356,
        "end": 2366
      },
      "body": null,
      "expression": false,
      "start": 2242,
      "end": 2367
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo17",
        "optional": false,
        "typeAnnotation": null,
        "start": 2385,
        "end": 2390
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
              "start": 2394,
              "end": 2397
            },
            "start": 2392,
            "end": 2397
          },
          "start": 2391,
          "end": 2397
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 2400,
          "end": 2403
        },
        "start": 2398,
        "end": 2403
      },
      "body": null,
      "expression": false,
      "start": 2368,
      "end": 2404
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo18",
        "optional": false,
        "typeAnnotation": null,
        "start": 2423,
        "end": 2428
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
                                      "start": 2456,
                                      "end": 2462
                                    },
                                    "start": 2454,
                                    "end": 2462
                                  },
                                  "start": 2453,
                                  "end": 2462
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 2465,
                                  "end": 2471
                                },
                                "start": 2463,
                                "end": 2471
                              },
                              "start": 2452,
                              "end": 2472
                            },
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
                                      "type": "TSStringKeyword",
                                      "start": 2485,
                                      "end": 2491
                                    },
                                    "start": 2483,
                                    "end": 2491
                                  },
                                  "start": 2482,
                                  "end": 2491
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 2494,
                                  "end": 2500
                                },
                                "start": 2492,
                                "end": 2500
                              },
                              "start": 2481,
                              "end": 2501
                            }
                          ],
                          "start": 2442,
                          "end": 2507
                        },
                        "start": 2440,
                        "end": 2507
                      },
                      "start": 2439,
                      "end": 2507
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 2510,
                        "end": 2513
                      },
                      "start": 2510,
                      "end": 2515
                    },
                    "start": 2508,
                    "end": 2515
                  },
                  "start": 2438,
                  "end": 2516
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
                                      "start": 2539,
                                      "end": 2546
                                    },
                                    "start": 2537,
                                    "end": 2546
                                  },
                                  "start": 2536,
                                  "end": 2546
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSBooleanKeyword",
                                  "start": 2549,
                                  "end": 2556
                                },
                                "start": 2547,
                                "end": 2556
                              },
                              "start": 2535,
                              "end": 2557
                            },
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
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Date",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2570,
                                        "end": 2574
                                      },
                                      "typeArguments": null,
                                      "start": 2570,
                                      "end": 2574
                                    },
                                    "start": 2568,
                                    "end": 2574
                                  },
                                  "start": 2567,
                                  "end": 2574
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
                                    "start": 2577,
                                    "end": 2581
                                  },
                                  "typeArguments": null,
                                  "start": 2577,
                                  "end": 2581
                                },
                                "start": 2575,
                                "end": 2581
                              },
                              "start": 2566,
                              "end": 2582
                            }
                          ],
                          "start": 2525,
                          "end": 2588
                        },
                        "start": 2523,
                        "end": 2588
                      },
                      "start": 2522,
                      "end": 2588
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 2591,
                        "end": 2594
                      },
                      "start": 2591,
                      "end": 2596
                    },
                    "start": 2589,
                    "end": 2596
                  },
                  "start": 2521,
                  "end": 2597
                }
              ],
              "start": 2432,
              "end": 2599
            },
            "start": 2430,
            "end": 2599
          },
          "start": 2429,
          "end": 2599
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
            "start": 2609,
            "end": 2610
          },
          "typeArguments": null,
          "start": 2602,
          "end": 2610
        },
        "start": 2600,
        "end": 2610
      },
      "body": null,
      "expression": false,
      "start": 2406,
      "end": 2611
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo18",
        "optional": false,
        "typeAnnotation": null,
        "start": 2629,
        "end": 2634
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
              "start": 2638,
              "end": 2641
            },
            "start": 2636,
            "end": 2641
          },
          "start": 2635,
          "end": 2641
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 2644,
          "end": 2647
        },
        "start": 2642,
        "end": 2647
      },
      "body": null,
      "expression": false,
      "start": 2612,
      "end": 2648
    },
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
            "typeAnnotation": null,
            "start": 2654,
            "end": 2660
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
                    "start": 2664,
                    "end": 2665
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2664,
                  "end": 2665
                }
              ],
              "start": 2663,
              "end": 2666
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
                      "start": 2670,
                      "end": 2671
                    },
                    "typeArguments": null,
                    "start": 2670,
                    "end": 2671
                  },
                  "start": 2668,
                  "end": 2671
                },
                "start": 2667,
                "end": 2671
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2677,
                  "end": 2678
                }
              ],
              "start": 2676,
              "end": 2679
            },
            "id": null,
            "generator": false,
            "start": 2663,
            "end": 2679
          },
          "definite": false,
          "start": 2654,
          "end": 2679
        }
      ],
      "declare": false,
      "start": 2650,
      "end": 2680
    },
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
            "typeAnnotation": null,
            "start": 2685,
            "end": 2691
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
                    "type": "TSNumberKeyword",
                    "start": 2698,
                    "end": 2704
                  },
                  "start": 2696,
                  "end": 2704
                },
                "start": 2695,
                "end": 2704
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2710,
                  "end": 2711
                }
              ],
              "start": 2709,
              "end": 2712
            },
            "id": null,
            "generator": false,
            "start": 2694,
            "end": 2712
          },
          "definite": false,
          "start": 2685,
          "end": 2712
        }
      ],
      "declare": false,
      "start": 2681,
      "end": 2713
    },
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
            "start": 2718,
            "end": 2720
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2723,
              "end": 2727
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r1arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2728,
                "end": 2734
              }
            ],
            "optional": false,
            "start": 2723,
            "end": 2735
          },
          "definite": false,
          "start": 2718,
          "end": 2735
        }
      ],
      "declare": false,
      "start": 2714,
      "end": 2736
    },
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
            "start": 2796,
            "end": 2799
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
                "start": 2803,
                "end": 2809
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r1arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2811,
                "end": 2817
              }
            ],
            "start": 2802,
            "end": 2818
          },
          "definite": false,
          "start": 2796,
          "end": 2818
        }
      ],
      "declare": false,
      "start": 2792,
      "end": 2819
    },
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
            "start": 2873,
            "end": 2876
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
                "start": 2880,
                "end": 2886
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r1arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2888,
                "end": 2894
              }
            ],
            "start": 2879,
            "end": 2895
          },
          "definite": false,
          "start": 2873,
          "end": 2895
        }
      ],
      "declare": false,
      "start": 2869,
      "end": 2896
    },
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
            "typeAnnotation": null,
            "start": 2951,
            "end": 2957
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
                    "start": 2961,
                    "end": 2962
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2961,
                  "end": 2962
                }
              ],
              "start": 2960,
              "end": 2963
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
                      "start": 2967,
                      "end": 2968
                    },
                    "typeArguments": null,
                    "start": 2967,
                    "end": 2968
                  },
                  "start": 2965,
                  "end": 2968
                },
                "start": 2964,
                "end": 2968
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
                  "start": 2974,
                  "end": 2976
                }
              ],
              "start": 2973,
              "end": 2977
            },
            "id": null,
            "generator": false,
            "start": 2960,
            "end": 2977
          },
          "definite": false,
          "start": 2951,
          "end": 2977
        }
      ],
      "declare": false,
      "start": 2947,
      "end": 2978
    },
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
            "start": 2983,
            "end": 2989
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
                    "type": "TSNumberKeyword",
                    "start": 2996,
                    "end": 3002
                  },
                  "start": 2994,
                  "end": 3002
                },
                "start": 2993,
                "end": 3002
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
                  "start": 3008,
                  "end": 3010
                }
              ],
              "start": 3007,
              "end": 3011
            },
            "id": null,
            "generator": false,
            "start": 2992,
            "end": 3011
          },
          "definite": false,
          "start": 2983,
          "end": 3011
        }
      ],
      "declare": false,
      "start": 2979,
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3017,
            "end": 3019
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3022,
              "end": 3026
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r2arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3027,
                "end": 3033
              }
            ],
            "optional": false,
            "start": 3022,
            "end": 3034
          },
          "definite": false,
          "start": 3017,
          "end": 3034
        }
      ],
      "declare": false,
      "start": 3013,
      "end": 3035
    },
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
            "start": 3041,
            "end": 3044
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
                "start": 3048,
                "end": 3054
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r2arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3056,
                "end": 3062
              }
            ],
            "start": 3047,
            "end": 3063
          },
          "definite": false,
          "start": 3041,
          "end": 3063
        }
      ],
      "declare": false,
      "start": 3037,
      "end": 3064
    },
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
            "start": 3069,
            "end": 3072
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
                "start": 3076,
                "end": 3082
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r2arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3084,
                "end": 3090
              }
            ],
            "start": 3075,
            "end": 3091
          },
          "definite": false,
          "start": 3069,
          "end": 3091
        }
      ],
      "declare": false,
      "start": 3065,
      "end": 3092
    },
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
            "typeAnnotation": null,
            "start": 3098,
            "end": 3104
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
                    "start": 3108,
                    "end": 3109
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3108,
                  "end": 3109
                }
              ],
              "start": 3107,
              "end": 3110
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
                      "start": 3114,
                      "end": 3115
                    },
                    "typeArguments": null,
                    "start": 3114,
                    "end": 3115
                  },
                  "start": 3112,
                  "end": 3115
                },
                "start": 3111,
                "end": 3115
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 3120,
              "end": 3121
            },
            "id": null,
            "generator": false,
            "start": 3107,
            "end": 3121
          },
          "definite": false,
          "start": 3098,
          "end": 3121
        }
      ],
      "declare": false,
      "start": 3094,
      "end": 3122
    },
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
            "start": 3127,
            "end": 3133
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
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
                    "start": 3140,
                    "end": 3146
                  },
                  "start": 3138,
                  "end": 3146
                },
                "start": 3137,
                "end": 3146
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 3151,
              "end": 3154
            },
            "id": null,
            "generator": false,
            "start": 3136,
            "end": 3154
          },
          "definite": false,
          "start": 3127,
          "end": 3154
        }
      ],
      "declare": false,
      "start": 3123,
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 3160,
            "end": 3162
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 3165,
              "end": 3169
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r3arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3170,
                "end": 3176
              }
            ],
            "optional": false,
            "start": 3165,
            "end": 3177
          },
          "definite": false,
          "start": 3160,
          "end": 3177
        }
      ],
      "declare": false,
      "start": 3156,
      "end": 3178
    },
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
            "start": 3184,
            "end": 3187
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
                "start": 3191,
                "end": 3197
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r3arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3199,
                "end": 3205
              }
            ],
            "start": 3190,
            "end": 3206
          },
          "definite": false,
          "start": 3184,
          "end": 3206
        }
      ],
      "declare": false,
      "start": 3180,
      "end": 3207
    },
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
            "start": 3212,
            "end": 3215
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
                "start": 3219,
                "end": 3225
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r3arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3227,
                "end": 3233
              }
            ],
            "start": 3218,
            "end": 3234
          },
          "definite": false,
          "start": 3212,
          "end": 3234
        }
      ],
      "declare": false,
      "start": 3208,
      "end": 3235
    },
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
            "typeAnnotation": null,
            "start": 3241,
            "end": 3247
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
                    "start": 3251,
                    "end": 3252
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3251,
                  "end": 3252
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3254,
                    "end": 3255
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3254,
                  "end": 3255
                }
              ],
              "start": 3250,
              "end": 3256
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
                      "start": 3260,
                      "end": 3261
                    },
                    "typeArguments": null,
                    "start": 3260,
                    "end": 3261
                  },
                  "start": 3258,
                  "end": 3261
                },
                "start": 3257,
                "end": 3261
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
                      "start": 3266,
                      "end": 3267
                    },
                    "typeArguments": null,
                    "start": 3266,
                    "end": 3267
                  },
                  "start": 3264,
                  "end": 3267
                },
                "start": 3263,
                "end": 3267
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 3272,
              "end": 3273
            },
            "id": null,
            "generator": false,
            "start": 3250,
            "end": 3273
          },
          "definite": false,
          "start": 3241,
          "end": 3273
        }
      ],
      "declare": false,
      "start": 3237,
      "end": 3274
    },
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
            "start": 3279,
            "end": 3285
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
                    "type": "TSStringKeyword",
                    "start": 3292,
                    "end": 3298
                  },
                  "start": 3290,
                  "end": 3298
                },
                "start": 3289,
                "end": 3298
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
                    "start": 3303,
                    "end": 3309
                  },
                  "start": 3301,
                  "end": 3309
                },
                "start": 3300,
                "end": 3309
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 3314,
              "end": 3316
            },
            "id": null,
            "generator": false,
            "start": 3288,
            "end": 3316
          },
          "definite": false,
          "start": 3279,
          "end": 3316
        }
      ],
      "declare": false,
      "start": 3275,
      "end": 3317
    },
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
            "start": 3322,
            "end": 3324
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null,
              "start": 3327,
              "end": 3331
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r4arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3332,
                "end": 3338
              }
            ],
            "optional": false,
            "start": 3327,
            "end": 3339
          },
          "definite": false,
          "start": 3322,
          "end": 3339
        }
      ],
      "declare": false,
      "start": 3318,
      "end": 3340
    },
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
            "start": 3352,
            "end": 3355
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
                "start": 3359,
                "end": 3365
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r4arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3367,
                "end": 3373
              }
            ],
            "start": 3358,
            "end": 3374
          },
          "definite": false,
          "start": 3352,
          "end": 3374
        }
      ],
      "declare": false,
      "start": 3348,
      "end": 3375
    },
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
            "start": 3380,
            "end": 3383
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
                "start": 3387,
                "end": 3393
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r4arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3395,
                "end": 3401
              }
            ],
            "start": 3386,
            "end": 3402
          },
          "definite": false,
          "start": 3380,
          "end": 3402
        }
      ],
      "declare": false,
      "start": 3376,
      "end": 3403
    },
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
            "typeAnnotation": null,
            "start": 3409,
            "end": 3415
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
                    "start": 3419,
                    "end": 3420
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3419,
                  "end": 3420
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3422,
                    "end": 3423
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3422,
                  "end": 3423
                }
              ],
              "start": 3418,
              "end": 3424
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
                              "start": 3434,
                              "end": 3435
                            },
                            "typeArguments": null,
                            "start": 3434,
                            "end": 3435
                          },
                          "start": 3432,
                          "end": 3435
                        },
                        "start": 3429,
                        "end": 3435
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
                          "start": 3440,
                          "end": 3441
                        },
                        "typeArguments": null,
                        "start": 3440,
                        "end": 3441
                      },
                      "start": 3437,
                      "end": 3441
                    },
                    "start": 3428,
                    "end": 3441
                  },
                  "start": 3426,
                  "end": 3441
                },
                "start": 3425,
                "end": 3441
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
                  "start": 3447,
                  "end": 3448
                },
                "typeArguments": null,
                "start": 3447,
                "end": 3448
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 3449,
                "end": 3453
              },
              "start": 3446,
              "end": 3453
            },
            "id": null,
            "generator": false,
            "start": 3418,
            "end": 3453
          },
          "definite": false,
          "start": 3409,
          "end": 3453
        }
      ],
      "declare": false,
      "start": 3405,
      "end": 3454
    },
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
            "start": 3459,
            "end": 3465
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
                            "type": "TSStringKeyword",
                            "start": 3478,
                            "end": 3484
                          },
                          "start": 3476,
                          "end": 3484
                        },
                        "start": 3473,
                        "end": 3484
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3489,
                        "end": 3495
                      },
                      "start": 3486,
                      "end": 3495
                    },
                    "start": 3472,
                    "end": 3495
                  },
                  "start": 3470,
                  "end": 3495
                },
                "start": 3469,
                "end": 3495
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 3500,
              "end": 3502
            },
            "id": null,
            "generator": false,
            "start": 3468,
            "end": 3502
          },
          "definite": false,
          "start": 3459,
          "end": 3502
        }
      ],
      "declare": false,
      "start": 3455,
      "end": 3503
    },
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
            "start": 3508,
            "end": 3510
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo5",
              "optional": false,
              "typeAnnotation": null,
              "start": 3513,
              "end": 3517
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r5arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3518,
                "end": 3524
              }
            ],
            "optional": false,
            "start": 3513,
            "end": 3525
          },
          "definite": false,
          "start": 3508,
          "end": 3525
        }
      ],
      "declare": false,
      "start": 3504,
      "end": 3526
    },
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
            "start": 3538,
            "end": 3541
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
                "start": 3545,
                "end": 3551
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r5arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3553,
                "end": 3559
              }
            ],
            "start": 3544,
            "end": 3560
          },
          "definite": false,
          "start": 3538,
          "end": 3560
        }
      ],
      "declare": false,
      "start": 3534,
      "end": 3561
    },
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
            "start": 3566,
            "end": 3569
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
                "start": 3573,
                "end": 3579
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r5arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3581,
                "end": 3587
              }
            ],
            "start": 3572,
            "end": 3588
          },
          "definite": false,
          "start": 3566,
          "end": 3588
        }
      ],
      "declare": false,
      "start": 3562,
      "end": 3589
    },
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
            "typeAnnotation": null,
            "start": 3595,
            "end": 3601
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
                    "start": 3605,
                    "end": 3606
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3615,
                      "end": 3619
                    },
                    "typeArguments": null,
                    "start": 3615,
                    "end": 3619
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3605,
                  "end": 3619
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3621,
                    "end": 3622
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3631,
                      "end": 3638
                    },
                    "typeArguments": null,
                    "start": 3631,
                    "end": 3638
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3621,
                  "end": 3638
                }
              ],
              "start": 3604,
              "end": 3639
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
                              "start": 3649,
                              "end": 3650
                            },
                            "typeArguments": null,
                            "start": 3649,
                            "end": 3650
                          },
                          "start": 3647,
                          "end": 3650
                        },
                        "start": 3644,
                        "end": 3650
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
                          "start": 3655,
                          "end": 3656
                        },
                        "typeArguments": null,
                        "start": 3655,
                        "end": 3656
                      },
                      "start": 3652,
                      "end": 3656
                    },
                    "start": 3643,
                    "end": 3656
                  },
                  "start": 3641,
                  "end": 3656
                },
                "start": 3640,
                "end": 3656
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
                  "start": 3662,
                  "end": 3663
                },
                "typeArguments": null,
                "start": 3662,
                "end": 3663
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 3664,
                "end": 3668
              },
              "start": 3661,
              "end": 3668
            },
            "id": null,
            "generator": false,
            "start": 3604,
            "end": 3668
          },
          "definite": false,
          "start": 3595,
          "end": 3668
        }
      ],
      "declare": false,
      "start": 3591,
      "end": 3669
    },
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
            "start": 3674,
            "end": 3680
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
                              "start": 3693,
                              "end": 3697
                            },
                            "typeArguments": null,
                            "start": 3693,
                            "end": 3697
                          },
                          "start": 3691,
                          "end": 3697
                        },
                        "start": 3688,
                        "end": 3697
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
                          "start": 3702,
                          "end": 3709
                        },
                        "typeArguments": null,
                        "start": 3702,
                        "end": 3709
                      },
                      "start": 3699,
                      "end": 3709
                    },
                    "start": 3687,
                    "end": 3709
                  },
                  "start": 3685,
                  "end": 3709
                },
                "start": 3684,
                "end": 3709
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
                  "start": 3715,
                  "end": 3719
                },
                "typeArguments": null,
                "start": 3715,
                "end": 3719
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 3720,
                "end": 3724
              },
              "start": 3714,
              "end": 3724
            },
            "id": null,
            "generator": false,
            "start": 3683,
            "end": 3724
          },
          "definite": false,
          "start": 3674,
          "end": 3724
        }
      ],
      "declare": false,
      "start": 3670,
      "end": 3725
    },
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
            "start": 3730,
            "end": 3732
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo6",
              "optional": false,
              "typeAnnotation": null,
              "start": 3735,
              "end": 3739
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r6arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3740,
                "end": 3746
              }
            ],
            "optional": false,
            "start": 3735,
            "end": 3747
          },
          "definite": false,
          "start": 3730,
          "end": 3747
        }
      ],
      "declare": false,
      "start": 3726,
      "end": 3748
    },
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
            "start": 3760,
            "end": 3763
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
                "start": 3767,
                "end": 3773
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r6arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3775,
                "end": 3781
              }
            ],
            "start": 3766,
            "end": 3782
          },
          "definite": false,
          "start": 3760,
          "end": 3782
        }
      ],
      "declare": false,
      "start": 3756,
      "end": 3783
    },
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
            "start": 3788,
            "end": 3791
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
                "start": 3795,
                "end": 3801
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r6arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3803,
                "end": 3809
              }
            ],
            "start": 3794,
            "end": 3810
          },
          "definite": false,
          "start": 3788,
          "end": 3810
        }
      ],
      "declare": false,
      "start": 3784,
      "end": 3811
    },
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
            "typeAnnotation": null,
            "start": 3817,
            "end": 3823
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
                    "start": 3827,
                    "end": 3828
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3837,
                      "end": 3841
                    },
                    "typeArguments": null,
                    "start": 3837,
                    "end": 3841
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3827,
                  "end": 3841
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3843,
                    "end": 3844
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3853,
                      "end": 3860
                    },
                    "typeArguments": null,
                    "start": 3853,
                    "end": 3860
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3843,
                  "end": 3860
                }
              ],
              "start": 3826,
              "end": 3861
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
                              "start": 3871,
                              "end": 3872
                            },
                            "typeArguments": null,
                            "start": 3871,
                            "end": 3872
                          },
                          "start": 3869,
                          "end": 3872
                        },
                        "start": 3866,
                        "end": 3872
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
                          "start": 3877,
                          "end": 3878
                        },
                        "typeArguments": null,
                        "start": 3877,
                        "end": 3878
                      },
                      "start": 3874,
                      "end": 3878
                    },
                    "start": 3865,
                    "end": 3878
                  },
                  "start": 3863,
                  "end": 3878
                },
                "start": 3862,
                "end": 3878
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
                        "start": 3887,
                        "end": 3888
                      },
                      "typeArguments": null,
                      "start": 3887,
                      "end": 3888
                    },
                    "start": 3885,
                    "end": 3888
                  },
                  "start": 3884,
                  "end": 3888
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
                    "start": 3894,
                    "end": 3895
                  },
                  "typeArguments": null,
                  "start": 3894,
                  "end": 3895
                },
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 3896,
                  "end": 3900
                },
                "start": 3893,
                "end": 3900
              },
              "id": null,
              "generator": false,
              "start": 3883,
              "end": 3900
            },
            "id": null,
            "generator": false,
            "start": 3826,
            "end": 3900
          },
          "definite": false,
          "start": 3817,
          "end": 3900
        }
      ],
      "declare": false,
      "start": 3813,
      "end": 3901
    },
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
            "start": 3906,
            "end": 3912
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
                              "start": 3925,
                              "end": 3929
                            },
                            "typeArguments": null,
                            "start": 3925,
                            "end": 3929
                          },
                          "start": 3923,
                          "end": 3929
                        },
                        "start": 3920,
                        "end": 3929
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
                          "start": 3934,
                          "end": 3941
                        },
                        "typeArguments": null,
                        "start": 3934,
                        "end": 3941
                      },
                      "start": 3931,
                      "end": 3941
                    },
                    "start": 3919,
                    "end": 3941
                  },
                  "start": 3917,
                  "end": 3941
                },
                "start": 3916,
                "end": 3941
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
                        "start": 3950,
                        "end": 3954
                      },
                      "typeArguments": null,
                      "start": 3950,
                      "end": 3954
                    },
                    "start": 3948,
                    "end": 3954
                  },
                  "start": 3947,
                  "end": 3954
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
                    "start": 3960,
                    "end": 3967
                  },
                  "typeArguments": null,
                  "start": 3960,
                  "end": 3967
                },
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 3968,
                  "end": 3972
                },
                "start": 3959,
                "end": 3972
              },
              "id": null,
              "generator": false,
              "start": 3946,
              "end": 3972
            },
            "id": null,
            "generator": false,
            "start": 3915,
            "end": 3972
          },
          "definite": false,
          "start": 3906,
          "end": 3972
        }
      ],
      "declare": false,
      "start": 3902,
      "end": 3973
    },
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
            "start": 3978,
            "end": 3980
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null,
              "start": 3983,
              "end": 3987
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r7arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3988,
                "end": 3994
              }
            ],
            "optional": false,
            "start": 3983,
            "end": 3995
          },
          "definite": false,
          "start": 3978,
          "end": 3995
        }
      ],
      "declare": false,
      "start": 3974,
      "end": 3996
    },
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
            "start": 4008,
            "end": 4011
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
                "start": 4015,
                "end": 4021
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r7arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4023,
                "end": 4029
              }
            ],
            "start": 4014,
            "end": 4030
          },
          "definite": false,
          "start": 4008,
          "end": 4030
        }
      ],
      "declare": false,
      "start": 4004,
      "end": 4031
    },
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
            "start": 4036,
            "end": 4039
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
                "start": 4043,
                "end": 4049
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r7arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4051,
                "end": 4057
              }
            ],
            "start": 4042,
            "end": 4058
          },
          "definite": false,
          "start": 4036,
          "end": 4058
        }
      ],
      "declare": false,
      "start": 4032,
      "end": 4059
    },
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
            "typeAnnotation": null,
            "start": 4065,
            "end": 4071
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
                    "start": 4075,
                    "end": 4076
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4085,
                      "end": 4089
                    },
                    "typeArguments": null,
                    "start": 4085,
                    "end": 4089
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4075,
                  "end": 4089
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4091,
                    "end": 4092
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4101,
                      "end": 4108
                    },
                    "typeArguments": null,
                    "start": 4101,
                    "end": 4108
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4091,
                  "end": 4108
                }
              ],
              "start": 4074,
              "end": 4109
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
                              "start": 4119,
                              "end": 4120
                            },
                            "typeArguments": null,
                            "start": 4119,
                            "end": 4120
                          },
                          "start": 4117,
                          "end": 4120
                        },
                        "start": 4114,
                        "end": 4120
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
                          "start": 4125,
                          "end": 4126
                        },
                        "typeArguments": null,
                        "start": 4125,
                        "end": 4126
                      },
                      "start": 4122,
                      "end": 4126
                    },
                    "start": 4113,
                    "end": 4126
                  },
                  "start": 4111,
                  "end": 4126
                },
                "start": 4110,
                "end": 4126
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
                              "start": 4138,
                              "end": 4139
                            },
                            "typeArguments": null,
                            "start": 4138,
                            "end": 4139
                          },
                          "start": 4136,
                          "end": 4139
                        },
                        "start": 4132,
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
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4144,
                          "end": 4145
                        },
                        "typeArguments": null,
                        "start": 4144,
                        "end": 4145
                      },
                      "start": 4141,
                      "end": 4145
                    },
                    "start": 4131,
                    "end": 4145
                  },
                  "start": 4129,
                  "end": 4145
                },
                "start": 4128,
                "end": 4145
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
                        "start": 4154,
                        "end": 4155
                      },
                      "typeArguments": null,
                      "start": 4154,
                      "end": 4155
                    },
                    "start": 4152,
                    "end": 4155
                  },
                  "start": 4151,
                  "end": 4155
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
                    "start": 4161,
                    "end": 4162
                  },
                  "typeArguments": null,
                  "start": 4161,
                  "end": 4162
                },
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 4163,
                  "end": 4167
                },
                "start": 4160,
                "end": 4167
              },
              "id": null,
              "generator": false,
              "start": 4150,
              "end": 4167
            },
            "id": null,
            "generator": false,
            "start": 4074,
            "end": 4167
          },
          "definite": false,
          "start": 4065,
          "end": 4167
        }
      ],
      "declare": false,
      "start": 4061,
      "end": 4168
    },
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
            "typeAnnotation": null,
            "start": 4173,
            "end": 4179
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
                              "start": 4192,
                              "end": 4196
                            },
                            "typeArguments": null,
                            "start": 4192,
                            "end": 4196
                          },
                          "start": 4190,
                          "end": 4196
                        },
                        "start": 4187,
                        "end": 4196
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
                          "start": 4201,
                          "end": 4208
                        },
                        "typeArguments": null,
                        "start": 4201,
                        "end": 4208
                      },
                      "start": 4198,
                      "end": 4208
                    },
                    "start": 4186,
                    "end": 4208
                  },
                  "start": 4184,
                  "end": 4208
                },
                "start": 4183,
                "end": 4208
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
                              "start": 4220,
                              "end": 4224
                            },
                            "typeArguments": null,
                            "start": 4220,
                            "end": 4224
                          },
                          "start": 4218,
                          "end": 4224
                        },
                        "start": 4214,
                        "end": 4224
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
                          "start": 4229,
                          "end": 4236
                        },
                        "typeArguments": null,
                        "start": 4229,
                        "end": 4236
                      },
                      "start": 4226,
                      "end": 4236
                    },
                    "start": 4213,
                    "end": 4236
                  },
                  "start": 4211,
                  "end": 4236
                },
                "start": 4210,
                "end": 4236
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
                        "start": 4245,
                        "end": 4249
                      },
                      "typeArguments": null,
                      "start": 4245,
                      "end": 4249
                    },
                    "start": 4243,
                    "end": 4249
                  },
                  "start": 4242,
                  "end": 4249
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
                    "start": 4255,
                    "end": 4262
                  },
                  "typeArguments": null,
                  "start": 4255,
                  "end": 4262
                },
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 4263,
                  "end": 4267
                },
                "start": 4254,
                "end": 4267
              },
              "id": null,
              "generator": false,
              "start": 4241,
              "end": 4267
            },
            "id": null,
            "generator": false,
            "start": 4182,
            "end": 4267
          },
          "definite": false,
          "start": 4173,
          "end": 4267
        }
      ],
      "declare": false,
      "start": 4169,
      "end": 4268
    },
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
            "start": 4273,
            "end": 4275
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo8",
              "optional": false,
              "typeAnnotation": null,
              "start": 4278,
              "end": 4282
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r8arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4283,
                "end": 4289
              }
            ],
            "optional": false,
            "start": 4278,
            "end": 4290
          },
          "definite": false,
          "start": 4273,
          "end": 4290
        }
      ],
      "declare": false,
      "start": 4269,
      "end": 4291
    },
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
            "start": 4303,
            "end": 4306
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
                "start": 4310,
                "end": 4316
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r8arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4318,
                "end": 4324
              }
            ],
            "start": 4309,
            "end": 4325
          },
          "definite": false,
          "start": 4303,
          "end": 4325
        }
      ],
      "declare": false,
      "start": 4299,
      "end": 4326
    },
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
            "start": 4331,
            "end": 4334
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
                "start": 4338,
                "end": 4344
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r8arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4346,
                "end": 4352
              }
            ],
            "start": 4337,
            "end": 4353
          },
          "definite": false,
          "start": 4331,
          "end": 4353
        }
      ],
      "declare": false,
      "start": 4327,
      "end": 4354
    },
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
            "typeAnnotation": null,
            "start": 4360,
            "end": 4366
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
                    "start": 4370,
                    "end": 4371
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4380,
                      "end": 4384
                    },
                    "typeArguments": null,
                    "start": 4380,
                    "end": 4384
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4370,
                  "end": 4384
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4386,
                    "end": 4387
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4396,
                      "end": 4403
                    },
                    "typeArguments": null,
                    "start": 4396,
                    "end": 4403
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4386,
                  "end": 4403
                }
              ],
              "start": 4369,
              "end": 4404
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
                              "start": 4414,
                              "end": 4415
                            },
                            "typeArguments": null,
                            "start": 4414,
                            "end": 4415
                          },
                          "start": 4412,
                          "end": 4415
                        },
                        "start": 4409,
                        "end": 4415
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
                          "start": 4420,
                          "end": 4421
                        },
                        "typeArguments": null,
                        "start": 4420,
                        "end": 4421
                      },
                      "start": 4417,
                      "end": 4421
                    },
                    "start": 4408,
                    "end": 4421
                  },
                  "start": 4406,
                  "end": 4421
                },
                "start": 4405,
                "end": 4421
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
                                  "start": 4435,
                                  "end": 4438
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 4440,
                                    "end": 4446
                                  },
                                  "start": 4438,
                                  "end": 4446
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 4435,
                                "end": 4447
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
                                  "start": 4448,
                                  "end": 4452
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 4454,
                                    "end": 4460
                                  },
                                  "start": 4452,
                                  "end": 4460
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 4448,
                                "end": 4460
                              }
                            ],
                            "start": 4433,
                            "end": 4462
                          },
                          "start": 4431,
                          "end": 4462
                        },
                        "start": 4427,
                        "end": 4462
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
                          "start": 4467,
                          "end": 4468
                        },
                        "typeArguments": null,
                        "start": 4467,
                        "end": 4468
                      },
                      "start": 4464,
                      "end": 4468
                    },
                    "start": 4426,
                    "end": 4468
                  },
                  "start": 4424,
                  "end": 4468
                },
                "start": 4423,
                "end": 4468
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
                        "start": 4477,
                        "end": 4478
                      },
                      "typeArguments": null,
                      "start": 4477,
                      "end": 4478
                    },
                    "start": 4475,
                    "end": 4478
                  },
                  "start": 4474,
                  "end": 4478
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
                    "start": 4484,
                    "end": 4485
                  },
                  "typeArguments": null,
                  "start": 4484,
                  "end": 4485
                },
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 4486,
                  "end": 4490
                },
                "start": 4483,
                "end": 4490
              },
              "id": null,
              "generator": false,
              "start": 4473,
              "end": 4490
            },
            "id": null,
            "generator": false,
            "start": 4369,
            "end": 4490
          },
          "definite": false,
          "start": 4360,
          "end": 4490
        }
      ],
      "declare": false,
      "start": 4356,
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
            "name": "r9arg2",
            "optional": false,
            "typeAnnotation": null,
            "start": 4496,
            "end": 4502
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
                              "start": 4515,
                              "end": 4519
                            },
                            "typeArguments": null,
                            "start": 4515,
                            "end": 4519
                          },
                          "start": 4513,
                          "end": 4519
                        },
                        "start": 4510,
                        "end": 4519
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
                          "start": 4524,
                          "end": 4531
                        },
                        "typeArguments": null,
                        "start": 4524,
                        "end": 4531
                      },
                      "start": 4521,
                      "end": 4531
                    },
                    "start": 4509,
                    "end": 4531
                  },
                  "start": 4507,
                  "end": 4531
                },
                "start": 4506,
                "end": 4531
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
                              "start": 4543,
                              "end": 4547
                            },
                            "typeArguments": null,
                            "start": 4543,
                            "end": 4547
                          },
                          "start": 4541,
                          "end": 4547
                        },
                        "start": 4537,
                        "end": 4547
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
                          "start": 4552,
                          "end": 4559
                        },
                        "typeArguments": null,
                        "start": 4552,
                        "end": 4559
                      },
                      "start": 4549,
                      "end": 4559
                    },
                    "start": 4536,
                    "end": 4559
                  },
                  "start": 4534,
                  "end": 4559
                },
                "start": 4533,
                "end": 4559
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
                        "start": 4568,
                        "end": 4572
                      },
                      "typeArguments": null,
                      "start": 4568,
                      "end": 4572
                    },
                    "start": 4566,
                    "end": 4572
                  },
                  "start": 4565,
                  "end": 4572
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
                    "start": 4578,
                    "end": 4585
                  },
                  "typeArguments": null,
                  "start": 4578,
                  "end": 4585
                },
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 4586,
                  "end": 4590
                },
                "start": 4577,
                "end": 4590
              },
              "id": null,
              "generator": false,
              "start": 4564,
              "end": 4590
            },
            "id": null,
            "generator": false,
            "start": 4505,
            "end": 4590
          },
          "definite": false,
          "start": 4496,
          "end": 4590
        }
      ],
      "declare": false,
      "start": 4492,
      "end": 4591
    },
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
            "start": 4596,
            "end": 4598
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo9",
              "optional": false,
              "typeAnnotation": null,
              "start": 4601,
              "end": 4605
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r9arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4606,
                "end": 4612
              }
            ],
            "optional": false,
            "start": 4601,
            "end": 4613
          },
          "definite": false,
          "start": 4596,
          "end": 4613
        }
      ],
      "declare": false,
      "start": 4592,
      "end": 4614
    },
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
            "start": 4626,
            "end": 4629
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
                "start": 4633,
                "end": 4639
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r9arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4641,
                "end": 4647
              }
            ],
            "start": 4632,
            "end": 4648
          },
          "definite": false,
          "start": 4626,
          "end": 4648
        }
      ],
      "declare": false,
      "start": 4622,
      "end": 4649
    },
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
            "start": 4654,
            "end": 4657
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
                "start": 4661,
                "end": 4667
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r9arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4669,
                "end": 4675
              }
            ],
            "start": 4660,
            "end": 4676
          },
          "definite": false,
          "start": 4654,
          "end": 4676
        }
      ],
      "declare": false,
      "start": 4650,
      "end": 4677
    },
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
            "typeAnnotation": null,
            "start": 4683,
            "end": 4690
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
                    "start": 4694,
                    "end": 4695
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4704,
                      "end": 4711
                    },
                    "typeArguments": null,
                    "start": 4704,
                    "end": 4711
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4694,
                  "end": 4711
                }
              ],
              "start": 4693,
              "end": 4712
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
                  "start": 4716,
                  "end": 4717
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
                        "start": 4719,
                        "end": 4720
                      },
                      "typeArguments": null,
                      "start": 4719,
                      "end": 4720
                    },
                    "start": 4719,
                    "end": 4722
                  },
                  "start": 4717,
                  "end": 4722
                },
                "value": null,
                "start": 4713,
                "end": 4722
              }
            ],
            "returnType": null,
            "body": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 4727,
                "end": 4728
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 4729,
                "end": 4730
              },
              "optional": false,
              "computed": true,
              "start": 4727,
              "end": 4731
            },
            "id": null,
            "generator": false,
            "start": 4693,
            "end": 4731
          },
          "definite": false,
          "start": 4683,
          "end": 4731
        }
      ],
      "declare": false,
      "start": 4679,
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
            "name": "r10arg2",
            "optional": false,
            "typeAnnotation": null,
            "start": 4737,
            "end": 4744
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
                  "start": 4751,
                  "end": 4752
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
                        "start": 4754,
                        "end": 4761
                      },
                      "typeArguments": null,
                      "start": 4754,
                      "end": 4761
                    },
                    "start": 4754,
                    "end": 4763
                  },
                  "start": 4752,
                  "end": 4763
                },
                "value": null,
                "start": 4748,
                "end": 4763
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
                  "start": 4769,
                  "end": 4776
                },
                "typeArguments": null,
                "start": 4769,
                "end": 4776
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 4777,
                "end": 4781
              },
              "start": 4768,
              "end": 4781
            },
            "id": null,
            "generator": false,
            "start": 4747,
            "end": 4781
          },
          "definite": false,
          "start": 4737,
          "end": 4781
        }
      ],
      "declare": false,
      "start": 4733,
      "end": 4782
    },
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
            "start": 4787,
            "end": 4790
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo10",
              "optional": false,
              "typeAnnotation": null,
              "start": 4793,
              "end": 4798
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r10arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4799,
                "end": 4806
              }
            ],
            "optional": false,
            "start": 4793,
            "end": 4807
          },
          "definite": false,
          "start": 4787,
          "end": 4807
        }
      ],
      "declare": false,
      "start": 4783,
      "end": 4808
    },
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
            "start": 4820,
            "end": 4824
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
                "start": 4828,
                "end": 4835
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r10arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4837,
                "end": 4844
              }
            ],
            "start": 4827,
            "end": 4845
          },
          "definite": false,
          "start": 4820,
          "end": 4845
        }
      ],
      "declare": false,
      "start": 4816,
      "end": 4846
    },
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
            "start": 4851,
            "end": 4855
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
                "start": 4859,
                "end": 4866
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r10arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4868,
                "end": 4875
              }
            ],
            "start": 4858,
            "end": 4876
          },
          "definite": false,
          "start": 4851,
          "end": 4876
        }
      ],
      "declare": false,
      "start": 4847,
      "end": 4877
    },
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
            "typeAnnotation": null,
            "start": 4883,
            "end": 4890
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
                    "start": 4894,
                    "end": 4895
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4904,
                      "end": 4908
                    },
                    "typeArguments": null,
                    "start": 4904,
                    "end": 4908
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4894,
                  "end": 4908
                }
              ],
              "start": 4893,
              "end": 4909
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
                      "start": 4913,
                      "end": 4914
                    },
                    "typeArguments": null,
                    "start": 4913,
                    "end": 4914
                  },
                  "start": 4911,
                  "end": 4914
                },
                "start": 4910,
                "end": 4914
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
                      "start": 4919,
                      "end": 4920
                    },
                    "typeArguments": null,
                    "start": 4919,
                    "end": 4920
                  },
                  "start": 4917,
                  "end": 4920
                },
                "start": 4916,
                "end": 4920
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 4925,
              "end": 4926
            },
            "id": null,
            "generator": false,
            "start": 4893,
            "end": 4926
          },
          "definite": false,
          "start": 4883,
          "end": 4926
        }
      ],
      "declare": false,
      "start": 4879,
      "end": 4927
    },
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
            "typeAnnotation": null,
            "start": 4932,
            "end": 4939
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
                          "start": 4948,
                          "end": 4951
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 4953,
                            "end": 4959
                          },
                          "start": 4951,
                          "end": 4959
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 4948,
                        "end": 4959
                      }
                    ],
                    "start": 4946,
                    "end": 4961
                  },
                  "start": 4944,
                  "end": 4961
                },
                "start": 4943,
                "end": 4961
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
                          "start": 4968,
                          "end": 4971
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 4973,
                            "end": 4979
                          },
                          "start": 4971,
                          "end": 4979
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 4968,
                        "end": 4980
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
                          "start": 4981,
                          "end": 4984
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 4986,
                            "end": 4992
                          },
                          "start": 4984,
                          "end": 4992
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 4981,
                        "end": 4992
                      }
                    ],
                    "start": 4966,
                    "end": 4994
                  },
                  "start": 4964,
                  "end": 4994
                },
                "start": 4963,
                "end": 4994
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
                  "start": 5000,
                  "end": 5004
                },
                "typeArguments": null,
                "start": 5000,
                "end": 5004
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 5005,
                "end": 5009
              },
              "start": 4999,
              "end": 5009
            },
            "id": null,
            "generator": false,
            "start": 4942,
            "end": 5009
          },
          "definite": false,
          "start": 4932,
          "end": 5009
        }
      ],
      "declare": false,
      "start": 4928,
      "end": 5010
    },
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
            "start": 5015,
            "end": 5018
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo11",
              "optional": false,
              "typeAnnotation": null,
              "start": 5021,
              "end": 5026
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r11arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 5027,
                "end": 5034
              }
            ],
            "optional": false,
            "start": 5021,
            "end": 5035
          },
          "definite": false,
          "start": 5015,
          "end": 5035
        }
      ],
      "declare": false,
      "start": 5011,
      "end": 5036
    },
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
            "start": 5048,
            "end": 5052
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
                "start": 5056,
                "end": 5063
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r11arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 5065,
                "end": 5072
              }
            ],
            "start": 5055,
            "end": 5073
          },
          "definite": false,
          "start": 5048,
          "end": 5073
        }
      ],
      "declare": false,
      "start": 5044,
      "end": 5074
    },
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
            "start": 5079,
            "end": 5083
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
                "start": 5087,
                "end": 5094
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r11arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 5096,
                "end": 5103
              }
            ],
            "start": 5086,
            "end": 5104
          },
          "definite": false,
          "start": 5079,
          "end": 5104
        }
      ],
      "declare": false,
      "start": 5075,
      "end": 5105
    },
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
            "typeAnnotation": null,
            "start": 5111,
            "end": 5118
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
                    "start": 5122,
                    "end": 5123
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5132,
                      "end": 5137
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
                            "start": 5138,
                            "end": 5142
                          },
                          "typeArguments": null,
                          "start": 5138,
                          "end": 5142
                        }
                      ],
                      "start": 5137,
                      "end": 5143
                    },
                    "start": 5132,
                    "end": 5143
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 5122,
                  "end": 5143
                }
              ],
              "start": 5121,
              "end": 5144
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
                      "start": 5148,
                      "end": 5153
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
                            "start": 5154,
                            "end": 5158
                          },
                          "typeArguments": null,
                          "start": 5154,
                          "end": 5158
                        }
                      ],
                      "start": 5153,
                      "end": 5159
                    },
                    "start": 5148,
                    "end": 5159
                  },
                  "start": 5146,
                  "end": 5159
                },
                "start": 5145,
                "end": 5159
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
                      "start": 5164,
                      "end": 5165
                    },
                    "typeArguments": null,
                    "start": 5164,
                    "end": 5165
                  },
                  "start": 5162,
                  "end": 5165
                },
                "start": 5161,
                "end": 5165
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
                  "start": 5171,
                  "end": 5176
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
                        "start": 5177,
                        "end": 5184
                      },
                      "typeArguments": null,
                      "start": 5177,
                      "end": 5184
                    }
                  ],
                  "start": 5176,
                  "end": 5185
                },
                "start": 5171,
                "end": 5185
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 5186,
                "end": 5190
              },
              "start": 5170,
              "end": 5190
            },
            "id": null,
            "generator": false,
            "start": 5121,
            "end": 5190
          },
          "definite": false,
          "start": 5111,
          "end": 5190
        }
      ],
      "declare": false,
      "start": 5107,
      "end": 5191
    },
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
            "typeAnnotation": null,
            "start": 5196,
            "end": 5203
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
                      "start": 5210,
                      "end": 5215
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
                            "start": 5216,
                            "end": 5220
                          },
                          "typeArguments": null,
                          "start": 5216,
                          "end": 5220
                        }
                      ],
                      "start": 5215,
                      "end": 5221
                    },
                    "start": 5210,
                    "end": 5221
                  },
                  "start": 5208,
                  "end": 5221
                },
                "start": 5207,
                "end": 5221
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
                      "start": 5226,
                      "end": 5231
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
                            "start": 5232,
                            "end": 5240
                          },
                          "typeArguments": null,
                          "start": 5232,
                          "end": 5240
                        }
                      ],
                      "start": 5231,
                      "end": 5241
                    },
                    "start": 5226,
                    "end": 5241
                  },
                  "start": 5224,
                  "end": 5241
                },
                "start": 5223,
                "end": 5241
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
                  "start": 5247,
                  "end": 5252
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
                        "start": 5253,
                        "end": 5260
                      },
                      "typeArguments": null,
                      "start": 5253,
                      "end": 5260
                    }
                  ],
                  "start": 5252,
                  "end": 5261
                },
                "start": 5247,
                "end": 5261
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 5262,
                "end": 5266
              },
              "start": 5246,
              "end": 5266
            },
            "id": null,
            "generator": false,
            "start": 5206,
            "end": 5266
          },
          "definite": false,
          "start": 5196,
          "end": 5266
        }
      ],
      "declare": false,
      "start": 5192,
      "end": 5267
    },
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
            "start": 5272,
            "end": 5275
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo12",
              "optional": false,
              "typeAnnotation": null,
              "start": 5278,
              "end": 5283
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r12arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 5284,
                "end": 5291
              }
            ],
            "optional": false,
            "start": 5278,
            "end": 5292
          },
          "definite": false,
          "start": 5272,
          "end": 5292
        }
      ],
      "declare": false,
      "start": 5268,
      "end": 5293
    },
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
            "start": 5305,
            "end": 5309
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
                "start": 5313,
                "end": 5320
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r12arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 5322,
                "end": 5329
              }
            ],
            "start": 5312,
            "end": 5330
          },
          "definite": false,
          "start": 5305,
          "end": 5330
        }
      ],
      "declare": false,
      "start": 5301,
      "end": 5331
    },
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
            "start": 5336,
            "end": 5340
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
                "start": 5344,
                "end": 5351
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r12arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 5353,
                "end": 5360
              }
            ],
            "start": 5343,
            "end": 5361
          },
          "definite": false,
          "start": 5336,
          "end": 5361
        }
      ],
      "declare": false,
      "start": 5332,
      "end": 5362
    },
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
            "typeAnnotation": null,
            "start": 5368,
            "end": 5375
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
                    "start": 5379,
                    "end": 5380
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5389,
                      "end": 5394
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
                            "start": 5395,
                            "end": 5402
                          },
                          "typeArguments": null,
                          "start": 5395,
                          "end": 5402
                        }
                      ],
                      "start": 5394,
                      "end": 5403
                    },
                    "start": 5389,
                    "end": 5403
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 5379,
                  "end": 5403
                }
              ],
              "start": 5378,
              "end": 5404
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
                      "start": 5408,
                      "end": 5413
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
                            "start": 5414,
                            "end": 5418
                          },
                          "typeArguments": null,
                          "start": 5414,
                          "end": 5418
                        }
                      ],
                      "start": 5413,
                      "end": 5419
                    },
                    "start": 5408,
                    "end": 5419
                  },
                  "start": 5406,
                  "end": 5419
                },
                "start": 5405,
                "end": 5419
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
                      "start": 5424,
                      "end": 5425
                    },
                    "typeArguments": null,
                    "start": 5424,
                    "end": 5425
                  },
                  "start": 5422,
                  "end": 5425
                },
                "start": 5421,
                "end": 5425
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 5430,
              "end": 5431
            },
            "id": null,
            "generator": false,
            "start": 5378,
            "end": 5431
          },
          "definite": false,
          "start": 5368,
          "end": 5431
        }
      ],
      "declare": false,
      "start": 5364,
      "end": 5432
    },
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
            "typeAnnotation": null,
            "start": 5437,
            "end": 5444
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
                      "start": 5451,
                      "end": 5456
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
                            "start": 5457,
                            "end": 5461
                          },
                          "typeArguments": null,
                          "start": 5457,
                          "end": 5461
                        }
                      ],
                      "start": 5456,
                      "end": 5462
                    },
                    "start": 5451,
                    "end": 5462
                  },
                  "start": 5449,
                  "end": 5462
                },
                "start": 5448,
                "end": 5462
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
                      "start": 5467,
                      "end": 5472
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
                            "start": 5473,
                            "end": 5480
                          },
                          "typeArguments": null,
                          "start": 5473,
                          "end": 5480
                        }
                      ],
                      "start": 5472,
                      "end": 5481
                    },
                    "start": 5467,
                    "end": 5481
                  },
                  "start": 5465,
                  "end": 5481
                },
                "start": 5464,
                "end": 5481
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
                  "start": 5487,
                  "end": 5492
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
                        "start": 5493,
                        "end": 5500
                      },
                      "typeArguments": null,
                      "start": 5493,
                      "end": 5500
                    }
                  ],
                  "start": 5492,
                  "end": 5501
                },
                "start": 5487,
                "end": 5501
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 5502,
                "end": 5506
              },
              "start": 5486,
              "end": 5506
            },
            "id": null,
            "generator": false,
            "start": 5447,
            "end": 5506
          },
          "definite": false,
          "start": 5437,
          "end": 5506
        }
      ],
      "declare": false,
      "start": 5433,
      "end": 5507
    },
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
            "start": 5512,
            "end": 5515
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo13",
              "optional": false,
              "typeAnnotation": null,
              "start": 5518,
              "end": 5523
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r13arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 5524,
                "end": 5531
              }
            ],
            "optional": false,
            "start": 5518,
            "end": 5532
          },
          "definite": false,
          "start": 5512,
          "end": 5532
        }
      ],
      "declare": false,
      "start": 5508,
      "end": 5533
    },
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
            "start": 5545,
            "end": 5549
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
                "start": 5553,
                "end": 5560
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r13arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 5562,
                "end": 5569
              }
            ],
            "start": 5552,
            "end": 5570
          },
          "definite": false,
          "start": 5545,
          "end": 5570
        }
      ],
      "declare": false,
      "start": 5541,
      "end": 5571
    },
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
            "start": 5576,
            "end": 5580
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
                "start": 5584,
                "end": 5591
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r13arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 5593,
                "end": 5600
              }
            ],
            "start": 5583,
            "end": 5601
          },
          "definite": false,
          "start": 5576,
          "end": 5601
        }
      ],
      "declare": false,
      "start": 5572,
      "end": 5602
    },
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
            "typeAnnotation": null,
            "start": 5608,
            "end": 5615
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
                    "start": 5619,
                    "end": 5620
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 5619,
                  "end": 5620
                }
              ],
              "start": 5618,
              "end": 5621
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
                          "start": 5627,
                          "end": 5628
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
                              "start": 5630,
                              "end": 5631
                            },
                            "typeArguments": null,
                            "start": 5630,
                            "end": 5631
                          },
                          "start": 5628,
                          "end": 5631
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 5627,
                        "end": 5632
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
                          "start": 5633,
                          "end": 5634
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
                              "start": 5636,
                              "end": 5637
                            },
                            "typeArguments": null,
                            "start": 5636,
                            "end": 5637
                          },
                          "start": 5634,
                          "end": 5637
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 5633,
                        "end": 5637
                      }
                    ],
                    "start": 5625,
                    "end": 5639
                  },
                  "start": 5623,
                  "end": 5639
                },
                "start": 5622,
                "end": 5639
              }
            ],
            "returnType": null,
            "body": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 5644,
                "end": 5645
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 5646,
                "end": 5647
              },
              "optional": false,
              "computed": false,
              "start": 5644,
              "end": 5647
            },
            "id": null,
            "generator": false,
            "start": 5618,
            "end": 5647
          },
          "definite": false,
          "start": 5608,
          "end": 5647
        }
      ],
      "declare": false,
      "start": 5604,
      "end": 5648
    },
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
            "typeAnnotation": null,
            "start": 5653,
            "end": 5660
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
                          "start": 5669,
                          "end": 5670
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 5672,
                            "end": 5678
                          },
                          "start": 5670,
                          "end": 5678
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 5669,
                        "end": 5679
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
                          "start": 5680,
                          "end": 5681
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 5683,
                            "end": 5689
                          },
                          "start": 5681,
                          "end": 5689
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 5680,
                        "end": 5689
                      }
                    ],
                    "start": 5667,
                    "end": 5691
                  },
                  "start": 5665,
                  "end": 5691
                },
                "start": 5664,
                "end": 5691
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
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5697,
                  "end": 5703
                },
                "typeArguments": null,
                "start": 5697,
                "end": 5703
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 5704,
                "end": 5708
              },
              "start": 5696,
              "end": 5708
            },
            "id": null,
            "generator": false,
            "start": 5663,
            "end": 5708
          },
          "definite": false,
          "start": 5653,
          "end": 5708
        }
      ],
      "declare": false,
      "start": 5649,
      "end": 5709
    },
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
            "start": 5714,
            "end": 5717
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo14",
              "optional": false,
              "typeAnnotation": null,
              "start": 5720,
              "end": 5725
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r14arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 5726,
                "end": 5733
              }
            ],
            "optional": false,
            "start": 5720,
            "end": 5734
          },
          "definite": false,
          "start": 5714,
          "end": 5734
        }
      ],
      "declare": false,
      "start": 5710,
      "end": 5735
    },
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
            "start": 5747,
            "end": 5751
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
                "start": 5755,
                "end": 5762
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r14arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 5764,
                "end": 5771
              }
            ],
            "start": 5754,
            "end": 5772
          },
          "definite": false,
          "start": 5747,
          "end": 5772
        }
      ],
      "declare": false,
      "start": 5743,
      "end": 5773
    },
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
            "start": 5778,
            "end": 5782
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
                "start": 5786,
                "end": 5793
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r14arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 5795,
                "end": 5802
              }
            ],
            "start": 5785,
            "end": 5803
          },
          "definite": false,
          "start": 5778,
          "end": 5803
        }
      ],
      "declare": false,
      "start": 5774,
      "end": 5804
    },
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
            "typeAnnotation": null,
            "start": 5810,
            "end": 5817
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
                    "start": 5821,
                    "end": 5822
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 5821,
                  "end": 5822
                }
              ],
              "start": 5820,
              "end": 5823
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
                      "start": 5827,
                      "end": 5828
                    },
                    "typeArguments": null,
                    "start": 5827,
                    "end": 5828
                  },
                  "start": 5825,
                  "end": 5828
                },
                "start": 5824,
                "end": 5828
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
                    "start": 5834,
                    "end": 5835
                  },
                  "typeArguments": null,
                  "start": 5834,
                  "end": 5835
                },
                "start": 5834,
                "end": 5837
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 5838,
                "end": 5842
              },
              "start": 5833,
              "end": 5842
            },
            "id": null,
            "generator": false,
            "start": 5820,
            "end": 5842
          },
          "definite": false,
          "start": 5810,
          "end": 5842
        }
      ],
      "declare": false,
      "start": 5806,
      "end": 5842
    },
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
            "start": 5847,
            "end": 5850
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo15",
              "optional": false,
              "typeAnnotation": null,
              "start": 5853,
              "end": 5858
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r15arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 5859,
                "end": 5866
              }
            ],
            "optional": false,
            "start": 5853,
            "end": 5867
          },
          "definite": false,
          "start": 5847,
          "end": 5867
        }
      ],
      "declare": false,
      "start": 5843,
      "end": 5868
    },
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
            "typeAnnotation": null,
            "start": 5880,
            "end": 5887
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
                    "start": 5891,
                    "end": 5892
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5901,
                      "end": 5905
                    },
                    "typeArguments": null,
                    "start": 5901,
                    "end": 5905
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 5891,
                  "end": 5905
                }
              ],
              "start": 5890,
              "end": 5906
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
                      "start": 5910,
                      "end": 5911
                    },
                    "typeArguments": null,
                    "start": 5910,
                    "end": 5911
                  },
                  "start": 5908,
                  "end": 5911
                },
                "start": 5907,
                "end": 5911
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 5917,
                  "end": 5918
                }
              ],
              "start": 5916,
              "end": 5919
            },
            "id": null,
            "generator": false,
            "start": 5890,
            "end": 5919
          },
          "definite": false,
          "start": 5880,
          "end": 5919
        }
      ],
      "declare": false,
      "start": 5876,
      "end": 5920
    },
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
            "start": 5925,
            "end": 5928
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo16",
              "optional": false,
              "typeAnnotation": null,
              "start": 5931,
              "end": 5936
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r16arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 5937,
                "end": 5944
              }
            ],
            "optional": false,
            "start": 5931,
            "end": 5945
          },
          "definite": false,
          "start": 5925,
          "end": 5945
        }
      ],
      "declare": false,
      "start": 5921,
      "end": 5946
    },
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
            "typeAnnotation": null,
            "start": 5952,
            "end": 5959
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
                    "start": 5963,
                    "end": 5964
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 5963,
                  "end": 5964
                }
              ],
              "start": 5962,
              "end": 5965
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
                              "start": 5973,
                              "end": 5974
                            },
                            "typeArguments": null,
                            "start": 5973,
                            "end": 5974
                          },
                          "start": 5971,
                          "end": 5974
                        },
                        "start": 5970,
                        "end": 5974
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
                          "start": 5979,
                          "end": 5980
                        },
                        "typeArguments": null,
                        "start": 5979,
                        "end": 5980
                      },
                      "start": 5976,
                      "end": 5980
                    },
                    "start": 5969,
                    "end": 5980
                  },
                  "start": 5967,
                  "end": 5980
                },
                "start": 5966,
                "end": 5980
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
                    "start": 5986,
                    "end": 5987
                  },
                  "typeArguments": null,
                  "start": 5986,
                  "end": 5987
                },
                "start": 5986,
                "end": 5989
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 5990,
                "end": 5994
              },
              "start": 5985,
              "end": 5994
            },
            "id": null,
            "generator": false,
            "start": 5962,
            "end": 5994
          },
          "definite": false,
          "start": 5952,
          "end": 5994
        }
      ],
      "declare": false,
      "start": 5948,
      "end": 5995
    },
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
            "start": 6000,
            "end": 6003
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo17",
              "optional": false,
              "typeAnnotation": null,
              "start": 6006,
              "end": 6011
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r17arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 6012,
                "end": 6019
              }
            ],
            "optional": false,
            "start": 6006,
            "end": 6020
          },
          "definite": false,
          "start": 6000,
          "end": 6020
        }
      ],
      "declare": false,
      "start": 5996,
      "end": 6021
    },
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
            "typeAnnotation": null,
            "start": 6033,
            "end": 6040
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
                    "start": 6044,
                    "end": 6045
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 6044,
                  "end": 6045
                }
              ],
              "start": 6043,
              "end": 6046
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
                              "start": 6054,
                              "end": 6055
                            },
                            "typeArguments": null,
                            "start": 6054,
                            "end": 6055
                          },
                          "start": 6052,
                          "end": 6055
                        },
                        "start": 6051,
                        "end": 6055
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
                          "start": 6060,
                          "end": 6061
                        },
                        "typeArguments": null,
                        "start": 6060,
                        "end": 6061
                      },
                      "start": 6057,
                      "end": 6061
                    },
                    "start": 6050,
                    "end": 6061
                  },
                  "start": 6048,
                  "end": 6061
                },
                "start": 6047,
                "end": 6061
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
                    "start": 6067,
                    "end": 6068
                  },
                  "typeArguments": null,
                  "start": 6067,
                  "end": 6068
                },
                "start": 6067,
                "end": 6070
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 6071,
                "end": 6075
              },
              "start": 6066,
              "end": 6075
            },
            "id": null,
            "generator": false,
            "start": 6043,
            "end": 6075
          },
          "definite": false,
          "start": 6033,
          "end": 6075
        }
      ],
      "declare": false,
      "start": 6029,
      "end": 6076
    },
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
            "start": 6081,
            "end": 6084
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo18",
              "optional": false,
              "typeAnnotation": null,
              "start": 6087,
              "end": 6092
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r18arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 6093,
                "end": 6100
              }
            ],
            "optional": false,
            "start": 6087,
            "end": 6101
          },
          "definite": false,
          "start": 6081,
          "end": 6101
        }
      ],
      "declare": false,
      "start": 6077,
      "end": 6102
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 102,
  "end": 6103
}
```
