unionTypeMembers.ts
```json
{
  "type": "Program",
  "start": 1,
  "end": 2090,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 1,
      "end": 414,
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 414,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 23,
            "end": 59,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 39,
              "decorators": [],
              "name": "commonMethodType",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 40,
                "end": 49,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 41,
                  "end": 49,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 43,
                    "end": 49
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 50,
              "end": 58,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 52,
                "end": 58
              }
            },
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 64,
            "end": 91,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 64,
              "end": 82,
              "decorators": [],
              "name": "commonPropertyType",
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
          },
          {
            "type": "TSMethodSignature",
            "start": 97,
            "end": 151,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 131,
              "decorators": [],
              "name": "commonMethodDifferentParameterType",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 132,
                "end": 141,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 133,
                  "end": 141,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 135,
                    "end": 141
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 142,
              "end": 150,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 144,
                "end": 150
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 156,
            "end": 207,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 156,
              "end": 187,
              "decorators": [],
              "name": "commonMethodDifferentReturnType",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 188,
                "end": 197,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 189,
                  "end": 197,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 191,
                    "end": 197
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 198,
              "end": 206,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 200,
                "end": 206
              }
            },
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 212,
            "end": 247,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 212,
              "end": 238,
              "decorators": [],
              "name": "commonPropertyDifferenType",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 238,
              "end": 246,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 240,
                "end": 246
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 253,
            "end": 292,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 253,
              "end": 282,
              "decorators": [],
              "name": "commonMethodWithTypeParameter",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 283,
                "end": 287,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 284,
                  "end": 287,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 286,
                    "end": 287,
                    "typeName": {
                      "type": "Identifier",
                      "start": 286,
                      "end": 287,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 288,
              "end": 291,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 290,
                "end": 291,
                "typeName": {
                  "type": "Identifier",
                  "start": 290,
                  "end": 291,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 297,
            "end": 342,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 297,
              "end": 329,
              "decorators": [],
              "name": "commonMethodWithOwnTypeParameter",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 333,
                "end": 337,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 334,
                  "end": 337,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 336,
                    "end": 337,
                    "typeName": {
                      "type": "Identifier",
                      "start": 336,
                      "end": 337,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 338,
              "end": 341,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 340,
                "end": 341,
                "typeName": {
                  "type": "Identifier",
                  "start": 340,
                  "end": 341,
                  "decorators": [],
                  "name": "U",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 329,
              "end": 332,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 330,
                  "end": 331,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 330,
                    "end": 331,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 348,
            "end": 382,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 348,
              "end": 362,
              "decorators": [],
              "name": "methodOnlyInI1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 363,
                "end": 372,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 364,
                  "end": 372,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 366,
                    "end": 372
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 373,
              "end": 381,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 375,
                "end": 381
              }
            },
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 387,
            "end": 412,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 387,
              "end": 403,
              "decorators": [],
              "name": "propertyOnlyInI1",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 403,
              "end": 411,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 405,
                "end": 411
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 13,
        "decorators": [],
        "name": "I1",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 13,
        "end": 16,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 15,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
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
      "start": 416,
      "end": 829,
      "body": {
        "type": "TSInterfaceBody",
        "start": 432,
        "end": 829,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 438,
            "end": 474,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 438,
              "end": 454,
              "decorators": [],
              "name": "commonMethodType",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 455,
                "end": 464,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 456,
                  "end": 464,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 458,
                    "end": 464
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 465,
              "end": 473,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 467,
                "end": 473
              }
            },
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 479,
            "end": 506,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 479,
              "end": 497,
              "decorators": [],
              "name": "commonPropertyType",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 497,
              "end": 505,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 499,
                "end": 505
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 512,
            "end": 566,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 512,
              "end": 546,
              "decorators": [],
              "name": "commonMethodDifferentParameterType",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 547,
                "end": 556,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 548,
                  "end": 556,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 550,
                    "end": 556
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 557,
              "end": 565,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 559,
                "end": 565
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 571,
            "end": 622,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 571,
              "end": 602,
              "decorators": [],
              "name": "commonMethodDifferentReturnType",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 603,
                "end": 612,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 604,
                  "end": 612,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 606,
                    "end": 612
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 613,
              "end": 621,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 615,
                "end": 621
              }
            },
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 627,
            "end": 662,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 627,
              "end": 653,
              "decorators": [],
              "name": "commonPropertyDifferenType",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 653,
              "end": 661,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 655,
                "end": 661
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 668,
            "end": 707,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 668,
              "end": 697,
              "decorators": [],
              "name": "commonMethodWithTypeParameter",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 698,
                "end": 702,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 699,
                  "end": 702,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 701,
                    "end": 702,
                    "typeName": {
                      "type": "Identifier",
                      "start": 701,
                      "end": 702,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 703,
              "end": 706,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 705,
                "end": 706,
                "typeName": {
                  "type": "Identifier",
                  "start": 705,
                  "end": 706,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 712,
            "end": 757,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 712,
              "end": 744,
              "decorators": [],
              "name": "commonMethodWithOwnTypeParameter",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 748,
                "end": 752,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 749,
                  "end": 752,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 751,
                    "end": 752,
                    "typeName": {
                      "type": "Identifier",
                      "start": 751,
                      "end": 752,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 753,
              "end": 756,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 755,
                "end": 756,
                "typeName": {
                  "type": "Identifier",
                  "start": 755,
                  "end": 756,
                  "decorators": [],
                  "name": "U",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 744,
              "end": 747,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 745,
                  "end": 746,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 745,
                    "end": 746,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 763,
            "end": 797,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 763,
              "end": 777,
              "decorators": [],
              "name": "methodOnlyInI2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 778,
                "end": 787,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 779,
                  "end": 787,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 781,
                    "end": 787
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 788,
              "end": 796,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 790,
                "end": 796
              }
            },
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 802,
            "end": 827,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 802,
              "end": 818,
              "decorators": [],
              "name": "propertyOnlyInI2",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 818,
              "end": 826,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 820,
                "end": 826
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 426,
        "end": 428,
        "decorators": [],
        "name": "I2",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 428,
        "end": 431,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 429,
            "end": 430,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 429,
              "end": 430,
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
      "type": "VariableDeclaration",
      "start": 1005,
      "end": 1037,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1009,
          "end": 1036,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1009,
            "end": 1036,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1011,
              "end": 1036,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1013,
                "end": 1036,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1013,
                    "end": 1023,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1015,
                      "end": 1023,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1016,
                          "end": 1022
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1013,
                      "end": 1015,
                      "decorators": [],
                      "name": "I1",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1026,
                    "end": 1036,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1028,
                      "end": 1036,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1029,
                          "end": 1035
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1026,
                      "end": 1028,
                      "decorators": [],
                      "name": "I2",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1038,
      "end": 1054,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1042,
          "end": 1053,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1042,
            "end": 1053,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1045,
              "end": 1053,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1047,
                "end": 1053
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1055,
      "end": 1071,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1059,
          "end": 1070,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1059,
            "end": 1070,
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1062,
              "end": 1070,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1064,
                "end": 1070
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1072,
      "end": 1102,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1076,
          "end": 1101,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1076,
            "end": 1101,
            "decorators": [],
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1084,
              "end": 1101,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1086,
                "end": 1101,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1086,
                    "end": 1092
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1095,
                    "end": 1101
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 1217,
      "end": 1244,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1217,
        "end": 1243,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1217,
          "end": 1220,
          "decorators": [],
          "name": "str",
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 1223,
          "end": 1243,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1223,
            "end": 1224,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1225,
            "end": 1243,
            "decorators": [],
            "name": "commonPropertyType",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1255,
      "end": 1285,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1255,
        "end": 1284,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1255,
          "end": 1258,
          "decorators": [],
          "name": "str",
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1261,
          "end": 1284,
          "arguments": [
            {
              "type": "Identifier",
              "start": 1280,
              "end": 1283,
              "decorators": [],
              "name": "str",
              "optional": false
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 1261,
            "end": 1279,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1261,
              "end": 1262,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1263,
              "end": 1279,
              "decorators": [],
              "name": "commonMethodType",
              "optional": false
            }
          },
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1338,
      "end": 1378,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1338,
        "end": 1377,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1338,
          "end": 1346,
          "decorators": [],
          "name": "strOrNum",
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 1349,
          "end": 1377,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1349,
            "end": 1350,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1351,
            "end": 1377,
            "decorators": [],
            "name": "commonPropertyDifferenType",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1379,
      "end": 1429,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1379,
        "end": 1428,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1379,
          "end": 1387,
          "decorators": [],
          "name": "strOrNum",
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1390,
          "end": 1428,
          "arguments": [
            {
              "type": "Identifier",
              "start": 1424,
              "end": 1427,
              "decorators": [],
              "name": "str",
              "optional": false
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 1390,
            "end": 1423,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1390,
              "end": 1391,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1392,
              "end": 1423,
              "decorators": [],
              "name": "commonMethodDifferentReturnType",
              "optional": false
            }
          },
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1448,
      "end": 1485,
      "expression": {
        "type": "MemberExpression",
        "start": 1448,
        "end": 1484,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 1448,
          "end": 1449,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 1450,
          "end": 1484,
          "decorators": [],
          "name": "commonMethodDifferentParameterType",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1516,
      "end": 1563,
      "expression": {
        "type": "CallExpression",
        "start": 1516,
        "end": 1562,
        "arguments": [
          {
            "type": "Identifier",
            "start": 1553,
            "end": 1561,
            "decorators": [],
            "name": "strOrNum",
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1516,
          "end": 1552,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1516,
            "end": 1517,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1518,
            "end": 1552,
            "decorators": [],
            "name": "commonMethodDifferentParameterType",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1770,
      "end": 1813,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1770,
        "end": 1812,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1770,
          "end": 1773,
          "decorators": [],
          "name": "num",
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1776,
          "end": 1812,
          "arguments": [
            {
              "type": "Identifier",
              "start": 1808,
              "end": 1811,
              "decorators": [],
              "name": "num",
              "optional": false
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 1776,
            "end": 1807,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1776,
              "end": 1777,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1778,
              "end": 1807,
              "decorators": [],
              "name": "commonMethodWithTypeParameter",
              "optional": false
            }
          },
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1814,
      "end": 1860,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1814,
        "end": 1859,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1814,
          "end": 1817,
          "decorators": [],
          "name": "num",
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1820,
          "end": 1859,
          "arguments": [
            {
              "type": "Identifier",
              "start": 1855,
              "end": 1858,
              "decorators": [],
              "name": "num",
              "optional": false
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 1820,
            "end": 1854,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1820,
              "end": 1821,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1822,
              "end": 1854,
              "decorators": [],
              "name": "commonMethodWithOwnTypeParameter",
              "optional": false
            }
          },
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1861,
      "end": 1907,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1861,
        "end": 1906,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1861,
          "end": 1864,
          "decorators": [],
          "name": "str",
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1867,
          "end": 1906,
          "arguments": [
            {
              "type": "Identifier",
              "start": 1902,
              "end": 1905,
              "decorators": [],
              "name": "str",
              "optional": false
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 1867,
            "end": 1901,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1867,
              "end": 1868,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1869,
              "end": 1901,
              "decorators": [],
              "name": "commonMethodWithOwnTypeParameter",
              "optional": false
            }
          },
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1908,
      "end": 1964,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1908,
        "end": 1963,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1908,
          "end": 1916,
          "decorators": [],
          "name": "strOrNum",
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1919,
          "end": 1963,
          "arguments": [
            {
              "type": "Identifier",
              "start": 1954,
              "end": 1962,
              "decorators": [],
              "name": "strOrNum",
              "optional": false
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 1919,
            "end": 1953,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1919,
              "end": 1920,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1921,
              "end": 1953,
              "decorators": [],
              "name": "commonMethodWithOwnTypeParameter",
              "optional": false
            }
          },
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1966,
      "end": 1985,
      "expression": {
        "type": "MemberExpression",
        "start": 1966,
        "end": 1984,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 1966,
          "end": 1967,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 1968,
          "end": 1984,
          "decorators": [],
          "name": "propertyOnlyInI1",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1995,
      "end": 2014,
      "expression": {
        "type": "MemberExpression",
        "start": 1995,
        "end": 2013,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 1995,
          "end": 1996,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 1997,
          "end": 2013,
          "decorators": [],
          "name": "propertyOnlyInI2",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2024,
      "end": 2050,
      "expression": {
        "type": "CallExpression",
        "start": 2024,
        "end": 2049,
        "arguments": [
          {
            "type": "Literal",
            "start": 2041,
            "end": 2048,
            "raw": "\"hello\"",
            "value": "hello"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 2024,
          "end": 2040,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 2024,
            "end": 2025,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 2026,
            "end": 2040,
            "decorators": [],
            "name": "methodOnlyInI1",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2060,
      "end": 2081,
      "expression": {
        "type": "CallExpression",
        "start": 2060,
        "end": 2080,
        "arguments": [
          {
            "type": "Literal",
            "start": 2077,
            "end": 2079,
            "raw": "10",
            "value": 10
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 2060,
          "end": 2076,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 2060,
            "end": 2061,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 2062,
            "end": 2076,
            "decorators": [],
            "name": "methodOnlyInI2",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
