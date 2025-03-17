__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 118,
  "end": 2008,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 118,
      "end": 938,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 138,
        "name": "CallSignature",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 139,
        "end": 938,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 145,
            "end": 257,
            "id": {
              "type": "Identifier",
              "start": 155,
              "end": 159,
              "name": "Base",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 160,
              "end": 257,
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 190,
                  "end": 209,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 195,
                      "end": 201,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 196,
                        "end": 201,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 198,
                          "end": 201,
                          "literal": {
                            "type": "Literal",
                            "start": 198,
                            "end": 201,
                            "value": "a",
                            "raw": "'a'"
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 202,
                    "end": 208,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 204,
                      "end": 208
                    }
                  }
                },
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 218,
                  "end": 251,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 223,
                      "end": 232,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 224,
                        "end": 232,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 226,
                          "end": 232
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 234,
                      "end": 243,
                      "name": "y",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 235,
                        "end": 243,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 237,
                          "end": 243
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 244,
                    "end": 250,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 246,
                      "end": 250
                    }
                  }
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 274,
            "end": 522,
            "id": {
              "type": "Identifier",
              "start": 284,
              "end": 285,
              "name": "I",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 294,
                "end": 298,
                "expression": {
                  "type": "Identifier",
                  "start": 294,
                  "end": 298,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 299,
              "end": 522,
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 324,
                  "end": 345,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 329,
                      "end": 335,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 330,
                        "end": 335,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 332,
                          "end": 335,
                          "literal": {
                            "type": "Literal",
                            "start": 332,
                            "end": 335,
                            "value": "a",
                            "raw": "'a'"
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 336,
                    "end": 344,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 338,
                      "end": 344
                    }
                  }
                },
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 386,
                  "end": 421,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 391,
                      "end": 400,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 392,
                        "end": 400,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 394,
                          "end": 400
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 402,
                      "end": 411,
                      "name": "y",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 403,
                        "end": 411,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 405,
                          "end": 411
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 412,
                    "end": 420,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 414,
                      "end": 420
                    }
                  }
                },
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 462,
                  "end": 484,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 466,
                    "end": 469,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 467,
                        "end": 468,
                        "name": {
                          "type": "Identifier",
                          "start": 467,
                          "end": 468,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                      "start": 470,
                      "end": 474,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 471,
                        "end": 474,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 473,
                          "end": 474,
                          "typeName": {
                            "type": "Identifier",
                            "start": 473,
                            "end": 474,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 475,
                    "end": 483,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 477,
                      "end": 483
                    }
                  }
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 531,
            "end": 637,
            "id": {
              "type": "Identifier",
              "start": 541,
              "end": 546,
              "name": "Base2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 547,
              "end": 637,
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 577,
                  "end": 598,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 582,
                      "end": 588,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 583,
                        "end": 588,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 585,
                          "end": 588,
                          "literal": {
                            "type": "Literal",
                            "start": 585,
                            "end": 588,
                            "value": "a",
                            "raw": "'a'"
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 589,
                    "end": 597,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 591,
                      "end": 597
                    }
                  }
                },
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 607,
                  "end": 631,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 612,
                      "end": 621,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 613,
                        "end": 621,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 615,
                          "end": 621
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 622,
                    "end": 630,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 624,
                      "end": 630
                    }
                  }
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 654,
            "end": 806,
            "id": {
              "type": "Identifier",
              "start": 664,
              "end": 666,
              "name": "I2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 675,
                "end": 680,
                "expression": {
                  "type": "Identifier",
                  "start": 675,
                  "end": 680,
                  "name": "Base2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 681,
              "end": 806,
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 706,
                  "end": 727,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 711,
                      "end": 717,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 712,
                        "end": 717,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 714,
                          "end": 717,
                          "literal": {
                            "type": "Literal",
                            "start": 714,
                            "end": 717,
                            "value": "a",
                            "raw": "'a'"
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 718,
                    "end": 726,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 720,
                      "end": 726
                    }
                  }
                },
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 736,
                  "end": 760,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 741,
                      "end": 750,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 742,
                        "end": 750,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 744,
                          "end": 750
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 751,
                    "end": 759,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 753,
                      "end": 759
                    }
                  }
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 823,
            "end": 936,
            "id": {
              "type": "Identifier",
              "start": 833,
              "end": 835,
              "name": "I3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 844,
                "end": 849,
                "expression": {
                  "type": "Identifier",
                  "start": 844,
                  "end": 849,
                  "name": "Base2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 850,
              "end": 936,
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 875,
                  "end": 897,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 879,
                    "end": 882,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 880,
                        "end": 881,
                        "name": {
                          "type": "Identifier",
                          "start": 880,
                          "end": 881,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                      "start": 883,
                      "end": 887,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 884,
                        "end": 887,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 886,
                          "end": 887,
                          "typeName": {
                            "type": "Identifier",
                            "start": 886,
                            "end": 887,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 888,
                    "end": 896,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 890,
                      "end": 896
                    }
                  }
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 940,
      "end": 2008,
      "id": {
        "type": "Identifier",
        "start": 947,
        "end": 970,
        "name": "MemberWithCallSignature",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 971,
        "end": 2008,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 977,
            "end": 1257,
            "id": {
              "type": "Identifier",
              "start": 987,
              "end": 991,
              "name": "Base",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 992,
              "end": 1257,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1022,
                  "end": 1103,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1022,
                    "end": 1023,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1023,
                    "end": 1103,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 1025,
                      "end": 1103,
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "start": 1039,
                          "end": 1058,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1044,
                              "end": 1050,
                              "name": "x",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1045,
                                "end": 1050,
                                "typeAnnotation": {
                                  "type": "TSLiteralType",
                                  "start": 1047,
                                  "end": 1050,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 1047,
                                    "end": 1050,
                                    "value": "a",
                                    "raw": "'a'"
                                  }
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 1051,
                            "end": 1057,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 1053,
                              "end": 1057
                            }
                          }
                        },
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "start": 1071,
                          "end": 1093,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1076,
                              "end": 1085,
                              "name": "x",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1077,
                                "end": 1085,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 1079,
                                  "end": 1085
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 1086,
                            "end": 1092,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 1088,
                              "end": 1092
                            }
                          }
                        }
                      ]
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1112,
                  "end": 1216,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1112,
                    "end": 1114,
                    "name": "a2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1114,
                    "end": 1216,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 1116,
                      "end": 1216,
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "start": 1130,
                          "end": 1160,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1135,
                              "end": 1141,
                              "name": "x",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1136,
                                "end": 1141,
                                "typeAnnotation": {
                                  "type": "TSLiteralType",
                                  "start": 1138,
                                  "end": 1141,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 1138,
                                    "end": 1141,
                                    "value": "a",
                                    "raw": "'a'"
                                  }
                                }
                              },
                              "decorators": [],
                              "optional": false
                            },
                            {
                              "type": "Identifier",
                              "start": 1143,
                              "end": 1152,
                              "name": "y",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1144,
                                "end": 1152,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1146,
                                  "end": 1152
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 1153,
                            "end": 1159,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 1155,
                              "end": 1159
                            }
                          }
                        },
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "start": 1173,
                          "end": 1206,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1178,
                              "end": 1187,
                              "name": "x",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1179,
                                "end": 1187,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 1181,
                                  "end": 1187
                                }
                              },
                              "decorators": [],
                              "optional": false
                            },
                            {
                              "type": "Identifier",
                              "start": 1189,
                              "end": 1198,
                              "name": "y",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1190,
                                "end": 1198,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1192,
                                  "end": 1198
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 1199,
                            "end": 1205,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 1201,
                              "end": 1205
                            }
                          }
                        }
                      ]
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1225,
                  "end": 1251,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1225,
                    "end": 1227,
                    "name": "a3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1227,
                    "end": 1250,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 1229,
                      "end": 1250,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 1233,
                        "end": 1236,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 1234,
                            "end": 1235,
                            "name": {
                              "type": "Identifier",
                              "start": 1234,
                              "end": 1235,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                          "start": 1237,
                          "end": 1241,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1238,
                            "end": 1241,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1240,
                              "end": 1241,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1240,
                                "end": 1241,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1243,
                        "end": 1250,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1246,
                          "end": 1250
                        }
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
            "start": 1274,
            "end": 1544,
            "id": {
              "type": "Identifier",
              "start": 1284,
              "end": 1285,
              "name": "I",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 1294,
                "end": 1298,
                "expression": {
                  "type": "Identifier",
                  "start": 1294,
                  "end": 1298,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1299,
              "end": 1544,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1324,
                  "end": 1353,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1324,
                    "end": 1325,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1325,
                    "end": 1352,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 1327,
                      "end": 1352,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1332,
                          "end": 1341,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1333,
                            "end": 1341,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1335,
                              "end": 1341
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1343,
                        "end": 1352,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1346,
                          "end": 1352
                        }
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1394,
                  "end": 1437,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1394,
                    "end": 1396,
                    "name": "a2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1396,
                    "end": 1436,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 1398,
                      "end": 1436,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1404,
                          "end": 1413,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1405,
                            "end": 1413,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1407,
                              "end": 1413
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 1415,
                          "end": 1424,
                          "name": "y",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1416,
                            "end": 1424,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1418,
                              "end": 1424
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1426,
                        "end": 1436,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 1429,
                          "end": 1436
                        }
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1478,
                  "end": 1506,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1478,
                    "end": 1480,
                    "name": "a3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1480,
                    "end": 1505,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 1482,
                      "end": 1505,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 1486,
                        "end": 1489,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 1487,
                            "end": 1488,
                            "name": {
                              "type": "Identifier",
                              "start": 1487,
                              "end": 1488,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                          "start": 1490,
                          "end": 1494,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1491,
                            "end": 1494,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1493,
                              "end": 1494,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1493,
                                "end": 1494,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1496,
                        "end": 1505,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1499,
                          "end": 1505
                        }
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
            "start": 1550,
            "end": 1719,
            "id": {
              "type": "Identifier",
              "start": 1560,
              "end": 1565,
              "name": "Base2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1566,
              "end": 1719,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1596,
                  "end": 1681,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1596,
                    "end": 1597,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1597,
                    "end": 1681,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 1599,
                      "end": 1681,
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "start": 1613,
                          "end": 1634,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1618,
                              "end": 1624,
                              "name": "x",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1619,
                                "end": 1624,
                                "typeAnnotation": {
                                  "type": "TSLiteralType",
                                  "start": 1621,
                                  "end": 1624,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 1621,
                                    "end": 1624,
                                    "value": "a",
                                    "raw": "'a'"
                                  }
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 1625,
                            "end": 1633,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1627,
                              "end": 1633
                            }
                          }
                        },
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "start": 1647,
                          "end": 1671,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1652,
                              "end": 1661,
                              "name": "x",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1653,
                                "end": 1661,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 1655,
                                  "end": 1661
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 1662,
                            "end": 1670,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1664,
                              "end": 1670
                            }
                          }
                        }
                      ]
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1690,
                  "end": 1713,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1690,
                    "end": 1692,
                    "name": "a2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1692,
                    "end": 1712,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 1694,
                      "end": 1712,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 1698,
                        "end": 1701,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 1699,
                            "end": 1700,
                            "name": {
                              "type": "Identifier",
                              "start": 1699,
                              "end": 1700,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                          "start": 1702,
                          "end": 1706,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1703,
                            "end": 1706,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1705,
                              "end": 1706,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1705,
                                "end": 1706,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1708,
                        "end": 1712,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1711,
                          "end": 1712,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1711,
                            "end": 1712,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
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
            "start": 1736,
            "end": 1863,
            "id": {
              "type": "Identifier",
              "start": 1746,
              "end": 1748,
              "name": "I2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 1757,
                "end": 1762,
                "expression": {
                  "type": "Identifier",
                  "start": 1757,
                  "end": 1762,
                  "name": "Base2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1763,
              "end": 1863,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1788,
                  "end": 1817,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1788,
                    "end": 1789,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1789,
                    "end": 1816,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 1791,
                      "end": 1816,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1796,
                          "end": 1805,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1797,
                            "end": 1805,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1799,
                              "end": 1805
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1807,
                        "end": 1816,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1810,
                          "end": 1816
                        }
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
            "start": 1880,
            "end": 2006,
            "id": {
              "type": "Identifier",
              "start": 1890,
              "end": 1892,
              "name": "I3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 1901,
                "end": 1906,
                "expression": {
                  "type": "Identifier",
                  "start": 1901,
                  "end": 1906,
                  "name": "Base2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1907,
              "end": 2006,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1932,
                  "end": 1960,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1932,
                    "end": 1934,
                    "name": "a2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1934,
                    "end": 1959,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 1936,
                      "end": 1959,
                      "abstract": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 1940,
                        "end": 1943,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 1941,
                            "end": 1942,
                            "name": {
                              "type": "Identifier",
                              "start": 1941,
                              "end": 1942,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                          "start": 1944,
                          "end": 1948,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1945,
                            "end": 1948,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1947,
                              "end": 1948,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1947,
                                "end": 1948,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1950,
                        "end": 1959,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1953,
                          "end": 1959
                        }
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
