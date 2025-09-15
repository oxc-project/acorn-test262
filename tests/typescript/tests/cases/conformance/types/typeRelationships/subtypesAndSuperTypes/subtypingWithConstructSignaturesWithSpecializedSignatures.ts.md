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
                  "type": "TSConstructSignatureDeclaration",
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
                            "start": 201,
                            "end": 204
                          },
                          "start": 201,
                          "end": 204
                        },
                        "start": 199,
                        "end": 204
                      },
                      "start": 198,
                      "end": 204
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 207,
                      "end": 211
                    },
                    "start": 205,
                    "end": 211
                  },
                  "start": 193,
                  "end": 212
                },
                {
                  "type": "TSConstructSignatureDeclaration",
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
                          "start": 229,
                          "end": 235
                        },
                        "start": 227,
                        "end": 235
                      },
                      "start": 226,
                      "end": 235
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
                          "start": 240,
                          "end": 246
                        },
                        "start": 238,
                        "end": 246
                      },
                      "start": 237,
                      "end": 246
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 249,
                      "end": 253
                    },
                    "start": 247,
                    "end": 253
                  },
                  "start": 221,
                  "end": 254
                }
              ],
              "start": 163,
              "end": 260
            },
            "declare": false,
            "start": 148,
            "end": 260
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 287,
              "end": 288
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
                  "start": 297,
                  "end": 301
                },
                "typeArguments": null,
                "start": 297,
                "end": 301
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
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
                            "start": 335,
                            "end": 338
                          },
                          "start": 335,
                          "end": 338
                        },
                        "start": 333,
                        "end": 338
                      },
                      "start": 332,
                      "end": 338
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 341,
                      "end": 347
                    },
                    "start": 339,
                    "end": 347
                  },
                  "start": 327,
                  "end": 348
                },
                {
                  "type": "TSConstructSignatureDeclaration",
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
                          "start": 397,
                          "end": 403
                        },
                        "start": 395,
                        "end": 403
                      },
                      "start": 394,
                      "end": 403
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
                          "start": 408,
                          "end": 414
                        },
                        "start": 406,
                        "end": 414
                      },
                      "start": 405,
                      "end": 414
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 417,
                      "end": 423
                    },
                    "start": 415,
                    "end": 423
                  },
                  "start": 389,
                  "end": 424
                },
                {
                  "type": "TSConstructSignatureDeclaration",
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
                          "start": 470,
                          "end": 471
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 470,
                        "end": 471
                      }
                    ],
                    "start": 469,
                    "end": 472
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
                            "start": 476,
                            "end": 477
                          },
                          "typeArguments": null,
                          "start": 476,
                          "end": 477
                        },
                        "start": 474,
                        "end": 477
                      },
                      "start": 473,
                      "end": 477
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 480,
                      "end": 486
                    },
                    "start": 478,
                    "end": 486
                  },
                  "start": 465,
                  "end": 487
                }
              ],
              "start": 302,
              "end": 525
            },
            "declare": false,
            "start": 277,
            "end": 525
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 544,
              "end": 549
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
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
                            "start": 588,
                            "end": 591
                          },
                          "start": 588,
                          "end": 591
                        },
                        "start": 586,
                        "end": 591
                      },
                      "start": 585,
                      "end": 591
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 594,
                      "end": 600
                    },
                    "start": 592,
                    "end": 600
                  },
                  "start": 580,
                  "end": 601
                },
                {
                  "type": "TSConstructSignatureDeclaration",
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
                          "start": 618,
                          "end": 624
                        },
                        "start": 616,
                        "end": 624
                      },
                      "start": 615,
                      "end": 624
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 627,
                      "end": 633
                    },
                    "start": 625,
                    "end": 633
                  },
                  "start": 610,
                  "end": 634
                }
              ],
              "start": 550,
              "end": 640
            },
            "declare": false,
            "start": 534,
            "end": 640
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null,
              "start": 667,
              "end": 669
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
                  "start": 678,
                  "end": 683
                },
                "typeArguments": null,
                "start": 678,
                "end": 683
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
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
                            "start": 717,
                            "end": 720
                          },
                          "start": 717,
                          "end": 720
                        },
                        "start": 715,
                        "end": 720
                      },
                      "start": 714,
                      "end": 720
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 723,
                      "end": 729
                    },
                    "start": 721,
                    "end": 729
                  },
                  "start": 709,
                  "end": 730
                },
                {
                  "type": "TSConstructSignatureDeclaration",
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
                          "start": 747,
                          "end": 753
                        },
                        "start": 745,
                        "end": 753
                      },
                      "start": 744,
                      "end": 753
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 756,
                      "end": 762
                    },
                    "start": 754,
                    "end": 762
                  },
                  "start": 739,
                  "end": 763
                }
              ],
              "start": 684,
              "end": 809
            },
            "declare": false,
            "start": 657,
            "end": 809
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I3",
              "optional": false,
              "typeAnnotation": null,
              "start": 836,
              "end": 838
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
                  "start": 847,
                  "end": 852
                },
                "typeArguments": null,
                "start": 847,
                "end": 852
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
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
                          "start": 883,
                          "end": 884
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 883,
                        "end": 884
                      }
                    ],
                    "start": 882,
                    "end": 885
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
                            "start": 889,
                            "end": 890
                          },
                          "typeArguments": null,
                          "start": 889,
                          "end": 890
                        },
                        "start": 887,
                        "end": 890
                      },
                      "start": 886,
                      "end": 890
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 893,
                      "end": 899
                    },
                    "start": 891,
                    "end": 899
                  },
                  "start": 878,
                  "end": 900
                }
              ],
              "start": 853,
              "end": 939
            },
            "declare": false,
            "start": 826,
            "end": 939
          }
        ],
        "start": 142,
        "end": 941
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 118,
      "end": 941
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MemberWithCallSignature",
        "optional": false,
        "typeAnnotation": null,
        "start": 953,
        "end": 976
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
              "start": 993,
              "end": 997
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
                    "start": 1028,
                    "end": 1029
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
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
                                    "start": 1053,
                                    "end": 1056
                                  },
                                  "start": 1053,
                                  "end": 1056
                                },
                                "start": 1051,
                                "end": 1056
                              },
                              "start": 1050,
                              "end": 1056
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 1059,
                              "end": 1063
                            },
                            "start": 1057,
                            "end": 1063
                          },
                          "start": 1045,
                          "end": 1064
                        },
                        {
                          "type": "TSConstructSignatureDeclaration",
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
                                  "start": 1085,
                                  "end": 1091
                                },
                                "start": 1083,
                                "end": 1091
                              },
                              "start": 1082,
                              "end": 1091
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 1094,
                              "end": 1098
                            },
                            "start": 1092,
                            "end": 1098
                          },
                          "start": 1077,
                          "end": 1099
                        }
                      ],
                      "start": 1031,
                      "end": 1109
                    },
                    "start": 1029,
                    "end": 1109
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1028,
                  "end": 1109
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
                    "start": 1118,
                    "end": 1120
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
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
                                    "start": 1144,
                                    "end": 1147
                                  },
                                  "start": 1144,
                                  "end": 1147
                                },
                                "start": 1142,
                                "end": 1147
                              },
                              "start": 1141,
                              "end": 1147
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
                                  "start": 1152,
                                  "end": 1158
                                },
                                "start": 1150,
                                "end": 1158
                              },
                              "start": 1149,
                              "end": 1158
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 1161,
                              "end": 1165
                            },
                            "start": 1159,
                            "end": 1165
                          },
                          "start": 1136,
                          "end": 1166
                        },
                        {
                          "type": "TSConstructSignatureDeclaration",
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
                                  "start": 1187,
                                  "end": 1193
                                },
                                "start": 1185,
                                "end": 1193
                              },
                              "start": 1184,
                              "end": 1193
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
                                  "start": 1198,
                                  "end": 1204
                                },
                                "start": 1196,
                                "end": 1204
                              },
                              "start": 1195,
                              "end": 1204
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 1207,
                              "end": 1211
                            },
                            "start": 1205,
                            "end": 1211
                          },
                          "start": 1179,
                          "end": 1212
                        }
                      ],
                      "start": 1122,
                      "end": 1222
                    },
                    "start": 1120,
                    "end": 1222
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1118,
                  "end": 1222
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
                    "start": 1231,
                    "end": 1233
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 1240,
                              "end": 1241
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1240,
                            "end": 1241
                          }
                        ],
                        "start": 1239,
                        "end": 1242
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
                                "start": 1246,
                                "end": 1247
                              },
                              "typeArguments": null,
                              "start": 1246,
                              "end": 1247
                            },
                            "start": 1244,
                            "end": 1247
                          },
                          "start": 1243,
                          "end": 1247
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1252,
                          "end": 1256
                        },
                        "start": 1249,
                        "end": 1256
                      },
                      "start": 1235,
                      "end": 1256
                    },
                    "start": 1233,
                    "end": 1256
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1231,
                  "end": 1257
                }
              ],
              "start": 998,
              "end": 1263
            },
            "declare": false,
            "start": 983,
            "end": 1263
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 1290,
              "end": 1291
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
                  "start": 1300,
                  "end": 1304
                },
                "typeArguments": null,
                "start": 1300,
                "end": 1304
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
                    "start": 1330,
                    "end": 1331
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1352,
                          "end": 1358
                        },
                        "start": 1349,
                        "end": 1358
                      },
                      "start": 1333,
                      "end": 1358
                    },
                    "start": 1331,
                    "end": 1358
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1330,
                  "end": 1359
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
                    "start": 1400,
                    "end": 1402
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 1413,
                              "end": 1419
                            },
                            "start": 1411,
                            "end": 1419
                          },
                          "start": 1410,
                          "end": 1419
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
                              "start": 1424,
                              "end": 1430
                            },
                            "start": 1422,
                            "end": 1430
                          },
                          "start": 1421,
                          "end": 1430
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 1435,
                          "end": 1442
                        },
                        "start": 1432,
                        "end": 1442
                      },
                      "start": 1404,
                      "end": 1442
                    },
                    "start": 1402,
                    "end": 1442
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1400,
                  "end": 1443
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
                    "start": 1484,
                    "end": 1486
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 1493,
                              "end": 1494
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1493,
                            "end": 1494
                          }
                        ],
                        "start": 1492,
                        "end": 1495
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
                                "start": 1499,
                                "end": 1500
                              },
                              "typeArguments": null,
                              "start": 1499,
                              "end": 1500
                            },
                            "start": 1497,
                            "end": 1500
                          },
                          "start": 1496,
                          "end": 1500
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1505,
                          "end": 1511
                        },
                        "start": 1502,
                        "end": 1511
                      },
                      "start": 1488,
                      "end": 1511
                    },
                    "start": 1486,
                    "end": 1511
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1484,
                  "end": 1512
                }
              ],
              "start": 1305,
              "end": 1550
            },
            "declare": false,
            "start": 1280,
            "end": 1550
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1566,
              "end": 1571
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
                    "start": 1602,
                    "end": 1603
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
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
                                    "start": 1627,
                                    "end": 1630
                                  },
                                  "start": 1627,
                                  "end": 1630
                                },
                                "start": 1625,
                                "end": 1630
                              },
                              "start": 1624,
                              "end": 1630
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1633,
                              "end": 1639
                            },
                            "start": 1631,
                            "end": 1639
                          },
                          "start": 1619,
                          "end": 1640
                        },
                        {
                          "type": "TSConstructSignatureDeclaration",
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
                                  "start": 1661,
                                  "end": 1667
                                },
                                "start": 1659,
                                "end": 1667
                              },
                              "start": 1658,
                              "end": 1667
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1670,
                              "end": 1676
                            },
                            "start": 1668,
                            "end": 1676
                          },
                          "start": 1653,
                          "end": 1677
                        }
                      ],
                      "start": 1605,
                      "end": 1687
                    },
                    "start": 1603,
                    "end": 1687
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1602,
                  "end": 1687
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
                    "start": 1696,
                    "end": 1698
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 1705,
                              "end": 1706
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1705,
                            "end": 1706
                          }
                        ],
                        "start": 1704,
                        "end": 1707
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
                                "start": 1711,
                                "end": 1712
                              },
                              "typeArguments": null,
                              "start": 1711,
                              "end": 1712
                            },
                            "start": 1709,
                            "end": 1712
                          },
                          "start": 1708,
                          "end": 1712
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
                            "start": 1717,
                            "end": 1718
                          },
                          "typeArguments": null,
                          "start": 1717,
                          "end": 1718
                        },
                        "start": 1714,
                        "end": 1718
                      },
                      "start": 1700,
                      "end": 1718
                    },
                    "start": 1698,
                    "end": 1718
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1696,
                  "end": 1719
                }
              ],
              "start": 1572,
              "end": 1725
            },
            "declare": false,
            "start": 1556,
            "end": 1725
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1752,
              "end": 1754
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
                  "start": 1763,
                  "end": 1768
                },
                "typeArguments": null,
                "start": 1763,
                "end": 1768
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
                    "start": 1794,
                    "end": 1795
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 1805,
                              "end": 1811
                            },
                            "start": 1803,
                            "end": 1811
                          },
                          "start": 1802,
                          "end": 1811
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1816,
                          "end": 1822
                        },
                        "start": 1813,
                        "end": 1822
                      },
                      "start": 1797,
                      "end": 1822
                    },
                    "start": 1795,
                    "end": 1822
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1794,
                  "end": 1823
                }
              ],
              "start": 1769,
              "end": 1869
            },
            "declare": false,
            "start": 1742,
            "end": 1869
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1896,
              "end": 1898
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
                  "start": 1907,
                  "end": 1912
                },
                "typeArguments": null,
                "start": 1907,
                "end": 1912
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
                    "start": 1938,
                    "end": 1940
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 1947,
                              "end": 1948
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1947,
                            "end": 1948
                          }
                        ],
                        "start": 1946,
                        "end": 1949
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
                                "start": 1953,
                                "end": 1954
                              },
                              "typeArguments": null,
                              "start": 1953,
                              "end": 1954
                            },
                            "start": 1951,
                            "end": 1954
                          },
                          "start": 1950,
                          "end": 1954
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1959,
                          "end": 1965
                        },
                        "start": 1956,
                        "end": 1965
                      },
                      "start": 1942,
                      "end": 1965
                    },
                    "start": 1940,
                    "end": 1965
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1938,
                  "end": 1966
                }
              ],
              "start": 1913,
              "end": 2012
            },
            "declare": false,
            "start": 1886,
            "end": 2012
          }
        ],
        "start": 977,
        "end": 2014
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 943,
      "end": 2014
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 118,
  "end": 2014
}
```
