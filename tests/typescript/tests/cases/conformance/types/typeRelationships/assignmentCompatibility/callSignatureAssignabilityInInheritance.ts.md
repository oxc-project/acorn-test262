__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CallSignature",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 20
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 41
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 76,
                          "end": 82
                        },
                        "start": 74,
                        "end": 82
                      },
                      "start": 73,
                      "end": 82
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 85,
                      "end": 89
                    },
                    "start": 83,
                    "end": 89
                  },
                  "start": 72,
                  "end": 90
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 103,
                          "end": 109
                        },
                        "start": 101,
                        "end": 109
                      },
                      "start": 100,
                      "end": 109
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 114,
                          "end": 120
                        },
                        "start": 112,
                        "end": 120
                      },
                      "start": 111,
                      "end": 120
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 123,
                      "end": 127
                    },
                    "start": 121,
                    "end": 127
                  },
                  "start": 99,
                  "end": 128
                }
              ],
              "start": 42,
              "end": 134
            },
            "declare": false,
            "start": 27,
            "end": 134
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 161,
              "end": 162
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 171,
                  "end": 175
                },
                "typeArguments": null,
                "start": 171,
                "end": 175
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 205,
                          "end": 211
                        },
                        "start": 203,
                        "end": 211
                      },
                      "start": 202,
                      "end": 211
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 214,
                      "end": 220
                    },
                    "start": 212,
                    "end": 220
                  },
                  "start": 201,
                  "end": 221
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 266,
                          "end": 272
                        },
                        "start": 264,
                        "end": 272
                      },
                      "start": 263,
                      "end": 272
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 277,
                          "end": 283
                        },
                        "start": 275,
                        "end": 283
                      },
                      "start": 274,
                      "end": 283
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 286,
                      "end": 293
                    },
                    "start": 284,
                    "end": 293
                  },
                  "start": 262,
                  "end": 294
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 336,
                          "end": 337
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 336,
                        "end": 337
                      }
                    ],
                    "start": 335,
                    "end": 338
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
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
                      "start": 339,
                      "end": 343
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 346,
                      "end": 352
                    },
                    "start": 344,
                    "end": 352
                  },
                  "start": 335,
                  "end": 353
                }
              ],
              "start": 176,
              "end": 391
            },
            "declare": false,
            "start": 151,
            "end": 391
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 407,
              "end": 412
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 447,
                          "end": 453
                        },
                        "start": 445,
                        "end": 453
                      },
                      "start": 444,
                      "end": 453
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 456,
                      "end": 462
                    },
                    "start": 454,
                    "end": 462
                  },
                  "start": 443,
                  "end": 463
                }
              ],
              "start": 413,
              "end": 469
            },
            "declare": false,
            "start": 397,
            "end": 469
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null,
              "start": 496,
              "end": 498
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 507,
                  "end": 512
                },
                "typeArguments": null,
                "start": 507,
                "end": 512
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 542,
                          "end": 548
                        },
                        "start": 540,
                        "end": 548
                      },
                      "start": 539,
                      "end": 548
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 551,
                      "end": 557
                    },
                    "start": 549,
                    "end": 557
                  },
                  "start": 538,
                  "end": 558
                }
              ],
              "start": 513,
              "end": 604
            },
            "declare": false,
            "start": 486,
            "end": 604
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I3",
              "optional": false,
              "typeAnnotation": null,
              "start": 631,
              "end": 633
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 642,
                  "end": 647
                },
                "typeArguments": null,
                "start": 642,
                "end": 647
              }
            ],
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 674,
                          "end": 675
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 674,
                        "end": 675
                      }
                    ],
                    "start": 673,
                    "end": 676
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
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
                            "start": 680,
                            "end": 681
                          },
                          "typeArguments": null,
                          "start": 680,
                          "end": 681
                        },
                        "start": 678,
                        "end": 681
                      },
                      "start": 677,
                      "end": 681
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 684,
                      "end": 690
                    },
                    "start": 682,
                    "end": 690
                  },
                  "start": 673,
                  "end": 691
                }
              ],
              "start": 648,
              "end": 730
            },
            "declare": false,
            "start": 621,
            "end": 730
          }
        ],
        "start": 21,
        "end": 732
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 732
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MemberWithCallSignature",
        "optional": false,
        "typeAnnotation": null,
        "start": 741,
        "end": 764
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 781,
              "end": 785
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 816,
                    "end": 817
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 823,
                              "end": 829
                            },
                            "start": 821,
                            "end": 829
                          },
                          "start": 820,
                          "end": 829
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 834,
                          "end": 838
                        },
                        "start": 831,
                        "end": 838
                      },
                      "start": 819,
                      "end": 838
                    },
                    "start": 817,
                    "end": 838
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 816,
                  "end": 839
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 848,
                    "end": 850
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 856,
                              "end": 862
                            },
                            "start": 854,
                            "end": 862
                          },
                          "start": 853,
                          "end": 862
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 867,
                              "end": 873
                            },
                            "start": 865,
                            "end": 873
                          },
                          "start": 864,
                          "end": 873
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 878,
                          "end": 882
                        },
                        "start": 875,
                        "end": 882
                      },
                      "start": 852,
                      "end": 882
                    },
                    "start": 850,
                    "end": 882
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 848,
                  "end": 883
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 892,
                    "end": 894
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 897,
                              "end": 898
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 897,
                            "end": 898
                          }
                        ],
                        "start": 896,
                        "end": 899
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 903,
                                "end": 904
                              },
                              "typeArguments": null,
                              "start": 903,
                              "end": 904
                            },
                            "start": 901,
                            "end": 904
                          },
                          "start": 900,
                          "end": 904
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 909,
                          "end": 913
                        },
                        "start": 906,
                        "end": 913
                      },
                      "start": 896,
                      "end": 913
                    },
                    "start": 894,
                    "end": 913
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 892,
                  "end": 914
                }
              ],
              "start": 786,
              "end": 920
            },
            "declare": false,
            "start": 771,
            "end": 920
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 947,
              "end": 948
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 957,
                  "end": 961
                },
                "typeArguments": null,
                "start": 957,
                "end": 961
              }
            ],
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 987,
                    "end": 988
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 994,
                              "end": 1000
                            },
                            "start": 992,
                            "end": 1000
                          },
                          "start": 991,
                          "end": 1000
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1005,
                          "end": 1011
                        },
                        "start": 1002,
                        "end": 1011
                      },
                      "start": 990,
                      "end": 1011
                    },
                    "start": 988,
                    "end": 1011
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 987,
                  "end": 1012
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1053,
                    "end": 1055
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1061,
                              "end": 1067
                            },
                            "start": 1059,
                            "end": 1067
                          },
                          "start": 1058,
                          "end": 1067
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1072,
                              "end": 1078
                            },
                            "start": 1070,
                            "end": 1078
                          },
                          "start": 1069,
                          "end": 1078
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 1083,
                          "end": 1090
                        },
                        "start": 1080,
                        "end": 1090
                      },
                      "start": 1057,
                      "end": 1090
                    },
                    "start": 1055,
                    "end": 1090
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1053,
                  "end": 1091
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1132,
                    "end": 1134
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1137,
                              "end": 1138
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1137,
                            "end": 1138
                          }
                        ],
                        "start": 1136,
                        "end": 1139
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 1143,
                                "end": 1144
                              },
                              "typeArguments": null,
                              "start": 1143,
                              "end": 1144
                            },
                            "start": 1141,
                            "end": 1144
                          },
                          "start": 1140,
                          "end": 1144
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1149,
                          "end": 1155
                        },
                        "start": 1146,
                        "end": 1155
                      },
                      "start": 1136,
                      "end": 1155
                    },
                    "start": 1134,
                    "end": 1155
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1132,
                  "end": 1156
                }
              ],
              "start": 962,
              "end": 1194
            },
            "declare": false,
            "start": 937,
            "end": 1194
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1210,
              "end": 1215
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1246,
                    "end": 1247
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1253,
                              "end": 1259
                            },
                            "start": 1251,
                            "end": 1259
                          },
                          "start": 1250,
                          "end": 1259
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1264,
                          "end": 1270
                        },
                        "start": 1261,
                        "end": 1270
                      },
                      "start": 1249,
                      "end": 1270
                    },
                    "start": 1247,
                    "end": 1270
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1246,
                  "end": 1271
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1280,
                    "end": 1282
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1285,
                              "end": 1286
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1285,
                            "end": 1286
                          }
                        ],
                        "start": 1284,
                        "end": 1287
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 1291,
                                "end": 1292
                              },
                              "typeArguments": null,
                              "start": 1291,
                              "end": 1292
                            },
                            "start": 1289,
                            "end": 1292
                          },
                          "start": 1288,
                          "end": 1292
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
                            "start": 1297,
                            "end": 1298
                          },
                          "typeArguments": null,
                          "start": 1297,
                          "end": 1298
                        },
                        "start": 1294,
                        "end": 1298
                      },
                      "start": 1284,
                      "end": 1298
                    },
                    "start": 1282,
                    "end": 1298
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1280,
                  "end": 1299
                }
              ],
              "start": 1216,
              "end": 1305
            },
            "declare": false,
            "start": 1200,
            "end": 1305
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1332,
              "end": 1334
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1343,
                  "end": 1348
                },
                "typeArguments": null,
                "start": 1343,
                "end": 1348
              }
            ],
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1374,
                    "end": 1375
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1381,
                              "end": 1387
                            },
                            "start": 1379,
                            "end": 1387
                          },
                          "start": 1378,
                          "end": 1387
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1392,
                          "end": 1398
                        },
                        "start": 1389,
                        "end": 1398
                      },
                      "start": 1377,
                      "end": 1398
                    },
                    "start": 1375,
                    "end": 1398
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1374,
                  "end": 1399
                }
              ],
              "start": 1349,
              "end": 1445
            },
            "declare": false,
            "start": 1322,
            "end": 1445
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1472,
              "end": 1474
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1483,
                  "end": 1488
                },
                "typeArguments": null,
                "start": 1483,
                "end": 1488
              }
            ],
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
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1514,
                    "end": 1516
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1519,
                              "end": 1520
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1519,
                            "end": 1520
                          }
                        ],
                        "start": 1518,
                        "end": 1521
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 1525,
                                "end": 1526
                              },
                              "typeArguments": null,
                              "start": 1525,
                              "end": 1526
                            },
                            "start": 1523,
                            "end": 1526
                          },
                          "start": 1522,
                          "end": 1526
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1531,
                          "end": 1537
                        },
                        "start": 1528,
                        "end": 1537
                      },
                      "start": 1518,
                      "end": 1537
                    },
                    "start": 1516,
                    "end": 1537
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1514,
                  "end": 1538
                }
              ],
              "start": 1489,
              "end": 1584
            },
            "declare": false,
            "start": 1462,
            "end": 1584
          }
        ],
        "start": 765,
        "end": 1586
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 734,
      "end": 1586
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1586
}
```
