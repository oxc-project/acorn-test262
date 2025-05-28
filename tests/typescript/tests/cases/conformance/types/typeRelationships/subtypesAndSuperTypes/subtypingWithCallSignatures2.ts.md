__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 102,
  "end": 6103,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 102,
      "end": 129,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 112,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 113,
        "end": 129,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 115,
            "end": 127,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 115,
              "end": 118,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 130,
      "end": 173,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 143,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 152,
        "end": 156,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 157,
        "end": 173,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 159,
            "end": 171,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 159,
              "end": 162,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 174,
      "end": 221,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 180,
        "end": 188,
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 197,
        "end": 204,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 205,
        "end": 221,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 207,
            "end": 219,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 207,
              "end": 210,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 222,
      "end": 271,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 228,
        "end": 240,
        "decorators": [],
        "name": "OtherDerived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 249,
        "end": 253,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 254,
        "end": 271,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 256,
            "end": 269,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 256,
              "end": 260,
              "decorators": [],
              "name": "bing",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 273,
      "end": 333,
      "id": {
        "type": "Identifier",
        "start": 290,
        "end": 294,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 295,
          "end": 321,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 296,
            "end": 321,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 298,
              "end": 321,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 299,
                  "end": 308,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 300,
                    "end": 308,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 302,
                      "end": 308
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 310,
                "end": 321,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 313,
                  "end": 321,
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 313,
                    "end": 319
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 322,
        "end": 332,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 324,
          "end": 332,
          "exprName": {
            "type": "Identifier",
            "start": 331,
            "end": 332,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 334,
      "end": 369,
      "id": {
        "type": "Identifier",
        "start": 351,
        "end": 355,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 356,
          "end": 362,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 357,
            "end": 362,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 359,
              "end": 362
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 363,
        "end": 368,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 365,
          "end": 368
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 371,
      "end": 431,
      "id": {
        "type": "Identifier",
        "start": 388,
        "end": 392,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 393,
          "end": 419,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 394,
            "end": 419,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 396,
              "end": 419,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 397,
                  "end": 406,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 398,
                    "end": 406,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 400,
                      "end": 406
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 408,
                "end": 419,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 411,
                  "end": 419,
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 411,
                    "end": 417
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 420,
        "end": 430,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 422,
          "end": 430,
          "exprName": {
            "type": "Identifier",
            "start": 429,
            "end": 430,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 432,
      "end": 467,
      "id": {
        "type": "Identifier",
        "start": 449,
        "end": 453,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 454,
          "end": 460,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 455,
            "end": 460,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 457,
              "end": 460
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 461,
        "end": 466,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 463,
          "end": 466
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 469,
      "end": 525,
      "id": {
        "type": "Identifier",
        "start": 486,
        "end": 490,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 491,
          "end": 513,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 492,
            "end": 513,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 494,
              "end": 513,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 495,
                  "end": 504,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 496,
                    "end": 504,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 498,
                      "end": 504
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 506,
                "end": 513,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 509,
                  "end": 513
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 514,
        "end": 524,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 516,
          "end": 524,
          "exprName": {
            "type": "Identifier",
            "start": 523,
            "end": 524,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 526,
      "end": 561,
      "id": {
        "type": "Identifier",
        "start": 543,
        "end": 547,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 548,
          "end": 554,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 549,
            "end": 554,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 551,
              "end": 554
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 555,
        "end": 560,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 557,
          "end": 560
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 563,
      "end": 632,
      "id": {
        "type": "Identifier",
        "start": 580,
        "end": 584,
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 585,
          "end": 620,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 586,
            "end": 620,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 588,
              "end": 620,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 589,
                  "end": 598,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 590,
                    "end": 598,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 592,
                      "end": 598
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 600,
                  "end": 609,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 601,
                    "end": 609,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 603,
                      "end": 609
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 611,
                "end": 620,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 614,
                  "end": 620
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 621,
        "end": 631,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 623,
          "end": 631,
          "exprName": {
            "type": "Identifier",
            "start": 630,
            "end": 631,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 633,
      "end": 668,
      "id": {
        "type": "Identifier",
        "start": 650,
        "end": 654,
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 655,
          "end": 661,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 656,
            "end": 661,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 658,
              "end": 661
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 662,
        "end": 667,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 664,
          "end": 667
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 670,
      "end": 745,
      "id": {
        "type": "Identifier",
        "start": 687,
        "end": 691,
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 692,
          "end": 733,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 693,
            "end": 733,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 695,
              "end": 733,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 696,
                  "end": 722,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 697,
                    "end": 722,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 699,
                      "end": 722,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 700,
                          "end": 711,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 703,
                            "end": 711,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 705,
                              "end": 711
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 713,
                        "end": 722,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 716,
                          "end": 722
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 724,
                "end": 733,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 727,
                  "end": 733
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 734,
        "end": 744,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 736,
          "end": 744,
          "exprName": {
            "type": "Identifier",
            "start": 743,
            "end": 744,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 746,
      "end": 781,
      "id": {
        "type": "Identifier",
        "start": 763,
        "end": 767,
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 768,
          "end": 774,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 769,
            "end": 774,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 771,
              "end": 774
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 775,
        "end": 780,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 777,
          "end": 780
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 783,
      "end": 855,
      "id": {
        "type": "Identifier",
        "start": 800,
        "end": 804,
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 805,
          "end": 843,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 806,
            "end": 843,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 808,
              "end": 843,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 809,
                  "end": 834,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 810,
                    "end": 834,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 812,
                      "end": 834,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 813,
                          "end": 822,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 816,
                            "end": 822,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 818,
                              "end": 822,
                              "typeName": {
                                "type": "Identifier",
                                "start": 818,
                                "end": 822,
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 824,
                        "end": 834,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 827,
                          "end": 834,
                          "typeName": {
                            "type": "Identifier",
                            "start": 827,
                            "end": 834,
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 836,
                "end": 843,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 839,
                  "end": 843,
                  "typeName": {
                    "type": "Identifier",
                    "start": 839,
                    "end": 843,
                    "decorators": [],
                    "name": "Base",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 844,
        "end": 854,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 846,
          "end": 854,
          "exprName": {
            "type": "Identifier",
            "start": 853,
            "end": 854,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 856,
      "end": 891,
      "id": {
        "type": "Identifier",
        "start": 873,
        "end": 877,
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 878,
          "end": 884,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 879,
            "end": 884,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 881,
              "end": 884
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 885,
        "end": 890,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 887,
          "end": 890
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 893,
      "end": 981,
      "id": {
        "type": "Identifier",
        "start": 910,
        "end": 914,
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 915,
          "end": 969,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 916,
            "end": 969,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 918,
              "end": 969,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 919,
                  "end": 944,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 920,
                    "end": 944,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 922,
                      "end": 944,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 923,
                          "end": 932,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 926,
                            "end": 932,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 928,
                              "end": 932,
                              "typeName": {
                                "type": "Identifier",
                                "start": 928,
                                "end": 932,
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 934,
                        "end": 944,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 937,
                          "end": 944,
                          "typeName": {
                            "type": "Identifier",
                            "start": 937,
                            "end": 944,
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 946,
                "end": 969,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 949,
                  "end": 969,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 950,
                      "end": 957,
                      "decorators": [],
                      "name": "r",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 951,
                        "end": 957,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 953,
                          "end": 957,
                          "typeName": {
                            "type": "Identifier",
                            "start": 953,
                            "end": 957,
                            "decorators": [],
                            "name": "Base",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 959,
                    "end": 969,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 962,
                      "end": 969,
                      "typeName": {
                        "type": "Identifier",
                        "start": 962,
                        "end": 969,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 970,
        "end": 980,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 972,
          "end": 980,
          "exprName": {
            "type": "Identifier",
            "start": 979,
            "end": 980,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 982,
      "end": 1017,
      "id": {
        "type": "Identifier",
        "start": 999,
        "end": 1003,
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1004,
          "end": 1010,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1005,
            "end": 1010,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1007,
              "end": 1010
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1011,
        "end": 1016,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1013,
          "end": 1016
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1019,
      "end": 1135,
      "id": {
        "type": "Identifier",
        "start": 1036,
        "end": 1040,
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1041,
          "end": 1123,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1042,
            "end": 1123,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1044,
              "end": 1123,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1045,
                  "end": 1070,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1046,
                    "end": 1070,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 1048,
                      "end": 1070,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1049,
                          "end": 1058,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1052,
                            "end": 1058,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1054,
                              "end": 1058,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1054,
                                "end": 1058,
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1060,
                        "end": 1070,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1063,
                          "end": 1070,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1063,
                            "end": 1070,
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1072,
                  "end": 1098,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1073,
                    "end": 1098,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 1075,
                      "end": 1098,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1076,
                          "end": 1086,
                          "decorators": [],
                          "name": "arg2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1080,
                            "end": 1086,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1082,
                              "end": 1086,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1082,
                                "end": 1086,
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1088,
                        "end": 1098,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1091,
                          "end": 1098,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1091,
                            "end": 1098,
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1100,
                "end": 1123,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 1103,
                  "end": 1123,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1104,
                      "end": 1111,
                      "decorators": [],
                      "name": "r",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1105,
                        "end": 1111,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1107,
                          "end": 1111,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1107,
                            "end": 1111,
                            "decorators": [],
                            "name": "Base",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1113,
                    "end": 1123,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1116,
                      "end": 1123,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1116,
                        "end": 1123,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1124,
        "end": 1134,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 1126,
          "end": 1134,
          "exprName": {
            "type": "Identifier",
            "start": 1133,
            "end": 1134,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1136,
      "end": 1171,
      "id": {
        "type": "Identifier",
        "start": 1153,
        "end": 1157,
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1158,
          "end": 1164,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1159,
            "end": 1164,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1161,
              "end": 1164
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1165,
        "end": 1170,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1167,
          "end": 1170
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1173,
      "end": 1289,
      "id": {
        "type": "Identifier",
        "start": 1190,
        "end": 1194,
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1195,
          "end": 1277,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1196,
            "end": 1277,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1198,
              "end": 1277,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1199,
                  "end": 1224,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1200,
                    "end": 1224,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 1202,
                      "end": 1224,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1203,
                          "end": 1212,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1206,
                            "end": 1212,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1208,
                              "end": 1212,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1208,
                                "end": 1212,
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1214,
                        "end": 1224,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1217,
                          "end": 1224,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1217,
                            "end": 1224,
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1226,
                  "end": 1252,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1227,
                    "end": 1252,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 1229,
                      "end": 1252,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1230,
                          "end": 1240,
                          "decorators": [],
                          "name": "arg2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1234,
                            "end": 1240,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1236,
                              "end": 1240,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1236,
                                "end": 1240,
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1242,
                        "end": 1252,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1245,
                          "end": 1252,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1245,
                            "end": 1252,
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1254,
                "end": 1277,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 1257,
                  "end": 1277,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1258,
                      "end": 1265,
                      "decorators": [],
                      "name": "r",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1259,
                        "end": 1265,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1261,
                          "end": 1265,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1261,
                            "end": 1265,
                            "decorators": [],
                            "name": "Base",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1267,
                    "end": 1277,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1270,
                      "end": 1277,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1270,
                        "end": 1277,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1278,
        "end": 1288,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 1280,
          "end": 1288,
          "exprName": {
            "type": "Identifier",
            "start": 1287,
            "end": 1288,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1290,
      "end": 1325,
      "id": {
        "type": "Identifier",
        "start": 1307,
        "end": 1311,
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1312,
          "end": 1318,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1313,
            "end": 1318,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1315,
              "end": 1318
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1319,
        "end": 1324,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1321,
          "end": 1324
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1327,
      "end": 1393,
      "id": {
        "type": "Identifier",
        "start": 1344,
        "end": 1349,
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1350,
          "end": 1381,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1351,
            "end": 1381,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1353,
              "end": 1381,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 1354,
                  "end": 1369,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 1357,
                    "end": 1358,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1358,
                    "end": 1369,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1360,
                      "end": 1369,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 1360,
                        "end": 1367,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1360,
                          "end": 1367,
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null
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
                "start": 1371,
                "end": 1381,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1374,
                  "end": 1381,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1374,
                    "end": 1381,
                    "decorators": [],
                    "name": "Derived",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1382,
        "end": 1392,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 1384,
          "end": 1392,
          "exprName": {
            "type": "Identifier",
            "start": 1391,
            "end": 1392,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1394,
      "end": 1430,
      "id": {
        "type": "Identifier",
        "start": 1411,
        "end": 1416,
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1417,
          "end": 1423,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1418,
            "end": 1423,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1420,
              "end": 1423
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1424,
        "end": 1429,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1426,
          "end": 1429
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1432,
      "end": 1531,
      "id": {
        "type": "Identifier",
        "start": 1449,
        "end": 1454,
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1455,
          "end": 1519,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1456,
            "end": 1519,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1458,
              "end": 1519,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1459,
                  "end": 1477,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1460,
                    "end": 1477,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 1462,
                      "end": 1477,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 1464,
                          "end": 1475,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1464,
                            "end": 1467,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1467,
                            "end": 1475,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1469,
                              "end": 1475
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1479,
                  "end": 1510,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1480,
                    "end": 1510,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 1482,
                      "end": 1510,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 1484,
                          "end": 1496,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1484,
                            "end": 1487,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1487,
                            "end": 1495,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1489,
                              "end": 1495
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 1497,
                          "end": 1508,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1497,
                            "end": 1500,
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1500,
                            "end": 1508,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1502,
                              "end": 1508
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1512,
                "end": 1519,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1515,
                  "end": 1519,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1515,
                    "end": 1519,
                    "decorators": [],
                    "name": "Base",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1520,
        "end": 1530,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 1522,
          "end": 1530,
          "exprName": {
            "type": "Identifier",
            "start": 1529,
            "end": 1530,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1532,
      "end": 1568,
      "id": {
        "type": "Identifier",
        "start": 1549,
        "end": 1554,
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1555,
          "end": 1561,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1556,
            "end": 1561,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1558,
              "end": 1561
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1562,
        "end": 1567,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1564,
          "end": 1567
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1570,
      "end": 1662,
      "id": {
        "type": "Identifier",
        "start": 1587,
        "end": 1592,
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1593,
          "end": 1650,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1594,
            "end": 1650,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1596,
              "end": 1650,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1597,
                  "end": 1611,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1598,
                    "end": 1611,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1600,
                      "end": 1611,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1600,
                        "end": 1605,
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1605,
                        "end": 1611,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1606,
                            "end": 1610,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1606,
                              "end": 1610,
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1613,
                  "end": 1631,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1614,
                    "end": 1631,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1616,
                      "end": 1631,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1616,
                        "end": 1621,
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1621,
                        "end": 1631,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1622,
                            "end": 1630,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1622,
                              "end": 1630,
                              "decorators": [],
                              "name": "Derived2",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1633,
                "end": 1650,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1636,
                  "end": 1650,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1636,
                    "end": 1641,
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1641,
                    "end": 1650,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1642,
                        "end": 1649,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1642,
                          "end": 1649,
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1651,
        "end": 1661,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 1653,
          "end": 1661,
          "exprName": {
            "type": "Identifier",
            "start": 1660,
            "end": 1661,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1663,
      "end": 1699,
      "id": {
        "type": "Identifier",
        "start": 1680,
        "end": 1685,
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1686,
          "end": 1692,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1687,
            "end": 1692,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1689,
              "end": 1692
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1693,
        "end": 1698,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1695,
          "end": 1698
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1701,
      "end": 1792,
      "id": {
        "type": "Identifier",
        "start": 1718,
        "end": 1723,
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1724,
          "end": 1780,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1725,
            "end": 1780,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1727,
              "end": 1780,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1728,
                  "end": 1742,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1729,
                    "end": 1742,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1731,
                      "end": 1742,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1731,
                        "end": 1736,
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1736,
                        "end": 1742,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1737,
                            "end": 1741,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1737,
                              "end": 1741,
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1744,
                  "end": 1761,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1745,
                    "end": 1761,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1747,
                      "end": 1761,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1747,
                        "end": 1752,
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1752,
                        "end": 1761,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1753,
                            "end": 1760,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1753,
                              "end": 1760,
                              "decorators": [],
                              "name": "Derived",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1763,
                "end": 1780,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1766,
                  "end": 1780,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1766,
                    "end": 1771,
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1771,
                    "end": 1780,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1772,
                        "end": 1779,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1772,
                          "end": 1779,
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1781,
        "end": 1791,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 1783,
          "end": 1791,
          "exprName": {
            "type": "Identifier",
            "start": 1790,
            "end": 1791,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1793,
      "end": 1829,
      "id": {
        "type": "Identifier",
        "start": 1810,
        "end": 1815,
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1816,
          "end": 1822,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1817,
            "end": 1822,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1819,
              "end": 1822
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1823,
        "end": 1828,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1825,
          "end": 1828
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1831,
      "end": 1908,
      "id": {
        "type": "Identifier",
        "start": 1848,
        "end": 1853,
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1854,
          "end": 1896,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1855,
            "end": 1896,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1857,
              "end": 1896,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1858,
                  "end": 1885,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1859,
                    "end": 1885,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 1861,
                      "end": 1885,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 1863,
                          "end": 1873,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1863,
                            "end": 1864,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1864,
                            "end": 1872,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1866,
                              "end": 1872
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 1874,
                          "end": 1883,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1874,
                            "end": 1875,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1875,
                            "end": 1883,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1877,
                              "end": 1883
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1887,
                "end": 1896,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1890,
                  "end": 1896,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1890,
                    "end": 1896,
                    "decorators": [],
                    "name": "Object",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1897,
        "end": 1907,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 1899,
          "end": 1907,
          "exprName": {
            "type": "Identifier",
            "start": 1906,
            "end": 1907,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1909,
      "end": 1945,
      "id": {
        "type": "Identifier",
        "start": 1926,
        "end": 1931,
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1932,
          "end": 1938,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1933,
            "end": 1938,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1935,
              "end": 1938
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1939,
        "end": 1944,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1941,
          "end": 1944
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1947,
      "end": 2044,
      "id": {
        "type": "Identifier",
        "start": 1964,
        "end": 1969,
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1970,
          "end": 2032,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1971,
            "end": 2032,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 1973,
              "end": 2032,
              "members": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 1980,
                  "end": 2002,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1981,
                      "end": 1990,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1982,
                        "end": 1990,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1984,
                          "end": 1990
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1991,
                    "end": 2001,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1993,
                      "end": 2001,
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 1993,
                        "end": 1999
                      }
                    }
                  }
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 2007,
                  "end": 2029,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2008,
                      "end": 2017,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2009,
                        "end": 2017,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2011,
                          "end": 2017
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2018,
                    "end": 2028,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 2020,
                      "end": 2028,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 2020,
                        "end": 2026
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2033,
        "end": 2043,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 2035,
          "end": 2043,
          "exprName": {
            "type": "Identifier",
            "start": 2042,
            "end": 2043,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2045,
      "end": 2081,
      "id": {
        "type": "Identifier",
        "start": 2062,
        "end": 2067,
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2068,
          "end": 2074,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2069,
            "end": 2074,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2071,
              "end": 2074
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2075,
        "end": 2080,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 2077,
          "end": 2080
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2083,
      "end": 2203,
      "id": {
        "type": "Identifier",
        "start": 2100,
        "end": 2105,
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2106,
          "end": 2191,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2107,
            "end": 2191,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 2109,
              "end": 2191,
              "members": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 2115,
                  "end": 2151,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 2115,
                    "end": 2134,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 2116,
                        "end": 2133,
                        "name": {
                          "type": "Identifier",
                          "start": 2116,
                          "end": 2117,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 2126,
                          "end": 2133,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2126,
                            "end": 2133,
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null
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
                      "start": 2135,
                      "end": 2139,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2136,
                        "end": 2139,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2138,
                          "end": 2139,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2138,
                            "end": 2139,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2140,
                    "end": 2150,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 2142,
                      "end": 2150,
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 2142,
                        "end": 2148
                      }
                    }
                  }
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 2156,
                  "end": 2189,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 2156,
                    "end": 2172,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 2157,
                        "end": 2171,
                        "name": {
                          "type": "Identifier",
                          "start": 2157,
                          "end": 2158,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 2167,
                          "end": 2171,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2167,
                            "end": 2171,
                            "decorators": [],
                            "name": "Base",
                            "optional": false,
                            "typeAnnotation": null
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
                      "start": 2173,
                      "end": 2177,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2174,
                        "end": 2177,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2176,
                          "end": 2177,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2176,
                            "end": 2177,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2178,
                    "end": 2188,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 2180,
                      "end": 2188,
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 2180,
                        "end": 2186
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2192,
        "end": 2202,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 2194,
          "end": 2202,
          "exprName": {
            "type": "Identifier",
            "start": 2201,
            "end": 2202,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2204,
      "end": 2240,
      "id": {
        "type": "Identifier",
        "start": 2221,
        "end": 2226,
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2227,
          "end": 2233,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2228,
            "end": 2233,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2230,
              "end": 2233
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2234,
        "end": 2239,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 2236,
          "end": 2239
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2242,
      "end": 2367,
      "id": {
        "type": "Identifier",
        "start": 2259,
        "end": 2264,
        "decorators": [],
        "name": "foo17",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2265,
          "end": 2355,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2266,
            "end": 2355,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 2268,
              "end": 2355,
              "members": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 2274,
                  "end": 2311,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2275,
                      "end": 2299,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2276,
                        "end": 2299,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 2278,
                          "end": 2299,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 2279,
                              "end": 2288,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 2280,
                                "end": 2288,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 2282,
                                  "end": 2288
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 2290,
                            "end": 2299,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2293,
                              "end": 2299
                            }
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2300,
                    "end": 2310,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 2302,
                      "end": 2310,
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 2302,
                        "end": 2308
                      }
                    }
                  }
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 2316,
                  "end": 2353,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2317,
                      "end": 2341,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2318,
                        "end": 2341,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 2320,
                          "end": 2341,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 2321,
                              "end": 2330,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 2322,
                                "end": 2330,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 2324,
                                  "end": 2330
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 2332,
                            "end": 2341,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2335,
                              "end": 2341
                            }
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2342,
                    "end": 2352,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 2344,
                      "end": 2352,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 2344,
                        "end": 2350
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2356,
        "end": 2366,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 2358,
          "end": 2366,
          "exprName": {
            "type": "Identifier",
            "start": 2365,
            "end": 2366,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2368,
      "end": 2404,
      "id": {
        "type": "Identifier",
        "start": 2385,
        "end": 2390,
        "decorators": [],
        "name": "foo17",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2391,
          "end": 2397,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2392,
            "end": 2397,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2394,
              "end": 2397
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2398,
        "end": 2403,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 2400,
          "end": 2403
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2406,
      "end": 2611,
      "id": {
        "type": "Identifier",
        "start": 2423,
        "end": 2428,
        "decorators": [],
        "name": "foo18",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2429,
          "end": 2599,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2430,
            "end": 2599,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 2432,
              "end": 2599,
              "members": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 2438,
                  "end": 2516,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2439,
                      "end": 2507,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2440,
                        "end": 2507,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 2442,
                          "end": 2507,
                          "members": [
                            {
                              "type": "TSCallSignatureDeclaration",
                              "start": 2452,
                              "end": 2472,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 2453,
                                  "end": 2462,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 2454,
                                    "end": 2462,
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 2456,
                                      "end": 2462
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 2463,
                                "end": 2471,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 2465,
                                  "end": 2471
                                }
                              }
                            },
                            {
                              "type": "TSCallSignatureDeclaration",
                              "start": 2481,
                              "end": 2501,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 2482,
                                  "end": 2491,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 2483,
                                    "end": 2491,
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 2485,
                                      "end": 2491
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 2492,
                                "end": 2500,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 2494,
                                  "end": 2500
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2508,
                    "end": 2515,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 2510,
                      "end": 2515,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 2510,
                        "end": 2513
                      }
                    }
                  }
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 2521,
                  "end": 2597,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2522,
                      "end": 2588,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2523,
                        "end": 2588,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 2525,
                          "end": 2588,
                          "members": [
                            {
                              "type": "TSCallSignatureDeclaration",
                              "start": 2535,
                              "end": 2557,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 2536,
                                  "end": 2546,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 2537,
                                    "end": 2546,
                                    "typeAnnotation": {
                                      "type": "TSBooleanKeyword",
                                      "start": 2539,
                                      "end": 2546
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 2547,
                                "end": 2556,
                                "typeAnnotation": {
                                  "type": "TSBooleanKeyword",
                                  "start": 2549,
                                  "end": 2556
                                }
                              }
                            },
                            {
                              "type": "TSCallSignatureDeclaration",
                              "start": 2566,
                              "end": 2582,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 2567,
                                  "end": 2574,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 2568,
                                    "end": 2574,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 2570,
                                      "end": 2574,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 2570,
                                        "end": 2574,
                                        "decorators": [],
                                        "name": "Date",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 2575,
                                "end": 2581,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 2577,
                                  "end": 2581,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2577,
                                    "end": 2581,
                                    "decorators": [],
                                    "name": "Date",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2589,
                    "end": 2596,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 2591,
                      "end": 2596,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 2591,
                        "end": 2594
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2600,
        "end": 2610,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 2602,
          "end": 2610,
          "exprName": {
            "type": "Identifier",
            "start": 2609,
            "end": 2610,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2612,
      "end": 2648,
      "id": {
        "type": "Identifier",
        "start": 2629,
        "end": 2634,
        "decorators": [],
        "name": "foo18",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2635,
          "end": 2641,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2636,
            "end": 2641,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2638,
              "end": 2641
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2642,
        "end": 2647,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 2644,
          "end": 2647
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2650,
      "end": 2680,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2654,
          "end": 2679,
          "id": {
            "type": "Identifier",
            "start": 2654,
            "end": 2660,
            "decorators": [],
            "name": "r1arg1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 2663,
            "end": 2679,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2663,
              "end": 2666,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2664,
                  "end": 2665,
                  "name": {
                    "type": "Identifier",
                    "start": 2664,
                    "end": 2665,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
                "start": 2667,
                "end": 2671,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2668,
                  "end": 2671,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2670,
                    "end": 2671,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2670,
                      "end": 2671,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrayExpression",
              "start": 2676,
              "end": 2679,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 2677,
                  "end": 2678,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2681,
      "end": 2713,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2685,
          "end": 2712,
          "id": {
            "type": "Identifier",
            "start": 2685,
            "end": 2691,
            "decorators": [],
            "name": "r1arg2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 2694,
            "end": 2712,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 2695,
                "end": 2704,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2696,
                  "end": 2704,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2698,
                    "end": 2704
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrayExpression",
              "start": 2709,
              "end": 2712,
              "elements": [
                {
                  "type": "Literal",
                  "start": 2710,
                  "end": 2711,
                  "value": 1,
                  "raw": "1"
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2714,
      "end": 2736,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2718,
          "end": 2735,
          "id": {
            "type": "Identifier",
            "start": 2718,
            "end": 2720,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 2723,
            "end": 2735,
            "callee": {
              "type": "Identifier",
              "start": 2723,
              "end": 2727,
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 2728,
                "end": 2734,
                "decorators": [],
                "name": "r1arg1",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2792,
      "end": 2819,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2796,
          "end": 2818,
          "id": {
            "type": "Identifier",
            "start": 2796,
            "end": 2799,
            "decorators": [],
            "name": "r1a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 2802,
            "end": 2818,
            "elements": [
              {
                "type": "Identifier",
                "start": 2803,
                "end": 2809,
                "decorators": [],
                "name": "r1arg2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 2811,
                "end": 2817,
                "decorators": [],
                "name": "r1arg1",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2869,
      "end": 2896,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2873,
          "end": 2895,
          "id": {
            "type": "Identifier",
            "start": 2873,
            "end": 2876,
            "decorators": [],
            "name": "r1b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 2879,
            "end": 2895,
            "elements": [
              {
                "type": "Identifier",
                "start": 2880,
                "end": 2886,
                "decorators": [],
                "name": "r1arg1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 2888,
                "end": 2894,
                "decorators": [],
                "name": "r1arg2",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2947,
      "end": 2978,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2951,
          "end": 2977,
          "id": {
            "type": "Identifier",
            "start": 2951,
            "end": 2957,
            "decorators": [],
            "name": "r2arg1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 2960,
            "end": 2977,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2960,
              "end": 2963,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2961,
                  "end": 2962,
                  "name": {
                    "type": "Identifier",
                    "start": 2961,
                    "end": 2962,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
                "start": 2964,
                "end": 2968,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2965,
                  "end": 2968,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2967,
                    "end": 2968,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2967,
                      "end": 2968,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrayExpression",
              "start": 2973,
              "end": 2977,
              "elements": [
                {
                  "type": "Literal",
                  "start": 2974,
                  "end": 2976,
                  "value": "",
                  "raw": "''"
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2979,
      "end": 3012,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2983,
          "end": 3011,
          "id": {
            "type": "Identifier",
            "start": 2983,
            "end": 2989,
            "decorators": [],
            "name": "r2arg2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 2992,
            "end": 3011,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 2993,
                "end": 3002,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2994,
                  "end": 3002,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2996,
                    "end": 3002
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrayExpression",
              "start": 3007,
              "end": 3011,
              "elements": [
                {
                  "type": "Literal",
                  "start": 3008,
                  "end": 3010,
                  "value": "",
                  "raw": "''"
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3013,
      "end": 3035,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3017,
          "end": 3034,
          "id": {
            "type": "Identifier",
            "start": 3017,
            "end": 3019,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 3022,
            "end": 3034,
            "callee": {
              "type": "Identifier",
              "start": 3022,
              "end": 3026,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 3027,
                "end": 3033,
                "decorators": [],
                "name": "r2arg1",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3037,
      "end": 3064,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3041,
          "end": 3063,
          "id": {
            "type": "Identifier",
            "start": 3041,
            "end": 3044,
            "decorators": [],
            "name": "r2a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 3047,
            "end": 3063,
            "elements": [
              {
                "type": "Identifier",
                "start": 3048,
                "end": 3054,
                "decorators": [],
                "name": "r2arg1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 3056,
                "end": 3062,
                "decorators": [],
                "name": "r2arg2",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3065,
      "end": 3092,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3069,
          "end": 3091,
          "id": {
            "type": "Identifier",
            "start": 3069,
            "end": 3072,
            "decorators": [],
            "name": "r2b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 3075,
            "end": 3091,
            "elements": [
              {
                "type": "Identifier",
                "start": 3076,
                "end": 3082,
                "decorators": [],
                "name": "r2arg2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 3084,
                "end": 3090,
                "decorators": [],
                "name": "r2arg1",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3094,
      "end": 3122,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3098,
          "end": 3121,
          "id": {
            "type": "Identifier",
            "start": 3098,
            "end": 3104,
            "decorators": [],
            "name": "r3arg1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 3107,
            "end": 3121,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3107,
              "end": 3110,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3108,
                  "end": 3109,
                  "name": {
                    "type": "Identifier",
                    "start": 3108,
                    "end": 3109,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
                "start": 3111,
                "end": 3115,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3112,
                  "end": 3115,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3114,
                    "end": 3115,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3114,
                      "end": 3115,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "start": 3120,
              "end": 3121,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3123,
      "end": 3155,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3127,
          "end": 3154,
          "id": {
            "type": "Identifier",
            "start": 3127,
            "end": 3133,
            "decorators": [],
            "name": "r3arg2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 3136,
            "end": 3154,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 3137,
                "end": 3146,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3138,
                  "end": 3146,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3140,
                    "end": 3146
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 3151,
              "end": 3154,
              "body": []
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3156,
      "end": 3178,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3160,
          "end": 3177,
          "id": {
            "type": "Identifier",
            "start": 3160,
            "end": 3162,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 3165,
            "end": 3177,
            "callee": {
              "type": "Identifier",
              "start": 3165,
              "end": 3169,
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 3170,
                "end": 3176,
                "decorators": [],
                "name": "r3arg1",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3180,
      "end": 3207,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3184,
          "end": 3206,
          "id": {
            "type": "Identifier",
            "start": 3184,
            "end": 3187,
            "decorators": [],
            "name": "r3a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 3190,
            "end": 3206,
            "elements": [
              {
                "type": "Identifier",
                "start": 3191,
                "end": 3197,
                "decorators": [],
                "name": "r3arg1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 3199,
                "end": 3205,
                "decorators": [],
                "name": "r3arg2",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3208,
      "end": 3235,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3212,
          "end": 3234,
          "id": {
            "type": "Identifier",
            "start": 3212,
            "end": 3215,
            "decorators": [],
            "name": "r3b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 3218,
            "end": 3234,
            "elements": [
              {
                "type": "Identifier",
                "start": 3219,
                "end": 3225,
                "decorators": [],
                "name": "r3arg2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 3227,
                "end": 3233,
                "decorators": [],
                "name": "r3arg1",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3237,
      "end": 3274,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3241,
          "end": 3273,
          "id": {
            "type": "Identifier",
            "start": 3241,
            "end": 3247,
            "decorators": [],
            "name": "r4arg1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 3250,
            "end": 3273,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3250,
              "end": 3256,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3251,
                  "end": 3252,
                  "name": {
                    "type": "Identifier",
                    "start": 3251,
                    "end": 3252,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 3254,
                  "end": 3255,
                  "name": {
                    "type": "Identifier",
                    "start": 3254,
                    "end": 3255,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
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
                "start": 3257,
                "end": 3261,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3258,
                  "end": 3261,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3260,
                    "end": 3261,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3260,
                      "end": 3261,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 3263,
                "end": 3267,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3264,
                  "end": 3267,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3266,
                    "end": 3267,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3266,
                      "end": 3267,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "start": 3272,
              "end": 3273,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3275,
      "end": 3317,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3279,
          "end": 3316,
          "id": {
            "type": "Identifier",
            "start": 3279,
            "end": 3285,
            "decorators": [],
            "name": "r4arg2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 3288,
            "end": 3316,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 3289,
                "end": 3298,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3290,
                  "end": 3298,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 3292,
                    "end": 3298
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 3300,
                "end": 3309,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3301,
                  "end": 3309,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3303,
                    "end": 3309
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "start": 3314,
              "end": 3316,
              "value": "",
              "raw": "''"
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3318,
      "end": 3340,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3322,
          "end": 3339,
          "id": {
            "type": "Identifier",
            "start": 3322,
            "end": 3324,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 3327,
            "end": 3339,
            "callee": {
              "type": "Identifier",
              "start": 3327,
              "end": 3331,
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 3332,
                "end": 3338,
                "decorators": [],
                "name": "r4arg1",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3348,
      "end": 3375,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3352,
          "end": 3374,
          "id": {
            "type": "Identifier",
            "start": 3352,
            "end": 3355,
            "decorators": [],
            "name": "r4a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 3358,
            "end": 3374,
            "elements": [
              {
                "type": "Identifier",
                "start": 3359,
                "end": 3365,
                "decorators": [],
                "name": "r4arg1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 3367,
                "end": 3373,
                "decorators": [],
                "name": "r4arg2",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3376,
      "end": 3403,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3380,
          "end": 3402,
          "id": {
            "type": "Identifier",
            "start": 3380,
            "end": 3383,
            "decorators": [],
            "name": "r4b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 3386,
            "end": 3402,
            "elements": [
              {
                "type": "Identifier",
                "start": 3387,
                "end": 3393,
                "decorators": [],
                "name": "r4arg2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 3395,
                "end": 3401,
                "decorators": [],
                "name": "r4arg1",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3405,
      "end": 3454,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3409,
          "end": 3453,
          "id": {
            "type": "Identifier",
            "start": 3409,
            "end": 3415,
            "decorators": [],
            "name": "r5arg1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 3418,
            "end": 3453,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3418,
              "end": 3424,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3419,
                  "end": 3420,
                  "name": {
                    "type": "Identifier",
                    "start": 3419,
                    "end": 3420,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 3422,
                  "end": 3423,
                  "name": {
                    "type": "Identifier",
                    "start": 3422,
                    "end": 3423,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
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
                "start": 3425,
                "end": 3441,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3426,
                  "end": 3441,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 3428,
                    "end": 3441,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3429,
                        "end": 3435,
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3432,
                          "end": 3435,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3434,
                            "end": 3435,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3434,
                              "end": 3435,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 3437,
                      "end": 3441,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3440,
                        "end": 3441,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3440,
                          "end": 3441,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "TSTypeAssertion",
              "start": 3446,
              "end": 3453,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3447,
                "end": 3448,
                "typeName": {
                  "type": "Identifier",
                  "start": 3447,
                  "end": 3448,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "expression": {
                "type": "Literal",
                "start": 3449,
                "end": 3453,
                "value": null,
                "raw": "null"
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3455,
      "end": 3503,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3459,
          "end": 3502,
          "id": {
            "type": "Identifier",
            "start": 3459,
            "end": 3465,
            "decorators": [],
            "name": "r5arg2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 3468,
            "end": 3502,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 3469,
                "end": 3495,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3470,
                  "end": 3495,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 3472,
                    "end": 3495,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3473,
                        "end": 3484,
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3476,
                          "end": 3484,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3478,
                            "end": 3484
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 3486,
                      "end": 3495,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3489,
                        "end": 3495
                      }
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "start": 3500,
              "end": 3502,
              "value": "",
              "raw": "''"
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3504,
      "end": 3526,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3508,
          "end": 3525,
          "id": {
            "type": "Identifier",
            "start": 3508,
            "end": 3510,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 3513,
            "end": 3525,
            "callee": {
              "type": "Identifier",
              "start": 3513,
              "end": 3517,
              "decorators": [],
              "name": "foo5",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 3518,
                "end": 3524,
                "decorators": [],
                "name": "r5arg1",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3534,
      "end": 3561,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3538,
          "end": 3560,
          "id": {
            "type": "Identifier",
            "start": 3538,
            "end": 3541,
            "decorators": [],
            "name": "r5a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 3544,
            "end": 3560,
            "elements": [
              {
                "type": "Identifier",
                "start": 3545,
                "end": 3551,
                "decorators": [],
                "name": "r5arg1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 3553,
                "end": 3559,
                "decorators": [],
                "name": "r5arg2",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3562,
      "end": 3589,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3566,
          "end": 3588,
          "id": {
            "type": "Identifier",
            "start": 3566,
            "end": 3569,
            "decorators": [],
            "name": "r5b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 3572,
            "end": 3588,
            "elements": [
              {
                "type": "Identifier",
                "start": 3573,
                "end": 3579,
                "decorators": [],
                "name": "r5arg2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 3581,
                "end": 3587,
                "decorators": [],
                "name": "r5arg1",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3591,
      "end": 3669,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3595,
          "end": 3668,
          "id": {
            "type": "Identifier",
            "start": 3595,
            "end": 3601,
            "decorators": [],
            "name": "r6arg1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 3604,
            "end": 3668,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3604,
              "end": 3639,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3605,
                  "end": 3619,
                  "name": {
                    "type": "Identifier",
                    "start": 3605,
                    "end": 3606,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 3615,
                    "end": 3619,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3615,
                      "end": 3619,
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null
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
                  "start": 3621,
                  "end": 3638,
                  "name": {
                    "type": "Identifier",
                    "start": 3621,
                    "end": 3622,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 3631,
                    "end": 3638,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3631,
                      "end": 3638,
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null
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
                "start": 3640,
                "end": 3656,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3641,
                  "end": 3656,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 3643,
                    "end": 3656,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3644,
                        "end": 3650,
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3647,
                          "end": 3650,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3649,
                            "end": 3650,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3649,
                              "end": 3650,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 3652,
                      "end": 3656,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3655,
                        "end": 3656,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3655,
                          "end": 3656,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "TSTypeAssertion",
              "start": 3661,
              "end": 3668,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3662,
                "end": 3663,
                "typeName": {
                  "type": "Identifier",
                  "start": 3662,
                  "end": 3663,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "expression": {
                "type": "Literal",
                "start": 3664,
                "end": 3668,
                "value": null,
                "raw": "null"
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3670,
      "end": 3725,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3674,
          "end": 3724,
          "id": {
            "type": "Identifier",
            "start": 3674,
            "end": 3680,
            "decorators": [],
            "name": "r6arg2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 3683,
            "end": 3724,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 3684,
                "end": 3709,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3685,
                  "end": 3709,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 3687,
                    "end": 3709,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3688,
                        "end": 3697,
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3691,
                          "end": 3697,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3693,
                            "end": 3697,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3693,
                              "end": 3697,
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 3699,
                      "end": 3709,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3702,
                        "end": 3709,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3702,
                          "end": 3709,
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "TSTypeAssertion",
              "start": 3714,
              "end": 3724,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3715,
                "end": 3719,
                "typeName": {
                  "type": "Identifier",
                  "start": 3715,
                  "end": 3719,
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "expression": {
                "type": "Literal",
                "start": 3720,
                "end": 3724,
                "value": null,
                "raw": "null"
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3726,
      "end": 3748,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3730,
          "end": 3747,
          "id": {
            "type": "Identifier",
            "start": 3730,
            "end": 3732,
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 3735,
            "end": 3747,
            "callee": {
              "type": "Identifier",
              "start": 3735,
              "end": 3739,
              "decorators": [],
              "name": "foo6",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 3740,
                "end": 3746,
                "decorators": [],
                "name": "r6arg1",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3756,
      "end": 3783,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3760,
          "end": 3782,
          "id": {
            "type": "Identifier",
            "start": 3760,
            "end": 3763,
            "decorators": [],
            "name": "r6a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 3766,
            "end": 3782,
            "elements": [
              {
                "type": "Identifier",
                "start": 3767,
                "end": 3773,
                "decorators": [],
                "name": "r6arg1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 3775,
                "end": 3781,
                "decorators": [],
                "name": "r6arg2",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3784,
      "end": 3811,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3788,
          "end": 3810,
          "id": {
            "type": "Identifier",
            "start": 3788,
            "end": 3791,
            "decorators": [],
            "name": "r6b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 3794,
            "end": 3810,
            "elements": [
              {
                "type": "Identifier",
                "start": 3795,
                "end": 3801,
                "decorators": [],
                "name": "r6arg2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 3803,
                "end": 3809,
                "decorators": [],
                "name": "r6arg1",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3813,
      "end": 3901,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3817,
          "end": 3900,
          "id": {
            "type": "Identifier",
            "start": 3817,
            "end": 3823,
            "decorators": [],
            "name": "r7arg1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 3826,
            "end": 3900,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3826,
              "end": 3861,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3827,
                  "end": 3841,
                  "name": {
                    "type": "Identifier",
                    "start": 3827,
                    "end": 3828,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 3837,
                    "end": 3841,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3837,
                      "end": 3841,
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null
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
                  "start": 3843,
                  "end": 3860,
                  "name": {
                    "type": "Identifier",
                    "start": 3843,
                    "end": 3844,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 3853,
                    "end": 3860,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3853,
                      "end": 3860,
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null
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
                "start": 3862,
                "end": 3878,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3863,
                  "end": 3878,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 3865,
                    "end": 3878,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3866,
                        "end": 3872,
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3869,
                          "end": 3872,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3871,
                            "end": 3872,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3871,
                              "end": 3872,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 3874,
                      "end": 3878,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3877,
                        "end": 3878,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3877,
                          "end": 3878,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrowFunctionExpression",
              "start": 3883,
              "end": 3900,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3884,
                  "end": 3888,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3885,
                    "end": 3888,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3887,
                      "end": 3888,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3887,
                        "end": 3888,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "TSTypeAssertion",
                "start": 3893,
                "end": 3900,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3894,
                  "end": 3895,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3894,
                    "end": 3895,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "expression": {
                  "type": "Literal",
                  "start": 3896,
                  "end": 3900,
                  "value": null,
                  "raw": "null"
                }
              },
              "id": null,
              "generator": false
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3902,
      "end": 3973,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3906,
          "end": 3972,
          "id": {
            "type": "Identifier",
            "start": 3906,
            "end": 3912,
            "decorators": [],
            "name": "r7arg2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 3915,
            "end": 3972,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 3916,
                "end": 3941,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3917,
                  "end": 3941,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 3919,
                    "end": 3941,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3920,
                        "end": 3929,
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3923,
                          "end": 3929,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3925,
                            "end": 3929,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3925,
                              "end": 3929,
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 3931,
                      "end": 3941,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3934,
                        "end": 3941,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3934,
                          "end": 3941,
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrowFunctionExpression",
              "start": 3946,
              "end": 3972,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3947,
                  "end": 3954,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3948,
                    "end": 3954,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3950,
                      "end": 3954,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3950,
                        "end": 3954,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "TSTypeAssertion",
                "start": 3959,
                "end": 3972,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3960,
                  "end": 3967,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3960,
                    "end": 3967,
                    "decorators": [],
                    "name": "Derived",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "expression": {
                  "type": "Literal",
                  "start": 3968,
                  "end": 3972,
                  "value": null,
                  "raw": "null"
                }
              },
              "id": null,
              "generator": false
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3974,
      "end": 3996,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3978,
          "end": 3995,
          "id": {
            "type": "Identifier",
            "start": 3978,
            "end": 3980,
            "decorators": [],
            "name": "r7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 3983,
            "end": 3995,
            "callee": {
              "type": "Identifier",
              "start": 3983,
              "end": 3987,
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 3988,
                "end": 3994,
                "decorators": [],
                "name": "r7arg1",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4004,
      "end": 4031,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4008,
          "end": 4030,
          "id": {
            "type": "Identifier",
            "start": 4008,
            "end": 4011,
            "decorators": [],
            "name": "r7a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 4014,
            "end": 4030,
            "elements": [
              {
                "type": "Identifier",
                "start": 4015,
                "end": 4021,
                "decorators": [],
                "name": "r7arg1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 4023,
                "end": 4029,
                "decorators": [],
                "name": "r7arg2",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4032,
      "end": 4059,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4036,
          "end": 4058,
          "id": {
            "type": "Identifier",
            "start": 4036,
            "end": 4039,
            "decorators": [],
            "name": "r7b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 4042,
            "end": 4058,
            "elements": [
              {
                "type": "Identifier",
                "start": 4043,
                "end": 4049,
                "decorators": [],
                "name": "r7arg2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 4051,
                "end": 4057,
                "decorators": [],
                "name": "r7arg1",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4061,
      "end": 4168,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4065,
          "end": 4167,
          "id": {
            "type": "Identifier",
            "start": 4065,
            "end": 4071,
            "decorators": [],
            "name": "r8arg1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 4074,
            "end": 4167,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 4074,
              "end": 4109,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 4075,
                  "end": 4089,
                  "name": {
                    "type": "Identifier",
                    "start": 4075,
                    "end": 4076,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 4085,
                    "end": 4089,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4085,
                      "end": 4089,
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null
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
                  "start": 4091,
                  "end": 4108,
                  "name": {
                    "type": "Identifier",
                    "start": 4091,
                    "end": 4092,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 4101,
                    "end": 4108,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4101,
                      "end": 4108,
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null
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
                "start": 4110,
                "end": 4126,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4111,
                  "end": 4126,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 4113,
                    "end": 4126,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 4114,
                        "end": 4120,
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4117,
                          "end": 4120,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4119,
                            "end": 4120,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4119,
                              "end": 4120,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 4122,
                      "end": 4126,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4125,
                        "end": 4126,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4125,
                          "end": 4126,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 4128,
                "end": 4145,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4129,
                  "end": 4145,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 4131,
                    "end": 4145,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 4132,
                        "end": 4139,
                        "decorators": [],
                        "name": "arg2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4136,
                          "end": 4139,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4138,
                            "end": 4139,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4138,
                              "end": 4139,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 4141,
                      "end": 4145,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4144,
                        "end": 4145,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4144,
                          "end": 4145,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrowFunctionExpression",
              "start": 4150,
              "end": 4167,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4151,
                  "end": 4155,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4152,
                    "end": 4155,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 4154,
                      "end": 4155,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4154,
                        "end": 4155,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "TSTypeAssertion",
                "start": 4160,
                "end": 4167,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 4161,
                  "end": 4162,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4161,
                    "end": 4162,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "expression": {
                  "type": "Literal",
                  "start": 4163,
                  "end": 4167,
                  "value": null,
                  "raw": "null"
                }
              },
              "id": null,
              "generator": false
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4169,
      "end": 4268,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4173,
          "end": 4267,
          "id": {
            "type": "Identifier",
            "start": 4173,
            "end": 4179,
            "decorators": [],
            "name": "r8arg2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 4182,
            "end": 4267,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 4183,
                "end": 4208,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4184,
                  "end": 4208,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 4186,
                    "end": 4208,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 4187,
                        "end": 4196,
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4190,
                          "end": 4196,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4192,
                            "end": 4196,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4192,
                              "end": 4196,
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 4198,
                      "end": 4208,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4201,
                        "end": 4208,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4201,
                          "end": 4208,
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 4210,
                "end": 4236,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4211,
                  "end": 4236,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 4213,
                    "end": 4236,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 4214,
                        "end": 4224,
                        "decorators": [],
                        "name": "arg2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4218,
                          "end": 4224,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4220,
                            "end": 4224,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4220,
                              "end": 4224,
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 4226,
                      "end": 4236,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4229,
                        "end": 4236,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4229,
                          "end": 4236,
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrowFunctionExpression",
              "start": 4241,
              "end": 4267,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4242,
                  "end": 4249,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4243,
                    "end": 4249,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 4245,
                      "end": 4249,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4245,
                        "end": 4249,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "TSTypeAssertion",
                "start": 4254,
                "end": 4267,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 4255,
                  "end": 4262,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4255,
                    "end": 4262,
                    "decorators": [],
                    "name": "Derived",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "expression": {
                  "type": "Literal",
                  "start": 4263,
                  "end": 4267,
                  "value": null,
                  "raw": "null"
                }
              },
              "id": null,
              "generator": false
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4269,
      "end": 4291,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4273,
          "end": 4290,
          "id": {
            "type": "Identifier",
            "start": 4273,
            "end": 4275,
            "decorators": [],
            "name": "r8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 4278,
            "end": 4290,
            "callee": {
              "type": "Identifier",
              "start": 4278,
              "end": 4282,
              "decorators": [],
              "name": "foo8",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 4283,
                "end": 4289,
                "decorators": [],
                "name": "r8arg1",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4299,
      "end": 4326,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4303,
          "end": 4325,
          "id": {
            "type": "Identifier",
            "start": 4303,
            "end": 4306,
            "decorators": [],
            "name": "r8a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 4309,
            "end": 4325,
            "elements": [
              {
                "type": "Identifier",
                "start": 4310,
                "end": 4316,
                "decorators": [],
                "name": "r8arg1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 4318,
                "end": 4324,
                "decorators": [],
                "name": "r8arg2",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4327,
      "end": 4354,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4331,
          "end": 4353,
          "id": {
            "type": "Identifier",
            "start": 4331,
            "end": 4334,
            "decorators": [],
            "name": "r8b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 4337,
            "end": 4353,
            "elements": [
              {
                "type": "Identifier",
                "start": 4338,
                "end": 4344,
                "decorators": [],
                "name": "r8arg2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 4346,
                "end": 4352,
                "decorators": [],
                "name": "r8arg1",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4356,
      "end": 4491,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4360,
          "end": 4490,
          "id": {
            "type": "Identifier",
            "start": 4360,
            "end": 4366,
            "decorators": [],
            "name": "r9arg1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 4369,
            "end": 4490,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 4369,
              "end": 4404,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 4370,
                  "end": 4384,
                  "name": {
                    "type": "Identifier",
                    "start": 4370,
                    "end": 4371,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 4380,
                    "end": 4384,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4380,
                      "end": 4384,
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null
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
                  "start": 4386,
                  "end": 4403,
                  "name": {
                    "type": "Identifier",
                    "start": 4386,
                    "end": 4387,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 4396,
                    "end": 4403,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4396,
                      "end": 4403,
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null
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
                "start": 4405,
                "end": 4421,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4406,
                  "end": 4421,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 4408,
                    "end": 4421,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 4409,
                        "end": 4415,
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4412,
                          "end": 4415,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4414,
                            "end": 4415,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4414,
                              "end": 4415,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 4417,
                      "end": 4421,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4420,
                        "end": 4421,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4420,
                          "end": 4421,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 4423,
                "end": 4468,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4424,
                  "end": 4468,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 4426,
                    "end": 4468,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 4427,
                        "end": 4462,
                        "decorators": [],
                        "name": "arg2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4431,
                          "end": 4462,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 4433,
                            "end": 4462,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 4435,
                                "end": 4447,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 4435,
                                  "end": 4438,
                                  "decorators": [],
                                  "name": "foo",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 4438,
                                  "end": 4446,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 4440,
                                    "end": 4446
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              },
                              {
                                "type": "TSPropertySignature",
                                "start": 4448,
                                "end": 4460,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 4448,
                                  "end": 4452,
                                  "decorators": [],
                                  "name": "bing",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 4452,
                                  "end": 4460,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 4454,
                                    "end": 4460
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              }
                            ]
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 4464,
                      "end": 4468,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4467,
                        "end": 4468,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4467,
                          "end": 4468,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrowFunctionExpression",
              "start": 4473,
              "end": 4490,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4474,
                  "end": 4478,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4475,
                    "end": 4478,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 4477,
                      "end": 4478,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4477,
                        "end": 4478,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "TSTypeAssertion",
                "start": 4483,
                "end": 4490,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 4484,
                  "end": 4485,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4484,
                    "end": 4485,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "expression": {
                  "type": "Literal",
                  "start": 4486,
                  "end": 4490,
                  "value": null,
                  "raw": "null"
                }
              },
              "id": null,
              "generator": false
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4492,
      "end": 4591,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4496,
          "end": 4590,
          "id": {
            "type": "Identifier",
            "start": 4496,
            "end": 4502,
            "decorators": [],
            "name": "r9arg2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 4505,
            "end": 4590,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 4506,
                "end": 4531,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4507,
                  "end": 4531,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 4509,
                    "end": 4531,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 4510,
                        "end": 4519,
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4513,
                          "end": 4519,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4515,
                            "end": 4519,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4515,
                              "end": 4519,
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 4521,
                      "end": 4531,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4524,
                        "end": 4531,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4524,
                          "end": 4531,
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 4533,
                "end": 4559,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4534,
                  "end": 4559,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 4536,
                    "end": 4559,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 4537,
                        "end": 4547,
                        "decorators": [],
                        "name": "arg2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4541,
                          "end": 4547,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4543,
                            "end": 4547,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4543,
                              "end": 4547,
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 4549,
                      "end": 4559,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4552,
                        "end": 4559,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4552,
                          "end": 4559,
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrowFunctionExpression",
              "start": 4564,
              "end": 4590,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4565,
                  "end": 4572,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4566,
                    "end": 4572,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 4568,
                      "end": 4572,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4568,
                        "end": 4572,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "TSTypeAssertion",
                "start": 4577,
                "end": 4590,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 4578,
                  "end": 4585,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4578,
                    "end": 4585,
                    "decorators": [],
                    "name": "Derived",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "expression": {
                  "type": "Literal",
                  "start": 4586,
                  "end": 4590,
                  "value": null,
                  "raw": "null"
                }
              },
              "id": null,
              "generator": false
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4592,
      "end": 4614,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4596,
          "end": 4613,
          "id": {
            "type": "Identifier",
            "start": 4596,
            "end": 4598,
            "decorators": [],
            "name": "r9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 4601,
            "end": 4613,
            "callee": {
              "type": "Identifier",
              "start": 4601,
              "end": 4605,
              "decorators": [],
              "name": "foo9",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 4606,
                "end": 4612,
                "decorators": [],
                "name": "r9arg1",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4622,
      "end": 4649,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4626,
          "end": 4648,
          "id": {
            "type": "Identifier",
            "start": 4626,
            "end": 4629,
            "decorators": [],
            "name": "r9a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 4632,
            "end": 4648,
            "elements": [
              {
                "type": "Identifier",
                "start": 4633,
                "end": 4639,
                "decorators": [],
                "name": "r9arg1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 4641,
                "end": 4647,
                "decorators": [],
                "name": "r9arg2",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4650,
      "end": 4677,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4654,
          "end": 4676,
          "id": {
            "type": "Identifier",
            "start": 4654,
            "end": 4657,
            "decorators": [],
            "name": "r9b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 4660,
            "end": 4676,
            "elements": [
              {
                "type": "Identifier",
                "start": 4661,
                "end": 4667,
                "decorators": [],
                "name": "r9arg2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 4669,
                "end": 4675,
                "decorators": [],
                "name": "r9arg1",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4679,
      "end": 4732,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4683,
          "end": 4731,
          "id": {
            "type": "Identifier",
            "start": 4683,
            "end": 4690,
            "decorators": [],
            "name": "r10arg1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 4693,
            "end": 4731,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 4693,
              "end": 4712,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 4694,
                  "end": 4711,
                  "name": {
                    "type": "Identifier",
                    "start": 4694,
                    "end": 4695,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 4704,
                    "end": 4711,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4704,
                      "end": 4711,
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null
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
                "start": 4713,
                "end": 4722,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 4716,
                  "end": 4717,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4717,
                  "end": 4722,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 4719,
                    "end": 4722,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 4719,
                      "end": 4720,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4719,
                        "end": 4720,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "MemberExpression",
              "start": 4727,
              "end": 4731,
              "object": {
                "type": "Identifier",
                "start": 4727,
                "end": 4728,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 4729,
                "end": 4730,
                "value": 0,
                "raw": "0"
              },
              "optional": false,
              "computed": true
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4733,
      "end": 4782,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4737,
          "end": 4781,
          "id": {
            "type": "Identifier",
            "start": 4737,
            "end": 4744,
            "decorators": [],
            "name": "r10arg2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 4747,
            "end": 4781,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "start": 4748,
                "end": 4763,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 4751,
                  "end": 4752,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4752,
                  "end": 4763,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 4754,
                    "end": 4763,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 4754,
                      "end": 4761,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4754,
                        "end": 4761,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "TSTypeAssertion",
              "start": 4768,
              "end": 4781,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4769,
                "end": 4776,
                "typeName": {
                  "type": "Identifier",
                  "start": 4769,
                  "end": 4776,
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "expression": {
                "type": "Literal",
                "start": 4777,
                "end": 4781,
                "value": null,
                "raw": "null"
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4783,
      "end": 4808,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4787,
          "end": 4807,
          "id": {
            "type": "Identifier",
            "start": 4787,
            "end": 4790,
            "decorators": [],
            "name": "r10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 4793,
            "end": 4807,
            "callee": {
              "type": "Identifier",
              "start": 4793,
              "end": 4798,
              "decorators": [],
              "name": "foo10",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 4799,
                "end": 4806,
                "decorators": [],
                "name": "r10arg1",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4816,
      "end": 4846,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4820,
          "end": 4845,
          "id": {
            "type": "Identifier",
            "start": 4820,
            "end": 4824,
            "decorators": [],
            "name": "r10a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 4827,
            "end": 4845,
            "elements": [
              {
                "type": "Identifier",
                "start": 4828,
                "end": 4835,
                "decorators": [],
                "name": "r10arg1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 4837,
                "end": 4844,
                "decorators": [],
                "name": "r10arg2",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4847,
      "end": 4877,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4851,
          "end": 4876,
          "id": {
            "type": "Identifier",
            "start": 4851,
            "end": 4855,
            "decorators": [],
            "name": "r10b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 4858,
            "end": 4876,
            "elements": [
              {
                "type": "Identifier",
                "start": 4859,
                "end": 4866,
                "decorators": [],
                "name": "r10arg2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 4868,
                "end": 4875,
                "decorators": [],
                "name": "r10arg1",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4879,
      "end": 4927,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4883,
          "end": 4926,
          "id": {
            "type": "Identifier",
            "start": 4883,
            "end": 4890,
            "decorators": [],
            "name": "r11arg1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 4893,
            "end": 4926,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 4893,
              "end": 4909,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 4894,
                  "end": 4908,
                  "name": {
                    "type": "Identifier",
                    "start": 4894,
                    "end": 4895,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 4904,
                    "end": 4908,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4904,
                      "end": 4908,
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null
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
                "start": 4910,
                "end": 4914,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4911,
                  "end": 4914,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4913,
                    "end": 4914,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4913,
                      "end": 4914,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 4916,
                "end": 4920,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4917,
                  "end": 4920,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4919,
                    "end": 4920,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4919,
                      "end": 4920,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "start": 4925,
              "end": 4926,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4928,
      "end": 5010,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4932,
          "end": 5009,
          "id": {
            "type": "Identifier",
            "start": 4932,
            "end": 4939,
            "decorators": [],
            "name": "r11arg2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 4942,
            "end": 5009,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 4943,
                "end": 4961,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4944,
                  "end": 4961,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 4946,
                    "end": 4961,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 4948,
                        "end": 4959,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 4948,
                          "end": 4951,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4951,
                          "end": 4959,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 4953,
                            "end": 4959
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 4963,
                "end": 4994,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4964,
                  "end": 4994,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 4966,
                    "end": 4994,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 4968,
                        "end": 4980,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 4968,
                          "end": 4971,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4971,
                          "end": 4979,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 4973,
                            "end": 4979
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 4981,
                        "end": 4992,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 4981,
                          "end": 4984,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4984,
                          "end": 4992,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 4986,
                            "end": 4992
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "TSTypeAssertion",
              "start": 4999,
              "end": 5009,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5000,
                "end": 5004,
                "typeName": {
                  "type": "Identifier",
                  "start": 5000,
                  "end": 5004,
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "expression": {
                "type": "Literal",
                "start": 5005,
                "end": 5009,
                "value": null,
                "raw": "null"
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5011,
      "end": 5036,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5015,
          "end": 5035,
          "id": {
            "type": "Identifier",
            "start": 5015,
            "end": 5018,
            "decorators": [],
            "name": "r11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 5021,
            "end": 5035,
            "callee": {
              "type": "Identifier",
              "start": 5021,
              "end": 5026,
              "decorators": [],
              "name": "foo11",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 5027,
                "end": 5034,
                "decorators": [],
                "name": "r11arg1",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5044,
      "end": 5074,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5048,
          "end": 5073,
          "id": {
            "type": "Identifier",
            "start": 5048,
            "end": 5052,
            "decorators": [],
            "name": "r11a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 5055,
            "end": 5073,
            "elements": [
              {
                "type": "Identifier",
                "start": 5056,
                "end": 5063,
                "decorators": [],
                "name": "r11arg1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 5065,
                "end": 5072,
                "decorators": [],
                "name": "r11arg2",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5075,
      "end": 5105,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5079,
          "end": 5104,
          "id": {
            "type": "Identifier",
            "start": 5079,
            "end": 5083,
            "decorators": [],
            "name": "r11b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 5086,
            "end": 5104,
            "elements": [
              {
                "type": "Identifier",
                "start": 5087,
                "end": 5094,
                "decorators": [],
                "name": "r11arg2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 5096,
                "end": 5103,
                "decorators": [],
                "name": "r11arg1",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5107,
      "end": 5191,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5111,
          "end": 5190,
          "id": {
            "type": "Identifier",
            "start": 5111,
            "end": 5118,
            "decorators": [],
            "name": "r12arg1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 5121,
            "end": 5190,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 5121,
              "end": 5144,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 5122,
                  "end": 5143,
                  "name": {
                    "type": "Identifier",
                    "start": 5122,
                    "end": 5123,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 5132,
                    "end": 5143,
                    "typeName": {
                      "type": "Identifier",
                      "start": 5132,
                      "end": 5137,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 5137,
                      "end": 5143,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 5138,
                          "end": 5142,
                          "typeName": {
                            "type": "Identifier",
                            "start": 5138,
                            "end": 5142,
                            "decorators": [],
                            "name": "Base",
                            "optional": false,
                            "typeAnnotation": null
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
                "start": 5145,
                "end": 5159,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 5146,
                  "end": 5159,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 5148,
                    "end": 5159,
                    "typeName": {
                      "type": "Identifier",
                      "start": 5148,
                      "end": 5153,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 5153,
                      "end": 5159,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 5154,
                          "end": 5158,
                          "typeName": {
                            "type": "Identifier",
                            "start": 5154,
                            "end": 5158,
                            "decorators": [],
                            "name": "Base",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 5161,
                "end": 5165,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 5162,
                  "end": 5165,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 5164,
                    "end": 5165,
                    "typeName": {
                      "type": "Identifier",
                      "start": 5164,
                      "end": 5165,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "TSTypeAssertion",
              "start": 5170,
              "end": 5190,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5171,
                "end": 5185,
                "typeName": {
                  "type": "Identifier",
                  "start": 5171,
                  "end": 5176,
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 5176,
                  "end": 5185,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 5177,
                      "end": 5184,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5177,
                        "end": 5184,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              "expression": {
                "type": "Literal",
                "start": 5186,
                "end": 5190,
                "value": null,
                "raw": "null"
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5192,
      "end": 5267,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5196,
          "end": 5266,
          "id": {
            "type": "Identifier",
            "start": 5196,
            "end": 5203,
            "decorators": [],
            "name": "r12arg2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 5206,
            "end": 5266,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 5207,
                "end": 5221,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 5208,
                  "end": 5221,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 5210,
                    "end": 5221,
                    "typeName": {
                      "type": "Identifier",
                      "start": 5210,
                      "end": 5215,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 5215,
                      "end": 5221,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 5216,
                          "end": 5220,
                          "typeName": {
                            "type": "Identifier",
                            "start": 5216,
                            "end": 5220,
                            "decorators": [],
                            "name": "Base",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 5223,
                "end": 5241,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 5224,
                  "end": 5241,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 5226,
                    "end": 5241,
                    "typeName": {
                      "type": "Identifier",
                      "start": 5226,
                      "end": 5231,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 5231,
                      "end": 5241,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 5232,
                          "end": 5240,
                          "typeName": {
                            "type": "Identifier",
                            "start": 5232,
                            "end": 5240,
                            "decorators": [],
                            "name": "Derived2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "TSTypeAssertion",
              "start": 5246,
              "end": 5266,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5247,
                "end": 5261,
                "typeName": {
                  "type": "Identifier",
                  "start": 5247,
                  "end": 5252,
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 5252,
                  "end": 5261,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 5253,
                      "end": 5260,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5253,
                        "end": 5260,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              "expression": {
                "type": "Literal",
                "start": 5262,
                "end": 5266,
                "value": null,
                "raw": "null"
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5268,
      "end": 5293,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5272,
          "end": 5292,
          "id": {
            "type": "Identifier",
            "start": 5272,
            "end": 5275,
            "decorators": [],
            "name": "r12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 5278,
            "end": 5292,
            "callee": {
              "type": "Identifier",
              "start": 5278,
              "end": 5283,
              "decorators": [],
              "name": "foo12",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 5284,
                "end": 5291,
                "decorators": [],
                "name": "r12arg1",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5301,
      "end": 5331,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5305,
          "end": 5330,
          "id": {
            "type": "Identifier",
            "start": 5305,
            "end": 5309,
            "decorators": [],
            "name": "r12a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 5312,
            "end": 5330,
            "elements": [
              {
                "type": "Identifier",
                "start": 5313,
                "end": 5320,
                "decorators": [],
                "name": "r12arg1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 5322,
                "end": 5329,
                "decorators": [],
                "name": "r12arg2",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5332,
      "end": 5362,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5336,
          "end": 5361,
          "id": {
            "type": "Identifier",
            "start": 5336,
            "end": 5340,
            "decorators": [],
            "name": "r12b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 5343,
            "end": 5361,
            "elements": [
              {
                "type": "Identifier",
                "start": 5344,
                "end": 5351,
                "decorators": [],
                "name": "r12arg2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 5353,
                "end": 5360,
                "decorators": [],
                "name": "r12arg1",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5364,
      "end": 5432,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5368,
          "end": 5431,
          "id": {
            "type": "Identifier",
            "start": 5368,
            "end": 5375,
            "decorators": [],
            "name": "r13arg1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 5378,
            "end": 5431,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 5378,
              "end": 5404,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 5379,
                  "end": 5403,
                  "name": {
                    "type": "Identifier",
                    "start": 5379,
                    "end": 5380,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 5389,
                    "end": 5403,
                    "typeName": {
                      "type": "Identifier",
                      "start": 5389,
                      "end": 5394,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 5394,
                      "end": 5403,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 5395,
                          "end": 5402,
                          "typeName": {
                            "type": "Identifier",
                            "start": 5395,
                            "end": 5402,
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null
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
                "start": 5405,
                "end": 5419,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 5406,
                  "end": 5419,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 5408,
                    "end": 5419,
                    "typeName": {
                      "type": "Identifier",
                      "start": 5408,
                      "end": 5413,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 5413,
                      "end": 5419,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 5414,
                          "end": 5418,
                          "typeName": {
                            "type": "Identifier",
                            "start": 5414,
                            "end": 5418,
                            "decorators": [],
                            "name": "Base",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 5421,
                "end": 5425,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 5422,
                  "end": 5425,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 5424,
                    "end": 5425,
                    "typeName": {
                      "type": "Identifier",
                      "start": 5424,
                      "end": 5425,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "start": 5430,
              "end": 5431,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5433,
      "end": 5507,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5437,
          "end": 5506,
          "id": {
            "type": "Identifier",
            "start": 5437,
            "end": 5444,
            "decorators": [],
            "name": "r13arg2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 5447,
            "end": 5506,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 5448,
                "end": 5462,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 5449,
                  "end": 5462,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 5451,
                    "end": 5462,
                    "typeName": {
                      "type": "Identifier",
                      "start": 5451,
                      "end": 5456,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 5456,
                      "end": 5462,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 5457,
                          "end": 5461,
                          "typeName": {
                            "type": "Identifier",
                            "start": 5457,
                            "end": 5461,
                            "decorators": [],
                            "name": "Base",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 5464,
                "end": 5481,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 5465,
                  "end": 5481,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 5467,
                    "end": 5481,
                    "typeName": {
                      "type": "Identifier",
                      "start": 5467,
                      "end": 5472,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 5472,
                      "end": 5481,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 5473,
                          "end": 5480,
                          "typeName": {
                            "type": "Identifier",
                            "start": 5473,
                            "end": 5480,
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "TSTypeAssertion",
              "start": 5486,
              "end": 5506,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5487,
                "end": 5501,
                "typeName": {
                  "type": "Identifier",
                  "start": 5487,
                  "end": 5492,
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 5492,
                  "end": 5501,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 5493,
                      "end": 5500,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5493,
                        "end": 5500,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              "expression": {
                "type": "Literal",
                "start": 5502,
                "end": 5506,
                "value": null,
                "raw": "null"
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5508,
      "end": 5533,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5512,
          "end": 5532,
          "id": {
            "type": "Identifier",
            "start": 5512,
            "end": 5515,
            "decorators": [],
            "name": "r13",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 5518,
            "end": 5532,
            "callee": {
              "type": "Identifier",
              "start": 5518,
              "end": 5523,
              "decorators": [],
              "name": "foo13",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 5524,
                "end": 5531,
                "decorators": [],
                "name": "r13arg1",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5541,
      "end": 5571,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5545,
          "end": 5570,
          "id": {
            "type": "Identifier",
            "start": 5545,
            "end": 5549,
            "decorators": [],
            "name": "r13a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 5552,
            "end": 5570,
            "elements": [
              {
                "type": "Identifier",
                "start": 5553,
                "end": 5560,
                "decorators": [],
                "name": "r13arg1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 5562,
                "end": 5569,
                "decorators": [],
                "name": "r13arg2",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5572,
      "end": 5602,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5576,
          "end": 5601,
          "id": {
            "type": "Identifier",
            "start": 5576,
            "end": 5580,
            "decorators": [],
            "name": "r13b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 5583,
            "end": 5601,
            "elements": [
              {
                "type": "Identifier",
                "start": 5584,
                "end": 5591,
                "decorators": [],
                "name": "r13arg2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 5593,
                "end": 5600,
                "decorators": [],
                "name": "r13arg1",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5604,
      "end": 5648,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5608,
          "end": 5647,
          "id": {
            "type": "Identifier",
            "start": 5608,
            "end": 5615,
            "decorators": [],
            "name": "r14arg1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 5618,
            "end": 5647,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 5618,
              "end": 5621,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 5619,
                  "end": 5620,
                  "name": {
                    "type": "Identifier",
                    "start": 5619,
                    "end": 5620,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
                "start": 5622,
                "end": 5639,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 5623,
                  "end": 5639,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 5625,
                    "end": 5639,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 5627,
                        "end": 5632,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 5627,
                          "end": 5628,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5628,
                          "end": 5631,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5630,
                            "end": 5631,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5630,
                              "end": 5631,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 5633,
                        "end": 5637,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 5633,
                          "end": 5634,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5634,
                          "end": 5637,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5636,
                            "end": 5637,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5636,
                              "end": 5637,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "MemberExpression",
              "start": 5644,
              "end": 5647,
              "object": {
                "type": "Identifier",
                "start": 5644,
                "end": 5645,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 5646,
                "end": 5647,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5649,
      "end": 5709,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5653,
          "end": 5708,
          "id": {
            "type": "Identifier",
            "start": 5653,
            "end": 5660,
            "decorators": [],
            "name": "r14arg2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 5663,
            "end": 5708,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 5664,
                "end": 5691,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 5665,
                  "end": 5691,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 5667,
                    "end": 5691,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 5669,
                        "end": 5679,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 5669,
                          "end": 5670,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5670,
                          "end": 5678,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 5672,
                            "end": 5678
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 5680,
                        "end": 5689,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 5680,
                          "end": 5681,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5681,
                          "end": 5689,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 5683,
                            "end": 5689
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "TSTypeAssertion",
              "start": 5696,
              "end": 5708,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5697,
                "end": 5703,
                "typeName": {
                  "type": "Identifier",
                  "start": 5697,
                  "end": 5703,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "expression": {
                "type": "Literal",
                "start": 5704,
                "end": 5708,
                "value": null,
                "raw": "null"
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5710,
      "end": 5735,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5714,
          "end": 5734,
          "id": {
            "type": "Identifier",
            "start": 5714,
            "end": 5717,
            "decorators": [],
            "name": "r14",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 5720,
            "end": 5734,
            "callee": {
              "type": "Identifier",
              "start": 5720,
              "end": 5725,
              "decorators": [],
              "name": "foo14",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 5726,
                "end": 5733,
                "decorators": [],
                "name": "r14arg1",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5743,
      "end": 5773,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5747,
          "end": 5772,
          "id": {
            "type": "Identifier",
            "start": 5747,
            "end": 5751,
            "decorators": [],
            "name": "r14a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 5754,
            "end": 5772,
            "elements": [
              {
                "type": "Identifier",
                "start": 5755,
                "end": 5762,
                "decorators": [],
                "name": "r14arg1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 5764,
                "end": 5771,
                "decorators": [],
                "name": "r14arg2",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5774,
      "end": 5804,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5778,
          "end": 5803,
          "id": {
            "type": "Identifier",
            "start": 5778,
            "end": 5782,
            "decorators": [],
            "name": "r14b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 5785,
            "end": 5803,
            "elements": [
              {
                "type": "Identifier",
                "start": 5786,
                "end": 5793,
                "decorators": [],
                "name": "r14arg2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 5795,
                "end": 5802,
                "decorators": [],
                "name": "r14arg1",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5806,
      "end": 5842,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5810,
          "end": 5842,
          "id": {
            "type": "Identifier",
            "start": 5810,
            "end": 5817,
            "decorators": [],
            "name": "r15arg1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 5820,
            "end": 5842,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 5820,
              "end": 5823,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 5821,
                  "end": 5822,
                  "name": {
                    "type": "Identifier",
                    "start": 5821,
                    "end": 5822,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
                "start": 5824,
                "end": 5828,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 5825,
                  "end": 5828,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 5827,
                    "end": 5828,
                    "typeName": {
                      "type": "Identifier",
                      "start": 5827,
                      "end": 5828,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "TSTypeAssertion",
              "start": 5833,
              "end": 5842,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 5834,
                "end": 5837,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 5834,
                  "end": 5835,
                  "typeName": {
                    "type": "Identifier",
                    "start": 5834,
                    "end": 5835,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "expression": {
                "type": "Literal",
                "start": 5838,
                "end": 5842,
                "value": null,
                "raw": "null"
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5843,
      "end": 5868,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5847,
          "end": 5867,
          "id": {
            "type": "Identifier",
            "start": 5847,
            "end": 5850,
            "decorators": [],
            "name": "r15",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 5853,
            "end": 5867,
            "callee": {
              "type": "Identifier",
              "start": 5853,
              "end": 5858,
              "decorators": [],
              "name": "foo15",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 5859,
                "end": 5866,
                "decorators": [],
                "name": "r15arg1",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5876,
      "end": 5920,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5880,
          "end": 5919,
          "id": {
            "type": "Identifier",
            "start": 5880,
            "end": 5887,
            "decorators": [],
            "name": "r16arg1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 5890,
            "end": 5919,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 5890,
              "end": 5906,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 5891,
                  "end": 5905,
                  "name": {
                    "type": "Identifier",
                    "start": 5891,
                    "end": 5892,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 5901,
                    "end": 5905,
                    "typeName": {
                      "type": "Identifier",
                      "start": 5901,
                      "end": 5905,
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null
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
                "start": 5907,
                "end": 5911,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 5908,
                  "end": 5911,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 5910,
                    "end": 5911,
                    "typeName": {
                      "type": "Identifier",
                      "start": 5910,
                      "end": 5911,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrayExpression",
              "start": 5916,
              "end": 5919,
              "elements": [
                {
                  "type": "Literal",
                  "start": 5917,
                  "end": 5918,
                  "value": 1,
                  "raw": "1"
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5921,
      "end": 5946,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5925,
          "end": 5945,
          "id": {
            "type": "Identifier",
            "start": 5925,
            "end": 5928,
            "decorators": [],
            "name": "r16",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 5931,
            "end": 5945,
            "callee": {
              "type": "Identifier",
              "start": 5931,
              "end": 5936,
              "decorators": [],
              "name": "foo16",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 5937,
                "end": 5944,
                "decorators": [],
                "name": "r16arg1",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5948,
      "end": 5995,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5952,
          "end": 5994,
          "id": {
            "type": "Identifier",
            "start": 5952,
            "end": 5959,
            "decorators": [],
            "name": "r17arg1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 5962,
            "end": 5994,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 5962,
              "end": 5965,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 5963,
                  "end": 5964,
                  "name": {
                    "type": "Identifier",
                    "start": 5963,
                    "end": 5964,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
                "start": 5966,
                "end": 5980,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 5967,
                  "end": 5980,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 5969,
                    "end": 5980,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 5970,
                        "end": 5974,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5971,
                          "end": 5974,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5973,
                            "end": 5974,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5973,
                              "end": 5974,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 5976,
                      "end": 5980,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5979,
                        "end": 5980,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5979,
                          "end": 5980,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "TSTypeAssertion",
              "start": 5985,
              "end": 5994,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 5986,
                "end": 5989,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 5986,
                  "end": 5987,
                  "typeName": {
                    "type": "Identifier",
                    "start": 5986,
                    "end": 5987,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "expression": {
                "type": "Literal",
                "start": 5990,
                "end": 5994,
                "value": null,
                "raw": "null"
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5996,
      "end": 6021,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6000,
          "end": 6020,
          "id": {
            "type": "Identifier",
            "start": 6000,
            "end": 6003,
            "decorators": [],
            "name": "r17",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 6006,
            "end": 6020,
            "callee": {
              "type": "Identifier",
              "start": 6006,
              "end": 6011,
              "decorators": [],
              "name": "foo17",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 6012,
                "end": 6019,
                "decorators": [],
                "name": "r17arg1",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6029,
      "end": 6076,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6033,
          "end": 6075,
          "id": {
            "type": "Identifier",
            "start": 6033,
            "end": 6040,
            "decorators": [],
            "name": "r18arg1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 6043,
            "end": 6075,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 6043,
              "end": 6046,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 6044,
                  "end": 6045,
                  "name": {
                    "type": "Identifier",
                    "start": 6044,
                    "end": 6045,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
                "start": 6047,
                "end": 6061,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 6048,
                  "end": 6061,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 6050,
                    "end": 6061,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 6051,
                        "end": 6055,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 6052,
                          "end": 6055,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 6054,
                            "end": 6055,
                            "typeName": {
                              "type": "Identifier",
                              "start": 6054,
                              "end": 6055,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 6057,
                      "end": 6061,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 6060,
                        "end": 6061,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6060,
                          "end": 6061,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "TSTypeAssertion",
              "start": 6066,
              "end": 6075,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 6067,
                "end": 6070,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 6067,
                  "end": 6068,
                  "typeName": {
                    "type": "Identifier",
                    "start": 6067,
                    "end": 6068,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "expression": {
                "type": "Literal",
                "start": 6071,
                "end": 6075,
                "value": null,
                "raw": "null"
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6077,
      "end": 6102,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6081,
          "end": 6101,
          "id": {
            "type": "Identifier",
            "start": 6081,
            "end": 6084,
            "decorators": [],
            "name": "r18",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 6087,
            "end": 6101,
            "callee": {
              "type": "Identifier",
              "start": 6087,
              "end": 6092,
              "decorators": [],
              "name": "foo18",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 6093,
                "end": 6100,
                "decorators": [],
                "name": "r18arg1",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
