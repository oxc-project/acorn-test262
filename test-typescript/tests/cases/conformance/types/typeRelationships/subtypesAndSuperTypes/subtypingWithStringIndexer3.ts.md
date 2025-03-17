__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 62,
  "end": 860,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 62,
      "end": 93,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 76,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 77,
        "end": 93,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 79,
            "end": 91,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 82,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 90,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 84,
                "end": 90
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 94,
      "end": 141,
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 111,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 120,
          "end": 124,
          "expression": {
            "type": "Identifier",
            "start": 120,
            "end": 124,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 125,
        "end": 141,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 127,
            "end": 139,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 127,
              "end": 130,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 130,
              "end": 138,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 132,
                "end": 138
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 142,
      "end": 193,
      "id": {
        "type": "Identifier",
        "start": 152,
        "end": 160,
        "name": "Derived2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 169,
          "end": 176,
          "expression": {
            "type": "Identifier",
            "start": 169,
            "end": 176,
            "name": "Derived",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 177,
        "end": 193,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 179,
            "end": 191,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 179,
              "end": 182,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 182,
              "end": 190,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 184,
                "end": 190
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 195,
      "end": 232,
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 202,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 203,
        "end": 232,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 209,
            "end": 230,
            "parameters": [
              {
                "type": "Identifier",
                "start": 210,
                "end": 219,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 211,
                  "end": 219,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 213,
                    "end": 219
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 220,
              "end": 229,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 222,
                "end": 229,
                "typeName": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 229,
                  "name": "Derived",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
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
      "start": 234,
      "end": 287,
      "id": {
        "type": "Identifier",
        "start": 240,
        "end": 241,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 250,
        "end": 251,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 252,
        "end": 287,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 258,
            "end": 276,
            "parameters": [
              {
                "type": "Identifier",
                "start": 259,
                "end": 268,
                "name": "x",
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
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 269,
              "end": 275,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 271,
                "end": 275,
                "typeName": {
                  "type": "Identifier",
                  "start": 271,
                  "end": 275,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
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
      "start": 289,
      "end": 344,
      "id": {
        "type": "Identifier",
        "start": 295,
        "end": 297,
        "name": "B2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 306,
        "end": 307,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 308,
        "end": 344,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 314,
            "end": 336,
            "parameters": [
              {
                "type": "Identifier",
                "start": 315,
                "end": 324,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 316,
                  "end": 324,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 318,
                    "end": 324
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 325,
              "end": 335,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 327,
                "end": 335,
                "typeName": {
                  "type": "Identifier",
                  "start": 327,
                  "end": 335,
                  "name": "Derived2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
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
      "type": "TSModuleDeclaration",
      "start": 346,
      "end": 860,
      "id": {
        "type": "Identifier",
        "start": 353,
        "end": 361,
        "name": "Generics",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 362,
        "end": 860,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 368,
            "end": 426,
            "id": {
              "type": "Identifier",
              "start": 374,
              "end": 375,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 395,
              "end": 426,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 405,
                  "end": 420,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 406,
                      "end": 415,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 407,
                        "end": 415,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 409,
                          "end": 415
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 416,
                    "end": 419,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 418,
                      "end": 419,
                      "typeName": {
                        "type": "Identifier",
                        "start": 418,
                        "end": 419,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 375,
              "end": 394,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 376,
                  "end": 393,
                  "name": {
                    "type": "Identifier",
                    "start": 376,
                    "end": 377,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 386,
                    "end": 393,
                    "typeName": {
                      "type": "Identifier",
                      "start": 386,
                      "end": 393,
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
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 432,
            "end": 502,
            "id": {
              "type": "Identifier",
              "start": 438,
              "end": 439,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 448,
              "end": 449,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 456,
              "end": 502,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 466,
                  "end": 487,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 467,
                      "end": 476,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 468,
                        "end": 476,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 470,
                          "end": 476
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 477,
                    "end": 486,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 479,
                      "end": 486,
                      "typeName": {
                        "type": "Identifier",
                        "start": 479,
                        "end": 486,
                        "name": "Derived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 449,
              "end": 455,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 450,
                  "end": 454,
                  "typeName": {
                    "type": "Identifier",
                    "start": 450,
                    "end": 454,
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
          {
            "type": "ClassDeclaration",
            "start": 508,
            "end": 580,
            "id": {
              "type": "Identifier",
              "start": 514,
              "end": 516,
              "name": "B2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 525,
              "end": 526,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 536,
              "end": 580,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 546,
                  "end": 568,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 547,
                      "end": 556,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 548,
                        "end": 556,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 550,
                          "end": 556
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 557,
                    "end": 567,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 559,
                      "end": 567,
                      "typeName": {
                        "type": "Identifier",
                        "start": 559,
                        "end": 567,
                        "name": "Derived2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 526,
              "end": 535,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 527,
                  "end": 534,
                  "typeName": {
                    "type": "Identifier",
                    "start": 527,
                    "end": 534,
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
          {
            "type": "ClassDeclaration",
            "start": 586,
            "end": 670,
            "id": {
              "type": "Identifier",
              "start": 592,
              "end": 594,
              "name": "B3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 622,
              "end": 623,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 627,
              "end": 670,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 637,
                  "end": 655,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 638,
                      "end": 647,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 639,
                        "end": 647,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 641,
                          "end": 647
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 648,
                    "end": 654,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 650,
                      "end": 654,
                      "typeName": {
                        "type": "Identifier",
                        "start": 650,
                        "end": 654,
                        "name": "Base",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 594,
              "end": 613,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 595,
                  "end": 612,
                  "name": {
                    "type": "Identifier",
                    "start": 595,
                    "end": 596,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 605,
                    "end": 612,
                    "typeName": {
                      "type": "Identifier",
                      "start": 605,
                      "end": 612,
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
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 623,
              "end": 626,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 624,
                  "end": 625,
                  "typeName": {
                    "type": "Identifier",
                    "start": 624,
                    "end": 625,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 676,
            "end": 763,
            "id": {
              "type": "Identifier",
              "start": 682,
              "end": 684,
              "name": "B4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 712,
              "end": 713,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 717,
              "end": 763,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 727,
                  "end": 748,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 728,
                      "end": 737,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 729,
                        "end": 737,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 731,
                          "end": 737
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 738,
                    "end": 747,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 740,
                      "end": 747,
                      "typeName": {
                        "type": "Identifier",
                        "start": 740,
                        "end": 747,
                        "name": "Derived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 684,
              "end": 703,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 685,
                  "end": 702,
                  "name": {
                    "type": "Identifier",
                    "start": 685,
                    "end": 686,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 695,
                    "end": 702,
                    "typeName": {
                      "type": "Identifier",
                      "start": 695,
                      "end": 702,
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
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 713,
              "end": 716,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 714,
                  "end": 715,
                  "typeName": {
                    "type": "Identifier",
                    "start": 714,
                    "end": 715,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 769,
            "end": 858,
            "id": {
              "type": "Identifier",
              "start": 775,
              "end": 777,
              "name": "B5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 806,
              "end": 807,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 811,
              "end": 858,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 821,
                  "end": 843,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 822,
                      "end": 831,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 823,
                        "end": 831,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 825,
                          "end": 831
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 832,
                    "end": 842,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 834,
                      "end": 842,
                      "typeName": {
                        "type": "Identifier",
                        "start": 834,
                        "end": 842,
                        "name": "Derived2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 777,
              "end": 797,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 778,
                  "end": 796,
                  "name": {
                    "type": "Identifier",
                    "start": 778,
                    "end": 779,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 788,
                    "end": 796,
                    "typeName": {
                      "type": "Identifier",
                      "start": 788,
                      "end": 796,
                      "name": "Derived2",
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
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 807,
              "end": 810,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 808,
                  "end": 809,
                  "typeName": {
                    "type": "Identifier",
                    "start": 808,
                    "end": 809,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
