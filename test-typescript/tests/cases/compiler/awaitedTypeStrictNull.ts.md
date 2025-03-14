awaitedTypeStrictNull.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 2689,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 26,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 7,
        "decorators": [],
        "name": "T1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 10,
        "end": 25,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 17,
          "end": 25,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 18,
              "end": 24
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 10,
          "end": 17,
          "decorators": [],
          "name": "Awaited",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 27,
      "end": 62,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 34,
        "decorators": [],
        "name": "T2",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 37,
        "end": 61,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 44,
          "end": 61,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 45,
              "end": 60,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 52,
                "end": 60,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 53,
                    "end": 59
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 45,
                "end": 52,
                "decorators": [],
                "name": "Promise",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 37,
          "end": 44,
          "decorators": [],
          "name": "Awaited",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 63,
      "end": 107,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 70,
        "decorators": [],
        "name": "T3",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 73,
        "end": 106,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 80,
          "end": 106,
          "params": [
            {
              "type": "TSUnionType",
              "start": 81,
              "end": 105,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 81,
                  "end": 87
                },
                {
                  "type": "TSTypeReference",
                  "start": 90,
                  "end": 105,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 97,
                    "end": 105,
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 98,
                        "end": 104
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 97,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 73,
          "end": 80,
          "decorators": [],
          "name": "Awaited",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 108,
      "end": 152,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 115,
        "decorators": [],
        "name": "T4",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 118,
        "end": 151,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 125,
          "end": 151,
          "params": [
            {
              "type": "TSUnionType",
              "start": 126,
              "end": 150,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 126,
                  "end": 132
                },
                {
                  "type": "TSTypeReference",
                  "start": 135,
                  "end": 150,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 142,
                    "end": 150,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 143,
                        "end": 149
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 135,
                    "end": 142,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 118,
          "end": 125,
          "decorators": [],
          "name": "Awaited",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 153,
      "end": 189,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 158,
        "end": 160,
        "decorators": [],
        "name": "T5",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 163,
        "end": 188,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 170,
          "end": 188,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 171,
              "end": 187,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 173,
                  "end": 185,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 173,
                    "end": 177,
                    "decorators": [],
                    "name": "then",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 177,
                    "end": 185,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 179,
                      "end": 185
                    }
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 163,
          "end": 170,
          "decorators": [],
          "name": "Awaited",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 190,
      "end": 226,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 195,
        "end": 197,
        "decorators": [],
        "name": "T6",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 200,
        "end": 225,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 207,
          "end": 225,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 208,
              "end": 224,
              "members": [
                {
                  "type": "TSMethodSignature",
                  "start": 210,
                  "end": 222,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 210,
                    "end": 214,
                    "decorators": [],
                    "name": "then",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 216,
                    "end": 222,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 218,
                      "end": 222
                    }
                  },
                  "static": false
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 200,
          "end": 207,
          "decorators": [],
          "name": "Awaited",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 261,
      "end": 306,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 266,
        "end": 268,
        "decorators": [],
        "name": "T7",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 271,
        "end": 305,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 278,
          "end": 305,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 279,
              "end": 304,
              "members": [
                {
                  "type": "TSMethodSignature",
                  "start": 281,
                  "end": 302,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 281,
                    "end": 285,
                    "decorators": [],
                    "name": "then",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 286,
                      "end": 295,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 287,
                        "end": 295,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 289,
                          "end": 295
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 296,
                    "end": 302,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 298,
                      "end": 302
                    }
                  },
                  "static": false
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 271,
          "end": 278,
          "decorators": [],
          "name": "Awaited",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 341,
      "end": 390,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 346,
        "end": 348,
        "decorators": [],
        "name": "T8",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 351,
        "end": 389,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 358,
          "end": 389,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 359,
              "end": 388,
              "members": [
                {
                  "type": "TSMethodSignature",
                  "start": 361,
                  "end": 386,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 361,
                    "end": 365,
                    "decorators": [],
                    "name": "then",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 366,
                      "end": 379,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 367,
                        "end": 379,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 369,
                          "end": 379,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 372,
                            "end": 379,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 375,
                              "end": 379
                            }
                          }
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 380,
                    "end": 386,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 382,
                      "end": 386
                    }
                  },
                  "static": false
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 351,
          "end": 358,
          "decorators": [],
          "name": "Awaited",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 402,
      "end": 425,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 407,
        "end": 409,
        "decorators": [],
        "name": "T9",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 412,
        "end": 424,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 419,
          "end": 424,
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 420,
              "end": 423
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 412,
          "end": 419,
          "decorators": [],
          "name": "Awaited",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 426,
      "end": 452,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 431,
        "end": 434,
        "decorators": [],
        "name": "T10",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 437,
        "end": 451,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 444,
          "end": 451,
          "params": [
            {
              "type": "TSNeverKeyword",
              "start": 445,
              "end": 450
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 437,
          "end": 444,
          "decorators": [],
          "name": "Awaited",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 453,
      "end": 481,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 458,
        "end": 461,
        "decorators": [],
        "name": "T11",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 464,
        "end": 480,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 471,
          "end": 480,
          "params": [
            {
              "type": "TSUnknownKeyword",
              "start": 472,
              "end": 479
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 464,
          "end": 471,
          "decorators": [],
          "name": "Awaited",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 482,
      "end": 527,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 487,
        "end": 490,
        "decorators": [],
        "name": "T12",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 493,
        "end": 526,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 500,
          "end": 526,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 501,
              "end": 525,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 508,
                "end": 525,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 509,
                    "end": 524,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 516,
                      "end": 524,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 517,
                          "end": 523
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 509,
                      "end": 516,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 501,
                "end": 508,
                "decorators": [],
                "name": "Promise",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 493,
          "end": 500,
          "decorators": [],
          "name": "Awaited",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 528,
      "end": 635,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 533,
        "end": 536,
        "decorators": [],
        "name": "T13",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 539,
        "end": 634,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 546,
          "end": 634,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 547,
              "end": 596,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 554,
                "end": 596,
                "params": [
                  {
                    "type": "TSUnionType",
                    "start": 555,
                    "end": 595,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 555,
                        "end": 579,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 562,
                          "end": 579,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 563,
                              "end": 578,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 570,
                                "end": 578,
                                "params": [
                                  {
                                    "type": "TSNumberKeyword",
                                    "start": 571,
                                    "end": 577
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 563,
                                "end": 570,
                                "decorators": [],
                                "name": "Promise",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 555,
                          "end": 562,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 582,
                        "end": 588
                      },
                      {
                        "type": "TSNullKeyword",
                        "start": 591,
                        "end": 595
                      }
                    ]
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 547,
                "end": 554,
                "decorators": [],
                "name": "Awaited",
                "optional": false
              }
            },
            {
              "type": "TSUnionType",
              "start": 611,
              "end": 633,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 611,
                  "end": 617
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 620,
                  "end": 626
                },
                {
                  "type": "TSNullKeyword",
                  "start": 629,
                  "end": 633
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 539,
          "end": 546,
          "decorators": [],
          "name": "_Expect",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 706,
      "end": 823,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 711,
        "end": 714,
        "decorators": [],
        "name": "T14",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 717,
        "end": 822,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 724,
          "end": 822,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 725,
              "end": 779,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 732,
                "end": 779,
                "params": [
                  {
                    "type": "TSUnionType",
                    "start": 733,
                    "end": 778,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 733,
                        "end": 757,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 740,
                          "end": 757,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 741,
                              "end": 756,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 748,
                                "end": 756,
                                "params": [
                                  {
                                    "type": "TSNumberKeyword",
                                    "start": 749,
                                    "end": 755
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 741,
                                "end": 748,
                                "decorators": [],
                                "name": "Promise",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 733,
                          "end": 740,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 760,
                        "end": 766
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 769,
                        "end": 778
                      }
                    ]
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 725,
                "end": 732,
                "decorators": [],
                "name": "Awaited",
                "optional": false
              }
            },
            {
              "type": "TSUnionType",
              "start": 794,
              "end": 821,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 794,
                  "end": 800
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 803,
                  "end": 809
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 812,
                  "end": 821
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 717,
          "end": 724,
          "decorators": [],
          "name": "_Expect",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 894,
      "end": 1025,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 899,
        "end": 902,
        "decorators": [],
        "name": "T15",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 905,
        "end": 1024,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 912,
          "end": 1024,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 913,
              "end": 974,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 920,
                "end": 974,
                "params": [
                  {
                    "type": "TSUnionType",
                    "start": 921,
                    "end": 973,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 921,
                        "end": 945,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 928,
                          "end": 945,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 929,
                              "end": 944,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 936,
                                "end": 944,
                                "params": [
                                  {
                                    "type": "TSNumberKeyword",
                                    "start": 937,
                                    "end": 943
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 929,
                                "end": 936,
                                "decorators": [],
                                "name": "Promise",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 921,
                          "end": 928,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 948,
                        "end": 954
                      },
                      {
                        "type": "TSNullKeyword",
                        "start": 957,
                        "end": 961
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 964,
                        "end": 973
                      }
                    ]
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 913,
                "end": 920,
                "decorators": [],
                "name": "Awaited",
                "optional": false
              }
            },
            {
              "type": "TSUnionType",
              "start": 989,
              "end": 1023,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 989,
                  "end": 995
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 998,
                  "end": 1004
                },
                {
                  "type": "TSNullKeyword",
                  "start": 1007,
                  "end": 1011
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1014,
                  "end": 1023
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 905,
          "end": 912,
          "decorators": [],
          "name": "_Expect",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1097,
      "end": 1134,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1102,
        "end": 1112,
        "decorators": [],
        "name": "TUndefined",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1115,
        "end": 1133,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1122,
          "end": 1133,
          "params": [
            {
              "type": "TSUndefinedKeyword",
              "start": 1123,
              "end": 1132
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1115,
          "end": 1122,
          "decorators": [],
          "name": "Awaited",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1135,
      "end": 1162,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1140,
        "end": 1145,
        "decorators": [],
        "name": "TNull",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1148,
        "end": 1161,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1155,
          "end": 1161,
          "params": [
            {
              "type": "TSNullKeyword",
              "start": 1156,
              "end": 1160
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1148,
          "end": 1155,
          "decorators": [],
          "name": "Awaited",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1163,
      "end": 1213,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1168,
        "end": 1184,
        "decorators": [],
        "name": "TNullOrUndefined",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1187,
        "end": 1212,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1194,
          "end": 1212,
          "params": [
            {
              "type": "TSUnionType",
              "start": 1195,
              "end": 1211,
              "types": [
                {
                  "type": "TSNullKeyword",
                  "start": 1195,
                  "end": 1199
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1202,
                  "end": 1211
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1187,
          "end": 1194,
          "decorators": [],
          "name": "Awaited",
          "optional": false
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1215,
      "end": 1284,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1236,
        "end": 1284,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1238,
            "end": 1282,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1238,
              "end": 1242,
              "decorators": [],
              "name": "then",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1243,
                "end": 1274,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1245,
                  "end": 1274,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 1247,
                    "end": 1274,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1248,
                        "end": 1265,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1253,
                          "end": 1265,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1255,
                            "end": 1265,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1255,
                              "end": 1265,
                              "decorators": [],
                              "name": "BadPromise",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1267,
                      "end": 1274,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1270,
                        "end": 1274
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1275,
              "end": 1281,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1277,
                "end": 1281
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1225,
        "end": 1235,
        "decorators": [],
        "name": "BadPromise",
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1285,
      "end": 1316,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1290,
        "end": 1293,
        "decorators": [],
        "name": "T16",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1296,
        "end": 1315,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1303,
          "end": 1315,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1304,
              "end": 1314,
              "typeName": {
                "type": "Identifier",
                "start": 1304,
                "end": 1314,
                "decorators": [],
                "name": "BadPromise",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1296,
          "end": 1303,
          "decorators": [],
          "name": "Awaited",
          "optional": false
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1327,
      "end": 1398,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1349,
        "end": 1398,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1351,
            "end": 1396,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1351,
              "end": 1355,
              "decorators": [],
              "name": "then",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1356,
                "end": 1388,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1358,
                  "end": 1388,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 1360,
                    "end": 1388,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1361,
                        "end": 1379,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1366,
                          "end": 1379,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1368,
                            "end": 1379,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1368,
                              "end": 1379,
                              "decorators": [],
                              "name": "BadPromise2",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1381,
                      "end": 1388,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1384,
                        "end": 1388
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1389,
              "end": 1395,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1391,
                "end": 1395
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1337,
        "end": 1348,
        "decorators": [],
        "name": "BadPromise1",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1399,
      "end": 1470,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1421,
        "end": 1470,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1423,
            "end": 1468,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1423,
              "end": 1427,
              "decorators": [],
              "name": "then",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1428,
                "end": 1460,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1430,
                  "end": 1460,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 1432,
                    "end": 1460,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1433,
                        "end": 1451,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1438,
                          "end": 1451,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1440,
                            "end": 1451,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1440,
                              "end": 1451,
                              "decorators": [],
                              "name": "BadPromise1",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1453,
                      "end": 1460,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1456,
                        "end": 1460
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1461,
              "end": 1467,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1463,
                "end": 1467
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1409,
        "end": 1420,
        "decorators": [],
        "name": "BadPromise2",
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1471,
      "end": 1503,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1476,
        "end": 1479,
        "decorators": [],
        "name": "T17",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1482,
        "end": 1502,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1489,
          "end": 1502,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1490,
              "end": 1501,
              "typeName": {
                "type": "Identifier",
                "start": 1490,
                "end": 1501,
                "decorators": [],
                "name": "BadPromise1",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1482,
          "end": 1489,
          "decorators": [],
          "name": "Awaited",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1570,
      "end": 1639,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1575,
        "end": 1578,
        "decorators": [],
        "name": "T18",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1581,
        "end": 1638,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1588,
          "end": 1638,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 1589,
              "end": 1637,
              "members": [
                {
                  "type": "TSMethodSignature",
                  "start": 1591,
                  "end": 1636,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1591,
                    "end": 1595,
                    "decorators": [],
                    "name": "then",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1596,
                      "end": 1635,
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1598,
                        "end": 1635,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 1600,
                          "end": 1635,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1601,
                              "end": 1614,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1606,
                                "end": 1614,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1608,
                                  "end": 1614
                                }
                              }
                            },
                            {
                              "type": "Identifier",
                              "start": 1616,
                              "end": 1626,
                              "decorators": [],
                              "name": "other",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1621,
                                "end": 1626,
                                "typeAnnotation": {
                                  "type": "TSTypeLiteral",
                                  "start": 1623,
                                  "end": 1626,
                                  "members": []
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 1628,
                            "end": 1635,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 1631,
                              "end": 1635
                            }
                          }
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1581,
          "end": 1588,
          "decorators": [],
          "name": "Awaited",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1707,
      "end": 1761,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1712,
        "end": 1724,
        "decorators": [],
        "name": "MaybePromise",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 1730,
        "end": 1761,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1730,
            "end": 1731,
            "typeName": {
              "type": "Identifier",
              "start": 1730,
              "end": 1731,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 1734,
            "end": 1744,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1741,
              "end": 1744,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1742,
                  "end": 1743,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1742,
                    "end": 1743,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 1734,
              "end": 1741,
              "decorators": [],
              "name": "Promise",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 1747,
            "end": 1761,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1758,
              "end": 1761,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1759,
                  "end": 1760,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1759,
                    "end": 1760,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 1747,
              "end": 1758,
              "decorators": [],
              "name": "PromiseLike",
              "optional": false
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1724,
        "end": 1727,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1725,
            "end": 1726,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1725,
              "end": 1726,
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
      "type": "TSDeclareFunction",
      "start": 1762,
      "end": 1822,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1779,
        "end": 1791,
        "decorators": [],
        "name": "MaybePromise",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1795,
          "end": 1803,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1800,
            "end": 1803,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1802,
              "end": 1803,
              "typeName": {
                "type": "Identifier",
                "start": 1802,
                "end": 1803,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1804,
        "end": 1821,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1806,
          "end": 1821,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1818,
            "end": 1821,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1819,
                "end": 1820,
                "typeName": {
                  "type": "Identifier",
                  "start": 1819,
                  "end": 1820,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1806,
            "end": 1818,
            "decorators": [],
            "name": "MaybePromise",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1791,
        "end": 1794,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1792,
            "end": 1793,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1792,
              "end": 1793,
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
      "type": "FunctionDeclaration",
      "start": 1824,
      "end": 2038,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1846,
        "end": 2038,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1852,
            "end": 1868,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1856,
                "end": 1867,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1856,
                  "end": 1867,
                  "decorators": [],
                  "name": "aaa",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1859,
                    "end": 1867,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1861,
                      "end": 1867
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 1873,
            "end": 1889,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1877,
                "end": 1888,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1877,
                  "end": 1888,
                  "decorators": [],
                  "name": "bbb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1880,
                    "end": 1888,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1882,
                      "end": 1888
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 1894,
            "end": 2036,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1894,
              "end": 2036,
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "start": 1894,
                "end": 1927,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 1904,
                    "end": 1907,
                    "decorators": [],
                    "name": "aaa",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 1917,
                    "end": 1920,
                    "decorators": [],
                    "name": "bbb",
                    "optional": false
                  }
                ],
                "optional": false
              },
              "right": {
                "type": "AwaitExpression",
                "start": 1930,
                "end": 2036,
                "argument": {
                  "type": "CallExpression",
                  "start": 1936,
                  "end": 2036,
                  "arguments": [
                    {
                      "type": "ArrayExpression",
                      "start": 1948,
                      "end": 2035,
                      "elements": [
                        {
                          "type": "CallExpression",
                          "start": 1958,
                          "end": 1973,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 1971,
                              "end": 1972,
                              "raw": "1",
                              "value": 1
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 1958,
                            "end": 1970,
                            "decorators": [],
                            "name": "MaybePromise",
                            "optional": false
                          },
                          "optional": false
                        },
                        {
                          "type": "CallExpression",
                          "start": 1983,
                          "end": 2000,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 1996,
                              "end": 1999,
                              "raw": "'2'",
                              "value": "2"
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 1983,
                            "end": 1995,
                            "decorators": [],
                            "name": "MaybePromise",
                            "optional": false
                          },
                          "optional": false
                        },
                        {
                          "type": "CallExpression",
                          "start": 2010,
                          "end": 2028,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 2023,
                              "end": 2027,
                              "raw": "true",
                              "value": true
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 2010,
                            "end": 2022,
                            "decorators": [],
                            "name": "MaybePromise",
                            "optional": false
                          },
                          "optional": false
                        }
                      ]
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1936,
                    "end": 1947,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1936,
                      "end": 1943,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1944,
                      "end": 1947,
                      "decorators": [],
                      "name": "all",
                      "optional": false
                    }
                  },
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1839,
        "end": 1843,
        "decorators": [],
        "name": "main",
        "optional": false
      },
      "params": []
    },
    {
      "type": "ClassDeclaration",
      "start": 2096,
      "end": 2291,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 2114,
        "end": 2291,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2185,
            "end": 2234,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2191,
              "end": 2195,
              "decorators": [],
              "name": "post",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 2195,
              "end": 2234,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 2205,
                "end": 2234,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2207,
                    "end": 2232,
                    "argument": {
                      "type": "CallExpression",
                      "start": 2214,
                      "end": 2231,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 2214,
                        "end": 2226,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 2214,
                          "end": 2218
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 2219,
                          "end": 2226,
                          "decorators": [],
                          "name": "request",
                          "optional": false
                        }
                      },
                      "optional": false,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 2226,
                        "end": 2229,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 2227,
                            "end": 2228,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2227,
                              "end": 2228,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2195,
                "end": 2202,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2196,
                    "end": 2201,
                    "const": false,
                    "default": {
                      "type": "TSTypeReference",
                      "start": 2200,
                      "end": 2201,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2200,
                        "end": 2201,
                        "decorators": [],
                        "name": "D",
                        "optional": false
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 2196,
                      "end": 2197,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2236,
            "end": 2289,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2242,
              "end": 2249,
              "decorators": [],
              "name": "request",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 2249,
              "end": 2289,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 2267,
                "end": 2289,
                "body": [
                  {
                    "type": "ThrowStatement",
                    "start": 2269,
                    "end": 2287,
                    "argument": {
                      "type": "NewExpression",
                      "start": 2275,
                      "end": 2286,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 2279,
                        "end": 2284,
                        "decorators": [],
                        "name": "Error",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2254,
                "end": 2266,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2256,
                  "end": 2266,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 2263,
                    "end": 2266,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 2264,
                        "end": 2265,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2264,
                          "end": 2265,
                          "decorators": [],
                          "name": "D",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 2256,
                    "end": 2263,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2249,
                "end": 2252,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2250,
                    "end": 2251,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 2250,
                      "end": 2251,
                      "decorators": [],
                      "name": "D",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2102,
        "end": 2105,
        "decorators": [],
        "name": "Api",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2105,
        "end": 2113,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2106,
            "end": 2112,
            "const": false,
            "default": {
              "type": "TSTypeLiteral",
              "start": 2110,
              "end": 2112,
              "members": []
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2106,
              "end": 2107,
              "decorators": [],
              "name": "D",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2293,
      "end": 2316,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2307,
          "end": 2315,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2307,
            "end": 2315,
            "decorators": [],
            "name": "api",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2310,
              "end": 2315,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2312,
                "end": 2315,
                "typeName": {
                  "type": "Identifier",
                  "start": 2312,
                  "end": 2315,
                  "decorators": [],
                  "name": "Api",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2317,
      "end": 2344,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2331,
        "end": 2344,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2333,
            "end": 2342,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2333,
              "end": 2334,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2334,
              "end": 2342,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2336,
                "end": 2342
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 2327,
        "end": 2330,
        "decorators": [],
        "name": "Obj",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2346,
      "end": 2554,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 2428,
        "end": 2554,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2534,
            "end": 2552,
            "argument": {
              "type": "CallExpression",
              "start": 2541,
              "end": 2551,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 2541,
                "end": 2549,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2541,
                  "end": 2544,
                  "decorators": [],
                  "name": "api",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2545,
                  "end": 2549,
                  "decorators": [],
                  "name": "post",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2361,
        "end": 2363,
        "decorators": [],
        "name": "fn",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2368,
        "end": 2427,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2370,
          "end": 2427,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2377,
            "end": 2427,
            "params": [
              {
                "type": "TSConditionalType",
                "start": 2378,
                "end": 2426,
                "checkType": {
                  "type": "TSTypeReference",
                  "start": 2378,
                  "end": 2379,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2378,
                    "end": 2379,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                },
                "extendsType": {
                  "type": "TSObjectKeyword",
                  "start": 2388,
                  "end": 2394
                },
                "falseType": {
                  "type": "TSTypeReference",
                  "start": 2423,
                  "end": 2426,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2423,
                    "end": 2426,
                    "decorators": [],
                    "name": "Obj",
                    "optional": false
                  }
                },
                "trueType": {
                  "type": "TSMappedType",
                  "start": 2397,
                  "end": 2420,
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 2405,
                    "end": 2412,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2411,
                      "end": 2412,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2411,
                        "end": 2412,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  },
                  "key": {
                    "type": "Identifier",
                    "start": 2400,
                    "end": 2401,
                    "decorators": [],
                    "name": "K",
                    "optional": false
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2415,
                    "end": 2418,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2415,
                      "end": 2418,
                      "decorators": [],
                      "name": "Obj",
                      "optional": false
                    }
                  }
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 2370,
            "end": 2377,
            "decorators": [],
            "name": "Promise",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2363,
        "end": 2366,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2364,
            "end": 2365,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2364,
              "end": 2365,
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
      "type": "TSTypeAliasDeclaration",
      "start": 2627,
      "end": 2688,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2632,
        "end": 2639,
        "decorators": [],
        "name": "_Expect",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2680,
        "end": 2687,
        "typeName": {
          "type": "Identifier",
          "start": 2680,
          "end": 2687,
          "decorators": [],
          "name": "TActual",
          "optional": false
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2639,
        "end": 2677,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2640,
            "end": 2665,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 2656,
              "end": 2665,
              "typeName": {
                "type": "Identifier",
                "start": 2656,
                "end": 2665,
                "decorators": [],
                "name": "TExpected",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2640,
              "end": 2647,
              "decorators": [],
              "name": "TActual",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2667,
            "end": 2676,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2667,
              "end": 2676,
              "decorators": [],
              "name": "TExpected",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
