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
        "name": "Omit",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
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
              "start": 10,
              "end": 11
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 10,
            "end": 11
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 14
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
                  "start": 29,
                  "end": 30
                },
                "typeArguments": null,
                "start": 29,
                "end": 30
              },
              "start": 23,
              "end": 30
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 13,
            "end": 30
          }
        ],
        "start": 9,
        "end": 31
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null,
          "start": 34,
          "end": 38
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
                "start": 39,
                "end": 40
              },
              "typeArguments": null,
              "start": 39,
              "end": 40
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Exclude",
                "optional": false,
                "typeAnnotation": null,
                "start": 42,
                "end": 49
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
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
                        "start": 56,
                        "end": 57
                      },
                      "typeArguments": null,
                      "start": 56,
                      "end": 57
                    },
                    "start": 50,
                    "end": 57
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 59,
                      "end": 60
                    },
                    "typeArguments": null,
                    "start": 59,
                    "end": 60
                  }
                ],
                "start": 49,
                "end": 61
              },
              "start": 42,
              "end": 61
            }
          ],
          "start": 38,
          "end": 62
        },
        "start": 34,
        "end": 62
      },
      "declare": false,
      "start": 0,
      "end": 63
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Shared",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 76
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "InjectedProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 159
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 146,
            "end": 159
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "DecorationTargetProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 165,
              "end": 186
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shared",
                "optional": false,
                "typeAnnotation": null,
                "start": 195,
                "end": 201
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InjectedProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 202,
                      "end": 215
                    },
                    "typeArguments": null,
                    "start": 202,
                    "end": 215
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DecorationTargetProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 217,
                      "end": 238
                    },
                    "typeArguments": null,
                    "start": 217,
                    "end": 238
                  }
                ],
                "start": 201,
                "end": 239
              },
              "start": 195,
              "end": 239
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 165,
            "end": 239
          }
        ],
        "start": 76,
        "end": 245
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 259,
          "end": 260
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Extract",
            "optional": false,
            "typeAnnotation": null,
            "start": 264,
            "end": 271
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InjectedProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 278,
                    "end": 291
                  },
                  "typeArguments": null,
                  "start": 278,
                  "end": 291
                },
                "start": 272,
                "end": 291
              },
              {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DecorationTargetProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 299,
                    "end": 320
                  },
                  "typeArguments": null,
                  "start": 299,
                  "end": 320
                },
                "start": 293,
                "end": 320
              }
            ],
            "start": 271,
            "end": 321
          },
          "start": 264,
          "end": 321
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
                "name": "InjectedProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 324,
                "end": 337
              },
              "typeArguments": null,
              "start": 324,
              "end": 337
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 338,
                "end": 339
              },
              "typeArguments": null,
              "start": 338,
              "end": 339
            },
            "start": 324,
            "end": 340
          },
          "extendsType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DecorationTargetProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 349,
                "end": 370
              },
              "typeArguments": null,
              "start": 349,
              "end": 370
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 371,
                "end": 372
              },
              "typeArguments": null,
              "start": 371,
              "end": 372
            },
            "start": 349,
            "end": 373
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DecorationTargetProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 376,
                "end": 397
              },
              "typeArguments": null,
              "start": 376,
              "end": 397
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 398,
                "end": 399
              },
              "typeArguments": null,
              "start": 398,
              "end": 399
            },
            "start": 376,
            "end": 400
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 403,
            "end": 408
          },
          "start": 324,
          "end": 408
        },
        "optional": false,
        "readonly": null,
        "start": 248,
        "end": 415
      },
      "declare": false,
      "start": 65,
      "end": 416
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 428,
        "end": 442
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 443,
              "end": 444
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 443,
            "end": 444
          }
        ],
        "start": 442,
        "end": 445
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
              "name": "defaultProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 452,
              "end": 464
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Partial",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 467,
                  "end": 474
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 475,
                        "end": 476
                      },
                      "typeArguments": null,
                      "start": 475,
                      "end": 476
                    }
                  ],
                  "start": 474,
                  "end": 477
                },
                "start": 467,
                "end": 477
              },
              "start": 465,
              "end": 477
            },
            "accessibility": null,
            "static": false,
            "start": 452,
            "end": 478
          }
        ],
        "start": 446,
        "end": 530
      },
      "declare": false,
      "start": 418,
      "end": 530
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InferableComponentEnhancerWithProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 542,
        "end": 577
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TInjectedProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 578,
              "end": 592
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 578,
            "end": 592
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TNeedsProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 594,
              "end": 605
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 594,
            "end": 605
          }
        ],
        "start": 577,
        "end": 606
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 614,
                    "end": 615
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Shared",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 624,
                      "end": 630
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TInjectedProps",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 631,
                            "end": 645
                          },
                          "typeArguments": null,
                          "start": 631,
                          "end": 645
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 647,
                            "end": 648
                          },
                          "typeArguments": null,
                          "start": 647,
                          "end": 648
                        }
                      ],
                      "start": 630,
                      "end": 649
                    },
                    "start": 624,
                    "end": 649
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 614,
                  "end": 649
                }
              ],
              "start": 613,
              "end": 650
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "component",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ComponentClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 671,
                      "end": 685
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 686,
                            "end": 687
                          },
                          "typeArguments": null,
                          "start": 686,
                          "end": 687
                        }
                      ],
                      "start": 685,
                      "end": 688
                    },
                    "start": 671,
                    "end": 688
                  },
                  "start": 669,
                  "end": 688
                },
                "start": 660,
                "end": 688
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ComponentClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 696,
                      "end": 710
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSIntersectionType",
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Omit",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 711,
                                "end": 715
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "P",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 716,
                                      "end": 717
                                    },
                                    "typeArguments": null,
                                    "start": 716,
                                    "end": 717
                                  },
                                  {
                                    "type": "TSTypeOperator",
                                    "operator": "keyof",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Shared",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 725,
                                        "end": 731
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TInjectedProps",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 732,
                                              "end": 746
                                            },
                                            "typeArguments": null,
                                            "start": 732,
                                            "end": 746
                                          },
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "P",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 748,
                                              "end": 749
                                            },
                                            "typeArguments": null,
                                            "start": 748,
                                            "end": 749
                                          }
                                        ],
                                        "start": 731,
                                        "end": 750
                                      },
                                      "start": 725,
                                      "end": 750
                                    },
                                    "start": 719,
                                    "end": 750
                                  }
                                ],
                                "start": 715,
                                "end": 751
                              },
                              "start": 711,
                              "end": 751
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TNeedsProps",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 754,
                                "end": 765
                              },
                              "typeArguments": null,
                              "start": 754,
                              "end": 765
                            }
                          ],
                          "start": 711,
                          "end": 765
                        }
                      ],
                      "start": 710,
                      "end": 766
                    },
                    "start": 696,
                    "end": 766
                  },
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
                          "name": "WrappedComponent",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 771,
                          "end": 787
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ComponentClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 789,
                              "end": 803
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "P",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 804,
                                    "end": 805
                                  },
                                  "typeArguments": null,
                                  "start": 804,
                                  "end": 805
                                }
                              ],
                              "start": 803,
                              "end": 806
                            },
                            "start": 789,
                            "end": 806
                          },
                          "start": 787,
                          "end": 806
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 771,
                        "end": 806
                      }
                    ],
                    "start": 769,
                    "end": 808
                  }
                ],
                "start": 696,
                "end": 808
              },
              "start": 694,
              "end": 808
            },
            "start": 613,
            "end": 808
          }
        ],
        "start": 607,
        "end": 810
      },
      "declare": false,
      "start": 532,
      "end": 810
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Connect",
        "optional": false,
        "typeAnnotation": null,
        "start": 874,
        "end": 881
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TStateProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 953,
                    "end": 964
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 953,
                  "end": 964
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TOwnProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 966,
                    "end": 975
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 966,
                  "end": 975
                }
              ],
              "start": 952,
              "end": 976
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "mapStateToProps",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 1003,
                    "end": 1010
                  },
                  "start": 1001,
                  "end": 1010
                },
                "start": 986,
                "end": 1010
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "InferableComponentEnhancerWithProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1019,
                  "end": 1054
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TStateProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1055,
                        "end": 1066
                      },
                      "typeArguments": null,
                      "start": 1055,
                      "end": 1066
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TOwnProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1068,
                        "end": 1077
                      },
                      "typeArguments": null,
                      "start": 1068,
                      "end": 1077
                    }
                  ],
                  "start": 1054,
                  "end": 1078
                },
                "start": 1019,
                "end": 1078
              },
              "start": 1017,
              "end": 1078
            },
            "start": 952,
            "end": 1079
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TDispatchProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1086,
                    "end": 1100
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1086,
                  "end": 1100
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TOwnProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1102,
                    "end": 1111
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1102,
                  "end": 1111
                }
              ],
              "start": 1085,
              "end": 1112
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "mapStateToProps",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
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
                    ],
                    "start": 1139,
                    "end": 1155
                  },
                  "start": 1137,
                  "end": 1155
                },
                "start": 1122,
                "end": 1155
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "mapDispatchToProps",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 1185,
                    "end": 1192
                  },
                  "start": 1183,
                  "end": 1192
                },
                "start": 1165,
                "end": 1192
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "mergeProps",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
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
                    ],
                    "start": 1214,
                    "end": 1230
                  },
                  "start": 1212,
                  "end": 1230
                },
                "start": 1202,
                "end": 1230
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "options",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 1249,
                    "end": 1256
                  },
                  "start": 1247,
                  "end": 1256
                },
                "start": 1240,
                "end": 1256
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "InferableComponentEnhancerWithProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1264,
                  "end": 1299
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TDispatchProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1300,
                        "end": 1314
                      },
                      "typeArguments": null,
                      "start": 1300,
                      "end": 1314
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TOwnProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1316,
                        "end": 1325
                      },
                      "typeArguments": null,
                      "start": 1316,
                      "end": 1325
                    }
                  ],
                  "start": 1299,
                  "end": 1326
                },
                "start": 1264,
                "end": 1326
              },
              "start": 1262,
              "end": 1326
            },
            "start": 1085,
            "end": 1327
          }
        ],
        "start": 882,
        "end": 1329
      },
      "declare": false,
      "start": 864,
      "end": 1329
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "connect",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Connect",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1352,
                  "end": 1359
                },
                "typeArguments": null,
                "start": 1352,
                "end": 1359
              },
              "start": 1350,
              "end": 1359
            },
            "start": 1343,
            "end": 1359
          },
          "init": null,
          "definite": false,
          "start": 1343,
          "end": 1359
        }
      ],
      "declare": true,
      "start": 1331,
      "end": 1360
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
            "name": "myStoreConnect",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Connect",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1384,
                  "end": 1391
                },
                "typeArguments": null,
                "start": 1384,
                "end": 1391
              },
              "start": 1382,
              "end": 1391
            },
            "start": 1368,
            "end": 1391
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "mapStateToProps",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1426,
                    "end": 1429
                  },
                  "start": 1424,
                  "end": 1429
                },
                "start": 1408,
                "end": 1429
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "mapDispatchToProps",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1456,
                    "end": 1459
                  },
                  "start": 1454,
                  "end": 1459
                },
                "start": 1435,
                "end": 1459
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "mergeProps",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1478,
                    "end": 1481
                  },
                  "start": 1476,
                  "end": 1481
                },
                "start": 1465,
                "end": 1481
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "options",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 1496,
                      "end": 1503
                    },
                    "start": 1494,
                    "end": 1503
                  },
                  "start": 1487,
                  "end": 1503
                },
                "right": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 1506,
                  "end": 1508
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 1487,
                "end": 1508
              }
            ],
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
                      "name": "connect",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1525,
                      "end": 1532
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "mapStateToProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1542,
                        "end": 1557
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "mapDispatchToProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1567,
                        "end": 1585
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "mergeProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1595,
                        "end": 1605
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "options",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1615,
                        "end": 1622
                      }
                    ],
                    "optional": false,
                    "start": 1525,
                    "end": 1629
                  },
                  "start": 1518,
                  "end": 1630
                }
              ],
              "start": 1512,
              "end": 1632
            },
            "expression": false,
            "start": 1394,
            "end": 1632
          },
          "definite": false,
          "start": 1368,
          "end": 1632
        }
      ],
      "declare": false,
      "start": 1362,
      "end": 1633
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1635,
      "end": 1645
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1645
}
```
