__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1228,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 45,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 19,
        "decorators": [],
        "name": "ComputedGetter",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 22,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 21,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
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
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 25,
        "end": 44,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 26,
            "end": 38,
            "decorators": [],
            "name": "oldValue",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 38,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 37,
                "end": 38,
                "typeName": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 38,
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
          "start": 40,
          "end": 44,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 43,
            "end": 44,
            "typeName": {
              "type": "Identifier",
              "start": 43,
              "end": 44,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 46,
      "end": 105,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 66,
        "decorators": [],
        "name": "ComputedOptions",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 69,
        "end": 104,
        "typeName": {
          "type": "Identifier",
          "start": 69,
          "end": 75,
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 75,
          "end": 104,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 76,
              "end": 82
            },
            {
              "type": "TSTypeReference",
              "start": 84,
              "end": 103,
              "typeName": {
                "type": "Identifier",
                "start": 84,
                "end": 98,
                "decorators": [],
                "name": "ComputedGetter",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 98,
                "end": 103,
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 99,
                    "end": 102
                  }
                ]
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 107,
      "end": 252,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 134,
        "decorators": [],
        "name": "ExtractComputedReturns",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 134,
        "end": 149,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 135,
            "end": 148,
            "name": {
              "type": "Identifier",
              "start": 135,
              "end": 136,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSAnyKeyword",
              "start": 145,
              "end": 148
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 152,
        "end": 251,
        "key": {
          "type": "Identifier",
          "start": 157,
          "end": 160,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 164,
          "end": 171,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 170,
            "end": 171,
            "typeName": {
              "type": "Identifier",
              "start": 170,
              "end": 171,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 174,
          "end": 248,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 174,
            "end": 180,
            "objectType": {
              "type": "TSTypeReference",
              "start": 174,
              "end": 175,
              "typeName": {
                "type": "Identifier",
                "start": 174,
                "end": 175,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 176,
              "end": 179,
              "typeName": {
                "type": "Identifier",
                "start": 176,
                "end": 179,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "extendsType": {
            "type": "TSFunctionType",
            "start": 189,
            "end": 222,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "start": 190,
                "end": 204,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 197,
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 197,
                  "end": 204,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 199,
                    "end": 204,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 199,
                      "end": 202
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 206,
              "end": 222,
              "typeAnnotation": {
                "type": "TSInferType",
                "start": 209,
                "end": 222,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 215,
                  "end": 222,
                  "name": {
                    "type": "Identifier",
                    "start": 215,
                    "end": 222,
                    "decorators": [],
                    "name": "TReturn",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              }
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 229,
            "end": 236,
            "typeName": {
              "type": "Identifier",
              "start": 229,
              "end": 236,
              "decorators": [],
              "name": "TReturn",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 243,
            "end": 248
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 254,
      "end": 346,
      "id": {
        "type": "Identifier",
        "start": 264,
        "end": 284,
        "decorators": [],
        "name": "ComponentOptionsBase",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 284,
        "end": 314,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 285,
            "end": 286,
            "name": {
              "type": "Identifier",
              "start": 285,
              "end": 286,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 288,
            "end": 313,
            "name": {
              "type": "Identifier",
              "start": 288,
              "end": 289,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 298,
              "end": 313,
              "typeName": {
                "type": "Identifier",
                "start": 298,
                "end": 313,
                "decorators": [],
                "name": "ComputedOptions",
                "optional": false,
                "typeAnnotation": null
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 315,
        "end": 346,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 319,
            "end": 328,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 319,
              "end": 323,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 324,
              "end": 327,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 326,
                "end": 327,
                "typeName": {
                  "type": "Identifier",
                  "start": 326,
                  "end": 327,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 331,
            "end": 344,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 331,
              "end": 339,
              "decorators": [],
              "name": "computed",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 340,
              "end": 343,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 342,
                "end": 343,
                "typeName": {
                  "type": "Identifier",
                  "start": 342,
                  "end": 343,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "type": "TSTypeAliasDeclaration",
      "start": 348,
      "end": 451,
      "id": {
        "type": "Identifier",
        "start": 353,
        "end": 376,
        "decorators": [],
        "name": "ComponentPublicInstance",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 376,
        "end": 416,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 377,
            "end": 383,
            "name": {
              "type": "Identifier",
              "start": 377,
              "end": 378,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "start": 381,
              "end": 383,
              "members": []
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 385,
            "end": 415,
            "name": {
              "type": "Identifier",
              "start": 385,
              "end": 386,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 395,
              "end": 410,
              "typeName": {
                "type": "Identifier",
                "start": 395,
                "end": 410,
                "decorators": [],
                "name": "ComputedOptions",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": {
              "type": "TSTypeLiteral",
              "start": 413,
              "end": 415,
              "members": []
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 419,
        "end": 450,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 419,
            "end": 420,
            "typeName": {
              "type": "Identifier",
              "start": 419,
              "end": 420,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 425,
            "end": 450,
            "typeName": {
              "type": "Identifier",
              "start": 425,
              "end": 447,
              "decorators": [],
              "name": "ExtractComputedReturns",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 447,
              "end": 450,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 448,
                  "end": 449,
                  "typeName": {
                    "type": "Identifier",
                    "start": 448,
                    "end": 449,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 453,
      "end": 595,
      "id": {
        "type": "Identifier",
        "start": 458,
        "end": 474,
        "decorators": [],
        "name": "ComponentOptions",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 474,
        "end": 523,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 478,
            "end": 485,
            "name": {
              "type": "Identifier",
              "start": 478,
              "end": 479,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 482,
              "end": 485
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 489,
            "end": 520,
            "name": {
              "type": "Identifier",
              "start": 489,
              "end": 490,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 499,
              "end": 514,
              "typeName": {
                "type": "Identifier",
                "start": 499,
                "end": 514,
                "decorators": [],
                "name": "ComputedOptions",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": {
              "type": "TSAnyKeyword",
              "start": 517,
              "end": 520
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 526,
        "end": 594,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 526,
            "end": 552,
            "typeName": {
              "type": "Identifier",
              "start": 526,
              "end": 546,
              "decorators": [],
              "name": "ComponentOptionsBase",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 546,
              "end": 552,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 547,
                  "end": 548,
                  "typeName": {
                    "type": "Identifier",
                    "start": 547,
                    "end": 548,
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 550,
                  "end": 551,
                  "typeName": {
                    "type": "Identifier",
                    "start": 550,
                    "end": 551,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "TSTypeReference",
            "start": 555,
            "end": 594,
            "typeName": {
              "type": "Identifier",
              "start": 555,
              "end": 563,
              "decorators": [],
              "name": "ThisType",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 563,
              "end": 594,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 564,
                  "end": 593,
                  "typeName": {
                    "type": "Identifier",
                    "start": 564,
                    "end": 587,
                    "decorators": [],
                    "name": "ComponentPublicInstance",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 587,
                    "end": 593,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 588,
                        "end": 589,
                        "typeName": {
                          "type": "Identifier",
                          "start": 588,
                          "end": 589,
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 591,
                        "end": 592,
                        "typeName": {
                          "type": "Identifier",
                          "start": 591,
                          "end": 592,
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 597,
      "end": 654,
      "id": {
        "type": "Identifier",
        "start": 607,
        "end": 610,
        "decorators": [],
        "name": "App",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 611,
        "end": 654,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 615,
            "end": 652,
            "key": {
              "type": "Identifier",
              "start": 615,
              "end": 620,
              "decorators": [],
              "name": "mixin",
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
                "start": 621,
                "end": 644,
                "decorators": [],
                "name": "mixin",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 626,
                  "end": 644,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 628,
                    "end": 644,
                    "typeName": {
                      "type": "Identifier",
                      "start": 628,
                      "end": 644,
                      "decorators": [],
                      "name": "ComponentOptions",
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
              "start": 645,
              "end": 651,
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 647,
                "end": 651
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 656,
      "end": 699,
      "id": {
        "type": "Identifier",
        "start": 666,
        "end": 678,
        "decorators": [],
        "name": "InjectionKey",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 678,
        "end": 681,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 679,
            "end": 680,
            "name": {
              "type": "Identifier",
              "start": 679,
              "end": 680,
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
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 690,
          "end": 696,
          "expression": {
            "type": "Identifier",
            "start": 690,
            "end": 696,
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 697,
        "end": 699,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 701,
      "end": 730,
      "id": {
        "type": "Identifier",
        "start": 711,
        "end": 714,
        "decorators": [],
        "name": "Ref",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 714,
        "end": 717,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 715,
            "end": 716,
            "name": {
              "type": "Identifier",
              "start": 715,
              "end": 716,
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
        "start": 718,
        "end": 730,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 722,
            "end": 728,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 722,
              "end": 724,
              "decorators": [],
              "name": "_v",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 724,
              "end": 727,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 726,
                "end": 727,
                "typeName": {
                  "type": "Identifier",
                  "start": 726,
                  "end": 727,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "type": "TSDeclareFunction",
      "start": 732,
      "end": 795,
      "id": {
        "type": "Identifier",
        "start": 749,
        "end": 757,
        "decorators": [],
        "name": "reactive",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 757,
        "end": 775,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 758,
            "end": 774,
            "name": {
              "type": "Identifier",
              "start": 758,
              "end": 759,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 768,
              "end": 774
            },
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
          "start": 776,
          "end": 785,
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 782,
            "end": 785,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 784,
              "end": 785,
              "typeName": {
                "type": "Identifier",
                "start": 784,
                "end": 785,
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
        "start": 786,
        "end": 794,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 788,
          "end": 794,
          "typeName": {
            "type": "Identifier",
            "start": 788,
            "end": 791,
            "decorators": [],
            "name": "Ref",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 791,
            "end": 794,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 792,
                "end": 793,
                "typeName": {
                  "type": "Identifier",
                  "start": 792,
                  "end": 793,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 797,
      "end": 864,
      "id": {
        "type": "Identifier",
        "start": 807,
        "end": 820,
        "decorators": [],
        "name": "ThemeInstance",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 821,
        "end": 864,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 825,
            "end": 862,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 834,
              "end": 838,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 838,
              "end": 861,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 840,
                "end": 861,
                "typeName": {
                  "type": "Identifier",
                  "start": 840,
                  "end": 848,
                  "decorators": [],
                  "name": "Readonly",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 848,
                  "end": 861,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 849,
                      "end": 860,
                      "typeName": {
                        "type": "Identifier",
                        "start": 849,
                        "end": 852,
                        "decorators": [],
                        "name": "Ref",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 852,
                        "end": 860,
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 853,
                            "end": 859
                          }
                        ]
                      }
                    }
                  ]
                }
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
      "start": 866,
      "end": 921,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 880,
          "end": 920,
          "id": {
            "type": "Identifier",
            "start": 880,
            "end": 920,
            "decorators": [],
            "name": "ThemeSymbol",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 891,
              "end": 920,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 893,
                "end": 920,
                "typeName": {
                  "type": "Identifier",
                  "start": 893,
                  "end": 905,
                  "decorators": [],
                  "name": "InjectionKey",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 905,
                  "end": 920,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 906,
                      "end": 919,
                      "typeName": {
                        "type": "Identifier",
                        "start": 906,
                        "end": 919,
                        "decorators": [],
                        "name": "ThemeInstance",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "TSDeclareFunction",
      "start": 923,
      "end": 1023,
      "id": {
        "type": "Identifier",
        "start": 940,
        "end": 946,
        "decorators": [],
        "name": "inject",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 950,
          "end": 979,
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 954,
            "end": 979,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 956,
              "end": 979,
              "typeName": {
                "type": "Identifier",
                "start": 956,
                "end": 979,
                "decorators": [],
                "name": "ComponentPublicInstance",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 983,
          "end": 1014,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 986,
            "end": 1014,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 988,
              "end": 1014,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 988,
                  "end": 1005,
                  "typeName": {
                    "type": "Identifier",
                    "start": 988,
                    "end": 1000,
                    "decorators": [],
                    "name": "InjectionKey",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1000,
                    "end": 1005,
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 1001,
                        "end": 1004
                      }
                    ]
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1008,
                  "end": 1014
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1017,
        "end": 1022,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1019,
          "end": 1022
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1025,
      "end": 1048,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1039,
          "end": 1047,
          "id": {
            "type": "Identifier",
            "start": 1039,
            "end": 1047,
            "decorators": [],
            "name": "app",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1042,
              "end": 1047,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1044,
                "end": 1047,
                "typeName": {
                  "type": "Identifier",
                  "start": 1044,
                  "end": 1047,
                  "decorators": [],
                  "name": "App",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 1049,
      "end": 1228,
      "expression": {
        "type": "CallExpression",
        "start": 1049,
        "end": 1227,
        "callee": {
          "type": "MemberExpression",
          "start": 1049,
          "end": 1058,
          "object": {
            "type": "Identifier",
            "start": 1049,
            "end": 1052,
            "decorators": [],
            "name": "app",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1053,
            "end": 1058,
            "decorators": [],
            "name": "mixin",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 1059,
            "end": 1226,
            "properties": [
              {
                "type": "Property",
                "start": 1063,
                "end": 1223,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1063,
                  "end": 1071,
                  "decorators": [],
                  "name": "computed",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 1073,
                  "end": 1223,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1079,
                      "end": 1218,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1079,
                        "end": 1087,
                        "decorators": [],
                        "name": "$vuetify",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 1087,
                        "end": 1218,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 1090,
                          "end": 1218,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 1138,
                              "end": 1212,
                              "argument": {
                                "type": "CallExpression",
                                "start": 1145,
                                "end": 1211,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 1145,
                                  "end": 1153,
                                  "decorators": [],
                                  "name": "reactive",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "ObjectExpression",
                                    "start": 1154,
                                    "end": 1210,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 1164,
                                        "end": 1201,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1164,
                                          "end": 1169,
                                          "decorators": [],
                                          "name": "theme",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "CallExpression",
                                          "start": 1171,
                                          "end": 1201,
                                          "callee": {
                                            "type": "MemberExpression",
                                            "start": 1171,
                                            "end": 1182,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 1171,
                                              "end": 1177,
                                              "decorators": [],
                                              "name": "inject",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 1178,
                                              "end": 1182,
                                              "decorators": [],
                                              "name": "call",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "ThisExpression",
                                              "start": 1183,
                                              "end": 1187
                                            },
                                            {
                                              "type": "Identifier",
                                              "start": 1189,
                                              "end": 1200,
                                              "decorators": [],
                                              "name": "ThemeSymbol",
                                              "optional": false,
                                              "typeAnnotation": null
                                            }
                                          ],
                                          "optional": false
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      }
                                    ]
                                  }
                                ],
                                "optional": false
                              }
                            }
                          ]
                        },
                        "expression": false
                      },
                      "method": true,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
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
