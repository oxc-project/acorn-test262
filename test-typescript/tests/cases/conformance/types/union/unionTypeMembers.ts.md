__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2089,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 413,
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 413,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 22,
            "end": 58,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 38,
              "decorators": [],
              "name": "commonMethodType",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 39,
                "end": 48,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 40,
                  "end": 48,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 42,
                    "end": 48
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 49,
              "end": 57,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 51,
                "end": 57
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSPropertySignature",
            "start": 63,
            "end": 90,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 63,
              "end": 81,
              "decorators": [],
              "name": "commonPropertyType",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 81,
              "end": 89,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 83,
                "end": 89
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 96,
            "end": 150,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 96,
              "end": 130,
              "decorators": [],
              "name": "commonMethodDifferentParameterType",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 131,
                "end": 140,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 132,
                  "end": 140,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 134,
                    "end": 140
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 141,
              "end": 149,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 143,
                "end": 149
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 155,
            "end": 206,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 155,
              "end": 186,
              "decorators": [],
              "name": "commonMethodDifferentReturnType",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 187,
                "end": 196,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 188,
                  "end": 196,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 190,
                    "end": 196
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 197,
              "end": 205,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 199,
                "end": 205
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSPropertySignature",
            "start": 211,
            "end": 246,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 211,
              "end": 237,
              "decorators": [],
              "name": "commonPropertyDifferenType",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 237,
              "end": 245,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 239,
                "end": 245
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 252,
            "end": 291,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 252,
              "end": 281,
              "decorators": [],
              "name": "commonMethodWithTypeParameter",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 282,
                "end": 286,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 283,
                  "end": 286,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 285,
                    "end": 286,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 285,
                      "end": 286,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 287,
              "end": 290,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 289,
                "end": 290,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 289,
                  "end": 290,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 296,
            "end": 341,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 296,
              "end": 328,
              "decorators": [],
              "name": "commonMethodWithOwnTypeParameter",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 332,
                "end": 336,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 333,
                  "end": 336,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 335,
                    "end": 336,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 335,
                      "end": 336,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 337,
              "end": 340,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 339,
                "end": 340,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 339,
                  "end": 340,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 328,
              "end": 331,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 329,
                  "end": 330,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 329,
                    "end": 330,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 347,
            "end": 381,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 347,
              "end": 361,
              "decorators": [],
              "name": "methodOnlyInI1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 362,
                "end": 371,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 363,
                  "end": 371,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 365,
                    "end": 371
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 372,
              "end": 380,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 374,
                "end": 380
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSPropertySignature",
            "start": 386,
            "end": 411,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 386,
              "end": 402,
              "decorators": [],
              "name": "propertyOnlyInI1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 402,
              "end": 410,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 404,
                "end": 410
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 415,
      "end": 828,
      "body": {
        "type": "TSInterfaceBody",
        "start": 431,
        "end": 828,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 437,
            "end": 473,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 437,
              "end": 453,
              "decorators": [],
              "name": "commonMethodType",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 454,
                "end": 463,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 455,
                  "end": 463,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 457,
                    "end": 463
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 464,
              "end": 472,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 466,
                "end": 472
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSPropertySignature",
            "start": 478,
            "end": 505,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 478,
              "end": 496,
              "decorators": [],
              "name": "commonPropertyType",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 496,
              "end": 504,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 498,
                "end": 504
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 511,
            "end": 565,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 511,
              "end": 545,
              "decorators": [],
              "name": "commonMethodDifferentParameterType",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 546,
                "end": 555,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 547,
                  "end": 555,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 549,
                    "end": 555
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 556,
              "end": 564,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 558,
                "end": 564
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 570,
            "end": 621,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 570,
              "end": 601,
              "decorators": [],
              "name": "commonMethodDifferentReturnType",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 602,
                "end": 611,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 603,
                  "end": 611,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 605,
                    "end": 611
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 612,
              "end": 620,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 614,
                "end": 620
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSPropertySignature",
            "start": 626,
            "end": 661,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 626,
              "end": 652,
              "decorators": [],
              "name": "commonPropertyDifferenType",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 652,
              "end": 660,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 654,
                "end": 660
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 667,
            "end": 706,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 667,
              "end": 696,
              "decorators": [],
              "name": "commonMethodWithTypeParameter",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 697,
                "end": 701,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 698,
                  "end": 701,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 700,
                    "end": 701,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 700,
                      "end": 701,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 702,
              "end": 705,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 704,
                "end": 705,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 704,
                  "end": 705,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 711,
            "end": 756,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 711,
              "end": 743,
              "decorators": [],
              "name": "commonMethodWithOwnTypeParameter",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 747,
                "end": 751,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 748,
                  "end": 751,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 750,
                    "end": 751,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 750,
                      "end": 751,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 752,
              "end": 755,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 754,
                "end": 755,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 754,
                  "end": 755,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 743,
              "end": 746,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 744,
                  "end": 745,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 744,
                    "end": 745,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 762,
            "end": 796,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 762,
              "end": 776,
              "decorators": [],
              "name": "methodOnlyInI2",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 777,
                "end": 786,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 778,
                  "end": 786,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 780,
                    "end": 786
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 787,
              "end": 795,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 789,
                "end": 795
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSPropertySignature",
            "start": 801,
            "end": 826,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 801,
              "end": 817,
              "decorators": [],
              "name": "propertyOnlyInI2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 817,
              "end": 825,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 819,
                "end": 825
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 425,
        "end": 427,
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 427,
        "end": 430,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 428,
            "end": 429,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 428,
              "end": 429,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1004,
      "end": 1036,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1008,
          "end": 1035,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1008,
            "end": 1035,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1010,
              "end": 1035,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1012,
                "end": 1035,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1012,
                    "end": 1022,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1014,
                      "end": 1022,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1015,
                          "end": 1021
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1012,
                      "end": 1014,
                      "decorators": [],
                      "name": "I1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1025,
                    "end": 1035,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1027,
                      "end": 1035,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1028,
                          "end": 1034
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1025,
                      "end": 1027,
                      "decorators": [],
                      "name": "I2",
                      "optional": false,
                      "typeAnnotation": null
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
      "start": 1037,
      "end": 1053,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1041,
          "end": 1052,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1041,
            "end": 1052,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1044,
              "end": 1052,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1046,
                "end": 1052
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
      "start": 1054,
      "end": 1070,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1058,
          "end": 1069,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1058,
            "end": 1069,
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1061,
              "end": 1069,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1063,
                "end": 1069
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
      "start": 1071,
      "end": 1101,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1075,
          "end": 1100,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1075,
            "end": 1100,
            "decorators": [],
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1083,
              "end": 1100,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1085,
                "end": 1100,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1085,
                    "end": 1091
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1094,
                    "end": 1100
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
      "start": 1216,
      "end": 1243,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1216,
        "end": 1242,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1216,
          "end": 1219,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 1222,
          "end": 1242,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1222,
            "end": 1223,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1224,
            "end": 1242,
            "decorators": [],
            "name": "commonPropertyType",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1254,
      "end": 1284,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1254,
        "end": 1283,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1254,
          "end": 1257,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1260,
          "end": 1283,
          "arguments": [
            {
              "type": "Identifier",
              "start": 1279,
              "end": 1282,
              "decorators": [],
              "name": "str",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 1260,
            "end": 1278,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1260,
              "end": 1261,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1262,
              "end": 1278,
              "decorators": [],
              "name": "commonMethodType",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1337,
      "end": 1377,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1337,
        "end": 1376,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1337,
          "end": 1345,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 1348,
          "end": 1376,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1348,
            "end": 1349,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1350,
            "end": 1376,
            "decorators": [],
            "name": "commonPropertyDifferenType",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1378,
      "end": 1428,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1378,
        "end": 1427,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1378,
          "end": 1386,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1389,
          "end": 1427,
          "arguments": [
            {
              "type": "Identifier",
              "start": 1423,
              "end": 1426,
              "decorators": [],
              "name": "str",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 1389,
            "end": 1422,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1389,
              "end": 1390,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1391,
              "end": 1422,
              "decorators": [],
              "name": "commonMethodDifferentReturnType",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1447,
      "end": 1484,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 1447,
        "end": 1483,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 1447,
          "end": 1448,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 1449,
          "end": 1483,
          "decorators": [],
          "name": "commonMethodDifferentParameterType",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1515,
      "end": 1562,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1515,
        "end": 1561,
        "arguments": [
          {
            "type": "Identifier",
            "start": 1552,
            "end": 1560,
            "decorators": [],
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1515,
          "end": 1551,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1515,
            "end": 1516,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1517,
            "end": 1551,
            "decorators": [],
            "name": "commonMethodDifferentParameterType",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1769,
      "end": 1812,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1769,
        "end": 1811,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1769,
          "end": 1772,
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1775,
          "end": 1811,
          "arguments": [
            {
              "type": "Identifier",
              "start": 1807,
              "end": 1810,
              "decorators": [],
              "name": "num",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 1775,
            "end": 1806,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1775,
              "end": 1776,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1777,
              "end": 1806,
              "decorators": [],
              "name": "commonMethodWithTypeParameter",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1813,
      "end": 1859,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1813,
        "end": 1858,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1813,
          "end": 1816,
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1819,
          "end": 1858,
          "arguments": [
            {
              "type": "Identifier",
              "start": 1854,
              "end": 1857,
              "decorators": [],
              "name": "num",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 1819,
            "end": 1853,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1819,
              "end": 1820,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1821,
              "end": 1853,
              "decorators": [],
              "name": "commonMethodWithOwnTypeParameter",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1860,
      "end": 1906,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1860,
        "end": 1905,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1860,
          "end": 1863,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1866,
          "end": 1905,
          "arguments": [
            {
              "type": "Identifier",
              "start": 1901,
              "end": 1904,
              "decorators": [],
              "name": "str",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 1866,
            "end": 1900,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1866,
              "end": 1867,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1868,
              "end": 1900,
              "decorators": [],
              "name": "commonMethodWithOwnTypeParameter",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1907,
      "end": 1963,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1907,
        "end": 1962,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1907,
          "end": 1915,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1918,
          "end": 1962,
          "arguments": [
            {
              "type": "Identifier",
              "start": 1953,
              "end": 1961,
              "decorators": [],
              "name": "strOrNum",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 1918,
            "end": 1952,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1918,
              "end": 1919,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1920,
              "end": 1952,
              "decorators": [],
              "name": "commonMethodWithOwnTypeParameter",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1965,
      "end": 1984,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 1965,
        "end": 1983,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 1965,
          "end": 1966,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 1967,
          "end": 1983,
          "decorators": [],
          "name": "propertyOnlyInI1",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1994,
      "end": 2013,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 1994,
        "end": 2012,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 1994,
          "end": 1995,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 1996,
          "end": 2012,
          "decorators": [],
          "name": "propertyOnlyInI2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2023,
      "end": 2049,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 2023,
        "end": 2048,
        "arguments": [
          {
            "type": "Literal",
            "start": 2040,
            "end": 2047,
            "raw": "\"hello\"",
            "value": "hello"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 2023,
          "end": 2039,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 2023,
            "end": 2024,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 2025,
            "end": 2039,
            "decorators": [],
            "name": "methodOnlyInI1",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2059,
      "end": 2080,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 2059,
        "end": 2079,
        "arguments": [
          {
            "type": "Literal",
            "start": 2076,
            "end": 2078,
            "raw": "10",
            "value": 10
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 2059,
          "end": 2075,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 2059,
            "end": 2060,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 2061,
            "end": 2075,
            "decorators": [],
            "name": "methodOnlyInI2",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
