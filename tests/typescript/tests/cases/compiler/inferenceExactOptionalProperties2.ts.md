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
        "name": "Values",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 11
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
              "start": 12,
              "end": 13
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 12,
            "end": 13
          }
        ],
        "start": 11,
        "end": 14
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 17,
            "end": 18
          },
          "typeArguments": null,
          "start": 17,
          "end": 18
        },
        "indexType": {
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
              "start": 25,
              "end": 26
            },
            "typeArguments": null,
            "start": 25,
            "end": 26
          },
          "start": 19,
          "end": 26
        },
        "start": 17,
        "end": 27
      },
      "declare": false,
      "start": 0,
      "end": 28
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EventObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 35,
        "end": 46
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 53,
              "end": 57
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 59,
                "end": 65
              },
              "start": 57,
              "end": 65
            },
            "accessibility": null,
            "static": false,
            "start": 53,
            "end": 66
          }
        ],
        "start": 49,
        "end": 68
      },
      "declare": false,
      "start": 30,
      "end": 69
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ActorLogic",
        "optional": false,
        "typeAnnotation": null,
        "start": 81,
        "end": 91
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TEvent",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 98
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "EventObject",
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 118
              },
              "typeArguments": null,
              "start": 107,
              "end": 118
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 92,
            "end": 118
          }
        ],
        "start": 91,
        "end": 119
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
              "name": "transition",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 134
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ev",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TEvent",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 141,
                          "end": 147
                        },
                        "typeArguments": null,
                        "start": 141,
                        "end": 147
                      },
                      "start": 139,
                      "end": 147
                    },
                    "start": 137,
                    "end": 147
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 152,
                    "end": 159
                  },
                  "start": 149,
                  "end": 159
                },
                "start": 136,
                "end": 159
              },
              "start": 134,
              "end": 159
            },
            "accessibility": null,
            "static": false,
            "start": 124,
            "end": 160
          }
        ],
        "start": 120,
        "end": 162
      },
      "declare": false,
      "start": 71,
      "end": 162
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnknownActorLogic",
        "optional": false,
        "typeAnnotation": null,
        "start": 169,
        "end": 186
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ActorLogic",
          "optional": false,
          "typeAnnotation": null,
          "start": 189,
          "end": 199
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNeverKeyword",
              "start": 200,
              "end": 205
            }
          ],
          "start": 199,
          "end": 206
        },
        "start": 189,
        "end": 206
      },
      "declare": false,
      "start": 164,
      "end": 207
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ProvidedActor",
        "optional": false,
        "typeAnnotation": null,
        "start": 219,
        "end": 232
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
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "src",
              "optional": false,
              "typeAnnotation": null,
              "start": 237,
              "end": 240
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 242,
                "end": 248
              },
              "start": 240,
              "end": 248
            },
            "accessibility": null,
            "static": false,
            "start": 237,
            "end": 249
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "logic",
              "optional": false,
              "typeAnnotation": null,
              "start": 252,
              "end": 257
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UnknownActorLogic",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 259,
                  "end": 276
                },
                "typeArguments": null,
                "start": 259,
                "end": 276
              },
              "start": 257,
              "end": 276
            },
            "accessibility": null,
            "static": false,
            "start": 252,
            "end": 277
          }
        ],
        "start": 233,
        "end": 279
      },
      "declare": false,
      "start": 209,
      "end": 279
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ActionFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 291,
        "end": 305
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TActor",
              "optional": false,
              "typeAnnotation": null,
              "start": 306,
              "end": 312
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ProvidedActor",
                "optional": false,
                "typeAnnotation": null,
                "start": 321,
                "end": 334
              },
              "typeArguments": null,
              "start": 321,
              "end": 334
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 306,
            "end": 334
          }
        ],
        "start": 305,
        "end": 335
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 344,
                "end": 348
              },
              "start": 342,
              "end": 348
            },
            "start": 340,
            "end": 349
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_out_TActor",
              "optional": false,
              "typeAnnotation": null,
              "start": 352,
              "end": 363
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TActor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 366,
                  "end": 372
                },
                "typeArguments": null,
                "start": 366,
                "end": 372
              },
              "start": 364,
              "end": 372
            },
            "accessibility": null,
            "static": false,
            "start": 352,
            "end": 373
          }
        ],
        "start": 336,
        "end": 375
      },
      "declare": false,
      "start": 281,
      "end": 375
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AssignAction",
        "optional": false,
        "typeAnnotation": null,
        "start": 387,
        "end": 399
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TActor",
              "optional": false,
              "typeAnnotation": null,
              "start": 400,
              "end": 406
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ProvidedActor",
                "optional": false,
                "typeAnnotation": null,
                "start": 415,
                "end": 428
              },
              "typeArguments": null,
              "start": 415,
              "end": 428
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 400,
            "end": 428
          }
        ],
        "start": 399,
        "end": 429
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 438,
                "end": 442
              },
              "start": 436,
              "end": 442
            },
            "start": 434,
            "end": 443
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_out_TActor",
              "optional": false,
              "typeAnnotation": null,
              "start": 446,
              "end": 457
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TActor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 460,
                  "end": 466
                },
                "typeArguments": null,
                "start": 460,
                "end": 466
              },
              "start": 458,
              "end": 466
            },
            "accessibility": null,
            "static": false,
            "start": 446,
            "end": 467
          }
        ],
        "start": 430,
        "end": 469
      },
      "declare": false,
      "start": 377,
      "end": 469
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MachineConfig",
        "optional": false,
        "typeAnnotation": null,
        "start": 481,
        "end": 494
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TActor",
              "optional": false,
              "typeAnnotation": null,
              "start": 495,
              "end": 501
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ProvidedActor",
                "optional": false,
                "typeAnnotation": null,
                "start": 510,
                "end": 523
              },
              "typeArguments": null,
              "start": 510,
              "end": 523
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 495,
            "end": 523
          }
        ],
        "start": 494,
        "end": 524
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
              "name": "entry",
              "optional": false,
              "typeAnnotation": null,
              "start": 529,
              "end": 534
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ActionFunction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 537,
                  "end": 551
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TActor",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 552,
                        "end": 558
                      },
                      "typeArguments": null,
                      "start": 552,
                      "end": 558
                    }
                  ],
                  "start": 551,
                  "end": 559
                },
                "start": 537,
                "end": 559
              },
              "start": 535,
              "end": 559
            },
            "accessibility": null,
            "static": false,
            "start": 529,
            "end": 560
          }
        ],
        "start": 525,
        "end": 562
      },
      "declare": false,
      "start": 471,
      "end": 562
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assign",
        "optional": false,
        "typeAnnotation": null,
        "start": 581,
        "end": 587
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
              "name": "TActor",
              "optional": false,
              "typeAnnotation": null,
              "start": 588,
              "end": 594
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ProvidedActor",
                "optional": false,
                "typeAnnotation": null,
                "start": 603,
                "end": 616
              },
              "typeArguments": null,
              "start": 603,
              "end": 616
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 588,
            "end": 616
          }
        ],
        "start": 587,
        "end": 617
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "spawn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "actor",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSIndexedAccessType",
                              "objectType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TActor",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 640,
                                  "end": 646
                                },
                                "typeArguments": null,
                                "start": 640,
                                "end": 646
                              },
                              "indexType": {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "src",
                                  "raw": "\"src\"",
                                  "start": 647,
                                  "end": 652
                                },
                                "start": 647,
                                "end": 652
                              },
                              "start": 640,
                              "end": 653
                            },
                            "start": 638,
                            "end": 653
                          },
                          "start": 633,
                          "end": 653
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 658,
                          "end": 662
                        },
                        "start": 655,
                        "end": 662
                      },
                      "start": 632,
                      "end": 662
                    },
                    "start": 630,
                    "end": 662
                  },
                  "start": 625,
                  "end": 662
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [],
                  "start": 667,
                  "end": 669
                },
                "start": 664,
                "end": 669
              },
              "start": 624,
              "end": 669
            },
            "start": 622,
            "end": 669
          },
          "start": 621,
          "end": 669
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AssignAction",
            "optional": false,
            "typeAnnotation": null,
            "start": 674,
            "end": 686
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TActor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 687,
                  "end": 693
                },
                "typeArguments": null,
                "start": 687,
                "end": 693
              }
            ],
            "start": 686,
            "end": 694
          },
          "start": 674,
          "end": 694
        },
        "start": 672,
        "end": 694
      },
      "body": null,
      "expression": false,
      "start": 564,
      "end": 695
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ToProvidedActor",
        "optional": false,
        "typeAnnotation": null,
        "start": 702,
        "end": 717
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TActors",
              "optional": false,
              "typeAnnotation": null,
              "start": 718,
              "end": 725
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 734,
                "end": 740
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 741,
                    "end": 747
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "UnknownActorLogic",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 749,
                      "end": 766
                    },
                    "typeArguments": null,
                    "start": 749,
                    "end": 766
                  }
                ],
                "start": 740,
                "end": 767
              },
              "start": 734,
              "end": 767
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 718,
            "end": 767
          }
        ],
        "start": 717,
        "end": 768
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Values",
          "optional": false,
          "typeAnnotation": null,
          "start": 773,
          "end": 779
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 787,
                "end": 788
              },
              "constraint": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TActors",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 798,
                        "end": 805
                      },
                      "typeArguments": null,
                      "start": 798,
                      "end": 805
                    },
                    "start": 792,
                    "end": 805
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 808,
                    "end": 814
                  }
                ],
                "start": 792,
                "end": 814
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "src",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 825,
                      "end": 828
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 830,
                          "end": 831
                        },
                        "typeArguments": null,
                        "start": 830,
                        "end": 831
                      },
                      "start": 828,
                      "end": 831
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 825,
                    "end": 832
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "logic",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 839,
                      "end": 844
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TActors",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 846,
                            "end": 853
                          },
                          "typeArguments": null,
                          "start": 846,
                          "end": 853
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 854,
                            "end": 855
                          },
                          "typeArguments": null,
                          "start": 854,
                          "end": 855
                        },
                        "start": 846,
                        "end": 856
                      },
                      "start": 844,
                      "end": 856
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 839,
                    "end": 857
                  }
                ],
                "start": 817,
                "end": 863
              },
              "optional": false,
              "readonly": null,
              "start": 780,
              "end": 868
            }
          ],
          "start": 779,
          "end": 869
        },
        "start": 773,
        "end": 869
      },
      "declare": false,
      "start": 697,
      "end": 870
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "setup",
        "optional": false,
        "typeAnnotation": null,
        "start": 889,
        "end": 894
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
              "name": "TActors",
              "optional": false,
              "typeAnnotation": null,
              "start": 898,
              "end": 905
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 914,
                "end": 920
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 921,
                    "end": 927
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "UnknownActorLogic",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 929,
                      "end": 946
                    },
                    "typeArguments": null,
                    "start": 929,
                    "end": 946
                  }
                ],
                "start": 920,
                "end": 947
              },
              "start": 914,
              "end": 947
            },
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 950,
              "end": 952
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 898,
            "end": 952
          }
        ],
        "start": 894,
        "end": 955
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "implementations",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "actors",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 978,
                    "end": 984
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 990,
                        "end": 991
                      },
                      "constraint": {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TActors",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1001,
                            "end": 1008
                          },
                          "typeArguments": null,
                          "start": 1001,
                          "end": 1008
                        },
                        "start": 995,
                        "end": 1008
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TActors",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1011,
                            "end": 1018
                          },
                          "typeArguments": null,
                          "start": 1011,
                          "end": 1018
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1019,
                            "end": 1020
                          },
                          "typeArguments": null,
                          "start": 1019,
                          "end": 1020
                        },
                        "start": 1011,
                        "end": 1021
                      },
                      "optional": false,
                      "readonly": null,
                      "start": 987,
                      "end": 1023
                    },
                    "start": 985,
                    "end": 1023
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 978,
                  "end": 1024
                }
              ],
              "start": 974,
              "end": 1026
            },
            "start": 972,
            "end": 1026
          },
          "start": 956,
          "end": 1026
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "createMachine",
                "optional": false,
                "typeAnnotation": null,
                "start": 1033,
                "end": 1046
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TConfig",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1060,
                          "end": 1067
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MachineConfig",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1076,
                            "end": 1089
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ToProvidedActor",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1090,
                                  "end": 1105
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "TActors",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1106,
                                        "end": 1113
                                      },
                                      "typeArguments": null,
                                      "start": 1106,
                                      "end": 1113
                                    }
                                  ],
                                  "start": 1105,
                                  "end": 1114
                                },
                                "start": 1090,
                                "end": 1114
                              }
                            ],
                            "start": 1089,
                            "end": 1115
                          },
                          "start": 1076,
                          "end": 1115
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": true,
                        "start": 1054,
                        "end": 1115
                      }
                    ],
                    "start": 1048,
                    "end": 1120
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "config",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TConfig",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1134,
                            "end": 1141
                          },
                          "typeArguments": null,
                          "start": 1134,
                          "end": 1141
                        },
                        "start": 1132,
                        "end": 1141
                      },
                      "start": 1126,
                      "end": 1141
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 1150,
                      "end": 1154
                    },
                    "start": 1147,
                    "end": 1154
                  },
                  "start": 1048,
                  "end": 1154
                },
                "start": 1046,
                "end": 1154
              },
              "accessibility": null,
              "static": false,
              "start": 1033,
              "end": 1155
            }
          ],
          "start": 1029,
          "end": 1157
        },
        "start": 1027,
        "end": 1157
      },
      "body": null,
      "expression": false,
      "start": 872,
      "end": 1158
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
            "name": "counterLogic",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ActorLogic",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1188,
                  "end": 1198
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1201,
                            "end": 1205
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "INCREMENT",
                                "raw": "\"INCREMENT\"",
                                "start": 1207,
                                "end": 1218
                              },
                              "start": 1207,
                              "end": 1218
                            },
                            "start": 1205,
                            "end": 1218
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1201,
                          "end": 1218
                        }
                      ],
                      "start": 1199,
                      "end": 1220
                    }
                  ],
                  "start": 1198,
                  "end": 1221
                },
                "start": 1188,
                "end": 1221
              },
              "start": 1186,
              "end": 1221
            },
            "start": 1174,
            "end": 1221
          },
          "init": null,
          "definite": false,
          "start": 1174,
          "end": 1221
        }
      ],
      "declare": true,
      "start": 1160,
      "end": 1222
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "setup",
              "optional": false,
              "typeAnnotation": null,
              "start": 1241,
              "end": 1246
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
                      "name": "actors",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1251,
                      "end": 1257
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
                            "name": "counter",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1261,
                            "end": 1268
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "counterLogic",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1270,
                            "end": 1282
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1261,
                          "end": 1282
                        }
                      ],
                      "start": 1259,
                      "end": 1284
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1251,
                    "end": 1284
                  }
                ],
                "start": 1247,
                "end": 1287
              }
            ],
            "optional": false,
            "start": 1241,
            "end": 1288
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "createMachine",
            "optional": false,
            "typeAnnotation": null,
            "start": 1289,
            "end": 1302
          },
          "optional": false,
          "computed": false,
          "start": 1241,
          "end": 1302
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
                  "name": "entry",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1307,
                  "end": 1312
                },
                "value": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "assign",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1314,
                    "end": 1320
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "spawn",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1322,
                          "end": 1327
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "spawn",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1338,
                                "end": 1343
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": "counter",
                                  "raw": "\"counter\"",
                                  "start": 1344,
                                  "end": 1353
                                }
                              ],
                              "optional": false,
                              "start": 1338,
                              "end": 1354
                            },
                            "directive": null,
                            "start": 1338,
                            "end": 1355
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "spawn",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1366,
                                "end": 1371
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": "alarm",
                                  "raw": "\"alarm\"",
                                  "start": 1372,
                                  "end": 1379
                                }
                              ],
                              "optional": false,
                              "start": 1366,
                              "end": 1380
                            },
                            "directive": null,
                            "start": 1366,
                            "end": 1381
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ObjectExpression",
                              "properties": [],
                              "start": 1402,
                              "end": 1404
                            },
                            "start": 1395,
                            "end": 1405
                          }
                        ],
                        "start": 1332,
                        "end": 1409
                      },
                      "id": null,
                      "generator": false,
                      "start": 1321,
                      "end": 1409
                    }
                  ],
                  "optional": false,
                  "start": 1314,
                  "end": 1410
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1307,
                "end": 1410
              }
            ],
            "start": 1303,
            "end": 1413
          }
        ],
        "optional": false,
        "start": 1241,
        "end": 1414
      },
      "directive": null,
      "start": 1241,
      "end": 1415
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "setup",
              "optional": false,
              "typeAnnotation": null,
              "start": 1467,
              "end": 1472
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1467,
            "end": 1474
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "createMachine",
            "optional": false,
            "typeAnnotation": null,
            "start": 1475,
            "end": 1488
          },
          "optional": false,
          "computed": false,
          "start": 1467,
          "end": 1488
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
                  "name": "entry",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1493,
                  "end": 1498
                },
                "value": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "assign",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1500,
                    "end": 1506
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 1514,
                        "end": 1516
                      },
                      "id": null,
                      "generator": false,
                      "start": 1507,
                      "end": 1517
                    }
                  ],
                  "optional": false,
                  "start": 1500,
                  "end": 1518
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1493,
                "end": 1518
              }
            ],
            "start": 1489,
            "end": 1521
          }
        ],
        "optional": false,
        "start": 1467,
        "end": 1522
      },
      "directive": null,
      "start": 1467,
      "end": 1523
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1523
}
```
