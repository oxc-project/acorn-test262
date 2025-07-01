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
                      "start": 299,
                      "end": 300
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 299,
                    "end": 300
                  }
                ],
                "start": 298,
                "end": 301
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
                        "start": 305,
                        "end": 306
                      },
                      "typeArguments": null,
                      "start": 305,
                      "end": 306
                    },
                    "start": 303,
                    "end": 306
                  },
                  "start": 302,
                  "end": 306
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
                      "start": 311,
                      "end": 312
                    },
                    "typeArguments": null,
                    "start": 311,
                    "end": 312
                  },
                  "start": 311,
                  "end": 314
                },
                "start": 308,
                "end": 314
              },
              "start": 298,
              "end": 314
            },
            "start": 296,
            "end": 314
          },
          "start": 295,
          "end": 314
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 273,
      "end": 316
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 334,
        "end": 338
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
              "start": 342,
              "end": 345
            },
            "start": 340,
            "end": 345
          },
          "start": 339,
          "end": 345
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 348,
          "end": 351
        },
        "start": 346,
        "end": 351
      },
      "body": null,
      "expression": false,
      "start": 317,
      "end": 352
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 371,
        "end": 375
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
                      "start": 381,
                      "end": 382
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 381,
                    "end": 382
                  }
                ],
                "start": 380,
                "end": 383
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
                        "start": 387,
                        "end": 388
                      },
                      "typeArguments": null,
                      "start": 387,
                      "end": 388
                    },
                    "start": 385,
                    "end": 388
                  },
                  "start": 384,
                  "end": 388
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 393,
                    "end": 399
                  },
                  "start": 393,
                  "end": 401
                },
                "start": 390,
                "end": 401
              },
              "start": 380,
              "end": 401
            },
            "start": 378,
            "end": 401
          },
          "start": 376,
          "end": 401
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 354,
      "end": 403
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 421,
        "end": 425
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
              "start": 429,
              "end": 432
            },
            "start": 427,
            "end": 432
          },
          "start": 426,
          "end": 432
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 435,
          "end": 438
        },
        "start": 433,
        "end": 438
      },
      "body": null,
      "expression": false,
      "start": 404,
      "end": 439
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 458,
        "end": 462
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
                      "start": 468,
                      "end": 469
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 468,
                    "end": 469
                  }
                ],
                "start": 467,
                "end": 470
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
                        "start": 474,
                        "end": 475
                      },
                      "typeArguments": null,
                      "start": 474,
                      "end": 475
                    },
                    "start": 472,
                    "end": 475
                  },
                  "start": 471,
                  "end": 475
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 480,
                  "end": 484
                },
                "start": 477,
                "end": 484
              },
              "start": 467,
              "end": 484
            },
            "start": 465,
            "end": 484
          },
          "start": 463,
          "end": 484
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 441,
      "end": 486
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 504,
        "end": 508
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
              "start": 512,
              "end": 515
            },
            "start": 510,
            "end": 515
          },
          "start": 509,
          "end": 515
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 518,
          "end": 521
        },
        "start": 516,
        "end": 521
      },
      "body": null,
      "expression": false,
      "start": 487,
      "end": 522
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 541,
        "end": 545
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
                      "start": 551,
                      "end": 552
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 551,
                    "end": 552
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 554,
                      "end": 555
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 554,
                    "end": 555
                  }
                ],
                "start": 550,
                "end": 556
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
                        "start": 560,
                        "end": 561
                      },
                      "typeArguments": null,
                      "start": 560,
                      "end": 561
                    },
                    "start": 558,
                    "end": 561
                  },
                  "start": 557,
                  "end": 561
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
                        "start": 566,
                        "end": 567
                      },
                      "typeArguments": null,
                      "start": 566,
                      "end": 567
                    },
                    "start": 564,
                    "end": 567
                  },
                  "start": 563,
                  "end": 567
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 572,
                  "end": 578
                },
                "start": 569,
                "end": 578
              },
              "start": 550,
              "end": 578
            },
            "start": 548,
            "end": 578
          },
          "start": 546,
          "end": 578
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 524,
      "end": 580
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 598,
        "end": 602
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
              "start": 606,
              "end": 609
            },
            "start": 604,
            "end": 609
          },
          "start": 603,
          "end": 609
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 612,
          "end": 615
        },
        "start": 610,
        "end": 615
      },
      "body": null,
      "expression": false,
      "start": 581,
      "end": 616
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 635,
        "end": 639
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
                      "start": 645,
                      "end": 646
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 645,
                    "end": 646
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 648,
                      "end": 649
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 648,
                    "end": 649
                  }
                ],
                "start": 644,
                "end": 650
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
                                "start": 660,
                                "end": 661
                              },
                              "typeArguments": null,
                              "start": 660,
                              "end": 661
                            },
                            "start": 658,
                            "end": 661
                          },
                          "start": 655,
                          "end": 661
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
                            "start": 666,
                            "end": 667
                          },
                          "typeArguments": null,
                          "start": 666,
                          "end": 667
                        },
                        "start": 663,
                        "end": 667
                      },
                      "start": 654,
                      "end": 667
                    },
                    "start": 652,
                    "end": 667
                  },
                  "start": 651,
                  "end": 667
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
                    "start": 672,
                    "end": 673
                  },
                  "typeArguments": null,
                  "start": 672,
                  "end": 673
                },
                "start": 669,
                "end": 673
              },
              "start": 644,
              "end": 673
            },
            "start": 642,
            "end": 673
          },
          "start": 640,
          "end": 673
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 618,
      "end": 675
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 693,
        "end": 697
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
              "start": 701,
              "end": 704
            },
            "start": 699,
            "end": 704
          },
          "start": 698,
          "end": 704
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 707,
          "end": 710
        },
        "start": 705,
        "end": 710
      },
      "body": null,
      "expression": false,
      "start": 676,
      "end": 711
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 730,
        "end": 734
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
                      "start": 740,
                      "end": 741
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 750,
                        "end": 754
                      },
                      "typeArguments": null,
                      "start": 750,
                      "end": 754
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 740,
                    "end": 754
                  }
                ],
                "start": 739,
                "end": 755
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
                                "start": 765,
                                "end": 766
                              },
                              "typeArguments": null,
                              "start": 765,
                              "end": 766
                            },
                            "start": 763,
                            "end": 766
                          },
                          "start": 760,
                          "end": 766
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
                            "start": 771,
                            "end": 778
                          },
                          "typeArguments": null,
                          "start": 771,
                          "end": 778
                        },
                        "start": 768,
                        "end": 778
                      },
                      "start": 759,
                      "end": 778
                    },
                    "start": 757,
                    "end": 778
                  },
                  "start": 756,
                  "end": 778
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
                    "start": 783,
                    "end": 784
                  },
                  "typeArguments": null,
                  "start": 783,
                  "end": 784
                },
                "start": 780,
                "end": 784
              },
              "start": 739,
              "end": 784
            },
            "start": 737,
            "end": 784
          },
          "start": 735,
          "end": 784
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 713,
      "end": 786
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 804,
        "end": 808
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
              "start": 812,
              "end": 815
            },
            "start": 810,
            "end": 815
          },
          "start": 809,
          "end": 815
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 818,
          "end": 821
        },
        "start": 816,
        "end": 821
      },
      "body": null,
      "expression": false,
      "start": 787,
      "end": 822
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 841,
        "end": 846
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
                      "start": 853,
                      "end": 854
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 853,
                    "end": 854
                  }
                ],
                "start": 852,
                "end": 855
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
                            "start": 861,
                            "end": 864
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
                                "start": 866,
                                "end": 867
                              },
                              "typeArguments": null,
                              "start": 866,
                              "end": 867
                            },
                            "start": 864,
                            "end": 867
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 861,
                          "end": 867
                        }
                      ],
                      "start": 859,
                      "end": 869
                    },
                    "start": 857,
                    "end": 869
                  },
                  "start": 856,
                  "end": 869
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
                            "start": 876,
                            "end": 879
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
                                "start": 881,
                                "end": 882
                              },
                              "typeArguments": null,
                              "start": 881,
                              "end": 882
                            },
                            "start": 879,
                            "end": 882
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 876,
                          "end": 883
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
                            "start": 884,
                            "end": 887
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
                                "start": 889,
                                "end": 890
                              },
                              "typeArguments": null,
                              "start": 889,
                              "end": 890
                            },
                            "start": 887,
                            "end": 890
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 884,
                          "end": 890
                        }
                      ],
                      "start": 874,
                      "end": 892
                    },
                    "start": 872,
                    "end": 892
                  },
                  "start": 871,
                  "end": 892
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
                    "start": 897,
                    "end": 901
                  },
                  "typeArguments": null,
                  "start": 897,
                  "end": 901
                },
                "start": 894,
                "end": 901
              },
              "start": 852,
              "end": 901
            },
            "start": 850,
            "end": 901
          },
          "start": 847,
          "end": 901
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 824,
      "end": 903
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 921,
        "end": 926
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
              "start": 930,
              "end": 933
            },
            "start": 928,
            "end": 933
          },
          "start": 927,
          "end": 933
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 936,
          "end": 939
        },
        "start": 934,
        "end": 939
      },
      "body": null,
      "expression": false,
      "start": 904,
      "end": 940
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 959,
        "end": 964
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
                      "start": 971,
                      "end": 972
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 971,
                    "end": 972
                  }
                ],
                "start": 970,
                "end": 973
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
                            "start": 979,
                            "end": 980
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
                                "start": 982,
                                "end": 983
                              },
                              "typeArguments": null,
                              "start": 982,
                              "end": 983
                            },
                            "start": 980,
                            "end": 983
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 979,
                          "end": 984
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
                            "start": 985,
                            "end": 986
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
                                "start": 988,
                                "end": 989
                              },
                              "typeArguments": null,
                              "start": 988,
                              "end": 989
                            },
                            "start": 986,
                            "end": 989
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 985,
                          "end": 989
                        }
                      ],
                      "start": 977,
                      "end": 991
                    },
                    "start": 975,
                    "end": 991
                  },
                  "start": 974,
                  "end": 991
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
                      "start": 996,
                      "end": 997
                    },
                    "typeArguments": null,
                    "start": 996,
                    "end": 997
                  },
                  "start": 996,
                  "end": 999
                },
                "start": 993,
                "end": 999
              },
              "start": 970,
              "end": 999
            },
            "start": 968,
            "end": 999
          },
          "start": 965,
          "end": 999
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 942,
      "end": 1001
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 1019,
        "end": 1024
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
              "start": 1028,
              "end": 1031
            },
            "start": 1026,
            "end": 1031
          },
          "start": 1025,
          "end": 1031
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1034,
          "end": 1037
        },
        "start": 1032,
        "end": 1037
      },
      "body": null,
      "expression": false,
      "start": 1002,
      "end": 1038
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null,
        "start": 1057,
        "end": 1062
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
                      "start": 1069,
                      "end": 1070
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1079,
                        "end": 1083
                      },
                      "typeArguments": null,
                      "start": 1079,
                      "end": 1083
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1069,
                    "end": 1083
                  }
                ],
                "start": 1068,
                "end": 1084
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
                            "start": 1090,
                            "end": 1091
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
                                "start": 1093,
                                "end": 1094
                              },
                              "typeArguments": null,
                              "start": 1093,
                              "end": 1094
                            },
                            "start": 1091,
                            "end": 1094
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1090,
                          "end": 1095
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
                            "start": 1096,
                            "end": 1097
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
                                "start": 1099,
                                "end": 1100
                              },
                              "typeArguments": null,
                              "start": 1099,
                              "end": 1100
                            },
                            "start": 1097,
                            "end": 1100
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1096,
                          "end": 1100
                        }
                      ],
                      "start": 1088,
                      "end": 1102
                    },
                    "start": 1086,
                    "end": 1102
                  },
                  "start": 1085,
                  "end": 1102
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
                      "start": 1107,
                      "end": 1108
                    },
                    "typeArguments": null,
                    "start": 1107,
                    "end": 1108
                  },
                  "start": 1107,
                  "end": 1110
                },
                "start": 1104,
                "end": 1110
              },
              "start": 1068,
              "end": 1110
            },
            "start": 1066,
            "end": 1110
          },
          "start": 1063,
          "end": 1110
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1040,
      "end": 1112
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null,
        "start": 1130,
        "end": 1135
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
              "start": 1139,
              "end": 1142
            },
            "start": 1137,
            "end": 1142
          },
          "start": 1136,
          "end": 1142
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1145,
          "end": 1148
        },
        "start": 1143,
        "end": 1148
      },
      "body": null,
      "expression": false,
      "start": 1113,
      "end": 1149
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo17",
        "optional": false,
        "typeAnnotation": null,
        "start": 1168,
        "end": 1173
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
                          "start": 1186,
                          "end": 1187
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1196,
                            "end": 1203
                          },
                          "typeArguments": null,
                          "start": 1196,
                          "end": 1203
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1186,
                        "end": 1203
                      }
                    ],
                    "start": 1185,
                    "end": 1204
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
                                    "start": 1212,
                                    "end": 1213
                                  },
                                  "typeArguments": null,
                                  "start": 1212,
                                  "end": 1213
                                },
                                "start": 1210,
                                "end": 1213
                              },
                              "start": 1209,
                              "end": 1213
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
                                "start": 1218,
                                "end": 1219
                              },
                              "typeArguments": null,
                              "start": 1218,
                              "end": 1219
                            },
                            "start": 1215,
                            "end": 1219
                          },
                          "start": 1208,
                          "end": 1219
                        },
                        "start": 1206,
                        "end": 1219
                      },
                      "start": 1205,
                      "end": 1219
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
                          "start": 1222,
                          "end": 1223
                        },
                        "typeArguments": null,
                        "start": 1222,
                        "end": 1223
                      },
                      "start": 1222,
                      "end": 1225
                    },
                    "start": 1220,
                    "end": 1225
                  },
                  "start": 1185,
                  "end": 1226
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
                          "start": 1232,
                          "end": 1233
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Base",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1242,
                            "end": 1246
                          },
                          "typeArguments": null,
                          "start": 1242,
                          "end": 1246
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1232,
                        "end": 1246
                      }
                    ],
                    "start": 1231,
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
                                    "start": 1255,
                                    "end": 1256
                                  },
                                  "typeArguments": null,
                                  "start": 1255,
                                  "end": 1256
                                },
                                "start": 1253,
                                "end": 1256
                              },
                              "start": 1252,
                              "end": 1256
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
                                "start": 1261,
                                "end": 1262
                              },
                              "typeArguments": null,
                              "start": 1261,
                              "end": 1262
                            },
                            "start": 1258,
                            "end": 1262
                          },
                          "start": 1251,
                          "end": 1262
                        },
                        "start": 1249,
                        "end": 1262
                      },
                      "start": 1248,
                      "end": 1262
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
                          "start": 1265,
                          "end": 1266
                        },
                        "typeArguments": null,
                        "start": 1265,
                        "end": 1266
                      },
                      "start": 1265,
                      "end": 1268
                    },
                    "start": 1263,
                    "end": 1268
                  },
                  "start": 1231,
                  "end": 1269
                }
              ],
              "start": 1179,
              "end": 1279
            },
            "start": 1177,
            "end": 1279
          },
          "start": 1174,
          "end": 1279
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1151,
      "end": 1281
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo17",
        "optional": false,
        "typeAnnotation": null,
        "start": 1299,
        "end": 1304
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
              "start": 1308,
              "end": 1311
            },
            "start": 1306,
            "end": 1311
          },
          "start": 1305,
          "end": 1311
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1314,
          "end": 1317
        },
        "start": 1312,
        "end": 1317
      },
      "body": null,
      "expression": false,
      "start": 1282,
      "end": 1318
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo18",
        "optional": false,
        "typeAnnotation": null,
        "start": 1337,
        "end": 1342
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
                                      "start": 1369,
                                      "end": 1370
                                    },
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Derived",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1379,
                                        "end": 1386
                                      },
                                      "typeArguments": null,
                                      "start": 1379,
                                      "end": 1386
                                    },
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 1369,
                                    "end": 1386
                                  }
                                ],
                                "start": 1368,
                                "end": 1387
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
                                        "start": 1391,
                                        "end": 1392
                                      },
                                      "typeArguments": null,
                                      "start": 1391,
                                      "end": 1392
                                    },
                                    "start": 1389,
                                    "end": 1392
                                  },
                                  "start": 1388,
                                  "end": 1392
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
                                    "start": 1395,
                                    "end": 1396
                                  },
                                  "typeArguments": null,
                                  "start": 1395,
                                  "end": 1396
                                },
                                "start": 1393,
                                "end": 1396
                              },
                              "start": 1368,
                              "end": 1397
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
                                      "start": 1407,
                                      "end": 1408
                                    },
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Base",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1417,
                                        "end": 1421
                                      },
                                      "typeArguments": null,
                                      "start": 1417,
                                      "end": 1421
                                    },
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 1407,
                                    "end": 1421
                                  }
                                ],
                                "start": 1406,
                                "end": 1422
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
                                        "start": 1426,
                                        "end": 1427
                                      },
                                      "typeArguments": null,
                                      "start": 1426,
                                      "end": 1427
                                    },
                                    "start": 1424,
                                    "end": 1427
                                  },
                                  "start": 1423,
                                  "end": 1427
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
                                    "start": 1430,
                                    "end": 1431
                                  },
                                  "typeArguments": null,
                                  "start": 1430,
                                  "end": 1431
                                },
                                "start": 1428,
                                "end": 1431
                              },
                              "start": 1406,
                              "end": 1432
                            }
                          ],
                          "start": 1358,
                          "end": 1438
                        },
                        "start": 1356,
                        "end": 1438
                      },
                      "start": 1355,
                      "end": 1438
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 1441,
                        "end": 1444
                      },
                      "start": 1441,
                      "end": 1446
                    },
                    "start": 1439,
                    "end": 1446
                  },
                  "start": 1354,
                  "end": 1447
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
                                      "start": 1467,
                                      "end": 1468
                                    },
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Derived2",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1477,
                                        "end": 1485
                                      },
                                      "typeArguments": null,
                                      "start": 1477,
                                      "end": 1485
                                    },
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 1467,
                                    "end": 1485
                                  }
                                ],
                                "start": 1466,
                                "end": 1486
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
                                        "start": 1490,
                                        "end": 1491
                                      },
                                      "typeArguments": null,
                                      "start": 1490,
                                      "end": 1491
                                    },
                                    "start": 1488,
                                    "end": 1491
                                  },
                                  "start": 1487,
                                  "end": 1491
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
                                    "start": 1494,
                                    "end": 1495
                                  },
                                  "typeArguments": null,
                                  "start": 1494,
                                  "end": 1495
                                },
                                "start": 1492,
                                "end": 1495
                              },
                              "start": 1466,
                              "end": 1496
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
                                      "start": 1506,
                                      "end": 1507
                                    },
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Base",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1516,
                                        "end": 1520
                                      },
                                      "typeArguments": null,
                                      "start": 1516,
                                      "end": 1520
                                    },
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 1506,
                                    "end": 1520
                                  }
                                ],
                                "start": 1505,
                                "end": 1521
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
                                        "start": 1525,
                                        "end": 1526
                                      },
                                      "typeArguments": null,
                                      "start": 1525,
                                      "end": 1526
                                    },
                                    "start": 1523,
                                    "end": 1526
                                  },
                                  "start": 1522,
                                  "end": 1526
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
                                    "start": 1529,
                                    "end": 1530
                                  },
                                  "typeArguments": null,
                                  "start": 1529,
                                  "end": 1530
                                },
                                "start": 1527,
                                "end": 1530
                              },
                              "start": 1505,
                              "end": 1531
                            }
                          ],
                          "start": 1456,
                          "end": 1537
                        },
                        "start": 1454,
                        "end": 1537
                      },
                      "start": 1453,
                      "end": 1537
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 1540,
                        "end": 1543
                      },
                      "start": 1540,
                      "end": 1545
                    },
                    "start": 1538,
                    "end": 1545
                  },
                  "start": 1452,
                  "end": 1546
                }
              ],
              "start": 1348,
              "end": 1548
            },
            "start": 1346,
            "end": 1548
          },
          "start": 1343,
          "end": 1548
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1320,
      "end": 1550
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo18",
        "optional": false,
        "typeAnnotation": null,
        "start": 1568,
        "end": 1573
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
              "start": 1577,
              "end": 1580
            },
            "start": 1575,
            "end": 1580
          },
          "start": 1574,
          "end": 1580
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1583,
          "end": 1586
        },
        "start": 1581,
        "end": 1586
      },
      "body": null,
      "expression": false,
      "start": 1551,
      "end": 1587
    },
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
            "typeAnnotation": null,
            "start": 1593,
            "end": 1598
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
                    "start": 1602,
                    "end": 1603
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1602,
                  "end": 1603
                }
              ],
              "start": 1601,
              "end": 1604
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
                      "start": 1608,
                      "end": 1609
                    },
                    "typeArguments": null,
                    "start": 1608,
                    "end": 1609
                  },
                  "start": 1606,
                  "end": 1609
                },
                "start": 1605,
                "end": 1609
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
                    "start": 1615,
                    "end": 1616
                  },
                  "typeArguments": null,
                  "start": 1615,
                  "end": 1616
                },
                "start": 1615,
                "end": 1618
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1619,
                "end": 1623
              },
              "start": 1614,
              "end": 1623
            },
            "id": null,
            "generator": false,
            "start": 1601,
            "end": 1623
          },
          "definite": false,
          "start": 1593,
          "end": 1623
        }
      ],
      "declare": false,
      "start": 1589,
      "end": 1624
    },
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
            "start": 1629,
            "end": 1635
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
                    "start": 1639,
                    "end": 1640
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1639,
                  "end": 1640
                }
              ],
              "start": 1638,
              "end": 1641
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
                      "start": 1645,
                      "end": 1646
                    },
                    "typeArguments": null,
                    "start": 1645,
                    "end": 1646
                  },
                  "start": 1643,
                  "end": 1646
                },
                "start": 1642,
                "end": 1646
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
                    "start": 1652,
                    "end": 1653
                  },
                  "typeArguments": null,
                  "start": 1652,
                  "end": 1653
                },
                "start": 1652,
                "end": 1655
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1656,
                "end": 1660
              },
              "start": 1651,
              "end": 1660
            },
            "id": null,
            "generator": false,
            "start": 1638,
            "end": 1660
          },
          "definite": false,
          "start": 1629,
          "end": 1660
        }
      ],
      "declare": false,
      "start": 1625,
      "end": 1661
    },
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
            "start": 1666,
            "end": 1668
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1671,
              "end": 1675
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r1arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 1676,
                "end": 1681
              }
            ],
            "optional": false,
            "start": 1671,
            "end": 1682
          },
          "definite": false,
          "start": 1666,
          "end": 1682
        }
      ],
      "declare": false,
      "start": 1662,
      "end": 1683
    },
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
            "start": 1688,
            "end": 1691
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
                "start": 1695,
                "end": 1700
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r1arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1702,
                "end": 1708
              }
            ],
            "start": 1694,
            "end": 1709
          },
          "definite": false,
          "start": 1688,
          "end": 1709
        }
      ],
      "declare": false,
      "start": 1684,
      "end": 1710
    },
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
            "start": 1715,
            "end": 1718
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
                "start": 1722,
                "end": 1728
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r1arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 1730,
                "end": 1735
              }
            ],
            "start": 1721,
            "end": 1736
          },
          "definite": false,
          "start": 1715,
          "end": 1736
        }
      ],
      "declare": false,
      "start": 1711,
      "end": 1737
    },
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
            "start": 1743,
            "end": 1748
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
                    "start": 1752,
                    "end": 1753
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1752,
                  "end": 1753
                }
              ],
              "start": 1751,
              "end": 1754
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
                      "start": 1758,
                      "end": 1759
                    },
                    "typeArguments": null,
                    "start": 1758,
                    "end": 1759
                  },
                  "start": 1756,
                  "end": 1759
                },
                "start": 1755,
                "end": 1759
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
                  "start": 1765,
                  "end": 1767
                }
              ],
              "start": 1764,
              "end": 1768
            },
            "id": null,
            "generator": false,
            "start": 1751,
            "end": 1768
          },
          "definite": false,
          "start": 1743,
          "end": 1768
        }
      ],
      "declare": false,
      "start": 1739,
      "end": 1769
    },
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
            "start": 1774,
            "end": 1780
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
                    "start": 1784,
                    "end": 1785
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1784,
                  "end": 1785
                }
              ],
              "start": 1783,
              "end": 1786
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
            "returnType": null,
            "body": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 1797,
                  "end": 1799
                }
              ],
              "start": 1796,
              "end": 1800
            },
            "id": null,
            "generator": false,
            "start": 1783,
            "end": 1800
          },
          "definite": false,
          "start": 1774,
          "end": 1800
        }
      ],
      "declare": false,
      "start": 1770,
      "end": 1801
    },
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
            "start": 1806,
            "end": 1808
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1811,
              "end": 1815
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r2arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 1816,
                "end": 1821
              }
            ],
            "optional": false,
            "start": 1811,
            "end": 1822
          },
          "definite": false,
          "start": 1806,
          "end": 1822
        }
      ],
      "declare": false,
      "start": 1802,
      "end": 1823
    },
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
            "start": 1828,
            "end": 1831
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
                "start": 1835,
                "end": 1840
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r2arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1842,
                "end": 1848
              }
            ],
            "start": 1834,
            "end": 1849
          },
          "definite": false,
          "start": 1828,
          "end": 1849
        }
      ],
      "declare": false,
      "start": 1824,
      "end": 1850
    },
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
            "start": 1855,
            "end": 1858
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
                "start": 1862,
                "end": 1868
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r2arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 1870,
                "end": 1875
              }
            ],
            "start": 1861,
            "end": 1876
          },
          "definite": false,
          "start": 1855,
          "end": 1876
        }
      ],
      "declare": false,
      "start": 1851,
      "end": 1877
    },
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
            "start": 1883,
            "end": 1888
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
                    "start": 1892,
                    "end": 1893
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1892,
                  "end": 1893
                }
              ],
              "start": 1891,
              "end": 1894
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
                      "start": 1898,
                      "end": 1899
                    },
                    "typeArguments": null,
                    "start": 1898,
                    "end": 1899
                  },
                  "start": 1896,
                  "end": 1899
                },
                "start": 1895,
                "end": 1899
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
                  "start": 1905,
                  "end": 1906
                },
                "typeArguments": null,
                "start": 1905,
                "end": 1906
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1907,
                "end": 1911
              },
              "start": 1904,
              "end": 1911
            },
            "id": null,
            "generator": false,
            "start": 1891,
            "end": 1911
          },
          "definite": false,
          "start": 1883,
          "end": 1911
        }
      ],
      "declare": false,
      "start": 1879,
      "end": 1912
    },
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
            "start": 1917,
            "end": 1923
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
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
                    "start": 1927,
                    "end": 1928
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1927,
                  "end": 1928
                }
              ],
              "start": 1926,
              "end": 1929
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
                      "start": 1933,
                      "end": 1934
                    },
                    "typeArguments": null,
                    "start": 1933,
                    "end": 1934
                  },
                  "start": 1931,
                  "end": 1934
                },
                "start": 1930,
                "end": 1934
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 1939,
              "end": 1942
            },
            "id": null,
            "generator": false,
            "start": 1926,
            "end": 1942
          },
          "definite": false,
          "start": 1917,
          "end": 1942
        }
      ],
      "declare": false,
      "start": 1913,
      "end": 1943
    },
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
            "start": 1948,
            "end": 1950
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1953,
              "end": 1957
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r3arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 1958,
                "end": 1963
              }
            ],
            "optional": false,
            "start": 1953,
            "end": 1964
          },
          "definite": false,
          "start": 1948,
          "end": 1964
        }
      ],
      "declare": false,
      "start": 1944,
      "end": 1965
    },
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
            "start": 1970,
            "end": 1973
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
                "start": 1977,
                "end": 1982
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r3arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1984,
                "end": 1990
              }
            ],
            "start": 1976,
            "end": 1991
          },
          "definite": false,
          "start": 1970,
          "end": 1991
        }
      ],
      "declare": false,
      "start": 1966,
      "end": 1992
    },
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
            "start": 1997,
            "end": 2000
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
                "start": 2004,
                "end": 2010
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r3arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2012,
                "end": 2017
              }
            ],
            "start": 2003,
            "end": 2018
          },
          "definite": false,
          "start": 1997,
          "end": 2018
        }
      ],
      "declare": false,
      "start": 1993,
      "end": 2019
    },
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
            "start": 2025,
            "end": 2030
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
                    "start": 2034,
                    "end": 2035
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2034,
                  "end": 2035
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2037,
                    "end": 2038
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2037,
                  "end": 2038
                }
              ],
              "start": 2033,
              "end": 2039
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
                      "start": 2043,
                      "end": 2044
                    },
                    "typeArguments": null,
                    "start": 2043,
                    "end": 2044
                  },
                  "start": 2041,
                  "end": 2044
                },
                "start": 2040,
                "end": 2044
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
                      "start": 2049,
                      "end": 2050
                    },
                    "typeArguments": null,
                    "start": 2049,
                    "end": 2050
                  },
                  "start": 2047,
                  "end": 2050
                },
                "start": 2046,
                "end": 2050
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 2055,
              "end": 2057
            },
            "id": null,
            "generator": false,
            "start": 2033,
            "end": 2057
          },
          "definite": false,
          "start": 2025,
          "end": 2057
        }
      ],
      "declare": false,
      "start": 2021,
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
            "name": "r4arg2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2063,
            "end": 2069
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
                    "start": 2073,
                    "end": 2074
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2073,
                  "end": 2074
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2076,
                    "end": 2077
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2076,
                  "end": 2077
                }
              ],
              "start": 2072,
              "end": 2078
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
                      "start": 2082,
                      "end": 2083
                    },
                    "typeArguments": null,
                    "start": 2082,
                    "end": 2083
                  },
                  "start": 2080,
                  "end": 2083
                },
                "start": 2079,
                "end": 2083
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
                      "start": 2088,
                      "end": 2089
                    },
                    "typeArguments": null,
                    "start": 2088,
                    "end": 2089
                  },
                  "start": 2086,
                  "end": 2089
                },
                "start": 2085,
                "end": 2089
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 2094,
              "end": 2096
            },
            "id": null,
            "generator": false,
            "start": 2072,
            "end": 2096
          },
          "definite": false,
          "start": 2063,
          "end": 2096
        }
      ],
      "declare": false,
      "start": 2059,
      "end": 2097
    },
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
            "start": 2102,
            "end": 2104
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2107,
              "end": 2111
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r4arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2112,
                "end": 2117
              }
            ],
            "optional": false,
            "start": 2107,
            "end": 2118
          },
          "definite": false,
          "start": 2102,
          "end": 2118
        }
      ],
      "declare": false,
      "start": 2098,
      "end": 2119
    },
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
            "start": 2124,
            "end": 2127
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
                "start": 2131,
                "end": 2136
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r4arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2138,
                "end": 2144
              }
            ],
            "start": 2130,
            "end": 2145
          },
          "definite": false,
          "start": 2124,
          "end": 2145
        }
      ],
      "declare": false,
      "start": 2120,
      "end": 2146
    },
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
            "start": 2151,
            "end": 2154
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
                "start": 2158,
                "end": 2164
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r4arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2166,
                "end": 2171
              }
            ],
            "start": 2157,
            "end": 2172
          },
          "definite": false,
          "start": 2151,
          "end": 2172
        }
      ],
      "declare": false,
      "start": 2147,
      "end": 2173
    },
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
            "start": 2179,
            "end": 2184
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
                    "start": 2188,
                    "end": 2189
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2188,
                  "end": 2189
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2191,
                    "end": 2192
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2191,
                  "end": 2192
                }
              ],
              "start": 2187,
              "end": 2193
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
                              "start": 2203,
                              "end": 2204
                            },
                            "typeArguments": null,
                            "start": 2203,
                            "end": 2204
                          },
                          "start": 2201,
                          "end": 2204
                        },
                        "start": 2198,
                        "end": 2204
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
                          "start": 2209,
                          "end": 2210
                        },
                        "typeArguments": null,
                        "start": 2209,
                        "end": 2210
                      },
                      "start": 2206,
                      "end": 2210
                    },
                    "start": 2197,
                    "end": 2210
                  },
                  "start": 2195,
                  "end": 2210
                },
                "start": 2194,
                "end": 2210
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
                  "start": 2216,
                  "end": 2217
                },
                "typeArguments": null,
                "start": 2216,
                "end": 2217
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2218,
                "end": 2222
              },
              "start": 2215,
              "end": 2222
            },
            "id": null,
            "generator": false,
            "start": 2187,
            "end": 2222
          },
          "definite": false,
          "start": 2179,
          "end": 2222
        }
      ],
      "declare": false,
      "start": 2175,
      "end": 2223
    },
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
            "start": 2228,
            "end": 2234
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
                    "start": 2238,
                    "end": 2239
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2238,
                  "end": 2239
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2241,
                    "end": 2242
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2241,
                  "end": 2242
                }
              ],
              "start": 2237,
              "end": 2243
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
                              "start": 2253,
                              "end": 2254
                            },
                            "typeArguments": null,
                            "start": 2253,
                            "end": 2254
                          },
                          "start": 2251,
                          "end": 2254
                        },
                        "start": 2248,
                        "end": 2254
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
                          "start": 2259,
                          "end": 2260
                        },
                        "typeArguments": null,
                        "start": 2259,
                        "end": 2260
                      },
                      "start": 2256,
                      "end": 2260
                    },
                    "start": 2247,
                    "end": 2260
                  },
                  "start": 2245,
                  "end": 2260
                },
                "start": 2244,
                "end": 2260
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
                  "start": 2266,
                  "end": 2267
                },
                "typeArguments": null,
                "start": 2266,
                "end": 2267
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2268,
                "end": 2272
              },
              "start": 2265,
              "end": 2272
            },
            "id": null,
            "generator": false,
            "start": 2237,
            "end": 2272
          },
          "definite": false,
          "start": 2228,
          "end": 2272
        }
      ],
      "declare": false,
      "start": 2224,
      "end": 2273
    },
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
            "start": 2278,
            "end": 2280
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2283,
              "end": 2287
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r5arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2288,
                "end": 2293
              }
            ],
            "optional": false,
            "start": 2283,
            "end": 2294
          },
          "definite": false,
          "start": 2278,
          "end": 2294
        }
      ],
      "declare": false,
      "start": 2274,
      "end": 2295
    },
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
            "start": 2300,
            "end": 2303
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
                "start": 2307,
                "end": 2312
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r5arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2314,
                "end": 2320
              }
            ],
            "start": 2306,
            "end": 2321
          },
          "definite": false,
          "start": 2300,
          "end": 2321
        }
      ],
      "declare": false,
      "start": 2296,
      "end": 2322
    },
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
            "start": 2327,
            "end": 2330
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
                "start": 2334,
                "end": 2340
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r5arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2342,
                "end": 2347
              }
            ],
            "start": 2333,
            "end": 2348
          },
          "definite": false,
          "start": 2327,
          "end": 2348
        }
      ],
      "declare": false,
      "start": 2323,
      "end": 2349
    },
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
            "start": 2355,
            "end": 2360
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
                    "start": 2364,
                    "end": 2365
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2374,
                      "end": 2378
                    },
                    "typeArguments": null,
                    "start": 2374,
                    "end": 2378
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2364,
                  "end": 2378
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2380,
                    "end": 2381
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2390,
                      "end": 2397
                    },
                    "typeArguments": null,
                    "start": 2390,
                    "end": 2397
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2380,
                  "end": 2397
                }
              ],
              "start": 2363,
              "end": 2398
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
                              "start": 2408,
                              "end": 2409
                            },
                            "typeArguments": null,
                            "start": 2408,
                            "end": 2409
                          },
                          "start": 2406,
                          "end": 2409
                        },
                        "start": 2403,
                        "end": 2409
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
                          "start": 2414,
                          "end": 2415
                        },
                        "typeArguments": null,
                        "start": 2414,
                        "end": 2415
                      },
                      "start": 2411,
                      "end": 2415
                    },
                    "start": 2402,
                    "end": 2415
                  },
                  "start": 2400,
                  "end": 2415
                },
                "start": 2399,
                "end": 2415
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
                  "start": 2421,
                  "end": 2422
                },
                "typeArguments": null,
                "start": 2421,
                "end": 2422
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2423,
                "end": 2427
              },
              "start": 2420,
              "end": 2427
            },
            "id": null,
            "generator": false,
            "start": 2363,
            "end": 2427
          },
          "definite": false,
          "start": 2355,
          "end": 2427
        }
      ],
      "declare": false,
      "start": 2351,
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
            "name": "r6arg2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2433,
            "end": 2439
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
                    "start": 2443,
                    "end": 2444
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2453,
                      "end": 2457
                    },
                    "typeArguments": null,
                    "start": 2453,
                    "end": 2457
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2443,
                  "end": 2457
                }
              ],
              "start": 2442,
              "end": 2458
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
                              "start": 2468,
                              "end": 2469
                            },
                            "typeArguments": null,
                            "start": 2468,
                            "end": 2469
                          },
                          "start": 2466,
                          "end": 2469
                        },
                        "start": 2463,
                        "end": 2469
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
                          "start": 2474,
                          "end": 2481
                        },
                        "typeArguments": null,
                        "start": 2474,
                        "end": 2481
                      },
                      "start": 2471,
                      "end": 2481
                    },
                    "start": 2462,
                    "end": 2481
                  },
                  "start": 2460,
                  "end": 2481
                },
                "start": 2459,
                "end": 2481
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
                  "start": 2487,
                  "end": 2488
                },
                "typeArguments": null,
                "start": 2487,
                "end": 2488
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2489,
                "end": 2493
              },
              "start": 2486,
              "end": 2493
            },
            "id": null,
            "generator": false,
            "start": 2442,
            "end": 2493
          },
          "definite": false,
          "start": 2433,
          "end": 2493
        }
      ],
      "declare": false,
      "start": 2429,
      "end": 2494
    },
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
            "start": 2499,
            "end": 2501
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo6",
              "optional": false,
              "typeAnnotation": null,
              "start": 2504,
              "end": 2508
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r6arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2509,
                "end": 2514
              }
            ],
            "optional": false,
            "start": 2504,
            "end": 2515
          },
          "definite": false,
          "start": 2499,
          "end": 2515
        }
      ],
      "declare": false,
      "start": 2495,
      "end": 2516
    },
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
            "start": 2521,
            "end": 2524
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
                "start": 2528,
                "end": 2533
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r6arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2535,
                "end": 2541
              }
            ],
            "start": 2527,
            "end": 2542
          },
          "definite": false,
          "start": 2521,
          "end": 2542
        }
      ],
      "declare": false,
      "start": 2517,
      "end": 2543
    },
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
            "start": 2548,
            "end": 2551
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
                "start": 2555,
                "end": 2561
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r6arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2563,
                "end": 2568
              }
            ],
            "start": 2554,
            "end": 2569
          },
          "definite": false,
          "start": 2548,
          "end": 2569
        }
      ],
      "declare": false,
      "start": 2544,
      "end": 2570
    },
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
            "typeAnnotation": null,
            "start": 2576,
            "end": 2582
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
                    "start": 2586,
                    "end": 2587
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2586,
                  "end": 2587
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2589,
                    "end": 2590
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2589,
                  "end": 2590
                }
              ],
              "start": 2585,
              "end": 2591
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
                          "start": 2597,
                          "end": 2600
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
                              "start": 2602,
                              "end": 2603
                            },
                            "typeArguments": null,
                            "start": 2602,
                            "end": 2603
                          },
                          "start": 2600,
                          "end": 2603
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2597,
                        "end": 2603
                      }
                    ],
                    "start": 2595,
                    "end": 2605
                  },
                  "start": 2593,
                  "end": 2605
                },
                "start": 2592,
                "end": 2605
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
                          "start": 2612,
                          "end": 2615
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
                              "start": 2617,
                              "end": 2618
                            },
                            "typeArguments": null,
                            "start": 2617,
                            "end": 2618
                          },
                          "start": 2615,
                          "end": 2618
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2612,
                        "end": 2619
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
                          "start": 2620,
                          "end": 2623
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
                              "start": 2625,
                              "end": 2626
                            },
                            "typeArguments": null,
                            "start": 2625,
                            "end": 2626
                          },
                          "start": 2623,
                          "end": 2626
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2620,
                        "end": 2626
                      }
                    ],
                    "start": 2610,
                    "end": 2628
                  },
                  "start": 2608,
                  "end": 2628
                },
                "start": 2607,
                "end": 2628
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
                  "start": 2634,
                  "end": 2638
                },
                "typeArguments": null,
                "start": 2634,
                "end": 2638
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2639,
                "end": 2643
              },
              "start": 2633,
              "end": 2643
            },
            "id": null,
            "generator": false,
            "start": 2585,
            "end": 2643
          },
          "definite": false,
          "start": 2576,
          "end": 2643
        }
      ],
      "declare": false,
      "start": 2572,
      "end": 2644
    },
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
            "start": 2649,
            "end": 2656
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
                    "start": 2660,
                    "end": 2661
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2660,
                  "end": 2661
                }
              ],
              "start": 2659,
              "end": 2662
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
                          "start": 2668,
                          "end": 2671
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
                              "start": 2673,
                              "end": 2674
                            },
                            "typeArguments": null,
                            "start": 2673,
                            "end": 2674
                          },
                          "start": 2671,
                          "end": 2674
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2668,
                        "end": 2674
                      }
                    ],
                    "start": 2666,
                    "end": 2676
                  },
                  "start": 2664,
                  "end": 2676
                },
                "start": 2663,
                "end": 2676
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
                          "start": 2683,
                          "end": 2686
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
                              "start": 2688,
                              "end": 2689
                            },
                            "typeArguments": null,
                            "start": 2688,
                            "end": 2689
                          },
                          "start": 2686,
                          "end": 2689
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2683,
                        "end": 2690
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
                          "start": 2691,
                          "end": 2694
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
                              "start": 2696,
                              "end": 2697
                            },
                            "typeArguments": null,
                            "start": 2696,
                            "end": 2697
                          },
                          "start": 2694,
                          "end": 2697
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2691,
                        "end": 2697
                      }
                    ],
                    "start": 2681,
                    "end": 2699
                  },
                  "start": 2679,
                  "end": 2699
                },
                "start": 2678,
                "end": 2699
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
                  "start": 2705,
                  "end": 2709
                },
                "typeArguments": null,
                "start": 2705,
                "end": 2709
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2710,
                "end": 2714
              },
              "start": 2704,
              "end": 2714
            },
            "id": null,
            "generator": false,
            "start": 2659,
            "end": 2714
          },
          "definite": false,
          "start": 2649,
          "end": 2714
        }
      ],
      "declare": false,
      "start": 2645,
      "end": 2715
    },
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
            "start": 2720,
            "end": 2723
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo11",
              "optional": false,
              "typeAnnotation": null,
              "start": 2726,
              "end": 2731
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r11arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2732,
                "end": 2738
              }
            ],
            "optional": false,
            "start": 2726,
            "end": 2739
          },
          "definite": false,
          "start": 2720,
          "end": 2739
        }
      ],
      "declare": false,
      "start": 2716,
      "end": 2740
    },
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
            "start": 2745,
            "end": 2749
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
                "start": 2753,
                "end": 2759
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r11arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2761,
                "end": 2768
              }
            ],
            "start": 2752,
            "end": 2769
          },
          "definite": false,
          "start": 2745,
          "end": 2769
        }
      ],
      "declare": false,
      "start": 2741,
      "end": 2770
    },
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
            "start": 2775,
            "end": 2779
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
                "start": 2783,
                "end": 2790
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r11arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2792,
                "end": 2798
              }
            ],
            "start": 2782,
            "end": 2799
          },
          "definite": false,
          "start": 2775,
          "end": 2799
        }
      ],
      "declare": false,
      "start": 2771,
      "end": 2800
    },
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
            "typeAnnotation": null,
            "start": 2806,
            "end": 2812
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2816,
                    "end": 2817
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2816,
                  "end": 2817
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2819,
                    "end": 2820
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2819,
                  "end": 2820
                }
              ],
              "start": 2815,
              "end": 2821
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
                          "start": 2827,
                          "end": 2828
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
                              "start": 2830,
                              "end": 2831
                            },
                            "typeArguments": null,
                            "start": 2830,
                            "end": 2831
                          },
                          "start": 2828,
                          "end": 2831
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2827,
                        "end": 2832
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
                          "start": 2833,
                          "end": 2834
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
                              "start": 2836,
                              "end": 2837
                            },
                            "typeArguments": null,
                            "start": 2836,
                            "end": 2837
                          },
                          "start": 2834,
                          "end": 2837
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2833,
                        "end": 2838
                      }
                    ],
                    "start": 2825,
                    "end": 2840
                  },
                  "start": 2823,
                  "end": 2840
                },
                "start": 2822,
                "end": 2840
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
                    "start": 2846,
                    "end": 2847
                  },
                  "typeArguments": null,
                  "start": 2846,
                  "end": 2847
                },
                "start": 2846,
                "end": 2849
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2850,
                "end": 2854
              },
              "start": 2845,
              "end": 2854
            },
            "id": null,
            "generator": false,
            "start": 2815,
            "end": 2854
          },
          "definite": false,
          "start": 2806,
          "end": 2854
        }
      ],
      "declare": false,
      "start": 2802,
      "end": 2855
    },
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
            "typeAnnotation": null,
            "start": 2860,
            "end": 2867
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
                    "start": 2871,
                    "end": 2872
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2871,
                  "end": 2872
                }
              ],
              "start": 2870,
              "end": 2873
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
                          "start": 2879,
                          "end": 2880
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
                              "start": 2882,
                              "end": 2883
                            },
                            "typeArguments": null,
                            "start": 2882,
                            "end": 2883
                          },
                          "start": 2880,
                          "end": 2883
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2879,
                        "end": 2884
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
                          "start": 2885,
                          "end": 2886
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
                              "start": 2888,
                              "end": 2889
                            },
                            "typeArguments": null,
                            "start": 2888,
                            "end": 2889
                          },
                          "start": 2886,
                          "end": 2889
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2885,
                        "end": 2889
                      }
                    ],
                    "start": 2877,
                    "end": 2891
                  },
                  "start": 2875,
                  "end": 2891
                },
                "start": 2874,
                "end": 2891
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
                    "start": 2897,
                    "end": 2898
                  },
                  "typeArguments": null,
                  "start": 2897,
                  "end": 2898
                },
                "start": 2897,
                "end": 2900
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2901,
                "end": 2905
              },
              "start": 2896,
              "end": 2905
            },
            "id": null,
            "generator": false,
            "start": 2870,
            "end": 2905
          },
          "definite": false,
          "start": 2860,
          "end": 2905
        }
      ],
      "declare": false,
      "start": 2856,
      "end": 2906
    },
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
            "start": 2911,
            "end": 2914
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo15",
              "optional": false,
              "typeAnnotation": null,
              "start": 2917,
              "end": 2922
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r15arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2923,
                "end": 2929
              }
            ],
            "optional": false,
            "start": 2917,
            "end": 2930
          },
          "definite": false,
          "start": 2911,
          "end": 2930
        }
      ],
      "declare": false,
      "start": 2907,
      "end": 2931
    },
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
            "start": 2936,
            "end": 2940
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
                "start": 2944,
                "end": 2950
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r15arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2952,
                "end": 2959
              }
            ],
            "start": 2943,
            "end": 2960
          },
          "definite": false,
          "start": 2936,
          "end": 2960
        }
      ],
      "declare": false,
      "start": 2932,
      "end": 2961
    },
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
            "start": 2966,
            "end": 2970
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
                "start": 2974,
                "end": 2981
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r15arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2983,
                "end": 2989
              }
            ],
            "start": 2973,
            "end": 2990
          },
          "definite": false,
          "start": 2966,
          "end": 2990
        }
      ],
      "declare": false,
      "start": 2962,
      "end": 2991
    },
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
            "typeAnnotation": null,
            "start": 2997,
            "end": 3003
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
                    "start": 3007,
                    "end": 3008
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3017,
                      "end": 3021
                    },
                    "typeArguments": null,
                    "start": 3017,
                    "end": 3021
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3007,
                  "end": 3021
                }
              ],
              "start": 3006,
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
                              "name": "T",
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
                    "start": 3046,
                    "end": 3047
                  },
                  "typeArguments": null,
                  "start": 3046,
                  "end": 3047
                },
                "start": 3046,
                "end": 3049
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 3050,
                "end": 3054
              },
              "start": 3045,
              "end": 3054
            },
            "id": null,
            "generator": false,
            "start": 3006,
            "end": 3054
          },
          "definite": false,
          "start": 2997,
          "end": 3054
        }
      ],
      "declare": false,
      "start": 2993,
      "end": 3055
    },
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
            "typeAnnotation": null,
            "start": 3060,
            "end": 3067
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
                    "start": 3071,
                    "end": 3072
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3081,
                      "end": 3085
                    },
                    "typeArguments": null,
                    "start": 3081,
                    "end": 3085
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3071,
                  "end": 3085
                }
              ],
              "start": 3070,
              "end": 3086
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
                          "start": 3092,
                          "end": 3093
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
                              "start": 3095,
                              "end": 3096
                            },
                            "typeArguments": null,
                            "start": 3095,
                            "end": 3096
                          },
                          "start": 3093,
                          "end": 3096
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3092,
                        "end": 3097
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
                          "start": 3098,
                          "end": 3099
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
                              "start": 3101,
                              "end": 3102
                            },
                            "typeArguments": null,
                            "start": 3101,
                            "end": 3102
                          },
                          "start": 3099,
                          "end": 3102
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3098,
                        "end": 3102
                      }
                    ],
                    "start": 3090,
                    "end": 3104
                  },
                  "start": 3088,
                  "end": 3104
                },
                "start": 3087,
                "end": 3104
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
                    "start": 3110,
                    "end": 3111
                  },
                  "typeArguments": null,
                  "start": 3110,
                  "end": 3111
                },
                "start": 3110,
                "end": 3113
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 3114,
                "end": 3118
              },
              "start": 3109,
              "end": 3118
            },
            "id": null,
            "generator": false,
            "start": 3070,
            "end": 3118
          },
          "definite": false,
          "start": 3060,
          "end": 3118
        }
      ],
      "declare": false,
      "start": 3056,
      "end": 3119
    },
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
            "start": 3124,
            "end": 3127
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo16",
              "optional": false,
              "typeAnnotation": null,
              "start": 3130,
              "end": 3135
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r16arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 3136,
                "end": 3142
              }
            ],
            "optional": false,
            "start": 3130,
            "end": 3143
          },
          "definite": false,
          "start": 3124,
          "end": 3143
        }
      ],
      "declare": false,
      "start": 3120,
      "end": 3144
    },
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
            "start": 3149,
            "end": 3153
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
                "start": 3157,
                "end": 3163
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r16arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3165,
                "end": 3172
              }
            ],
            "start": 3156,
            "end": 3173
          },
          "definite": false,
          "start": 3149,
          "end": 3173
        }
      ],
      "declare": false,
      "start": 3145,
      "end": 3174
    },
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
            "start": 3179,
            "end": 3183
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
                "start": 3187,
                "end": 3194
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r16arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 3196,
                "end": 3202
              }
            ],
            "start": 3186,
            "end": 3203
          },
          "definite": false,
          "start": 3179,
          "end": 3203
        }
      ],
      "declare": false,
      "start": 3175,
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
            "name": "r17arg",
            "optional": false,
            "typeAnnotation": null,
            "start": 3210,
            "end": 3216
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
                    "start": 3220,
                    "end": 3221
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3220,
                  "end": 3221
                }
              ],
              "start": 3219,
              "end": 3222
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
                              "start": 3230,
                              "end": 3231
                            },
                            "typeArguments": null,
                            "start": 3230,
                            "end": 3231
                          },
                          "start": 3228,
                          "end": 3231
                        },
                        "start": 3227,
                        "end": 3231
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
                          "start": 3236,
                          "end": 3237
                        },
                        "typeArguments": null,
                        "start": 3236,
                        "end": 3237
                      },
                      "start": 3233,
                      "end": 3237
                    },
                    "start": 3226,
                    "end": 3237
                  },
                  "start": 3224,
                  "end": 3237
                },
                "start": 3223,
                "end": 3237
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
                    "start": 3243,
                    "end": 3244
                  },
                  "typeArguments": null,
                  "start": 3243,
                  "end": 3244
                },
                "start": 3243,
                "end": 3246
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 3247,
                "end": 3251
              },
              "start": 3242,
              "end": 3251
            },
            "id": null,
            "generator": false,
            "start": 3219,
            "end": 3251
          },
          "definite": false,
          "start": 3210,
          "end": 3251
        }
      ],
      "declare": false,
      "start": 3206,
      "end": 3252
    },
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
            "start": 3257,
            "end": 3260
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo17",
              "optional": false,
              "typeAnnotation": null,
              "start": 3263,
              "end": 3268
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r17arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 3269,
                "end": 3275
              }
            ],
            "optional": false,
            "start": 3263,
            "end": 3276
          },
          "definite": false,
          "start": 3257,
          "end": 3276
        }
      ],
      "declare": false,
      "start": 3253,
      "end": 3277
    },
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
            "typeAnnotation": null,
            "start": 3283,
            "end": 3289
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
                            "start": 3297,
                            "end": 3298
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 3297,
                          "end": 3298
                        }
                      ],
                      "start": 3296,
                      "end": 3299
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
                              "start": 3303,
                              "end": 3304
                            },
                            "typeArguments": null,
                            "start": 3303,
                            "end": 3304
                          },
                          "start": 3301,
                          "end": 3304
                        },
                        "start": 3300,
                        "end": 3304
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
                          "start": 3309,
                          "end": 3310
                        },
                        "typeArguments": null,
                        "start": 3309,
                        "end": 3310
                      },
                      "start": 3306,
                      "end": 3310
                    },
                    "start": 3296,
                    "end": 3310
                  },
                  "start": 3294,
                  "end": 3310
                },
                "start": 3293,
                "end": 3310
              }
            ],
            "returnType": null,
            "body": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 3316,
                  "end": 3319
                },
                "start": 3316,
                "end": 3321
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 3322,
                "end": 3326
              },
              "start": 3315,
              "end": 3326
            },
            "id": null,
            "generator": false,
            "start": 3292,
            "end": 3326
          },
          "definite": false,
          "start": 3283,
          "end": 3326
        }
      ],
      "declare": false,
      "start": 3279,
      "end": 3327
    },
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
            "start": 3332,
            "end": 3335
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo18",
              "optional": false,
              "typeAnnotation": null,
              "start": 3338,
              "end": 3343
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r18arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 3344,
                "end": 3350
              }
            ],
            "optional": false,
            "start": 3338,
            "end": 3351
          },
          "definite": false,
          "start": 3332,
          "end": 3351
        }
      ],
      "declare": false,
      "start": 3328,
      "end": 3352
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 102,
  "end": 3352
}
```
