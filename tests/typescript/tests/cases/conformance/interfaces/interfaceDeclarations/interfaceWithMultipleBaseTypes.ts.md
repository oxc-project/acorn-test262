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
        "start": 457,
        "end": 464
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
              "start": 481,
              "end": 486
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
                    "start": 487,
                    "end": 488
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 487,
                  "end": 488
                }
              ],
              "start": 486,
              "end": 489
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
                    "start": 500,
                    "end": 501
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
                            "start": 517,
                            "end": 518
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
                                "start": 520,
                                "end": 521
                              },
                              "typeArguments": null,
                              "start": 520,
                              "end": 521
                            },
                            "start": 518,
                            "end": 521
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 517,
                          "end": 522
                        }
                      ],
                      "start": 503,
                      "end": 532
                    },
                    "start": 501,
                    "end": 532
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 500,
                  "end": 532
                }
              ],
              "start": 490,
              "end": 538
            },
            "declare": false,
            "start": 471,
            "end": 538
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 554,
              "end": 559
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
                    "start": 560,
                    "end": 561
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 560,
                  "end": 561
                }
              ],
              "start": 559,
              "end": 562
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
                    "start": 573,
                    "end": 574
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
                            "start": 590,
                            "end": 591
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
                                "start": 593,
                                "end": 594
                              },
                              "typeArguments": null,
                              "start": 593,
                              "end": 594
                            },
                            "start": 591,
                            "end": 594
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 590,
                          "end": 595
                        }
                      ],
                      "start": 576,
                      "end": 605
                    },
                    "start": 574,
                    "end": 605
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 573,
                  "end": 605
                }
              ],
              "start": 563,
              "end": 611
            },
            "declare": false,
            "start": 544,
            "end": 611
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 627,
              "end": 634
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
                    "start": 635,
                    "end": 636
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 635,
                  "end": 636
                }
              ],
              "start": 634,
              "end": 637
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
                  "start": 646,
                  "end": 651
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 652,
                      "end": 658
                    }
                  ],
                  "start": 651,
                  "end": 659
                },
                "start": 646,
                "end": 659
              },
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 661,
                  "end": 666
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 667,
                      "end": 673
                    }
                  ],
                  "start": 666,
                  "end": 674
                },
                "start": 661,
                "end": 674
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
                    "start": 685,
                    "end": 686
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
                            "start": 702,
                            "end": 703
                          },
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
                          "accessibility": null,
                          "static": false,
                          "start": 702,
                          "end": 712
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
                            "start": 713,
                            "end": 714
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 716,
                              "end": 722
                            },
                            "start": 714,
                            "end": 722
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 713,
                          "end": 723
                        }
                      ],
                      "start": 688,
                      "end": 733
                    },
                    "start": 686,
                    "end": 733
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 685,
                  "end": 733
                }
              ],
              "start": 675,
              "end": 739
            },
            "declare": false,
            "start": 617,
            "end": 739
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived2",
              "optional": false,
              "typeAnnotation": null,
              "start": 755,
              "end": 763
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
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 767,
                    "end": 768
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 767,
                  "end": 768
                }
              ],
              "start": 763,
              "end": 769
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
                  "start": 778,
                  "end": 783
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
                        "start": 784,
                        "end": 785
                      },
                      "typeArguments": null,
                      "start": 784,
                      "end": 785
                    }
                  ],
                  "start": 783,
                  "end": 786
                },
                "start": 778,
                "end": 786
              },
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 788,
                  "end": 793
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
                        "start": 794,
                        "end": 795
                      },
                      "typeArguments": null,
                      "start": 794,
                      "end": 795
                    }
                  ],
                  "start": 793,
                  "end": 796
                },
                "start": 788,
                "end": 796
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
                    "start": 807,
                    "end": 808
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
                            "start": 824,
                            "end": 825
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
                                "start": 827,
                                "end": 828
                              },
                              "typeArguments": null,
                              "start": 827,
                              "end": 828
                            },
                            "start": 825,
                            "end": 828
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 824,
                          "end": 829
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
                            "start": 830,
                            "end": 831
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
                                "start": 833,
                                "end": 834
                              },
                              "typeArguments": null,
                              "start": 833,
                              "end": 834
                            },
                            "start": 831,
                            "end": 834
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 830,
                          "end": 835
                        }
                      ],
                      "start": 810,
                      "end": 845
                    },
                    "start": 808,
                    "end": 845
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 807,
                  "end": 845
                }
              ],
              "start": 797,
              "end": 851
            },
            "declare": false,
            "start": 745,
            "end": 851
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived3",
              "optional": false,
              "typeAnnotation": null,
              "start": 867,
              "end": 875
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
                    "start": 876,
                    "end": 877
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 876,
                  "end": 877
                }
              ],
              "start": 875,
              "end": 878
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
                  "start": 887,
                  "end": 892
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 893,
                      "end": 899
                    }
                  ],
                  "start": 892,
                  "end": 900
                },
                "start": 887,
                "end": 900
              },
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 902,
                  "end": 907
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 908,
                      "end": 914
                    }
                  ],
                  "start": 907,
                  "end": 915
                },
                "start": 902,
                "end": 915
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 916,
              "end": 919
            },
            "declare": false,
            "start": 857,
            "end": 919
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived4",
              "optional": false,
              "typeAnnotation": null,
              "start": 944,
              "end": 952
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
                    "start": 953,
                    "end": 954
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 953,
                  "end": 954
                }
              ],
              "start": 952,
              "end": 955
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
                  "start": 964,
                  "end": 969
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 970,
                      "end": 976
                    }
                  ],
                  "start": 969,
                  "end": 977
                },
                "start": 964,
                "end": 977
              },
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 979,
                  "end": 984
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 985,
                      "end": 991
                    }
                  ],
                  "start": 984,
                  "end": 992
                },
                "start": 979,
                "end": 992
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
                    "start": 1012,
                    "end": 1013
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
                            "start": 1029,
                            "end": 1030
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
                                "start": 1032,
                                "end": 1033
                              },
                              "typeArguments": null,
                              "start": 1032,
                              "end": 1033
                            },
                            "start": 1030,
                            "end": 1033
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1029,
                          "end": 1034
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
                            "start": 1035,
                            "end": 1036
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
                                "start": 1038,
                                "end": 1039
                              },
                              "typeArguments": null,
                              "start": 1038,
                              "end": 1039
                            },
                            "start": 1036,
                            "end": 1039
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1035,
                          "end": 1040
                        }
                      ],
                      "start": 1015,
                      "end": 1050
                    },
                    "start": 1013,
                    "end": 1050
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1012,
                  "end": 1050
                }
              ],
              "start": 993,
              "end": 1056
            },
            "declare": false,
            "start": 934,
            "end": 1056
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1072,
              "end": 1080
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
                    "start": 1081,
                    "end": 1082
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1081,
                  "end": 1082
                }
              ],
              "start": 1080,
              "end": 1083
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
                  "start": 1092,
                  "end": 1097
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
                        "start": 1098,
                        "end": 1099
                      },
                      "typeArguments": null,
                      "start": 1098,
                      "end": 1099
                    }
                  ],
                  "start": 1097,
                  "end": 1100
                },
                "start": 1092,
                "end": 1100
              },
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1102,
                  "end": 1107
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
                        "start": 1108,
                        "end": 1109
                      },
                      "typeArguments": null,
                      "start": 1108,
                      "end": 1109
                    }
                  ],
                  "start": 1107,
                  "end": 1110
                },
                "start": 1102,
                "end": 1110
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
                    "start": 1130,
                    "end": 1131
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
                        "start": 1133,
                        "end": 1134
                      },
                      "typeArguments": null,
                      "start": 1133,
                      "end": 1134
                    },
                    "start": 1131,
                    "end": 1134
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1130,
                  "end": 1135
                }
              ],
              "start": 1111,
              "end": 1141
            },
            "declare": false,
            "start": 1062,
            "end": 1141
          }
        ],
        "start": 465,
        "end": 1143
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 447,
      "end": 1143
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 149,
  "end": 1143
}
```
