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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 11,
        "decorators": [],
        "name": "Values",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 17,
        "end": 27,
        "indexType": {
          "type": "TSTypeOperator",
          "start": 19,
          "end": 26,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 25,
            "end": 26,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 17,
          "end": 18,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 17,
            "end": 18,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
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
      "type": "TSTypeAliasDeclaration",
      "start": 30,
      "end": 69,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 46,
        "decorators": [],
        "name": "EventObject",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 49,
        "end": 68,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 53,
            "end": 66,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 53,
              "end": 57,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 57,
              "end": 65,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 59,
                "end": 65
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 71,
      "end": 162,
      "body": {
        "type": "TSInterfaceBody",
        "start": 120,
        "end": 162,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 124,
            "end": 160,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 124,
              "end": 134,
              "decorators": [],
              "name": "transition",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 134,
              "end": 159,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 136,
                "end": 159,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 137,
                    "end": 147,
                    "decorators": [],
                    "name": "ev",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 139,
                      "end": 147,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 141,
                        "end": 147,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 141,
                          "end": 147,
                          "decorators": [],
                          "name": "TEvent",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
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
                },
                "typeParameters": null
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 91,
        "decorators": [],
        "name": "ActorLogic",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 91,
        "end": 119,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 92,
            "end": 118,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 107,
              "end": 118,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 107,
                "end": 118,
                "decorators": [],
                "name": "EventObject",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 92,
              "end": 98,
              "decorators": [],
              "name": "TEvent",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 164,
      "end": 207,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 169,
        "end": 186,
        "decorators": [],
        "name": "UnknownActorLogic",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 189,
        "end": 206,
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
        },
        "typeName": {
          "type": "Identifier",
          "start": 189,
          "end": 199,
          "decorators": [],
          "name": "ActorLogic",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 209,
      "end": 279,
      "body": {
        "type": "TSInterfaceBody",
        "start": 233,
        "end": 279,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 237,
            "end": 249,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 237,
              "end": 240,
              "decorators": [],
              "name": "src",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 240,
              "end": 248,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 242,
                "end": 248
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 252,
            "end": 277,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 252,
              "end": 257,
              "decorators": [],
              "name": "logic",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 257,
              "end": 276,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 259,
                "end": 276,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 259,
                  "end": 276,
                  "decorators": [],
                  "name": "UnknownActorLogic",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 219,
        "end": 232,
        "decorators": [],
        "name": "ProvidedActor",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 281,
      "end": 375,
      "body": {
        "type": "TSInterfaceBody",
        "start": 336,
        "end": 375,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 340,
            "end": 349,
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
            },
            "typeParameters": null
          },
          {
            "type": "TSPropertySignature",
            "start": 352,
            "end": 373,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 352,
              "end": 363,
              "decorators": [],
              "name": "_out_TActor",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 364,
              "end": 372,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 366,
                "end": 372,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 366,
                  "end": 372,
                  "decorators": [],
                  "name": "TActor",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 291,
        "end": 305,
        "decorators": [],
        "name": "ActionFunction",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 305,
        "end": 335,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 306,
            "end": 334,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 321,
              "end": 334,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 321,
                "end": 334,
                "decorators": [],
                "name": "ProvidedActor",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 306,
              "end": 312,
              "decorators": [],
              "name": "TActor",
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
      "start": 377,
      "end": 469,
      "body": {
        "type": "TSInterfaceBody",
        "start": 430,
        "end": 469,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 434,
            "end": 443,
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
            },
            "typeParameters": null
          },
          {
            "type": "TSPropertySignature",
            "start": 446,
            "end": 467,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 446,
              "end": 457,
              "decorators": [],
              "name": "_out_TActor",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 458,
              "end": 466,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 460,
                "end": 466,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 460,
                  "end": 466,
                  "decorators": [],
                  "name": "TActor",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 387,
        "end": 399,
        "decorators": [],
        "name": "AssignAction",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 399,
        "end": 429,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 400,
            "end": 428,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 415,
              "end": 428,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 415,
                "end": 428,
                "decorators": [],
                "name": "ProvidedActor",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 400,
              "end": 406,
              "decorators": [],
              "name": "TActor",
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
      "start": 471,
      "end": 562,
      "body": {
        "type": "TSInterfaceBody",
        "start": 525,
        "end": 562,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 529,
            "end": 560,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 529,
              "end": 534,
              "decorators": [],
              "name": "entry",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 535,
              "end": 559,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 537,
                "end": 559,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 551,
                  "end": 559,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 552,
                      "end": 558,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 552,
                        "end": 558,
                        "decorators": [],
                        "name": "TActor",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 537,
                  "end": 551,
                  "decorators": [],
                  "name": "ActionFunction",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 481,
        "end": 494,
        "decorators": [],
        "name": "MachineConfig",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 494,
        "end": 524,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 495,
            "end": 523,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 510,
              "end": 523,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 510,
                "end": 523,
                "decorators": [],
                "name": "ProvidedActor",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 495,
              "end": 501,
              "decorators": [],
              "name": "TActor",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 564,
      "end": 695,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 581,
        "end": 587,
        "decorators": [],
        "name": "assign",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 621,
          "end": 669,
          "decorators": [],
          "name": "_",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 622,
            "end": 669,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 624,
              "end": 669,
              "params": [
                {
                  "type": "Identifier",
                  "start": 625,
                  "end": 662,
                  "decorators": [],
                  "name": "spawn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 630,
                    "end": 662,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 632,
                      "end": 662,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 633,
                          "end": 653,
                          "decorators": [],
                          "name": "actor",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 638,
                            "end": 653,
                            "typeAnnotation": {
                              "type": "TSIndexedAccessType",
                              "start": 640,
                              "end": 653,
                              "indexType": {
                                "type": "TSLiteralType",
                                "start": 647,
                                "end": 652,
                                "literal": {
                                  "type": "Literal",
                                  "start": 647,
                                  "end": 652,
                                  "raw": "\"src\"",
                                  "value": "src"
                                }
                              },
                              "objectType": {
                                "type": "TSTypeReference",
                                "start": 640,
                                "end": 646,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 640,
                                  "end": 646,
                                  "decorators": [],
                                  "name": "TActor",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
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
                      },
                      "typeParameters": null
                    }
                  }
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
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 672,
        "end": 694,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 674,
          "end": 694,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 686,
            "end": 694,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 687,
                "end": 693,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 687,
                  "end": 693,
                  "decorators": [],
                  "name": "TActor",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 674,
            "end": 686,
            "decorators": [],
            "name": "AssignAction",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 587,
        "end": 617,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 588,
            "end": 616,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 603,
              "end": 616,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 603,
                "end": 616,
                "decorators": [],
                "name": "ProvidedActor",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 588,
              "end": 594,
              "decorators": [],
              "name": "TActor",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 697,
      "end": 870,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 702,
        "end": 717,
        "decorators": [],
        "name": "ToProvidedActor",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 773,
        "end": 869,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 779,
          "end": 869,
          "params": [
            {
              "type": "TSMappedType",
              "start": 780,
              "end": 868,
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 798,
                        "end": 805,
                        "decorators": [],
                        "name": "TActors",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "nameType": null,
              "optional": null,
              "readonly": null,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 817,
                "end": 863,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 825,
                    "end": 832,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 825,
                      "end": 828,
                      "decorators": [],
                      "name": "src",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 828,
                      "end": 831,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 830,
                        "end": 831,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 830,
                          "end": 831,
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 839,
                    "end": 857,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 839,
                      "end": 844,
                      "decorators": [],
                      "name": "logic",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 844,
                      "end": 856,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 846,
                        "end": 856,
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 854,
                          "end": 855,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 854,
                            "end": 855,
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 846,
                          "end": 853,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 846,
                            "end": 853,
                            "decorators": [],
                            "name": "TActors",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  }
                ]
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 773,
          "end": 779,
          "decorators": [],
          "name": "Values",
          "optional": false,
          "typeAnnotation": null
        }
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
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 734,
              "end": 767,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 749,
                      "end": 766,
                      "decorators": [],
                      "name": "UnknownActorLogic",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 734,
                "end": 740,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 718,
              "end": 725,
              "decorators": [],
              "name": "TActors",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 872,
      "end": 1158,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 889,
        "end": 894,
        "decorators": [],
        "name": "setup",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 956,
          "end": 1026,
          "decorators": [],
          "name": "implementations",
          "optional": true,
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
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 978,
                    "end": 984,
                    "decorators": [],
                    "name": "actors",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 985,
                    "end": 1023,
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "start": 987,
                      "end": 1023,
                      "constraint": {
                        "type": "TSTypeOperator",
                        "start": 995,
                        "end": 1008,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1001,
                          "end": 1008,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1001,
                            "end": 1008,
                            "decorators": [],
                            "name": "TActors",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "key": {
                        "type": "Identifier",
                        "start": 990,
                        "end": 991,
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "nameType": null,
                      "optional": null,
                      "readonly": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 1011,
                        "end": 1021,
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 1019,
                          "end": 1020,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1019,
                            "end": 1020,
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 1011,
                          "end": 1018,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1011,
                            "end": 1018,
                            "decorators": [],
                            "name": "TActors",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
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
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1033,
                "end": 1046,
                "decorators": [],
                "name": "createMachine",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1046,
                "end": 1154,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 1048,
                  "end": 1154,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1126,
                      "end": 1141,
                      "decorators": [],
                      "name": "config",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1132,
                        "end": 1141,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1134,
                          "end": 1141,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1134,
                            "end": 1141,
                            "decorators": [],
                            "name": "TConfig",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
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
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 1048,
                    "end": 1120,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 1054,
                        "end": 1115,
                        "const": true,
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 1076,
                          "end": 1115,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1089,
                            "end": 1115,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 1090,
                                "end": 1114,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 1105,
                                  "end": 1114,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 1106,
                                      "end": 1113,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1106,
                                        "end": 1113,
                                        "decorators": [],
                                        "name": "TActors",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1090,
                                  "end": 1105,
                                  "decorators": [],
                                  "name": "ToProvidedActor",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 1076,
                            "end": 1089,
                            "decorators": [],
                            "name": "MachineConfig",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 1060,
                          "end": 1067,
                          "decorators": [],
                          "name": "TConfig",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      }
                    ]
                  }
                }
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 894,
        "end": 955,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 898,
            "end": 952,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 914,
              "end": 947,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 929,
                      "end": 946,
                      "decorators": [],
                      "name": "UnknownActorLogic",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 914,
                "end": 920,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": {
              "type": "TSTypeLiteral",
              "start": 950,
              "end": 952,
              "members": []
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 898,
              "end": 905,
              "decorators": [],
              "name": "TActors",
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
      "start": 1160,
      "end": 1222,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1174,
          "end": 1221,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1174,
            "end": 1221,
            "decorators": [],
            "name": "counterLogic",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1186,
              "end": 1221,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1188,
                "end": 1221,
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
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1201,
                            "end": 1205,
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
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
                                "raw": "\"INCREMENT\"",
                                "value": "INCREMENT"
                              }
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1188,
                  "end": 1198,
                  "decorators": [],
                  "name": "ActorLogic",
                  "optional": false,
                  "typeAnnotation": null
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
      "type": "ExpressionStatement",
      "start": 1241,
      "end": 1415,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1241,
        "end": 1414,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1307,
                  "end": 1312,
                  "decorators": [],
                  "name": "entry",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "CallExpression",
                  "start": 1314,
                  "end": 1410,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1321,
                      "end": 1409,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1332,
                        "end": 1409,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 1338,
                            "end": 1355,
                            "directive": null,
                            "expression": {
                              "type": "CallExpression",
                              "start": 1338,
                              "end": 1354,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "start": 1344,
                                  "end": 1353,
                                  "raw": "\"counter\"",
                                  "value": "counter"
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "start": 1338,
                                "end": 1343,
                                "decorators": [],
                                "name": "spawn",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "typeArguments": null
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 1366,
                            "end": 1381,
                            "directive": null,
                            "expression": {
                              "type": "CallExpression",
                              "start": 1366,
                              "end": 1380,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "start": 1372,
                                  "end": 1379,
                                  "raw": "\"alarm\"",
                                  "value": "alarm"
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "start": 1366,
                                "end": 1371,
                                "decorators": [],
                                "name": "spawn",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "typeArguments": null
                            }
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
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1322,
                          "end": 1327,
                          "decorators": [],
                          "name": "spawn",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1314,
                    "end": 1320,
                    "decorators": [],
                    "name": "assign",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1241,
          "end": 1302,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 1241,
            "end": 1288,
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1251,
                      "end": 1257,
                      "decorators": [],
                      "name": "actors",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 1259,
                      "end": 1284,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1261,
                          "end": 1282,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1261,
                            "end": 1268,
                            "decorators": [],
                            "name": "counter",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Identifier",
                            "start": 1270,
                            "end": 1282,
                            "decorators": [],
                            "name": "counterLogic",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1241,
              "end": 1246,
              "decorators": [],
              "name": "setup",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1289,
            "end": 1302,
            "decorators": [],
            "name": "createMachine",
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
      "start": 1467,
      "end": 1523,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1467,
        "end": 1522,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1493,
                  "end": 1498,
                  "decorators": [],
                  "name": "entry",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "CallExpression",
                  "start": 1500,
                  "end": 1518,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1507,
                      "end": 1517,
                      "async": false,
                      "body": {
                        "type": "ObjectExpression",
                        "start": 1514,
                        "end": 1516,
                        "properties": []
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1500,
                    "end": 1506,
                    "decorators": [],
                    "name": "assign",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1467,
          "end": 1488,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 1467,
            "end": 1474,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 1467,
              "end": 1472,
              "decorators": [],
              "name": "setup",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1475,
            "end": 1488,
            "decorators": [],
            "name": "createMachine",
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
