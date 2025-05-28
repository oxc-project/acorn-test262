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
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 413,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 22,
            "end": 58,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 38,
              "decorators": [],
              "name": "commonMethodType",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 63,
            "end": 90,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 63,
              "end": 81,
              "decorators": [],
              "name": "commonPropertyType",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 81,
              "end": 89,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 83,
                "end": 89
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 96,
            "end": 150,
            "key": {
              "type": "Identifier",
              "start": 96,
              "end": 130,
              "decorators": [],
              "name": "commonMethodDifferentParameterType",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 155,
            "end": 206,
            "key": {
              "type": "Identifier",
              "start": 155,
              "end": 186,
              "decorators": [],
              "name": "commonMethodDifferentReturnType",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 211,
            "end": 246,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 211,
              "end": 237,
              "decorators": [],
              "name": "commonPropertyDifferenType",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 237,
              "end": 245,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 239,
                "end": 245
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 252,
            "end": 291,
            "key": {
              "type": "Identifier",
              "start": 252,
              "end": 281,
              "decorators": [],
              "name": "commonMethodWithTypeParameter",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 285,
                      "end": 286,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 287,
              "end": 290,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 289,
                "end": 290,
                "typeName": {
                  "type": "Identifier",
                  "start": 289,
                  "end": 290,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 296,
            "end": 341,
            "key": {
              "type": "Identifier",
              "start": 296,
              "end": 328,
              "decorators": [],
              "name": "commonMethodWithOwnTypeParameter",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 328,
              "end": 331,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 329,
                  "end": 330,
                  "name": {
                    "type": "Identifier",
                    "start": 329,
                    "end": 330,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 335,
                      "end": 336,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 337,
              "end": 340,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 339,
                "end": 340,
                "typeName": {
                  "type": "Identifier",
                  "start": 339,
                  "end": 340,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 347,
            "end": 381,
            "key": {
              "type": "Identifier",
              "start": 347,
              "end": 361,
              "decorators": [],
              "name": "methodOnlyInI1",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 386,
            "end": 411,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 386,
              "end": 402,
              "decorators": [],
              "name": "propertyOnlyInI1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 402,
              "end": 410,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 404,
                "end": 410
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
      "start": 415,
      "end": 828,
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
            "name": {
              "type": "Identifier",
              "start": 428,
              "end": 429,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 431,
        "end": 828,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 437,
            "end": 473,
            "key": {
              "type": "Identifier",
              "start": 437,
              "end": 453,
              "decorators": [],
              "name": "commonMethodType",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 478,
            "end": 505,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 478,
              "end": 496,
              "decorators": [],
              "name": "commonPropertyType",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 496,
              "end": 504,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 498,
                "end": 504
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 511,
            "end": 565,
            "key": {
              "type": "Identifier",
              "start": 511,
              "end": 545,
              "decorators": [],
              "name": "commonMethodDifferentParameterType",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 570,
            "end": 621,
            "key": {
              "type": "Identifier",
              "start": 570,
              "end": 601,
              "decorators": [],
              "name": "commonMethodDifferentReturnType",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 626,
            "end": 661,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 626,
              "end": 652,
              "decorators": [],
              "name": "commonPropertyDifferenType",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 652,
              "end": 660,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 654,
                "end": 660
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 667,
            "end": 706,
            "key": {
              "type": "Identifier",
              "start": 667,
              "end": 696,
              "decorators": [],
              "name": "commonMethodWithTypeParameter",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 700,
                      "end": 701,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 702,
              "end": 705,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 704,
                "end": 705,
                "typeName": {
                  "type": "Identifier",
                  "start": 704,
                  "end": 705,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 711,
            "end": 756,
            "key": {
              "type": "Identifier",
              "start": 711,
              "end": 743,
              "decorators": [],
              "name": "commonMethodWithOwnTypeParameter",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 743,
              "end": 746,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 744,
                  "end": 745,
                  "name": {
                    "type": "Identifier",
                    "start": 744,
                    "end": 745,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 750,
                      "end": 751,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 752,
              "end": 755,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 754,
                "end": 755,
                "typeName": {
                  "type": "Identifier",
                  "start": 754,
                  "end": 755,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 762,
            "end": 796,
            "key": {
              "type": "Identifier",
              "start": 762,
              "end": 776,
              "decorators": [],
              "name": "methodOnlyInI2",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 801,
            "end": 826,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 801,
              "end": 817,
              "decorators": [],
              "name": "propertyOnlyInI2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 817,
              "end": 825,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 819,
                "end": 825
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
      "type": "VariableDeclaration",
      "start": 1004,
      "end": 1036,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1008,
          "end": 1035,
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 1012,
                      "end": 1014,
                      "decorators": [],
                      "name": "I1",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1025,
                    "end": 1035,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1025,
                      "end": 1027,
                      "decorators": [],
                      "name": "I2",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                    }
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1037,
      "end": 1053,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1041,
          "end": 1052,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1054,
      "end": 1070,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1058,
          "end": 1069,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1071,
      "end": 1101,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1075,
          "end": 1100,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1216,
      "end": 1243,
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
          "object": {
            "type": "Identifier",
            "start": 1222,
            "end": 1223,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1224,
            "end": 1242,
            "decorators": [],
            "name": "commonPropertyType",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1254,
      "end": 1284,
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
          "callee": {
            "type": "MemberExpression",
            "start": 1260,
            "end": 1278,
            "object": {
              "type": "Identifier",
              "start": 1260,
              "end": 1261,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1262,
              "end": 1278,
              "decorators": [],
              "name": "commonMethodType",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
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
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1337,
      "end": 1377,
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
          "object": {
            "type": "Identifier",
            "start": 1348,
            "end": 1349,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1350,
            "end": 1376,
            "decorators": [],
            "name": "commonPropertyDifferenType",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1378,
      "end": 1428,
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
          "callee": {
            "type": "MemberExpression",
            "start": 1389,
            "end": 1422,
            "object": {
              "type": "Identifier",
              "start": 1389,
              "end": 1390,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1391,
              "end": 1422,
              "decorators": [],
              "name": "commonMethodDifferentReturnType",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
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
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1447,
      "end": 1484,
      "expression": {
        "type": "MemberExpression",
        "start": 1447,
        "end": 1483,
        "object": {
          "type": "Identifier",
          "start": 1447,
          "end": 1448,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 1449,
          "end": 1483,
          "decorators": [],
          "name": "commonMethodDifferentParameterType",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1515,
      "end": 1562,
      "expression": {
        "type": "CallExpression",
        "start": 1515,
        "end": 1561,
        "callee": {
          "type": "MemberExpression",
          "start": 1515,
          "end": 1551,
          "object": {
            "type": "Identifier",
            "start": 1515,
            "end": 1516,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1517,
            "end": 1551,
            "decorators": [],
            "name": "commonMethodDifferentParameterType",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1769,
      "end": 1812,
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
          "callee": {
            "type": "MemberExpression",
            "start": 1775,
            "end": 1806,
            "object": {
              "type": "Identifier",
              "start": 1775,
              "end": 1776,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1777,
              "end": 1806,
              "decorators": [],
              "name": "commonMethodWithTypeParameter",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
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
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1813,
      "end": 1859,
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
          "callee": {
            "type": "MemberExpression",
            "start": 1819,
            "end": 1853,
            "object": {
              "type": "Identifier",
              "start": 1819,
              "end": 1820,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1821,
              "end": 1853,
              "decorators": [],
              "name": "commonMethodWithOwnTypeParameter",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
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
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1860,
      "end": 1906,
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
          "callee": {
            "type": "MemberExpression",
            "start": 1866,
            "end": 1900,
            "object": {
              "type": "Identifier",
              "start": 1866,
              "end": 1867,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1868,
              "end": 1900,
              "decorators": [],
              "name": "commonMethodWithOwnTypeParameter",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
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
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1907,
      "end": 1963,
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
          "callee": {
            "type": "MemberExpression",
            "start": 1918,
            "end": 1952,
            "object": {
              "type": "Identifier",
              "start": 1918,
              "end": 1919,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1920,
              "end": 1952,
              "decorators": [],
              "name": "commonMethodWithOwnTypeParameter",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
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
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1965,
      "end": 1984,
      "expression": {
        "type": "MemberExpression",
        "start": 1965,
        "end": 1983,
        "object": {
          "type": "Identifier",
          "start": 1965,
          "end": 1966,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 1967,
          "end": 1983,
          "decorators": [],
          "name": "propertyOnlyInI1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1994,
      "end": 2013,
      "expression": {
        "type": "MemberExpression",
        "start": 1994,
        "end": 2012,
        "object": {
          "type": "Identifier",
          "start": 1994,
          "end": 1995,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 1996,
          "end": 2012,
          "decorators": [],
          "name": "propertyOnlyInI2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2023,
      "end": 2049,
      "expression": {
        "type": "CallExpression",
        "start": 2023,
        "end": 2048,
        "callee": {
          "type": "MemberExpression",
          "start": 2023,
          "end": 2039,
          "object": {
            "type": "Identifier",
            "start": 2023,
            "end": 2024,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 2025,
            "end": 2039,
            "decorators": [],
            "name": "methodOnlyInI1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 2040,
            "end": 2047,
            "value": "hello",
            "raw": "\"hello\""
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2059,
      "end": 2080,
      "expression": {
        "type": "CallExpression",
        "start": 2059,
        "end": 2079,
        "callee": {
          "type": "MemberExpression",
          "start": 2059,
          "end": 2075,
          "object": {
            "type": "Identifier",
            "start": 2059,
            "end": 2060,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 2061,
            "end": 2075,
            "decorators": [],
            "name": "methodOnlyInI2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 2076,
            "end": 2078,
            "value": 10,
            "raw": "10"
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
