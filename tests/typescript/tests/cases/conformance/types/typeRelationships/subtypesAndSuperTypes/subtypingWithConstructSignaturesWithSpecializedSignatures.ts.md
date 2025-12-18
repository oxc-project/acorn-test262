__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 118,
    "end": 127,
    "range": [
      118,
      127
    ]
  },
  {
    "type": "Identifier",
    "value": "CallSignature",
    "start": 128,
    "end": 141,
    "range": [
      128,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 148,
    "end": 157,
    "range": [
      148,
      157
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 158,
    "end": 162,
    "range": [
      158,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 193,
    "end": 196,
    "range": [
      193,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 201,
    "end": 204,
    "range": [
      201,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 207,
    "end": 211,
    "range": [
      207,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 221,
    "end": 224,
    "range": [
      221,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 229,
    "end": 235,
    "range": [
      229,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 240,
    "end": 246,
    "range": [
      240,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 249,
    "end": 253,
    "range": [
      249,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 277,
    "end": 286,
    "range": [
      277,
      286
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 289,
    "end": 296,
    "range": [
      289,
      296
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 297,
    "end": 301,
    "range": [
      297,
      301
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 327,
    "end": 330,
    "range": [
      327,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 335,
    "end": 338,
    "range": [
      335,
      338
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 341,
    "end": 347,
    "range": [
      341,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 389,
    "end": 392,
    "range": [
      389,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 395,
    "end": 396,
    "range": [
      395,
      396
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 397,
    "end": 403,
    "range": [
      397,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 408,
    "end": 414,
    "range": [
      408,
      414
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 417,
    "end": 423,
    "range": [
      417,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 465,
    "end": 468,
    "range": [
      465,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 469,
    "end": 470,
    "range": [
      469,
      470
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 477,
    "end": 478,
    "range": [
      477,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 480,
    "end": 486,
    "range": [
      480,
      486
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 486,
    "end": 487,
    "range": [
      486,
      487
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 534,
    "end": 543,
    "range": [
      534,
      543
    ]
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 544,
    "end": 549,
    "range": [
      544,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 580,
    "end": 583,
    "range": [
      580,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 588,
    "end": 591,
    "range": [
      588,
      591
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 591,
    "end": 592,
    "range": [
      591,
      592
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 594,
    "end": 600,
    "range": [
      594,
      600
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 610,
    "end": 613,
    "range": [
      610,
      613
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 618,
    "end": 624,
    "range": [
      618,
      624
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 625,
    "end": 626,
    "range": [
      625,
      626
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 627,
    "end": 633,
    "range": [
      627,
      633
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 633,
    "end": 634,
    "range": [
      633,
      634
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 657,
    "end": 666,
    "range": [
      657,
      666
    ]
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 667,
    "end": 669,
    "range": [
      667,
      669
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 670,
    "end": 677,
    "range": [
      670,
      677
    ]
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 678,
    "end": 683,
    "range": [
      678,
      683
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 684,
    "end": 685,
    "range": [
      684,
      685
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 709,
    "end": 712,
    "range": [
      709,
      712
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 713,
    "end": 714,
    "range": [
      713,
      714
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 714,
    "end": 715,
    "range": [
      714,
      715
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 715,
    "end": 716,
    "range": [
      715,
      716
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 717,
    "end": 720,
    "range": [
      717,
      720
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 721,
    "end": 722,
    "range": [
      721,
      722
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 723,
    "end": 729,
    "range": [
      723,
      729
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 739,
    "end": 742,
    "range": [
      739,
      742
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 747,
    "end": 753,
    "range": [
      747,
      753
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 753,
    "end": 754,
    "range": [
      753,
      754
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 756,
    "end": 762,
    "range": [
      756,
      762
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 762,
    "end": 763,
    "range": [
      762,
      763
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 808,
    "end": 809,
    "range": [
      808,
      809
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 826,
    "end": 835,
    "range": [
      826,
      835
    ]
  },
  {
    "type": "Identifier",
    "value": "I3",
    "start": 836,
    "end": 838,
    "range": [
      836,
      838
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 839,
    "end": 846,
    "range": [
      839,
      846
    ]
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 847,
    "end": 852,
    "range": [
      847,
      852
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 853,
    "end": 854,
    "range": [
      853,
      854
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 878,
    "end": 881,
    "range": [
      878,
      881
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 882,
    "end": 883,
    "range": [
      882,
      883
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 883,
    "end": 884,
    "range": [
      883,
      884
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 884,
    "end": 885,
    "range": [
      884,
      885
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 885,
    "end": 886,
    "range": [
      885,
      886
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 887,
    "end": 888,
    "range": [
      887,
      888
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 889,
    "end": 890,
    "range": [
      889,
      890
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 890,
    "end": 891,
    "range": [
      890,
      891
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 891,
    "end": 892,
    "range": [
      891,
      892
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 893,
    "end": 899,
    "range": [
      893,
      899
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 899,
    "end": 900,
    "range": [
      899,
      900
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 938,
    "end": 939,
    "range": [
      938,
      939
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 940,
    "end": 941,
    "range": [
      940,
      941
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 943,
    "end": 952,
    "range": [
      943,
      952
    ]
  },
  {
    "type": "Identifier",
    "value": "MemberWithCallSignature",
    "start": 953,
    "end": 976,
    "range": [
      953,
      976
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 977,
    "end": 978,
    "range": [
      977,
      978
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 983,
    "end": 992,
    "range": [
      983,
      992
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 993,
    "end": 997,
    "range": [
      993,
      997
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 998,
    "end": 999,
    "range": [
      998,
      999
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1028,
    "end": 1029,
    "range": [
      1028,
      1029
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1029,
    "end": 1030,
    "range": [
      1029,
      1030
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1031,
    "end": 1032,
    "range": [
      1031,
      1032
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1045,
    "end": 1048,
    "range": [
      1045,
      1048
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1049,
    "end": 1050,
    "range": [
      1049,
      1050
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1050,
    "end": 1051,
    "range": [
      1050,
      1051
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1051,
    "end": 1052,
    "range": [
      1051,
      1052
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1053,
    "end": 1056,
    "range": [
      1053,
      1056
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1056,
    "end": 1057,
    "range": [
      1056,
      1057
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1057,
    "end": 1058,
    "range": [
      1057,
      1058
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1059,
    "end": 1063,
    "range": [
      1059,
      1063
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1063,
    "end": 1064,
    "range": [
      1063,
      1064
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1077,
    "end": 1080,
    "range": [
      1077,
      1080
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1081,
    "end": 1082,
    "range": [
      1081,
      1082
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1082,
    "end": 1083,
    "range": [
      1082,
      1083
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1083,
    "end": 1084,
    "range": [
      1083,
      1084
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1085,
    "end": 1091,
    "range": [
      1085,
      1091
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1091,
    "end": 1092,
    "range": [
      1091,
      1092
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1092,
    "end": 1093,
    "range": [
      1092,
      1093
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1094,
    "end": 1098,
    "range": [
      1094,
      1098
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1098,
    "end": 1099,
    "range": [
      1098,
      1099
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1108,
    "end": 1109,
    "range": [
      1108,
      1109
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1118,
    "end": 1120,
    "range": [
      1118,
      1120
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1120,
    "end": 1121,
    "range": [
      1120,
      1121
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1122,
    "end": 1123,
    "range": [
      1122,
      1123
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1136,
    "end": 1139,
    "range": [
      1136,
      1139
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1140,
    "end": 1141,
    "range": [
      1140,
      1141
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1141,
    "end": 1142,
    "range": [
      1141,
      1142
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1142,
    "end": 1143,
    "range": [
      1142,
      1143
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1144,
    "end": 1147,
    "range": [
      1144,
      1147
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1147,
    "end": 1148,
    "range": [
      1147,
      1148
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1149,
    "end": 1150,
    "range": [
      1149,
      1150
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1150,
    "end": 1151,
    "range": [
      1150,
      1151
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1152,
    "end": 1158,
    "range": [
      1152,
      1158
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1158,
    "end": 1159,
    "range": [
      1158,
      1159
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1159,
    "end": 1160,
    "range": [
      1159,
      1160
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1161,
    "end": 1165,
    "range": [
      1161,
      1165
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1165,
    "end": 1166,
    "range": [
      1165,
      1166
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1179,
    "end": 1182,
    "range": [
      1179,
      1182
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1183,
    "end": 1184,
    "range": [
      1183,
      1184
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1184,
    "end": 1185,
    "range": [
      1184,
      1185
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1185,
    "end": 1186,
    "range": [
      1185,
      1186
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1187,
    "end": 1193,
    "range": [
      1187,
      1193
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1193,
    "end": 1194,
    "range": [
      1193,
      1194
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1195,
    "end": 1196,
    "range": [
      1195,
      1196
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1196,
    "end": 1197,
    "range": [
      1196,
      1197
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1198,
    "end": 1204,
    "range": [
      1198,
      1204
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1204,
    "end": 1205,
    "range": [
      1204,
      1205
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1205,
    "end": 1206,
    "range": [
      1205,
      1206
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1207,
    "end": 1211,
    "range": [
      1207,
      1211
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1211,
    "end": 1212,
    "range": [
      1211,
      1212
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1221,
    "end": 1222,
    "range": [
      1221,
      1222
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1231,
    "end": 1233,
    "range": [
      1231,
      1233
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1233,
    "end": 1234,
    "range": [
      1233,
      1234
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1235,
    "end": 1238,
    "range": [
      1235,
      1238
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1239,
    "end": 1240,
    "range": [
      1239,
      1240
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1240,
    "end": 1241,
    "range": [
      1240,
      1241
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1241,
    "end": 1242,
    "range": [
      1241,
      1242
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1242,
    "end": 1243,
    "range": [
      1242,
      1243
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1243,
    "end": 1244,
    "range": [
      1243,
      1244
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1244,
    "end": 1245,
    "range": [
      1244,
      1245
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1246,
    "end": 1247,
    "range": [
      1246,
      1247
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1247,
    "end": 1248,
    "range": [
      1247,
      1248
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1249,
    "end": 1251,
    "range": [
      1249,
      1251
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1252,
    "end": 1256,
    "range": [
      1252,
      1256
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1256,
    "end": 1257,
    "range": [
      1256,
      1257
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1262,
    "end": 1263,
    "range": [
      1262,
      1263
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1280,
    "end": 1289,
    "range": [
      1280,
      1289
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1290,
    "end": 1291,
    "range": [
      1290,
      1291
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1292,
    "end": 1299,
    "range": [
      1292,
      1299
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1300,
    "end": 1304,
    "range": [
      1300,
      1304
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1305,
    "end": 1306,
    "range": [
      1305,
      1306
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1330,
    "end": 1331,
    "range": [
      1330,
      1331
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1331,
    "end": 1332,
    "range": [
      1331,
      1332
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1333,
    "end": 1336,
    "range": [
      1333,
      1336
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1337,
    "end": 1338,
    "range": [
      1337,
      1338
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1338,
    "end": 1339,
    "range": [
      1338,
      1339
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1339,
    "end": 1340,
    "range": [
      1339,
      1340
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1341,
    "end": 1347,
    "range": [
      1341,
      1347
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1347,
    "end": 1348,
    "range": [
      1347,
      1348
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1349,
    "end": 1351,
    "range": [
      1349,
      1351
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1352,
    "end": 1358,
    "range": [
      1352,
      1358
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1358,
    "end": 1359,
    "range": [
      1358,
      1359
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1400,
    "end": 1402,
    "range": [
      1400,
      1402
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1402,
    "end": 1403,
    "range": [
      1402,
      1403
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1404,
    "end": 1407,
    "range": [
      1404,
      1407
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1409,
    "end": 1410,
    "range": [
      1409,
      1410
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1410,
    "end": 1411,
    "range": [
      1410,
      1411
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1411,
    "end": 1412,
    "range": [
      1411,
      1412
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1413,
    "end": 1419,
    "range": [
      1413,
      1419
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1419,
    "end": 1420,
    "range": [
      1419,
      1420
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1421,
    "end": 1422,
    "range": [
      1421,
      1422
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1422,
    "end": 1423,
    "range": [
      1422,
      1423
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1424,
    "end": 1430,
    "range": [
      1424,
      1430
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1430,
    "end": 1431,
    "range": [
      1430,
      1431
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1432,
    "end": 1434,
    "range": [
      1432,
      1434
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1435,
    "end": 1442,
    "range": [
      1435,
      1442
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1442,
    "end": 1443,
    "range": [
      1442,
      1443
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1484,
    "end": 1486,
    "range": [
      1484,
      1486
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1486,
    "end": 1487,
    "range": [
      1486,
      1487
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1488,
    "end": 1491,
    "range": [
      1488,
      1491
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1492,
    "end": 1493,
    "range": [
      1492,
      1493
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1493,
    "end": 1494,
    "range": [
      1493,
      1494
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1494,
    "end": 1495,
    "range": [
      1494,
      1495
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1495,
    "end": 1496,
    "range": [
      1495,
      1496
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1496,
    "end": 1497,
    "range": [
      1496,
      1497
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1497,
    "end": 1498,
    "range": [
      1497,
      1498
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1499,
    "end": 1500,
    "range": [
      1499,
      1500
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1500,
    "end": 1501,
    "range": [
      1500,
      1501
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1502,
    "end": 1504,
    "range": [
      1502,
      1504
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1505,
    "end": 1511,
    "range": [
      1505,
      1511
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1511,
    "end": 1512,
    "range": [
      1511,
      1512
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1549,
    "end": 1550,
    "range": [
      1549,
      1550
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1556,
    "end": 1565,
    "range": [
      1556,
      1565
    ]
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 1566,
    "end": 1571,
    "range": [
      1566,
      1571
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1572,
    "end": 1573,
    "range": [
      1572,
      1573
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1602,
    "end": 1603,
    "range": [
      1602,
      1603
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1603,
    "end": 1604,
    "range": [
      1603,
      1604
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1605,
    "end": 1606,
    "range": [
      1605,
      1606
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1619,
    "end": 1622,
    "range": [
      1619,
      1622
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1623,
    "end": 1624,
    "range": [
      1623,
      1624
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1624,
    "end": 1625,
    "range": [
      1624,
      1625
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1625,
    "end": 1626,
    "range": [
      1625,
      1626
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1627,
    "end": 1630,
    "range": [
      1627,
      1630
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1630,
    "end": 1631,
    "range": [
      1630,
      1631
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1631,
    "end": 1632,
    "range": [
      1631,
      1632
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1633,
    "end": 1639,
    "range": [
      1633,
      1639
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1639,
    "end": 1640,
    "range": [
      1639,
      1640
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1653,
    "end": 1656,
    "range": [
      1653,
      1656
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1657,
    "end": 1658,
    "range": [
      1657,
      1658
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1658,
    "end": 1659,
    "range": [
      1658,
      1659
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1659,
    "end": 1660,
    "range": [
      1659,
      1660
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1661,
    "end": 1667,
    "range": [
      1661,
      1667
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1667,
    "end": 1668,
    "range": [
      1667,
      1668
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1668,
    "end": 1669,
    "range": [
      1668,
      1669
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1670,
    "end": 1676,
    "range": [
      1670,
      1676
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1676,
    "end": 1677,
    "range": [
      1676,
      1677
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1686,
    "end": 1687,
    "range": [
      1686,
      1687
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1696,
    "end": 1698,
    "range": [
      1696,
      1698
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1698,
    "end": 1699,
    "range": [
      1698,
      1699
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1700,
    "end": 1703,
    "range": [
      1700,
      1703
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1704,
    "end": 1705,
    "range": [
      1704,
      1705
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1705,
    "end": 1706,
    "range": [
      1705,
      1706
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1706,
    "end": 1707,
    "range": [
      1706,
      1707
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1707,
    "end": 1708,
    "range": [
      1707,
      1708
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1708,
    "end": 1709,
    "range": [
      1708,
      1709
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1709,
    "end": 1710,
    "range": [
      1709,
      1710
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1711,
    "end": 1712,
    "range": [
      1711,
      1712
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1712,
    "end": 1713,
    "range": [
      1712,
      1713
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1714,
    "end": 1716,
    "range": [
      1714,
      1716
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1717,
    "end": 1718,
    "range": [
      1717,
      1718
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1718,
    "end": 1719,
    "range": [
      1718,
      1719
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1724,
    "end": 1725,
    "range": [
      1724,
      1725
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1742,
    "end": 1751,
    "range": [
      1742,
      1751
    ]
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 1752,
    "end": 1754,
    "range": [
      1752,
      1754
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1755,
    "end": 1762,
    "range": [
      1755,
      1762
    ]
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 1763,
    "end": 1768,
    "range": [
      1763,
      1768
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1769,
    "end": 1770,
    "range": [
      1769,
      1770
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1794,
    "end": 1795,
    "range": [
      1794,
      1795
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1795,
    "end": 1796,
    "range": [
      1795,
      1796
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1797,
    "end": 1800,
    "range": [
      1797,
      1800
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1801,
    "end": 1802,
    "range": [
      1801,
      1802
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1802,
    "end": 1803,
    "range": [
      1802,
      1803
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1803,
    "end": 1804,
    "range": [
      1803,
      1804
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1805,
    "end": 1811,
    "range": [
      1805,
      1811
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1811,
    "end": 1812,
    "range": [
      1811,
      1812
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1813,
    "end": 1815,
    "range": [
      1813,
      1815
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1816,
    "end": 1822,
    "range": [
      1816,
      1822
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1822,
    "end": 1823,
    "range": [
      1822,
      1823
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1868,
    "end": 1869,
    "range": [
      1868,
      1869
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1886,
    "end": 1895,
    "range": [
      1886,
      1895
    ]
  },
  {
    "type": "Identifier",
    "value": "I3",
    "start": 1896,
    "end": 1898,
    "range": [
      1896,
      1898
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1899,
    "end": 1906,
    "range": [
      1899,
      1906
    ]
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 1907,
    "end": 1912,
    "range": [
      1907,
      1912
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1913,
    "end": 1914,
    "range": [
      1913,
      1914
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1938,
    "end": 1940,
    "range": [
      1938,
      1940
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1940,
    "end": 1941,
    "range": [
      1940,
      1941
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1942,
    "end": 1945,
    "range": [
      1942,
      1945
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1946,
    "end": 1947,
    "range": [
      1946,
      1947
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1947,
    "end": 1948,
    "range": [
      1947,
      1948
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1948,
    "end": 1949,
    "range": [
      1948,
      1949
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1949,
    "end": 1950,
    "range": [
      1949,
      1950
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1950,
    "end": 1951,
    "range": [
      1950,
      1951
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1951,
    "end": 1952,
    "range": [
      1951,
      1952
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1953,
    "end": 1954,
    "range": [
      1953,
      1954
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1954,
    "end": 1955,
    "range": [
      1954,
      1955
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1956,
    "end": 1958,
    "range": [
      1956,
      1958
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1959,
    "end": 1965,
    "range": [
      1959,
      1965
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1965,
    "end": 1966,
    "range": [
      1965,
      1966
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2011,
    "end": 2012,
    "range": [
      2011,
      2012
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2013,
    "end": 2014,
    "range": [
      2013,
      2014
    ]
  }
]
```
