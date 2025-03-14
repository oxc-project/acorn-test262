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
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 82,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 90,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 84,
                "end": 90
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 76,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 94,
      "end": 141,
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
            "key": {
              "type": "Identifier",
              "start": 127,
              "end": 130,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 130,
              "end": 138,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 132,
                "end": 138
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 120,
          "end": 124,
          "expression": {
            "type": "Identifier",
            "start": 120,
            "end": 124,
            "decorators": [],
            "name": "Base",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 111,
        "decorators": [],
        "name": "Derived",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 142,
      "end": 193,
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
            "key": {
              "type": "Identifier",
              "start": 179,
              "end": 182,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 182,
              "end": 190,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 184,
                "end": 190
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 169,
          "end": 176,
          "expression": {
            "type": "Identifier",
            "start": 169,
            "end": 176,
            "decorators": [],
            "name": "Derived",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 152,
        "end": 160,
        "decorators": [],
        "name": "Derived2",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 195,
      "end": 236,
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 215,
                  "end": 223,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 217,
                    "end": 223
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
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
                  "decorators": [],
                  "name": "Derived",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 205,
        "end": 206,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 238,
      "end": 295,
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 268,
                  "end": 276,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 270,
                    "end": 276
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
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
                  "decorators": [],
                  "name": "Base",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 258,
          "end": 259,
          "expression": {
            "type": "Identifier",
            "start": 258,
            "end": 259,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 248,
        "end": 249,
        "decorators": [],
        "name": "B",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 297,
      "end": 356,
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 328,
                  "end": 336,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 330,
                    "end": 336
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
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
                  "decorators": [],
                  "name": "Derived2",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 318,
          "end": 319,
          "expression": {
            "type": "Identifier",
            "start": 318,
            "end": 319,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 307,
        "end": 309,
        "decorators": [],
        "name": "B2",
        "optional": false
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 358,
      "end": 896,
      "body": {
        "type": "TSModuleBlock",
        "start": 374,
        "end": 896,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 380,
            "end": 442,
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 423,
                        "end": 431,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 425,
                          "end": 431
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 390,
              "end": 391,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 391,
              "end": 410,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 392,
                  "end": 409,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 402,
                    "end": 409,
                    "typeName": {
                      "type": "Identifier",
                      "start": 402,
                      "end": 409,
                      "decorators": [],
                      "name": "Derived",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 392,
                    "end": 393,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 448,
            "end": 522,
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 488,
                        "end": 496,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 490,
                          "end": 496
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
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
                        "decorators": [],
                        "name": "Derived",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 468,
                "end": 475,
                "expression": {
                  "type": "Identifier",
                  "start": 468,
                  "end": 469,
                  "decorators": [],
                  "name": "A",
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
                        "decorators": [],
                        "name": "Base",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 458,
              "end": 459,
              "decorators": [],
              "name": "B",
              "optional": false
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 528,
            "end": 604,
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 572,
                        "end": 580,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 574,
                          "end": 580
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
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
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 549,
                "end": 559,
                "expression": {
                  "type": "Identifier",
                  "start": 549,
                  "end": 550,
                  "decorators": [],
                  "name": "A",
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
                        "decorators": [],
                        "name": "Derived",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 538,
              "end": 540,
              "decorators": [],
              "name": "B2",
              "optional": false
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 610,
            "end": 698,
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 667,
                        "end": 675,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 669,
                          "end": 675
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
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
                        "decorators": [],
                        "name": "Base",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 650,
                "end": 654,
                "expression": {
                  "type": "Identifier",
                  "start": 650,
                  "end": 651,
                  "decorators": [],
                  "name": "A",
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
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 620,
              "end": 622,
              "decorators": [],
              "name": "B3",
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 622,
              "end": 641,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 623,
                  "end": 640,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 633,
                    "end": 640,
                    "typeName": {
                      "type": "Identifier",
                      "start": 633,
                      "end": 640,
                      "decorators": [],
                      "name": "Derived",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 623,
                    "end": 624,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 704,
            "end": 795,
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 761,
                        "end": 769,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 763,
                          "end": 769
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
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
                        "decorators": [],
                        "name": "Derived",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 744,
                "end": 748,
                "expression": {
                  "type": "Identifier",
                  "start": 744,
                  "end": 745,
                  "decorators": [],
                  "name": "A",
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
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 714,
              "end": 716,
              "decorators": [],
              "name": "B4",
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 716,
              "end": 735,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 717,
                  "end": 734,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 727,
                    "end": 734,
                    "typeName": {
                      "type": "Identifier",
                      "start": 727,
                      "end": 734,
                      "decorators": [],
                      "name": "Derived",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 717,
                    "end": 718,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 801,
            "end": 894,
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 859,
                        "end": 867,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 861,
                          "end": 867
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
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
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 842,
                "end": 846,
                "expression": {
                  "type": "Identifier",
                  "start": 842,
                  "end": 843,
                  "decorators": [],
                  "name": "A",
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
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 811,
              "end": 813,
              "decorators": [],
              "name": "B5",
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 813,
              "end": 833,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 814,
                  "end": 832,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 824,
                    "end": 832,
                    "typeName": {
                      "type": "Identifier",
                      "start": 824,
                      "end": 832,
                      "decorators": [],
                      "name": "Derived2",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 814,
                    "end": 815,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 365,
        "end": 373,
        "decorators": [],
        "name": "Generics",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
