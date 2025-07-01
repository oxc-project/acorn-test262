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
        "start": 125,
        "end": 138
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
              "start": 155,
              "end": 159
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
                            "start": 194,
                            "end": 197
                          },
                          "start": 194,
                          "end": 197
                        },
                        "start": 192,
                        "end": 197
                      },
                      "start": 191,
                      "end": 197
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 200,
                      "end": 204
                    },
                    "start": 198,
                    "end": 204
                  },
                  "start": 190,
                  "end": 205
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
                          "start": 218,
                          "end": 224
                        },
                        "start": 216,
                        "end": 224
                      },
                      "start": 215,
                      "end": 224
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
                          "start": 229,
                          "end": 235
                        },
                        "start": 227,
                        "end": 235
                      },
                      "start": 226,
                      "end": 235
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 238,
                      "end": 242
                    },
                    "start": 236,
                    "end": 242
                  },
                  "start": 214,
                  "end": 243
                }
              ],
              "start": 160,
              "end": 249
            },
            "declare": false,
            "start": 145,
            "end": 249
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 276,
              "end": 277
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
                  "start": 286,
                  "end": 290
                },
                "typeArguments": null,
                "start": 286,
                "end": 290
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
                            "start": 320,
                            "end": 323
                          },
                          "start": 320,
                          "end": 323
                        },
                        "start": 318,
                        "end": 323
                      },
                      "start": 317,
                      "end": 323
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 326,
                      "end": 332
                    },
                    "start": 324,
                    "end": 332
                  },
                  "start": 316,
                  "end": 333
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
                          "start": 378,
                          "end": 384
                        },
                        "start": 376,
                        "end": 384
                      },
                      "start": 375,
                      "end": 384
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
                          "start": 389,
                          "end": 395
                        },
                        "start": 387,
                        "end": 395
                      },
                      "start": 386,
                      "end": 395
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 398,
                      "end": 404
                    },
                    "start": 396,
                    "end": 404
                  },
                  "start": 374,
                  "end": 405
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
                          "start": 447,
                          "end": 448
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 447,
                        "end": 448
                      }
                    ],
                    "start": 446,
                    "end": 449
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
                            "start": 453,
                            "end": 454
                          },
                          "typeArguments": null,
                          "start": 453,
                          "end": 454
                        },
                        "start": 451,
                        "end": 454
                      },
                      "start": 450,
                      "end": 454
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 457,
                      "end": 463
                    },
                    "start": 455,
                    "end": 463
                  },
                  "start": 446,
                  "end": 464
                }
              ],
              "start": 291,
              "end": 502
            },
            "declare": false,
            "start": 266,
            "end": 502
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 518,
              "end": 523
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
                            "start": 558,
                            "end": 561
                          },
                          "start": 558,
                          "end": 561
                        },
                        "start": 556,
                        "end": 561
                      },
                      "start": 555,
                      "end": 561
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 564,
                      "end": 570
                    },
                    "start": 562,
                    "end": 570
                  },
                  "start": 554,
                  "end": 571
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
                          "start": 584,
                          "end": 590
                        },
                        "start": 582,
                        "end": 590
                      },
                      "start": 581,
                      "end": 590
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 593,
                      "end": 599
                    },
                    "start": 591,
                    "end": 599
                  },
                  "start": 580,
                  "end": 600
                }
              ],
              "start": 524,
              "end": 606
            },
            "declare": false,
            "start": 508,
            "end": 606
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null,
              "start": 633,
              "end": 635
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
                  "start": 644,
                  "end": 649
                },
                "typeArguments": null,
                "start": 644,
                "end": 649
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
                            "start": 679,
                            "end": 682
                          },
                          "start": 679,
                          "end": 682
                        },
                        "start": 677,
                        "end": 682
                      },
                      "start": 676,
                      "end": 682
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 685,
                      "end": 691
                    },
                    "start": 683,
                    "end": 691
                  },
                  "start": 675,
                  "end": 692
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
                          "start": 705,
                          "end": 711
                        },
                        "start": 703,
                        "end": 711
                      },
                      "start": 702,
                      "end": 711
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 714,
                      "end": 720
                    },
                    "start": 712,
                    "end": 720
                  },
                  "start": 701,
                  "end": 721
                }
              ],
              "start": 650,
              "end": 767
            },
            "declare": false,
            "start": 623,
            "end": 767
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I3",
              "optional": false,
              "typeAnnotation": null,
              "start": 794,
              "end": 796
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
                  "start": 805,
                  "end": 810
                },
                "typeArguments": null,
                "start": 805,
                "end": 810
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
                          "start": 837,
                          "end": 838
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 837,
                        "end": 838
                      }
                    ],
                    "start": 836,
                    "end": 839
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
                            "start": 843,
                            "end": 844
                          },
                          "typeArguments": null,
                          "start": 843,
                          "end": 844
                        },
                        "start": 841,
                        "end": 844
                      },
                      "start": 840,
                      "end": 844
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 847,
                      "end": 853
                    },
                    "start": 845,
                    "end": 853
                  },
                  "start": 836,
                  "end": 854
                }
              ],
              "start": 811,
              "end": 893
            },
            "declare": false,
            "start": 784,
            "end": 893
          }
        ],
        "start": 139,
        "end": 895
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 118,
      "end": 895
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MemberWithCallSignature",
        "optional": false,
        "typeAnnotation": null,
        "start": 904,
        "end": 927
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
              "start": 944,
              "end": 948
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
                    "start": 979,
                    "end": 980
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
                                    "start": 1000,
                                    "end": 1003
                                  },
                                  "start": 1000,
                                  "end": 1003
                                },
                                "start": 998,
                                "end": 1003
                              },
                              "start": 997,
                              "end": 1003
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 1006,
                              "end": 1010
                            },
                            "start": 1004,
                            "end": 1010
                          },
                          "start": 996,
                          "end": 1011
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
                                  "start": 1028,
                                  "end": 1034
                                },
                                "start": 1026,
                                "end": 1034
                              },
                              "start": 1025,
                              "end": 1034
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 1037,
                              "end": 1041
                            },
                            "start": 1035,
                            "end": 1041
                          },
                          "start": 1024,
                          "end": 1042
                        }
                      ],
                      "start": 982,
                      "end": 1052
                    },
                    "start": 980,
                    "end": 1052
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 979,
                  "end": 1052
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
                    "start": 1061,
                    "end": 1063
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
                                    "start": 1083,
                                    "end": 1086
                                  },
                                  "start": 1083,
                                  "end": 1086
                                },
                                "start": 1081,
                                "end": 1086
                              },
                              "start": 1080,
                              "end": 1086
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
                                  "start": 1091,
                                  "end": 1097
                                },
                                "start": 1089,
                                "end": 1097
                              },
                              "start": 1088,
                              "end": 1097
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 1100,
                              "end": 1104
                            },
                            "start": 1098,
                            "end": 1104
                          },
                          "start": 1079,
                          "end": 1105
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
                                  "start": 1122,
                                  "end": 1128
                                },
                                "start": 1120,
                                "end": 1128
                              },
                              "start": 1119,
                              "end": 1128
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
                                  "start": 1133,
                                  "end": 1139
                                },
                                "start": 1131,
                                "end": 1139
                              },
                              "start": 1130,
                              "end": 1139
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 1142,
                              "end": 1146
                            },
                            "start": 1140,
                            "end": 1146
                          },
                          "start": 1118,
                          "end": 1147
                        }
                      ],
                      "start": 1065,
                      "end": 1157
                    },
                    "start": 1063,
                    "end": 1157
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1061,
                  "end": 1157
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
                    "start": 1166,
                    "end": 1168
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
                              "start": 1171,
                              "end": 1172
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1171,
                            "end": 1172
                          }
                        ],
                        "start": 1170,
                        "end": 1173
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
                                "start": 1177,
                                "end": 1178
                              },
                              "typeArguments": null,
                              "start": 1177,
                              "end": 1178
                            },
                            "start": 1175,
                            "end": 1178
                          },
                          "start": 1174,
                          "end": 1178
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1183,
                          "end": 1187
                        },
                        "start": 1180,
                        "end": 1187
                      },
                      "start": 1170,
                      "end": 1187
                    },
                    "start": 1168,
                    "end": 1187
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1166,
                  "end": 1188
                }
              ],
              "start": 949,
              "end": 1194
            },
            "declare": false,
            "start": 934,
            "end": 1194
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 1221,
              "end": 1222
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
                  "start": 1231,
                  "end": 1235
                },
                "typeArguments": null,
                "start": 1231,
                "end": 1235
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
                    "start": 1261,
                    "end": 1262
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
                              "start": 1268,
                              "end": 1274
                            },
                            "start": 1266,
                            "end": 1274
                          },
                          "start": 1265,
                          "end": 1274
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1279,
                          "end": 1285
                        },
                        "start": 1276,
                        "end": 1285
                      },
                      "start": 1264,
                      "end": 1285
                    },
                    "start": 1262,
                    "end": 1285
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1261,
                  "end": 1286
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
                    "start": 1327,
                    "end": 1329
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
                              "start": 1335,
                              "end": 1341
                            },
                            "start": 1333,
                            "end": 1341
                          },
                          "start": 1332,
                          "end": 1341
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
                              "start": 1346,
                              "end": 1352
                            },
                            "start": 1344,
                            "end": 1352
                          },
                          "start": 1343,
                          "end": 1352
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 1357,
                          "end": 1364
                        },
                        "start": 1354,
                        "end": 1364
                      },
                      "start": 1331,
                      "end": 1364
                    },
                    "start": 1329,
                    "end": 1364
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1327,
                  "end": 1365
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
                    "start": 1406,
                    "end": 1408
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
                              "start": 1411,
                              "end": 1412
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1411,
                            "end": 1412
                          }
                        ],
                        "start": 1410,
                        "end": 1413
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
                                "start": 1417,
                                "end": 1418
                              },
                              "typeArguments": null,
                              "start": 1417,
                              "end": 1418
                            },
                            "start": 1415,
                            "end": 1418
                          },
                          "start": 1414,
                          "end": 1418
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1423,
                          "end": 1429
                        },
                        "start": 1420,
                        "end": 1429
                      },
                      "start": 1410,
                      "end": 1429
                    },
                    "start": 1408,
                    "end": 1429
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1406,
                  "end": 1430
                }
              ],
              "start": 1236,
              "end": 1468
            },
            "declare": false,
            "start": 1211,
            "end": 1468
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1484,
              "end": 1489
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
                    "start": 1520,
                    "end": 1521
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
                                    "start": 1541,
                                    "end": 1544
                                  },
                                  "start": 1541,
                                  "end": 1544
                                },
                                "start": 1539,
                                "end": 1544
                              },
                              "start": 1538,
                              "end": 1544
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1547,
                              "end": 1553
                            },
                            "start": 1545,
                            "end": 1553
                          },
                          "start": 1537,
                          "end": 1554
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
                                  "start": 1571,
                                  "end": 1577
                                },
                                "start": 1569,
                                "end": 1577
                              },
                              "start": 1568,
                              "end": 1577
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1580,
                              "end": 1586
                            },
                            "start": 1578,
                            "end": 1586
                          },
                          "start": 1567,
                          "end": 1587
                        }
                      ],
                      "start": 1523,
                      "end": 1597
                    },
                    "start": 1521,
                    "end": 1597
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1520,
                  "end": 1597
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
                    "start": 1606,
                    "end": 1608
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
                              "start": 1611,
                              "end": 1612
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1611,
                            "end": 1612
                          }
                        ],
                        "start": 1610,
                        "end": 1613
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
                                "start": 1617,
                                "end": 1618
                              },
                              "typeArguments": null,
                              "start": 1617,
                              "end": 1618
                            },
                            "start": 1615,
                            "end": 1618
                          },
                          "start": 1614,
                          "end": 1618
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
                            "start": 1623,
                            "end": 1624
                          },
                          "typeArguments": null,
                          "start": 1623,
                          "end": 1624
                        },
                        "start": 1620,
                        "end": 1624
                      },
                      "start": 1610,
                      "end": 1624
                    },
                    "start": 1608,
                    "end": 1624
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1606,
                  "end": 1625
                }
              ],
              "start": 1490,
              "end": 1631
            },
            "declare": false,
            "start": 1474,
            "end": 1631
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1658,
              "end": 1660
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
                  "start": 1669,
                  "end": 1674
                },
                "typeArguments": null,
                "start": 1669,
                "end": 1674
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
                    "start": 1700,
                    "end": 1701
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
                              "start": 1707,
                              "end": 1713
                            },
                            "start": 1705,
                            "end": 1713
                          },
                          "start": 1704,
                          "end": 1713
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1718,
                          "end": 1724
                        },
                        "start": 1715,
                        "end": 1724
                      },
                      "start": 1703,
                      "end": 1724
                    },
                    "start": 1701,
                    "end": 1724
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1700,
                  "end": 1725
                }
              ],
              "start": 1675,
              "end": 1771
            },
            "declare": false,
            "start": 1648,
            "end": 1771
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1798,
              "end": 1800
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
                  "start": 1809,
                  "end": 1814
                },
                "typeArguments": null,
                "start": 1809,
                "end": 1814
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
                    "start": 1840,
                    "end": 1842
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
                              "start": 1845,
                              "end": 1846
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1845,
                            "end": 1846
                          }
                        ],
                        "start": 1844,
                        "end": 1847
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
                                "start": 1851,
                                "end": 1852
                              },
                              "typeArguments": null,
                              "start": 1851,
                              "end": 1852
                            },
                            "start": 1849,
                            "end": 1852
                          },
                          "start": 1848,
                          "end": 1852
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1857,
                          "end": 1863
                        },
                        "start": 1854,
                        "end": 1863
                      },
                      "start": 1844,
                      "end": 1863
                    },
                    "start": 1842,
                    "end": 1863
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1840,
                  "end": 1864
                }
              ],
              "start": 1815,
              "end": 1910
            },
            "declare": false,
            "start": 1788,
            "end": 1910
          }
        ],
        "start": 928,
        "end": 1912
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 897,
      "end": 1912
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 118,
  "end": 1912
}
```
