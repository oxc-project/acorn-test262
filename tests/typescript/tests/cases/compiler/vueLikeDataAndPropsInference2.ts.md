__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 969,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 48,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 18,
        "decorators": [],
        "name": "Instance",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 48,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 25,
            "end": 46,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 39,
              "decorators": [],
              "name": "_instanceBrand",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 46,
              "typeAnnotation": {
                "type": "TSNeverKeyword",
                "start": 41,
                "end": 46
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
      "start": 50,
      "end": 120,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 62,
        "decorators": [],
        "name": "DataDef",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 62,
        "end": 75,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 63,
            "end": 67,
            "name": {
              "type": "Identifier",
              "start": 63,
              "end": 67,
              "decorators": [],
              "name": "Data",
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
            "start": 69,
            "end": 74,
            "name": {
              "type": "Identifier",
              "start": 69,
              "end": 74,
              "decorators": [],
              "name": "Props",
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
        "start": 78,
        "end": 120,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 79,
            "end": 111,
            "decorators": [],
            "name": "this",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 83,
              "end": 111,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 85,
                "end": 111,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 85,
                    "end": 100,
                    "typeName": {
                      "type": "Identifier",
                      "start": 85,
                      "end": 93,
                      "decorators": [],
                      "name": "Readonly",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 93,
                      "end": 100,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 94,
                          "end": 99,
                          "typeName": {
                            "type": "Identifier",
                            "start": 94,
                            "end": 99,
                            "decorators": [],
                            "name": "Props",
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
                    "start": 103,
                    "end": 111,
                    "typeName": {
                      "type": "Identifier",
                      "start": 103,
                      "end": 111,
                      "decorators": [],
                      "name": "Instance",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 113,
          "end": 120,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 116,
            "end": 120,
            "typeName": {
              "type": "Identifier",
              "start": 116,
              "end": 120,
              "decorators": [],
              "name": "Data",
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
      "start": 122,
      "end": 176,
      "id": {
        "type": "Identifier",
        "start": 127,
        "end": 142,
        "decorators": [],
        "name": "PropsDefinition",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 142,
        "end": 145,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 143,
            "end": 144,
            "name": {
              "type": "Identifier",
              "start": 143,
              "end": 144,
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
        "type": "TSMappedType",
        "start": 148,
        "end": 176,
        "key": {
          "type": "Identifier",
          "start": 155,
          "end": 156,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 160,
          "end": 167,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 166,
            "end": 167,
            "typeName": {
              "type": "Identifier",
              "start": 166,
              "end": 167,
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
          "type": "TSIndexedAccessType",
          "start": 170,
          "end": 174,
          "objectType": {
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
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 172,
            "end": 173,
            "typeName": {
              "type": "Identifier",
              "start": 172,
              "end": 173,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 178,
      "end": 391,
      "id": {
        "type": "Identifier",
        "start": 188,
        "end": 195,
        "decorators": [],
        "name": "Options",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 195,
        "end": 304,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 201,
            "end": 245,
            "name": {
              "type": "Identifier",
              "start": 201,
              "end": 205,
              "decorators": [],
              "name": "Data",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSUnionType",
              "start": 208,
              "end": 245,
              "types": [
                {
                  "type": "TSObjectKeyword",
                  "start": 208,
                  "end": 214
                },
                {
                  "type": "TSFunctionType",
                  "start": 218,
                  "end": 244,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 219,
                      "end": 233,
                      "decorators": [],
                      "name": "this",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 223,
                        "end": 233,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 225,
                          "end": 233,
                          "typeName": {
                            "type": "Identifier",
                            "start": 225,
                            "end": 233,
                            "decorators": [],
                            "name": "Instance",
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
                    "start": 235,
                    "end": 244,
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 238,
                      "end": 244
                    }
                  }
                }
              ]
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 251,
            "end": 298,
            "name": {
              "type": "Identifier",
              "start": 251,
              "end": 259,
              "decorators": [],
              "name": "PropsDef",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 262,
              "end": 298,
              "typeName": {
                "type": "Identifier",
                "start": 262,
                "end": 277,
                "decorators": [],
                "name": "PropsDefinition",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 277,
                "end": 298,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 278,
                    "end": 297,
                    "typeName": {
                      "type": "Identifier",
                      "start": 278,
                      "end": 284,
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 284,
                      "end": 297,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 285,
                          "end": 291
                        },
                        {
                          "type": "TSAnyKeyword",
                          "start": 293,
                          "end": 296
                        }
                      ]
                    }
                  }
                ]
              }
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 305,
        "end": 391,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 311,
            "end": 322,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 311,
              "end": 315,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 316,
              "end": 322,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 318,
                "end": 322,
                "typeName": {
                  "type": "Identifier",
                  "start": 318,
                  "end": 322,
                  "decorators": [],
                  "name": "Data",
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
            "start": 327,
            "end": 343,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 327,
              "end": 332,
              "decorators": [],
              "name": "props",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 333,
              "end": 343,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 335,
                "end": 343,
                "typeName": {
                  "type": "Identifier",
                  "start": 335,
                  "end": 343,
                  "decorators": [],
                  "name": "PropsDef",
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
            "start": 348,
            "end": 389,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 348,
              "end": 353,
              "decorators": [],
              "name": "watch",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 354,
              "end": 389,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 356,
                "end": 389,
                "typeName": {
                  "type": "Identifier",
                  "start": 356,
                  "end": 362,
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 362,
                  "end": 389,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 363,
                      "end": 369
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 371,
                      "end": 388,
                      "typeName": {
                        "type": "Identifier",
                        "start": 371,
                        "end": 383,
                        "decorators": [],
                        "name": "WatchHandler",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 383,
                        "end": 388,
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 384,
                            "end": 387
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
      "type": "TSTypeAliasDeclaration",
      "start": 393,
      "end": 444,
      "id": {
        "type": "Identifier",
        "start": 398,
        "end": 410,
        "decorators": [],
        "name": "WatchHandler",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 410,
        "end": 413,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 411,
            "end": 412,
            "name": {
              "type": "Identifier",
              "start": 411,
              "end": 412,
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
        "start": 416,
        "end": 443,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 417,
            "end": 423,
            "decorators": [],
            "name": "val",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 420,
              "end": 423,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 422,
                "end": 423,
                "typeName": {
                  "type": "Identifier",
                  "start": 422,
                  "end": 423,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "Identifier",
            "start": 425,
            "end": 434,
            "decorators": [],
            "name": "oldVal",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 431,
              "end": 434,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 433,
                "end": 434,
                "typeName": {
                  "type": "Identifier",
                  "start": 433,
                  "end": 434,
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
          "start": 436,
          "end": 443,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 439,
            "end": 443
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 446,
      "end": 603,
      "id": {
        "type": "Identifier",
        "start": 451,
        "end": 467,
        "decorators": [],
        "name": "ThisTypedOptions",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 467,
        "end": 480,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 468,
            "end": 472,
            "name": {
              "type": "Identifier",
              "start": 468,
              "end": 472,
              "decorators": [],
              "name": "Data",
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
            "start": 474,
            "end": 479,
            "name": {
              "type": "Identifier",
              "start": 474,
              "end": 479,
              "decorators": [],
              "name": "Props",
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
        "type": "TSIntersectionType",
        "start": 487,
        "end": 603,
        "types": [
          {
            "type": "TSObjectKeyword",
            "start": 487,
            "end": 493
          },
          {
            "type": "TSTypeReference",
            "start": 500,
            "end": 553,
            "typeName": {
              "type": "Identifier",
              "start": 500,
              "end": 507,
              "decorators": [],
              "name": "Options",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 507,
              "end": 553,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 508,
                  "end": 528,
                  "typeName": {
                    "type": "Identifier",
                    "start": 508,
                    "end": 515,
                    "decorators": [],
                    "name": "DataDef",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 515,
                    "end": 528,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 516,
                        "end": 520,
                        "typeName": {
                          "type": "Identifier",
                          "start": 516,
                          "end": 520,
                          "decorators": [],
                          "name": "Data",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 522,
                        "end": 527,
                        "typeName": {
                          "type": "Identifier",
                          "start": 522,
                          "end": 527,
                          "decorators": [],
                          "name": "Props",
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
                  "start": 530,
                  "end": 552,
                  "typeName": {
                    "type": "Identifier",
                    "start": 530,
                    "end": 545,
                    "decorators": [],
                    "name": "PropsDefinition",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 545,
                    "end": 552,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 546,
                        "end": 551,
                        "typeName": {
                          "type": "Identifier",
                          "start": 546,
                          "end": 551,
                          "decorators": [],
                          "name": "Props",
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
          },
          {
            "type": "TSTypeReference",
            "start": 560,
            "end": 603,
            "typeName": {
              "type": "Identifier",
              "start": 560,
              "end": 568,
              "decorators": [],
              "name": "ThisType",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 568,
              "end": 603,
              "params": [
                {
                  "type": "TSIntersectionType",
                  "start": 569,
                  "end": 602,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 569,
                      "end": 573,
                      "typeName": {
                        "type": "Identifier",
                        "start": 569,
                        "end": 573,
                        "decorators": [],
                        "name": "Data",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 576,
                      "end": 591,
                      "typeName": {
                        "type": "Identifier",
                        "start": 576,
                        "end": 584,
                        "decorators": [],
                        "name": "Readonly",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 584,
                        "end": 591,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 585,
                            "end": 590,
                            "typeName": {
                              "type": "Identifier",
                              "start": 585,
                              "end": 590,
                              "decorators": [],
                              "name": "Props",
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
                      "start": 594,
                      "end": 602,
                      "typeName": {
                        "type": "Identifier",
                        "start": 594,
                        "end": 602,
                        "decorators": [],
                        "name": "Instance",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              ]
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 605,
      "end": 681,
      "id": {
        "type": "Identifier",
        "start": 622,
        "end": 626,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 626,
        "end": 639,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 627,
            "end": 631,
            "name": {
              "type": "Identifier",
              "start": 627,
              "end": 631,
              "decorators": [],
              "name": "Data",
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
            "start": 633,
            "end": 638,
            "name": {
              "type": "Identifier",
              "start": 633,
              "end": 638,
              "decorators": [],
              "name": "Props",
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
          "start": 640,
          "end": 673,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 642,
            "end": 673,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 644,
              "end": 673,
              "typeName": {
                "type": "Identifier",
                "start": 644,
                "end": 660,
                "decorators": [],
                "name": "ThisTypedOptions",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 660,
                "end": 673,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 661,
                    "end": 665,
                    "typeName": {
                      "type": "Identifier",
                      "start": 661,
                      "end": 665,
                      "decorators": [],
                      "name": "Data",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 667,
                    "end": 672,
                    "typeName": {
                      "type": "Identifier",
                      "start": 667,
                      "end": 672,
                      "decorators": [],
                      "name": "Props",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 674,
        "end": 680,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 676,
          "end": 680
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 682,
      "end": 723,
      "id": {
        "type": "Identifier",
        "start": 699,
        "end": 703,
        "decorators": [],
        "name": "test",
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
          "start": 704,
          "end": 715,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 706,
            "end": 715,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 708,
              "end": 715,
              "typeName": {
                "type": "Identifier",
                "start": 708,
                "end": 715,
                "decorators": [],
                "name": "Options",
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
        "start": 716,
        "end": 722,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 718,
          "end": 722
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 725,
      "end": 969,
      "expression": {
        "type": "CallExpression",
        "start": 725,
        "end": 969,
        "callee": {
          "type": "Identifier",
          "start": 725,
          "end": 729,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 730,
            "end": 968,
            "properties": [
              {
                "type": "Property",
                "start": 736,
                "end": 766,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 736,
                  "end": 741,
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 743,
                  "end": 766,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 753,
                      "end": 760,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 753,
                        "end": 756,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 758,
                        "end": 760,
                        "value": "",
                        "raw": "''"
                      },
                      "method": false,
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
              },
              {
                "type": "Property",
                "start": 773,
                "end": 854,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 773,
                  "end": 777,
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 777,
                  "end": 854,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 779,
                    "end": 797,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 781,
                      "end": 797,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 783,
                          "end": 795,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 783,
                            "end": 786,
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 786,
                            "end": 795,
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 788,
                              "end": 795
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "body": {
                    "type": "BlockStatement",
                    "start": 798,
                    "end": 854,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 808,
                        "end": 848,
                        "argument": {
                          "type": "ObjectExpression",
                          "start": 815,
                          "end": 848,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 829,
                              "end": 838,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 829,
                                "end": 832,
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Literal",
                                "start": 834,
                                "end": 838,
                                "value": true,
                                "raw": "true"
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ]
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
              },
              {
                "type": "Property",
                "start": 861,
                "end": 966,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 861,
                  "end": 866,
                  "decorators": [],
                  "name": "watch",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 868,
                  "end": 966,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 878,
                      "end": 960,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 878,
                        "end": 881,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 881,
                        "end": 960,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 882,
                            "end": 896,
                            "decorators": [],
                            "name": "newVal",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 888,
                              "end": 896,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 890,
                                "end": 896
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 898,
                            "end": 912,
                            "decorators": [],
                            "name": "oldVal",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 904,
                              "end": 912,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 906,
                                "end": 912
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 913,
                          "end": 919,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 915,
                            "end": 919
                          }
                        },
                        "body": {
                          "type": "BlockStatement",
                          "start": 920,
                          "end": 960,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 934,
                              "end": 950,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 934,
                                "end": 950,
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 934,
                                  "end": 942,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 934,
                                    "end": 938
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 939,
                                    "end": 942,
                                    "decorators": [],
                                    "name": "bar",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 945,
                                  "end": 950,
                                  "value": false,
                                  "raw": "false"
                                }
                              },
                              "directive": null
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
