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
                            "start": 198,
                            "end": 201
                          },
                          "start": 198,
                          "end": 201
                        },
                        "start": 196,
                        "end": 201
                      },
                      "start": 195,
                      "end": 201
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 204,
                      "end": 208
                    },
                    "start": 202,
                    "end": 208
                  },
                  "start": 190,
                  "end": 209
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
                          "start": 226,
                          "end": 232
                        },
                        "start": 224,
                        "end": 232
                      },
                      "start": 223,
                      "end": 232
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
                          "start": 237,
                          "end": 243
                        },
                        "start": 235,
                        "end": 243
                      },
                      "start": 234,
                      "end": 243
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 246,
                      "end": 250
                    },
                    "start": 244,
                    "end": 250
                  },
                  "start": 218,
                  "end": 251
                }
              ],
              "start": 160,
              "end": 257
            },
            "declare": false,
            "start": 145,
            "end": 257
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 284,
              "end": 285
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
                  "start": 294,
                  "end": 298
                },
                "typeArguments": null,
                "start": 294,
                "end": 298
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
                            "start": 332,
                            "end": 335
                          },
                          "start": 332,
                          "end": 335
                        },
                        "start": 330,
                        "end": 335
                      },
                      "start": 329,
                      "end": 335
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 338,
                      "end": 344
                    },
                    "start": 336,
                    "end": 344
                  },
                  "start": 324,
                  "end": 345
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
                          "start": 394,
                          "end": 400
                        },
                        "start": 392,
                        "end": 400
                      },
                      "start": 391,
                      "end": 400
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
                          "start": 405,
                          "end": 411
                        },
                        "start": 403,
                        "end": 411
                      },
                      "start": 402,
                      "end": 411
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 414,
                      "end": 420
                    },
                    "start": 412,
                    "end": 420
                  },
                  "start": 386,
                  "end": 421
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
                          "start": 467,
                          "end": 468
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 467,
                        "end": 468
                      }
                    ],
                    "start": 466,
                    "end": 469
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
                            "start": 473,
                            "end": 474
                          },
                          "typeArguments": null,
                          "start": 473,
                          "end": 474
                        },
                        "start": 471,
                        "end": 474
                      },
                      "start": 470,
                      "end": 474
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 477,
                      "end": 483
                    },
                    "start": 475,
                    "end": 483
                  },
                  "start": 462,
                  "end": 484
                }
              ],
              "start": 299,
              "end": 522
            },
            "declare": false,
            "start": 274,
            "end": 522
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 541,
              "end": 546
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
                            "start": 585,
                            "end": 588
                          },
                          "start": 585,
                          "end": 588
                        },
                        "start": 583,
                        "end": 588
                      },
                      "start": 582,
                      "end": 588
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 591,
                      "end": 597
                    },
                    "start": 589,
                    "end": 597
                  },
                  "start": 577,
                  "end": 598
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
                          "start": 615,
                          "end": 621
                        },
                        "start": 613,
                        "end": 621
                      },
                      "start": 612,
                      "end": 621
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 624,
                      "end": 630
                    },
                    "start": 622,
                    "end": 630
                  },
                  "start": 607,
                  "end": 631
                }
              ],
              "start": 547,
              "end": 637
            },
            "declare": false,
            "start": 531,
            "end": 637
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null,
              "start": 664,
              "end": 666
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
                  "start": 675,
                  "end": 680
                },
                "typeArguments": null,
                "start": 675,
                "end": 680
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
                            "start": 714,
                            "end": 717
                          },
                          "start": 714,
                          "end": 717
                        },
                        "start": 712,
                        "end": 717
                      },
                      "start": 711,
                      "end": 717
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 720,
                      "end": 726
                    },
                    "start": 718,
                    "end": 726
                  },
                  "start": 706,
                  "end": 727
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
                          "start": 744,
                          "end": 750
                        },
                        "start": 742,
                        "end": 750
                      },
                      "start": 741,
                      "end": 750
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 753,
                      "end": 759
                    },
                    "start": 751,
                    "end": 759
                  },
                  "start": 736,
                  "end": 760
                }
              ],
              "start": 681,
              "end": 806
            },
            "declare": false,
            "start": 654,
            "end": 806
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I3",
              "optional": false,
              "typeAnnotation": null,
              "start": 833,
              "end": 835
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
                  "start": 844,
                  "end": 849
                },
                "typeArguments": null,
                "start": 844,
                "end": 849
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
                          "start": 880,
                          "end": 881
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 880,
                        "end": 881
                      }
                    ],
                    "start": 879,
                    "end": 882
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
                            "start": 886,
                            "end": 887
                          },
                          "typeArguments": null,
                          "start": 886,
                          "end": 887
                        },
                        "start": 884,
                        "end": 887
                      },
                      "start": 883,
                      "end": 887
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 890,
                      "end": 896
                    },
                    "start": 888,
                    "end": 896
                  },
                  "start": 875,
                  "end": 897
                }
              ],
              "start": 850,
              "end": 936
            },
            "declare": false,
            "start": 823,
            "end": 936
          }
        ],
        "start": 139,
        "end": 938
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 118,
      "end": 938
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MemberWithCallSignature",
        "optional": false,
        "typeAnnotation": null,
        "start": 947,
        "end": 970
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
              "start": 987,
              "end": 991
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
                    "start": 1022,
                    "end": 1023
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
                                    "start": 1047,
                                    "end": 1050
                                  },
                                  "start": 1047,
                                  "end": 1050
                                },
                                "start": 1045,
                                "end": 1050
                              },
                              "start": 1044,
                              "end": 1050
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 1053,
                              "end": 1057
                            },
                            "start": 1051,
                            "end": 1057
                          },
                          "start": 1039,
                          "end": 1058
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
                                  "start": 1079,
                                  "end": 1085
                                },
                                "start": 1077,
                                "end": 1085
                              },
                              "start": 1076,
                              "end": 1085
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 1088,
                              "end": 1092
                            },
                            "start": 1086,
                            "end": 1092
                          },
                          "start": 1071,
                          "end": 1093
                        }
                      ],
                      "start": 1025,
                      "end": 1103
                    },
                    "start": 1023,
                    "end": 1103
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1022,
                  "end": 1103
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
                    "start": 1112,
                    "end": 1114
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
                                    "start": 1138,
                                    "end": 1141
                                  },
                                  "start": 1138,
                                  "end": 1141
                                },
                                "start": 1136,
                                "end": 1141
                              },
                              "start": 1135,
                              "end": 1141
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
                                  "start": 1146,
                                  "end": 1152
                                },
                                "start": 1144,
                                "end": 1152
                              },
                              "start": 1143,
                              "end": 1152
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 1155,
                              "end": 1159
                            },
                            "start": 1153,
                            "end": 1159
                          },
                          "start": 1130,
                          "end": 1160
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
                                  "start": 1181,
                                  "end": 1187
                                },
                                "start": 1179,
                                "end": 1187
                              },
                              "start": 1178,
                              "end": 1187
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
                                  "start": 1192,
                                  "end": 1198
                                },
                                "start": 1190,
                                "end": 1198
                              },
                              "start": 1189,
                              "end": 1198
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 1201,
                              "end": 1205
                            },
                            "start": 1199,
                            "end": 1205
                          },
                          "start": 1173,
                          "end": 1206
                        }
                      ],
                      "start": 1116,
                      "end": 1216
                    },
                    "start": 1114,
                    "end": 1216
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1112,
                  "end": 1216
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
                    "start": 1225,
                    "end": 1227
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
                              "start": 1234,
                              "end": 1235
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1234,
                            "end": 1235
                          }
                        ],
                        "start": 1233,
                        "end": 1236
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
                                "start": 1240,
                                "end": 1241
                              },
                              "typeArguments": null,
                              "start": 1240,
                              "end": 1241
                            },
                            "start": 1238,
                            "end": 1241
                          },
                          "start": 1237,
                          "end": 1241
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1246,
                          "end": 1250
                        },
                        "start": 1243,
                        "end": 1250
                      },
                      "start": 1229,
                      "end": 1250
                    },
                    "start": 1227,
                    "end": 1250
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1225,
                  "end": 1251
                }
              ],
              "start": 992,
              "end": 1257
            },
            "declare": false,
            "start": 977,
            "end": 1257
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 1284,
              "end": 1285
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
                  "start": 1294,
                  "end": 1298
                },
                "typeArguments": null,
                "start": 1294,
                "end": 1298
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
                    "start": 1324,
                    "end": 1325
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
                              "start": 1335,
                              "end": 1341
                            },
                            "start": 1333,
                            "end": 1341
                          },
                          "start": 1332,
                          "end": 1341
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1346,
                          "end": 1352
                        },
                        "start": 1343,
                        "end": 1352
                      },
                      "start": 1327,
                      "end": 1352
                    },
                    "start": 1325,
                    "end": 1352
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1324,
                  "end": 1353
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
                    "start": 1394,
                    "end": 1396
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
                              "start": 1407,
                              "end": 1413
                            },
                            "start": 1405,
                            "end": 1413
                          },
                          "start": 1404,
                          "end": 1413
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
                              "start": 1418,
                              "end": 1424
                            },
                            "start": 1416,
                            "end": 1424
                          },
                          "start": 1415,
                          "end": 1424
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 1429,
                          "end": 1436
                        },
                        "start": 1426,
                        "end": 1436
                      },
                      "start": 1398,
                      "end": 1436
                    },
                    "start": 1396,
                    "end": 1436
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1394,
                  "end": 1437
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
                    "start": 1478,
                    "end": 1480
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
                              "start": 1487,
                              "end": 1488
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1487,
                            "end": 1488
                          }
                        ],
                        "start": 1486,
                        "end": 1489
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
                                "start": 1493,
                                "end": 1494
                              },
                              "typeArguments": null,
                              "start": 1493,
                              "end": 1494
                            },
                            "start": 1491,
                            "end": 1494
                          },
                          "start": 1490,
                          "end": 1494
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1499,
                          "end": 1505
                        },
                        "start": 1496,
                        "end": 1505
                      },
                      "start": 1482,
                      "end": 1505
                    },
                    "start": 1480,
                    "end": 1505
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1478,
                  "end": 1506
                }
              ],
              "start": 1299,
              "end": 1544
            },
            "declare": false,
            "start": 1274,
            "end": 1544
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1560,
              "end": 1565
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
                    "start": 1596,
                    "end": 1597
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
                                    "start": 1621,
                                    "end": 1624
                                  },
                                  "start": 1621,
                                  "end": 1624
                                },
                                "start": 1619,
                                "end": 1624
                              },
                              "start": 1618,
                              "end": 1624
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1627,
                              "end": 1633
                            },
                            "start": 1625,
                            "end": 1633
                          },
                          "start": 1613,
                          "end": 1634
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
                                  "start": 1655,
                                  "end": 1661
                                },
                                "start": 1653,
                                "end": 1661
                              },
                              "start": 1652,
                              "end": 1661
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1664,
                              "end": 1670
                            },
                            "start": 1662,
                            "end": 1670
                          },
                          "start": 1647,
                          "end": 1671
                        }
                      ],
                      "start": 1599,
                      "end": 1681
                    },
                    "start": 1597,
                    "end": 1681
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1596,
                  "end": 1681
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
                    "start": 1690,
                    "end": 1692
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
                              "start": 1699,
                              "end": 1700
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1699,
                            "end": 1700
                          }
                        ],
                        "start": 1698,
                        "end": 1701
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
                                "start": 1705,
                                "end": 1706
                              },
                              "typeArguments": null,
                              "start": 1705,
                              "end": 1706
                            },
                            "start": 1703,
                            "end": 1706
                          },
                          "start": 1702,
                          "end": 1706
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
                            "start": 1711,
                            "end": 1712
                          },
                          "typeArguments": null,
                          "start": 1711,
                          "end": 1712
                        },
                        "start": 1708,
                        "end": 1712
                      },
                      "start": 1694,
                      "end": 1712
                    },
                    "start": 1692,
                    "end": 1712
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1690,
                  "end": 1713
                }
              ],
              "start": 1566,
              "end": 1719
            },
            "declare": false,
            "start": 1550,
            "end": 1719
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1746,
              "end": 1748
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
                  "start": 1757,
                  "end": 1762
                },
                "typeArguments": null,
                "start": 1757,
                "end": 1762
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
                    "start": 1788,
                    "end": 1789
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
                              "start": 1799,
                              "end": 1805
                            },
                            "start": 1797,
                            "end": 1805
                          },
                          "start": 1796,
                          "end": 1805
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1810,
                          "end": 1816
                        },
                        "start": 1807,
                        "end": 1816
                      },
                      "start": 1791,
                      "end": 1816
                    },
                    "start": 1789,
                    "end": 1816
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1788,
                  "end": 1817
                }
              ],
              "start": 1763,
              "end": 1863
            },
            "declare": false,
            "start": 1736,
            "end": 1863
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1890,
              "end": 1892
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
                  "start": 1901,
                  "end": 1906
                },
                "typeArguments": null,
                "start": 1901,
                "end": 1906
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
                    "start": 1932,
                    "end": 1934
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
                              "start": 1941,
                              "end": 1942
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1941,
                            "end": 1942
                          }
                        ],
                        "start": 1940,
                        "end": 1943
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
                                "start": 1947,
                                "end": 1948
                              },
                              "typeArguments": null,
                              "start": 1947,
                              "end": 1948
                            },
                            "start": 1945,
                            "end": 1948
                          },
                          "start": 1944,
                          "end": 1948
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1953,
                          "end": 1959
                        },
                        "start": 1950,
                        "end": 1959
                      },
                      "start": 1936,
                      "end": 1959
                    },
                    "start": 1934,
                    "end": 1959
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1932,
                  "end": 1960
                }
              ],
              "start": 1907,
              "end": 2006
            },
            "declare": false,
            "start": 1880,
            "end": 2006
          }
        ],
        "start": 971,
        "end": 2008
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 940,
      "end": 2008
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 118,
  "end": 2008
}
```
