__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base1",
        "optional": false,
        "typeAnnotation": null,
        "start": 159,
        "end": 164
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 171,
              "end": 172
            },
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
                      "start": 184,
                      "end": 185
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 187,
                        "end": 193
                      },
                      "start": 185,
                      "end": 193
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 184,
                    "end": 194
                  }
                ],
                "start": 174,
                "end": 200
              },
              "start": 172,
              "end": 200
            },
            "accessibility": null,
            "static": false,
            "start": 171,
            "end": 200
          }
        ],
        "start": 165,
        "end": 202
      },
      "declare": false,
      "start": 149,
      "end": 202
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null,
        "start": 214,
        "end": 219
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 226,
              "end": 227
            },
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
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 239,
                      "end": 240
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 242,
                        "end": 248
                      },
                      "start": 240,
                      "end": 248
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 239,
                    "end": 249
                  }
                ],
                "start": 229,
                "end": 255
              },
              "start": 227,
              "end": 255
            },
            "accessibility": null,
            "static": false,
            "start": 226,
            "end": 255
          }
        ],
        "start": 220,
        "end": 257
      },
      "declare": false,
      "start": 204,
      "end": 257
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 269,
        "end": 276
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base1",
            "optional": false,
            "typeAnnotation": null,
            "start": 285,
            "end": 290
          },
          "typeArguments": null,
          "start": 285,
          "end": 290
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base2",
            "optional": false,
            "typeAnnotation": null,
            "start": 292,
            "end": 297
          },
          "typeArguments": null,
          "start": 292,
          "end": 297
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 304,
              "end": 305
            },
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
                      "start": 317,
                      "end": 318
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 320,
                        "end": 326
                      },
                      "start": 318,
                      "end": 326
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 317,
                    "end": 327
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
                      "start": 328,
                      "end": 329
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 331,
                        "end": 337
                      },
                      "start": 329,
                      "end": 337
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 328,
                    "end": 338
                  }
                ],
                "start": 307,
                "end": 344
              },
              "start": 305,
              "end": 344
            },
            "accessibility": null,
            "static": false,
            "start": 304,
            "end": 344
          }
        ],
        "start": 298,
        "end": 346
      },
      "declare": false,
      "start": 259,
      "end": 346
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 358,
        "end": 366
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base1",
            "optional": false,
            "typeAnnotation": null,
            "start": 375,
            "end": 380
          },
          "typeArguments": null,
          "start": 375,
          "end": 380
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base2",
            "optional": false,
            "typeAnnotation": null,
            "start": 382,
            "end": 387
          },
          "typeArguments": null,
          "start": 382,
          "end": 387
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 403,
              "end": 404
            },
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
                      "start": 416,
                      "end": 417
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 419,
                        "end": 425
                      },
                      "start": 417,
                      "end": 425
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 416,
                    "end": 426
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
                      "start": 427,
                      "end": 428
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 430,
                        "end": 436
                      },
                      "start": 428,
                      "end": 436
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 427,
                    "end": 437
                  }
                ],
                "start": 406,
                "end": 443
              },
              "start": 404,
              "end": 443
            },
            "accessibility": null,
            "static": false,
            "start": 403,
            "end": 443
          }
        ],
        "start": 388,
        "end": 445
      },
      "declare": false,
      "start": 348,
      "end": 445
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Generic",
        "optional": false,
        "typeAnnotation": null,
        "start": 454,
        "end": 461
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base1",
              "optional": false,
              "typeAnnotation": null,
              "start": 478,
              "end": 483
            },
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
                    "start": 484,
                    "end": 485
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 484,
                  "end": 485
                }
              ],
              "start": 483,
              "end": 486
            },
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 497,
                    "end": 498
                  },
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
                            "start": 514,
                            "end": 515
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
                                "start": 517,
                                "end": 518
                              },
                              "typeArguments": null,
                              "start": 517,
                              "end": 518
                            },
                            "start": 515,
                            "end": 518
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 514,
                          "end": 519
                        }
                      ],
                      "start": 500,
                      "end": 529
                    },
                    "start": 498,
                    "end": 529
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 497,
                  "end": 529
                }
              ],
              "start": 487,
              "end": 535
            },
            "declare": false,
            "start": 468,
            "end": 535
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 551,
              "end": 556
            },
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
                    "start": 557,
                    "end": 558
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 557,
                  "end": 558
                }
              ],
              "start": 556,
              "end": 559
            },
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 570,
                    "end": 571
                  },
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
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 587,
                            "end": 588
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
                                "start": 590,
                                "end": 591
                              },
                              "typeArguments": null,
                              "start": 590,
                              "end": 591
                            },
                            "start": 588,
                            "end": 591
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 587,
                          "end": 592
                        }
                      ],
                      "start": 573,
                      "end": 602
                    },
                    "start": 571,
                    "end": 602
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 570,
                  "end": 602
                }
              ],
              "start": 560,
              "end": 608
            },
            "declare": false,
            "start": 541,
            "end": 608
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 624,
              "end": 631
            },
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
                    "start": 632,
                    "end": 633
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 632,
                  "end": 633
                }
              ],
              "start": 631,
              "end": 634
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 643,
                  "end": 648
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 649,
                      "end": 655
                    }
                  ],
                  "start": 648,
                  "end": 656
                },
                "start": 643,
                "end": 656
              },
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 658,
                  "end": 663
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 664,
                      "end": 670
                    }
                  ],
                  "start": 663,
                  "end": 671
                },
                "start": 658,
                "end": 671
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 682,
                    "end": 683
                  },
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
                            "start": 699,
                            "end": 700
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 702,
                              "end": 708
                            },
                            "start": 700,
                            "end": 708
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 699,
                          "end": 709
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
                            "start": 710,
                            "end": 711
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 713,
                              "end": 719
                            },
                            "start": 711,
                            "end": 719
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 710,
                          "end": 720
                        }
                      ],
                      "start": 685,
                      "end": 730
                    },
                    "start": 683,
                    "end": 730
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 682,
                  "end": 730
                }
              ],
              "start": 672,
              "end": 736
            },
            "declare": false,
            "start": 614,
            "end": 736
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived2",
              "optional": false,
              "typeAnnotation": null,
              "start": 752,
              "end": 760
            },
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
                    "start": 761,
                    "end": 762
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 761,
                  "end": 762
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 764,
                    "end": 765
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 764,
                  "end": 765
                }
              ],
              "start": 760,
              "end": 766
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 775,
                  "end": 780
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 781,
                        "end": 782
                      },
                      "typeArguments": null,
                      "start": 781,
                      "end": 782
                    }
                  ],
                  "start": 780,
                  "end": 783
                },
                "start": 775,
                "end": 783
              },
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 785,
                  "end": 790
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 791,
                        "end": 792
                      },
                      "typeArguments": null,
                      "start": 791,
                      "end": 792
                    }
                  ],
                  "start": 790,
                  "end": 793
                },
                "start": 785,
                "end": 793
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 804,
                    "end": 805
                  },
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
                            "start": 821,
                            "end": 822
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
                                "start": 824,
                                "end": 825
                              },
                              "typeArguments": null,
                              "start": 824,
                              "end": 825
                            },
                            "start": 822,
                            "end": 825
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 821,
                          "end": 826
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
                            "start": 827,
                            "end": 828
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
                                "start": 830,
                                "end": 831
                              },
                              "typeArguments": null,
                              "start": 830,
                              "end": 831
                            },
                            "start": 828,
                            "end": 831
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 827,
                          "end": 832
                        }
                      ],
                      "start": 807,
                      "end": 842
                    },
                    "start": 805,
                    "end": 842
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 804,
                  "end": 842
                }
              ],
              "start": 794,
              "end": 848
            },
            "declare": false,
            "start": 742,
            "end": 848
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived3",
              "optional": false,
              "typeAnnotation": null,
              "start": 864,
              "end": 872
            },
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
                    "start": 873,
                    "end": 874
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 873,
                  "end": 874
                }
              ],
              "start": 872,
              "end": 875
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 884,
                  "end": 889
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 890,
                      "end": 896
                    }
                  ],
                  "start": 889,
                  "end": 897
                },
                "start": 884,
                "end": 897
              },
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 899,
                  "end": 904
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 905,
                      "end": 911
                    }
                  ],
                  "start": 904,
                  "end": 912
                },
                "start": 899,
                "end": 912
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 913,
              "end": 916
            },
            "declare": false,
            "start": 854,
            "end": 916
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived4",
              "optional": false,
              "typeAnnotation": null,
              "start": 941,
              "end": 949
            },
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
                    "start": 950,
                    "end": 951
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 950,
                  "end": 951
                }
              ],
              "start": 949,
              "end": 952
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 961,
                  "end": 966
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 967,
                      "end": 973
                    }
                  ],
                  "start": 966,
                  "end": 974
                },
                "start": 961,
                "end": 974
              },
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 976,
                  "end": 981
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 982,
                      "end": 988
                    }
                  ],
                  "start": 981,
                  "end": 989
                },
                "start": 976,
                "end": 989
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1009,
                    "end": 1010
                  },
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
                            "start": 1026,
                            "end": 1027
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
                                "start": 1029,
                                "end": 1030
                              },
                              "typeArguments": null,
                              "start": 1029,
                              "end": 1030
                            },
                            "start": 1027,
                            "end": 1030
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1026,
                          "end": 1031
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
                            "start": 1032,
                            "end": 1033
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
                                "start": 1035,
                                "end": 1036
                              },
                              "typeArguments": null,
                              "start": 1035,
                              "end": 1036
                            },
                            "start": 1033,
                            "end": 1036
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1032,
                          "end": 1037
                        }
                      ],
                      "start": 1012,
                      "end": 1047
                    },
                    "start": 1010,
                    "end": 1047
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1009,
                  "end": 1047
                }
              ],
              "start": 990,
              "end": 1053
            },
            "declare": false,
            "start": 931,
            "end": 1053
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1069,
              "end": 1077
            },
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
                    "start": 1078,
                    "end": 1079
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1078,
                  "end": 1079
                }
              ],
              "start": 1077,
              "end": 1080
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1089,
                  "end": 1094
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1095,
                        "end": 1096
                      },
                      "typeArguments": null,
                      "start": 1095,
                      "end": 1096
                    }
                  ],
                  "start": 1094,
                  "end": 1097
                },
                "start": 1089,
                "end": 1097
              },
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1099,
                  "end": 1104
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1105,
                        "end": 1106
                      },
                      "typeArguments": null,
                      "start": 1105,
                      "end": 1106
                    }
                  ],
                  "start": 1104,
                  "end": 1107
                },
                "start": 1099,
                "end": 1107
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1127,
                    "end": 1128
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
                        "start": 1130,
                        "end": 1131
                      },
                      "typeArguments": null,
                      "start": 1130,
                      "end": 1131
                    },
                    "start": 1128,
                    "end": 1131
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1127,
                  "end": 1132
                }
              ],
              "start": 1108,
              "end": 1138
            },
            "declare": false,
            "start": 1059,
            "end": 1138
          }
        ],
        "start": 462,
        "end": 1140
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 447,
      "end": 1140
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 149,
  "end": 1140
}
```
