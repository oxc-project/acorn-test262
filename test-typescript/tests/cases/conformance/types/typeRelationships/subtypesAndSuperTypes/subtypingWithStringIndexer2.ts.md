__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 62,
  "end": 896,
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
      "type": "TSInterfaceDeclaration",
      "start": 195,
      "end": 236,
      "id": {
        "type": "Identifier",
        "start": 205,
        "end": 206,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 207,
        "end": 236,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 213,
            "end": 234,
            "parameters": [
              {
                "type": "Identifier",
                "start": 214,
                "end": 223,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 215,
                  "end": 223,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 217,
                    "end": 223
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 224,
              "end": 233,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 226,
                "end": 233,
                "typeName": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 233,
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
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 238,
      "end": 295,
      "id": {
        "type": "Identifier",
        "start": 248,
        "end": 249,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 258,
          "end": 259,
          "expression": {
            "type": "Identifier",
            "start": 258,
            "end": 259,
            "name": "A",
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
        "start": 260,
        "end": 295,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 266,
            "end": 284,
            "parameters": [
              {
                "type": "Identifier",
                "start": 267,
                "end": 276,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 268,
                  "end": 276,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 270,
                    "end": 276
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 277,
              "end": 283,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 279,
                "end": 283,
                "typeName": {
                  "type": "Identifier",
                  "start": 279,
                  "end": 283,
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
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 297,
      "end": 356,
      "id": {
        "type": "Identifier",
        "start": 307,
        "end": 309,
        "name": "B2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 318,
          "end": 319,
          "expression": {
            "type": "Identifier",
            "start": 318,
            "end": 319,
            "name": "A",
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
        "start": 320,
        "end": 356,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 326,
            "end": 348,
            "parameters": [
              {
                "type": "Identifier",
                "start": 327,
                "end": 336,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 328,
                  "end": 336,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 330,
                    "end": 336
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 337,
              "end": 347,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 339,
                "end": 347,
                "typeName": {
                  "type": "Identifier",
                  "start": 339,
                  "end": 347,
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
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 358,
      "end": 896,
      "id": {
        "type": "Identifier",
        "start": 365,
        "end": 373,
        "name": "Generics",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 374,
        "end": 896,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 380,
            "end": 442,
            "id": {
              "type": "Identifier",
              "start": 390,
              "end": 391,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 391,
              "end": 410,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 392,
                  "end": 409,
                  "name": {
                    "type": "Identifier",
                    "start": 392,
                    "end": 393,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 402,
                    "end": 409,
                    "typeName": {
                      "type": "Identifier",
                      "start": 402,
                      "end": 409,
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
            "body": {
              "type": "TSInterfaceBody",
              "start": 411,
              "end": 442,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 421,
                  "end": 436,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 422,
                      "end": 431,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 423,
                        "end": 431,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 425,
                          "end": 431
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 432,
                    "end": 435,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 434,
                      "end": 435,
                      "typeName": {
                        "type": "Identifier",
                        "start": 434,
                        "end": 435,
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
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 448,
            "end": 522,
            "id": {
              "type": "Identifier",
              "start": 458,
              "end": 459,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 468,
                "end": 475,
                "expression": {
                  "type": "Identifier",
                  "start": 468,
                  "end": 469,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 469,
                  "end": 475,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 470,
                      "end": 474,
                      "typeName": {
                        "type": "Identifier",
                        "start": 470,
                        "end": 474,
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
            ],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 476,
              "end": 522,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 486,
                  "end": 507,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 487,
                      "end": 496,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 488,
                        "end": 496,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 490,
                          "end": 496
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 497,
                    "end": 506,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 499,
                      "end": 506,
                      "typeName": {
                        "type": "Identifier",
                        "start": 499,
                        "end": 506,
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
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 528,
            "end": 604,
            "id": {
              "type": "Identifier",
              "start": 538,
              "end": 540,
              "name": "B2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 549,
                "end": 559,
                "expression": {
                  "type": "Identifier",
                  "start": 549,
                  "end": 550,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 550,
                  "end": 559,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 551,
                      "end": 558,
                      "typeName": {
                        "type": "Identifier",
                        "start": 551,
                        "end": 558,
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
            ],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 560,
              "end": 604,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 570,
                  "end": 592,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 571,
                      "end": 580,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 572,
                        "end": 580,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 574,
                          "end": 580
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 581,
                    "end": 591,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 583,
                      "end": 591,
                      "typeName": {
                        "type": "Identifier",
                        "start": 583,
                        "end": 591,
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
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 610,
            "end": 698,
            "id": {
              "type": "Identifier",
              "start": 620,
              "end": 622,
              "name": "B3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 650,
                "end": 654,
                "expression": {
                  "type": "Identifier",
                  "start": 650,
                  "end": 651,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 651,
                  "end": 654,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 652,
                      "end": 653,
                      "typeName": {
                        "type": "Identifier",
                        "start": 652,
                        "end": 653,
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
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 622,
              "end": 641,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 623,
                  "end": 640,
                  "name": {
                    "type": "Identifier",
                    "start": 623,
                    "end": 624,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 633,
                    "end": 640,
                    "typeName": {
                      "type": "Identifier",
                      "start": 633,
                      "end": 640,
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
            "body": {
              "type": "TSInterfaceBody",
              "start": 655,
              "end": 698,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 665,
                  "end": 683,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 666,
                      "end": 675,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 667,
                        "end": 675,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 669,
                          "end": 675
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 676,
                    "end": 682,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 678,
                      "end": 682,
                      "typeName": {
                        "type": "Identifier",
                        "start": 678,
                        "end": 682,
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
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 704,
            "end": 795,
            "id": {
              "type": "Identifier",
              "start": 714,
              "end": 716,
              "name": "B4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 744,
                "end": 748,
                "expression": {
                  "type": "Identifier",
                  "start": 744,
                  "end": 745,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 745,
                  "end": 748,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 746,
                      "end": 747,
                      "typeName": {
                        "type": "Identifier",
                        "start": 746,
                        "end": 747,
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
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 716,
              "end": 735,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 717,
                  "end": 734,
                  "name": {
                    "type": "Identifier",
                    "start": 717,
                    "end": 718,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 727,
                    "end": 734,
                    "typeName": {
                      "type": "Identifier",
                      "start": 727,
                      "end": 734,
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
            "body": {
              "type": "TSInterfaceBody",
              "start": 749,
              "end": 795,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 759,
                  "end": 780,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 760,
                      "end": 769,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 761,
                        "end": 769,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 763,
                          "end": 769
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 770,
                    "end": 779,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 772,
                      "end": 779,
                      "typeName": {
                        "type": "Identifier",
                        "start": 772,
                        "end": 779,
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
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 801,
            "end": 894,
            "id": {
              "type": "Identifier",
              "start": 811,
              "end": 813,
              "name": "B5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 842,
                "end": 846,
                "expression": {
                  "type": "Identifier",
                  "start": 842,
                  "end": 843,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 843,
                  "end": 846,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 844,
                      "end": 845,
                      "typeName": {
                        "type": "Identifier",
                        "start": 844,
                        "end": 845,
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
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 813,
              "end": 833,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 814,
                  "end": 832,
                  "name": {
                    "type": "Identifier",
                    "start": 814,
                    "end": 815,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 824,
                    "end": 832,
                    "typeName": {
                      "type": "Identifier",
                      "start": 824,
                      "end": 832,
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
            "body": {
              "type": "TSInterfaceBody",
              "start": 847,
              "end": 894,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 857,
                  "end": 879,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 858,
                      "end": 867,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 859,
                        "end": 867,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 861,
                          "end": 867
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 868,
                    "end": 878,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 870,
                      "end": 878,
                      "typeName": {
                        "type": "Identifier",
                        "start": 870,
                        "end": 878,
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
            "declare": false
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
