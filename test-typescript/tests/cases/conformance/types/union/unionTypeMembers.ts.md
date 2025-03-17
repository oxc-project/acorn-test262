__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 13,
        "name": "I1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 13,
        "end": 16,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 15,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 414,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 23,
            "end": 59,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 39,
              "name": "commonMethodType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 40,
                "end": 49,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 41,
                  "end": 49,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 43,
                    "end": 49
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 64,
            "end": 91,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 64,
              "end": 82,
              "name": "commonPropertyType",
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
          },
          {
            "type": "TSMethodSignature",
            "start": 97,
            "end": 151,
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 131,
              "name": "commonMethodDifferentParameterType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 132,
                "end": 141,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 133,
                  "end": 141,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 135,
                    "end": 141
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 156,
            "end": 207,
            "key": {
              "type": "Identifier",
              "start": 156,
              "end": 187,
              "name": "commonMethodDifferentReturnType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 188,
                "end": 197,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 189,
                  "end": 197,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 191,
                    "end": 197
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 212,
            "end": 247,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 212,
              "end": 238,
              "name": "commonPropertyDifferenType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 238,
              "end": 246,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 240,
                "end": 246
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 253,
            "end": 292,
            "key": {
              "type": "Identifier",
              "start": 253,
              "end": 282,
              "name": "commonMethodWithTypeParameter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 283,
                "end": 287,
                "name": "a",
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "start": 297,
            "end": 342,
            "key": {
              "type": "Identifier",
              "start": 297,
              "end": 329,
              "name": "commonMethodWithOwnTypeParameter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 329,
              "end": 332,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 330,
                  "end": 331,
                  "name": {
                    "type": "Identifier",
                    "start": 330,
                    "end": 331,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                "start": 333,
                "end": 337,
                "name": "a",
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
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
                  "name": "U",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "start": 348,
            "end": 382,
            "key": {
              "type": "Identifier",
              "start": 348,
              "end": 362,
              "name": "methodOnlyInI1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 363,
                "end": 372,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 364,
                  "end": 372,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 366,
                    "end": 372
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 387,
            "end": 412,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 387,
              "end": 403,
              "name": "propertyOnlyInI1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 403,
              "end": 411,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 405,
                "end": 411
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
      "start": 416,
      "end": 829,
      "id": {
        "type": "Identifier",
        "start": 426,
        "end": 428,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 428,
        "end": 431,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 429,
            "end": 430,
            "name": {
              "type": "Identifier",
              "start": 429,
              "end": 430,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 432,
        "end": 829,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 438,
            "end": 474,
            "key": {
              "type": "Identifier",
              "start": 438,
              "end": 454,
              "name": "commonMethodType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 455,
                "end": 464,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 456,
                  "end": 464,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 458,
                    "end": 464
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 479,
            "end": 506,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 479,
              "end": 497,
              "name": "commonPropertyType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 497,
              "end": 505,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 499,
                "end": 505
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 512,
            "end": 566,
            "key": {
              "type": "Identifier",
              "start": 512,
              "end": 546,
              "name": "commonMethodDifferentParameterType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 547,
                "end": 556,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 548,
                  "end": 556,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 550,
                    "end": 556
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 571,
            "end": 622,
            "key": {
              "type": "Identifier",
              "start": 571,
              "end": 602,
              "name": "commonMethodDifferentReturnType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 603,
                "end": 612,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 604,
                  "end": 612,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 606,
                    "end": 612
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 627,
            "end": 662,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 627,
              "end": 653,
              "name": "commonPropertyDifferenType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 653,
              "end": 661,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 655,
                "end": 661
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 668,
            "end": 707,
            "key": {
              "type": "Identifier",
              "start": 668,
              "end": 697,
              "name": "commonMethodWithTypeParameter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 698,
                "end": 702,
                "name": "a",
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "start": 712,
            "end": 757,
            "key": {
              "type": "Identifier",
              "start": 712,
              "end": 744,
              "name": "commonMethodWithOwnTypeParameter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 744,
              "end": 747,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 745,
                  "end": 746,
                  "name": {
                    "type": "Identifier",
                    "start": 745,
                    "end": 746,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                "start": 748,
                "end": 752,
                "name": "a",
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
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
                  "name": "U",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "start": 763,
            "end": 797,
            "key": {
              "type": "Identifier",
              "start": 763,
              "end": 777,
              "name": "methodOnlyInI2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 778,
                "end": 787,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 779,
                  "end": 787,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 781,
                    "end": 787
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 802,
            "end": 827,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 802,
              "end": 818,
              "name": "propertyOnlyInI2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 818,
              "end": 826,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 820,
                "end": 826
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
      "start": 1005,
      "end": 1037,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1009,
          "end": 1036,
          "id": {
            "type": "Identifier",
            "start": 1009,
            "end": 1036,
            "name": "x",
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 1013,
                      "end": 1015,
                      "name": "I1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1026,
                    "end": 1036,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1026,
                      "end": 1028,
                      "name": "I2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1042,
            "end": 1053,
            "name": "str",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1045,
              "end": 1053,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1047,
                "end": 1053
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1059,
            "end": 1070,
            "name": "num",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1062,
              "end": 1070,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1064,
                "end": 1070
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1076,
            "end": 1101,
            "name": "strOrNum",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 1223,
          "end": 1243,
          "object": {
            "type": "Identifier",
            "start": 1223,
            "end": 1224,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1225,
            "end": 1243,
            "name": "commonPropertyType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
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
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1261,
          "end": 1284,
          "callee": {
            "type": "MemberExpression",
            "start": 1261,
            "end": 1279,
            "object": {
              "type": "Identifier",
              "start": 1261,
              "end": 1262,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1263,
              "end": 1279,
              "name": "commonMethodType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "Identifier",
              "start": 1280,
              "end": 1283,
              "name": "str",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
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
          "name": "strOrNum",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 1349,
          "end": 1377,
          "object": {
            "type": "Identifier",
            "start": 1349,
            "end": 1350,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1351,
            "end": 1377,
            "name": "commonPropertyDifferenType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
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
          "name": "strOrNum",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1390,
          "end": 1428,
          "callee": {
            "type": "MemberExpression",
            "start": 1390,
            "end": 1423,
            "object": {
              "type": "Identifier",
              "start": 1390,
              "end": 1391,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1392,
              "end": 1423,
              "name": "commonMethodDifferentReturnType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "Identifier",
              "start": 1424,
              "end": 1427,
              "name": "str",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1448,
      "end": 1485,
      "expression": {
        "type": "MemberExpression",
        "start": 1448,
        "end": 1484,
        "object": {
          "type": "Identifier",
          "start": 1448,
          "end": 1449,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 1450,
          "end": 1484,
          "name": "commonMethodDifferentParameterType",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1516,
      "end": 1563,
      "expression": {
        "type": "CallExpression",
        "start": 1516,
        "end": 1562,
        "callee": {
          "type": "MemberExpression",
          "start": 1516,
          "end": 1552,
          "object": {
            "type": "Identifier",
            "start": 1516,
            "end": 1517,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1518,
            "end": 1552,
            "name": "commonMethodDifferentParameterType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 1553,
            "end": 1561,
            "name": "strOrNum",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
          "name": "num",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1776,
          "end": 1812,
          "callee": {
            "type": "MemberExpression",
            "start": 1776,
            "end": 1807,
            "object": {
              "type": "Identifier",
              "start": 1776,
              "end": 1777,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1778,
              "end": 1807,
              "name": "commonMethodWithTypeParameter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "Identifier",
              "start": 1808,
              "end": 1811,
              "name": "num",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
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
          "name": "num",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1820,
          "end": 1859,
          "callee": {
            "type": "MemberExpression",
            "start": 1820,
            "end": 1854,
            "object": {
              "type": "Identifier",
              "start": 1820,
              "end": 1821,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1822,
              "end": 1854,
              "name": "commonMethodWithOwnTypeParameter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "Identifier",
              "start": 1855,
              "end": 1858,
              "name": "num",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
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
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1867,
          "end": 1906,
          "callee": {
            "type": "MemberExpression",
            "start": 1867,
            "end": 1901,
            "object": {
              "type": "Identifier",
              "start": 1867,
              "end": 1868,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1869,
              "end": 1901,
              "name": "commonMethodWithOwnTypeParameter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "Identifier",
              "start": 1902,
              "end": 1905,
              "name": "str",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
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
          "name": "strOrNum",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 1919,
          "end": 1963,
          "callee": {
            "type": "MemberExpression",
            "start": 1919,
            "end": 1953,
            "object": {
              "type": "Identifier",
              "start": 1919,
              "end": 1920,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1921,
              "end": 1953,
              "name": "commonMethodWithOwnTypeParameter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "Identifier",
              "start": 1954,
              "end": 1962,
              "name": "strOrNum",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1966,
      "end": 1985,
      "expression": {
        "type": "MemberExpression",
        "start": 1966,
        "end": 1984,
        "object": {
          "type": "Identifier",
          "start": 1966,
          "end": 1967,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 1968,
          "end": 1984,
          "name": "propertyOnlyInI1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1995,
      "end": 2014,
      "expression": {
        "type": "MemberExpression",
        "start": 1995,
        "end": 2013,
        "object": {
          "type": "Identifier",
          "start": 1995,
          "end": 1996,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 1997,
          "end": 2013,
          "name": "propertyOnlyInI2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2024,
      "end": 2050,
      "expression": {
        "type": "CallExpression",
        "start": 2024,
        "end": 2049,
        "callee": {
          "type": "MemberExpression",
          "start": 2024,
          "end": 2040,
          "object": {
            "type": "Identifier",
            "start": 2024,
            "end": 2025,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 2026,
            "end": 2040,
            "name": "methodOnlyInI1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 2041,
            "end": 2048,
            "value": "hello",
            "raw": "\"hello\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2060,
      "end": 2081,
      "expression": {
        "type": "CallExpression",
        "start": 2060,
        "end": 2080,
        "callee": {
          "type": "MemberExpression",
          "start": 2060,
          "end": 2076,
          "object": {
            "type": "Identifier",
            "start": 2060,
            "end": 2061,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 2062,
            "end": 2076,
            "name": "methodOnlyInI2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 2077,
            "end": 2079,
            "value": 10,
            "raw": "10"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
