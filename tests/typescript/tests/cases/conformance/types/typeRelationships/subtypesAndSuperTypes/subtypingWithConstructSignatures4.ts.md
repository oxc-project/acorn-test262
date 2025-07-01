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
                      "start": 303,
                      "end": 304
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 303,
                    "end": 304
                  }
                ],
                "start": 302,
                "end": 305
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
                        "start": 309,
                        "end": 310
                      },
                      "typeArguments": null,
                      "start": 309,
                      "end": 310
                    },
                    "start": 307,
                    "end": 310
                  },
                  "start": 306,
                  "end": 310
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
                      "start": 315,
                      "end": 316
                    },
                    "typeArguments": null,
                    "start": 315,
                    "end": 316
                  },
                  "start": 315,
                  "end": 318
                },
                "start": 312,
                "end": 318
              },
              "start": 298,
              "end": 318
            },
            "start": 296,
            "end": 318
          },
          "start": 295,
          "end": 318
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 273,
      "end": 320
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 338,
        "end": 342
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
              "start": 346,
              "end": 349
            },
            "start": 344,
            "end": 349
          },
          "start": 343,
          "end": 349
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 352,
          "end": 355
        },
        "start": 350,
        "end": 355
      },
      "body": null,
      "expression": false,
      "start": 321,
      "end": 356
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 375,
        "end": 379
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
                      "start": 389,
                      "end": 390
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 389,
                    "end": 390
                  }
                ],
                "start": 388,
                "end": 391
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
                        "start": 395,
                        "end": 396
                      },
                      "typeArguments": null,
                      "start": 395,
                      "end": 396
                    },
                    "start": 393,
                    "end": 396
                  },
                  "start": 392,
                  "end": 396
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 401,
                    "end": 407
                  },
                  "start": 401,
                  "end": 409
                },
                "start": 398,
                "end": 409
              },
              "start": 384,
              "end": 409
            },
            "start": 382,
            "end": 409
          },
          "start": 380,
          "end": 409
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 358,
      "end": 411
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 429,
        "end": 433
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
              "start": 437,
              "end": 440
            },
            "start": 435,
            "end": 440
          },
          "start": 434,
          "end": 440
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 443,
          "end": 446
        },
        "start": 441,
        "end": 446
      },
      "body": null,
      "expression": false,
      "start": 412,
      "end": 447
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 466,
        "end": 470
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a3",
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
                      "start": 480,
                      "end": 481
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 480,
                    "end": 481
                  }
                ],
                "start": 479,
                "end": 482
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
                        "start": 486,
                        "end": 487
                      },
                      "typeArguments": null,
                      "start": 486,
                      "end": 487
                    },
                    "start": 484,
                    "end": 487
                  },
                  "start": 483,
                  "end": 487
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 492,
                  "end": 496
                },
                "start": 489,
                "end": 496
              },
              "start": 475,
              "end": 496
            },
            "start": 473,
            "end": 496
          },
          "start": 471,
          "end": 496
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 449,
      "end": 498
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 516,
        "end": 520
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
              "start": 524,
              "end": 527
            },
            "start": 522,
            "end": 527
          },
          "start": 521,
          "end": 527
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 530,
          "end": 533
        },
        "start": 528,
        "end": 533
      },
      "body": null,
      "expression": false,
      "start": 499,
      "end": 534
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 553,
        "end": 557
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a4",
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
                      "start": 567,
                      "end": 568
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 567,
                    "end": 568
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 570,
                      "end": 571
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 570,
                    "end": 571
                  }
                ],
                "start": 566,
                "end": 572
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
                        "start": 576,
                        "end": 577
                      },
                      "typeArguments": null,
                      "start": 576,
                      "end": 577
                    },
                    "start": 574,
                    "end": 577
                  },
                  "start": 573,
                  "end": 577
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
                        "start": 582,
                        "end": 583
                      },
                      "typeArguments": null,
                      "start": 582,
                      "end": 583
                    },
                    "start": 580,
                    "end": 583
                  },
                  "start": 579,
                  "end": 583
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 588,
                  "end": 594
                },
                "start": 585,
                "end": 594
              },
              "start": 562,
              "end": 594
            },
            "start": 560,
            "end": 594
          },
          "start": 558,
          "end": 594
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 536,
      "end": 596
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 614,
        "end": 618
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
              "start": 622,
              "end": 625
            },
            "start": 620,
            "end": 625
          },
          "start": 619,
          "end": 625
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 628,
          "end": 631
        },
        "start": 626,
        "end": 631
      },
      "body": null,
      "expression": false,
      "start": 597,
      "end": 632
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
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
          "name": "a5",
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
                      "start": 665,
                      "end": 666
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 665,
                    "end": 666
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 668,
                      "end": 669
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 668,
                    "end": 669
                  }
                ],
                "start": 664,
                "end": 670
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
                                "start": 684,
                                "end": 685
                              },
                              "typeArguments": null,
                              "start": 684,
                              "end": 685
                            },
                            "start": 682,
                            "end": 685
                          },
                          "start": 679,
                          "end": 685
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
                            "start": 690,
                            "end": 691
                          },
                          "typeArguments": null,
                          "start": 690,
                          "end": 691
                        },
                        "start": 687,
                        "end": 691
                      },
                      "start": 674,
                      "end": 691
                    },
                    "start": 672,
                    "end": 691
                  },
                  "start": 671,
                  "end": 691
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
                    "start": 696,
                    "end": 697
                  },
                  "typeArguments": null,
                  "start": 696,
                  "end": 697
                },
                "start": 693,
                "end": 697
              },
              "start": 660,
              "end": 697
            },
            "start": 658,
            "end": 697
          },
          "start": 656,
          "end": 697
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 634,
      "end": 699
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 717,
        "end": 721
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
              "start": 725,
              "end": 728
            },
            "start": 723,
            "end": 728
          },
          "start": 722,
          "end": 728
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 731,
          "end": 734
        },
        "start": 729,
        "end": 734
      },
      "body": null,
      "expression": false,
      "start": 700,
      "end": 735
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 754,
        "end": 758
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a6",
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
                      "start": 768,
                      "end": 769
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 778,
                        "end": 782
                      },
                      "typeArguments": null,
                      "start": 778,
                      "end": 782
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 768,
                    "end": 782
                  }
                ],
                "start": 767,
                "end": 783
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
                                "start": 797,
                                "end": 798
                              },
                              "typeArguments": null,
                              "start": 797,
                              "end": 798
                            },
                            "start": 795,
                            "end": 798
                          },
                          "start": 792,
                          "end": 798
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
                            "start": 803,
                            "end": 810
                          },
                          "typeArguments": null,
                          "start": 803,
                          "end": 810
                        },
                        "start": 800,
                        "end": 810
                      },
                      "start": 787,
                      "end": 810
                    },
                    "start": 785,
                    "end": 810
                  },
                  "start": 784,
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 815,
                    "end": 816
                  },
                  "typeArguments": null,
                  "start": 815,
                  "end": 816
                },
                "start": 812,
                "end": 816
              },
              "start": 763,
              "end": 816
            },
            "start": 761,
            "end": 816
          },
          "start": 759,
          "end": 816
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 737,
      "end": 818
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 836,
        "end": 840
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
              "start": 844,
              "end": 847
            },
            "start": 842,
            "end": 847
          },
          "start": 841,
          "end": 847
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 850,
          "end": 853
        },
        "start": 848,
        "end": 853
      },
      "body": null,
      "expression": false,
      "start": 819,
      "end": 854
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 873,
        "end": 878
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a11",
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
                      "start": 889,
                      "end": 890
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 889,
                    "end": 890
                  }
                ],
                "start": 888,
                "end": 891
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
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 897,
                            "end": 900
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
                                "start": 902,
                                "end": 903
                              },
                              "typeArguments": null,
                              "start": 902,
                              "end": 903
                            },
                            "start": 900,
                            "end": 903
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 897,
                          "end": 903
                        }
                      ],
                      "start": 895,
                      "end": 905
                    },
                    "start": 893,
                    "end": 905
                  },
                  "start": 892,
                  "end": 905
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
                            "start": 912,
                            "end": 915
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
                                "start": 917,
                                "end": 918
                              },
                              "typeArguments": null,
                              "start": 917,
                              "end": 918
                            },
                            "start": 915,
                            "end": 918
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 912,
                          "end": 919
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
                            "start": 920,
                            "end": 923
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
                                "start": 925,
                                "end": 926
                              },
                              "typeArguments": null,
                              "start": 925,
                              "end": 926
                            },
                            "start": 923,
                            "end": 926
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 920,
                          "end": 926
                        }
                      ],
                      "start": 910,
                      "end": 928
                    },
                    "start": 908,
                    "end": 928
                  },
                  "start": 907,
                  "end": 928
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
                    "start": 933,
                    "end": 937
                  },
                  "typeArguments": null,
                  "start": 933,
                  "end": 937
                },
                "start": 930,
                "end": 937
              },
              "start": 884,
              "end": 937
            },
            "start": 882,
            "end": 937
          },
          "start": 879,
          "end": 937
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 856,
      "end": 939
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 957,
        "end": 962
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
              "start": 966,
              "end": 969
            },
            "start": 964,
            "end": 969
          },
          "start": 963,
          "end": 969
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 972,
          "end": 975
        },
        "start": 970,
        "end": 975
      },
      "body": null,
      "expression": false,
      "start": 940,
      "end": 976
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 995,
        "end": 1000
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a15",
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
                      "start": 1011,
                      "end": 1012
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1011,
                    "end": 1012
                  }
                ],
                "start": 1010,
                "end": 1013
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
                            "start": 1019,
                            "end": 1020
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
                                "start": 1022,
                                "end": 1023
                              },
                              "typeArguments": null,
                              "start": 1022,
                              "end": 1023
                            },
                            "start": 1020,
                            "end": 1023
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1019,
                          "end": 1024
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
                            "start": 1025,
                            "end": 1026
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
                                "start": 1028,
                                "end": 1029
                              },
                              "typeArguments": null,
                              "start": 1028,
                              "end": 1029
                            },
                            "start": 1026,
                            "end": 1029
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1025,
                          "end": 1029
                        }
                      ],
                      "start": 1017,
                      "end": 1031
                    },
                    "start": 1015,
                    "end": 1031
                  },
                  "start": 1014,
                  "end": 1031
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
                      "start": 1036,
                      "end": 1037
                    },
                    "typeArguments": null,
                    "start": 1036,
                    "end": 1037
                  },
                  "start": 1036,
                  "end": 1039
                },
                "start": 1033,
                "end": 1039
              },
              "start": 1006,
              "end": 1039
            },
            "start": 1004,
            "end": 1039
          },
          "start": 1001,
          "end": 1039
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 978,
      "end": 1041
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 1059,
        "end": 1064
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
              "start": 1068,
              "end": 1071
            },
            "start": 1066,
            "end": 1071
          },
          "start": 1065,
          "end": 1071
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1074,
          "end": 1077
        },
        "start": 1072,
        "end": 1077
      },
      "body": null,
      "expression": false,
      "start": 1042,
      "end": 1078
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null,
        "start": 1097,
        "end": 1102
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a16",
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
                      "start": 1113,
                      "end": 1114
                    },
                    "constraint": {
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
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1113,
                    "end": 1127
                  }
                ],
                "start": 1112,
                "end": 1128
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
                            "start": 1134,
                            "end": 1135
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
                                "start": 1137,
                                "end": 1138
                              },
                              "typeArguments": null,
                              "start": 1137,
                              "end": 1138
                            },
                            "start": 1135,
                            "end": 1138
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1134,
                          "end": 1139
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
                            "start": 1140,
                            "end": 1141
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
                                "start": 1143,
                                "end": 1144
                              },
                              "typeArguments": null,
                              "start": 1143,
                              "end": 1144
                            },
                            "start": 1141,
                            "end": 1144
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1140,
                          "end": 1144
                        }
                      ],
                      "start": 1132,
                      "end": 1146
                    },
                    "start": 1130,
                    "end": 1146
                  },
                  "start": 1129,
                  "end": 1146
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
                      "start": 1151,
                      "end": 1152
                    },
                    "typeArguments": null,
                    "start": 1151,
                    "end": 1152
                  },
                  "start": 1151,
                  "end": 1154
                },
                "start": 1148,
                "end": 1154
              },
              "start": 1108,
              "end": 1154
            },
            "start": 1106,
            "end": 1154
          },
          "start": 1103,
          "end": 1154
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1080,
      "end": 1156
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null,
        "start": 1174,
        "end": 1179
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
              "start": 1183,
              "end": 1186
            },
            "start": 1181,
            "end": 1186
          },
          "start": 1180,
          "end": 1186
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1189,
          "end": 1192
        },
        "start": 1187,
        "end": 1192
      },
      "body": null,
      "expression": false,
      "start": 1157,
      "end": 1193
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo17",
        "optional": false,
        "typeAnnotation": null,
        "start": 1212,
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
          "name": "a17",
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
                          "start": 1234,
                          "end": 1235
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1244,
                            "end": 1251
                          },
                          "typeArguments": null,
                          "start": 1244,
                          "end": 1251
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1234,
                        "end": 1251
                      }
                    ],
                    "start": 1233,
                    "end": 1252
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
                                    "start": 1264,
                                    "end": 1265
                                  },
                                  "typeArguments": null,
                                  "start": 1264,
                                  "end": 1265
                                },
                                "start": 1262,
                                "end": 1265
                              },
                              "start": 1261,
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
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1270,
                                "end": 1271
                              },
                              "typeArguments": null,
                              "start": 1270,
                              "end": 1271
                            },
                            "start": 1267,
                            "end": 1271
                          },
                          "start": 1256,
                          "end": 1271
                        },
                        "start": 1254,
                        "end": 1271
                      },
                      "start": 1253,
                      "end": 1271
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
                          "start": 1274,
                          "end": 1275
                        },
                        "typeArguments": null,
                        "start": 1274,
                        "end": 1275
                      },
                      "start": 1274,
                      "end": 1277
                    },
                    "start": 1272,
                    "end": 1277
                  },
                  "start": 1229,
                  "end": 1278
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
                          "start": 1288,
                          "end": 1289
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Base",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1298,
                            "end": 1302
                          },
                          "typeArguments": null,
                          "start": 1298,
                          "end": 1302
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1288,
                        "end": 1302
                      }
                    ],
                    "start": 1287,
                    "end": 1303
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
                                    "start": 1315,
                                    "end": 1316
                                  },
                                  "typeArguments": null,
                                  "start": 1315,
                                  "end": 1316
                                },
                                "start": 1313,
                                "end": 1316
                              },
                              "start": 1312,
                              "end": 1316
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
                                "start": 1321,
                                "end": 1322
                              },
                              "typeArguments": null,
                              "start": 1321,
                              "end": 1322
                            },
                            "start": 1318,
                            "end": 1322
                          },
                          "start": 1307,
                          "end": 1322
                        },
                        "start": 1305,
                        "end": 1322
                      },
                      "start": 1304,
                      "end": 1322
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
                          "start": 1325,
                          "end": 1326
                        },
                        "typeArguments": null,
                        "start": 1325,
                        "end": 1326
                      },
                      "start": 1325,
                      "end": 1328
                    },
                    "start": 1323,
                    "end": 1328
                  },
                  "start": 1283,
                  "end": 1329
                }
              ],
              "start": 1223,
              "end": 1339
            },
            "start": 1221,
            "end": 1339
          },
          "start": 1218,
          "end": 1339
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1195,
      "end": 1341
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo17",
        "optional": false,
        "typeAnnotation": null,
        "start": 1359,
        "end": 1364
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
              "start": 1368,
              "end": 1371
            },
            "start": 1366,
            "end": 1371
          },
          "start": 1365,
          "end": 1371
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1374,
          "end": 1377
        },
        "start": 1372,
        "end": 1377
      },
      "body": null,
      "expression": false,
      "start": 1342,
      "end": 1378
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo18",
        "optional": false,
        "typeAnnotation": null,
        "start": 1397,
        "end": 1402
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a18",
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
                                      "start": 1437,
                                      "end": 1438
                                    },
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Derived",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1447,
                                        "end": 1454
                                      },
                                      "typeArguments": null,
                                      "start": 1447,
                                      "end": 1454
                                    },
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 1437,
                                    "end": 1454
                                  }
                                ],
                                "start": 1436,
                                "end": 1455
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
                                        "start": 1459,
                                        "end": 1460
                                      },
                                      "typeArguments": null,
                                      "start": 1459,
                                      "end": 1460
                                    },
                                    "start": 1457,
                                    "end": 1460
                                  },
                                  "start": 1456,
                                  "end": 1460
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
                                    "start": 1463,
                                    "end": 1464
                                  },
                                  "typeArguments": null,
                                  "start": 1463,
                                  "end": 1464
                                },
                                "start": 1461,
                                "end": 1464
                              },
                              "start": 1432,
                              "end": 1465
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
                                      "start": 1479,
                                      "end": 1480
                                    },
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Base",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1489,
                                        "end": 1493
                                      },
                                      "typeArguments": null,
                                      "start": 1489,
                                      "end": 1493
                                    },
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 1479,
                                    "end": 1493
                                  }
                                ],
                                "start": 1478,
                                "end": 1494
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
                                        "start": 1498,
                                        "end": 1499
                                      },
                                      "typeArguments": null,
                                      "start": 1498,
                                      "end": 1499
                                    },
                                    "start": 1496,
                                    "end": 1499
                                  },
                                  "start": 1495,
                                  "end": 1499
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
                                    "start": 1502,
                                    "end": 1503
                                  },
                                  "typeArguments": null,
                                  "start": 1502,
                                  "end": 1503
                                },
                                "start": 1500,
                                "end": 1503
                              },
                              "start": 1474,
                              "end": 1504
                            }
                          ],
                          "start": 1422,
                          "end": 1510
                        },
                        "start": 1420,
                        "end": 1510
                      },
                      "start": 1419,
                      "end": 1510
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 1513,
                        "end": 1516
                      },
                      "start": 1513,
                      "end": 1518
                    },
                    "start": 1511,
                    "end": 1518
                  },
                  "start": 1414,
                  "end": 1519
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
                                      "start": 1547,
                                      "end": 1548
                                    },
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Derived2",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1557,
                                        "end": 1565
                                      },
                                      "typeArguments": null,
                                      "start": 1557,
                                      "end": 1565
                                    },
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 1547,
                                    "end": 1565
                                  }
                                ],
                                "start": 1546,
                                "end": 1566
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
                                        "start": 1570,
                                        "end": 1571
                                      },
                                      "typeArguments": null,
                                      "start": 1570,
                                      "end": 1571
                                    },
                                    "start": 1568,
                                    "end": 1571
                                  },
                                  "start": 1567,
                                  "end": 1571
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
                                    "start": 1574,
                                    "end": 1575
                                  },
                                  "typeArguments": null,
                                  "start": 1574,
                                  "end": 1575
                                },
                                "start": 1572,
                                "end": 1575
                              },
                              "start": 1542,
                              "end": 1576
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
                                      "start": 1590,
                                      "end": 1591
                                    },
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Base",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1600,
                                        "end": 1604
                                      },
                                      "typeArguments": null,
                                      "start": 1600,
                                      "end": 1604
                                    },
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 1590,
                                    "end": 1604
                                  }
                                ],
                                "start": 1589,
                                "end": 1605
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
                                        "start": 1609,
                                        "end": 1610
                                      },
                                      "typeArguments": null,
                                      "start": 1609,
                                      "end": 1610
                                    },
                                    "start": 1607,
                                    "end": 1610
                                  },
                                  "start": 1606,
                                  "end": 1610
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
                                    "start": 1613,
                                    "end": 1614
                                  },
                                  "typeArguments": null,
                                  "start": 1613,
                                  "end": 1614
                                },
                                "start": 1611,
                                "end": 1614
                              },
                              "start": 1585,
                              "end": 1615
                            }
                          ],
                          "start": 1532,
                          "end": 1621
                        },
                        "start": 1530,
                        "end": 1621
                      },
                      "start": 1529,
                      "end": 1621
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 1624,
                        "end": 1627
                      },
                      "start": 1624,
                      "end": 1629
                    },
                    "start": 1622,
                    "end": 1629
                  },
                  "start": 1524,
                  "end": 1630
                }
              ],
              "start": 1408,
              "end": 1632
            },
            "start": 1406,
            "end": 1632
          },
          "start": 1403,
          "end": 1632
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1380,
      "end": 1634
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo18",
        "optional": false,
        "typeAnnotation": null,
        "start": 1652,
        "end": 1657
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
              "start": 1661,
              "end": 1664
            },
            "start": 1659,
            "end": 1664
          },
          "start": 1658,
          "end": 1664
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1667,
          "end": 1670
        },
        "start": 1665,
        "end": 1670
      },
      "body": null,
      "expression": false,
      "start": 1635,
      "end": 1671
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r1arg",
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
                        "start": 1689,
                        "end": 1690
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1689,
                      "end": 1690
                    }
                  ],
                  "start": 1688,
                  "end": 1691
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
                          "start": 1695,
                          "end": 1696
                        },
                        "typeArguments": null,
                        "start": 1695,
                        "end": 1696
                      },
                      "start": 1693,
                      "end": 1696
                    },
                    "start": 1692,
                    "end": 1696
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
                        "start": 1701,
                        "end": 1702
                      },
                      "typeArguments": null,
                      "start": 1701,
                      "end": 1702
                    },
                    "start": 1701,
                    "end": 1704
                  },
                  "start": 1698,
                  "end": 1704
                },
                "start": 1684,
                "end": 1704
              },
              "start": 1682,
              "end": 1704
            },
            "start": 1677,
            "end": 1704
          },
          "init": null,
          "definite": false,
          "start": 1677,
          "end": 1704
        }
      ],
      "declare": false,
      "start": 1673,
      "end": 1705
    },
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
                        "start": 1723,
                        "end": 1724
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1723,
                      "end": 1724
                    }
                  ],
                  "start": 1722,
                  "end": 1725
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
                          "start": 1729,
                          "end": 1730
                        },
                        "typeArguments": null,
                        "start": 1729,
                        "end": 1730
                      },
                      "start": 1727,
                      "end": 1730
                    },
                    "start": 1726,
                    "end": 1730
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
                        "start": 1735,
                        "end": 1736
                      },
                      "typeArguments": null,
                      "start": 1735,
                      "end": 1736
                    },
                    "start": 1735,
                    "end": 1738
                  },
                  "start": 1732,
                  "end": 1738
                },
                "start": 1718,
                "end": 1738
              },
              "start": 1716,
              "end": 1738
            },
            "start": 1710,
            "end": 1738
          },
          "init": null,
          "definite": false,
          "start": 1710,
          "end": 1738
        }
      ],
      "declare": false,
      "start": 1706,
      "end": 1739
    },
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
            "start": 1744,
            "end": 1746
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1749,
              "end": 1753
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r1arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 1754,
                "end": 1759
              }
            ],
            "optional": false,
            "start": 1749,
            "end": 1760
          },
          "definite": false,
          "start": 1744,
          "end": 1760
        }
      ],
      "declare": false,
      "start": 1740,
      "end": 1761
    },
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
            "start": 1766,
            "end": 1769
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r1arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 1773,
                "end": 1778
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r1arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1780,
                "end": 1786
              }
            ],
            "start": 1772,
            "end": 1787
          },
          "definite": false,
          "start": 1766,
          "end": 1787
        }
      ],
      "declare": false,
      "start": 1762,
      "end": 1788
    },
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
            "start": 1793,
            "end": 1796
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
                "start": 1800,
                "end": 1806
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r1arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 1808,
                "end": 1813
              }
            ],
            "start": 1799,
            "end": 1814
          },
          "definite": false,
          "start": 1793,
          "end": 1814
        }
      ],
      "declare": false,
      "start": 1789,
      "end": 1815
    },
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
                        "start": 1833,
                        "end": 1834
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1833,
                      "end": 1834
                    }
                  ],
                  "start": 1832,
                  "end": 1835
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
                          "start": 1839,
                          "end": 1840
                        },
                        "typeArguments": null,
                        "start": 1839,
                        "end": 1840
                      },
                      "start": 1837,
                      "end": 1840
                    },
                    "start": 1836,
                    "end": 1840
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1845,
                      "end": 1851
                    },
                    "start": 1845,
                    "end": 1853
                  },
                  "start": 1842,
                  "end": 1853
                },
                "start": 1828,
                "end": 1853
              },
              "start": 1826,
              "end": 1853
            },
            "start": 1821,
            "end": 1853
          },
          "init": null,
          "definite": false,
          "start": 1821,
          "end": 1853
        }
      ],
      "declare": false,
      "start": 1817,
      "end": 1854
    },
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
                        "start": 1872,
                        "end": 1873
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1872,
                      "end": 1873
                    }
                  ],
                  "start": 1871,
                  "end": 1874
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
                          "start": 1878,
                          "end": 1879
                        },
                        "typeArguments": null,
                        "start": 1878,
                        "end": 1879
                      },
                      "start": 1876,
                      "end": 1879
                    },
                    "start": 1875,
                    "end": 1879
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1884,
                      "end": 1890
                    },
                    "start": 1884,
                    "end": 1892
                  },
                  "start": 1881,
                  "end": 1892
                },
                "start": 1867,
                "end": 1892
              },
              "start": 1865,
              "end": 1892
            },
            "start": 1859,
            "end": 1892
          },
          "init": null,
          "definite": false,
          "start": 1859,
          "end": 1892
        }
      ],
      "declare": false,
      "start": 1855,
      "end": 1893
    },
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
            "start": 1898,
            "end": 1900
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1903,
              "end": 1907
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r2arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 1908,
                "end": 1913
              }
            ],
            "optional": false,
            "start": 1903,
            "end": 1914
          },
          "definite": false,
          "start": 1898,
          "end": 1914
        }
      ],
      "declare": false,
      "start": 1894,
      "end": 1915
    },
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
            "start": 1920,
            "end": 1923
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
                "start": 1927,
                "end": 1932
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r2arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1934,
                "end": 1940
              }
            ],
            "start": 1926,
            "end": 1941
          },
          "definite": false,
          "start": 1920,
          "end": 1941
        }
      ],
      "declare": false,
      "start": 1916,
      "end": 1942
    },
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
            "start": 1947,
            "end": 1950
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
                "start": 1954,
                "end": 1960
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r2arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 1962,
                "end": 1967
              }
            ],
            "start": 1953,
            "end": 1968
          },
          "definite": false,
          "start": 1947,
          "end": 1968
        }
      ],
      "declare": false,
      "start": 1943,
      "end": 1969
    },
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
                        "start": 1987,
                        "end": 1988
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1987,
                      "end": 1988
                    }
                  ],
                  "start": 1986,
                  "end": 1989
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
                          "start": 1993,
                          "end": 1994
                        },
                        "typeArguments": null,
                        "start": 1993,
                        "end": 1994
                      },
                      "start": 1991,
                      "end": 1994
                    },
                    "start": 1990,
                    "end": 1994
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
                      "start": 1999,
                      "end": 2000
                    },
                    "typeArguments": null,
                    "start": 1999,
                    "end": 2000
                  },
                  "start": 1996,
                  "end": 2000
                },
                "start": 1982,
                "end": 2000
              },
              "start": 1980,
              "end": 2000
            },
            "start": 1975,
            "end": 2000
          },
          "init": null,
          "definite": false,
          "start": 1975,
          "end": 2000
        }
      ],
      "declare": false,
      "start": 1971,
      "end": 2001
    },
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
                        "start": 2019,
                        "end": 2020
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2019,
                      "end": 2020
                    }
                  ],
                  "start": 2018,
                  "end": 2021
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
                          "start": 2025,
                          "end": 2026
                        },
                        "typeArguments": null,
                        "start": 2025,
                        "end": 2026
                      },
                      "start": 2023,
                      "end": 2026
                    },
                    "start": 2022,
                    "end": 2026
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 2031,
                    "end": 2035
                  },
                  "start": 2028,
                  "end": 2035
                },
                "start": 2014,
                "end": 2035
              },
              "start": 2012,
              "end": 2035
            },
            "start": 2006,
            "end": 2035
          },
          "init": null,
          "definite": false,
          "start": 2006,
          "end": 2035
        }
      ],
      "declare": false,
      "start": 2002,
      "end": 2036
    },
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
            "start": 2041,
            "end": 2043
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2046,
              "end": 2050
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r3arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2051,
                "end": 2056
              }
            ],
            "optional": false,
            "start": 2046,
            "end": 2057
          },
          "definite": false,
          "start": 2041,
          "end": 2057
        }
      ],
      "declare": false,
      "start": 2037,
      "end": 2058
    },
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
            "start": 2063,
            "end": 2066
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
                "start": 2070,
                "end": 2075
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r3arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2077,
                "end": 2083
              }
            ],
            "start": 2069,
            "end": 2084
          },
          "definite": false,
          "start": 2063,
          "end": 2084
        }
      ],
      "declare": false,
      "start": 2059,
      "end": 2085
    },
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
            "start": 2090,
            "end": 2093
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
                "start": 2097,
                "end": 2103
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r3arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2105,
                "end": 2110
              }
            ],
            "start": 2096,
            "end": 2111
          },
          "definite": false,
          "start": 2090,
          "end": 2111
        }
      ],
      "declare": false,
      "start": 2086,
      "end": 2112
    },
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
                        "start": 2130,
                        "end": 2131
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2130,
                      "end": 2131
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2133,
                        "end": 2134
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2133,
                      "end": 2134
                    }
                  ],
                  "start": 2129,
                  "end": 2135
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
                          "start": 2139,
                          "end": 2140
                        },
                        "typeArguments": null,
                        "start": 2139,
                        "end": 2140
                      },
                      "start": 2137,
                      "end": 2140
                    },
                    "start": 2136,
                    "end": 2140
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
                          "start": 2145,
                          "end": 2146
                        },
                        "typeArguments": null,
                        "start": 2145,
                        "end": 2146
                      },
                      "start": 2143,
                      "end": 2146
                    },
                    "start": 2142,
                    "end": 2146
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2151,
                    "end": 2157
                  },
                  "start": 2148,
                  "end": 2157
                },
                "start": 2125,
                "end": 2157
              },
              "start": 2123,
              "end": 2157
            },
            "start": 2118,
            "end": 2157
          },
          "init": null,
          "definite": false,
          "start": 2118,
          "end": 2157
        }
      ],
      "declare": false,
      "start": 2114,
      "end": 2158
    },
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
                        "start": 2176,
                        "end": 2177
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2176,
                      "end": 2177
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2179,
                        "end": 2180
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2179,
                      "end": 2180
                    }
                  ],
                  "start": 2175,
                  "end": 2181
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
                          "start": 2185,
                          "end": 2186
                        },
                        "typeArguments": null,
                        "start": 2185,
                        "end": 2186
                      },
                      "start": 2183,
                      "end": 2186
                    },
                    "start": 2182,
                    "end": 2186
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
                          "start": 2191,
                          "end": 2192
                        },
                        "typeArguments": null,
                        "start": 2191,
                        "end": 2192
                      },
                      "start": 2189,
                      "end": 2192
                    },
                    "start": 2188,
                    "end": 2192
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2197,
                    "end": 2203
                  },
                  "start": 2194,
                  "end": 2203
                },
                "start": 2171,
                "end": 2203
              },
              "start": 2169,
              "end": 2203
            },
            "start": 2163,
            "end": 2203
          },
          "init": null,
          "definite": false,
          "start": 2163,
          "end": 2203
        }
      ],
      "declare": false,
      "start": 2159,
      "end": 2204
    },
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
            "start": 2209,
            "end": 2211
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2214,
              "end": 2218
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r4arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2219,
                "end": 2224
              }
            ],
            "optional": false,
            "start": 2214,
            "end": 2225
          },
          "definite": false,
          "start": 2209,
          "end": 2225
        }
      ],
      "declare": false,
      "start": 2205,
      "end": 2226
    },
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
            "start": 2231,
            "end": 2234
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
                "start": 2238,
                "end": 2243
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r4arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2245,
                "end": 2251
              }
            ],
            "start": 2237,
            "end": 2252
          },
          "definite": false,
          "start": 2231,
          "end": 2252
        }
      ],
      "declare": false,
      "start": 2227,
      "end": 2253
    },
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
            "start": 2258,
            "end": 2261
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
                "start": 2265,
                "end": 2271
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r4arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2273,
                "end": 2278
              }
            ],
            "start": 2264,
            "end": 2279
          },
          "definite": false,
          "start": 2258,
          "end": 2279
        }
      ],
      "declare": false,
      "start": 2254,
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
            "name": "r5arg",
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
                        "start": 2298,
                        "end": 2299
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2298,
                      "end": 2299
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2301,
                        "end": 2302
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2301,
                      "end": 2302
                    }
                  ],
                  "start": 2297,
                  "end": 2303
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
                                  "start": 2317,
                                  "end": 2318
                                },
                                "typeArguments": null,
                                "start": 2317,
                                "end": 2318
                              },
                              "start": 2315,
                              "end": 2318
                            },
                            "start": 2312,
                            "end": 2318
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
                              "start": 2323,
                              "end": 2324
                            },
                            "typeArguments": null,
                            "start": 2323,
                            "end": 2324
                          },
                          "start": 2320,
                          "end": 2324
                        },
                        "start": 2307,
                        "end": 2324
                      },
                      "start": 2305,
                      "end": 2324
                    },
                    "start": 2304,
                    "end": 2324
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
                      "start": 2329,
                      "end": 2330
                    },
                    "typeArguments": null,
                    "start": 2329,
                    "end": 2330
                  },
                  "start": 2326,
                  "end": 2330
                },
                "start": 2293,
                "end": 2330
              },
              "start": 2291,
              "end": 2330
            },
            "start": 2286,
            "end": 2330
          },
          "init": null,
          "definite": false,
          "start": 2286,
          "end": 2330
        }
      ],
      "declare": false,
      "start": 2282,
      "end": 2331
    },
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
                        "start": 2349,
                        "end": 2350
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2349,
                      "end": 2350
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2352,
                        "end": 2353
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2352,
                      "end": 2353
                    }
                  ],
                  "start": 2348,
                  "end": 2354
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
                                  "start": 2368,
                                  "end": 2369
                                },
                                "typeArguments": null,
                                "start": 2368,
                                "end": 2369
                              },
                              "start": 2366,
                              "end": 2369
                            },
                            "start": 2363,
                            "end": 2369
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
                              "start": 2374,
                              "end": 2375
                            },
                            "typeArguments": null,
                            "start": 2374,
                            "end": 2375
                          },
                          "start": 2371,
                          "end": 2375
                        },
                        "start": 2358,
                        "end": 2375
                      },
                      "start": 2356,
                      "end": 2375
                    },
                    "start": 2355,
                    "end": 2375
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
                      "start": 2380,
                      "end": 2381
                    },
                    "typeArguments": null,
                    "start": 2380,
                    "end": 2381
                  },
                  "start": 2377,
                  "end": 2381
                },
                "start": 2344,
                "end": 2381
              },
              "start": 2342,
              "end": 2381
            },
            "start": 2336,
            "end": 2381
          },
          "init": null,
          "definite": false,
          "start": 2336,
          "end": 2381
        }
      ],
      "declare": false,
      "start": 2332,
      "end": 2382
    },
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
            "start": 2387,
            "end": 2389
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2392,
              "end": 2396
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r5arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2397,
                "end": 2402
              }
            ],
            "optional": false,
            "start": 2392,
            "end": 2403
          },
          "definite": false,
          "start": 2387,
          "end": 2403
        }
      ],
      "declare": false,
      "start": 2383,
      "end": 2404
    },
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
            "start": 2409,
            "end": 2412
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
                "start": 2416,
                "end": 2421
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r5arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2423,
                "end": 2429
              }
            ],
            "start": 2415,
            "end": 2430
          },
          "definite": false,
          "start": 2409,
          "end": 2430
        }
      ],
      "declare": false,
      "start": 2405,
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
            "name": "r5b",
            "optional": false,
            "typeAnnotation": null,
            "start": 2436,
            "end": 2439
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
                "start": 2443,
                "end": 2449
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r5arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2451,
                "end": 2456
              }
            ],
            "start": 2442,
            "end": 2457
          },
          "definite": false,
          "start": 2436,
          "end": 2457
        }
      ],
      "declare": false,
      "start": 2432,
      "end": 2458
    },
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
                        "start": 2476,
                        "end": 2477
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2486,
                          "end": 2490
                        },
                        "typeArguments": null,
                        "start": 2486,
                        "end": 2490
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2476,
                      "end": 2490
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2492,
                        "end": 2493
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2502,
                          "end": 2509
                        },
                        "typeArguments": null,
                        "start": 2502,
                        "end": 2509
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2492,
                      "end": 2509
                    }
                  ],
                  "start": 2475,
                  "end": 2510
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
                                  "start": 2524,
                                  "end": 2525
                                },
                                "typeArguments": null,
                                "start": 2524,
                                "end": 2525
                              },
                              "start": 2522,
                              "end": 2525
                            },
                            "start": 2519,
                            "end": 2525
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
                              "start": 2530,
                              "end": 2531
                            },
                            "typeArguments": null,
                            "start": 2530,
                            "end": 2531
                          },
                          "start": 2527,
                          "end": 2531
                        },
                        "start": 2514,
                        "end": 2531
                      },
                      "start": 2512,
                      "end": 2531
                    },
                    "start": 2511,
                    "end": 2531
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
                      "start": 2536,
                      "end": 2537
                    },
                    "typeArguments": null,
                    "start": 2536,
                    "end": 2537
                  },
                  "start": 2533,
                  "end": 2537
                },
                "start": 2471,
                "end": 2537
              },
              "start": 2469,
              "end": 2537
            },
            "start": 2464,
            "end": 2537
          },
          "init": null,
          "definite": false,
          "start": 2464,
          "end": 2537
        }
      ],
      "declare": false,
      "start": 2460,
      "end": 2538
    },
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
                        "start": 2556,
                        "end": 2557
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2566,
                          "end": 2570
                        },
                        "typeArguments": null,
                        "start": 2566,
                        "end": 2570
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2556,
                      "end": 2570
                    }
                  ],
                  "start": 2555,
                  "end": 2571
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
                                  "start": 2585,
                                  "end": 2586
                                },
                                "typeArguments": null,
                                "start": 2585,
                                "end": 2586
                              },
                              "start": 2583,
                              "end": 2586
                            },
                            "start": 2580,
                            "end": 2586
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
                              "start": 2591,
                              "end": 2598
                            },
                            "typeArguments": null,
                            "start": 2591,
                            "end": 2598
                          },
                          "start": 2588,
                          "end": 2598
                        },
                        "start": 2575,
                        "end": 2598
                      },
                      "start": 2573,
                      "end": 2598
                    },
                    "start": 2572,
                    "end": 2598
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
                      "start": 2603,
                      "end": 2604
                    },
                    "typeArguments": null,
                    "start": 2603,
                    "end": 2604
                  },
                  "start": 2600,
                  "end": 2604
                },
                "start": 2551,
                "end": 2604
              },
              "start": 2549,
              "end": 2604
            },
            "start": 2543,
            "end": 2604
          },
          "init": null,
          "definite": false,
          "start": 2543,
          "end": 2604
        }
      ],
      "declare": false,
      "start": 2539,
      "end": 2605
    },
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
            "start": 2610,
            "end": 2612
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo6",
              "optional": false,
              "typeAnnotation": null,
              "start": 2615,
              "end": 2619
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r6arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2620,
                "end": 2625
              }
            ],
            "optional": false,
            "start": 2615,
            "end": 2626
          },
          "definite": false,
          "start": 2610,
          "end": 2626
        }
      ],
      "declare": false,
      "start": 2606,
      "end": 2627
    },
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
            "start": 2632,
            "end": 2635
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
                "start": 2639,
                "end": 2644
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r6arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2646,
                "end": 2652
              }
            ],
            "start": 2638,
            "end": 2653
          },
          "definite": false,
          "start": 2632,
          "end": 2653
        }
      ],
      "declare": false,
      "start": 2628,
      "end": 2654
    },
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
            "start": 2659,
            "end": 2662
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
                "start": 2666,
                "end": 2672
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r6arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2674,
                "end": 2679
              }
            ],
            "start": 2665,
            "end": 2680
          },
          "definite": false,
          "start": 2659,
          "end": 2680
        }
      ],
      "declare": false,
      "start": 2655,
      "end": 2681
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r11arg",
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
                        "start": 2700,
                        "end": 2701
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2700,
                      "end": 2701
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2703,
                        "end": 2704
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2703,
                      "end": 2704
                    }
                  ],
                  "start": 2699,
                  "end": 2705
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
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2711,
                              "end": 2714
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
                                  "start": 2716,
                                  "end": 2717
                                },
                                "typeArguments": null,
                                "start": 2716,
                                "end": 2717
                              },
                              "start": 2714,
                              "end": 2717
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2711,
                            "end": 2717
                          }
                        ],
                        "start": 2709,
                        "end": 2719
                      },
                      "start": 2707,
                      "end": 2719
                    },
                    "start": 2706,
                    "end": 2719
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
                              "start": 2726,
                              "end": 2729
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
                                  "start": 2731,
                                  "end": 2732
                                },
                                "typeArguments": null,
                                "start": 2731,
                                "end": 2732
                              },
                              "start": 2729,
                              "end": 2732
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2726,
                            "end": 2733
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
                              "start": 2734,
                              "end": 2737
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
                            "accessibility": null,
                            "static": false,
                            "start": 2734,
                            "end": 2740
                          }
                        ],
                        "start": 2724,
                        "end": 2742
                      },
                      "start": 2722,
                      "end": 2742
                    },
                    "start": 2721,
                    "end": 2742
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
                      "start": 2747,
                      "end": 2751
                    },
                    "typeArguments": null,
                    "start": 2747,
                    "end": 2751
                  },
                  "start": 2744,
                  "end": 2751
                },
                "start": 2695,
                "end": 2751
              },
              "start": 2693,
              "end": 2751
            },
            "start": 2687,
            "end": 2751
          },
          "init": null,
          "definite": false,
          "start": 2687,
          "end": 2751
        }
      ],
      "declare": false,
      "start": 2683,
      "end": 2752
    },
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
                        "start": 2771,
                        "end": 2772
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2771,
                      "end": 2772
                    }
                  ],
                  "start": 2770,
                  "end": 2773
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
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2779,
                              "end": 2782
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
                            "accessibility": null,
                            "static": false,
                            "start": 2779,
                            "end": 2785
                          }
                        ],
                        "start": 2777,
                        "end": 2787
                      },
                      "start": 2775,
                      "end": 2787
                    },
                    "start": 2774,
                    "end": 2787
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
                              "start": 2794,
                              "end": 2797
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
                                  "start": 2799,
                                  "end": 2800
                                },
                                "typeArguments": null,
                                "start": 2799,
                                "end": 2800
                              },
                              "start": 2797,
                              "end": 2800
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2794,
                            "end": 2801
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
                              "start": 2802,
                              "end": 2805
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
                                  "start": 2807,
                                  "end": 2808
                                },
                                "typeArguments": null,
                                "start": 2807,
                                "end": 2808
                              },
                              "start": 2805,
                              "end": 2808
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2802,
                            "end": 2808
                          }
                        ],
                        "start": 2792,
                        "end": 2810
                      },
                      "start": 2790,
                      "end": 2810
                    },
                    "start": 2789,
                    "end": 2810
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
                      "start": 2815,
                      "end": 2819
                    },
                    "typeArguments": null,
                    "start": 2815,
                    "end": 2819
                  },
                  "start": 2812,
                  "end": 2819
                },
                "start": 2766,
                "end": 2819
              },
              "start": 2764,
              "end": 2819
            },
            "start": 2757,
            "end": 2819
          },
          "init": null,
          "definite": false,
          "start": 2757,
          "end": 2819
        }
      ],
      "declare": false,
      "start": 2753,
      "end": 2820
    },
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
            "start": 2825,
            "end": 2828
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo11",
              "optional": false,
              "typeAnnotation": null,
              "start": 2831,
              "end": 2836
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r11arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2837,
                "end": 2843
              }
            ],
            "optional": false,
            "start": 2831,
            "end": 2844
          },
          "definite": false,
          "start": 2825,
          "end": 2844
        }
      ],
      "declare": false,
      "start": 2821,
      "end": 2845
    },
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
            "start": 2850,
            "end": 2854
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r11arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2858,
                "end": 2864
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r11arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2866,
                "end": 2873
              }
            ],
            "start": 2857,
            "end": 2874
          },
          "definite": false,
          "start": 2850,
          "end": 2874
        }
      ],
      "declare": false,
      "start": 2846,
      "end": 2875
    },
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
            "start": 2880,
            "end": 2884
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
                "start": 2888,
                "end": 2895
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r11arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2897,
                "end": 2903
              }
            ],
            "start": 2887,
            "end": 2904
          },
          "definite": false,
          "start": 2880,
          "end": 2904
        }
      ],
      "declare": false,
      "start": 2876,
      "end": 2905
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r15arg",
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
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2924,
                        "end": 2925
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2924,
                      "end": 2925
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2927,
                        "end": 2928
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2927,
                      "end": 2928
                    }
                  ],
                  "start": 2923,
                  "end": 2929
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
                              "start": 2935,
                              "end": 2936
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
                                  "start": 2938,
                                  "end": 2939
                                },
                                "typeArguments": null,
                                "start": 2938,
                                "end": 2939
                              },
                              "start": 2936,
                              "end": 2939
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2935,
                            "end": 2940
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
                              "start": 2941,
                              "end": 2942
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "V",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2944,
                                  "end": 2945
                                },
                                "typeArguments": null,
                                "start": 2944,
                                "end": 2945
                              },
                              "start": 2942,
                              "end": 2945
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2941,
                            "end": 2946
                          }
                        ],
                        "start": 2933,
                        "end": 2948
                      },
                      "start": 2931,
                      "end": 2948
                    },
                    "start": 2930,
                    "end": 2948
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
                        "start": 2953,
                        "end": 2954
                      },
                      "typeArguments": null,
                      "start": 2953,
                      "end": 2954
                    },
                    "start": 2953,
                    "end": 2956
                  },
                  "start": 2950,
                  "end": 2956
                },
                "start": 2919,
                "end": 2956
              },
              "start": 2917,
              "end": 2956
            },
            "start": 2911,
            "end": 2956
          },
          "init": null,
          "definite": false,
          "start": 2911,
          "end": 2956
        }
      ],
      "declare": false,
      "start": 2907,
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
            "name": "r15arg2",
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
                        "start": 2976,
                        "end": 2977
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2976,
                      "end": 2977
                    }
                  ],
                  "start": 2975,
                  "end": 2978
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
                              "start": 2984,
                              "end": 2985
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
                                  "start": 2987,
                                  "end": 2988
                                },
                                "typeArguments": null,
                                "start": 2987,
                                "end": 2988
                              },
                              "start": 2985,
                              "end": 2988
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2984,
                            "end": 2989
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
                              "start": 2990,
                              "end": 2991
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
                                  "start": 2993,
                                  "end": 2994
                                },
                                "typeArguments": null,
                                "start": 2993,
                                "end": 2994
                              },
                              "start": 2991,
                              "end": 2994
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2990,
                            "end": 2994
                          }
                        ],
                        "start": 2982,
                        "end": 2996
                      },
                      "start": 2980,
                      "end": 2996
                    },
                    "start": 2979,
                    "end": 2996
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
                        "start": 3001,
                        "end": 3002
                      },
                      "typeArguments": null,
                      "start": 3001,
                      "end": 3002
                    },
                    "start": 3001,
                    "end": 3004
                  },
                  "start": 2998,
                  "end": 3004
                },
                "start": 2971,
                "end": 3004
              },
              "start": 2969,
              "end": 3004
            },
            "start": 2962,
            "end": 3004
          },
          "init": null,
          "definite": false,
          "start": 2962,
          "end": 3004
        }
      ],
      "declare": false,
      "start": 2958,
      "end": 3005
    },
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
            "start": 3010,
            "end": 3013
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo15",
              "optional": false,
              "typeAnnotation": null,
              "start": 3016,
              "end": 3021
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r15arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 3022,
                "end": 3028
              }
            ],
            "optional": false,
            "start": 3016,
            "end": 3029
          },
          "definite": false,
          "start": 3010,
          "end": 3029
        }
      ],
      "declare": false,
      "start": 3006,
      "end": 3030
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r15a",
            "optional": false,
            "typeAnnotation": null,
            "start": 3035,
            "end": 3039
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r15arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 3043,
                "end": 3049
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r15arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3051,
                "end": 3058
              }
            ],
            "start": 3042,
            "end": 3059
          },
          "definite": false,
          "start": 3035,
          "end": 3059
        }
      ],
      "declare": false,
      "start": 3031,
      "end": 3060
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r15b",
            "optional": false,
            "typeAnnotation": null,
            "start": 3065,
            "end": 3069
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r15arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3073,
                "end": 3080
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r15arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 3082,
                "end": 3088
              }
            ],
            "start": 3072,
            "end": 3089
          },
          "definite": false,
          "start": 3065,
          "end": 3089
        }
      ],
      "declare": false,
      "start": 3061,
      "end": 3090
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r16arg",
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
                        "start": 3109,
                        "end": 3110
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3119,
                          "end": 3123
                        },
                        "typeArguments": null,
                        "start": 3119,
                        "end": 3123
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3109,
                      "end": 3123
                    }
                  ],
                  "start": 3108,
                  "end": 3124
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
                              "start": 3130,
                              "end": 3131
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
                                  "start": 3133,
                                  "end": 3134
                                },
                                "typeArguments": null,
                                "start": 3133,
                                "end": 3134
                              },
                              "start": 3131,
                              "end": 3134
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 3130,
                            "end": 3135
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
                              "start": 3136,
                              "end": 3137
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
                                  "start": 3139,
                                  "end": 3140
                                },
                                "typeArguments": null,
                                "start": 3139,
                                "end": 3140
                              },
                              "start": 3137,
                              "end": 3140
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 3136,
                            "end": 3140
                          }
                        ],
                        "start": 3128,
                        "end": 3142
                      },
                      "start": 3126,
                      "end": 3142
                    },
                    "start": 3125,
                    "end": 3142
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
                        "start": 3147,
                        "end": 3148
                      },
                      "typeArguments": null,
                      "start": 3147,
                      "end": 3148
                    },
                    "start": 3147,
                    "end": 3150
                  },
                  "start": 3144,
                  "end": 3150
                },
                "start": 3104,
                "end": 3150
              },
              "start": 3102,
              "end": 3150
            },
            "start": 3096,
            "end": 3150
          },
          "init": null,
          "definite": false,
          "start": 3096,
          "end": 3150
        }
      ],
      "declare": false,
      "start": 3092,
      "end": 3151
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r16arg2",
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
                        "start": 3170,
                        "end": 3171
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3180,
                          "end": 3184
                        },
                        "typeArguments": null,
                        "start": 3180,
                        "end": 3184
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3170,
                      "end": 3184
                    }
                  ],
                  "start": 3169,
                  "end": 3185
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
                              "start": 3191,
                              "end": 3192
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
                                  "start": 3194,
                                  "end": 3195
                                },
                                "typeArguments": null,
                                "start": 3194,
                                "end": 3195
                              },
                              "start": 3192,
                              "end": 3195
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 3191,
                            "end": 3196
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
                              "start": 3197,
                              "end": 3198
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
                            "accessibility": null,
                            "static": false,
                            "start": 3197,
                            "end": 3201
                          }
                        ],
                        "start": 3189,
                        "end": 3203
                      },
                      "start": 3187,
                      "end": 3203
                    },
                    "start": 3186,
                    "end": 3203
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
                        "start": 3208,
                        "end": 3209
                      },
                      "typeArguments": null,
                      "start": 3208,
                      "end": 3209
                    },
                    "start": 3208,
                    "end": 3211
                  },
                  "start": 3205,
                  "end": 3211
                },
                "start": 3165,
                "end": 3211
              },
              "start": 3163,
              "end": 3211
            },
            "start": 3156,
            "end": 3211
          },
          "init": null,
          "definite": false,
          "start": 3156,
          "end": 3211
        }
      ],
      "declare": false,
      "start": 3152,
      "end": 3212
    },
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
            "start": 3217,
            "end": 3220
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo16",
              "optional": false,
              "typeAnnotation": null,
              "start": 3223,
              "end": 3228
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r16arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 3229,
                "end": 3235
              }
            ],
            "optional": false,
            "start": 3223,
            "end": 3236
          },
          "definite": false,
          "start": 3217,
          "end": 3236
        }
      ],
      "declare": false,
      "start": 3213,
      "end": 3237
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r16a",
            "optional": false,
            "typeAnnotation": null,
            "start": 3242,
            "end": 3246
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r16arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 3250,
                "end": 3256
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r16arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3258,
                "end": 3265
              }
            ],
            "start": 3249,
            "end": 3266
          },
          "definite": false,
          "start": 3242,
          "end": 3266
        }
      ],
      "declare": false,
      "start": 3238,
      "end": 3267
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r16b",
            "optional": false,
            "typeAnnotation": null,
            "start": 3272,
            "end": 3276
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r16arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3280,
                "end": 3287
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r16arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 3289,
                "end": 3295
              }
            ],
            "start": 3279,
            "end": 3296
          },
          "definite": false,
          "start": 3272,
          "end": 3296
        }
      ],
      "declare": false,
      "start": 3268,
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
            "name": "r17arg",
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
                        "start": 3316,
                        "end": 3317
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3316,
                      "end": 3317
                    }
                  ],
                  "start": 3315,
                  "end": 3318
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
                                  "start": 3330,
                                  "end": 3331
                                },
                                "typeArguments": null,
                                "start": 3330,
                                "end": 3331
                              },
                              "start": 3328,
                              "end": 3331
                            },
                            "start": 3327,
                            "end": 3331
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
                              "start": 3336,
                              "end": 3337
                            },
                            "typeArguments": null,
                            "start": 3336,
                            "end": 3337
                          },
                          "start": 3333,
                          "end": 3337
                        },
                        "start": 3322,
                        "end": 3337
                      },
                      "start": 3320,
                      "end": 3337
                    },
                    "start": 3319,
                    "end": 3337
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
                        "start": 3342,
                        "end": 3343
                      },
                      "typeArguments": null,
                      "start": 3342,
                      "end": 3343
                    },
                    "start": 3342,
                    "end": 3345
                  },
                  "start": 3339,
                  "end": 3345
                },
                "start": 3311,
                "end": 3345
              },
              "start": 3309,
              "end": 3345
            },
            "start": 3303,
            "end": 3345
          },
          "init": null,
          "definite": false,
          "start": 3303,
          "end": 3345
        }
      ],
      "declare": false,
      "start": 3299,
      "end": 3346
    },
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
            "start": 3351,
            "end": 3354
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo17",
              "optional": false,
              "typeAnnotation": null,
              "start": 3357,
              "end": 3362
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r17arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 3363,
                "end": 3369
              }
            ],
            "optional": false,
            "start": 3357,
            "end": 3370
          },
          "definite": false,
          "start": 3351,
          "end": 3370
        }
      ],
      "declare": false,
      "start": 3347,
      "end": 3371
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r18arg",
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
                                "start": 3398,
                                "end": 3399
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 3398,
                              "end": 3399
                            }
                          ],
                          "start": 3397,
                          "end": 3400
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
                                  "start": 3404,
                                  "end": 3405
                                },
                                "typeArguments": null,
                                "start": 3404,
                                "end": 3405
                              },
                              "start": 3402,
                              "end": 3405
                            },
                            "start": 3401,
                            "end": 3405
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
                              "start": 3410,
                              "end": 3411
                            },
                            "typeArguments": null,
                            "start": 3410,
                            "end": 3411
                          },
                          "start": 3407,
                          "end": 3411
                        },
                        "start": 3393,
                        "end": 3411
                      },
                      "start": 3391,
                      "end": 3411
                    },
                    "start": 3390,
                    "end": 3411
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 3416,
                      "end": 3419
                    },
                    "start": 3416,
                    "end": 3421
                  },
                  "start": 3413,
                  "end": 3421
                },
                "start": 3385,
                "end": 3421
              },
              "start": 3383,
              "end": 3421
            },
            "start": 3377,
            "end": 3421
          },
          "init": null,
          "definite": false,
          "start": 3377,
          "end": 3421
        }
      ],
      "declare": false,
      "start": 3373,
      "end": 3422
    },
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
            "start": 3427,
            "end": 3430
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo18",
              "optional": false,
              "typeAnnotation": null,
              "start": 3433,
              "end": 3438
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r18arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 3439,
                "end": 3445
              }
            ],
            "optional": false,
            "start": 3433,
            "end": 3446
          },
          "definite": false,
          "start": 3427,
          "end": 3446
        }
      ],
      "declare": false,
      "start": 3423,
      "end": 3447
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 102,
  "end": 3447
}
```
