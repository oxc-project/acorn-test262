__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1645,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 63,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Omit",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 9,
        "end": 31,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 10,
            "end": 11,
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 30,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 23,
              "end": 30,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 29,
                "end": 30,
                "typeName": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 30,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
        "start": 34,
        "end": 62,
        "typeName": {
          "type": "Identifier",
          "start": 34,
          "end": 38,
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 38,
          "end": 62,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 39,
              "end": 40,
              "typeName": {
                "type": "Identifier",
                "start": 39,
                "end": 40,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 42,
              "end": 61,
              "typeName": {
                "type": "Identifier",
                "start": 42,
                "end": 49,
                "decorators": [],
                "name": "Exclude",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 49,
                "end": 61,
                "params": [
                  {
                    "type": "TSTypeOperator",
                    "start": 50,
                    "end": 57,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 56,
                      "end": 57,
                      "typeName": {
                        "type": "Identifier",
                        "start": 56,
                        "end": 57,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 59,
                    "end": 60,
                    "typeName": {
                      "type": "Identifier",
                      "start": 59,
                      "end": 60,
                      "decorators": [],
                      "name": "K",
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
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 65,
      "end": 416,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 76,
        "decorators": [],
        "name": "Shared",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 76,
        "end": 245,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 146,
            "end": 159,
            "name": {
              "type": "Identifier",
              "start": 146,
              "end": 159,
              "decorators": [],
              "name": "InjectedProps",
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
            "start": 165,
            "end": 239,
            "name": {
              "type": "Identifier",
              "start": 165,
              "end": 186,
              "decorators": [],
              "name": "DecorationTargetProps",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 195,
              "end": 239,
              "typeName": {
                "type": "Identifier",
                "start": 195,
                "end": 201,
                "decorators": [],
                "name": "Shared",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 201,
                "end": 239,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 202,
                    "end": 215,
                    "typeName": {
                      "type": "Identifier",
                      "start": 202,
                      "end": 215,
                      "decorators": [],
                      "name": "InjectedProps",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 217,
                    "end": 238,
                    "typeName": {
                      "type": "Identifier",
                      "start": 217,
                      "end": 238,
                      "decorators": [],
                      "name": "DecorationTargetProps",
                      "optional": false,
                      "typeAnnotation": null
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
        "type": "TSMappedType",
        "start": 248,
        "end": 415,
        "key": {
          "type": "Identifier",
          "start": 259,
          "end": 260,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeReference",
          "start": 264,
          "end": 321,
          "typeName": {
            "type": "Identifier",
            "start": 264,
            "end": 271,
            "decorators": [],
            "name": "Extract",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 271,
            "end": 321,
            "params": [
              {
                "type": "TSTypeOperator",
                "start": 272,
                "end": 291,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 278,
                  "end": 291,
                  "typeName": {
                    "type": "Identifier",
                    "start": 278,
                    "end": 291,
                    "decorators": [],
                    "name": "InjectedProps",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              {
                "type": "TSTypeOperator",
                "start": 293,
                "end": 320,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 299,
                  "end": 320,
                  "typeName": {
                    "type": "Identifier",
                    "start": 299,
                    "end": 320,
                    "decorators": [],
                    "name": "DecorationTargetProps",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ]
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 324,
          "end": 408,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 324,
            "end": 340,
            "objectType": {
              "type": "TSTypeReference",
              "start": 324,
              "end": 337,
              "typeName": {
                "type": "Identifier",
                "start": 324,
                "end": 337,
                "decorators": [],
                "name": "InjectedProps",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 338,
              "end": 339,
              "typeName": {
                "type": "Identifier",
                "start": 338,
                "end": 339,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "extendsType": {
            "type": "TSIndexedAccessType",
            "start": 349,
            "end": 373,
            "objectType": {
              "type": "TSTypeReference",
              "start": 349,
              "end": 370,
              "typeName": {
                "type": "Identifier",
                "start": 349,
                "end": 370,
                "decorators": [],
                "name": "DecorationTargetProps",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 371,
              "end": 372,
              "typeName": {
                "type": "Identifier",
                "start": 371,
                "end": 372,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "start": 376,
            "end": 400,
            "objectType": {
              "type": "TSTypeReference",
              "start": 376,
              "end": 397,
              "typeName": {
                "type": "Identifier",
                "start": 376,
                "end": 397,
                "decorators": [],
                "name": "DecorationTargetProps",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 398,
              "end": 399,
              "typeName": {
                "type": "Identifier",
                "start": 398,
                "end": 399,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 403,
            "end": 408
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 418,
      "end": 530,
      "id": {
        "type": "Identifier",
        "start": 428,
        "end": 442,
        "decorators": [],
        "name": "ComponentClass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 442,
        "end": 445,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 443,
            "end": 444,
            "name": {
              "type": "Identifier",
              "start": 443,
              "end": 444,
              "decorators": [],
              "name": "P",
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
        "start": 446,
        "end": 530,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 452,
            "end": 478,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 452,
              "end": 464,
              "decorators": [],
              "name": "defaultProps",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 465,
              "end": 477,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 467,
                "end": 477,
                "typeName": {
                  "type": "Identifier",
                  "start": 467,
                  "end": 474,
                  "decorators": [],
                  "name": "Partial",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 474,
                  "end": 477,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 475,
                      "end": 476,
                      "typeName": {
                        "type": "Identifier",
                        "start": 475,
                        "end": 476,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
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
      "type": "TSInterfaceDeclaration",
      "start": 532,
      "end": 810,
      "id": {
        "type": "Identifier",
        "start": 542,
        "end": 577,
        "decorators": [],
        "name": "InferableComponentEnhancerWithProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 577,
        "end": 606,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 578,
            "end": 592,
            "name": {
              "type": "Identifier",
              "start": 578,
              "end": 592,
              "decorators": [],
              "name": "TInjectedProps",
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
            "start": 594,
            "end": 605,
            "name": {
              "type": "Identifier",
              "start": 594,
              "end": 605,
              "decorators": [],
              "name": "TNeedsProps",
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
        "start": 607,
        "end": 810,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 613,
            "end": 808,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 613,
              "end": 650,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 614,
                  "end": 649,
                  "name": {
                    "type": "Identifier",
                    "start": 614,
                    "end": 615,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 624,
                    "end": 649,
                    "typeName": {
                      "type": "Identifier",
                      "start": 624,
                      "end": 630,
                      "decorators": [],
                      "name": "Shared",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 630,
                      "end": 649,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 631,
                          "end": 645,
                          "typeName": {
                            "type": "Identifier",
                            "start": 631,
                            "end": 645,
                            "decorators": [],
                            "name": "TInjectedProps",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 647,
                          "end": 648,
                          "typeName": {
                            "type": "Identifier",
                            "start": 647,
                            "end": 648,
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null
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
            "params": [
              {
                "type": "Identifier",
                "start": 660,
                "end": 688,
                "decorators": [],
                "name": "component",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 669,
                  "end": 688,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 671,
                    "end": 688,
                    "typeName": {
                      "type": "Identifier",
                      "start": 671,
                      "end": 685,
                      "decorators": [],
                      "name": "ComponentClass",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 685,
                      "end": 688,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 686,
                          "end": 687,
                          "typeName": {
                            "type": "Identifier",
                            "start": 686,
                            "end": 687,
                            "decorators": [],
                            "name": "P",
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
              "start": 694,
              "end": 808,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 696,
                "end": 808,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 696,
                    "end": 766,
                    "typeName": {
                      "type": "Identifier",
                      "start": 696,
                      "end": 710,
                      "decorators": [],
                      "name": "ComponentClass",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 710,
                      "end": 766,
                      "params": [
                        {
                          "type": "TSIntersectionType",
                          "start": 711,
                          "end": 765,
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "start": 711,
                              "end": 751,
                              "typeName": {
                                "type": "Identifier",
                                "start": 711,
                                "end": 715,
                                "decorators": [],
                                "name": "Omit",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 715,
                                "end": 751,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 716,
                                    "end": 717,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 716,
                                      "end": 717,
                                      "decorators": [],
                                      "name": "P",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeOperator",
                                    "start": 719,
                                    "end": 750,
                                    "operator": "keyof",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 725,
                                      "end": 750,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 725,
                                        "end": 731,
                                        "decorators": [],
                                        "name": "Shared",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "start": 731,
                                        "end": 750,
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "start": 732,
                                            "end": 746,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 732,
                                              "end": 746,
                                              "decorators": [],
                                              "name": "TInjectedProps",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "typeArguments": null
                                          },
                                          {
                                            "type": "TSTypeReference",
                                            "start": 748,
                                            "end": 749,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 748,
                                              "end": 749,
                                              "decorators": [],
                                              "name": "P",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "typeArguments": null
                                          }
                                        ]
                                      }
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 754,
                              "end": 765,
                              "typeName": {
                                "type": "Identifier",
                                "start": 754,
                                "end": 765,
                                "decorators": [],
                                "name": "TNeedsProps",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 769,
                    "end": 808,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 771,
                        "end": 806,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 771,
                          "end": 787,
                          "decorators": [],
                          "name": "WrappedComponent",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 787,
                          "end": 806,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 789,
                            "end": 806,
                            "typeName": {
                              "type": "Identifier",
                              "start": 789,
                              "end": 803,
                              "decorators": [],
                              "name": "ComponentClass",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 803,
                              "end": 806,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 804,
                                  "end": 805,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 804,
                                    "end": 805,
                                    "decorators": [],
                                    "name": "P",
                                    "optional": false,
                                    "typeAnnotation": null
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
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 864,
      "end": 1329,
      "id": {
        "type": "Identifier",
        "start": 874,
        "end": 881,
        "decorators": [],
        "name": "Connect",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 882,
        "end": 1329,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 952,
            "end": 1079,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 952,
              "end": 976,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 953,
                  "end": 964,
                  "name": {
                    "type": "Identifier",
                    "start": 953,
                    "end": 964,
                    "decorators": [],
                    "name": "TStateProps",
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
                  "start": 966,
                  "end": 975,
                  "name": {
                    "type": "Identifier",
                    "start": 966,
                    "end": 975,
                    "decorators": [],
                    "name": "TOwnProps",
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
                "start": 986,
                "end": 1010,
                "decorators": [],
                "name": "mapStateToProps",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1001,
                  "end": 1010,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 1003,
                    "end": 1010
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1017,
              "end": 1078,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1019,
                "end": 1078,
                "typeName": {
                  "type": "Identifier",
                  "start": 1019,
                  "end": 1054,
                  "decorators": [],
                  "name": "InferableComponentEnhancerWithProps",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1054,
                  "end": 1078,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1055,
                      "end": 1066,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1055,
                        "end": 1066,
                        "decorators": [],
                        "name": "TStateProps",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 1068,
                      "end": 1077,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1068,
                        "end": 1077,
                        "decorators": [],
                        "name": "TOwnProps",
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
          {
            "type": "TSCallSignatureDeclaration",
            "start": 1085,
            "end": 1327,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1085,
              "end": 1112,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1086,
                  "end": 1100,
                  "name": {
                    "type": "Identifier",
                    "start": 1086,
                    "end": 1100,
                    "decorators": [],
                    "name": "TDispatchProps",
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
                  "start": 1102,
                  "end": 1111,
                  "name": {
                    "type": "Identifier",
                    "start": 1102,
                    "end": 1111,
                    "decorators": [],
                    "name": "TOwnProps",
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
                "start": 1122,
                "end": 1155,
                "decorators": [],
                "name": "mapStateToProps",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1137,
                  "end": 1155,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 1139,
                    "end": 1155,
                    "types": [
                      {
                        "type": "TSNullKeyword",
                        "start": 1139,
                        "end": 1143
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 1146,
                        "end": 1155
                      }
                    ]
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1165,
                "end": 1192,
                "decorators": [],
                "name": "mapDispatchToProps",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1183,
                  "end": 1192,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 1185,
                    "end": 1192
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1202,
                "end": 1230,
                "decorators": [],
                "name": "mergeProps",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1212,
                  "end": 1230,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 1214,
                    "end": 1230,
                    "types": [
                      {
                        "type": "TSNullKeyword",
                        "start": 1214,
                        "end": 1218
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 1221,
                        "end": 1230
                      }
                    ]
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1240,
                "end": 1256,
                "decorators": [],
                "name": "options",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1247,
                  "end": 1256,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 1249,
                    "end": 1256
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1262,
              "end": 1326,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1264,
                "end": 1326,
                "typeName": {
                  "type": "Identifier",
                  "start": 1264,
                  "end": 1299,
                  "decorators": [],
                  "name": "InferableComponentEnhancerWithProps",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1299,
                  "end": 1326,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1300,
                      "end": 1314,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1300,
                        "end": 1314,
                        "decorators": [],
                        "name": "TDispatchProps",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 1316,
                      "end": 1325,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1316,
                        "end": 1325,
                        "decorators": [],
                        "name": "TOwnProps",
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
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1331,
      "end": 1360,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1343,
          "end": 1359,
          "id": {
            "type": "Identifier",
            "start": 1343,
            "end": 1359,
            "decorators": [],
            "name": "connect",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1350,
              "end": 1359,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1352,
                "end": 1359,
                "typeName": {
                  "type": "Identifier",
                  "start": 1352,
                  "end": 1359,
                  "decorators": [],
                  "name": "Connect",
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
      "type": "VariableDeclaration",
      "start": 1362,
      "end": 1633,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1368,
          "end": 1632,
          "id": {
            "type": "Identifier",
            "start": 1368,
            "end": 1391,
            "decorators": [],
            "name": "myStoreConnect",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1382,
              "end": 1391,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1384,
                "end": 1391,
                "typeName": {
                  "type": "Identifier",
                  "start": 1384,
                  "end": 1391,
                  "decorators": [],
                  "name": "Connect",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 1394,
            "end": 1632,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1408,
                "end": 1429,
                "decorators": [],
                "name": "mapStateToProps",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1424,
                  "end": 1429,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1426,
                    "end": 1429
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1435,
                "end": 1459,
                "decorators": [],
                "name": "mapDispatchToProps",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1454,
                  "end": 1459,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1456,
                    "end": 1459
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1465,
                "end": 1481,
                "decorators": [],
                "name": "mergeProps",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1476,
                  "end": 1481,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1478,
                    "end": 1481
                  }
                }
              },
              {
                "type": "AssignmentPattern",
                "start": 1487,
                "end": 1508,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 1487,
                  "end": 1503,
                  "decorators": [],
                  "name": "options",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1494,
                    "end": 1503,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 1496,
                      "end": 1503
                    }
                  }
                },
                "right": {
                  "type": "ObjectExpression",
                  "start": 1506,
                  "end": 1508,
                  "properties": []
                },
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 1512,
              "end": 1632,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1518,
                  "end": 1630,
                  "argument": {
                    "type": "CallExpression",
                    "start": 1525,
                    "end": 1629,
                    "callee": {
                      "type": "Identifier",
                      "start": 1525,
                      "end": 1532,
                      "decorators": [],
                      "name": "connect",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 1542,
                        "end": 1557,
                        "decorators": [],
                        "name": "mapStateToProps",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 1567,
                        "end": 1585,
                        "decorators": [],
                        "name": "mapDispatchToProps",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 1595,
                        "end": 1605,
                        "decorators": [],
                        "name": "mergeProps",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 1615,
                        "end": 1622,
                        "decorators": [],
                        "name": "options",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  }
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1635,
      "end": 1645,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
