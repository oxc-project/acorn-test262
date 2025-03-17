__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1524,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 28,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 11,
        "name": "Values",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
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
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 17,
        "end": 27,
        "objectType": {
          "type": "TSTypeReference",
          "start": 17,
          "end": 18,
          "typeName": {
            "type": "Identifier",
            "start": 17,
            "end": 18,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "indexType": {
          "type": "TSTypeOperator",
          "start": 19,
          "end": 26,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 25,
            "end": 26,
            "typeName": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 30,
      "end": 69,
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 46,
        "name": "EventObject",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 49,
        "end": 68,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 53,
            "end": 66,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 53,
              "end": 57,
              "name": "type",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 57,
              "end": 65,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 59,
                "end": 65
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
      "start": 71,
      "end": 162,
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 91,
        "name": "ActorLogic",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 91,
        "end": 119,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 92,
            "end": 118,
            "name": {
              "type": "Identifier",
              "start": 92,
              "end": 98,
              "name": "TEvent",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 107,
              "end": 118,
              "typeName": {
                "type": "Identifier",
                "start": 107,
                "end": 118,
                "name": "EventObject",
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
        "start": 120,
        "end": 162,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 124,
            "end": 160,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 124,
              "end": 134,
              "name": "transition",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 134,
              "end": 159,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 136,
                "end": 159,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 137,
                    "end": 147,
                    "name": "ev",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 139,
                      "end": 147,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 141,
                        "end": 147,
                        "typeName": {
                          "type": "Identifier",
                          "start": 141,
                          "end": 147,
                          "name": "TEvent",
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
                  "start": 149,
                  "end": 159,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 152,
                    "end": 159
                  }
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
      "type": "TSTypeAliasDeclaration",
      "start": 164,
      "end": 207,
      "id": {
        "type": "Identifier",
        "start": 169,
        "end": 186,
        "name": "UnknownActorLogic",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 189,
        "end": 206,
        "typeName": {
          "type": "Identifier",
          "start": 189,
          "end": 199,
          "name": "ActorLogic",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 199,
          "end": 206,
          "params": [
            {
              "type": "TSNeverKeyword",
              "start": 200,
              "end": 205
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 209,
      "end": 279,
      "id": {
        "type": "Identifier",
        "start": 219,
        "end": 232,
        "name": "ProvidedActor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 233,
        "end": 279,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 237,
            "end": 249,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 237,
              "end": 240,
              "name": "src",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 240,
              "end": 248,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 242,
                "end": 248
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 252,
            "end": 277,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 252,
              "end": 257,
              "name": "logic",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 257,
              "end": 276,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 259,
                "end": 276,
                "typeName": {
                  "type": "Identifier",
                  "start": 259,
                  "end": 276,
                  "name": "UnknownActorLogic",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "type": "TSInterfaceDeclaration",
      "start": 281,
      "end": 375,
      "id": {
        "type": "Identifier",
        "start": 291,
        "end": 305,
        "name": "ActionFunction",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 305,
        "end": 335,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 306,
            "end": 334,
            "name": {
              "type": "Identifier",
              "start": 306,
              "end": 312,
              "name": "TActor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 321,
              "end": 334,
              "typeName": {
                "type": "Identifier",
                "start": 321,
                "end": 334,
                "name": "ProvidedActor",
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
        "start": 336,
        "end": 375,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 340,
            "end": 349,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 342,
              "end": 348,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 344,
                "end": 348
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 352,
            "end": 373,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 352,
              "end": 363,
              "name": "_out_TActor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 364,
              "end": 372,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 366,
                "end": 372,
                "typeName": {
                  "type": "Identifier",
                  "start": 366,
                  "end": 372,
                  "name": "TActor",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "type": "TSInterfaceDeclaration",
      "start": 377,
      "end": 469,
      "id": {
        "type": "Identifier",
        "start": 387,
        "end": 399,
        "name": "AssignAction",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 399,
        "end": 429,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 400,
            "end": 428,
            "name": {
              "type": "Identifier",
              "start": 400,
              "end": 406,
              "name": "TActor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 415,
              "end": 428,
              "typeName": {
                "type": "Identifier",
                "start": 415,
                "end": 428,
                "name": "ProvidedActor",
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
        "start": 430,
        "end": 469,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 434,
            "end": 443,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 436,
              "end": 442,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 438,
                "end": 442
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 446,
            "end": 467,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 446,
              "end": 457,
              "name": "_out_TActor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 458,
              "end": 466,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 460,
                "end": 466,
                "typeName": {
                  "type": "Identifier",
                  "start": 460,
                  "end": 466,
                  "name": "TActor",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "type": "TSInterfaceDeclaration",
      "start": 471,
      "end": 562,
      "id": {
        "type": "Identifier",
        "start": 481,
        "end": 494,
        "name": "MachineConfig",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 494,
        "end": 524,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 495,
            "end": 523,
            "name": {
              "type": "Identifier",
              "start": 495,
              "end": 501,
              "name": "TActor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 510,
              "end": 523,
              "typeName": {
                "type": "Identifier",
                "start": 510,
                "end": 523,
                "name": "ProvidedActor",
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
        "start": 525,
        "end": 562,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 529,
            "end": 560,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 529,
              "end": 534,
              "name": "entry",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 535,
              "end": 559,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 537,
                "end": 559,
                "typeName": {
                  "type": "Identifier",
                  "start": 537,
                  "end": 551,
                  "name": "ActionFunction",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 551,
                  "end": 559,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 552,
                      "end": 558,
                      "typeName": {
                        "type": "Identifier",
                        "start": 552,
                        "end": 558,
                        "name": "TActor",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
      "type": "TSDeclareFunction",
      "start": 564,
      "end": 695,
      "id": {
        "type": "Identifier",
        "start": 581,
        "end": 587,
        "name": "assign",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 621,
          "end": 669,
          "name": "_",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 622,
            "end": 669,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 624,
              "end": 669,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 625,
                  "end": 662,
                  "name": "spawn",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 630,
                    "end": 662,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 632,
                      "end": 662,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 633,
                          "end": 653,
                          "name": "actor",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 638,
                            "end": 653,
                            "typeAnnotation": {
                              "type": "TSIndexedAccessType",
                              "start": 640,
                              "end": 653,
                              "objectType": {
                                "type": "TSTypeReference",
                                "start": 640,
                                "end": 646,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 640,
                                  "end": 646,
                                  "name": "TActor",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              },
                              "indexType": {
                                "type": "TSLiteralType",
                                "start": 647,
                                "end": 652,
                                "literal": {
                                  "type": "Literal",
                                  "start": 647,
                                  "end": 652,
                                  "value": "src",
                                  "raw": "\"src\""
                                }
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 655,
                        "end": 662,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 658,
                          "end": 662
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 664,
                "end": 669,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 667,
                  "end": 669,
                  "members": []
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 587,
        "end": 617,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 588,
            "end": 616,
            "name": {
              "type": "Identifier",
              "start": 588,
              "end": 594,
              "name": "TActor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 603,
              "end": 616,
              "typeName": {
                "type": "Identifier",
                "start": 603,
                "end": 616,
                "name": "ProvidedActor",
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 672,
        "end": 694,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 674,
          "end": 694,
          "typeName": {
            "type": "Identifier",
            "start": 674,
            "end": 686,
            "name": "AssignAction",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 686,
            "end": 694,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 687,
                "end": 693,
                "typeName": {
                  "type": "Identifier",
                  "start": 687,
                  "end": 693,
                  "name": "TActor",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 697,
      "end": 870,
      "id": {
        "type": "Identifier",
        "start": 702,
        "end": 717,
        "name": "ToProvidedActor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 717,
        "end": 768,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 718,
            "end": 767,
            "name": {
              "type": "Identifier",
              "start": 718,
              "end": 725,
              "name": "TActors",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 734,
              "end": 767,
              "typeName": {
                "type": "Identifier",
                "start": 734,
                "end": 740,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 740,
                "end": 767,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 741,
                    "end": 747
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 749,
                    "end": 766,
                    "typeName": {
                      "type": "Identifier",
                      "start": 749,
                      "end": 766,
                      "name": "UnknownActorLogic",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 773,
        "end": 869,
        "typeName": {
          "type": "Identifier",
          "start": 773,
          "end": 779,
          "name": "Values",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 779,
          "end": 869,
          "params": [
            {
              "type": "TSMappedType",
              "start": 780,
              "end": 868,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 787,
                "end": 814,
                "name": {
                  "type": "Identifier",
                  "start": 787,
                  "end": 788,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSIntersectionType",
                  "start": 792,
                  "end": 814,
                  "types": [
                    {
                      "type": "TSTypeOperator",
                      "start": 792,
                      "end": 805,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 798,
                        "end": 805,
                        "typeName": {
                          "type": "Identifier",
                          "start": 798,
                          "end": 805,
                          "name": "TActors",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 808,
                      "end": 814
                    }
                  ]
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 817,
                "end": 863,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 825,
                    "end": 832,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 825,
                      "end": 828,
                      "name": "src",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 828,
                      "end": 831,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 830,
                        "end": 831,
                        "typeName": {
                          "type": "Identifier",
                          "start": 830,
                          "end": 831,
                          "name": "K",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 839,
                    "end": 857,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 839,
                      "end": 844,
                      "name": "logic",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 844,
                      "end": 856,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 846,
                        "end": 856,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 846,
                          "end": 853,
                          "typeName": {
                            "type": "Identifier",
                            "start": 846,
                            "end": 853,
                            "name": "TActors",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 854,
                          "end": 855,
                          "typeName": {
                            "type": "Identifier",
                            "start": 854,
                            "end": 855,
                            "name": "K",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "optional": null,
              "readonly": null,
              "constraint": {
                "type": "TSIntersectionType",
                "start": 792,
                "end": 814,
                "types": [
                  {
                    "type": "TSTypeOperator",
                    "start": 792,
                    "end": 805,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 798,
                      "end": 805,
                      "typeName": {
                        "type": "Identifier",
                        "start": 798,
                        "end": 805,
                        "name": "TActors",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 808,
                    "end": 814
                  }
                ]
              },
              "key": {
                "type": "Identifier",
                "start": 787,
                "end": 788,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 872,
      "end": 1158,
      "id": {
        "type": "Identifier",
        "start": 889,
        "end": 894,
        "name": "setup",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 956,
          "end": 1026,
          "name": "implementations",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 972,
            "end": 1026,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 974,
              "end": 1026,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 978,
                  "end": 1024,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 978,
                    "end": 984,
                    "name": "actors",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 985,
                    "end": 1023,
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "start": 987,
                      "end": 1023,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 990,
                        "end": 1008,
                        "name": {
                          "type": "Identifier",
                          "start": 990,
                          "end": 991,
                          "name": "K",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeOperator",
                          "start": 995,
                          "end": 1008,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1001,
                            "end": 1008,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1001,
                              "end": 1008,
                              "name": "TActors",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 1011,
                        "end": 1021,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 1011,
                          "end": 1018,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1011,
                            "end": 1018,
                            "name": "TActors",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 1019,
                          "end": 1020,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1019,
                            "end": 1020,
                            "name": "K",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "optional": null,
                      "readonly": null,
                      "constraint": {
                        "type": "TSTypeOperator",
                        "start": 995,
                        "end": 1008,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1001,
                          "end": 1008,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1001,
                            "end": 1008,
                            "name": "TActors",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "key": {
                        "type": "Identifier",
                        "start": 990,
                        "end": 991,
                        "name": "K",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 894,
        "end": 955,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 898,
            "end": 952,
            "name": {
              "type": "Identifier",
              "start": 898,
              "end": 905,
              "name": "TActors",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 914,
              "end": 947,
              "typeName": {
                "type": "Identifier",
                "start": 914,
                "end": 920,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 920,
                "end": 947,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 921,
                    "end": 927
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 929,
                    "end": 946,
                    "typeName": {
                      "type": "Identifier",
                      "start": 929,
                      "end": 946,
                      "name": "UnknownActorLogic",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": {
              "type": "TSTypeLiteral",
              "start": 950,
              "end": 952,
              "members": []
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1027,
        "end": 1157,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 1029,
          "end": 1157,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 1033,
              "end": 1155,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 1033,
                "end": 1046,
                "name": "createMachine",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1046,
                "end": 1154,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 1048,
                  "end": 1154,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 1048,
                    "end": 1120,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 1054,
                        "end": 1115,
                        "name": {
                          "type": "Identifier",
                          "start": 1060,
                          "end": 1067,
                          "name": "TConfig",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 1076,
                          "end": 1115,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1076,
                            "end": 1089,
                            "name": "MachineConfig",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1089,
                            "end": 1115,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 1090,
                                "end": 1114,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1090,
                                  "end": 1105,
                                  "name": "ToProvidedActor",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 1105,
                                  "end": 1114,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 1106,
                                      "end": 1113,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1106,
                                        "end": 1113,
                                        "name": "TActors",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": true
                      }
                    ]
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1126,
                      "end": 1141,
                      "name": "config",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1132,
                        "end": 1141,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1134,
                          "end": 1141,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1134,
                            "end": 1141,
                            "name": "TConfig",
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
                    "start": 1147,
                    "end": 1154,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 1150,
                      "end": 1154
                    }
                  }
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1160,
      "end": 1222,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1174,
          "end": 1221,
          "id": {
            "type": "Identifier",
            "start": 1174,
            "end": 1221,
            "name": "counterLogic",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1186,
              "end": 1221,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1188,
                "end": 1221,
                "typeName": {
                  "type": "Identifier",
                  "start": 1188,
                  "end": 1198,
                  "name": "ActorLogic",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1198,
                  "end": 1221,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 1199,
                      "end": 1220,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 1201,
                          "end": 1218,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1201,
                            "end": 1205,
                            "name": "type",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1205,
                            "end": 1218,
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "start": 1207,
                              "end": 1218,
                              "literal": {
                                "type": "Literal",
                                "start": 1207,
                                "end": 1218,
                                "value": "INCREMENT",
                                "raw": "\"INCREMENT\""
                              }
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 1241,
      "end": 1415,
      "expression": {
        "type": "CallExpression",
        "start": 1241,
        "end": 1414,
        "callee": {
          "type": "MemberExpression",
          "start": 1241,
          "end": 1302,
          "object": {
            "type": "CallExpression",
            "start": 1241,
            "end": 1288,
            "callee": {
              "type": "Identifier",
              "start": 1241,
              "end": 1246,
              "name": "setup",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 1247,
                "end": 1287,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1251,
                    "end": 1284,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1251,
                      "end": 1257,
                      "name": "actors",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 1259,
                      "end": 1284,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1261,
                          "end": 1282,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1261,
                            "end": 1268,
                            "name": "counter",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 1270,
                            "end": 1282,
                            "name": "counterLogic",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 1289,
            "end": 1302,
            "name": "createMachine",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 1303,
            "end": 1413,
            "properties": [
              {
                "type": "Property",
                "start": 1307,
                "end": 1410,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1307,
                  "end": 1312,
                  "name": "entry",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "CallExpression",
                  "start": 1314,
                  "end": 1410,
                  "callee": {
                    "type": "Identifier",
                    "start": 1314,
                    "end": 1320,
                    "name": "assign",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1321,
                      "end": 1409,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1322,
                          "end": 1327,
                          "name": "spawn",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 1332,
                        "end": 1409,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 1338,
                            "end": 1355,
                            "expression": {
                              "type": "CallExpression",
                              "start": 1338,
                              "end": 1354,
                              "callee": {
                                "type": "Identifier",
                                "start": 1338,
                                "end": 1343,
                                "name": "spawn",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "start": 1344,
                                  "end": 1353,
                                  "value": "counter",
                                  "raw": "\"counter\""
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "directive": null
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 1366,
                            "end": 1381,
                            "expression": {
                              "type": "CallExpression",
                              "start": 1366,
                              "end": 1380,
                              "callee": {
                                "type": "Identifier",
                                "start": 1366,
                                "end": 1371,
                                "name": "spawn",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "start": 1372,
                                  "end": 1379,
                                  "value": "alarm",
                                  "raw": "\"alarm\""
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "directive": null
                          },
                          {
                            "type": "ReturnStatement",
                            "start": 1395,
                            "end": 1405,
                            "argument": {
                              "type": "ObjectExpression",
                              "start": 1402,
                              "end": 1404,
                              "properties": []
                            }
                          }
                        ]
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1467,
      "end": 1523,
      "expression": {
        "type": "CallExpression",
        "start": 1467,
        "end": 1522,
        "callee": {
          "type": "MemberExpression",
          "start": 1467,
          "end": 1488,
          "object": {
            "type": "CallExpression",
            "start": 1467,
            "end": 1474,
            "callee": {
              "type": "Identifier",
              "start": 1467,
              "end": 1472,
              "name": "setup",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 1475,
            "end": 1488,
            "name": "createMachine",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 1489,
            "end": 1521,
            "properties": [
              {
                "type": "Property",
                "start": 1493,
                "end": 1518,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1493,
                  "end": 1498,
                  "name": "entry",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "CallExpression",
                  "start": 1500,
                  "end": 1518,
                  "callee": {
                    "type": "Identifier",
                    "start": 1500,
                    "end": 1506,
                    "name": "assign",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1507,
                      "end": 1517,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "ObjectExpression",
                        "start": 1514,
                        "end": 1516,
                        "properties": []
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "kind": "init",
                "optional": false
              }
            ]
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
