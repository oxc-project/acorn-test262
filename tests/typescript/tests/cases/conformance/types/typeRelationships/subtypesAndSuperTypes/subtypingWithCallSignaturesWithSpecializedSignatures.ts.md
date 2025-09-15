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
        "start": 128,
        "end": 141
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
              "start": 158,
              "end": 162
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
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "'a'",
                            "start": 197,
                            "end": 200
                          },
                          "start": 197,
                          "end": 200
                        },
                        "start": 195,
                        "end": 200
                      },
                      "start": 194,
                      "end": 200
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 203,
                      "end": 207
                    },
                    "start": 201,
                    "end": 207
                  },
                  "start": 193,
                  "end": 208
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
                          "type": "TSStringKeyword",
                          "start": 221,
                          "end": 227
                        },
                        "start": 219,
                        "end": 227
                      },
                      "start": 218,
                      "end": 227
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
                          "start": 232,
                          "end": 238
                        },
                        "start": 230,
                        "end": 238
                      },
                      "start": 229,
                      "end": 238
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 241,
                      "end": 245
                    },
                    "start": 239,
                    "end": 245
                  },
                  "start": 217,
                  "end": 246
                }
              ],
              "start": 163,
              "end": 252
            },
            "declare": false,
            "start": 148,
            "end": 252
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 279,
              "end": 280
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
                  "start": 289,
                  "end": 293
                },
                "typeArguments": null,
                "start": 289,
                "end": 293
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
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "'a'",
                            "start": 323,
                            "end": 326
                          },
                          "start": 323,
                          "end": 326
                        },
                        "start": 321,
                        "end": 326
                      },
                      "start": 320,
                      "end": 326
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 329,
                      "end": 335
                    },
                    "start": 327,
                    "end": 335
                  },
                  "start": 319,
                  "end": 336
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
                          "type": "TSStringKeyword",
                          "start": 381,
                          "end": 387
                        },
                        "start": 379,
                        "end": 387
                      },
                      "start": 378,
                      "end": 387
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
                          "start": 392,
                          "end": 398
                        },
                        "start": 390,
                        "end": 398
                      },
                      "start": 389,
                      "end": 398
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 401,
                      "end": 407
                    },
                    "start": 399,
                    "end": 407
                  },
                  "start": 377,
                  "end": 408
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
                          "start": 450,
                          "end": 451
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 450,
                        "end": 451
                      }
                    ],
                    "start": 449,
                    "end": 452
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
                            "start": 456,
                            "end": 457
                          },
                          "typeArguments": null,
                          "start": 456,
                          "end": 457
                        },
                        "start": 454,
                        "end": 457
                      },
                      "start": 453,
                      "end": 457
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 460,
                      "end": 466
                    },
                    "start": 458,
                    "end": 466
                  },
                  "start": 449,
                  "end": 467
                }
              ],
              "start": 294,
              "end": 505
            },
            "declare": false,
            "start": 269,
            "end": 505
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 521,
              "end": 526
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
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "'a'",
                            "start": 561,
                            "end": 564
                          },
                          "start": 561,
                          "end": 564
                        },
                        "start": 559,
                        "end": 564
                      },
                      "start": 558,
                      "end": 564
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 567,
                      "end": 573
                    },
                    "start": 565,
                    "end": 573
                  },
                  "start": 557,
                  "end": 574
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
                          "type": "TSStringKeyword",
                          "start": 587,
                          "end": 593
                        },
                        "start": 585,
                        "end": 593
                      },
                      "start": 584,
                      "end": 593
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 596,
                      "end": 602
                    },
                    "start": 594,
                    "end": 602
                  },
                  "start": 583,
                  "end": 603
                }
              ],
              "start": 527,
              "end": 609
            },
            "declare": false,
            "start": 511,
            "end": 609
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null,
              "start": 636,
              "end": 638
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
                  "start": 647,
                  "end": 652
                },
                "typeArguments": null,
                "start": 647,
                "end": 652
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
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "'a'",
                            "start": 682,
                            "end": 685
                          },
                          "start": 682,
                          "end": 685
                        },
                        "start": 680,
                        "end": 685
                      },
                      "start": 679,
                      "end": 685
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 688,
                      "end": 694
                    },
                    "start": 686,
                    "end": 694
                  },
                  "start": 678,
                  "end": 695
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
                          "type": "TSStringKeyword",
                          "start": 708,
                          "end": 714
                        },
                        "start": 706,
                        "end": 714
                      },
                      "start": 705,
                      "end": 714
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 717,
                      "end": 723
                    },
                    "start": 715,
                    "end": 723
                  },
                  "start": 704,
                  "end": 724
                }
              ],
              "start": 653,
              "end": 770
            },
            "declare": false,
            "start": 626,
            "end": 770
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I3",
              "optional": false,
              "typeAnnotation": null,
              "start": 797,
              "end": 799
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
                  "start": 808,
                  "end": 813
                },
                "typeArguments": null,
                "start": 808,
                "end": 813
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
                          "start": 840,
                          "end": 841
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 840,
                        "end": 841
                      }
                    ],
                    "start": 839,
                    "end": 842
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
                            "start": 846,
                            "end": 847
                          },
                          "typeArguments": null,
                          "start": 846,
                          "end": 847
                        },
                        "start": 844,
                        "end": 847
                      },
                      "start": 843,
                      "end": 847
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 850,
                      "end": 856
                    },
                    "start": 848,
                    "end": 856
                  },
                  "start": 839,
                  "end": 857
                }
              ],
              "start": 814,
              "end": 896
            },
            "declare": false,
            "start": 787,
            "end": 896
          }
        ],
        "start": 142,
        "end": 898
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 118,
      "end": 898
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MemberWithCallSignature",
        "optional": false,
        "typeAnnotation": null,
        "start": 910,
        "end": 933
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
              "start": 950,
              "end": 954
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
                    "start": 985,
                    "end": 986
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
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
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "a",
                                    "raw": "'a'",
                                    "start": 1006,
                                    "end": 1009
                                  },
                                  "start": 1006,
                                  "end": 1009
                                },
                                "start": 1004,
                                "end": 1009
                              },
                              "start": 1003,
                              "end": 1009
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 1012,
                              "end": 1016
                            },
                            "start": 1010,
                            "end": 1016
                          },
                          "start": 1002,
                          "end": 1017
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
                                  "type": "TSStringKeyword",
                                  "start": 1034,
                                  "end": 1040
                                },
                                "start": 1032,
                                "end": 1040
                              },
                              "start": 1031,
                              "end": 1040
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 1043,
                              "end": 1047
                            },
                            "start": 1041,
                            "end": 1047
                          },
                          "start": 1030,
                          "end": 1048
                        }
                      ],
                      "start": 988,
                      "end": 1058
                    },
                    "start": 986,
                    "end": 1058
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 985,
                  "end": 1058
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
                    "start": 1067,
                    "end": 1069
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
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
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "a",
                                    "raw": "'a'",
                                    "start": 1089,
                                    "end": 1092
                                  },
                                  "start": 1089,
                                  "end": 1092
                                },
                                "start": 1087,
                                "end": 1092
                              },
                              "start": 1086,
                              "end": 1092
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
                                  "start": 1097,
                                  "end": 1103
                                },
                                "start": 1095,
                                "end": 1103
                              },
                              "start": 1094,
                              "end": 1103
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 1106,
                              "end": 1110
                            },
                            "start": 1104,
                            "end": 1110
                          },
                          "start": 1085,
                          "end": 1111
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
                                  "type": "TSStringKeyword",
                                  "start": 1128,
                                  "end": 1134
                                },
                                "start": 1126,
                                "end": 1134
                              },
                              "start": 1125,
                              "end": 1134
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
                                  "start": 1139,
                                  "end": 1145
                                },
                                "start": 1137,
                                "end": 1145
                              },
                              "start": 1136,
                              "end": 1145
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 1148,
                              "end": 1152
                            },
                            "start": 1146,
                            "end": 1152
                          },
                          "start": 1124,
                          "end": 1153
                        }
                      ],
                      "start": 1071,
                      "end": 1163
                    },
                    "start": 1069,
                    "end": 1163
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1067,
                  "end": 1163
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
                    "start": 1172,
                    "end": 1174
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
                              "start": 1177,
                              "end": 1178
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1177,
                            "end": 1178
                          }
                        ],
                        "start": 1176,
                        "end": 1179
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
                                "start": 1183,
                                "end": 1184
                              },
                              "typeArguments": null,
                              "start": 1183,
                              "end": 1184
                            },
                            "start": 1181,
                            "end": 1184
                          },
                          "start": 1180,
                          "end": 1184
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1189,
                          "end": 1193
                        },
                        "start": 1186,
                        "end": 1193
                      },
                      "start": 1176,
                      "end": 1193
                    },
                    "start": 1174,
                    "end": 1193
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1172,
                  "end": 1194
                }
              ],
              "start": 955,
              "end": 1200
            },
            "declare": false,
            "start": 940,
            "end": 1200
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 1227,
              "end": 1228
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
                  "start": 1237,
                  "end": 1241
                },
                "typeArguments": null,
                "start": 1237,
                "end": 1241
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
                    "start": 1267,
                    "end": 1268
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
                              "type": "TSStringKeyword",
                              "start": 1274,
                              "end": 1280
                            },
                            "start": 1272,
                            "end": 1280
                          },
                          "start": 1271,
                          "end": 1280
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1285,
                          "end": 1291
                        },
                        "start": 1282,
                        "end": 1291
                      },
                      "start": 1270,
                      "end": 1291
                    },
                    "start": 1268,
                    "end": 1291
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1267,
                  "end": 1292
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
                    "start": 1333,
                    "end": 1335
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
                              "type": "TSStringKeyword",
                              "start": 1341,
                              "end": 1347
                            },
                            "start": 1339,
                            "end": 1347
                          },
                          "start": 1338,
                          "end": 1347
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
                              "start": 1352,
                              "end": 1358
                            },
                            "start": 1350,
                            "end": 1358
                          },
                          "start": 1349,
                          "end": 1358
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 1363,
                          "end": 1370
                        },
                        "start": 1360,
                        "end": 1370
                      },
                      "start": 1337,
                      "end": 1370
                    },
                    "start": 1335,
                    "end": 1370
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1333,
                  "end": 1371
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
                    "start": 1412,
                    "end": 1414
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
                              "start": 1417,
                              "end": 1418
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1417,
                            "end": 1418
                          }
                        ],
                        "start": 1416,
                        "end": 1419
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
                                "start": 1423,
                                "end": 1424
                              },
                              "typeArguments": null,
                              "start": 1423,
                              "end": 1424
                            },
                            "start": 1421,
                            "end": 1424
                          },
                          "start": 1420,
                          "end": 1424
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1429,
                          "end": 1435
                        },
                        "start": 1426,
                        "end": 1435
                      },
                      "start": 1416,
                      "end": 1435
                    },
                    "start": 1414,
                    "end": 1435
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1412,
                  "end": 1436
                }
              ],
              "start": 1242,
              "end": 1474
            },
            "declare": false,
            "start": 1217,
            "end": 1474
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1490,
              "end": 1495
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
                    "start": 1526,
                    "end": 1527
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
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
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "a",
                                    "raw": "'a'",
                                    "start": 1547,
                                    "end": 1550
                                  },
                                  "start": 1547,
                                  "end": 1550
                                },
                                "start": 1545,
                                "end": 1550
                              },
                              "start": 1544,
                              "end": 1550
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1553,
                              "end": 1559
                            },
                            "start": 1551,
                            "end": 1559
                          },
                          "start": 1543,
                          "end": 1560
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
                                  "type": "TSStringKeyword",
                                  "start": 1577,
                                  "end": 1583
                                },
                                "start": 1575,
                                "end": 1583
                              },
                              "start": 1574,
                              "end": 1583
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1586,
                              "end": 1592
                            },
                            "start": 1584,
                            "end": 1592
                          },
                          "start": 1573,
                          "end": 1593
                        }
                      ],
                      "start": 1529,
                      "end": 1603
                    },
                    "start": 1527,
                    "end": 1603
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1526,
                  "end": 1603
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
                    "start": 1612,
                    "end": 1614
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
                              "start": 1617,
                              "end": 1618
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1617,
                            "end": 1618
                          }
                        ],
                        "start": 1616,
                        "end": 1619
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
                                "start": 1623,
                                "end": 1624
                              },
                              "typeArguments": null,
                              "start": 1623,
                              "end": 1624
                            },
                            "start": 1621,
                            "end": 1624
                          },
                          "start": 1620,
                          "end": 1624
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
                            "start": 1629,
                            "end": 1630
                          },
                          "typeArguments": null,
                          "start": 1629,
                          "end": 1630
                        },
                        "start": 1626,
                        "end": 1630
                      },
                      "start": 1616,
                      "end": 1630
                    },
                    "start": 1614,
                    "end": 1630
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1612,
                  "end": 1631
                }
              ],
              "start": 1496,
              "end": 1637
            },
            "declare": false,
            "start": 1480,
            "end": 1637
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1664,
              "end": 1666
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
                  "start": 1675,
                  "end": 1680
                },
                "typeArguments": null,
                "start": 1675,
                "end": 1680
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
                    "start": 1706,
                    "end": 1707
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
                              "type": "TSStringKeyword",
                              "start": 1713,
                              "end": 1719
                            },
                            "start": 1711,
                            "end": 1719
                          },
                          "start": 1710,
                          "end": 1719
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1724,
                          "end": 1730
                        },
                        "start": 1721,
                        "end": 1730
                      },
                      "start": 1709,
                      "end": 1730
                    },
                    "start": 1707,
                    "end": 1730
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1706,
                  "end": 1731
                }
              ],
              "start": 1681,
              "end": 1777
            },
            "declare": false,
            "start": 1654,
            "end": 1777
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1804,
              "end": 1806
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
                  "start": 1815,
                  "end": 1820
                },
                "typeArguments": null,
                "start": 1815,
                "end": 1820
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
                    "start": 1846,
                    "end": 1848
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
                              "start": 1851,
                              "end": 1852
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1851,
                            "end": 1852
                          }
                        ],
                        "start": 1850,
                        "end": 1853
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
                                "start": 1857,
                                "end": 1858
                              },
                              "typeArguments": null,
                              "start": 1857,
                              "end": 1858
                            },
                            "start": 1855,
                            "end": 1858
                          },
                          "start": 1854,
                          "end": 1858
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1863,
                          "end": 1869
                        },
                        "start": 1860,
                        "end": 1869
                      },
                      "start": 1850,
                      "end": 1869
                    },
                    "start": 1848,
                    "end": 1869
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1846,
                  "end": 1870
                }
              ],
              "start": 1821,
              "end": 1916
            },
            "declare": false,
            "start": 1794,
            "end": 1916
          }
        ],
        "start": 934,
        "end": 1918
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 900,
      "end": 1918
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 118,
  "end": 1918
}
```
