__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComputedGetter",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 19
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
              "start": 20,
              "end": 21
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 20,
            "end": 21
          }
        ],
        "start": 19,
        "end": 22
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "oldValue",
            "optional": true,
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
                  "start": 37,
                  "end": 38
                },
                "typeArguments": null,
                "start": 37,
                "end": 38
              },
              "start": 35,
              "end": 38
            },
            "start": 26,
            "end": 38
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 44
            },
            "typeArguments": null,
            "start": 43,
            "end": 44
          },
          "start": 40,
          "end": 44
        },
        "start": 25,
        "end": 44
      },
      "declare": false,
      "start": 0,
      "end": 45
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComputedOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 51,
        "end": 66
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null,
          "start": 69,
          "end": 75
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 76,
              "end": 82
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ComputedGetter",
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 98
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 99,
                    "end": 102
                  }
                ],
                "start": 98,
                "end": 103
              },
              "start": 84,
              "end": 103
            }
          ],
          "start": 75,
          "end": 104
        },
        "start": 69,
        "end": 104
      },
      "declare": false,
      "start": 46,
      "end": 105
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtractComputedReturns",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 134
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
              "start": 135,
              "end": 136
            },
            "constraint": {
              "type": "TSAnyKeyword",
              "start": 145,
              "end": 148
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 135,
            "end": 148
          }
        ],
        "start": 134,
        "end": 149
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": null,
          "start": 157,
          "end": 160
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 170,
              "end": 171
            },
            "typeArguments": null,
            "start": 170,
            "end": 171
          },
          "start": 164,
          "end": 171
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 174,
                "end": 175
              },
              "typeArguments": null,
              "start": 174,
              "end": 175
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null,
                "start": 176,
                "end": 179
              },
              "typeArguments": null,
              "start": 176,
              "end": 179
            },
            "start": 174,
            "end": 180
          },
          "extendsType": {
            "type": "TSFunctionType",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 193,
                  "end": 197
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 199,
                      "end": 202
                    },
                    "start": 199,
                    "end": 204
                  },
                  "start": 197,
                  "end": 204
                },
                "value": null,
                "start": 190,
                "end": 204
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TReturn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 215,
                    "end": 222
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 215,
                  "end": 222
                },
                "start": 209,
                "end": 222
              },
              "start": 206,
              "end": 222
            },
            "start": 189,
            "end": 222
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TReturn",
              "optional": false,
              "typeAnnotation": null,
              "start": 229,
              "end": 236
            },
            "typeArguments": null,
            "start": 229,
            "end": 236
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 243,
            "end": 248
          },
          "start": 174,
          "end": 248
        },
        "optional": false,
        "readonly": null,
        "start": 152,
        "end": 251
      },
      "declare": false,
      "start": 107,
      "end": 252
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentOptionsBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 264,
        "end": 284
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 285,
              "end": 286
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 285,
            "end": 286
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 288,
              "end": 289
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ComputedOptions",
                "optional": false,
                "typeAnnotation": null,
                "start": 298,
                "end": 313
              },
              "typeArguments": null,
              "start": 298,
              "end": 313
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 288,
            "end": 313
          }
        ],
        "start": 284,
        "end": 314
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 319,
              "end": 323
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 326,
                  "end": 327
                },
                "typeArguments": null,
                "start": 326,
                "end": 327
              },
              "start": 324,
              "end": 327
            },
            "accessibility": null,
            "static": false,
            "start": 319,
            "end": 328
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "computed",
              "optional": false,
              "typeAnnotation": null,
              "start": 331,
              "end": 339
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 342,
                  "end": 343
                },
                "typeArguments": null,
                "start": 342,
                "end": 343
              },
              "start": 340,
              "end": 343
            },
            "accessibility": null,
            "static": false,
            "start": 331,
            "end": 344
          }
        ],
        "start": 315,
        "end": 346
      },
      "declare": false,
      "start": 254,
      "end": 346
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentPublicInstance",
        "optional": false,
        "typeAnnotation": null,
        "start": 353,
        "end": 376
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 377,
              "end": 378
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 381,
              "end": 383
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 377,
            "end": 383
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 385,
              "end": 386
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ComputedOptions",
                "optional": false,
                "typeAnnotation": null,
                "start": 395,
                "end": 410
              },
              "typeArguments": null,
              "start": 395,
              "end": 410
            },
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 413,
              "end": 415
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 385,
            "end": 415
          }
        ],
        "start": 376,
        "end": 416
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 419,
              "end": 420
            },
            "typeArguments": null,
            "start": 419,
            "end": 420
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ExtractComputedReturns",
              "optional": false,
              "typeAnnotation": null,
              "start": 425,
              "end": 447
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 448,
                    "end": 449
                  },
                  "typeArguments": null,
                  "start": 448,
                  "end": 449
                }
              ],
              "start": 447,
              "end": 450
            },
            "start": 425,
            "end": 450
          }
        ],
        "start": 419,
        "end": 450
      },
      "declare": false,
      "start": 348,
      "end": 451
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 458,
        "end": 474
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 478,
              "end": 479
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 482,
              "end": 485
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 478,
            "end": 485
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 489,
              "end": 490
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ComputedOptions",
                "optional": false,
                "typeAnnotation": null,
                "start": 499,
                "end": 514
              },
              "typeArguments": null,
              "start": 499,
              "end": 514
            },
            "default": {
              "type": "TSAnyKeyword",
              "start": 517,
              "end": 520
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 489,
            "end": 520
          }
        ],
        "start": 474,
        "end": 523
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ComponentOptionsBase",
              "optional": false,
              "typeAnnotation": null,
              "start": 526,
              "end": 546
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 547,
                    "end": 548
                  },
                  "typeArguments": null,
                  "start": 547,
                  "end": 548
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 550,
                    "end": 551
                  },
                  "typeArguments": null,
                  "start": 550,
                  "end": 551
                }
              ],
              "start": 546,
              "end": 552
            },
            "start": 526,
            "end": 552
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ThisType",
              "optional": false,
              "typeAnnotation": null,
              "start": 555,
              "end": 563
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ComponentPublicInstance",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 564,
                    "end": 587
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 588,
                          "end": 589
                        },
                        "typeArguments": null,
                        "start": 588,
                        "end": 589
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 591,
                          "end": 592
                        },
                        "typeArguments": null,
                        "start": 591,
                        "end": 592
                      }
                    ],
                    "start": 587,
                    "end": 593
                  },
                  "start": 564,
                  "end": 593
                }
              ],
              "start": 563,
              "end": 594
            },
            "start": 555,
            "end": 594
          }
        ],
        "start": 526,
        "end": 594
      },
      "declare": false,
      "start": 453,
      "end": 595
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "App",
        "optional": false,
        "typeAnnotation": null,
        "start": 607,
        "end": 610
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mixin",
              "optional": false,
              "typeAnnotation": null,
              "start": 615,
              "end": 620
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "mixin",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ComponentOptions",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 628,
                      "end": 644
                    },
                    "typeArguments": null,
                    "start": 628,
                    "end": 644
                  },
                  "start": 626,
                  "end": 644
                },
                "start": 621,
                "end": 644
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 647,
                "end": 651
              },
              "start": 645,
              "end": 651
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 615,
            "end": 652
          }
        ],
        "start": 611,
        "end": 654
      },
      "declare": false,
      "start": 597,
      "end": 654
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InjectionKey",
        "optional": false,
        "typeAnnotation": null,
        "start": 666,
        "end": 678
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
              "start": 679,
              "end": 680
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 679,
            "end": 680
          }
        ],
        "start": 678,
        "end": 681
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null,
            "start": 690,
            "end": 696
          },
          "typeArguments": null,
          "start": 690,
          "end": 696
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 697,
        "end": 699
      },
      "declare": false,
      "start": 656,
      "end": 699
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Ref",
        "optional": false,
        "typeAnnotation": null,
        "start": 711,
        "end": 714
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
              "start": 715,
              "end": 716
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 715,
            "end": 716
          }
        ],
        "start": 714,
        "end": 717
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
              "name": "_v",
              "optional": false,
              "typeAnnotation": null,
              "start": 722,
              "end": 724
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
                  "start": 726,
                  "end": 727
                },
                "typeArguments": null,
                "start": 726,
                "end": 727
              },
              "start": 724,
              "end": 727
            },
            "accessibility": null,
            "static": false,
            "start": 722,
            "end": 728
          }
        ],
        "start": 718,
        "end": 730
      },
      "declare": false,
      "start": 701,
      "end": 730
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "reactive",
        "optional": false,
        "typeAnnotation": null,
        "start": 749,
        "end": 757
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 758,
              "end": 759
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 768,
              "end": 774
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 758,
            "end": 774
          }
        ],
        "start": 757,
        "end": 775
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "target",
          "optional": false,
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
                "start": 784,
                "end": 785
              },
              "typeArguments": null,
              "start": 784,
              "end": 785
            },
            "start": 782,
            "end": 785
          },
          "start": 776,
          "end": 785
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Ref",
            "optional": false,
            "typeAnnotation": null,
            "start": 788,
            "end": 791
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
                  "start": 792,
                  "end": 793
                },
                "typeArguments": null,
                "start": 792,
                "end": 793
              }
            ],
            "start": 791,
            "end": 794
          },
          "start": 788,
          "end": 794
        },
        "start": 786,
        "end": 794
      },
      "body": null,
      "expression": false,
      "start": 732,
      "end": 795
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ThemeInstance",
        "optional": false,
        "typeAnnotation": null,
        "start": 807,
        "end": 820
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
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 834,
              "end": 838
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Readonly",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 840,
                  "end": 848
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Ref",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 849,
                        "end": 852
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 853,
                            "end": 859
                          }
                        ],
                        "start": 852,
                        "end": 860
                      },
                      "start": 849,
                      "end": 860
                    }
                  ],
                  "start": 848,
                  "end": 861
                },
                "start": 840,
                "end": 861
              },
              "start": 838,
              "end": 861
            },
            "accessibility": null,
            "static": false,
            "start": 825,
            "end": 862
          }
        ],
        "start": 821,
        "end": 864
      },
      "declare": false,
      "start": 797,
      "end": 864
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ThemeSymbol",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "InjectionKey",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 893,
                  "end": 905
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ThemeInstance",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 906,
                        "end": 919
                      },
                      "typeArguments": null,
                      "start": 906,
                      "end": 919
                    }
                  ],
                  "start": 905,
                  "end": 920
                },
                "start": 893,
                "end": 920
              },
              "start": 891,
              "end": 920
            },
            "start": 880,
            "end": 920
          },
          "init": null,
          "definite": false,
          "start": 880,
          "end": 920
        }
      ],
      "declare": true,
      "start": 866,
      "end": 921
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inject",
        "optional": false,
        "typeAnnotation": null,
        "start": 940,
        "end": 946
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ComponentPublicInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 956,
                "end": 979
              },
              "typeArguments": null,
              "start": 956,
              "end": 979
            },
            "start": 954,
            "end": 979
          },
          "start": 950,
          "end": 979
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InjectionKey",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 988,
                    "end": 1000
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 1001,
                        "end": 1004
                      }
                    ],
                    "start": 1000,
                    "end": 1005
                  },
                  "start": 988,
                  "end": 1005
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1008,
                  "end": 1014
                }
              ],
              "start": 988,
              "end": 1014
            },
            "start": 986,
            "end": 1014
          },
          "start": 983,
          "end": 1014
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1019,
          "end": 1022
        },
        "start": 1017,
        "end": 1022
      },
      "body": null,
      "expression": false,
      "start": 923,
      "end": 1023
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "app",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "App",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1044,
                  "end": 1047
                },
                "typeArguments": null,
                "start": 1044,
                "end": 1047
              },
              "start": 1042,
              "end": 1047
            },
            "start": 1039,
            "end": 1047
          },
          "init": null,
          "definite": false,
          "start": 1039,
          "end": 1047
        }
      ],
      "declare": true,
      "start": 1025,
      "end": 1048
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "app",
            "optional": false,
            "typeAnnotation": null,
            "start": 1049,
            "end": 1052
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "mixin",
            "optional": false,
            "typeAnnotation": null,
            "start": 1053,
            "end": 1058
          },
          "optional": false,
          "computed": false,
          "start": 1049,
          "end": 1058
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "computed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1063,
                  "end": 1071
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "$vuetify",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1079,
                        "end": 1087
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "reactive",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1145,
                                  "end": 1153
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "ObjectExpression",
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "theme",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1164,
                                          "end": 1169
                                        },
                                        "value": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "inject",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1171,
                                              "end": 1177
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "call",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1178,
                                              "end": 1182
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 1171,
                                            "end": 1182
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
                                              "decorators": [],
                                              "name": "ThemeSymbol",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1189,
                                              "end": 1200
                                            }
                                          ],
                                          "optional": false,
                                          "start": 1171,
                                          "end": 1201
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1164,
                                        "end": 1201
                                      }
                                    ],
                                    "start": 1154,
                                    "end": 1210
                                  }
                                ],
                                "optional": false,
                                "start": 1145,
                                "end": 1211
                              },
                              "start": 1138,
                              "end": 1212
                            }
                          ],
                          "start": 1090,
                          "end": 1218
                        },
                        "expression": false,
                        "start": 1087,
                        "end": 1218
                      },
                      "method": true,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1079,
                      "end": 1218
                    }
                  ],
                  "start": 1073,
                  "end": 1223
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1063,
                "end": 1223
              }
            ],
            "start": 1059,
            "end": 1226
          }
        ],
        "optional": false,
        "start": 1049,
        "end": 1227
      },
      "directive": null,
      "start": 1049,
      "end": 1228
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1228
}
```
