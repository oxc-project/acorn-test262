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
        "start": 10,
        "end": 23
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
              "start": 40,
              "end": 44
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
                          "start": 79,
                          "end": 85
                        },
                        "start": 77,
                        "end": 85
                      },
                      "start": 76,
                      "end": 85
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 88,
                      "end": 92
                    },
                    "start": 86,
                    "end": 92
                  },
                  "start": 75,
                  "end": 93
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
                          "start": 106,
                          "end": 112
                        },
                        "start": 104,
                        "end": 112
                      },
                      "start": 103,
                      "end": 112
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
                          "start": 117,
                          "end": 123
                        },
                        "start": 115,
                        "end": 123
                      },
                      "start": 114,
                      "end": 123
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 126,
                      "end": 130
                    },
                    "start": 124,
                    "end": 130
                  },
                  "start": 102,
                  "end": 131
                }
              ],
              "start": 45,
              "end": 137
            },
            "declare": false,
            "start": 30,
            "end": 137
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 164,
              "end": 165
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
                  "start": 174,
                  "end": 178
                },
                "typeArguments": null,
                "start": 174,
                "end": 178
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
                          "start": 208,
                          "end": 214
                        },
                        "start": 206,
                        "end": 214
                      },
                      "start": 205,
                      "end": 214
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 217,
                      "end": 223
                    },
                    "start": 215,
                    "end": 223
                  },
                  "start": 204,
                  "end": 224
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
                          "start": 269,
                          "end": 275
                        },
                        "start": 267,
                        "end": 275
                      },
                      "start": 266,
                      "end": 275
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
                          "start": 280,
                          "end": 286
                        },
                        "start": 278,
                        "end": 286
                      },
                      "start": 277,
                      "end": 286
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 289,
                      "end": 296
                    },
                    "start": 287,
                    "end": 296
                  },
                  "start": 265,
                  "end": 297
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
                          "start": 339,
                          "end": 340
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 339,
                        "end": 340
                      }
                    ],
                    "start": 338,
                    "end": 341
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
                            "start": 345,
                            "end": 346
                          },
                          "typeArguments": null,
                          "start": 345,
                          "end": 346
                        },
                        "start": 343,
                        "end": 346
                      },
                      "start": 342,
                      "end": 346
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 349,
                      "end": 355
                    },
                    "start": 347,
                    "end": 355
                  },
                  "start": 338,
                  "end": 356
                }
              ],
              "start": 179,
              "end": 394
            },
            "declare": false,
            "start": 154,
            "end": 394
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 410,
              "end": 415
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
                          "start": 450,
                          "end": 456
                        },
                        "start": 448,
                        "end": 456
                      },
                      "start": 447,
                      "end": 456
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 459,
                      "end": 465
                    },
                    "start": 457,
                    "end": 465
                  },
                  "start": 446,
                  "end": 466
                }
              ],
              "start": 416,
              "end": 472
            },
            "declare": false,
            "start": 400,
            "end": 472
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null,
              "start": 499,
              "end": 501
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
                  "start": 510,
                  "end": 515
                },
                "typeArguments": null,
                "start": 510,
                "end": 515
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
                          "start": 545,
                          "end": 551
                        },
                        "start": 543,
                        "end": 551
                      },
                      "start": 542,
                      "end": 551
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 554,
                      "end": 560
                    },
                    "start": 552,
                    "end": 560
                  },
                  "start": 541,
                  "end": 561
                }
              ],
              "start": 516,
              "end": 607
            },
            "declare": false,
            "start": 489,
            "end": 607
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I3",
              "optional": false,
              "typeAnnotation": null,
              "start": 634,
              "end": 636
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
                  "start": 645,
                  "end": 650
                },
                "typeArguments": null,
                "start": 645,
                "end": 650
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
                          "start": 677,
                          "end": 678
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 677,
                        "end": 678
                      }
                    ],
                    "start": 676,
                    "end": 679
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
                            "start": 683,
                            "end": 684
                          },
                          "typeArguments": null,
                          "start": 683,
                          "end": 684
                        },
                        "start": 681,
                        "end": 684
                      },
                      "start": 680,
                      "end": 684
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 687,
                      "end": 693
                    },
                    "start": 685,
                    "end": 693
                  },
                  "start": 676,
                  "end": 694
                }
              ],
              "start": 651,
              "end": 733
            },
            "declare": false,
            "start": 624,
            "end": 733
          }
        ],
        "start": 24,
        "end": 735
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 735
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MemberWithCallSignature",
        "optional": false,
        "typeAnnotation": null,
        "start": 747,
        "end": 770
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
              "start": 787,
              "end": 791
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
                    "start": 822,
                    "end": 823
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
                              "start": 829,
                              "end": 835
                            },
                            "start": 827,
                            "end": 835
                          },
                          "start": 826,
                          "end": 835
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 840,
                          "end": 844
                        },
                        "start": 837,
                        "end": 844
                      },
                      "start": 825,
                      "end": 844
                    },
                    "start": 823,
                    "end": 844
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 822,
                  "end": 845
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
                    "start": 854,
                    "end": 856
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
                              "start": 862,
                              "end": 868
                            },
                            "start": 860,
                            "end": 868
                          },
                          "start": 859,
                          "end": 868
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
                              "start": 873,
                              "end": 879
                            },
                            "start": 871,
                            "end": 879
                          },
                          "start": 870,
                          "end": 879
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 884,
                          "end": 888
                        },
                        "start": 881,
                        "end": 888
                      },
                      "start": 858,
                      "end": 888
                    },
                    "start": 856,
                    "end": 888
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 854,
                  "end": 889
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
                    "start": 898,
                    "end": 900
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
                              "start": 903,
                              "end": 904
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 903,
                            "end": 904
                          }
                        ],
                        "start": 902,
                        "end": 905
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
                                "start": 909,
                                "end": 910
                              },
                              "typeArguments": null,
                              "start": 909,
                              "end": 910
                            },
                            "start": 907,
                            "end": 910
                          },
                          "start": 906,
                          "end": 910
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 915,
                          "end": 919
                        },
                        "start": 912,
                        "end": 919
                      },
                      "start": 902,
                      "end": 919
                    },
                    "start": 900,
                    "end": 919
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 898,
                  "end": 920
                }
              ],
              "start": 792,
              "end": 926
            },
            "declare": false,
            "start": 777,
            "end": 926
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 953,
              "end": 954
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
                  "start": 963,
                  "end": 967
                },
                "typeArguments": null,
                "start": 963,
                "end": 967
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
                    "start": 993,
                    "end": 994
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
                              "start": 1000,
                              "end": 1006
                            },
                            "start": 998,
                            "end": 1006
                          },
                          "start": 997,
                          "end": 1006
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1011,
                          "end": 1017
                        },
                        "start": 1008,
                        "end": 1017
                      },
                      "start": 996,
                      "end": 1017
                    },
                    "start": 994,
                    "end": 1017
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 993,
                  "end": 1018
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
                    "start": 1059,
                    "end": 1061
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
                              "start": 1067,
                              "end": 1073
                            },
                            "start": 1065,
                            "end": 1073
                          },
                          "start": 1064,
                          "end": 1073
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
                              "start": 1078,
                              "end": 1084
                            },
                            "start": 1076,
                            "end": 1084
                          },
                          "start": 1075,
                          "end": 1084
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 1089,
                          "end": 1096
                        },
                        "start": 1086,
                        "end": 1096
                      },
                      "start": 1063,
                      "end": 1096
                    },
                    "start": 1061,
                    "end": 1096
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1059,
                  "end": 1097
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
                    "start": 1138,
                    "end": 1140
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
                              "start": 1143,
                              "end": 1144
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1143,
                            "end": 1144
                          }
                        ],
                        "start": 1142,
                        "end": 1145
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
                                "start": 1149,
                                "end": 1150
                              },
                              "typeArguments": null,
                              "start": 1149,
                              "end": 1150
                            },
                            "start": 1147,
                            "end": 1150
                          },
                          "start": 1146,
                          "end": 1150
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1155,
                          "end": 1161
                        },
                        "start": 1152,
                        "end": 1161
                      },
                      "start": 1142,
                      "end": 1161
                    },
                    "start": 1140,
                    "end": 1161
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1138,
                  "end": 1162
                }
              ],
              "start": 968,
              "end": 1200
            },
            "declare": false,
            "start": 943,
            "end": 1200
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1216,
              "end": 1221
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
                    "start": 1252,
                    "end": 1253
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
                              "start": 1259,
                              "end": 1265
                            },
                            "start": 1257,
                            "end": 1265
                          },
                          "start": 1256,
                          "end": 1265
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1270,
                          "end": 1276
                        },
                        "start": 1267,
                        "end": 1276
                      },
                      "start": 1255,
                      "end": 1276
                    },
                    "start": 1253,
                    "end": 1276
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1252,
                  "end": 1277
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
                    "start": 1286,
                    "end": 1288
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
                              "start": 1291,
                              "end": 1292
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1291,
                            "end": 1292
                          }
                        ],
                        "start": 1290,
                        "end": 1293
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
                                "start": 1297,
                                "end": 1298
                              },
                              "typeArguments": null,
                              "start": 1297,
                              "end": 1298
                            },
                            "start": 1295,
                            "end": 1298
                          },
                          "start": 1294,
                          "end": 1298
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
                            "start": 1303,
                            "end": 1304
                          },
                          "typeArguments": null,
                          "start": 1303,
                          "end": 1304
                        },
                        "start": 1300,
                        "end": 1304
                      },
                      "start": 1290,
                      "end": 1304
                    },
                    "start": 1288,
                    "end": 1304
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1286,
                  "end": 1305
                }
              ],
              "start": 1222,
              "end": 1311
            },
            "declare": false,
            "start": 1206,
            "end": 1311
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1338,
              "end": 1340
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
                  "start": 1349,
                  "end": 1354
                },
                "typeArguments": null,
                "start": 1349,
                "end": 1354
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
                    "start": 1380,
                    "end": 1381
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
                              "start": 1387,
                              "end": 1393
                            },
                            "start": 1385,
                            "end": 1393
                          },
                          "start": 1384,
                          "end": 1393
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1398,
                          "end": 1404
                        },
                        "start": 1395,
                        "end": 1404
                      },
                      "start": 1383,
                      "end": 1404
                    },
                    "start": 1381,
                    "end": 1404
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1380,
                  "end": 1405
                }
              ],
              "start": 1355,
              "end": 1451
            },
            "declare": false,
            "start": 1328,
            "end": 1451
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1478,
              "end": 1480
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
                  "start": 1489,
                  "end": 1494
                },
                "typeArguments": null,
                "start": 1489,
                "end": 1494
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
                    "start": 1520,
                    "end": 1522
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
                              "start": 1525,
                              "end": 1526
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1525,
                            "end": 1526
                          }
                        ],
                        "start": 1524,
                        "end": 1527
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
                                "start": 1531,
                                "end": 1532
                              },
                              "typeArguments": null,
                              "start": 1531,
                              "end": 1532
                            },
                            "start": 1529,
                            "end": 1532
                          },
                          "start": 1528,
                          "end": 1532
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1537,
                          "end": 1543
                        },
                        "start": 1534,
                        "end": 1543
                      },
                      "start": 1524,
                      "end": 1543
                    },
                    "start": 1522,
                    "end": 1543
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1520,
                  "end": 1544
                }
              ],
              "start": 1495,
              "end": 1590
            },
            "declare": false,
            "start": 1468,
            "end": 1590
          }
        ],
        "start": 771,
        "end": 1592
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 737,
      "end": 1592
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1592
}
```
